import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import { thunk } from "redux-thunk";
import authSlice from "./authSlice.js";
import cartSlice from "./cartSlice.js";
import myOrderSlice from "./orderSlice.js";
import productSlice from "./productSlice.js";
import sellerSlice from "./sellerSlice.js";
import userSlice from "./userSlice.js";
// Combine all slices into a root reducer
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  user: userSlice.reducer,
  seller: sellerSlice.reducer,
  product: productSlice.reducer,
  cart: cartSlice.reducer,
  order: myOrderSlice.reducer,
});

// Create the persist configuration
const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore non-serializable values for specific actions or paths
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
        ignoredPaths: ["persist.persistor"],
      },
    }).concat(thunk),
});

// Create the persistor
const persistor = persistStore(store);

export { persistor, store };
