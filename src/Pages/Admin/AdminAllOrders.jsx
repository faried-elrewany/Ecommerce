import React from "react";
import { ProductCard } from "../Cart/CartPage";
import labtop from "../../images/labtop.png";
import {
  InputDisabled,
  ButtonAction,
} from "../../Components/Products/Coupon.jsx";
import SelectOptions from "../../Components/Utility/SelectOptions";
import SideBar from "../../Components/Utility/SideBar";
import { AdminMenu } from "../../Components/Utility/AdminLinks";

const AdminAllOrders = () => {
  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={AdminMenu} />
        <div className="w-full h-full p-2">
          <h2 className="font-bold text-2xl m-2 text-red-900">
            ادارة جميع الطلبات
          </h2>
          <div className=" flex flex-col w-3/4  justify-center">
            <ProductCard
              image={labtop}
              category="اجهزة الكترونية"
              brand="سامسونج"
              colors={["red"]}
              price={3000}
            />
            <ProductCard
              image={labtop}
              category="اجهزة الكترونية"
              brand="سامسونج"
              colors={["red"]}
              price={3000}
            />
            <ProductCard
              image={labtop}
              category="اجهزة الكترونية"
              brand="سامسونج"
              colors={["red"]}
              price={3000}
            />
          </div>
          <div className=" flex flex-col w-64   items-start  gap-4 border-2 border-red-500 rounded-lg p-4">
            <h4 className="font-bold text-2xl">تفاصيل العميل</h4>
            <p className="font-extrabold text-red-900">
              الاسم:{" "}
              <span className="font-medium text-gray-800">احمد عبدالله</span>
            </p>
            <p className="font-extrabold text-red-900">
              الاسم:{" "}
              <span className="font-medium text-gray-800">احمد عبدالله</span>
            </p>
            <p className="font-extrabold text-red-900">
              الاسم:{" "}
              <span className="font-medium text-gray-800">احمد عبدالله</span>
            </p>

            <div className="self-center">
              <InputDisabled value="4000" />
            </div>
            {/* هتعدلها وتبعتلها البروبس الي هي الاراي */}
            <div className=" flex flex-col gap-2 mb-16 self-center" dir="ltr">
              <SelectOptions />
              <ButtonAction title="حفظ" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAllOrders;
