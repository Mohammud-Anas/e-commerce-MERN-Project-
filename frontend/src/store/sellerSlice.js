import { createSlice } from "@reduxjs/toolkit";

const sellerSlice = createSlice({
  name: "seller",
  initialState: {
    sellerProfile: null,
  },
  reducers: {
    setSellerProfile: (state, action) => {
      state.sellerProfile = action.payload;
    },
    clearSellerProfile: (state) => {
      state.sellerProfile = null;
    },
  },
});

export const { setSellerProfile, clearSellerProfile } = sellerSlice.actions;

export default sellerSlice;
