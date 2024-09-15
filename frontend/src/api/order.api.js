import { axiosInstanceOrder } from "../utils/axios.js";
const createOrder = async (data) => {
  try {
    const response = await axiosInstanceOrder.post("/createOrder", {
      ...data,
    });
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
const getAllOrders = async (data) => {
  try {
    const response = await axiosInstanceOrder.post(`/allorders`, { ...data });
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};

export { createOrder, getAllOrders };
