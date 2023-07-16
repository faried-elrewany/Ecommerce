import SideBar from "./Pages/Admin/AdminDrawer";
import React from "react";
import AdminAllOrders from "./Pages/Admin/AdminAllOrders.jsx";
import AdminAddBrand from "./Pages/Admin/AdminAddBrand.jsx";
import AdminAllProducts from "./Pages/Admin/AdminAllProducts.jsx";
import AddNewProduct from "./Pages/Admin/AddNewProduct.jsx";
import AddCategory from "./Pages/Admin/AddCategory.jsx";
const Admin = () => {
  const listItems = [
    { name: "Dashboard", href: "#" },
    { name: "Profile", href: "#" },
    { name: "Settings", href: "#" },
  ];
  return (
    <>
      {/* صفحة الاوردرز */}
      <AdminDrawer />
      {/* <AdminAllOrders /> */}
      {/* صفحة البراند */}
      {/* {/* <AddCategory /> */}
      {/* <AddCategory /> */}
      {/* صفحة كل المنتجات */}
      {/* دي المفروض هتبقي في كل صفحة من الكومبوننتس */}
      {/* <div className="flex w-full justify-around items-center m-2">
        <h2 className="self-start font-bold text-red-900 text-2xl">ادمن</h2>
        <SideBar items={listItems} />
      </div> */}
      {/* <AdminAllProducts /> */}
    </>
  );
};

export default Admin;
