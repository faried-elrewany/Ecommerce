import React from "react";
import Row from "../../Components/Utility/Row";
import BrandElement from "../../Components/Brand/BrandElement";
import Container from "../../Components/Utility/Container";
import BrandContaier from "../../Components/Brand/BrandContaier";
import ReactPagination from "../../Components/Utility/ReactPagination";
import { getAllBrandPage } from "../../redux/actions/brandAction";
import AllBrandHook from "../../hook/brand/all-brand-page-hook";

const AllBrandPage = () => {
  const [brand, loading, pageCount, getPage] = AllBrandHook();
  return (
    <>
      <Container>
        <h2 className="font-bold text-red-900 text-2xl m-4">كل الماركات</h2>
        <BrandContaier data={brand.data} loading={loading} />
        {pageCount > 1 && (
          <ReactPagination pageCount={pageCount} onPress={getPage} />
        )}
      </Container>
    </>
  );
};

export default AllBrandPage;
