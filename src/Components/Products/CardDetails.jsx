import React from "react";
import CardSwiper from "./CardSwiper.jsx";
import ProductOptions from "./ProductOptions.jsx";
import ViewProductsDetalisHook from "../../hook/products/view-products-detalis-hook.js";
import { useParams } from "react-router-dom";
import ReactImageGallery from "react-image-gallery";

const CardDetails = () => {
  const { id } = useParams();
  const [item, images, cat, brand] = ViewProductsDetalisHook(id);
  if (images) console.log(images);
  return (
    <section className="text-gray-700 body-font  bg-slate-50">
      <div className="container px-5 py-4  mx-auto ">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="  h-[400px] lg:w-1/3  object-contain object-center rounded  mb-5 lg:mb-0 lg:me-10">
            <CardSwiper images={images} />
          </div>
          <div className="  flex-auto p-4 lg:w-1/2 w-full lg:py-6 ">
            <h2 className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-2 lg:mb-4">
              اسم المنتج{" "}
            </h2>
            <h1 className="text-gray-900 text-3xl font-bold mb-4 lg:text-4xl lg:leading-tight">
              العصفور فوق الشجرة{" "}
            </h1>
            <h2 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-2 lg:mb-4">
              اسم المنتج :{" "}
              <span className="font-light text-lg text-black"> "سامسونج"</span>
            </h2>
            <div className="flex items-center mb-4"></div>
            <p className="leading-relaxed mb-4">
              الماسك في راي هي قصة من تأليف J. D. Salinger ، نشرت لأول مرة في
              شكل مسلسل في عام 1945-1946 وكرواية في عام 1951. إنها قصة عن صبي في
              سن المراهقة يدعى هولدن كوليفيلد ، الذي تم طرده من مدرسته الإعدادية
              ويذهب في رحلة اكتشاف الذات أثناء التعامل مع موضوعات في سن المراهقة
              والتغريب.n.
            </p>
            {/* <ProductOptions /> */}
            <div className="flex mb-4">
              <span className="title-font font-medium text-2xl text-gray-900">
                20.00 <span>جنية</span>
              </span>
              <button className="flex ms-auto text-white bg-slate-800 transition border-0 py-2 px-6 focus:outline-none hover:bg-slate-900 rounded">
                اضافة الي العربة{" "}
              </button>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Genre</span>
              <span className="ms-auto text-gray-900">Fiction</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Pages</span>
              <span className="ms-auto text-gray-900">224</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Published</span>
              <span className="ms-auto text-gray-900">July 16, 1951</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
