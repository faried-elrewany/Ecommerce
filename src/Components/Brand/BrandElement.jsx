import React from "react";
import brand1 from "../../images/brand1.png";
const BrandElement = ({ img }) => {
  return (
    <>
      <div className="bg-red-50 flex rounded-3xl items-center  justify-center  w-36 h-36  ">
        <img
          src={img}
          alt="brandImage"
          className="object-contain w-32 h-32 bg-red-100  rounded-full"
        />
      </div>
    </>
  );
};

export default BrandElement;
