// VerifyPasswordPage
import { useState } from "react";
import {
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import VerifyPasswordHook from "../../hook/auth/verify-password-hook";
import { ToastContainer } from "react-toastify";
import Loading from "../../Components/Utility/Loading";

export default function VerifyPasswordPage() {
  const [code, OnChangeCode, onSubmit, loading] = VerifyPasswordHook();

  return (
    <section className=" h-full mt-10   flex justify-center items-center ">
      <div className="w-96">
        <Typography variant="h3" color="red" className="text-center mt-4">
          ادخل الكود المرسل
        </Typography>
        <CardBody className="flex flex-col gap-4">
          <Input
            value={code}
            onChange={OnChangeCode}
            label="ادخل الكود المرسل"
            type="text"
            size="lg"
            color="red"
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            onClick={onSubmit}
            variant="gradient"
            fullWidth
            color="red"
            type="submit"
          >
            {loading === true ? "تاكيد  " : <Loading />}
          </Button>
        </CardFooter>
        <ToastContainer />
      </div>
    </section>
  );
}
