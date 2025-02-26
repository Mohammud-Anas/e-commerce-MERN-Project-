import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  chanageItemQuantity,
  getAllCartItems,
  removeItemFromCart,
} from "../api/cart.api.js";
import Spinner from "../components/Spinner.jsx";
import {
  changeQuantity,
  removeCartItem,
  setCartProducts,
  setSubTotal,
} from "../store/cartSlice.js";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.profile);
  const cartProducts = useSelector((state) => state.cart.products);
  const [loaderOpen, setLoaderOpen] = useState(false);

  const quantityHandler = async (changeType, itemId, prevQuantity) => {
    setLoaderOpen(true);

    if (changeType === "increment") {
      const newQuantity = prevQuantity + 1;
      const res = await chanageItemQuantity(itemId, newQuantity);

      console.log(res);
      if (res.status == 200) {
        dispatch(changeQuantity({ itemId, newQuantity }));
        setLoaderOpen(false);
      }
      setLoaderOpen(false);
    }
    if (changeType === "decrement") {
      if (prevQuantity > 1) {
        const newQuantity = prevQuantity - 1;
        const res = await chanageItemQuantity(itemId, newQuantity);
        console.log(res);
        if (res.status == 200) {
          dispatch(changeQuantity({ itemId, newQuantity }));
          setLoaderOpen(false);
        }
        setLoaderOpen(false);
      }
    }
  };

  useEffect(() => {
    if (user && user._id) {
      fetchAllCartItems(user._id);
    }
  }, [user]);

  const fetchAllCartItems = async (userId) => {
    try {
      const res = await getAllCartItems(userId);
      if (res.status === 200) {
        dispatch(setCartProducts(res.data.data));
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const calculateSubTotal = (cartProducts) => {
    if (cartProducts && cartProducts.length !== 0) {
      return cartProducts.reduce((total, product) => {
        const priceString = product.productDetails[0].price.replace(
          /[^\d.-]/g,
          ""
        );
        const priceNumber = parseFloat(priceString);
        const totalAmount = priceNumber * product.quantity;
        return total + totalAmount;
      }, 0);
    }
    return 0;
  };

  const Subtotal = calculateSubTotal(cartProducts);

  const checkoutHandler = async () => {
    setLoaderOpen(true);
    dispatch(setSubTotal(Subtotal));

    setLoaderOpen(false);
    navigate("/cart/checkout");
  };

  const deleteItemHandler = async (itemId) => {
    setLoaderOpen(true);
    const res = await removeItemFromCart(itemId);
    if (res.status === 200) {
      dispatch(removeCartItem(itemId));
    }
    setLoaderOpen(false);
  };

  return (
    <>
      <section className="bg-gray-100 py-12 sm:py-16 lg:py-20">
        {loaderOpen && <Spinner />}
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
          </div>
          <div className="mx-auto mt-8 max-w-2xl md:mt-12">
            <div className="bg-white shadow">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                {cartProducts.length === 0 ? (
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">
                      No products in cart
                    </p>
                  </div>
                ) : (
                  <div className="flow-root">
                    <ul className="-my-8">
                      {cartProducts.map((product, index) => {
                        const priceString =
                          product.productDetails[0].price.replace(
                            /[^\d.-]/g,
                            ""
                          );
                        const priceNumber = parseFloat(priceString);
                        const totalAmount = priceNumber * product.quantity;
                        return (
                          <li
                            className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                            key={index}
                          >
                            <div className="shrink-0">
                              <img
                                className="h-24 w-24 max-w-full rounded-lg object-cover"
                                src={product.productDetails[0].thumbnail}
                                alt=""
                              />
                            </div>
                            <div className="relative flex flex-1 flex-col justify-between">
                              <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                <div className="pr-8 sm:pr-5">
                                  <p className="text-base font-semibold text-gray-900">
                                    {product.productDetails[0].title}
                                  </p>
                                </div>
                                <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                  <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                    {"₹" + totalAmount}
                                  </p>
                                  <div className="sm:order-1">
                                    <div className="mx-auto flex h-8 items-stretch text-gray-600">
                                      <button
                                        className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                        onClick={() =>
                                          quantityHandler(
                                            "decrement",
                                            product._id,
                                            product.quantity
                                          )
                                        }
                                      >
                                        -
                                      </button>
                                      <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                                        {product.quantity}
                                      </div>
                                      <button
                                        className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                                        onClick={() =>
                                          quantityHandler(
                                            "increment",
                                            product._id,
                                            product.quantity
                                          )
                                        }
                                      >
                                        +
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                <button
                                  type="button"
                                  className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                                  onClick={() => deleteItemHandler(product._id)}
                                >
                                  <svg
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {cartProducts.length > 0 && (
                  <>
                    <div className="mt-6 border-t border-b py-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-400">Subtotal</p>
                        <p className="text-lg font-semibold text-gray-900">
                          {"₹" + Subtotal}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-400">Shipping</p>
                        <p className="text-lg font-semibold text-gray-900">
                          ₹0.00
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Total</p>
                      <p className="text-2xl font-semibold text-gray-900">
                        <span className="text-xs font-normal text-gray-400">
                          ₹
                        </span>{" "}
                        {Subtotal}
                      </p>
                    </div>
                    <div className="mt-6 text-center">
                      <button
                        onClick={checkoutHandler}
                        type="button"
                        className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                      >
                        Checkout
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* loader component */}
    </>
  );
};

export default CartPage;
