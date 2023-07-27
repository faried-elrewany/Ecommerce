import React from "react";
import Row from "../../Components/Row";
import Container from "../../Components/Container";
import CategoryContainer from "../../Components/Category/CategoryContainer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CategoryCard from "../../Components/Category/CategoryCard";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../redux/actions/categoryAction";
import ReactPagination from "../../Components/Utility/ReactPagination";
import Loading from "../../Components/Utility/Loading";
const AllCategoryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //the limit equal 1
    dispatch(getAllCategory(1));
    console.log("effect");
  }, []);
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);
  let pageCount = 0;
  if (category.data) {
    pageCount = category.paginationResult.numberOfPages;
    console.log("pageCount", pageCount);
  }
  const onPress = (page) => {
    //focus in action  is limit also one default u can make it dynamic
    dispatch(getAllCategoryPage(page));
  };
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
          <ReactPagination pageCount={pageCount} onPress={onPress} />
        )}
      </Container>
    </>
  );
};

export default AllCategoryPage;
