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
import clothe from "./images/clothe.png";

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
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
      </Row>
      <Card />
    </Container>
  </React.StrictMode>
);
