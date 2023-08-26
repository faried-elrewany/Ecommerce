import React from "react";
import ProductCard from "../Cart/CartPage";
import labtop from "../../images/labtop.png";
import {
  InputDisabled,
  ButtonAction,
} from "../../Components/Products/Coupon.jsx";
import SelectOptions from "../../Components/Utility/SelectOptions";
import SideBar from "../../Components/Utility/SideBar";
import { AdminMenu } from "../../Components/Utility/AdminLinks";
import { Link } from "react-router-dom";
import UserGetAllOrderHook from "./../../hook/user/user-get-all-order-hook";
import AdminOrder from "./AdminOrder";
import Loading from "../../Components/Utility/Loading";
import ReactPagination from "../../Components/Utility/ReactPagination";

const AdminAllOrders = () => {
  const [userName, results, paginate, orderData, onPress, loading] =
    UserGetAllOrderHook();

  return (
    <>
      <div className=" overflow-x-hidden  bg-gray-200 flex h-full">
        <SideBar menus={AdminMenu} />
        <div className="w-full h-full p-2">
          <h2 className="font-bold text-2xl m-2 text-red-900">
            ادارة جميع الطلبات
          </h2>
          <div className=" flex flex-col  w-full md:w-3/4  gap-4">
            {loading == false ? (
              orderData.length >= 1 ? (
                orderData.map((orderItem, index) => {
                  return <AdminOrder key={index} orderItem={orderItem} />;
                })
              ) : (
                <h6>لا يوجد طلبات حتى </h6>
              )
            ) : (
              <Loading />
            )}
            {paginate.numberOfPages >= 2 ? (
              <ReactPagination
                onPress={onPress}
                pageCount={paginate.numberOfPages ? paginate.numberOfPages : 0}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAllOrders;
