import React from "react";
import NavCategories from "../../NavCategories";
import CardDetails from "../../CardDetails";
import Row from "../../Components/Row";
import CardElement from "../../Components/Card";

const ProductDetalisPage = () => {
  return (
    <div>
      <NavCategories />
      <CardDetails />
      <Row>
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
      </Row>
    </div>
  );
};

export default ProductDetalisPage;
