import React from "react";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import HomeCategoryHook from "../../hook/category/home-category-hook";
import SubTitle from "../../Components/Utility/SubTitle";
import Loading from "../../Components/Utility/Loading";
import Row from "../../Components/Utility/Row";
import CategoryCard from "../../Components/Category/CategoryCard";

const HomeCategory = () => {
  const [category, loading] = HomeCategoryHook();
  return (
    <>
      <SubTitle
        title={"  التصنيفات"}
        BtnTitle={"المزيد"}
        href={"/allcategory"}
      />
      <Row>
        {loading === false ? (
          category && category.data ? (
            category.data
              .slice(0, 6)
              .map(({ name, image, _id }) => (
                <CategoryCard title={name} img={image} key={_id} id={_id} />
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
