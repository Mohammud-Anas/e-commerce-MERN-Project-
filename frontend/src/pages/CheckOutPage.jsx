import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import logo from "../../public/logo.png";
import { removeItemFromCart } from "../api/cart.api.js";
import { createOrder } from "../api/order.api.js";
import Processing from "../components/Processing.jsx";
import { emptyCart } from "../store/cartSlice.js";
import { axiosInstancePayment } from "../utils/axios.js";
const CheckOutPage = () => {
  const cartProducts = useSelector((state) => state.cart.products);
  const deleteCartItem = async () => {
    const productIds = cartProducts.map((item) => item._id);
    console.log(productIds);
    try {
      const deletedCartItem = await removeItemFromCart(productIds);
      console.log(deletedCartItem);
      dispatch(emptyCart());
    } catch (error) {
      console.error("Error removing items from cart:", error); // 📌 Added error handling
    }
  };
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  // const [customerData, setCustomerData] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const orderInfo = useSelector((state) => state.order);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.profile);
  const subTotal = useSelector((state) => state.cart.subTotal);
  const onSubmit = async (data) => {
    console.log("Form Data: ", data);
    const currency = "INR";
    const receiptId = `TOPShop-${uuidv4().slice(0, 24)}`;
    const createdOrder = await axiosInstancePayment.post(
      "/create_payment_order",
      { amount: subTotal * 100, currency, receipt: receiptId }
    );
    console.log(createdOrder.data);
    const paymentOrder = await createdOrder.data.data;

    var options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: subTotal * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: currency,
      name: "TopShop", //your business name
      description: "Test Transaction",
      image: logo,
      order_id: paymentOrder.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        console.log(response);
        console.log("razorpay_payment_id :", response.razorpay_payment_id);
        console.log("razorpay_order_id :", response.razorpay_order_id);
        console.log("razorpay_signature :", response.razorpay_signature);

        const validatedResponse = await axiosInstancePayment.post(
          "validate_payment_order",
          {
            razorpay_signature: response.razorpay_signature,
            razorpay_payment_id: response.razorpay_payment_id,
            order_id: paymentOrder.id,
          }
        );
        if (validatedResponse.status === 200) {
          const payment = {
            paymentId: response.razorpay_payment_id,
            method: "Razorpay",
            status: "Completed",
          };
          // dispatch(
          //   setOrderData({
          //     payment,
          //     totalAmount: subTotal,
          //     customerInfo: data,
          //     userId: user._id,
          //   })
          // );
          const products = await cartProducts.map((product) => {
            const { title, price, product_owner } = product.productDetails[0];
            return {
              title,
              price,
              quantity: product.quantity,
              productId: product.product,
              product_owner,
            };
          });
          const orderInfo = {
            payment,
            totalAmount: subTotal,
            customerInfo: data,
            userId: user._id,
            product: [...products],
          };
          setLoader(true);

          await new Promise((resolve) => setTimeout(resolve, 2000));

          const res = await createOrder(orderInfo);
          console.log(res);
          setLoader(false);
          deleteCartItem();
          navigate("/my_orders");
        }
        console.log(validatedResponse);
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: data.name, //your customer's name
        email: data.email, //your customer's email
        contact: data.phone, //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: data.address,
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = await new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    });
    rzp1.open();
    console.log(rzp1);
    event.preventDefault();
  };
  return (
    <>
      <section className="bg-white py-8 px-1 md:px-8 antialiased dark:bg-gray-900 md:py-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-screen-xl px-4 2xl:px-0"
        >
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                  Delivery Details
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="your_name"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="your_name"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Bonnie Green"
                      {...register("name", {
                        required: "Name is required",
                        pattern: {
                          value: /^[A-Za-z\s]+$/,
                          message: "Name should only contain letters",
                        },
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="name@gmail.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="+91 9876543210"
                      {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a valid 10-digit phone number",
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Address"
                      {...register("address", {
                        required: "Address is required",
                      })}
                    />
                    {errors.address && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.address.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="pincode"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pincode
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Pincode"
                      {...register("pincode", {
                        required: "Pincode is required",
                        pattern: {
                          value: /^[1-9][0-9]{5}$/,
                          message: "Enter a valid 6-digit pincode",
                        },
                      })}
                    />
                    {errors.pincode && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.pincode.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
              <div className="flow-root">
                <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Subtotal
                    </dt>
                    {subTotal && (
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        Rs.{subTotal}
                      </dd>
                    )}
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-500">0</dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Store Pickup
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      Rs.0.0
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Tax
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      Rs.0.0
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    {subTotal && (
                      <dd className="text-base font-bold text-gray-900 dark:text-white">
                        Rs.{subTotal}
                      </dd>
                    )}
                  </dl>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Proceed to Payment
                </button>

                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Have an account?{" "}
                  <a
                    href="#"
                    title=""
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </a>{" "}
                  to checkout.
                </p>
              </div>
            </div>
          </div>
        </form>
      </section>
      {loader && <Processing />}
    </>
  );
};

export default CheckOutPage;
