// import React, { useState, useEffect } from "react";
// import notify from "./../useNotifaction";
// import { useDispatch, useSelector } from "react-redux";
// import { createNewUser, loginUser } from "../../redux/actions/authAction";
// import { useNavigate } from "react-router-dom";

// const LoginHook = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [isPress, setIsPress] = useState(false);
//   const onChangeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const onChangePassword = (e) => {
//     setPassword(e.target.value);
//   };
//   const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

//   const onSubmit = async () => {
//     if (email === "") {
//       notify("من فضلك قم بادخال الايميل  ", "error");
//       return;
//     }

//     if (!emailRegex.test(email)) {
//       notify("هذا الايميل غير صالح للاستخدام ", "error");
//       return;
//     }
//     if (password === "") {
//       notify("من فضلك قم بادخال الرقم السري  ", "error");
//       return;
//     }
//     setIsPress(true);
//     setLoading(true);
//     await dispatch(
//       loginUser({
//         email,
//         password,
//       })
//     );

//     setLoading(false);
//     setIsPress(false);
//   };
//   const res = useSelector((state) => state.authReducer.loginUser);
//   useEffect(() => {
//     if (loading === false) {
//       if (res) {
//         console.log(res);
//         if (res.data.token) {
//           localStorage.setItem("token", res.data.token);
//           localStorage.setItem("user", JSON.stringify(res.data.data));
//           notify("تم تسجيل الدخول بنجاح", "success");
//           setTimeout(() => {
//             window.location.href = "/";
//           }, 1500);
//         } else {
//           localStorage.removeItem("token");
//           localStorage.removeItem("user");
//         }

//         // if (res.data.message === "Incorrect email or password") {
//         //   localStorage.removeItem("token");
//         //   localStorage.removeItem("user");
//         //   notify("كلمة السر او الايميل خطا", "error");
//         // }
//         setLoading(true);
//       }
//     }
//   }, [loading]);

//   return [
//     email,
//     password,
//     loading,
//     onChangeEmail,
//     onChangePassword,
//     onSubmit,
//     isPress,
//   ];
// };

// export default LoginHook;
import React, { useState, useEffect } from "react";
import notify from "./../useNotifaction";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser, loginUser } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";

const LoginHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async () => {
    setIsPress(true);
    setLoading(true);
    await dispatch(
      loginUser({
        email,
        password,
      })
    );

    setLoading(false);
    setIsPress(false);
  };
  const res = useSelector((state) => state.authReducer.loginUser);
  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          notify("تم تسجيل الدخول بنجاح", "success");
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }

        if (res.data.message === "Incorrect email or password") {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          notify("كلمة السر او الايميل خطا", "error");
        }
        setLoading(true);
      }
    }
  }, [loading]);

  return [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    onSubmit,
    isPress,
  ];
};

export default LoginHook;
