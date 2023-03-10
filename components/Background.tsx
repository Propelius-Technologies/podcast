import React from "react";
import Footer from "./Footer";
import Info from "./Info";

const Background = () => {
  return (
    <>
      <div
        id="logo-bg"
        className=" flex justify-center mt-4 md:justify-start overflow-hidden md:absolute md:left-[40%] lg:left-[16%]"
      >
        <img src="/Images/logo.svg" />
      </div>
      <div className="flex justify-end relative left-0.5" id="hero-bg">
        <img
          src="/Images/image-host.jpg"
          className=" my-[40px] md:my-[130px] 2xl:mr-16"
        />
        <Footer />
      </div>
    </>
  );
};

export default Background;
