import React from "react";
import SideBar from "../Admin/AdminDrawer";

import { ButtonAction } from "../../Components/Coupon";
import { InputComponent, TextArea } from "../Admin/Input.jsx";
const listItems = [
  { name: "ادارة الطلبات", href: "#" },
  { name: "المنتجات المفضلة", href: "#" },
  { name: "العنواوين الشخصية", href: "#" },
  { name: "الملف الشخصي", href: "#" },
];
const UserAddAddressPage = () => {
  return (
    <>
      <div className="flex  justify-around items-center m-2">
        <h2 className=" font-bold text-red-900 text-2xl">اضافة عنوان جديد </h2>
        <SideBar items={listItems} />
      </div>
      <div className="flex flex-col gap-2 mx-auto w-72  my-4">
        <InputComponent
          label={"تسمية العنوان مثلا (المنزل- العمل)"}
          width={"w-72"}
        />
        <TextArea label={"العنوان بالتفصيل"} width={"w-72"} />
        <InputComponent label={"رقم الهاتف"} width={"w-72"} />
        <ButtonAction title="اضافة عنوان" />
      </div>
    </>
  );
};

export default UserAddAddressPage;
