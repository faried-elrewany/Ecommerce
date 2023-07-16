import React from "react";
import avatar from "../../images/avatar.png";
import { InputComponent } from "./Input.jsx";
import { ButtonAction } from "../../Components/Coupon.jsx";
import SideBar from "../../Components/AdminDrawer";

const AddCategory = () => {
  return (
    <>
      <div className="flex  justify-around items-center m-2">
        <h2 className="self-start font-bold text-red-900 text-2xl">ادمن</h2>
        <SideBar items={listItems} />
      </div>
      <div className="flex flex-col gap-4 p-8  items-center justify-center">
        <h2 className="self-start font-bold text-red-900 text-2xl">
          اضف تصنيف جديد
        </h2>
        <div className="flex flex-col justify-center">
          <p className="font-bold text-xl "> صورة التصنيف</p>
          <img
            src={avatar}
            alt="add image photo"
            className="w-56 h-56 object-contain"
          />
        </div>
        <InputComponent label={"اسم التصنيف"} width={"w-56"} />
        <ButtonAction title="حفظ" />
      </div>
    </>
  );
};

export default AddCategory;
