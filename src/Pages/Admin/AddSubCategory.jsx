import React from "react";
import SelectOptions from "../../Components/SelectOptions.jsx";
import { ButtonAction } from "../../Components/Coupon.jsx";
import { InputComponent, TextArea } from "./Input.jsx";
import { AdminMenu } from "../../Components/Utility/AdminLinks";
import SideBar from "../../Components/Utility/SideBar";
const AddSubCategory = () => {
  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={AdminMenu} />
        <div className="flex flex-col w-3/4  gap-4 p-8  ">
          <h2 className="self-start font-bold text-red-900 text-2xl">
            اضف تصنيف فرعي جديد
          </h2>
          {/* متنساش هتعمل ابديت للسيليكت وهتخليها ديناميك وبتبعتلها البروبس  */}
          <InputComponent label={"اسم التصنيف"} width={"w-56"} />

          <SelectOptions />
          <ButtonAction title="حفظ التعديلات" />
        </div>
      </div>
    </>
  );
};

export default AddSubCategory;
