import React from "react";
import { Link } from "react-router-dom";

const AdminOrder = ({ orderItem }) => {
  return (
    <>
      <Link
        to={`/admin/orders/${orderItem._id}`}
        className="  rounded-xl p-2 flex bg-white flex-col gap-2"
      >
        <p className="text-gray-700">طلب رقم : # {orderItem.id}</p>
        <div className="flex flex-col md:flex-row gap-2">
          <p> طلب من : {orderItem.user.name || ""} </p>
          <p> {orderItem.user.email || ""}</p>
        </div>
        <p className="flex justify-start md:justify-end">السعر : 14000</p>
        <div className=" flex flex-col md:flex-row w-full gap-4  items-center ">
          <div className="flex gap-2">
            <div className=" font-bold "> التوصيل</div>
            <div className="text-red-800 font-bold">
              {orderItem.isDelivered === true ? "تم التوصيل" : "لم يتم "}
            </div>
          </div>

          <div className="flex gap-2">
            <div className=" font-bold "> الدفع</div>
            <div className="text-red-800 font-bold">
              {orderItem.isPaid === true ? "تم الدفع" : "لم يتم "}
            </div>
          </div>
          <div className="flex gap-2">
            <div className=" font-bold "> طريقة الدفع</div>
            <div className="text-red-800 font-bold">
              {orderItem.paymentMethodType === "cash"
                ? "كاش"
                : "بطاقة ائتمانية"}{" "}
            </div>
          </div>
          <div className="flex gap-2">
            <div className=" font-bold "> السعر</div>
            <div className="text-red-800 font-bold">
              {orderItem.totalOrderPrice || 0} جنية{" "}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default AdminOrder;
