import React from "react";
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
import Login from "./Pages/Auth/Login.jsx";
import HomePage from "./Pages/Home/HomePage.jsx";
import AllBrandPage from "./Pages/Brand/AllBrandPage.jsx";
import AllCategoryPage from "./Pages/Category/AllCategoryPage.jsx";
import ProductDetalisPage from "./Pages/Products/ProductDetalisPage.jsx";
import ShopProductsPage from "./Pages/Products/ShopProductsPage.jsx";
import CartPage from "./Pages/Cart/CartPage.jsx";
import ErrorPage from "./Pages/Error/ErrorPage.jsx";
import AddSubCategory from "./Pages/Admin/AddSubCategory.jsx";
import SideBar from "./Components/Utility/SideBar.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/side" element={<SideBar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrandPage />} />
          <Route path="/products" element={<ShopProductsPage />} />
          <Route path="/products/:id" element={<ProductDetalisPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* User Pages */}
          <Route path="/user/all-orders" element={<UserAllOrdersPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/profile" element={<UserProfilePage />} />
          <Route path="/user/addresses" element={<UserAllAddresPage />} />
          <Route path="/user/wishlist" element={<UserFavoriteProductsPage />} />
          {/* Admin Pages */}
          <Route path="/admin/add-brand" element={<AdminAddBrand />} />
          <Route path="/admin/all-orders" element={<AdminAllOrders />} />
          <Route path="/admin/all-products" element={<AdminAllProducts />} />
          <Route path="/admin/add-product" element={<AddNewProduct />} />
          <Route path="/admin/add-category" element={<AddCategory />} />
          <Route path="/admin/add-sub-category" element={<AddSubCategory />} />
          <Route path="/admin/add-address" element={<UserAddAddressPage />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};

export default App;
