import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productIds: [],
  quantities: [],
  total: 0,
  address: {},
  paymentDetails: {},
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setProductIds: (state, action) => {
      state.productIds = action.payload;
    },
    setQuantities: (state, action) => {
      state.quantities = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setPaymentDetails: (state, action) => {
      state.paymentDetails = action.payload;
    },
  },
});

export const {
  setProductIds,
  setQuantities,
  setTotal,
  setPaymentDetails,
  setAddress,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
