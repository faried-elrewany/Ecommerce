import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Navigation";
import App from "./App.jsx";
import Header from "./ComplexNavbar.jsx";
import Container from "./Container.jsx";
import SubTitle from "./SubTitle.jsx";
import CategoryCard from "./CategoryCard.jsx";
import Row from "./Row.jsx";
import Card from "./Card.jsx";
import Carousal from "./Carousal.jsx";
import clothe from "./images/clothe.png";
import labtop from "./images/labtop.png";

import "./index.css";
import "./NavBarStyles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Navigation />
    <App />
    <Container>
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
    </Container>
  </React.StrictMode>
);
