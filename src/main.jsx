import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/HomeCarousal.jsx";
import Header from "./Components/ComplexNavbar.jsx";
import "./NavBarStyles.css";
import CartPage from "./Pages/Cart/CartPage";
import Admin from "./Admin.jsx";
import UserFavoriteProductsPage from "./Pages/User/UserFavoriteProductsPage.jsx";
import UserAllAddresPage from "./Pages/User/UserAllAddresPage.jsx";

import UserProfilePage from "./Pages/User/UserProfilePage.jsx";
import UserAllOrdersPage from "./Pages/User/UserAllOrdersPage.jsx";
import UserAddAddressPage from "./Pages/User/UserAddAddressPage.jsx";

import "./index.css";

import Zoom from "react-img-zoom";
import SignUp from "./Pages/Auth/SignUp.jsx";
import Login from "./Pages/Auth/Login";
import HomePage from "./Pages/Home/HomePage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import ProductDetalisPage from "./Pages/Products/ProductDetalisPage";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
import CardDetails from "./Components/CardDetails.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HomePage /> */}
    {/* <CartPage /> */}
    {/* <AllBrandPage /> */}
    {/* <AllCategoryPage /> */}
    {/* <UserAddAddressPage /> */}
    <ProductDetalisPage />
    {/* <ShopProductsPage /> */}

    {/* الكارته */}
    {/* <Admin /> */}
    {/* Home Page */}
    {/* <Header /> */}
    {/* <Navigation /> */}
    {/* <BrandsCarousal /> */}
    {/* <Container>
    

    </Container> */}
    {/* End Home Page */}
    {/* <CardDetails /> */}
  </React.StrictMode>
);
