import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    userLoggedIn: false,
    sellerLoggedIn: false,
  },
  reducers: {
    userlogin: (state) => {
      state.userLoggedIn = true;
    },
    userlogout: (state) => {
      state.userLoggedIn = false;
    },
    sellerlogin: (state) => {
      state.sellerLoggedIn = true;
    },
    sellerlogout: (state) => {
      state.sellerLoggedIn = false;
    },
  },
});
export const { userlogin, userlogout, sellerlogin, sellerlogout } =
  authSlice.actions;
export default authSlice;
