import React from "react";
import { UserOrder } from "../User/UserAllOrdersPage";
import { useParams } from "react-router-dom";
import GetOrderDetalisHook from "./../../hook/admin/get-order-detalis-hook";
import ChangeOrderStatusHook from "./../../hook/admin/change-order-status-hook";
import { ToastContainer } from "react-toastify";
import { Button } from "@material-tailwind/react";
import SideBar from "../../Components/Utility/SideBar";
import { AdminMenu } from "../../Components/Utility/AdminLinks";
const AdminOrderDetails = () => {
  const { id } = useParams();
  const [orderData, cartItems] = GetOrderDetalisHook(id);

  const [
    formatDate,
    onChangePaid,
    changePayOrder,
    onChangeDeliver,
    changeDeliverOrder,
  ] = ChangeOrderStatusHook(id);
  return (
    <>
      <div className=" overflow-x-hidden w-full flex h-full">
        <SideBar menus={AdminMenu} />

        <div className="p-4 w-full">
          <UserOrder products={orderData} />
          <div className=" flex flex-col w-full p-4  items-start   my-8 gap-4 border-2 border-red-500 rounded-lg ">
            <h4 className="font-bold text-2xl">تفاصيل العميل</h4>
            <p className="font-extrabold text-red-900">
              الاسم:{" "}
              <span className="font-medium text-gray-800">
                {" "}
                {orderData ? (orderData.user ? orderData.user.name : "") : ""}
              </span>
            </p>
            <p className="font-extrabold text-red-900">
              رقم الهاتف:{" "}
              <span className="font-medium text-gray-800">
                {" "}
                {orderData ? (orderData.user ? orderData.user.phone : "") : ""}
              </span>
            </p>
            <p className="font-extrabold text-red-900">
              الايميل:{" "}
              <span className="font-medium text-gray-800">
                {" "}
                {orderData ? (orderData.user ? orderData.user.email : "") : ""}
              </span>
            </p>

            <div className="flex flex-col md:flex-row mt-2 gap-4 justify-center">
              <div className="flex gap-2">
                <select
                  name="pay"
                  id="paid"
                  onChange={onChangePaid}
                  className="select input-form-area mt-1  text-center w-50"
                >
                  <option value="0">الدفع</option>
                  <option value="true">تم</option>
                  <option value="false">لم يتم</option>
                </select>
                <Button onClick={changePayOrder} color="red" size="sm">
                  حفظ{" "}
                </Button>
              </div>
              <div className="flex gap-2">
                <select
                  onChange={onChangeDeliver}
                  name="deliver"
                  id="deliver"
                  className="select input-form-area mt-1  text-center  w-50"
                >
                  <option value="0">التوصيل</option>
                  <option value="true">تم</option>
                  <option value="false">لم يتم</option>
                </select>
                <Button onClick={changeDeliverOrder} size="sm" color="red">
                  حفظ{" "}
                </Button>
              </div>
            </div>
            {/* هتعدلها وتبعتلها البروبس الي هي الاراي */}
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default AdminOrderDetails;
