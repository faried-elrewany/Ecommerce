import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./Components/HomeCarousal.jsx";
import Header from "./Components/ComplexNavbar.jsx";
import "./NavBarStyles.css";
import "./index.css";
import Admin from "./Admin.jsx";

// User Pages
import UserFavoriteProductsPage from "./Pages/User/UserFavoriteProductsPage.jsx";
import UserAllAddresPage from "./Pages/User/UserAllAddresPage.jsx";
import UserProfilePage from "./Pages/User/UserProfilePage.jsx";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage.jsx";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage.jsx";

// main app pages
import SignUp from "./Pages/Auth/SignUp.jsx";
import Login from "./Pages/Auth/Login";
import HomePage from "./Pages/Home/HomePage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import ProductDetalisPage from "./Pages/Products/ProductDetalisPage";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
import CartPage from "./Pages/Cart/CartPage";
import Footer from "./Components/Footer.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/allcategory" element={<AllCategoryPage />} />
        <Route path="/allbrand" element={<AllBrandPage />} />
        <Route path="/products" element={<ShopProductsPage />} />
        <Route path="/products/:id" element={<ProductDetalisPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    {/* الصفحات الرئيسية */}
    {/* <HomePage /> */}
    {/* <CartPage /> */}
    {/* <AllBrandPage /> */}
    {/* <AllCategoryPage /> */}
    {/* <UserAddAddressPage /> */}
    {/* <ProductDetalisPage /> */}
    {/* <ShopProductsPage /> */}

    {/* ******************** صفحات الخاصة بالادمن  */}
  </React.StrictMode>
);
