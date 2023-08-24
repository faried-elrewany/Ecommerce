import React from "react";
import { Link } from "react-router-dom";
const BrandElement = ({ img, id }) => {
  return (
    <>
      <Link
        to={`/products/brand/${id}`}
        className="bg-red-50 flex rounded-3xl items-center  justify-center  w-36 h-36  "
      >
        <img
          src={img}
          alt="brandImage"
          className="object-contain w-32 h-32 bg-red-100  rounded-full"
        />
      </Link>
    </>
  );
};

export default BrandElement;
