import React from "react";
const CategoryCard = ({ img, title }) => {
  return (
    <a href="#" className={` block w-40 h-40  rounded-3xl !bg-red-100 `}>
      <div
        className={` w-full h-full !bg-red-50 rounded-full flex items-center justify-center shadow-lg `}
      >
        <img alt="Art" src={img} className=" w-4/6 h-4/6 object-contain " />
      </div>
      <h3 className="my-2 text-lg  text-center  font-bold text-slate-800 ">
        {title}
      </h3>
    </a>
  );
};

export default CategoryCard;
