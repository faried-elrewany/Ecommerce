import React from "react";
import { ButtonAction } from "../../Components/Products/Coupon";
import SideBar from "../../Components/Utility/SideBar";
import { UserMenu } from "../../Components/Utility/AdminLinks.jsx";
import { ToastContainer } from "react-toastify";
import { AiFillEdit } from "react-icons/ai";
import ProfileHook from "../../hook/user/profile-hook";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
function UserProfileComponent({ handleShow, user }) {
  return (
    <div className="w-64  flex flex-col whitespace-pre-wrap text-sm bg-gray-200 rounded-lg gap-4 p-4 ">
      <div className="flex items-center justify-between">
        <p></p>
        <div className="flex justify-center items-center gap-2">
          <div href="#" className="flex justify-center items-center gap-2">
            <AiFillEdit onClick={handleShow} className="cursor-pointer" />{" "}
          </div>
        </div>
      </div>
      <p className="text-sm bold">
        الاسم : <span className="text-sm">{user.name}</span>
      </p>

      <p className="text-sm bold">
        رقم الهاتف : <span className="text-sm">{user.phone}</span>
      </p>
      <p className="text-sm bold">
        الايميل : <span className="text-sm">{user.email}</span>
      </p>
    </div>
  );
}
const UserProfilePage = () => {
  const [
    user,
    show,
    handleClose,
    handleShow,
    handelSubmit,
    name,
    email,
    phone,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    changePassword,
    oldPassword,
    newPassword,
    confirmNewPassword,
    onChangeOldPass,
    onChangeNewPass,
    onChangeConfirmPass,
  ] = ProfileHook();
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
        <DialogHeader> تعديل الصفحة الشخصية</DialogHeader>

        <DialogBody divider className=" flex flex-col gap-4">
          <Input
            color="red"
            label="تعديل الاسم الشخصي"
            value={name}
            onChange={onChangeName}
          />
          <Input
            color="red"
            label="تعديل الايميل "
            value={email}
            onChange={onChangeEmail}
          />
          <Input
            color="red"
            label=" تعديل رقم الهاتف"
            value={phone}
            onChange={onChangePhone}
            type="phone"
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1 outline-none"
          >
            تراجع
          </Button>
          <Button variant="gradient" color="green" onClick={handelSubmit}>
            <span>تاكيد التعديل</span>
          </Button>
        </DialogFooter>
      </Dialog>
      <div className=" overflow-x-hidden flex h-full">
        <SideBar menus={UserMenu} />
        <div className="flex w-full flex-col  m-2">
          <h2 className="self-start font-bold text-red-900 text-2xl">
            الصفحة الشخصية
          </h2>
          <div className=" flex flex-col gap-4">
            <UserProfileComponent
              handleShow={handleShow}
              name="فريد محمد فؤاد عز الدين"
              email="fariedelrewany@gmail.com"
              phone="01552805430"
              user={user}
            />
          </div>
          <div className=" flex  flex-col w-64 my-4   items-center  gap-4 border-2 border-red-500 rounded-lg p-2">
            <h4 className="font-bold text-2xl"> تغيير كلمة المرور</h4>
            {/* هتعدلها وتبعتلها البروبس الي هي الاراي */}
            <Input
              color="red"
              label="كلمة المرور القديمة  "
              type="password"
              size="md"
              value={oldPassword}
              onChange={onChangeOldPass}
            />
            <Input
              color="red"
              label=" كلمة المرور الجديدة  "
              type="password"
              size="md"
              value={newPassword}
              onChange={onChangeNewPass}
            />
            <Input
              color="red"
              label="  تاكيد كلمة المرور "
              type="password"
              size="md"
              value={confirmNewPassword}
              onChange={onChangeConfirmPass}
            />
            <div className=" flex flex-col gap-2 mb-4 self-center" dir="ltr">
              <Button onClick={changePassword} color="red">
                حفظ كلمة السر
              </Button>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default UserProfilePage;
