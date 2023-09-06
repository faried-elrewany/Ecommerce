import { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import RegisterHook from "../../hook/auth/register-hook";
import { ToastContainer } from "react-toastify";
import Loading from "../../Components/Utility/Loading.jsx";
export default function SignUp() {
  const [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
  ] = RegisterHook();
  return (
    <section className="  h-[80vh] flex justify-center items-center overflow-hidden">
      <Card color="transparent" shadow={false}>
        <Typography variant="h2" color="red">
          الاشتراك
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          ادخل بياناتك للاشتراك{" "}
        </Typography>
        <form
          className="mt-8 mb-2 w-72 max-w-screen-lg sm:w-96"
          name="SignUpForm"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              size="md"
              label="الاسم"
              value={name}
              name="name"
              onChange={onChangeName}
              color="red"
            />
            <Input
              size="md"
              name="email"
              label="الايميل"
              value={email}
              onChange={onChangeEmail}
              color="red"
            />
            <Input
              size="md"
              name="number"
              label="الهاتف"
              value={phone}
              onChange={onChangePhone}
              color="red"
            />
            <Input
              name="password"
              type="password"
              size="lg"
              label=" كلمة المرور"
              value={password}
              onChange={onChangePassword}
              color="red"
            />
            <Input
              name="password"
              type="password"
              size="lg"
              label=" تاكيد كلمة المرور"
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              color="red"
            />
          </div>

          <Button
            color="red"
            className="mt-6 text-xl"
            fullWidth
            onClick={OnSubmit}
          >
            الاشتراك
          </Button>
          <Link to="/login">
            <Typography
              color="gray"
              className="mt-4 text-red-700 ms-2 text-center font-normal text-lg"
            >
              بالفعل تمتلك ايميل? تسجيل الدخول{" "}
            </Typography>
          </Link>
        </form>
      </Card>
      <ToastContainer />
    </section>
  );
}
