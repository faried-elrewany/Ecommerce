import React from "react";
const SubTitle = ({ title, BtnTitle }) => {
  return (
    <div className="flex justify-between py-2 px-8 text-xl lg:px-24">
      <p className="self-center skew-x-12 -skew-y-6  tracking-widest	font-bold">
        {title}
      </p>
      <a
        href="#"
        className="border border-slate-600  border-x-2 border-y-2 px-5 py-2   font-bold text-slate-600  hover:bg-slate-600 hover:text-slate-100"
      >
        {BtnTitle}
      </a>
    </div>
  );
};

export default SubTitle;
