import React, { useState, useEffect } from "react";
import { Input, Button } from "@material-tailwind/react";

export default function CouponInput({ value, onChange, onClear }) {
  const handleCouponChange = (event) => {
    const newValue = event?.target?.value || "";
    setCoupon(newValue);
  };

  const handleApplyClick = () => {
    console.log(`Applying coupon code ${value}`);
    // Call the onChange function to update the coupon state
    onChange(value);
  };

  const handleClearClick = () => {
    // Call the onClear function to clear the coupon state
    onClear();
  };

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="text"
        label="Coupon Code"
        value={value}
        onChange={handleCouponChange}
        className="pr-20"
        color="indigo"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={value ? "indigo" : "blue-gray"}
        disabled={!value}
        className="!absolute right-1 top-1 rounded"
        onClick={handleApplyClick}
      >
        Apply
      </Button>
      {value && (
        <Button
          size="sm"
          color="red"
          className="!absolute right-20 top-1 rounded"
          onClick={handleClearClick}
        >
          Clear
        </Button>
      )}
    </div>
  );
}
