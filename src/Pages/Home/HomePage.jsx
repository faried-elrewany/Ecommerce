import React from "react";
import HomeCarousal from "../../Components/HomeCarousal";
import Container from "../../Components/Utility/Container";
import Row from "../../Components/Utility/Row";
import SubTitle from "../../Components/Utility/SubTitle";
import CardElement from "../../Components/Products/Card";
import Ad from "../../Components/Ad";
import NavCategories from "../../Components/NavCategories";
import HomeCategory from "./HomeCategory";
import HomeBrand from "./HomeBrand";
import clothe from "../../images/clothe.png";

import CardProductContainer from "../../Components/Products/CardProductContainer";
import ViewHomeProductsHook from "./../../hook/products/view-home-products-hook";

export default function HomePage() {
  const [items] = ViewHomeProductsHook();
  if (items) console.log(items);

  const slides = [
    {
      image: "https://i.ibb.co/Vvndkmy/banner.jpg",
      text: "هناك خصم كبير",
      discount: 50,
    },
    {
      image: "https://i.ibb.co/Vvndkmy/banner.jpg",
      text: "التخفيضات الكبرى",
      discount: 40,
    },
    {
      image: "https://i.ibb.co/Vvndkmy/banner.jpg",
      text: "صفقات عظيمة",
      discount: 30,
    },
    {
      image: "https://i.ibb.co/Vvndkmy/banner.jpg",
      text: "صفقات عظيمة",
      discount: 30,
    },
    {
      image: "https://i.ibb.co/Vvndkmy/banner.jpg",
      text: "صفقات عظيمة",
      discount: 30,
    },
    {
      image: "https://i.ibb.co/Vvndkmy/banner.jpg",
      text: "صفقات عظيمة",
      discount: 30,
    },
    {
      image: "https://i.ibb.co/Vvndkmy/banner.jpg",
      text: "صفقات عظيمة",
      discount: 30,
    },
  ];

  return (
    <>
      <NavCategories />
      {/* <HomeCarousal slides={slides} /> */}
      <HomeCategory />
      <Container>
        <CardProductContainer
          products={items}
          title="الاكثر مبيعا"
          btntitle="المزيد"
          pathText="/products"
        />
        <Ad />

        <CardProductContainer
          products={items}
          title=" الاحدث"
          btntitle="المزيد"
          pathText="/products"
        />
        <HomeBrand />
      </Container>
    </>
  );
}
