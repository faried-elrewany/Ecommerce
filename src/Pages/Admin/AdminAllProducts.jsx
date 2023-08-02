import React from "react";
import CardElement from "../../Components/Card";
import Row from "../../Components/Row";

const AdminAllProducts = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <h2 className=" mt-2 font-bold ms-5 text-red-900 text-2xl">
          ادارة جميع المنتجات{" "}
        </h2>
        <div className="flex flex-wrap p-2 gap-4">
          <CardElement />
          <CardElement />
          <CardElement />
          <CardElement />
          <CardElement />
          <CardElement />
          <CardElement />
          <CardElement />
        </div>
      </div>
    </>
  );
};

export default AdminAllProducts;
