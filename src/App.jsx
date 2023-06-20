import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

import "./index.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

function App() {
  return (
    <>
      <Swiper
        tyle={{
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
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper  bg-slate-200 mb-20"
      >
        <SwiperSlide className="bg-slate-500 h-52 text-slate-700">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-slate-500 h-52 text-slate-700">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-slate-500 h-52 text-slate-700">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-slate-500 h-52 text-slate-700">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-slate-500 h-52 text-slate-700">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-slate-500 h-52 text-slate-700">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
