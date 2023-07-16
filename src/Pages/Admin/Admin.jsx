import SideBar from "../../Components/AdminDrawer";
import React from "react";
import AdminAllOrders from "./AdminAllOrders.jsx";
import AdminAddBrand from "./AdminAddBrand.jsx";
import AdminAllProducts from "./AdminAllProducts.jsx";
import AddNewProduct from "./AddNewProduct.jsx";
import AddCategory from "./AddCategory.jsx";
import { Outlet } from "react-router-dom";
const Admin = () => {
  const listItems = [
    { name: "Dashboard", href: "#" },
    { name: "Profile", href: "#" },
    { name: "Settings", href: "#" },
  ];
  return (
    <>
      <div className="flex  justify-around items-center m-2">
        <h2 className="self-start font-bold text-red-900 text-2xl">ادمن</h2>
        <SideBar items={listItems} />
      </div>
      <Outlet />
    </>
  );
};

export default Admin;
