import React from "react";
import img from "../../assets/AboutUs/AboutUsImg1.svg";
import contentImg from "../../assets/AboutUs/AboutUsImg2.svg";

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="w-full h-screen flex flex-col justify-center items-center bg-cover bg-center relative"
        style={{
          backgroundImage: `url('${img}')`, // Ensure correct path to the background image
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white font-antonio text-3xl md:text-5xl lg:text-[60px] font-semibold leading-[1.3] tracking-wide">
            About Us
          </h1>
          <p className="text-white font-antonio text-lg md:text-2xl lg:text-[45px] font-semibold leading-relaxed mt-4 lg:mt-6 max-w-[90%] md:max-w-[743px] mx-auto">
            Welcome to Zenith Vista – Your Partner in <br />
            Reaching New Heights!
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 xl:px-32 py-12 lg:py-16 bg-white">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            About US
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-7">
            At Zenith Vista, we are passionate about empowering individuals and
            businesses to achieve their full potential. Our journey began with
            a simple idea: to create a platform that inspires innovation,
            fosters creativity, and delivers results that matter. Today, we
            stand as a beacon for those who aspire to go beyond boundaries and
            leave a lasting impact.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-7">
            At Zenith Vista, we are passionate about empowering individuals and
            businesses to achieve their full potential. Our journey began with
            a simple idea: to create a platform that inspires innovation,
            fosters creativity, and delivers results that matter. Today, we
            stand as a beacon for those who aspire to go beyond boundaries and
            leave a lasting impact.
          </p>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src={contentImg}
            alt="Zenith Vista"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;


// import React, { useState } from "react";
// import img from "../../assets/AboutUs/AboutUsImg1.svg";


// const Aboutus = () => {

//   return (
//     <>
//      <div className="w-full h-screen 2xl:h-[920px] flex items-center justify-center bg-cover bg-center relative"
//         style={{
//           backgroundImage: `url('${img}')`,
//         }} >

//         <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//         <div className="relative z-10 text-center">
//           <h1 className="text-white font-antonio text-[24px] md:text-[40px] lg:text-[60px] font-semibold tracking-wide ">
//             About Us
//           </h1>
//           <p className="text-white text-[16px] md:text-[24px] font-bold">
//             Welcome to Zenith Vista – Your Partner in <br /> Reaching New Heights!
//           </p>
//         </div>
//       </div>
   
//     </>
//   );
// };



// export default Aboutus;