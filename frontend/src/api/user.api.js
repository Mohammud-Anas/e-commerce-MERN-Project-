import { axiosInstance } from "../utils/axios.js";
const registerUser = async (data) => {
  try {
    const response = await axiosInstance.post("/register", data);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post("/login", data);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
const logoutUser = async (_id) => {
  try {
    const response = await axiosInstance.post("/logout", { _id: _id });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
const loginWithRefreshToken = async () => {
  try {
    const response = await axiosInstance.post("/auth");
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
export { loginUser, loginWithRefreshToken, logoutUser, registerUser };
