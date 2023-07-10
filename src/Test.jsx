import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

import {
  Coupon,
  InputDisabled,
  ButtonAction,
  Colors,
  Quantity,
} from "./Coupon.jsx";
import Header from "./ComplexNavbar.jsx";
import labtop from "./images/labtop.png";

const Test = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <h2 className="text-red-400 mt-4 text-2xl font-bold ">عربة التسوق </h2>
      {/* layout conatiner */}

      <div className=" overflow-hidden flex items-center justify-center flex-col md:flex-row w-full gap-4  p-4 ">
        {/* right side */}
        <div className="flex-col w-full ">
          {/*  start component */}
          <div className="flex rounded-lg flex-col md:flex-row p-2 mb-2  bg-red-50 w-full  ">
            <div className="  w-full  flex md:w-64  justify-center items-center">
              <img
                className="    md:w-3/4  object-contain object-center"
                src={labtop}
                alt="labtop"
              />
            </div>
            <div className=" w-full flex-col gap-y-4 ">
              <div className="flex  justify-between items-center mb-2   ">
                <div className="font-semibold">الالكترونيات</div>
                <button>
                  <TrashIcon className="h-8 w-8  text-red-400" />
                </button>
              </div>
              <p className="text-small mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <p>
                الماركة: <span>ابل</span>
              </p>
              <Colors />
              <div className="flex  justify-between items-center ">
                <Quantity className="" />
                <p>
                  <span>3000</span>جنية
                </p>
              </div>
            </div>
          </div>

          {/*  end component */}
        </div>

        {/* left side */}
        <div className=" md:self-start w-64 rounded-md p-2 flex flex-col justify-center items-center gap-2 ">
          <Coupon />
          <InputDisabled value={15020} className="w-full" />
          <ButtonAction className="w-full" title="اتمام الشراء" />
        </div>
      </div>
    </div>
  );
};

export default Test;
