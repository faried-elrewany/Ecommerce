import React from "react";

import { ButtonAction } from "../../Components/Products/Coupon.jsx";
import { AdminMenu } from "../../Components/Utility/AdminLinks";
import SideBar from "../../Components/Utility/SideBar";
import { Input } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import CouponCard from "./CouponCard.jsx";
import { useParams } from "react-router-dom";
import EditCouponHook from "../../hook/coupon/edit-coupon-hook";

const AdminEditCoupon = () => {
  const { id } = useParams();
  const [
    coupnName,
    couponDate,
    couponValue,
    onChangeName,
    onChangeDate,
    onChangeValue,
    onSubmit,
  ] = EditCouponHook(id);
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
              size="md"
              type="date"
              value={couponDate}
              onChange={onChangeDate}
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
          {/* <div className=" flex flex-col gap-4">
            {coupons ? (
              coupons.map((item, index) => {
                return <CouponCard key={index} coupon={item} />;
              })
            ) : (
              <h4>لا يوجد كوبونات حتى الان</h4>
            )}
          </div> */}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AdminEditCoupon;
