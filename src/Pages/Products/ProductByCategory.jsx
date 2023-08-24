import React from "react";
import { useParams } from "react-router-dom";
import ViewAllProductsCategoryHook from "./../../hook/products/view-all-products-category-hook";
import Row from "../../Components/Utility/Row";
import CardElement from "../../Components/Products/Card.jsx";
import NavCategories from "../../Components/NavCategories";
import ReactPagination from "../../Components/Utility/ReactPagination.jsx";

const ProductByCategory = () => {
  const { id } = useParams();
  console.log("id", id);
  const [items, pagination, onPress] = ViewAllProductsCategoryHook(id);
  if (items) console.log("items", items);
  if (pagination) var pageCount = pagination;
  else pageCount = 0;

  return (
    <>
      <NavCategories />

      <Row>
        {items
          ? items.map((item, index) => <CardElement key={index} item={item} />)
          : null}
      </Row>
      {pageCount > 1 && (
        <ReactPagination pageCount={pageCount} onPress={onPress} />
      )}
    </>
  );
};

export default ProductByCategory;
