import {
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import ForgetPasswordHook from "../../hook/auth/forget-password-hook";
import { Link } from "react-router-dom";
export default function ForgetPasswordPage() {
  const [OnChangeEmail, email, onSubmit] = ForgetPasswordHook();

  return (
    <section className=" h-full mt-10   flex justify-center items-center ">
      <div className="w-96">
        <Typography variant="h3" color="red" className="text-center mt-4">
          نسيت كلمة المرور
        </Typography>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="الايميل"
            size="lg"
            color="red"
            onChange={OnChangeEmail}
            value={email}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth color="red" onClick={onSubmit}>
            ارسال الكود
          </Button>
        </CardFooter>
      </div>
      <ToastContainer />
    </section>
  );
}
