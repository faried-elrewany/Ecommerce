import React from "react";

const Card = ({ imageSrc, title, price, rating }) => {
  return (
    <a
      href="#"
      className="group relative  flex justify-center flex-col  overflow-hidden w-64 shadow-2xl"
    >
      <button className="absolute end-4 top-4 z-10 rounded-full text-slate-900 transition hover:text-slate-900/75 hover:-translate-y-1">
        <span className="sr-only">Wishlist</span>
        <i
          className="fa-regular fa-heart"
          style={{ color: "#ea344f", fontSize: "24px" }}
        ></i>
      </button>
      <div className="flex w-full p-2 items-center justify-center">
        <img
          src={imageSrc}
          alt=""
          className=" w-3/4 h-3/4 object-contain object-center transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="relative border border-slate-100 bg-white p-4">
        <h5 className="mt-2 text-sm font-medium text-slate-900">{title}</h5>

        <div className="flex justify-between items-center mt-2">
          <p className="text-xl text-slate-700 font-semibold self-center">
            {price} جنيه
          </p>
          <div className="flex justify-center items-center gap-1 self-center">
            <span className="self-center text-[#facc15]">{rating}</span>
            <i
              className="fa-solid fa-star"
              style={{ color: "#facc15", fontSize: "18px" }}
            ></i>
          </div>
        </div>

        <form className="mt-4">
          <a
            href="#"
            className="block w-full text-center rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
          >
            اشتري الان
          </a>
        </form>
      </div>
    </a>
  );
};

export default Card;
