import React from "react";
import SideBar from "../Admin/AdminDrawer";
import Pagination from "../../Components/Pagination";
import { EyeIcon } from "@heroicons/react/24/outline";
import { ButtonAction } from "../../Coupon";
import { InputComponent, TextArea } from "../Admin/Input.jsx";
function UserProfileComponent(props) {
  return (
    <div className="w-11/12 mx-auto flex flex-col bg-gray-200 rounded-lg gap-4 p-4 justify-content">
      <div className="flex items-center justify-between">
        <p></p>
        <div className="flex justify-center items-center gap-2">
          <a href="#" className="flex justify-center items-center gap-2">
            <div>تعديل</div>
            <EyeIcon className="h-6 w-6 text-red-500" />
          </a>
        </div>
      </div>
      <p className="text-xl bold">
        الاسم : <span className="text-lg">{props.name}</span>
      </p>

      <p className="text-xl bold">
        رقم الهاتف : <span className="text-lg">{props.phone}</span>
      </p>
      <p className="text-xl bold">
        الايميل : <span className="text-lg">{props.email}</span>
      </p>
    </div>
  );
}
const UserProfilePage = () => {
  const listItems = [
    { name: "ادارة الطلبات", href: "#" },
    { name: "المنتجات المفضلة", href: "#" },
    { name: "العنواوين الشخصية", href: "#" },
    { name: "الملف الشخصي", href: "#" },
  ];
  return (
    <>
      <div className="flex  justify-around items-center m-4">
        <h2 className="self-start font-bold text-red-900 text-2xl">
          الصفحة الشخصية
        </h2>
        <SideBar items={listItems} />
      </div>
      <div className=" flex flex-col gap-4">
        <UserProfileComponent
          name="فريد محمد فؤاد عز الدين"
          email="fariedelrewany@gmail.com"
          phone="01552805430"
        />
      </div>
      <div className=" flex mx-auto flex-col w-72  justify-center m-8 items-center  gap-4 border-2 border-red-500 rounded-lg p-4">
        <h4 className="font-bold text-2xl"> تغيير كلمة المرور</h4>

        {/* هتعدلها وتبعتلها البروبس الي هي الاراي */}
        <InputComponent label={"ادخل كلمة المرور القديمة"} />
        <InputComponent label={"ادخل كلمة المرور الجديدة"} />
        <div className=" flex flex-col gap-2 mb-4 self-center" dir="ltr">
          <ButtonAction title="حفظ كلمة السر" />
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
