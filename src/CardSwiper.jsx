import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ReactDOM from "react-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

function CardSwiper() {
  const props = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: "https://i.ibb.co/Vvndkmy/banner.jpg",
  };
  return (
    <>
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
        modules={[Navigation]}
        className="mySwiper  mb-20"
      >
        <SwiperSlide className=" h-full  w-full  text-slate-700">
          <img
            className="object-contain object-center"
            src="https://i.ibb.co/Vvndkmy/banner.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className=" h-full  w-full  text-slate-700">
          <img
            className="object-contain object-center"
            src="https://i.ibb.co/Vvndkmy/banner.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className=" h-full  w-full  text-slate-700">
          <img
            className="object-contain object-center"
            src="https://i.ibb.co/Vvndkmy/banner.jpg"
          />
        </SwiperSlide>
        <SwiperSlide className=" h-full  w-full  text-slate-700">
          <img
            className="object-contain object-center"
            src="https://i.ibb.co/Vvndkmy/banner.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CardSwiper;
