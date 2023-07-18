import React from "react";
import SideBar from "../../Components/AdminDrawer";
import { TrashIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
function HouseComponent(props) {
  return (
    <div className="w-11/12 mx-auto flex flex-col bg-gray-200 rounded-lg gap-4 p-4 justify-content">
      <div className="flex items-center justify-between">
        <p></p>
        <div className="flex justify-center items-center gap-2">
          <a href="#" className="flex justify-center items-center gap-2">
            <div>ازالة</div>
            <TrashIcon className="h-6 w-6 text-red-500" />
          </a>
          <a href="#" className="flex justify-center items-center gap-2">
            <div>تعديل</div>
            <EyeIcon className="h-6 w-6 text-red-500" />
          </a>
        </div>
      </div>
      <p className="text-xl bold">
        المنزل : <span className="text-lg">{props.title}</span>
      </p>
      <p>{props.address}</p>
      <p className="text-xl bold">
        رقم الهاتف : <span className="text-lg">{props.phone}</span>
      </p>
    </div>
  );
}
const UserAllAddresPage = () => {
  const navigate = useNavigate();

  const listItems = [
    { name: "ادارة الطلبات", href: "/user/all-orders" },
    { name: "المنتجات المفضلة", href: "/user/wishlist" },
    { name: "العنواوين الشخصية", href: "/user/addresses" },
    { name: "الملف الشخصي", href: "/user/profile" },
  ];
  return (
    <>
      <div className="flex  justify-around items-center m-2">
        <h2 className="self-start font-bold text-red-900 text-2xl">
          دفتر العناوين
        </h2>
        <SideBar items={listItems} />
      </div>
      <div className=" flex flex-col gap-4">
        <HouseComponent
          title="المنزل"
          address="القليوبية الخانكة شارع لرويني"
          phone="01552805430"
        />
        <HouseComponent
          title="المنزل"
          address="القليوبية الخانكة شارع لرويني"
          phone="01552805430"
        />
        <HouseComponent
          title="المنزل"
          address="القليوبية الخانكة شارع لرويني"
          phone="01552805430"
        />
      </div>
      <div className="flex justify-center m-4">
        <Button
          className="w-56 outline-none"
          color="red"
          onClick={() => navigate("/user/add-address")}
        >
          اضف عنوان جديد
        </Button>
      </div>
    </>
  );
};

export default UserAllAddresPage;
