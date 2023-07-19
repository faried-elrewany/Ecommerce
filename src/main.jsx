import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/ComplexNavbar.jsx";
import "./NavBarStyles.css";
import "./index.css";

// User Pages
import UserFavoriteProductsPage from "./Pages/User/UserFavoriteProductsPage.jsx";
import UserProfilePage from "./Pages/User/UserProfilePage.jsx";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage.jsx";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage.jsx";
import UserAllAddresPage from "./Pages/User/UserAllAddresPage.jsx";

// Admin Pages
import AdminAllOrders from "./Pages/Admin/AdminAllOrders.jsx";
import AdminAddBrand from "./Pages/Admin/AdminAddBrand.jsx";
import AdminAllProducts from "./Pages/Admin/AdminAllProducts.jsx";
import AddNewProduct from "./Pages/Admin/AddNewProduct.jsx";
import AddCategory from "./Pages/Admin/AddCategory.jsx";

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
import User from "./Pages/User/User.jsx";
import Admin from "./Pages/Admin/Admin.jsx";
import ErrorPage from "./Pages/Error/ErrorPage.jsx";
import AddSubCategory from "./Pages/Admin/AddSubCategory.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/allcategory" element={<AllCategoryPage />} />
        <Route path="/allbrand" element={<AllBrandPage />} />
        <Route path="/products" element={<ShopProductsPage />} />
        <Route path="/products/:id" element={<ProductDetalisPage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/user" element={<User />}>
          <Route index element={<UserAllOrdersPage />} />
          <Route path="all-orders" element={<UserAllOrdersPage />} />
          <Route path="add-address" element={<UserAddAddressPage />} />
          <Route path="profile" element={<UserProfilePage />} />
          <Route path="addresses" element={<UserAllAddresPage />} />
          <Route path="wishlist" element={<UserFavoriteProductsPage />} />
        </Route>

        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminAllOrders />} />
          <Route path="all-orders" element={<AdminAllOrders />} />
          <Route path="add-brand" element={<AdminAddBrand />} />
          <Route path="all-products" element={<AdminAllProducts />} />
          <Route path="add-product" element={<AddNewProduct />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="add-sub-category" element={<AddSubCategory />} />
          <Route path="add-address" element={<UserAddAddressPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
