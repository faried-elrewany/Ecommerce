import React from "react";
import labtops from "../images/laptops.png";
const Ad = () => {
  return (
    <div className=" flex md:flex-row flex-col gap-3 justify-evenly items-center bg-red-100 rounded-xl py-4 m-4">
      <div className=" sm:text-xl md:text-2xl font-bold text-red-800">
        خصم يصل الي علي اللاب توب 30%
      </div>
      <img
        loading="lazy"
        src={labtops}
        alt="image"
        loading="lazy"
        className="object-contain h-[100px]"
      />
    </div>
  );
};

export default Ad;
// حولها لداينمك متنساش
