import React from "react";
import ProductUpdate from "./ProductUpdate";

const AdminAllProductsContainer = ({ products }) => {
  return (
    <div className="flex flex-wrap p-2 gap-4">
      {/* {products ? (
        products.map((item, index) => <ProductUpdate key={index} item={item} />)
      ) : (
        <h4>لا يوجد منتجات حتي الان</h4>
      )} */}
    </div>
  );
};

export default AdminAllProductsContainer;
