import React from "react";
import { ButtonAction } from "../../Components/Products/Coupon.jsx";
import { AdminMenu } from "../../Components/Utility/AdminLinks";
import SideBar from "../../Components/Utility/SideBar";
import AddBrandHook from "../../hook/brand/add-brand-hook";
import { ToastContainer, toast } from "react-toastify";
import { Input } from "@material-tailwind/react";
import Loading from "../../Components/Utility/Loading";
const AdminAddBrand = () => {
  const [
    img,
    name,
    loading,
    isPress,
    handelSubmit,
    onImageChange,
    onChangeName,
  ] = AddBrandHook();
  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={AdminMenu} />
        <div className="flex flex-col gap-4 p-8  items-center ">
          <h2 className="self-start font-bold text-red-900 text-2xl">
            اضف ماركة جديدة
          </h2>
          <div className="flex flex-col   justify-center">
            <div>
              <label htmlFor="upload-photo">
                <img
                  loading="lazy"
                  src={img}
                  alt="fzx"
                  height="150px"
                  width="150px"
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
          </div>
          <Input
            label={"اسم الماركة"}
            width={"w-56"}
            value={name}
            onChange={onChangeName}
            color="red"
          />
          <ButtonAction title="حفظ" onClick={handelSubmit} />
          {isPress ? loading ? <Loading /> : <h4>تم الانتهاء</h4> : null}
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default AdminAddBrand;
