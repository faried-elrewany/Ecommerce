import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactDOM from "react-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

function CardSwiper({ images }) {
  return (
    <>
      <div className="cont">
        <Swiper
          style={{
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          slidesPerView={1}
          dir="rtl"
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper  mb-20  rounded"
        >
          {images.length >= 1 ? (
            images.map((src, index) => (
              <SwiperSlide
                key={src.original}
                className=" rounded object-contain text-slate-700"
              >
                <div className="zoom">
                  <img loading="lazy" src={src.original} />
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide className=" rounded object-contain text-slate-700">
              <div className="zoom">
                <h2>لا يوجد صورة لهذا المنتج</h2>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </>
  );
}

export default CardSwiper;
