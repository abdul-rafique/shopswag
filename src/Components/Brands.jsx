import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Brands() {
  return (
    <>
      <h3 className="text-2xl font-bold text-center">
        Et dolore magna aliqua ut Name viverra nam libero veri
      </h3>

      <hr className="my-5" />

      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "assets/customer-logo-1.png"}
            alt="Customer_1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "assets/customer-logo-2.png"}
            alt="Customer_2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "assets/customer-logo-3.png"}
            alt="Customer_3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "assets/customer-logo-4.png"}
            alt="Customer_4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + "assets/customer-logo-5.png"}
            alt="Customer_5"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Brands;
