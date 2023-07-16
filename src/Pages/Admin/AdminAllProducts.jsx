import React from "react";
import CardElement from "../../Components/Card";
import Row from "../../Components/Row";

const AdminAllProducts = () => {
  return (
    <>
      <h2 className=" mt-2 font-bold text-red-900 text-2xl">
        ادارة جميع المنتجات{" "}
      </h2>
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
    </>
  );
};

export default AdminAllProducts;
