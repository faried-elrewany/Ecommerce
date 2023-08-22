import React from "react";
import { useNavigate } from "react-router-dom";
import SideBar from "../../Components/Utility/SideBar";
import { UserMenu } from "../../Components/Utility/AdminLinks.jsx";
import { Link } from "react-router-dom";
import { AiTwotoneDelete, AiFillEdit } from "react-icons/ai";

import ViewAddressesHook from "../../hook/user/view-addresses-hook";
import DeleteAddressHook from "./../../hook/user/delete-address-hook";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
function HouseComponent({ item }) {
  const [show, handleClose, handleShow, handelDelete] = DeleteAddressHook(
    item._id
  );
  return (
    <>
      <Dialog
        open={show}
        handler={handleShow}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>تاكيد الحذف</DialogHeader>
        <DialogBody divider>هل انتا متاكد من عملية الحذف للمنتج</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            تراجع
          </Button>
          <Button variant="gradient" color="green" onClick={handelDelete}>
            <span>حذف</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <div className="w-11/12  flex flex-col bg-gray-200 rounded-lg gap-4 p-4 justify-content">
        <div className="flex items-center justify-between">
          <p></p>
          <div className="flex justify-center items-center gap-2">
            <a href="#" className="flex justify-center items-center gap-2">
              <AiTwotoneDelete
                onClick={handleShow}
                className="h-6 w-6 text-red-500 cursor-pointer"
              />
            </a>
            <Link
              to={`/user/edit-address/${item._id}`}
              className="flex justify-center items-center gap-2"
            >
              <AiFillEdit className="h-6 w-6 text-red-500" />
            </Link>
          </div>
        </div>
        <p className="text-xl bold">
          عنوان المنزل: <span className="text-lg">{item.alias}</span>
        </p>
        <p> {item.details}</p>
        <p className="text-xl bold">
          رقم الهاتف : <span className="text-lg">{item.phone}</span>
        </p>
      </div>
    </>
  );
}
const UserAllAddresPage = () => {
  const navigate = useNavigate();
  const [res] = ViewAddressesHook();
  if (res.data) console.log(res);
  return (
    <>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={UserMenu} />
        <div className="flex flex-col w-full  m-2">
          <h2 className="self-start font-bold text-red-900 text-2xl m-2">
            دفتر العناوين
          </h2>
          <div className=" flex flex-col gap-4">
            {res && res.data ? (
              res.data.map((item, index) => {
                return <HouseComponent key={index} item={item} />;
              })
            ) : (
              <h6>لا يوجد عنوانين حتى الان</h6>
            )}
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
