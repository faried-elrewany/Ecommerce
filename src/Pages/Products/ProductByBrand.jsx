import React from "react";
import { useParams } from "react-router-dom";
import Row from "../../Components/Utility/Row";
import CardElement from "../../Components/Products/Card.jsx";
import NavCategories from "../../Components/NavCategories";
import ReactPagination from "../../Components/Utility/ReactPagination.jsx";
import ViewAllProductsBarndHook from "../../hook/products/view-all-products-barnd-hook";
import Loading from "../../Components/Utility/Loading";
export const ProductByBrand = () => {
  const { id } = useParams();

  const [items, pagination, onPress, loading] = ViewAllProductsBarndHook(id);
  if (pagination) var pageCount = pagination;
  else pageCount = 0;

  return (
    <>
      <NavCategories />
      <Row>
        {loading == false ? (
          items && items.length >= 1 ? (
            items.map((item, index) => <CardElement key={index} item={item} />)
          ) : (
            <h4 className="text-red-900 text-xl">
              لا يوجد منتجات من هذه البراند
            </h4>
          )
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
