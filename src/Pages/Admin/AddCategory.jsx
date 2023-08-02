import React from "react";
import avatar from "../../images/avatar.png";
import { InputComponent } from "./Input.jsx";
import { ButtonAction } from "../../Components/Coupon.jsx";
import { AdminMenu } from "../../Components/Utility/AdminLinks";
import SideBar from "../../Components/Utility/SideBar";
import AddCategoryHook from "../../hook/category/add-category-hook";
import { Input } from "@material-tailwind/react";

const AddCategory = () => {
  const [
    img,
    name,
    loading,
    isPress,
    handelSubmit,
    onImageChange,
    onChangeName,
  ] = AddCategoryHook();
  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={AdminMenu} />

        <div className="flex flex-col gap-4 p-8 items-center   ">
          <h2 className="self-start font-bold text-red-900 text-2xl">
            اضف تصنيف جديد
          </h2>

          <div>
            <label for="upload-photo">
              <img
                src={img}
                alt="fzx"
                height="100px"
                width="120px"
                style={{ cursor: "pointer" }}
              />
            </label>
            <input
              type="file"
              name="photo"
              onChange={onImageChange}
              id="upload-photo"
            />
          </div>
          {/* <InputComponent
            label={"اسم التصنيف"}
            width={"w-56"}
            name={name}
            onChange={onChangeName}
          /> */}
          <Input color="red" value={name} onChange={onChangeName} />

          <ButtonAction title="حفظ" onClick={handelSubmit} />
        </div>
      </div>
    </>
  );
};

export default AddCategory;
