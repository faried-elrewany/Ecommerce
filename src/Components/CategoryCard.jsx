import React from "react";
import clothe from "../images/clothe.png";
const CategoryCard = ({ img, title, bg }) => {
  return (
    <a href="#" class="block w-32 h-32  ">
      <div
        className={` w-full h-full bg-[${bg}] rounded-full flex items-center justify-center shadow-lg`}
      >
        <img alt="Art" src={img} class=" w-4/6 h-4/6 object-cover " />
      </div>
      <h3 class="my-2 text-lg  text-center  font-bold text-slate-800 ">
        {title}
      </h3>
    </a>
  );
};

export default CategoryCard;
