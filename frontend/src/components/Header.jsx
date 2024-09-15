import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import avatar from "../../public/avatar.jpg";
import { searchProducts } from "../api/product.api.js";
import { logoutUser } from "../api/user.api.js";
import { userlogout } from "../store/authSlice.js";
import { setProductsList } from "../store/productSlice.js";
import { clearProfile } from "../store/userSlice.js";
import Processing from "./Processing.jsx";
import logo from "/logo.png";
const Header = () => {
  const cart = useSelector((state) => state.cart.products);
  const cartLenght = Object.keys(cart).length;
  const isLoggedIn = useSelector((state) => state.auth.userLoggedIn);
  const profile = useSelector((state) => state.user.profile);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showProcessing, toggleProcessing] = useState(false);
  const [showSearchBox, toggleSearchBox] = useState(false);
  const [limit, setLimit] = useState(8);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const searchRef = useRef(null);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      toggleSearchBox(false);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputValue.length > 0) {
      toggleProcessing(true);

      console.log(inputValue);
      const res = await searchProducts({ query: inputValue, limit: limit });
      console.log(res);
      const searchedProducts = res.data.data;
      if (searchedProducts.length > 0) {
        dispatch(setProductsList(searchedProducts));
        navigate(`/products/${inputValue.toLowerCase()}`);
      }

      toggleProcessing(false);
    }
  };
  const logoutAndClearState = () => {
    // Clear sessionStorage
    sessionStorage.removeItem("persist:root");
    // Reset the Redux state
  };
  const logoutHandler = async (_id) => {
    if (!_id) return;
    const response = await logoutUser(_id);
    console.log(response);
    if (response.statusText == "OK") {
      dispatch(userlogout());
      dispatch(clearProfile());
      console.log(response);
      logoutAndClearState();
      navigate("/");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      {showProcessing && <Processing />}
      {/* top header */}
      <div id="top_of_navbar" className="w-[100%] h-[30px] bg-gray-700  ">
        <div className="item-center justify-between px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl relative top-0 hidden md:flex">
          <div className="flex items-center">
            <p className="text-white">24/7 Customer service 1-800-234-5678</p>
          </div>
          <div className=" flex items-center gap-4">
            <NavLink to={"/"} className="text-white cursor-pointer">
              Shipping & Return
            </NavLink>
            <NavLink to={"/"} className="text-white cursor-pointer">
              Track Order
            </NavLink>
          </div>
        </div>
      </div>
      {/* main nav bar */}
      <header>
        <div className="bg-white border-b border-gray-100">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-between h-16 lg:h-[72px]">
              {/* hamburger menu for small devices */}
              <button
                type="button"
                className="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              {/* hamburger menu for small devices */}
              <div className="flex items-center flex-shrink-0 ml-4 lg:ml-0">
                <NavLink
                  to={"/"}
                  className="flex rounded focus:outline-none justify-center items-center "
                >
                  <img
                    className="sm:w-auto sm:h-[200px] w-[110px] h-[110px] mt-6"
                    src={logo}
                    alt=""
                  />
                </NavLink>
              </div>

              {/*  */}

              <div className="flex items-center justify-end ml-auto z-50">
                <div className="hidden lg:flex lg:items-center lg:space-x-8">
                  {isLoggedIn ? (
                    <div className="h-full bg-gray-200 flex justify-center items-center dark:bg-gray-500">
                      <div className="bg-white dark:bg-gray-800 w-64  flex justify-center items-center">
                        <div
                          onClick={() => setOpen(!open)}
                          className={`relative border-b-4 border-transparent py-1 ${
                            open
                              ? "border-indigo-700 transform transition duration-300"
                              : ""
                          }`}
                        >
                          <div className="flex justify-center items-center space-x-3 cursor-pointer">
                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                              <img
                                src={avatar}
                                alt="avatar"
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="font-semibold dark:text-white text-gray-900 text-lg">
                              <div className="cursor-pointer">
                                {profile.fullname}
                              </div>
                            </div>
                          </div>
                          {open && (
                            <div className="absolute w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5">
                              <ul className="space-y-3 dark:text-white">
                                <li className="font-medium">
                                  <NavLink
                                    to={""}
                                    className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                                  >
                                    <div className="mr-3">
                                      <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        ></path>
                                      </svg>
                                    </div>
                                    Account
                                  </NavLink>
                                </li>
                                <li className="font-medium">
                                  <NavLink
                                    to={"/my_orders"}
                                    className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                                  >
                                    <div className="mr-3">
                                      <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        ></path>
                                      </svg>
                                    </div>
                                    My Orders
                                  </NavLink>
                                </li>
                                <li className="font-medium">
                                  <NavLink
                                    to={""}
                                    className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                                  >
                                    <div className="mr-3">
                                      <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        ></path>
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        ></path>
                                      </svg>
                                    </div>
                                    Setting
                                  </NavLink>
                                </li>
                                <hr className="dark:border-gray-700" />
                                <li className="font-medium">
                                  <button
                                    onClick={() => logoutHandler(profile._id)}
                                    className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
                                  >
                                    <div className="mr-3 text-red-600">
                                      <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                        ></path>
                                      </svg>
                                    </div>
                                    Logout
                                  </button>
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {" "}
                      <NavLink
                        to={"/admin-pannel/login"}
                        className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      >
                        {" "}
                        Seller Account
                      </NavLink>
                      <NavLink
                        to={"/signUp"}
                        className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      >
                        {" "}
                        SignUp
                      </NavLink>
                      <NavLink
                        to={"/login"}
                        className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      >
                        {" "}
                        Login{" "}
                      </NavLink>
                    </>
                  )}
                </div>

                <div className="flex items-center justify-end space-x-5">
                  <span
                    className="hidden w-px h-6 bg-gray-200 lg:block"
                    aria-hidden="true"
                  ></span>

                  <button
                    type="button"
                    className="p-2 -m-2 text-gray-900 transition-all duration-200 hover:text-gray-700"
                    onClick={() => toggleSearchBox(!showSearchBox)}
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>

                  <span
                    className="w-px h-6 bg-gray-200 lg:hidden"
                    aria-hidden="true"
                  ></span>

                  <button
                    type="button"
                    className="inline-flex items-center p-2 -m-2 text-gray-900 transition-all duration-200 lg:ml-6 hover:text-gray-700"
                    onClick={() =>
                      navigate(`${isLoggedIn ? "/cart" : "/login"}`)
                    }
                  >
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    <span className="inline-flex items-center justify-center w-5 h-5 ml-1 text-xs font-bold text-white bg-gray-600 rounded-full">
                      {cartLenght}
                    </span>
                  </button>
                </div>
              </div>

              {/*  */}
            </div>
          </div>
        </div>
        {/* search box */}
        {showSearchBox && (
          <div
            className={`mx-auto absolute top-[120px]  md:top-[65px] md:left-[45%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-screen max-w-screen-md md:w-[600px] leading-6 z-50 animate-slide-fade-in   transition-opacity duration-500 ease-in-out h-`}
            ref={searchRef}
          >
            <form
              className="relative mx-auto flex w-full max-w-xl items-center justify-between rounded-md border shadow-lg"
              onSubmit={handleSubmit}
            >
              <svg
                className="absolute left-2 block h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" className=""></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65" className=""></line>
              </svg>
              <input
                type="text"
                name="search"
                value={inputValue}
                className="h-14 w-full rounded-md py-4 pr-40 pl-12 outline-none focus:ring-2"
                placeholder="City, Address, Zip :"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute right-0 mr-1 inline-flex h-12 items-center justify-center rounded-lg bg-gray-900 px-10 font-medium text-white focus:ring-4 hover:bg-gray-700"
              >
                Search
              </button>
            </form>
          </div>
        )}
      </header>
      {/* bottom header */}

      {/* mobile menu side bar */}
    </>
  );
};

export default Header;
