import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProductToCart } from "../api/product.api.js";
import { setProduct } from "../store/productSlice.js";
const ProductCard = ({ item }) => {
  const isLoggedIn = useSelector((state) => state.auth.userLoggedIn);
  const user = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const viewProduct = (product) => {
    dispatch(setProduct(product));
    navigate(`/product/${product._id}`);
  };
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
    <>
      <div className="bg-background rounded-lg overflow-hidden shadow-lg">
        <img
          src={item.thumbnail}
          alt={item.title}
          width={400}
          height={300}
          className="w-full h-48 object-contain"
          style={{ aspectRatio: "400/300", objectFit: "contain" }}
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">
            {item.title}
          </h3>

          <div className="flex items-center justify-between sm:flex-row flex-col">
            <span className="text-lg text-light-blue-900 font-semibold">
              {item.price}
            </span>
            <button
              size="sm"
              className=" bg-blue-gray-800 text-white border p-3 rounded-lg hover:bg-blue-600 "
              onClick={() => addToCartHandler(item._id)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
    // <div className="bg-white shadow-lg mt-[40px] rounded-lg max-w-[250px] dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
    //   <NavLink to={""}>
    //     <img
    //       className="rounded-t-lg p-6 hover:scale-125 duration-300"
    //       src={item.thumbnail}
    //       alt="product image"
    //     />
    //   </NavLink>
    //   <div className="px-5 pb-5">
    //     <NavLink to={""}>
    //       <h3 className="text-gray-900 font-semibold text-lg tracking-tight dark:text-white line-clamp-2">
    //         {item.title}
    //       </h3>
    //     </NavLink>
    //     <div className="flex items-center mt-2.5 mb-5">
    //       <svg
    //         className="w-5 h-5 text-yellow-300"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //       </svg>
    //       <svg
    //         className="w-5 h-5 text-yellow-300"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //       </svg>
    //       <svg
    //         className="w-5 h-5 text-yellow-300"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //       </svg>
    //       <svg
    //         className="w-5 h-5 text-yellow-300"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //       </svg>
    //       <svg
    //         className="w-5 h-5 text-yellow-300"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    //       </svg>
    //       <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
    //         5.0
    //       </span>
    //     </div>
    //     <div className="flex items-center justify-between">
    //       <span className="text-xl font-bold text-gray-900 dark:text-white">
    //         {item.price}
    //       </span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductCard;
