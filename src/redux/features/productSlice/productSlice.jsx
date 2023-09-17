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
  cart: [],
  error: null,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addToCartData = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (addToCartData) {
        addToCartData.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity === 1 ? (item.quantity = 1) : item.quantity--;
    },
    removeItem: (state, action) => {
      const deleteItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = deleteItem;
    },
  },
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

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  productSlice.actions;
export default productSlice.reducer;
