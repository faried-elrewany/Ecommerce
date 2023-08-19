import React from "react";
import CardSwiper from "./CardSwiper.jsx";
import ProductOptions from "./ProductOptions.jsx";
import ViewProductsDetalisHook from "../../hook/products/view-products-detalis-hook.js";
import { useParams } from "react-router-dom";
import ReactImageGallery from "react-image-gallery";

const CardDetails = () => {
  const { id } = useParams();
  const [item, images, cat, brand] = ViewProductsDetalisHook(id);
  return (
    <section className="text-gray-700 body-font  bg-slate-50">
      <div className="container px-5 py-4  mx-auto ">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="  h-[400px] lg:w-1/3  object-contain object-center rounded  mb-5 lg:mb-0 lg:me-10">
            <CardSwiper images={images} />
          </div>
          <div className="  flex-auto p-4 lg:w-1/2 w-full lg:py-6 ">
            <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-2 lg:mb-4">
              ماركة المنتج :
              <span className="font-light text-lg text-black">
                {brand.name}
              </span>
            </h2>
            <h1 className="text-gray-900 text-3xl font-bold mb-4 lg:text-4xl lg:leading-tight">
              {item.title}
            </h1>

            <div className="flex items-center mb-2 text-gray-900">
              وصف المنتج
            </div>
            <p className="leading-relaxed mb-4">{item.description}</p>
            {/* <ProductOptions /> */}
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
              <div className="flex">
                <span className="me-3">Color</span>
                {item.availableColors
                  ? item.availableColors.map((color, index) => {
                      return (
                        <div
                          key={index}
                          className={`border-2 border-gray-300 ms-1  rounded-full w-6 h-6 focus:outline-none`}
                          style={{ backgroundColor: color }}
                        ></div>
                      );
                    })
                  : null}
              </div>
            </div>
            <div className="flex mb-4 justify-between">
              <button className="flex gap-2 text-xl shadow text-gray-800 bg-white transition  py-2 px-6 focus:outline-non rounded">
                {item.price} <span>جنية </span>
              </button>
              <button className="flex ms-auto text-white bg-red-800 transition border-0 py-2 px-6 focus:outline-none hover:bg-red-900 rounded">
                اضافة الي العربة
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
