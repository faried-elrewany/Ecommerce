import React from "react";
import labtops from "../images/laptops.png";
const Ad = () => {
  return (
    <div className=" flex md:flex-row flex-col gap-3 justify-evenly items-center bg-red-100 rounded-xl py-4">
      <div className=" text-2xl font-bold text-red-800">
        خصم يصل الي علي اللاب توب 30%
      </div>
      <img src={labtops} alt="image" className="object-contain h-[100px]" />
    </div>
  );
};

export default Ad;
// حولها لداينمك متنساش
