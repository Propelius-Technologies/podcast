import React from "react";
import EmailField from "./EmailField";

const Info = () => {
  return (
      <div className="xl:absolute lg:bg-pod-dark xl:top-[30rem]  lg:top-[40rem] max-w-[700px]">
        {/* Holding text-info */}
        <div className="lg:pt-[93px]">
          {/* Heading */}
          <div className="text-left text-[2rem] md:text-[3rem] tracking-normal lg:text-left md:text-left">
            <h1 className="text-pod-green font-chivo font-light uppercase">
              Publish your podcasts
            </h1>
            <span className="text-pod-white font-light font-chivo uppercase">
              {" "}
              everywhere{" "}
            </span>
          </div>
          {/* Text desc*/}
          <div>
            <p className="text-left mt-1 text-[1rem] leading-[28px] text-pod-text-grey max-w-[26rem] md:max-w-[27rem] lg:text-left lg:max-w-[50%] md:text-left md:max-w-full">
              Upload your audio to Pod with a single click. We’ll then
              distribute your podcast to Spotify, Apple Podcasts, Google
              Podcasts, Pocket Casts and more!
            </p>
          </div>
        </div>
        {/* Input Fields */}
        <EmailField />
        {/* Supports */}
        <div className="flex flex-wrap  mb-5 md:justify-start gap-5 mt-[10%] md:w-full  xl:gap-10 xl:w-[85%] lg:w-full lg:gap-10 lg:justify-start">
          <div className='mb-[15%] flex flex-wrap justify-start gap-6 items-center '>
          <img src="/images/spotify.svg" />
          <img src="/images/apple.svg" />
          <img src="/images/google.svg" />
          <img src="/images/pocket.svg" />
          </div>
        </div>
      </div>
  );
};

export default Info;
