import React from "react";
import CardElement from "../../Components/Card";
import Row from "../../Components/Utility/Row";
import SideBar from "../../Components/Utility/SideBar";
import { UserMenu } from "../../Components/Utility/AdminLinks.jsx";
const UserFavoriteProductsPage = () => {
  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={UserMenu} />
        <div>
          <h2 className="self-start font-bold m-2 text-red-900 text-2xl">
            منتجاتك المفضلة
          </h2>
          <div className="flex flex-wrap gap-4 p-2">
            {/* متنساش اعمل الكارد ديناميك */}
            <CardElement />
            <CardElement />
            <CardElement />
            <CardElement />
            <CardElement />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFavoriteProductsPage;
