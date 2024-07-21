import { createSlice } from "@reduxjs/toolkit";

const productbyidSlice = createSlice({
  name: "productsbyId",
  initialState: {
    product: null, // Initialize as null
    productImages: [],
  },
  reducers: {
    setProductbyId: (state, action) => {
      state.product = action.payload;
    },
    setProductImages: (state, action) => {
      state.productImages = action.payload;
    },
  },
});

export const { setProductbyId, setProductImages } = productbyidSlice.actions;

export const fetchProductById = (productId) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/getProduct/${productId}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch the product details for productId: ${productId}`
      );
    }

    const data = await response.json();
    console.log("Fetched product data: ", data); // Log the data
    dispatch(setProductbyId(data));
  } catch (error) {
    console.error("Fetch product error:", error);
  }
};

export const fetchProductImages = (productId) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/getProductImages/${productId}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch the product images for productId: ${productId}`
      );
    }

    const data = await response.json();
    console.log("Fetched product images: ", data);
    dispatch(setProductImages(data));
  } catch (error) {
    console.log("Fetch product error: ", error);
  }
};

export default productbyidSlice.reducer;
