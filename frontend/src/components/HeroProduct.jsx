import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProduct } from "../store/productSlice.js";

const HeroProduct = ({ productArray, heading }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clickHandler = (product) => {
    dispatch(setProduct(product));
    navigate(`/product/${product._id}`);
  };
  return (
    <>
      <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              {heading}
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-4 ">
            {Array.isArray(productArray) &&
              productArray.map((product, index) => {
                const priceString = product.price.replace(/[^\d.-]/g, ""); // Removing non-numeric characters
                const priceNumber = parseFloat(priceString);
                const discount = Math.round(priceNumber * 0.2);
                const discountedPrice = priceNumber - discount;
                return (
                  <div
                    className="relative cursor-pointer rounded-2xl border shadow-xl p-4"
                    key={index}
                    onClick={() => clickHandler(product)}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        className="hover:scale-125 h-full w-full object-cover transition-all duration-300"
                        src={product?.thumbnail}
                        alt=""
                      />
                    </div>
                    <div className="absolute top-0 m-1 rounded-full bg-white">
                      <p className="text-[10px] rounded-full bg-black p-1 font-bold uppercase tracking-wide text-white sm:px-3 sm:py-1">
                        Sale
                      </p>
                    </div>
                    <div className="mt-4 flex items-start justify-between">
                      <div className="">
                        <h3 className="text-xs font-semibold sm:text-sm md:text-base">
                          <p to={""} title="" className="cursor-pointer">
                            {product.title}
                            <span
                              className="absolute"
                              aria-hidden="true"
                            ></span>
                          </p>
                        </h3>
                        <div className="mt-2 flex items-center">
                          <svg
                            className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              className=""
                            ></path>
                          </svg>
                          <svg
                            className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              className=""
                            ></path>
                          </svg>
                          <svg
                            className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              className=""
                            ></path>
                          </svg>
                          <svg
                            className="block h-3 w-3 align-middle text-black sm:h-4 sm:w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              className=""
                            ></path>
                          </svg>
                          <svg
                            className="block h-3 w-3 align-middle text-gray-400 sm:h-4 sm:w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                              className=""
                            ></path>
                          </svg>
                        </div>
                      </div>

                      <div className="text-right">
                        <del className="mt-px text-xs font-semibold text-gray-600 sm:text-sm">
                          {product.price}
                        </del>
                        <p className="text-xs font-normal sm:text-sm md:text-base">
                          {"₹" + discountedPrice.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroProduct;
