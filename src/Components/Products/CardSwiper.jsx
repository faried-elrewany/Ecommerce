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

function CardSwiper({ images }) {
  const props = {
    width: 200,
    height: 250,
    zoomWidth: 500,
    img: "https://i.ibb.co/Vvndkmy/banner.jpg",
  };
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
          {images.map((src) => (
            <SwiperSlide
              key={src.original}
              className=" rounded object-contain text-slate-700"
            >
              <div className="zoom">
                <img src={src.original} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default CardSwiper;
