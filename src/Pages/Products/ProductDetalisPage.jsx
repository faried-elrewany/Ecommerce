import React from "react";
import NavCategories from "../../Components/NavCategories";
import CardDetails from "../../Components/Products/CardDetails";
import Row from "../../Components/Utility/Row";
import CardElement from "../../Components/Products/Card";
import { useParams } from "react-router-dom";
import ViewProductsDetalisHook from "../../hook/products/view-products-detalis-hook";

const ProductDetalisPage = () => {
  const { id } = useParams();
  const [item, images, cat, brand, prod] = ViewProductsDetalisHook(id);
  let items = [];
  if (prod) items = prod.slice(0, 4);
  return (
    <div>
      <NavCategories />
      <CardDetails />

      <Row>
        {items
          ? items.map((item, index) => <CardElement key={index} item={item} />)
          : null}
      </Row>
    </div>
  );
};

export default ProductDetalisPage;
