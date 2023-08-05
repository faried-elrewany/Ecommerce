import React from "react";
import ProductUpdate from "./ProductUpdate";
import Loading from "../Utility/Loading";

const AdminAllProductsContainer = ({ products, loading }) => {
  return (
    <div className="flex flex-wrap p-2 gap-4">
      {loading === false ? (
        products ? (
          products.map((item, index) => (
            <ProductUpdate key={index} item={item} />
          ))
        ) : (
          <h4>لا يوجد منتجات حتي الان</h4>
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default AdminAllProductsContainer;
