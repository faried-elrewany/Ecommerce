import { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import AlertMessage from "../../Components/Alert.jsx";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const nameRegex = new RegExp(/^[a-zA-Z\s]*$/);
  const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const passwordRegex = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  );

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(false);
    setShowSuccess(false);
    if (!nameRegex.test(name)) {
      setShowAlert(true);
      setAlertMessage("Invalid name. Name must contain only letters");
    } else if (!emailRegex.test(email)) {
      setShowAlert(true);
      setAlertMessage("Invalid email address");
    } else if (!passwordRegex.test(password)) {
      setShowAlert(true);
      setAlertMessage(
        "Invalid password. Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter and one number"
      );
    } else {
      console.log(name, email, password);
      reset();
      setShowSuccess(true);
      setAlertMessage("Form submitted successfully");
      setShowAlert(true);
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <section className="  h-[100vh] flex justify-center items-center overflow-hidden">
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
              onChange={handleNameChange}
              color="red"
            />
            <Input
              size="md"
              name="email"
              label="الايميل"
              value={email}
              onChange={handleEmailChange}
              color="red"
            />
            <Input
              name="password"
              type="password"
              size="lg"
              label="الرقم السري"
              value={password}
              onChange={handlePasswordChange}
              color="red"
            />
          </div>

          <Button
            color="red"
            className="mt-6 text-xl"
            fullWidth
            onClick={handleSubmit}
          >
            الاشتراك
          </Button>
          <Typography
            color="gray"
            className="mt-4 ms-2 text-center font-normal text-lg"
          >
            بالفعل تمتلك ايميل?{" "}
            <a
              href="#"
              className="font-bold text-red-500 transition-colors hover:text-red-700"
            >
              تسجيل الدخول{" "}
            </a>
          </Typography>
        </form>
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
