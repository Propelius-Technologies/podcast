import React from "react";
import Dots from "./Dots";
import Info from "./Info";

const Background = () => {
  return (
    <>
      <div
        id="logo-bg"
        className=" flex justify-start mt-4 xl:ml-[0rem] lg:-[2rem] md:justify-start overflow-hidden"
      >
        <img src="/images/logo.svg" />
      </div>
      <div className="flex justify-end relative left-0.5" id="hero-bg">
        <img
          src="/images/image-host.jpg"
          className=" my-[40px] md:my-[130px] 2xl:mr-16"
        />
        <Dots />
      </div>
    </>
  );
};

export default Background;
