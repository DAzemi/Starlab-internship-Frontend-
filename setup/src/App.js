import { Fragment, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Homepage from "./components/pages/home";
import AboutUs from "./components/pages/about-us";
import Contact from "./components/pages/contact";
import Cart from "./components/pages/cart";
import Login from "./components/pages/login";

import Product from "./components/pages/product";
import Checkout from "./components/pages/checkout";
import CheckoutAddress from "./components/pages/address";
import Payment from "./components/pages/payment";
import Register from "./components/pages/register";
import Products from "./components/products/Products";
import AdminDashboard from "./components/pages/admin/adminDashboard";
import AdminUsers from "./components/pages/admin/adminUsers";
import AdminProducts from "./components/pages/admin/adminProduct";
import AdminInsertProducts from "./components/pages/admin/adminInsertProducts";
import AdminEditProduct from "./components/pages/admin/adminEditProduct";
import AdminStock from "./components/pages/admin/adminStock";
import AdminInsertStocks from "./components/pages/admin/adminInsertStocks";
import AdminEditStock from "./components/pages/admin/adminEditStock";
import AdminCategories from "./components/pages/admin/adminCategories";
import AdminInsertCategories from "./components/pages/admin/adminInsertCategories";
import AdminEditCategory from "./components/pages/admin/adminEditCategory";
import AdminOrders from "./components/pages/admin/adminOrders";
import { useLocation } from "react-router-dom";
import ForgotPassword from "./components/pages/forgotPassword";
import Setnewpassword from "./components/pages/resetPassword";
import CheckMailbox from "./components/pages/forgotPassword/checkMailbox";
import ProtectedRoute from "./utils/ProtectedRoute";
import AllDone from "./components/pages/all-done";
import { VerifyToken } from "./components/pages/verifyEmail/verifyToken";
import { VerifyEmail } from "./components/pages/verifyEmail/verifyEmail";
import GoogleAuth from "./components/pages/register/GoogleAuth";
import ScrollToTopButton from "./components/UI/ScrollToTopButton";
import { useSelector } from "react-redux";
import Profile from "./components/pages/profile";
import NotFound from "./components/pages/not-found";
import OrderConfirmation from "./components/pages/orderconfirmaition/OrderConfirmation";
import PrivacyPolicy from "./components/pages/privacypolicy";
import CostumerSupport from "./components/pages/costumerSupport";
import TermsConditions from "./components/pages/termsConditions";

import Features from "./components/pages/features";
import Deliverydetails from"./components/pages/delivery-details";
import Career from "./components/pages/career";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchModal from "./components/modals/searchModal/SearchModal";
import Orders from "./components/pages/profile/orders";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Favorites from "./components/pages/profile/Favorites";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const location = useLocation();
  const token = useSelector((state) => state.user.token);
  const isAdmin = location.pathname.startsWith("/admin");
  const isVerifyEmailRoute = location.pathname.startsWith("/verifyEmail");
  const isResetPasswordRoute = location.pathname.startsWith("/resetPassword");
  const hasToken = isVerifyEmailRoute && location.pathname.split("/").pop();
  const hasResetToken =
    isResetPasswordRoute && location.pathname.split("/").pop();
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK_TEST);

  console.log(location.pathname);
  console.log(searchTerm);
  console.log("stripePromise", stripePromise);

  if (
    (isVerifyEmailRoute && hasToken) ||
    (isResetPasswordRoute && hasResetToken)
  ) {
    return (
      <Fragment>
        <main>
          <Routes>
            <Route path="/verifyEmail/:token" element={<VerifyToken />} />
            <Route path="/resetPassword/:token" element={<Setnewpassword />} />
          </Routes>
        </main>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
      {!isAdmin &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/forgotPassword" &&
        location.pathname !== "/all-done" &&
        location.pathname !== "/sendEmailVerification" &&
        location.pathname !== "/checkMailbox" && (
          <header>
            <Header
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
              setModalOpen={setModalOpen}
            />
          </header>
        )}
      <main>
        <Routes>
          <Route path="/" element={<Homepage searchTerm={searchTerm} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/checkout/payment"
            element={
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/checkout/address" element={<CheckoutAddress />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkMailbox" element={<CheckMailbox />} />
          <Route path="/googleauth" element={<GoogleAuth />} />
          <Route
            path="/products"
            element={<Products searchTerm={searchTerm} />}
          />
          <Route element={<ProtectedRoute allowedRole="admin" />}>
            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/adminUsers" element={<AdminUsers />} />
            <Route path="/adminProducts" element={<AdminProducts />} />
            <Route
              path="/adminInsertProducts"
              element={<AdminInsertProducts />}
            />
            <Route
              path="/adminEditProduct/:productId"
              element={<AdminEditProduct />}
            />
            <Route path="/adminStock" element={<AdminStock />} />
            <Route path="/adminInsertStocks" element={<AdminInsertStocks />} />
            <Route
              path="/adminEditStock/:product_stock_id"
              element={<AdminEditStock />}
            />
            <Route path="/adminCategories" element={<AdminCategories />} />
            <Route
              path="/adminInsertCategories"
              element={<AdminInsertCategories />}
            />
            <Route
              path="/adminEditCategory/:categoryId"
              element={<AdminEditCategory />}
            />
            <Route path="/adminOrders" element={<AdminOrders />} />
          </Route>

          <Route
            path="/profile"
            element={<ProtectedRoute allowedRole={["user", "admin"]} />}
          >
            <Route index element={<Profile />} />
          </Route>
          <Route
            path="/profile/orders"
            element={<ProtectedRoute allowedRole={["user", "admin"]} />}
          >
            <Route index element={<Orders />} />
          </Route>
          <Route path="/profile/favorites" element={<Favorites />} />

          <Route path="/product/:productId" element={<Product />} />

          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/all-done" element={<AllDone />} />
          <Route path="/product/:id" element={<Product />} />
          {/* <Route path="/order/:Id" element={<Deliverydetails/>} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/sendEmailVerification/" element={<VerifyEmail />} />
          <Route path="/orderconfirmation" element={<OrderConfirmation />} />

          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/costumerSupport" element={<CostumerSupport/>} />
          <Route path="/features" element={<Features/>}/>
          <Route path="/delivery-details" element={<Deliverydetails/>}/>
          
          
          <Route path="/termsConditions" element={<TermsConditions/>}/>
          <Route path="/career" element={<Career/>}/>


          <Route path="/termsConditions" element={<TermsConditions />} />
          <Route path="/career" element={<Career />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        {modalOpen && (
          <SearchModal
            searchTerm={searchTerm}
            setModalOpen={setModalOpen}
            setSearchTerm={setSearchTerm}
          />
        )}
        <ScrollToTopButton />
      </main>
      {!isAdmin &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/forgotPassword" &&
        location.pathname !== "/all-done" &&
        location.pathname !== "/sendEmailVerification" &&
        location.pathname !== "/checkMailbox" &&
        location.pathname !== "/checkout/payment" &&
        location.pathname !== "/checkout/address" && (
          <footer>
            <Footer />
          </footer>
        )}
    </Fragment>
  );
}

export default App;
