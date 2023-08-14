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

import AlertMessage from "../../Components/Alert.jsx";
import { Link } from "react-router-dom";
export default function ForgetPasswordPage() {
  return (
    <section className=" h-full mt-10   flex justify-center items-center ">
      <div className="w-96">
        <Typography variant="h3" color="red" className="text-center mt-4">
          نسيت كلمة المرور
        </Typography>
        <CardBody className="flex flex-col gap-4">
          <Input label="الايميل" size="lg" color="red" />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth color="red" type="submit">
            ارسال الكود
          </Button>
        </CardFooter>
      </div>
    </section>
  );
}
