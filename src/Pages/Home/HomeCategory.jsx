import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import HomeCategoryHook from "../../hook/category/home-category-hook";
import SubTitle from "../../Components/Utility/SubTitle";
import Loading from "../../Components/Utility/Loading";
import Row from "../../Components/Utility/Row";
import CategoryCard from "../../Components/Category/CategoryCard";

const HomeCategory = () => {
  const [category, loading] = HomeCategoryHook();
  console.log(category, loading);
  return (
    <>
      <SubTitle
        title={" اشهر الماركات"}
        BtnTitle={"المزيد"}
        href={"/allcategory"}
      />
      <Row>
        {loading === false ? (
          category.data ? (
            category.data
              .slice(0, 6)
              .map(({ name, image, id }) => (
                <CategoryCard title={name} img={image} key={id} />
              ))
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

export default HomeCategory;
