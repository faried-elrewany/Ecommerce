import React from "react";
import SelectOptions from "../../Components/Utility/SelectOptions.jsx";
import { Button } from "@material-tailwind/react";

import { InputComponent, TextArea } from "./Input.jsx";
import { AdminMenu } from "../../Components/Utility/AdminLinks";
import SideBar from "../../Components/Utility/SideBar";
import avatar from "../../images/avatar.png";

const AddNewProduct = () => {
  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={AdminMenu} />
        <div className="flex flex-col w-3/4  gap-4 p-8  ">
          <h2 className="self-start font-bold text-red-900 text-2xl">
            اضف منتج جديدة
          </h2>
          <div className="flex flex-col   justify-center">
            <p className="font-bold text-xl  ">صورة المنتج</p>
            <img
              src={avatar}
              alt="add image photo"
              className="w-48 h-full object-contain "
            />
          </div>
          <InputComponent label={"اسم المنتج"} width={"w-full"} />
          <TextArea label="تفاصيل المنتج" width={"w-full"} />
          <InputComponent label={"السعر قبل الخصم"} width={"w-full"} />
          <InputComponent label={"سعر المنتج "} width={"w-full"} />
          <SelectOptions />
          <SelectOptions />
          {/* <ButtonAction title="حفظ التعديلات" /> */}
          <a href={href} className="">
            <Button color="red" variant="outlined">
              حفظ التعديلات
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default AddNewProduct;
