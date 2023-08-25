import React from "react";
import PropTypes from "prop-types";
import { TrashIcon } from "@heroicons/react/24/outline";

import { Quantity } from "../../Components/Products/Coupon.jsx";
import labtop from "../../images/labtop.png";
import UserGetAllOrderHook from "./../../hook/user/user-get-all-order-hook";
import SideBar from "../../Components/Utility/SideBar";
import { UserMenu } from "../../Components/Utility/AdminLinks.jsx";
import baseUrl from "../../Api/baseURL.js";
export function ProductCard({ item }) {
  console.log(item.product.imageCover);
  return (
    <div className="flex rounded-lg flex-col md:flex-row p-2 mb-2 bg-red-50 w-full">
      <div className="w-full flex md:w-64 justify-center items-center">
        <img
          className="md:w-3/4 object-contain object-center"
          src={baseUrl.getUri() + "/products/" + item.product.imageCover}
          alt={item.product.title || ""}
        />
      </div>
      <div className="w-full flex flex-col gap-y-4 gap-2">
        <div className="flex justify-between items-center ">
          <div className="font-semibold"> {item.product.title || ""}</div>
          <button>
            <TrashIcon className="h-8 w-8 text-red-400" />
          </button>
        </div>
        <p className="text-small mb-2">
          {item.product.ratingsAverage ? item.product.ratingsAverage : 0}
        </p>
        <p className="text-small mb-2">
          ({`${item.product.ratingsQuantity || 0} تقييم`})
        </p>
        <p className="text-xl bold">
          الماركة: <span className="text-lg ">{444}</span>
        </p>
        <div className="flex justify-between items-center">
          <input
            type="number"
            id="Quantity"
            value={item.count}
            className="h-10 outline-none  w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
      </div>
    </div>
  );
}

function UserOrder({ products }) {
  console.log(products);
  return (
    <>
      <div className="flex flex-col p-4 border-4 border-red-500 items-center justify-center rounded-lg">
        <h4 className="font-bold text-red-900 text-xl">
          طلب رقم: <span>#14521</span>
        </h4>
        {products.cartItems
          ? products.cartItems.map((product) => (
              <ProductCard key={product._id} item={product} />
            ))
          : null}
        {/* {orderItem.cartItems
          ? orderItem.cartItems.map((item, index) => {
              return <UserAllOrderCard key={index} item={item} />;
            })
          : null} */}
        <div className="flex w-full  items-center justify-between">
          <p className="text-xl bold">
            الحالة: <span className="text-lg">{44}</span>
          </p>
          <p className="text-xl bold">
            <span className="text-lg">{44}</span> جنية
          </p>
        </div>
      </div>
    </>
  );
}

const UserAllOrdersPage = () => {
  const [userName, results, paginate, orderData, onPress] =
    UserGetAllOrderHook();

  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={UserMenu} />

        {/* orderd container for all orders  */}
        <div className="flex flex-col gap-4  p-2  ">
          {/* order data */}
          <h2 className=" font-bold text-red-900 text-2xl">
            عدد الطلبات #{results}
          </h2>
          {orderData.length >= 1 ? (
            orderData.map((orderItem, index) => {
              return <UserOrder key={index} products={orderItem} />;
            })
          ) : (
            <h6>لا يوجد طلبات حتى </h6>
          )}
          {/* <UserOrder
            products={productsList}
            status={"قيد التنفيذ"}
            price={"3000"}
          />
          <UserOrder
            products={productsList}
            status={"قيد التنفيذ"}
            price={"3000"}
          />
          <UserOrder
            products={productsList}
            status={"قيد التنفيذ"}
            price={"3000"}
          /> */}
        </div>
      </div>
    </>
  );
};

export default UserAllOrdersPage;
