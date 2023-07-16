import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Navigation";
import App from "./Components/HomeCarousal.jsx";
import Header from "./ComplexNavbar.jsx";
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
import CartItems from "./Cart.jsx";
import Test from "./Pages/Cart/Test";
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
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomePage />
    {/* <UserAddAddressPage /> */}
    {/* <div className="card-detail">
      <Zoom img={clothe} zoomScale={1.5} width={600} height={600} />
    </div> */}
    {/* <CouponInput /> */}
    {/* <Header />

    <Navigation />
    <CardDetails />
    <SubTitle title={"الاكثر مبيعا"} BtnTitle={"المزيد"} />
    <Row>
      <Card
        imageSrc={labtop}
        title="السلام عليكم ورحمة الله وبركاته"
        price="150"
        rating={"4.5"}
      />
      
      <Card
        imageSrc={labtop}
        title="السلام عليكم ورحمة الله وبركاته"
        price="150"
        rating={"4.5"}
      />
      <Card
        imageSrc={labtop}
        title="السلام عليكم ورحمة الله وبركاته"
        price="150"
        rating={"4.5"}
      />
      <Card
        imageSrc={labtop}
        title="السلام عليكم ورحمة الله وبركاته بسم الله الرحمن الرحيم"
        price="150"
        rating={"4.5"}
      />
    </Row> */}

    {/* <CartItems />
     */}
    {/* الكارته */}
    {/* <Test /> */}
    {/* <Admin /> */}
    {/* <CollectionFilter /> */}
    {/* Home Page */}
    {/* <Header /> */}
    {/* <Navigation /> */}
    {/* <App /> */}
    {/* <BrandsCarousal /> */}
    {/* <Container>
      <SubTitle title={"الفئات"} BtnTitle={"المزيد"} />
      <Row>
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
      </Row>
      <SubTitle title={"الاكثر مبيعا"} BtnTitle={"المزيد"} />
      <Row>
        <CategoryCard bg={"#f0f"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
      </Row>
      <SubTitle title={"الفئات"} BtnTitle={"المزيد"} />

      <Row>
        <Card
          imageSrc={labtop}
          title="السلام عليكم ورحمة الله وبركاته"
          price="150"
          rating={"4.5"}
        />
        <Card
          imageSrc={labtop}
          title="السلام عليكم ورحمة الله وبركاته"
          price="150"
          rating={"4.5"}
        />
        <Card
          imageSrc={labtop}
          title="السلام عليكم ورحمة الله وبركاته"
          price="150"
          rating={"4.5"}
        />
        <Card
          imageSrc={labtop}
          title="السلام عليكم ورحمة الله وبركاته بسم الله الرحمن الرحيم"
          price="150"
          rating={"4.5"}
        />
      </Row>
      <SubTitle title={"اشهر الماركات"} BtnTitle={"المزيد"} />

      <Row>
        <Carousal imgSrc={labtop} />
        <Carousal imgSrc={labtop} />
        <Carousal imgSrc={labtop} />
        <Carousal imgSrc={labtop} />
        <Carousal imgSrc={labtop} />
      </Row>
      <SubTitle title={"الفئات"} BtnTitle={"المزيد"} />

      <Row>
        <Card
          imageSrc={labtop}
          title="السلام عليكم ورحمة الله وبركاته"
          price="150"
          rating={"4.5"}
        />
        <Card
          imageSrc={labtop}
          title="السلام عليكم ورحمة الله وبركاته"
          price="150"
          rating={"4.5"}
        />
        <Card
          imageSrc={labtop}
          title="السلام عليكم ورحمة الله وبركاته"
          price="150"
          rating={"4.5"}
        />
        <Card
          imageSrc={labtop}
          title="السلام عليكم ورحمة الله وبركاته بسم الله الرحمن الرحيم"
          price="150"
          rating={"4.5"}
        />
      </Row>
    </Container> */}
    {/* End Home Page */}
    {/* <CardDetails /> */}
  </React.StrictMode>
);
