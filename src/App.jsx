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
import AdminEditProduct from "./Pages/Admin/AdminEditProduct.jsx";
import ForgetPasswordPage from "./Pages/Auth/ForgetPassword.jsx";
import ResetPasswordPage from "./Pages/Auth/ResetPasswordPage.jsx";
import VerifyPasswordPage from "./Pages/Auth/VerifyPasswordPage.jsx";
import Reviews from "./Components/Utility/Reviews.jsx";
import AdminAddCoupon from "./Pages/Admin/AdminAddCoupon.jsx";
import AdminEditCoupon from "./Pages/Admin/AdminEditCoupon.jsx";
import UserEditAddressPage from "./Pages/User/UserEditAddressPage.jsx";
import { ProductByBrand } from "./Pages/Products/ProductByBrand.jsx";
import ProductByCategory from "./Pages/Products/ProductByCategory.jsx";
import PaymentMethod from "./Pages/Cart/PaymentMethod.jsx";
import AdminOrderDetails from "./Pages/Admin/AdminOrderDetails.jsx";
import Footer from "./Components/Footer.jsx";
import ProtectedRoute from "./Components/Utility/ProtectedRoute.jsx";

import ProtectedRouteHook from "./hook/auth/ProtectedRouteHook.js";

const App = () => {
  const [isUser, isAdmin, userData] = ProtectedRouteHook();

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
          <Route
            path="/products/category/:id"
            element={<ProductByCategory />}
          />
          <Route path="/products/brand/:id" element={<ProductByBrand />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/user/forget-password"
            element={<ForgetPasswordPage />}
          />
          <Route path="/user/reset-password" element={<ResetPasswordPage />} />
          <Route path="/user/verify-code" element={<VerifyPasswordPage />} />

          {/* User Pages */}

          <Route element={<ProtectedRoute auth={isUser} />}>
            <Route path="/user/all-orders" element={<UserAllOrdersPage />} />
            <Route path="/user/add-address" element={<UserAddAddressPage />} />
            <Route path="/user/profile" element={<UserProfilePage />} />
            <Route path="/user/addresses" element={<UserAllAddresPage />} />
            <Route
              path="/user/wishlist"
              element={<UserFavoriteProductsPage />}
            />
            <Route
              path="/user/edit-address/:id"
              element={<UserEditAddressPage />}
            />
            <Route path="/order/payment-method" element={<PaymentMethod />} />
          </Route>

          {/* Admin Pages */}

          <Route element={<ProtectedRoute auth={isAdmin} />}>
            <Route path="/admin/add-brand" element={<AdminAddBrand />} />
            <Route path="/admin/all-orders" element={<AdminAllOrders />} />
            <Route path="/admin/all-products" element={<AdminAllProducts />} />
            <Route path="/admin/add-product" element={<AddNewProduct />} />
            <Route path="/admin/add-coupon" element={<AdminAddCoupon />} />
            <Route path="/admin/editcoupon/:id" element={<AdminEditCoupon />} />
            <Route path="/admin/add-category" element={<AddCategory />} />
            <Route
              path="/admin/add-sub-category"
              element={<AddSubCategory />}
            />
            <Route path="/admin/orders/:id" element={<AdminOrderDetails />} />
            <Route
              path="/admin/editproduct/:id"
              element={<AdminEditProduct />}
            />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
