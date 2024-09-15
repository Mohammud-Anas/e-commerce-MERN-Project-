import "flowbite";
import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "../components/Loader.jsx"; // Assuming you have a Loader component for fallback
import AdminLayout from "../pages/adminPages/AdminDashboard.jsx";
import AdminSignUp from "../pages/adminPages/AdminSignUp.jsx";
import Dashboard from "../pages/adminPages/Dashboard.jsx";
// Lazy load components
const AddProduct = lazy(() => import("../pages/adminPages/AddProduct.jsx"));
const AdminLogin = lazy(() => import("../pages/adminPages/AdminLogin.jsx"));
const Analytics = lazy(() => import("../pages/adminPages/Analytics.jsx"));

const Orders = lazy(() => import("../pages/adminPages/Orders.jsx"));
const Products = lazy(() => import("../pages/adminPages/Products.jsx"));
const Settings = lazy(() => import("../pages/adminPages/Settings.jsx"));
const Users = lazy(() => import("../pages/adminPages/Users.jsx"));

const MainRoutes = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {location.pathname !== "/login" && location.pathname !== "/signup" ? (
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="add-product" element={<AddProduct />} />

            <Route path="orders" element={<Orders />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        ) : null}
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/signup" element={<AdminSignUp />} />
      </Routes>
    </Suspense>
  );
};

const SellerRoutes = () => {
  return <MainRoutes />;
};

export default SellerRoutes;
