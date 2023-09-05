import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("fetchProducts", () => {
  return;
});

const initialState = {
  loading: false,
  data: [],
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
      state.data = [];
    });
  },
});

export default productSlice.reducer;
