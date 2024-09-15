import { axiosInstanceCart, axiosInstanceProduct } from "../utils/axios.js";
const addProduct = async (data) => {
  try {
    const response = await axiosInstanceProduct.post("/addProduct", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
const deleteProduct = async (productId) => {
  try {
    const response = await axiosInstanceProduct.post(
      `/deleteProduct/:${productId}`
    );
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
const updateProductDetails = async (data) => {
  try {
    const response = await axiosInstanceProduct.patch(
      "/updateProductDetails",
      data
    );
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
const deleteProductImage = async (data) => {
  try {
    const response = await axiosInstanceProduct.patch(
      "/deleteProductImage",
      data
    );
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
const addProductImage = async (data) => {
  try {
    const response = await axiosInstanceProduct.patch("/addProductImage", data);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
const searchProducts = async (data) => {
  try {
    const response = await axiosInstanceProduct.post(`/search`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
const getProductDetails = async (productId) => {
  try {
    const response = await axiosInstanceProduct.get(`/${productId}`);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
const addProductToCart = async (data) => {
  try {
    const response = await axiosInstanceCart.post(`/addToCart`, data);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
const changeProductThumbnail = async (data) => {
  try {
    const response = await axiosInstanceProduct.patch("/changeThumbnail", data);
    return response;
  } catch (error) {
    console.log(error.response);
    return error.response;
  }
};
export {
  addProduct,
  addProductImage,
  addProductToCart,
  changeProductThumbnail,
  deleteProduct,
  deleteProductImage,
  getProductDetails,
  searchProducts,
  updateProductDetails,
};
