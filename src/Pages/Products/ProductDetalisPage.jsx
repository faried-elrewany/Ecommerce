import React, { useEffect } from "react";
import NavCategories from "../../Components/NavCategories";
import CardDetails from "../../Components/Products/CardDetails";
import CardElement from "../../Components/Products/Card";
import { useParams } from "react-router-dom";
import ViewProductsDetalisHook from "../../hook/products/view-products-detalis-hook";
import CardProductContainer from "../../Components/Products/CardProductContainer";

const ProductDetalisPage = () => {
  const { id } = useParams();
  let [item, images, cat, brand, prod] = ViewProductsDetalisHook(id);
  let items = [];
  if (prod) items = prod.slice(0, 4);

  return (
    <div>
      <NavCategories />
      <CardDetails />

      <CardProductContainer
        products={items}
        title="منتجات مشابهه "
        btntitle="المزيد"
        pathText="/products"
      />
    </div>
  );
};

export default ProductDetalisPage;
