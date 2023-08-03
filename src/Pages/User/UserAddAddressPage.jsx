import React from "react";
import SideBar from "../../Components/Utility/SideBar";
import { UserMenu } from "../../Components/Utility/AdminLinks.jsx";
import { ButtonAction } from "../../Components/Products/Coupon";
import { InputComponent, TextArea } from "../Admin/Input.jsx";

const UserAddAddressPage = () => {
  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={UserMenu} />
        <div className="flex flex-col  items-center m-2">
          <h2 className=" font-bold text-red-900 text-2xl my-2">
            اضافة عنوان جديد
          </h2>
          <div className="flex flex-col gap-2  w-56  my-4">
            <InputComponent
              label={"تسمية العنوان مثلا (المنزل- العمل)"}
              width={"w-56"}
            />
            <TextArea label={"العنوان بالتفصيل"} width={"w-56"} />
            <InputComponent label={"رقم الهاتف"} width={"w-56"} />
            <ButtonAction title="اضافة عنوان" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAddAddressPage;
