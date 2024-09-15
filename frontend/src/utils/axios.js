import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1/users",
});
const axiosInstanceSeller = axios.create({
  baseURL: "http://localhost:8000/api/v1/sellers",
});
const axiosInstanceProduct = axios.create({
  baseURL: "http://localhost:8000/api/v1/products",
});
const axiosInstanceCart = axios.create({
  baseURL: "http://localhost:8000/api/v1/cart",
});
const axiosInstancePayment = axios.create({
  baseURL: "http://localhost:8000/api/v1/payment",
});
const axiosInstanceOrder = axios.create({
  baseURL: "http://localhost:8000/api/v1/order",
});

export {
  axiosInstance,
  axiosInstanceCart,
  axiosInstanceOrder,
  axiosInstancePayment,
  axiosInstanceProduct,
  axiosInstanceSeller,
};

// order ki api banani h
