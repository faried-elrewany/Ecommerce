import React from "react";
import SideBar from "../../Components/Utility/SideBar";
import { UserMenu } from "../../Components/Utility/AdminLinks.jsx";
import { ButtonAction } from "../../Components/Products/Coupon";
import { Textarea, Input, Button } from "@material-tailwind/react";
import AddAddressHook from "../../hook/user/add-address-hook";
import { ToastContainer } from "react-toastify";
const UserAddAddressPage = () => {
  const [
    alias,
    detalis,
    phone,
    onChangeAlias,
    onChangeDetalis,
    onChangePhone,
    onSubmit,
  ] = AddAddressHook();
  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={UserMenu} />
        <div className="flex flex-col  items-center m-2">
          <h2 className=" font-bold text-red-900 text-2xl my-2">
            اضافة عنوان جديد
          </h2>
          <div className="flex flex-col gap-2  w-56  my-4">
            <Input
              color="red"
              label="تسمية العنوان مثلا(المنزل - العمل)"
              value={alias}
              onChange={onChangeAlias}
            />
            <div className="w-full px-">
              <Textarea
                value={detalis}
                onChange={onChangeDetalis}
                label="العنوان الشخصي بالتفصيل"
                color="red"
              />
              <Input
                color="red"
                label=" تعديل رقم الهاتف "
                value={phone}
                onChange={onChangePhone}
                type="phone"
              />
            </div>

            <Button color="red" onClick={onSubmit}>
              اضف عنوان
            </Button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default UserAddAddressPage;
