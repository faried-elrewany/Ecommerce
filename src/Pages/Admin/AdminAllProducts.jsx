import React from "react";
import CardElement from "../../Components/Products/Card.jsx";
import Row from "../../Components/Utility/Row";
import { AdminMenu } from "../../Components/Utility/AdminLinks";
import SideBar from "../../Components/Utility/SideBar";
import AdminAllProductsContainer from "../../Components/Products/AdminAllProductsContainer.jsx";
import ViewProductAdminHook from "../../hook/admin/view-product-admin-hook.js";
import Loading from "../../Components/Utility/Loading.jsx";
import ReactPagination from "../../Components/Utility/ReactPagination";
const AdminAllProducts = () => {
  const [loading, items, pagination, onPress] = ViewProductAdminHook();
  if (pagination) var pageCount = pagination;
  else pageCount = 0;

  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={AdminMenu} />
        <div className="flex flex-col w-full">
          <h2 className=" mt-2 font-bold ms-5 text-red-900 text-2xl">
            ادارة جميع المنتجات{" "}
          </h2>
          <div className="flex flex-wrap p-2 gap-4">
            {!loading ? (
              <AdminAllProductsContainer products={items} loading={loading} />
            ) : (
              <Loading />
            )}
          </div>
          {pageCount > 1 ? (
            <div className="flex justify-center items-center w-full m-4">
              <ReactPagination pageCount={pageCount} onPress={onPress} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default AdminAllProducts;
