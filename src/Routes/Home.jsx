import React, { useRef, useEffect } from "react";
import { FaHeadphonesAlt, FaRegClipboard, FaRegComments } from "react-icons/fa";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import Brands from "../Components/Brands";
import CustomLink from "../Components/CustomLink";
import Head from "../Components/Head";
import SupportCard from "../Components/SupportCard";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
import { useLocation } from "react-router-dom";

function Introduction() {
  return (
    <div
      className="grid lg:grid-cols-2 place-items-center gap-20 pt-32"
      id="intro"
    >
      <img
        src={process.env.PUBLIC_URL + "assets/introduction.jpg"}
        alt="introduction_img"
      />

      <div className="flex flex-col items-start gap-5">
        <h2 className="text-[2rem] font-bold text-primary">
          Adipiscing elit duis tristi quesolli citudin nibro
        </h2>
        <p>
          In nulla posuere sollicitudin aliquam ultrices sagittis. Id fauc ibus
          nisl tincidunt eget nullam non nisi. Cursus in hac habi tasse platea
          dictumst quisque sagittis purus. Mi proin se dlibero enim sed.
          Consectetur adipiscing elit sena
        </p>

        <CustomLink text="Sign up" destination="/" />
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="min-h-screen w-full bg-primary text-white" id="features">
      <div className="container px-5 lg:px-20 py-32">
        <div className="text-center max-w-lg mx-auto mb-20">
          <h2 className="mb-2 text-[2rem] font-bold">
            Mi proin sed libero enim
          </h2>
          <p className="text-white/80">
            Felis donec et odio pellentesque. Nisl nisi scelerisque eu ultrices.
            Diam maecenas ultricies mi eget mauris pharetra etra laroeet
          </p>
        </div>

        <div className="w-full grid lg:grid-cols-3 place-content-center place-items-center gap-14 lg:gap-0">
          <SupportCard
            icon={<FaHeadphonesAlt size={32} className="text-accent" />}
          />
          <SupportCard
            icon={<FaRegClipboard size={32} className="text-accent" />}
          />
          <SupportCard
            icon={<FaRegComments size={32} className="text-accent" />}
          />
        </div>
      </div>
    </div>
  );
}

function DetailsOne() {
  return (
    <div className="grid lg:grid-cols-2 place-items-center gap-20">
      <img
        src={process.env.PUBLIC_URL + "assets/details-1.png"}
        alt="details-1"
      />

      <div className="flex flex-col items-start justify-center gap-5">
        <span className="px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold">
          Step 1
        </span>
        <h2 className="text-[2rem] font-bold text-primary">
          Aliquet enim tortor atel
        </h2>
        <p className="">
          Dignissim cras tincidunt lobortis feugiat. Aliquam id diam maecenas
          ultricies mi eget mauris pharetra. Morbi blandit cursus risus at nibh
          nisl condimentum
        </p>
        <CustomLink text="Lightbox" destination="/" />
      </div>
    </div>
  );
}

function DetailsTwo() {
  return (
    <div className="grid lg:grid-cols-2 place-items-center gap-20">
      <img
        src={process.env.PUBLIC_URL + "assets/details-2.png"}
        alt="details-2"
        className="order-2"
      />

      <div className="flex flex-col items-start justify-center gap-5">
        <span className="px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold">
          Step 2
        </span>
        <h2 className="text-[2rem] font-bold text-primary">
          Diam ut venenatis tellus
        </h2>
        <p className="">
          Volutpat diam ut venenatis tellus. Faucibus pulvinar elementum integer
          enim neque. Rhoncus urna neque viverra justo nec ultrices dui
          malesuada pellen tesque
        </p>
        <ul className="list-square ml-5">
          <li>Massa ultricies mi quis hendrerit dolor condimtis</li>
          <li>Pellentesque id nibh tortor id aliquet deriva</li>
          <li>Ectus proin molestie a iaculis at erat pellent</li>
        </ul>
      </div>
    </div>
  );
}

