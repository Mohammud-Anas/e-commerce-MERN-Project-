import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerSeller } from "../../api/seller.api.js";
import Modal from "../../components/Modal.jsx";
import { sellerlogin } from "../../store/authSlice.js";
import { setSellerProfile } from "../../store/sellerSlice.js";

const AdminSignUp = () => {
  const dispatch = useDispatch();
  const [modalData, setModalData] = useState({
    title: "",
    content: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await registerSeller(data);
    console.log(response);
    if (response.status > 200) {
      setModalData({ ...modalData, content: response.data.message });
      document.getElementById("my_modal_5").showModal();
    } else {
      dispatch(setSellerProfile(response.data.data));
      dispatch(sellerlogin());
    }
  };

  return (
    <>
      <div>
        <form
          className="m-[0px] md:mx-[200px] md:my-[50px] bg-white md:p-[50px] p-[10px] md:rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-2xl font-semibold text-neutral-900 mb-[30px]">
            Register as Seller
          </h1>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Fullname
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                {...register("sellername", {
                  required: "Fullname is required",
                })}
              />
              {errors.sellername && (
                <span className="text-red-500 text-xs">
                  {errors.sellername.message}
                </span>
              )}
            </div>

            <div>
              <label
                for="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Flowbite"
                {...register("company", { required: "Company is required" })}
              />{" "}
              {errors.company && (
                <span className="text-red-500 text-xs">
                  {errors.company.message}
                </span>
              )}
            </div>
            <div>
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone number must be in the format 123-45-678",
                  },
                })}
              />{" "}
              {errors.phoneNumber && (
                <span className="text-red-500 text-xs">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
            <div className="mb-6">
              <label
                for="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="company address  "
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <span className="text-red-500 text-xs">
                  {errors.address.message}
                </span>
              )}
            </div>
            <div className="mb-6">
              <label
                for="pincode"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="company address  "
                {...register("pincode", {
                  required: "Pincode is required",
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "Pincode must be 6 digits",
                  },
                })}
              />{" "}
              {errors.pincode && (
                <span className="text-red-500 text-xs">
                  {errors.pincode.message}
                </span>
              )}
            </div>
          </div>
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              {...register("email", {
                required: "Email address is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-xs">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-6 ">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>

            <div className=" flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/,
                    message:
                      "Password must be at least 8 characters long and contain letters and numbers",
                  },
                })}
              />
              <span
                className="relative left-[-30px] cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>

            {errors.password && (
              <span className="text-red-500 text-xs">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="mb-6">
            <label
              for="confirm_password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <div className="flex items-center">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sms rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                {...register("confirm_password", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                })}
              />
              <span
                className="relative left-[-30px] cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                />
              </span>
            </div>

            {errors.confirm_password && (
              <span className="text-red-500 text-xs">
                {errors.confirm_password.message}
              </span>
            )}
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                {...register("terms", {
                  required: "You must agree to the terms and conditions",
                })}
              />
            </div>
            <label
              for="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
            {errors.terms && (
              <span className="text-red-500 text-xs ms-2">
                {errors.terms.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      <Modal content={modalData.content} />
    </>
  );
};

export default AdminSignUp;
