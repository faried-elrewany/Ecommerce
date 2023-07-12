import AdminDrawer from "./Pages/Admin/AdminDrawer";
import React from "react";
import AdminAllOrders from "./Pages/Admin/AdminAllOrders.jsx";
import AdminAddBrand from "./Pages/Admin/AdminAddBrand.jsx";
import AdminAllProducts from "./Pages/Admin/AdminAllProducts";
const Admin = () => {
  return (
    <>
      {/* صفحة الاوردرز */}
      {/* <AdminDrawer />
      <AdminAllOrders /> */}
      {/* صفحة البراند */}
      {/* <AdminDrawer />
      <AdminAddBrand /> */}
      {/* صفحة كل المنتجات */}
      <AdminDrawer />
      <AdminAllProducts />
    </>
  );
};

export default Admin;
