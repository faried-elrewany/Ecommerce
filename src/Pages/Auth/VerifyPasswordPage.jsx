// VerifyPasswordPage
import { useState } from "react";
import {
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";

export default function VerifyPasswordPage() {
  return (
    <section className=" h-full mt-10   flex justify-center items-center ">
      <div className="w-96">
        <Typography variant="h3" color="red" className="text-center mt-4">
          ادخل الكود المرسل
        </Typography>
        <CardBody className="flex flex-col gap-4">
          <Input
            type="text"
            label="كلمة المرور الجديدة "
            size="lg"
            color="red"
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth color="red" type="submit">
            تاكيد
          </Button>
        </CardFooter>
      </div>
    </section>
  );
}
