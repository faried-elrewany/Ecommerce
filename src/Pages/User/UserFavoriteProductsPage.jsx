import React from "react";
import SideBar from "../../Components/AdminDrawer";
import CardElement from "../../Components/Card";
import Row from "../../Components/Row";
import Pagination from "../../Components/Pagination";

const UserFavoriteProductsPage = () => {
  const listItems = [
    { name: "ادارة الطلبات", href: "#" },
    { name: "المنتجات المفضلة", href: "#" },
    { name: "العنواوين الشخصية", href: "#" },
    { name: "الملف الشخصي", href: "#" },
  ];
  return (
    <>
      <div className="flex  justify-around items-center m-2">
        <h2 className="self-start font-bold text-red-900 text-2xl">
          منتجاتك المفضلة
        </h2>
        <SideBar items={listItems} />
      </div>
      <Row>
        {/* متنساش اعمل الكارد ديناميك */}
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
      </Row>
      <Pagination />
    </>
  );
};

export default UserFavoriteProductsPage;
