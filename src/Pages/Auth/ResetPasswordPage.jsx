// ResetPasswordPage
import {
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { ToastContainer } from "react-toastify";
import ResetPasswordHook from "../../hook/auth/reset-password-hook";
export default function ResetPasswordPage() {
  const [
    password,
    confirmPassword,
    ,
    OnChangePassword,
    OnChangeConfirmPassword,
    onSubmit,
  ] = ResetPasswordHook();
  return (
    <section className=" h-full mt-10   flex justify-center items-center ">
      <div className="w-96">
        <Typography variant="h3" color="red" className="text-center mt-4">
          نسيت كلمة المرور
        </Typography>
        <CardBody className="flex flex-col gap-4">
          <Input
            value={password}
            onChange={OnChangePassword}
            type="password"
            label="كلمة المرور الجديدة "
            size="lg"
            color="red"
          />
          <Input
            value={confirmPassword}
            onChange={OnChangeConfirmPassword}
            type="password"
            label="تاكيد كلمة المرور الجديدة"
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
            تاكيد
          </Button>
        </CardFooter>
        <ToastContainer />
      </div>
    </section>
  );
}
