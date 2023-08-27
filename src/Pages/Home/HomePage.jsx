import React from "react";
import HomeCarousal from "../../Components/HomeCarousal";
import Container from "../../Components/Utility/Container";
import Ad from "../../Components/Ad";
import NavCategories from "../../Components/NavCategories";
import HomeCategory from "./HomeCategory";
import HomeBrand from "./HomeBrand";
import home1 from "../../images/home1.png";
import home2 from "../../images/home2.jpg";
import home3 from "../../images/home3.png";
import home4 from "../../images/home4.png";
import home5 from "../../images/home5.png";
import home6 from "../../images/home6.png";

import CardProductContainer from "../../Components/Products/CardProductContainer";
import ViewHomeProductsHook from "./../../hook/products/view-home-products-hook";

export default function HomePage() {
  const [items] = ViewHomeProductsHook();
  if (items) console.log(items);
  const slides = [
    {
      image: home1,
      text: "هناك خصم كبير",
      discount: 50,
    },
    {
      image: home2,
      text: "التخفيضات الكبرى",
      discount: 40,
    },
    {
      image: home3,
      text: "صفقات عظيمة",
      discount: 30,
    },
    {
      image: home4,
      text: "صفقات عظيمة",
      discount: 30,
    },
    {
      image: home5,
      text: "صفقات عظيمة",
      discount: 30,
    },
    {
      image: home6,
      text: "صفقات عظيمة",
      discount: 30,
    },
  ];

  return (
    <>
      <NavCategories />
      <HomeCarousal slides={slides} />
      <HomeCategory />
      <Container>
        <CardProductContainer
          products={items}
          title="الاكثر مبيعا"
          btntitle="المزيد"
          pathText="/products"
        />
        <Ad />

        <HomeBrand />
      </Container>
    </>
  );
}
