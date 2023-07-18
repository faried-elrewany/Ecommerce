import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { Pagination, Navigation } from "swiper";

function HomeCarousal({ slides }) {
  return (
    <>
      <Swiper
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
        modules={[Pagination, Navigation]}
        className="mySwiper  mb-20"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className=" bg-red-100 text-slate-500">
            <img src={slide.image} alt="slider" />
            <div className="flex flex-col gap-2 text-red-800 ">
              <p className="md:text-3xl text-xl">{slide.text}</p>
              <p className="md:text-3xl text-xl font-bold">
                خصم يصل الى
                <br className=" block md:hidden" />
                {slide.discount}% عند الشراء
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default HomeCarousal;
