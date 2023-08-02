import React from "react";
import { ButtonOutlined } from "../Buttons";
import { Link, useNavigate } from "react-router-dom";

const SubTitle = ({ title, BtnTitle, href }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between py-2 px-8 text-xl lg:px-24">
      <p className="self-center skew-x-12 -skew-y-6 text-red-900 tracking-widest	font-bold">
        {title}
      </p>
      <Link to={href}>
        <ButtonOutlined title={BtnTitle} />
      </Link>
      {}
    </div>
  );
};

export default SubTitle;
