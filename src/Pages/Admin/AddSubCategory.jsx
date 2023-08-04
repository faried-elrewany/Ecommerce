import React from "react";

import { ButtonAction } from "../../Components/Products/Coupon.jsx";
import { Select, Option } from "@material-tailwind/react";
import { AdminMenu } from "../../Components/Utility/AdminLinks";
import SideBar from "../../Components/Utility/SideBar";
import addSubcategoryhook from "../../hook/subcategory/add-subcategory-hook.js";
import { Input } from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

const AddSubCategory = () => {
  const [
    id,
    name,
    loading,
    category,
    subcategory,
    handelChange,
    handelSubmit,
    onChangeName,
  ] = addSubcategoryhook();
  if (category) console.log(category.data, id);
  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={AdminMenu} />
        <div className="flex flex-col w-3/4  gap-4 p-8  ">
          <h2 className="self-start font-bold text-red-900 text-2xl">
            اضف تصنيف فرعي جديد
          </h2>
          <div className="w-56">
            <Input
              color="red"
              label="اسم التصنيف"
              value={name}
              onChange={onChangeName}
              size="sm"
            />
          </div>
          <div className="w-56">
            <Select
              label={"اختر تصنيف رئيسي"}
              value={name}
              onChange={handelChange}
            >
              {category.data ? (
                category.data.map((item) => (
                  <Option key={item._id} value={item}>
                    {item.name}
                  </Option>
                ))
              ) : (
                // <option> تصنيف </option>
                <option value="0">اختر تصنيف رئيسي</option>
              )}
            </Select>
          </div>

          <ButtonAction title="حفظ التعديلات" onClick={handelSubmit} />
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default AddSubCategory;
