import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import SideBar from "../../Components/Utility/SideBar";
import { UserMenu } from "../../Components/Utility/AdminLinks.jsx";
function HouseComponent(props) {
  return (
    <div className="w-11/12  flex flex-col bg-gray-200 rounded-lg gap-4 p-4 justify-content">
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
  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={UserMenu} />
        <div className="flex flex-col w-full  m-2">
          <h2 className="self-start font-bold text-red-900 text-2xl m-2">
            دفتر العناوين
          </h2>
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
        </div>
      </div>
    </>
  );
};

export default UserAllAddresPage;
