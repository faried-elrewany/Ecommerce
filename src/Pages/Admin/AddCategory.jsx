import React from "react";
import avatar from "../../images/avatar.png";
import { InputComponent } from "./Input.jsx";
import { ButtonAction } from "../../Components/Products/Coupon.jsx";
import { AdminMenu } from "../../Components/Utility/AdminLinks";
import SideBar from "../../Components/Utility/SideBar";
import AddCategoryHook from "../../hook/category/add-category-hook";
import { ToastContainer, toast } from "react-toastify";
import { Input } from "@material-tailwind/react";
import Loading from "../../Components/Utility/Loading";

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
            <label htmlFor="upload-photo">
              <img
                loading="lazy"
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

          <Input
            color="red"
            label="اسم التصنيف"
            value={name}
            onChange={onChangeName}
          />
          <ButtonAction title="حفظ" onClick={handelSubmit} />
          {isPress ? loading ? <Loading /> : <h4>تم الانتهاء</h4> : null}
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default AddCategory;
