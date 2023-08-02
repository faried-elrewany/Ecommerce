import React from "react";
import Row from "../../Components/Utility/Row";
import BrandElement from "../../Components/Brand/BrandElement";
import Container from "../../Components/Utility/Container";
import BrandContaier from "../../Components/Brand/BrandContaier";

const AllBrandPage = () => {
  return (
    <>
      <Container>
        <h2 className="font-bold text-red-900 text-2xl m-4">كل التصنيفات</h2>
        <BrandContaier />
      </Container>
    </>
  );
};

export default AllBrandPage;
