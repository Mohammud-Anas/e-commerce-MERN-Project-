import { axiosInstanceCart } from "../utils/axios.js";

const getAllCartItems = async (userId) => {
  try {
    console.log(userId);
    const response = await axiosInstanceCart.get(`/allCartItems/${userId}`);

    return response;
  } catch (error) {
    return error.response;
  }
};
const removeItemFromCart = async (itemIds) => {
  try {
    console.log(itemIds);
    const response = await axiosInstanceCart.post(`/deleteCartItem`, {
      cartItemIds: itemIds,
    });

    return response;
  } catch (error) {
    return error.response;
  }
};
const chanageItemQuantity = async (cartItemId, newQuantity) => {
  try {
    console.log(cartItemId);
    const response = await axiosInstanceCart.post("/changeQuantity", {
      cartItemId,
      newQuantity,
    });

    return response;
  } catch (error) {
    return error.response;
  }
};
export { chanageItemQuantity, getAllCartItems, removeItemFromCart };
