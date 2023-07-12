import React from "react";
import avatar from "../../images/avatar.png";
import Input from "./Input.jsx";
import { ButtonAction } from "../../Coupon.jsx";

const AdminAddBrand = () => {
  return (
    <>
      <div className="flex flex-col gap-4 p-8 items-center justify-center">
        <h2 className="self-start font-bold text-red-900 text-2xl">
          {" "}
          اضف ماركة جديدة
        </h2>
        <div className="flex flex-col   justify-center">
          <p className="font-bold text-xl ">صورة الماركة</p>
          <img
            src={avatar}
            alt="add image photo"
            className="w-56 h-56 object-contain"
          />
        </div>
        <Input label={"اسم الماركة"} width={"w-56"} />
        <ButtonAction title="حفظ" />
      </div>
    </>
  );
};

export default AdminAddBrand;
