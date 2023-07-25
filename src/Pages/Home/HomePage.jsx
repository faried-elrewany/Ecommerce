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
import NavCategories from "../../Components/NavCategories";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "../../redux/actions/categoryAction";

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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory(2));
  }, []);
  const category = useSelector((state) => state.allCategory.category);

  console.log("بسم الله", category);
  return (
    <>
      <NavCategories />
      <HomeCarousal slides={slides} />
      <Container>
        <SubTitle
          title={"التصنيفات"}
          BtnTitle={"المزيد"}
          href={"/allcategory"}
        />
        <Row>
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
          <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        </Row>
        <SubTitle
          title={"الاكثر مبيعا"}
          BtnTitle={"المزيد"}
          href={"/products"}
        />
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
