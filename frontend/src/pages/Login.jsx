import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../api/user.api.js";
import { userlogin } from "../store/authSlice.js";
import { setProfile } from "../store/userSlice.js";
import logo from "/web_logo.png";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalData, setModalData] = useState({
    title: "",
    content: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (credentials) => {
    console.log(credentials);
    const response = await loginUser(credentials);
    console.log(response);

    if (response.status > 200) {
      setModalData({
        ...modalData,
        content: response.data,
        title: "Invalid Login Request",
      });
      document.getElementById("my_modal_5").showModal();
    } else {
      dispatch(userlogin());
      dispatch(setProfile(response.data.data.user));
      const redirectUrl = localStorage.getItem("redirectAfterLogin") || "/";

      navigate(redirectUrl);
      localStorage.removeItem("redirectAfterLogin");
    }
  };
  return (
    <>
      <div className="flex h-screen w-screen items-center overflow-hidden px-2">
        {/* <!-- Login --> */}
        <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
          <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
          <div className="mx-auto mb-2 space-y-3">
            <img src={logo} alt="logo" width={"150px"} className="mx-auto" />
            <h1 className="text-center text-3xl font-bold text-gray-700">
              Sign in
            </h1>
            <p className="text-gray-500">Sign in to access your account</p>
          </div>

          <div>
            <div className="relative mt-2 w-full">
              <input
                type="text"
                id="emailOrPhone"
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="email or phone number "
                {...register("emailOrPhone", {
                  required: "Email or Phone number is required",
                  pattern: {
                    value:
                      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$|^[0-9]{10}$/i,
                    message: "Invalid email address or phone number",
                  },
                })}
              />
              <label
                for="emailOrPhone"
                className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
              >
                {" "}
                Enter Your Email or phone number{" "}
              </label>
              {errors.emailOrPhone && (
                <p className="text-red">{errors.emailOrPhone.message}</p>
              )}
            </div>
          </div>

          <div>
            <div className="relative mt-2 w-full">
              <input
                type="text"
                id="password"
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" Enter Your Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <label
                for="password"
                className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
              >
                {" "}
                Enter Your Password
              </label>
              {errors.password && <p>{errors.password.message}</p>}
            </div>
          </div>
          <div className="flex w-full items-center">
            <button
              className="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white"
              onClick={handleSubmit(onSubmit)}
            >
              Login
            </button>
            <NavLink
              className="w-full text-center text-sm font-medium text-gray-600 hover:underline"
              href="#"
            >
              Forgot your password?
            </NavLink>
          </div>
          <p className="text-center text-gray-600">
            Don't have an account?
            <NavLink
              to={"/signUp"}
              className="whitespace-nowrap font-semibold text-gray-900 hover:underline"
            >
              Sign up
            </NavLink>
          </p>
        </div>
        {/* <!-- /Login --> */}
      </div>
    </>
  );
};

export default Login;
