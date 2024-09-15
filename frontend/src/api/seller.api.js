import { axiosInstanceSeller } from "../utils/axios.js";
const registerSeller = async (data) => {
  try {
    const response = await axiosInstanceSeller.post("/register", data);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
const loginSeller = async (data) => {
  try {
    const response = await axiosInstanceSeller.post("/login", data);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
const logoutSeller = async (_id) => {
  try {
    const response = await axiosInstanceSeller.post("/logout", { _id: _id });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
const loginWithRefreshToken = async () => {
  try {
    const response = await axiosInstanceSeller.post("/auth");
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
export { loginSeller, loginWithRefreshToken, logoutSeller, registerSeller };
