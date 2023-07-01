import React from "react";
import CardSwiper from "./CardSwiper.jsx";
import ProductOptions from "./ProductOptions.jsx";

const CardDetails = () => {
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-12 mx-auto lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="  h-[400px] lg:w-1/3 w-full object-cover object-center rounded  mb-5 lg:mb-0 lg:me-10">
            <CardSwiper />
          </div>
          <div className="  flex-auto p-4 lg:w-1/2 w-full lg:py-6 bg-slate-200">
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
            <div className="flex items-center mb-4">
              <span className="flex items-center text-gray-600 me-3">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500 me-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500 me-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500 me-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-red-500 me-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600">
                  {" "}
                  4 <span>التقيمات</span>
                </span>
              </span>
              <span className="flex ml-auto">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a5 5 0 015-5h3v0z"></path>
                    <path d="M2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 6l3.9 7.85a.5.5 0 00.42.25H9l-1.5 7H8a1 1 0 001 1h8a1 1 0 001-1h.5l-1.5-7h1.68a.5.5 0 00.42-.25L21 6H3zm2.5 2h13l-1.6 4H7.1L5.5 8zm6.5 9a1 1 0 110-2 1 1 0 010 2z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M15 10a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed mb-4">
              الماسك في راي هي قصة من تأليف J. D. Salinger ، نشرت لأول مرة في
              شكل مسلسل في عام 1945-1946 وكرواية في عام 1951. إنها قصة عن صبي في
              سن المراهقة يدعى هولدن كوليفيلد ، الذي تم طرده من مدرسته الإعدادية
              ويذهب في رحلة اكتشاف الذات أثناء التعامل مع موضوعات في سن المراهقة
              والتغريب.n.
            </p>
            <ProductOptions />
            <div className="flex mb-4">
              <span className="title-font font-medium text-2xl text-gray-900">
                20.00 <span>جنية</span>
              </span>
              <button className="flex ms-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
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
