import React from "react";
import SubTitle from "../SubTitle";
import Row from "../Row";
import CategoryCard from "./CategoryCard";
import clothe from "../../images/clothe.png";

const CategoryContainer = () => {
  return (
    <>
      <SubTitle title={"التصنيفات"} BtnTitle={"المزيد"} href={"/allcategory"} />
      <Row>
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
        <CategoryCard bg={"#fff"} title={"الملابس"} img={clothe} />
      </Row>
    </>
  );
};

export default CategoryContainer;
