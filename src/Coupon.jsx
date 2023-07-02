import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";

export default function CouponInput(props) {
  const [coupon, setCoupon] = useState("");

  const handleCouponChange = (event) => {
    setCoupon(event.target.value);
  };

  const handleApplyClick = () => {
    // TODO: Implement coupon apply feature
    console.log(`Applying coupon code ${coupon}`);
    // ابقي شوف هتطبق الكوبون ازاي
    // props.onApply(coupon);
  };

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="text"
        label="Coupon Code"
        value={coupon}
        onChange={handleCouponChange}
        className="pr-20"
        color="indigo"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={coupon ? "indigo" : "blue-gray"}
        disabled={!coupon}
        className="!absolute right-1 top-1 rounded"
        onClick={handleApplyClick}
      >
        Apply
      </Button>
    </div>
  );
}
