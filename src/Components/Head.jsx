import React from "react";
import CustomLink from "./CustomLink";

function Head() {
  const imgSrc = process.env.PUBLIC_URL + "/assets/header-bg.png";

  return (
    <div
      className="min-h-screen pt-24 pb-10 lg:pt-32 lg:pb-28 flex justify-center items-center"
      style={{ background: `url(${imgSrc})`, backgroundSize: "cover" }}
    >
      <div className="container px-5 lg:px-20 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="max-w-xs md:max-w-xl flex flex-col gap-6 xl:gap-10 items-center lg:items-start">
          <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] text-center lg:text-left font-bold text-primary leading-[3.5rem]">
            Lorem, ipsum dol or sit amet cons ec tetur adipis
          </h1>
          <p className="text-sm sm:text-lg text-center lg:text-left lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
          <div className="flex items-center gap-2 md:gap-5">
            <CustomLink destination="/" text="Sign up for free" />
            <CustomLink type="secondary" destination="/" text="Discover" />
          </div>
        </div>

        <img
          src={process.env.PUBLIC_URL + "assets/header.png"}
          alt="header"
          className="max-w-xs sm:max-w-sm md:max-w-lg xl:max-w-2xl"
        />
      </div>
    </div>
  );
}

export default Head;
