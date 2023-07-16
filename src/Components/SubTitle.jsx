import React from "react";
import { ButtonOutlined } from "./Buttons";

const SubTitle = ({ title, BtnTitle, href }) => {
  return (
    <div className="flex justify-between py-2 px-8 text-xl lg:px-24">
      <p className="self-center skew-x-12 -skew-y-6 text-red-900 tracking-widest	font-bold">
        {title}
      </p>
      <ButtonOutlined title={BtnTitle} href={href} />
      {}
    </div>
  );
};

export default SubTitle;
