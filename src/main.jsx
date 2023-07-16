import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./NavCategories";
import App from "./Components/HomeCarousal.jsx";
import Header from "./Components/ComplexNavbar.jsx";
import Container from "./Components/Container.jsx";
import SubTitle from "./Components/SubTitle.jsx";
import CategoryCard from "./Components/CategoryCard.jsx";
import Row from "./Components/Row.jsx";
import Card from "./Components/Card.jsx";
import Carousal from "./Carousal.jsx";
import "./NavBarStyles.css";
import clothe from "./images/clothe.png";
import labtop from "./images/labtop.png";
import CardDetails from "./CardDetails.jsx";
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
import CollectionFilter from "./CollectionFilter.jsx";
import HomePage from "./Pages/Home/HomePage";
import AllBrandPage from "./Pages/Brand/AllBrandPage";
import AllCategoryPage from "./Pages/Category/AllCategoryPage";
import ProductDetalisPage from "./Pages/Products/ProductDetalisPage";
import ShopProductsPage from "./Pages/Products/ShopProductsPage";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HomePage /> */}
    {/* <CartPage /> */}
    {/* <AllBrandPage /> */}
    {/* <AllCategoryPage /> */}
    {/* <UserAddAddressPage /> */}
    {/* <ProductDetalisPage /> */}
    <ShopProductsPage />

    {/* الكارته */}
    {/* <Admin /> */}
    {/* <CollectionFilter /> */}
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
