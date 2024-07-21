// Inside cart-slice.js

import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const storedCart = cookies.get("cart");

const initialCartState = {
  cartItems: storedCart ? storedCart : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const existingItemIndex = state.cartItems?.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (existingItemIndex !== -1) {
        state.cartItems = state.cartItems?.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ];
      }

      cookies.set("cart", state.cartItems, { path: "/", maxAge: 24 * 60 * 60 });
    },
    deleteItemFromCart(state, action) {
      const itemIdToDelete = action.payload.id;

      const updatedCartItems = state.cartItems
        .map((item) => {
          if (item.productId === itemIdToDelete) {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return null;
          }
          return item;
        })
        .filter(Boolean);

      state.cartItems = updatedCartItems;

      // Check if the cart is empty, and if so, remove the "cart" cookie
      if (updatedCartItems.length === 0) {
        cookies.remove("cart", { path: "/" });
      } else {
        cookies.set("cart", state.cartItems, { path: "/", maxAge: 36000 });
      }
    },

    setCartFromCookies(state, action) {
      if (Array.isArray(action.payload)) {
        state.cartItems = action.payload;
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
