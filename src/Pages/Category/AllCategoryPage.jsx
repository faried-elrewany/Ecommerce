import React from "react";
import Container from "../../Components/Utility/Container.jsx";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import ReactPagination from "../../Components/Utility/ReactPagination";
import Loading from "../../Components/Utility/Loading";
import AllCategoryHook from "../../hook/category/all-category-page-hook";

const AllCategoryPage = () => {
  const [category, loading, pageCount, getPage] = AllCategoryHook();
  return (
    <>
      <Container>
        <h2 className="font-bold text-red-900 text-2xl m-4">كل التصنيفات</h2>
        {category.data ? (
          <CategoryContainer category={category.data} loading={loading} />
        ) : (
          <Loading />
        )}
        {pageCount > 1 && (
          <ReactPagination pageCount={pageCount} onPress={getPage} />
        )}
      </Container>
    </>
  );
};

export default AllCategoryPage;
