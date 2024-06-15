import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
