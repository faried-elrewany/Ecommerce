import React, { useEffect, useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import { AiTwotoneDelete, AiFillStar } from "react-icons/ai";

import labtop from "../../images/labtop.png";
import { Button, Input } from "@material-tailwind/react";
import GetAllUserCartHook from "./../../hook/cart/get-all-user-cart-hook";
import DeleteCartHook from "../../hook/cart/delete-cart-hook";
import ApplayCouponHook from "./../../hook/cart/applay-coupon-hook";
import ProductCard from "./ProductCart";
import CheckOut from "./CheckOut";
import { ToastContainer } from "react-toastify";

const CartPage = () => {
  const [
    itemsNum,
    cartItems,
    totalCartPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
  ] = GetAllUserCartHook();
  const [handelDeleteCart] = DeleteCartHook();

  const [couponName, onChangeCoupon, handelSubmitCoupon] = ApplayCouponHook();

  useEffect(() => {
    if (couponNameRes) {
      onChangeCoupon(couponNameRes);
    }
  }, [couponNameRes]);
  if (cartItems) console.log(cartItems);
  return (
    <div>
      <h2 className="text-red-400 mt-4 text-2xl font-bold ">عربة التسوق </h2>

      <div className=" overflow-hidden flex items-center justify-center flex-col md:flex-row w-full gap-4  p-4 ">
        {/* right side */}
        <div className="flex-col w-full ">
          {cartItems && cartItems.length >= 1 ? (
            cartItems.map((item, index) => {
              return <ProductCard key={index} item={item} />;
            })
          ) : (
            <h6 className="font-bold text-3xl ">لا يوجد منتجات فى العربة</h6>
          )}
        </div>

        {/* left side */}
        <CheckOut
          couponNameRes={couponNameRes}
          totalCartPriceAfterDiscount={totalCartPriceAfterDiscount}
          totalCartPrice={totalCartPrice}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartPage;
