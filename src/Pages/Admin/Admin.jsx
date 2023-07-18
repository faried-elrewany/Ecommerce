import SideBar from "../../Components/AdminDrawer";
import React from "react";
import { Outlet } from "react-router-dom";
const Admin = () => {
  const listItems = [
    { name: "ادارة الطلبات", href: "/admin/all-orders" },
    { name: "ادارة المنتجات", href: "/admin/all-products" },
    { name: "اضف ماركة", href: "/admin/add-brand" },
    { name: "اضف تصنيف", href: "/admin/add-category" },
    { name: "اضف تصنيف فرعي", href: "/admin/add-sub-category" },
    { name: "اضف منتج", href: "/admin/add-product" },
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
