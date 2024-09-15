import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductToCart } from "../api/product.api.js";
import StarRating from "../components/StarRating";

const ProductPage = () => {
  const user = useSelector((state) => state.user.profile);
  const navigate = useNavigate();
  const product = useSelector((state) => state.product.product);
  const isLoggedIn = useSelector((state) => state.auth.userLoggedIn);
  const [mainImage, setMainImage] = useState(product.thumbnail);
  const [toggleEvent, setToggleEvent] = useState(true);

  const addToCartHandler = async (productId) => {
    if (isLoggedIn) {
      const userId = user._id;
      const data = { productId, userId };
      const res = await addProductToCart(data);
      console.log(res);
      navigate("/cart");
    } else {
      const currentUrl = window.location.pathname;
      localStorage.setItem("redirectAfterLogin", currentUrl);
      navigate("/login");
    }
  };
  return (
    <section className="p-0 sm:py-16 ">
      <div className="container mx-auto px-4">
        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full max-w-full object-cover"
                    src={mainImage}
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row overflow-x-scroll items-start lg:flex-col  lg:overflow-y-auto lg:overflow-x-hidden ">
                  {product.images.slice(0, 6).map((image, index) => (
                    <button
                      type="button"
                      className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center"
                      key={index}
                      onMouseOver={() => setMainImage(image)}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={image}
                        alt=""
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
              {product.title}
            </h1>

            <div className="mt-5 flex items-center">
              <StarRating rating={4.5} />
            </div>

            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-xl font-bold">{product.price}/_</h1>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-2 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                onClick={() => addToCartHandler(product._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 mr-3 h- w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Add to cart
              </button>
            </div>

            <ul className="mt-8 space-y-2">
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  className="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    className=""
                  ></path>
                </svg>
              </li>

              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg
                  className="mr-2 block h-5 w-5 align-middle text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    className=""
                  ></path>
                </svg>
                Cancel Anytime
              </li>
              <div className=" p-4 ">
                <h3 className="text-xl font-semibold mb-4">
                  Product Specifications
                </h3>
                <ul className="space-y-2">
                  {product.description}
                  {/* {Object.entries(product.product_attributes).map(
                    ([key, value], index) => (
                      <li key={index} className="flex justify-between">
                        <span className="font-medium">{key}:</span>
                        <span className="text-gray-600">{value}</span>
                      </li>
                    )
                  )} */}
                </ul>
              </div>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="border-b border-gray-300">
              <nav className="flex gap-4">
                <a
                  href="#"
                  title=""
                  className={`border-b-2 ${
                    toggleEvent ? "border-gray-900 " : ""
                  }py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800`}
                  onClick={() => setToggleEvent(true)}
                >
                  {" "}
                  Description
                </a>

                <a
                  href="#"
                  title=""
                  className={`inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600  ${
                    toggleEvent ? "" : "border-gray-900 "
                  }`}
                  onClick={() => setToggleEvent(false)}
                >
                  Reviews
                  <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                    {" "}
                    {product.product_num_reviews}{" "}
                  </span>
                </a>
              </nav>
            </div>
            {toggleEvent ? (
              <div className="mt-8 flow-root sm:mt-12">
                <h1 className="text-3xl font-bold">Delivered To Your Door</h1>
                <p className="mt-4">{product.description}</p>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <StarRating rating={4.5} />

                <p className="font-semibold">MOHD</p>
                <p className="mt-5">
                  This rating component is part of a larger, open-source library
                  of Tailwind CSS components. Learn more by going to the
                  official{" "}
                  <a
                    className="text-blue-600 hover:underline"
                    href="#"
                    target="_blank"
                  >
                    Flowbite Documentation
                  </a>
                  .
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
