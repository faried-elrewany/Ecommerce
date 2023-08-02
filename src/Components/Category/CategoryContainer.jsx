import React from "react";
import Row from "../Utility/Row";
import CategoryCard from "./CategoryCard";
import Loading from "../Utility/Loading";

const CategoryContainer = ({ category, loading }) => {
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
