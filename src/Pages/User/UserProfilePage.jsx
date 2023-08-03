import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { ButtonAction } from "../../Components/Products/Coupon";
import { InputComponent } from "../Admin/Input.jsx";
import SideBar from "../../Components/Utility/SideBar";
import { UserMenu } from "../../Components/Utility/AdminLinks.jsx";
function UserProfileComponent(props) {
  return (
    <div className="w-64  flex flex-col whitespace-pre-wrap text-sm bg-gray-200 rounded-lg gap-4 p-4 ">
      <div className="flex items-center justify-between">
        <p></p>
        <div className="flex justify-center items-center gap-2">
          <a href="#" className="flex justify-center items-center gap-2">
            <div>تعديل</div>
            <EyeIcon className="h-6 w-6 text-red-500" />
          </a>
        </div>
      </div>
      <p className="text-sm bold">
        الاسم : <span className="text-sm">{props.name}</span>
      </p>

      <p className="text-sm bold">
        رقم الهاتف : <span className="text-sm">{props.phone}</span>
      </p>
      <p className="text-sm bold">
        الايميل : <span className="text-sm">{props.email}</span>
      </p>
    </div>
  );
}
const UserProfilePage = () => {
  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={UserMenu} />
        <div className="flex w-full flex-col  m-2">
          <h2 className="self-start font-bold text-red-900 text-2xl">
            الصفحة الشخصية
          </h2>
          <div className=" flex flex-col gap-4">
            <UserProfileComponent
              name="فريد محمد فؤاد عز الدين"
              email="fariedelrewany@gmail.com"
              phone="01552805430"
            />
          </div>
          <div className=" flex  flex-col w-64 my-4   items-center  gap-4 border-2 border-red-500 rounded-lg p-2">
            <h4 className="font-bold text-2xl"> تغيير كلمة المرور</h4>

            {/* هتعدلها وتبعتلها البروبس الي هي الاراي */}
            <InputComponent label={"ادخل كلمة المرور القديمة"} />
            <InputComponent label={"ادخل كلمة المرور الجديدة"} />
            <div className=" flex flex-col gap-2 mb-4 self-center" dir="ltr">
              <ButtonAction title="حفظ كلمة السر" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
