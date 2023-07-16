import React from "react";
import Row from "../../Components/Row";
import BrandElement from "../../Components/brandElement";
import Pagination from "../../Components/Pagination";
import Container from "../../Components/Container";

const AllBrandPage = () => {
  return (
    <>
      <Container>
        <h2 className="font-bold text-red-900 text-2xl m-4">كل التصنيفات</h2>
        <Row>
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
          <BrandElement />
        </Row>
        <Pagination />
      </Container>
    </>
  );
};

export default AllBrandPage;
