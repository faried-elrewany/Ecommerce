import React from "react";
import brand1 from "../../images/brand1.png";
const BrandElement = ({ img }) => {
  return (
    <>
      <div className="bg-red-100 flex items-center  justify-center  w-36 h-36  ">
        <img
          src={brand1}
          alt="brandImage"
          className="object-contain w-32 h-32 "
        />
      </div>
    </>
  );
};

export default BrandElement;
