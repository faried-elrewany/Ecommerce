import React from "react";
import { FilterMenu } from "../../Components/Products/FiltersComponents.jsx";
import FiltersDrawer from "../../Components/Products/FiltersDrawer.jsx";
import Row from "../../Components/Utility/Row";
import CardElement from "../../Components/Products/Card.jsx";
import NavCategories from "../../Components/NavCategories";
import ReactPagination from "../../Components/Utility/ReactPagination.jsx";
import ViewSearchProductsHook from "./../../hook/products/view-search-products-hook";
import CardProductContainer from "../../Components/Products/CardProductContainer.jsx";
import Loading from "../../Components/Utility/Loading.jsx";

const ShopProductsPage = () => {
  // البروداكتس بتاعتي والباجينيشن
  const [items, pagination, onPress, getProduct, results, loading] =
    ViewSearchProductsHook();
  let pageCount = 0;
  if (pagination) pageCount = pagination;
  return (
    <>
      {console.log(loading)}
      <NavCategories />
      <div className="flex my-2 justify-around items-center shadow py-4">
        <FilterMenu onClick={getProduct} />
        <h2 className="font-bold ">{`هناك ${results} نتيجة بحث`} </h2>
        <FiltersDrawer />
      </div>
      <Row>
        {loading === false ? (
          items ? (
            items.map((item, index) => <CardElement key={index} item={item} />)
          ) : null
        ) : (
          <Loading />
        )}
      </Row>
      {pageCount > 1 && (
        <ReactPagination pageCount={pageCount} onPress={onPress} />
      )}
    </>
  );
};

export default ShopProductsPage;
