import { Button, Input } from "@material-tailwind/react";
import React, { useState } from "react";
import ViewAddressesHook from "./../../hook/user/view-addresses-hook";
import OrderPayCashHook from "./../../hook/checkout/order-pay-cash-hook";
import { ToastContainer } from "react-toastify";
import OrderPayCardHook from "./../../hook/checkout/order-pay-card-hook";
import GetAllUserCartHook from "./../../hook/cart/get-all-user-cart-hook";
import notify from "../../hook/useNotifaction";
const PaymentMethod = () => {
  const [res] = ViewAddressesHook();
  const [handelChooseAddress, addressDetalis, handelCreateOrderCash] =
    OrderPayCashHook();
  const [handelCreateOrderCARD] = OrderPayCardHook(addressDetalis);
  const [, , totalCartPrice, , totalCartPriceAfterDiscount, , ,] =
    GetAllUserCartHook();

  const [type, setType] = useState("");
  const changeMathoud = (e) => {
    setType(e.target.value);
    console.log(type);
  };

  const handelPay = () => {
    if (type === "CARD") {
      console.log("order card");
      handelCreateOrderCARD();
    } else if (type === "CASH") {
      console.log("order cash");
      handelCreateOrderCash();
    } else {
      notify("من فضلك اختر طريقة دفع", "warn");
    }
  };
  return (
    <div className="p-2">
      <h2 className=" font-bold mt-8 text-red-900 text-2xl my-2">
        اضافة عنوان جديد
      </h2>

      <div className="  border-2 p-4 bg-gary-100 rounded-3xl border-red-600 w-full md:w-3/4 flex flex-col gap-8 ">
        <div className=" w-full flex items-center gap-8">
          <input
            id={"CASH"}
            className=" accent-red-700"
            type="radio"
            value="CASH"
            name={"PAYMENT"}
            onChange={changeMathoud}
          />
          <label className="font-bold text-xl " htmlFor="CASH">
            الدفع عند الاستلام
          </label>
        </div>
        <div className=" w-full flex items-center gap-8">
          <input
            id={"CARD"}
            className=" accent-red-700"
            type="radio"
            value="CARD"
            name={"PAYMENT"}
            onChange={changeMathoud}
          />
          <label className="font-bold text-xl " htmlFor="CARD">
            الدفع عن طريق البطاقة الائتمانية{" "}
          </label>
        </div>
        <div className=" w-full flex items-center gap-8">
          <select
            className="w-64 rounded  border bg-white border-gray-400 shadow-sm pl-3 pr-10 py-2 text-sm focus:outline-none focus:border-red-700 focus:shadow-outline-indigo"
            name="التصنيف الرئيسي"
            onChange={handelChooseAddress}
          >
            <option value="0" className="text-gray-700 !bg-white px-2">
              اختر عنوان للشحن
            </option>
            {res.data ? (
              res.data.map((item, index) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.alias}
                  </option>
                );
              })
            ) : (
              <option key={0} value={0}>
                لا يوجد عنوانين مسجلة
              </option>
            )}
          </select>
        </div>
      </div>
      <div className="flex w-full md:w-3/4 p-4 justify-end gap-2">
        <Button color="blue-gray" disabled>
          {totalCartPriceAfterDiscount >= 1
            ? `${totalCartPrice} جنيه ... بعد
          الخصم ${totalCartPriceAfterDiscount} `
            : `${totalCartPrice} جنيه`}
        </Button>
        <Button color="red" onClick={handelPay}>
          {" "}
          اتمام الشراء
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PaymentMethod;
