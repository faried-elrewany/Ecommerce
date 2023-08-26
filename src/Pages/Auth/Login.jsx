import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import Loading from "../../Components/Utility/Loading.jsx";
import LoginHook from "../../hook/auth/login-hook.js";
import { ToastContainer } from "react-toastify";
export default function Login() {
  const [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    isPress,
  ] = LoginHook();
  return (
    <>
      <section className="  h-[80vh] flex justify-center items-center overflow-hidden">
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="red"
            className="mb-4 grid h-28 place-items-center "
          >
            <Typography variant="h3" color="white">
              تسجيل الدخول{" "}
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="الايميل"
              size="lg"
              value={email}
              onChange={onChangeEmail}
              color="red"
            />
            <Input
              label="الرقم السري"
              size="lg"
              value={password}
              color="red"
              type="password"
              onChange={onChangePassword}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              onClick={onSubmit}
              color="red"
              type="submit"
            >
              {isPress === true ? (
                loading === true ? (
                  <Loading />
                ) : (
                  "تسجيل الدخول"
                )
              ) : (
                "تسجيل الدخول"
              )}
            </Button>
            <Typography variant="large" className="mt-6 flex justify-center">
              لا تمتلك حساب ؟
              <Link to="/register">
                <Typography
                  as="a"
                  href="#signup"
                  variant="large"
                  color="red"
                  className="ml-1 font-bold ms-2"
                >
                  الاشتراك
                </Typography>
              </Link>
            </Typography>
            <Link to="/user/forget-password">
              <Typography
                as="a"
                href="#signup"
                variant="large"
                color="red"
                className="ml-1 font-bold ms-2"
              >
                هل نسيت كلمه السر
              </Typography>
            </Link>
          </CardFooter>
        </Card>
      </section>
      <ToastContainer />
    </>
  );
}
