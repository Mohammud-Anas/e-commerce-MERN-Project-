import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",

  initialState: {
    product: null,
    productsList: null,
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setProductsList: (state, action) => {
      state.productsList = action.payload;
    },
  },
});

export const { setProduct, setProductsList } = productSlice.actions;

export default productSlice;
