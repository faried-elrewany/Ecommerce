import React, { useEffect } from "react";
import { Button, Input } from "@material-tailwind/react";
import DeleteCartHook from "../../hook/cart/delete-cart-hook";
import ApplayCouponHook from "./../../hook/cart/applay-coupon-hook";
import { ToastContainer } from "react-toastify";

const CheckOut = ({
  totalCartPrice,
  totalCartPriceAfterDiscount,
  couponNameRes,
  cartItems,
}) => {
  const [handelDeleteCart] = DeleteCartHook();

  const [couponName, onChangeCoupon, handelSubmitCoupon, handelCheckout] =
    ApplayCouponHook(cartItems);

  useEffect(() => {
    if (couponNameRes) {
      onChangeCoupon(couponNameRes);
    }
  }, [couponNameRes]);
  return (
    <>
      <div className=" md:self-start w-64 rounded-md p-2 flex flex-col justify-center items-center gap-2 ">
        <div className="relative flex  w-56">
          <Input
            type="text"
            color="red"
            className="pr-20"
            placeholder="كود الخصم"
            size="md"
            value={couponName}
            onChange={(e) => onChangeCoupon(e.target.value)}
          />
          <Button
            color="red"
            size="sm"
            className="!absolute right-1 top-1 rounded"
            onClick={handelSubmitCoupon}
          >
            Apply
          </Button>
        </div>
        <div className="w-full">
          <Input
            type="text"
            className="text-center"
            color="red"
            size="sm"
            disabled
            value={
              totalCartPriceAfterDiscount >= 1
                ? `${totalCartPrice} جنيه ... بعد الخصم ${totalCartPriceAfterDiscount} `
                : `${totalCartPrice} جنيه`
            }
          />
        </div>
        <Button className="w-full" color="red" onClick={handelCheckout}>
          اتمام الشراء
        </Button>
        <Button
          onClick={handelDeleteCart}
          className="w-full"
          variant="text"
          color="red"
        >
          حذف العربة
        </Button>
      </div>
      <ToastContainer />
    </>
  );
};

export default CheckOut;
