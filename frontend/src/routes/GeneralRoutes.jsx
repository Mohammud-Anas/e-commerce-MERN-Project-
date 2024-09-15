import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "../components/Loader.jsx";

// Lazy load components
const MyOrders = lazy(() => import("../pages/MyOrders.jsx"));
const Checkout = lazy(() => import("../pages/CheckOutPage.jsx"));
const Footer = lazy(() => import("../components/Footer.jsx"));
const Header = lazy(() => import("../components/Header.jsx"));
const AboutPage = lazy(() => import("../pages/About.jsx"));
const CartPage = lazy(() => import("../pages/CartPage.jsx"));
const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const Login = lazy(() => import("../pages/Login.jsx"));
const ProductList = lazy(() => import("../pages/ProductList.jsx"));
const ProductPage = lazy(() => import("../pages/ProductPage.jsx"));
const SignUp = lazy(() => import("../pages/SignUp.jsx"));
const MainRoutes = () => {
  const location = useLocation();
  return (
    <>
      <Suspense fallback={<Loader />}>
        {location.pathname !== "/login" &&
          location.pathname !== "/signUp" &&
          location.pathname !== "/dashboard" && <Header />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/my_orders" element={<MyOrders />} />
          <Route path="/cart/checkout" element={<Checkout />} />
          <Route path="/products/:productName" element={<ProductList />} />
        </Routes>
        {location.pathname !== "/login" &&
          location.pathname !== "/signUp" &&
          location.pathname !== "/dashboard" && <Footer />}
      </Suspense>
    </>
  );
};

const GeneralRoutes = () => {
  return (
    <>
      <MainRoutes />
    </>
  );
};

export default GeneralRoutes;
