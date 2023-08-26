import React from "react";
import { Link } from "react-router-dom";
const CategoryCard = ({ img, title, id }) => {
  return (
    <Link
      to={`/products/category/${id}`}
      className={` block w-40 h-40  rounded-3xl !bg-red-100 `}
    >
      <div
        className={` w-full h-full !bg-red-50 rounded-full flex items-center justify-center shadow-lg `}
      >
        <img
          loading="lazy"
          alt="Art"
          src={img}
          className=" w-4/6 h-4/6 object-contain "
        />
      </div>
      <h3 className="my-2 text-lg  text-center  font-bold text-slate-800 ">
        {title}
      </h3>
    </Link>
  );
};

export default CategoryCard;
