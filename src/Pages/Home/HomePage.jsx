import React from "react";
import HomeCarousal from "../../Components/HomeCarousal";
import Container from "../../Components/Utility/Container";
import Row from "../../Components/Utility/Row";
import clothe from "../../images/clothe.png";
import SubTitle from "../../Components/Utility/SubTitle";
import CardElement from "../../Components/Card";
import Ad from "../../Components/Ad";
import BrandElement from "../../Components/Brand/BrandElement";
import NavCategories from "../../Components/NavCategories";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "../../redux/actions/categoryAction";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import HomeCategoryHook from "../../hook/category/home-category-hook";

export default function HomePage() {
  const [category, loading, colors] = HomeCategoryHook();
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
      <HomeCarousal slides={slides} />
      <SubTitle
        title={" اشهر الماركات"}
        BtnTitle={"المزيد"}
        href={"/allcategory"}
      />
      <CategoryContainer
        category={category.data}
        loading={loading}
        colors={colors}
      />
      {/* {console.log("home page rendered")} */}
      <Container>
        <Row>
          <CardElement />
          <CardElement />
          <CardElement />
          <CardElement />
        </Row>
        <Ad />
        <SubTitle title={" احدث الازياء"} BtnTitle={"المزيد"} href={"#"} />
        <Row>
          <CardElement />
          <CardElement />
          <CardElement />
          <CardElement />
        </Row>
        <SubTitle
          title={" اشهر الماركات"}
          BtnTitle={"المزيد"}
          href={"/allbrand"}
        />
        <Row>
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
        </Row>
      </Container>
    </>
  );
}
