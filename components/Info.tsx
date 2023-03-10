import React from "react";
import EmailField from "./EmailField";

const Info = () => {
  return (
    <div>
      <div className="absolute h-[509px] 2xl:left-[20rem] lg:bg-pod-dark xl:top-[20rem]  lg:top-[40rem] lg:left-[8rem]">
        {/* Holding text-info */}
        <div className="md:pt-[93px]">
          {/* Heading */}
          <div className="text-left text-[2rem] md:text-[3rem] tracking-normal lg:text-center md:text-center">
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
            <p className="text-left mt-1 text-[1rem] leading-[28px] text-pod-text-grey max-w-[26rem] md:max-w-[27rem] lg:text-center lg:max-w-full md:text-center md:max-w-full">
              Upload your audio to Pod with a single click. We’ll then
              distribute your podcast to Spotify, Apple Podcasts, Google
              Podcasts, Pocket Casts and more!
            </p>
          </div>
        </div>
        {/* Input Fields */}
        <EmailField />
        {/* Supports */}
        <div className="flex justify-center gap-10 mt-[10%] md:w-full md:justify-between items-baseline flex-wrap xl:gap-10 xl:w-[85%] lg:w-full lg:gap-10 lg:justify-center">
          <img src="/Images/spotify.svg" />
          <img src="/Images/apple.svg" />
          <img src="/Images/google.svg" />
          <img src="/Images/pocket.svg" />
        </div>
      </div>
    </div>
  );
};

export default Info;
