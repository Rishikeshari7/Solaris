
import React from "react";
import HeroBanner from "../../../public/Images/Home/HeroBanner.svg";
import Image from "next/image";
import EmailForm from "./EmailForm";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between ml-12">
      <div className="flex flex-col items-start space-y-10">
        <div className="text-[80px] flex leading-[6rem] flex-col font-bold">
          <p className="text-textYellow">Providing Power</p>
          <p className="">to Make a Green Better World</p>
        </div>
        <EmailForm
        placeholder="Email Address"
        buttonLabel="Get Started"
        placeholderBgColor="bg-gray-200"
      />
      </div>
      <Image
        src={HeroBanner}
        alt="HeroBanner"
      />
    </div>
  );
};

export default HeroSection;
