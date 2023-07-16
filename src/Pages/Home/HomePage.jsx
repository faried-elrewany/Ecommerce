import React from "react";
import HomeCarousal from "../../Components/HomeCarousal";
import Container from "../../Components/Container";
import Row from "../../Components/Row";
import CategoryCard from "../../Components/CategoryCard";
import clothe from "../../images/clothe.png";
import SubTitle from "../../Components/SubTitle";
import CardElement from "../../Components/Card";
import Ad from "../../Components/Ad";
import BrandElement from "../../Components/brandElement";
import Footer from "../../Components/Footer";
import Header from "../../Components/ComplexNavbar";

export default function HomePage() {
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
      <Header />

      <HomeCarousal slides={slides} />
      <Container>
        <SubTitle title={"التصنيفات"} BtnTitle={"المزيد"} href={"#"} />
        <Row>
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        </Row>
        <SubTitle title={"الاكثر مبيعا"} BtnTitle={"المزيد"} href={"#"} />
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
        <Row>
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
        </Row>
        <Footer />
      </Container>
    </>
  );
}
