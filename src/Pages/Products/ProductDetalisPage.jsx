import React, { useEffect } from "react";
import NavCategories from "../../Components/NavCategories";
import CardDetails from "../../Components/Products/CardDetails";
import CardElement from "../../Components/Products/Card";
import { useLocation, useParams } from "react-router-dom";
import ViewProductsDetalisHook from "../../hook/products/view-products-detalis-hook";
import CardProductContainer from "../../Components/Products/CardProductContainer";
import ReviewContainer from "../../Components/Utility/ReviewContainer";

const ProductDetalisPage = () => {
  const { id } = useParams();
  let [item, images, cat, brand, prod] = ViewProductsDetalisHook(id);
  let items = [];
  if (prod) items = prod.slice(0, 12);

  if (item) {
    var rateAvg = item.ratingsAverage;
    var rateQty = item.ratingsQuantity;
  }
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <NavCategories />
      <CardDetails />
      <ReviewContainer rateAvg={rateAvg} rateNum={rateQty} />
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
