import React from "react";
import SideBar from "../../Components/AdminDrawer";
import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default User;
