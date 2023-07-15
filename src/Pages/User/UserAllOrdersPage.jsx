import React from "react";
import SideBar from "../Admin/AdminDrawer";
import Pagination from "../../Pagination";
import PropTypes from "prop-types";
import { TrashIcon } from "@heroicons/react/24/outline";

import { Quantity } from "../../Coupon.jsx";
import labtop from "../../images/labtop.png";

export function ProductCard({
  image,
  category,
  description,
  brand,
  colors,
  price,
}) {
  return (
    <div className="flex rounded-lg flex-col md:flex-row p-2 mb-2 bg-red-50 w-full">
      <div className="w-full flex md:w-64 justify-center items-center">
        <img
          className="md:w-3/4 object-contain object-center"
          src={image}
          alt={`${brand} ${category}`}
        />
      </div>
      <div className="w-full flex flex-col gap-y-4 gap-2">
        <div className="flex justify-between items-center ">
          <div className="font-semibold">{category}</div>
          <button>
            <TrashIcon className="h-8 w-8 text-red-400" />
          </button>
        </div>
        <p className="text-small mb-2">{description}</p>
        <p className="text-xl bold">
          الماركة: <span className="text-lg ">{brand}</span>
        </p>
        <div className="flex justify-between items-center">
          <Quantity />
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
};
const listItems = [
  { name: "ادارة الطلبات", href: "#" },
  { name: "المنتجات المفضلة", href: "#" },
  { name: "العنواوين الشخصية", href: "#" },
  { name: "الملف الشخصي", href: "#" },
];
const productsList = [
  {
    id: 1,
    image: labtop,
    description:
      "آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم (برودكت) أحمر4.5(160 تقييم)",
    category: "اجهزة الكترونية",
    brand: "سامسونج",
    colors: ["red"],
    price: 3000,
  },
  {
    id: 2,
    image: labtop,
    description:
      "آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم (برودكت) أحمر4.5(160 تقييم)",
    category: "اجهزة الكترونية",
    brand: "سامسونج",
    colors: ["red"],
    price: 3000,
  },
];
function UserOrder({ products, status, price }) {
  return (
    <>
      <div className="flex flex-col p-4 border-4 border-red-500 items-center justify-center rounded-lg">
        <h3 className="font-bold text-red-900 text-2xl">
          طلب رقم: <span>#14521</span>
        </h3>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
        <div className="flex w-full  items-center justify-between">
          <p className="text-xl bold">
            الحالة: <span className="text-lg">{status}</span>
          </p>
          <p className="text-xl bold">
            <span className="text-lg">{price}</span> جنية
          </p>
        </div>
      </div>
    </>
  );
}

const UserAllOrdersPage = () => {
  return (
    <>
      <div className="flex  justify-around items-center m-2">
        <h2 className=" font-bold text-red-900 text-2xl">كل الطلبات </h2>
        <SideBar items={listItems} />
      </div>
      {/* orderd container for all orders  */}
      <div className="flex flex-col gap-4  p-2  ">
        {/* order data */}
        <UserOrder
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
        />
      </div>
    </>
  );
};

export default UserAllOrdersPage;
