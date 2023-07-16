import React from "react";
import SelectOptions from "../../Components/SelectOptions.jsx";
import { ButtonAction } from "../../Components/Coupon.jsx";
import { InputComponent, TextArea } from "./Input.jsx";

import avatar from "../../images/avatar.png";

const AddNewProduct = () => {
  return (
    <>
      <div className="flex flex-col w-3/4   items-center gap-4 p-8  justify-center">
        <h2 className="self-start font-bold text-red-900 text-2xl">
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
        <InputComponent label={"اسم المنتج"} width={"w-full"} />
        <TextArea label="تفاصيل المنتج" />

        <InputComponent label={"السعر قبل الخصم"} width={"w-full"} />
        <InputComponent label={"سعر المنتج "} width={"w-full"} />
        <SelectOptions />
        <SelectOptions />
        <ButtonAction title="حفظ التعديلات" />
      </div>
    </>
  );
};

export default AddNewProduct;
