import React from "react";
import SubTitle from "../../Components/Utility/SubTitle";
import Loading from "../../Components/Utility/Loading";
import Row from "../../Components/Utility/Row";
import BrandElement from "../../Components/Brand/BrandElement";
import HomeBrandHook from "../../hook/brand/home-brand-hook";

const HomeBrand = () => {
  const [brand, loading] = HomeBrandHook();
  console.log(brand);
  return (
    <>
      <SubTitle
        title={" اشهر الماركات"}
        BtnTitle={"المزيد"}
        href={"/allbrand"}
      />
      <Row>
        {loading === false ? (
          brand.data ? (
            brand.data
              .slice(0, 6)
              .map(({ image, id }) => <BrandElement img={image} key={id} />)
          ) : (
            <h4>لا يوجد ماركات</h4>
          )
        ) : (
          <Loading />
        )}
      </Row>
    </>
  );
};

export default HomeBrand;