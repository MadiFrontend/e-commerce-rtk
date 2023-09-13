import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const BASE_URL =  'https://fakestoreapi.com/products';

// export const fetchProducts = createAsyncThunk(
//   "productSlice/fetchProducts",
//   async () => {
//     return fetch("https://fakestoreapi.com/products").then((response) =>
//       response.json()
//     );
//   }
// );
export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (bulider) => {
    bulider.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    bulider.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    bulider.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = "you have error";
      state.data = [];
    });
  },
});

export default productSlice.reducer;
