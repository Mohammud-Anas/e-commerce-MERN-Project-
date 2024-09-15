import { createSlice } from "@reduxjs/toolkit";

const myOrderSlice = createSlice({
  name: "order",
  initialState: {
    data: null,
  },
  reducers: {
    setOrderData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setOrderData } = myOrderSlice.actions;

export default myOrderSlice;
