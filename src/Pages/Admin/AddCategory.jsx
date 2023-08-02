import React from "react";
import avatar from "../../images/avatar.png";
import { InputComponent } from "./Input.jsx";
import { ButtonAction } from "../../Components/Coupon.jsx";
import { AdminMenu } from "../../Components/Utility/AdminLinks";
import SideBar from "../../Components/Utility/SideBar";

const AddCategory = () => {
  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={AdminMenu} />

        <div className="flex flex-col gap-4 p-8 items-center   ">
          <h2 className="self-start font-bold text-red-900 text-2xl">
            اضف تصنيف جديد
          </h2>
          <div className="flex flex-col justify-center">
            <p className="font-bold text-xl "> صورة التصنيف</p>
            <img
              src={avatar}
              alt="add image photo"
              className="w-48 h-48 object-contain"
            />
          </div>
          <InputComponent label={"اسم التصنيف"} width={"w-56"} />
          <ButtonAction title="حفظ" />
        </div>
      </div>
    </>
  );
};

export default AddCategory;
