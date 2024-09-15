import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    subTotal: 0,
  },
  reducers: {
    setCartProducts: (state, action) => {
      state.products = action.payload;
    },
    removeCartItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
    },
    emptyCart: (state) => {
      state.products = [];
      state.subTotal = 0;
    },
    changeQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload;
      const productIndex = state.products.findIndex(
        (product) => product._id === itemId
      );
      if (productIndex !== -1) {
        state.products[productIndex].quantity = newQuantity;
      }
    },
    setSubTotal: (state, action) => {
      state.subTotal = action.payload;
    },
  },
});

export const {
  setCartProducts,
  removeCartItem,
  changeQuantity,
  setSubTotal,
  emptyCart,
} = cartSlice.actions;

export default cartSlice;
