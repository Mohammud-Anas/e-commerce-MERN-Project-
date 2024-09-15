import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../api/user.api.js";
import Modal from "../components/Modal.jsx";
import { userlogin } from "../store/authSlice.js";
import { setProfile } from "../store/userSlice";

const SignUp = () => {
  const [modalData, setModalData] = useState({
    title: "",
    content: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [togglePassword, seTogglePassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data);
      if (response.status > 200) {
        setModalData({ ...modalData, content: response.data });
        document.getElementById("my_modal_5").showModal();
      } else {
        dispatch(userlogin());
        dispatch(setProfile(response.data.data.user));
        console.log(response.data);
        navigate("/");
      }
      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
      if (error) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        const { data, status, headers } = error.response;

        console.log(data, status, headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
    }
  };
  return (
    <>
      <div className="lg:m-10">
        <form
          className="relative border border-gray-100 space-y-3 max-w-screen-md min-h-full mx-auto rounded-md bg-white p-6 shadow-xl lg:p-10"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="mb-6 text-xl font-semibold lg:text-2xl">
            Register as new User
          </h1>

          <div className="grid gap-3 md:grid-cols-1">
            <div>
              <label className=""> Full Name </label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                {...register("fullname", {
                  required: "first name is required",
                })}
              />
            </div>
          </div>
          <div>
            <label className=""> Address </label>
            <input
              type="text"
              placeholder="address"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              {...register("address", {
                required: "address is required",
              })}
            />
          </div>
          <div>
            <label className=""> Pincode </label>
            <input
              type="number"
              placeholder="Pincode"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              {...register("pincode", {
                required: "pincode is required",
              })}
            />
          </div>
          <div>
            <label className=""> Email Address </label>
            <input
              type="email"
              placeholder="Info@example.com"
              className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
          </div>
          <div>
            <label className="" for="password">
              {" "}
              Password{" "}
            </label>
            <div className=" flex items-center gap-2">
              <input
                type={`${togglePassword ? "text" : "password"}`}
                id="password"
                placeholder="Enter Your Password"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <span
                onClick={() => seTogglePassword(!togglePassword)}
                className=" cursor-pointer"
              >
                {togglePassword ? <GoEyeClosed /> : <GoEye />}
              </span>
            </div>
          </div>
          <div className="grid gap-3 lg:grid-cols-2">
            <div>
              <label className="">
                {" "}
                Phone: <span className="text-sm text-gray-400"></span>{" "}
              </label>
              <input
                type="text"
                placeholder="+543 5445 0543"
                className="mt-2 h-12 w-full rounded-md bg-gray-100 px-3"
                {...register("phone", {
                  required: "phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number, must be 10 digits",
                  },
                })}
              />
              {errors.phone && (
                <p className=" text-red-600">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
            >
              Get Started
            </button>
          </div>
          <p className="text-center">
            Already Registered?
            <NavLink
              to={"/login"}
              className={
                "cursor-pointer text-center font-semibold w-full text-blue-950 hover:text-blue-600 text-xl"
              }
            >
              Login
            </NavLink>
          </p>
        </form>
      </div>
      <Modal content={modalData.content} />
    </>
  );
};

export default SignUp;
