import React from "react";
import SubTitle from "../SubTitle";
import Row from "../Row";
import CategoryCard from "./CategoryCard";
import Loading from "../Utility/Loading";

const CategoryContainer = ({ category, loading }) => {
  console.log("container", category);
  return (
    <>
      <Row>
        {loading == true ? (
          <Loading />
        ) : (
          category.map(({ id, name, image }) => (
            <CategoryCard title={name} img={image} key={id} />
          ))
        )}
      </Row>
    </>
  );
};

export default CategoryContainer;