function DetailsThree() {
  return (
    <div className="grid lg:grid-cols-2 place-items-center gap-20">
      <img
        src={process.env.PUBLIC_URL + "assets/details-3.png"}
        alt="details-3"
      />

      <div className="flex flex-col items-start justify-center gap-3">
        <span className="px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold">
          Step 3
        </span>
        <h2 className="text-[2rem] font-bold text-primary">
          Commodo viverra mauris
        </h2>
        <p className="">
          Elit scelerisque mauris pellentesque pulvinar pellentesque habitant
          morbi tristique. Neque gravida in fermentum et sollicitudin ac nterdum
          consectetur libero
        </p>
        <CustomLink text="Sign up now" destination="/" />
      </div>
    </div>
  );
}

function Testimonials() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="min-h-screen w-full bg-primary text-white">
      <div className="container px-10 lg:px-32 py-32">
        <div className="text-center max-w-lg mx-auto mb-20">
          <h2 className="mb-2 text-[2rem] font-bold">
            Tellus molestie nunc nonbl
          </h2>
          <p className="text-white/80">
            Eget egestas purus viverra accumsan in nisl nisi. Ut venenatis
            tellus in metus vulputate. Vitae auctor eu augue ut lectus arcu
            bibendum
          </p>
        </div>

        <div className="flex items-center gap-5">
          <div ref={navigationPrevRef} className="cursor-pointer">
            <BsChevronLeft size={36} />
          </div>
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={32}
            slidesPerView={2}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
          >
            <SwiperSlide>
              <Testimonial imgPath="assets/testimonial-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial imgPath="assets/testimonial-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial imgPath="assets/testimonial-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial imgPath="assets/testimonial-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial imgPath="assets/testimonial-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <Testimonial imgPath="assets/testimonial-6.jpg" />
            </SwiperSlide>
          </Swiper>
          <div ref={navigationNextRef} className="cursor-pointer">
            <BsChevronRight size={36} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="container px-5 lg:px-20 py-32">
      <div className="text-center max-w-lg mx-auto mb-20">
        <h2 className="mb-2 text-[2rem] font-bold">Donec ultrices tincidunt</h2>
        <p className="text-black/80">
          Sodales neque sodales ut libero volutpat sed cras @name ornare arcu
          dui vivamus arcu vel turpis nunc eget lorem dolor sed viverra
        </p>
      </div>

      <div className="flex justify-center items-center gap-5">
        <form className="flex items-center">
          <div className="relative group py-4 rounded-l-full border border-r-0 border-gray-300 focus:border-accent/20 ">
            <label
              htmlFor="#email"
              className="absolute top-1/2 -translate-y-1/2 left-6 transform duration-300 pointer-events-none group-focus-within:-translate-y-7 group-focus-within:text-[12px] group-focus-within:font-semibold text-gray-400 group-focus-within:text-gray-800"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-80 max-w-lg px-6 bg-transparent focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-4 rounded-r-full bg-accent text-white font-semibold border-2 border-accent/20 focus:border-accent/20 focus:outline-none focus:shadow-outline"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

function Home() {
  const imgSrc = process.env.PUBLIC_URL + "assets/header-bg.png";
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== "") {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Head />

      <div className="container px-5 lg:px-20 py-32">
        <Brands />
        <Introduction />
      </div>

      <Features />

      <div
        id="details"
        style={{
          background: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container px-5 lg:px-20 py-32 flex flex-col gap-32">
          <div className="max-w-2xl">
            <h2 className="text-[2rem] leading-snug font-bold text-primary">
              Diam vel quam elementum pulvinar etiam non quam. Elementum
              facilisis leo velfri
            </h2>
            <p>
              Eu ultrices vitae auctor eu augue ut lectus. A erat nam at lectus.
              Metus aliquam eleifend mi in. Tempus egestas sed sed risus pretium
              quam vulputate. Sed tempus urna et pharetra pharetra massa massa
              ultricies mi. Lorem sed risus ultricies tristique
            </p>
          </div>
          <DetailsOne />
          <DetailsTwo />
          <DetailsThree />
        </div>
      </div>

      <Testimonials />
      <Newsletter />

      <Footer />
    </>
  );
}

export default Home;
