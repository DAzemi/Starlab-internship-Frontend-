import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import cartSlice from "./cart-slice";
import productsSlice from "./products-slice";
import productbyidSlice from "./productbyId-slice";
import adminDashboardSlice from "./adminDashboard-slice";
import adminUsersSlice from "./adminUsers-slice";
import adminProductsSlice from "./adminProducts-slice";
import adminStocksSlice from "./adminStocks-slice";
import adminCategoriesSlice from "./adminCategories-slice";
import adminOrdersSlice from "./adminOrders-slice";
import emailVerificationSlice from "./email-verification-slice";
import forgotPasswordSlice from "./forgotPasswordSlice";
import resetPasswordSlice from "./resetPasswordSlice";
import checkoutReducer from "./checkout-slice";
import favoriteSlice from "./favorite-slice";
import topProductsReducer from "./topProducts-slice";
const store = configureStore({
  reducer: {
    user: userSlice,
    favorite: favoriteSlice,
    cart: cartSlice,
    products: productsSlice,
    productsbyId: productbyidSlice,
    admin: adminDashboardSlice,
    adminUsers: adminUsersSlice,
    adminProducts: adminProductsSlice,
    adminStocks: adminStocksSlice,
    adminCategories: adminCategoriesSlice,
    adminOrders: adminOrdersSlice,
    emailVerification: emailVerificationSlice,
    forgotPassword: forgotPasswordSlice,
    resetPassword: resetPasswordSlice,
    checkout: checkoutReducer,
    topProducts: topProductsReducer,
  },
});

export default store;
