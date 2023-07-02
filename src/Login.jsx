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

import AlertMessage from "./Alert.jsx";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const passwordRegex = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  );

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailRegex.test(email)) {
      setShowAlert(true);
      setAlertMessage("Invalid email address");
    } else if (!passwordRegex.test(password)) {
      setShowAlert(true);
      setAlertMessage(
        "Invalid password. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number"
      );
    } else {
      console.log(email, password);
      reset();
      setShowSuccess(true);
    }
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <section className="  h-[100vh] flex justify-center items-center">
      <Card className="w-96">
        <CardHeader
          variant="gradient"
          color="indigo"
          class="bg-slate-800"
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
            onChange={handleEmailChange}
            color="indigo"
          />
          <Input
            label="الرقم السري"
            size="lg"
            value={password}
            color="indigo"
            onChange={handlePasswordChange}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            fullWidth
            onClick={handleSubmit}
            color="indigo"
          >
            تسجيل الدخول
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            لا تمتلك حساب ؟
            <Typography
              as="a"
              href="#signup"
              variant="small"
              color="indigo"
              className="ml-1 font-bold ms-2"
            >
              الاشتراك
            </Typography>
          </Typography>
        </CardFooter>
      </Card>
      {showAlert && (
        <AlertMessage
          message={alertMessage}
          type="error"
          onClose={() => setShowAlert(false)}
        />
      )}
      {showSuccess && (
        <AlertMessage
          message="Form submitted successfully"
          type="success"
          onClose={() => setShowSuccess(false)}
        />
      )}
    </section>
  );
}
