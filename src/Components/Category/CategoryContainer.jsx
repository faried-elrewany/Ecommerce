import React from "react";
import Row from "../Utility/Row";
import CategoryCard from "./CategoryCard";
import Loading from "../Utility/Loading";

const CategoryContainer = ({ data, loading }) => {
  console.log(data);
  return (
    <>
      <Row>
        {loading === false ? (
          data ? (
            data.map(({ name, image, id }) => {
              return <CategoryCard title={name} img={image} key={id} />;
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )
        ) : (
          <Loading />
        )}
      </Row>
    </>
  );
};

export default CategoryContainer;
