import React, { useRef } from "react";

import { ButtonAction } from "../../Components/Products/Coupon.jsx";
import { AdminMenu } from "../../Components/Utility/AdminLinks";
import SideBar from "../../Components/Utility/SideBar";
import { Input } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import AddCouponHook from "../../hook/coupon/add-coupon-hook";
import CouponCard from "./CouponCard.jsx";

const AdminAddCoupon = () => {
  const dateRef = useRef();
  const [
    coupnName,
    couponDate,
    couponValue,
    onChangeName,
    onChangeDate,
    onChangeValue,
    onSubmit,
    coupons,
  ] = AddCouponHook();
  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={AdminMenu} />
        <div className="flex flex-col w-3/4  gap-4 p-8  ">
          <h2 className="self-start font-bold text-red-900 text-2xl">
            اضف كوبون جديد
          </h2>
          <div className="w-56">
            <Input
              color="red"
              label="اسم الكوبون"
              value={coupnName}
              onChange={onChangeName}
              type="text"
              size="md"
            />
          </div>
          <div className="w-56">
            <Input
              color="red"
              label=" وقت انتهاء الكوبون"
              ref={dateRef}
              size="md"
              type="date"
              onChange={onChangeDate}
              value={couponDate}
              onFocus={() => (dateRef.current.type = "date")}
              onBlur={() => (dateRef.current.type = "text")}
            />
          </div>
          <div className="w-56">
            <Input
              color="red"
              label="نسبة خصم الكوبون "
              value={couponValue}
              onChange={onChangeValue}
              type="number"
              size="md"
            />
          </div>
          <ButtonAction title="حفظ التعديلات" onClick={onSubmit} />
          <div className=" flex flex-col gap-4">
            {coupons ? (
              coupons.map((item, index) => {
                return <CouponCard key={index} coupon={item} />;
              })
            ) : (
              <h4>لا يوجد كوبونات حتى الان</h4>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AdminAddCoupon;
