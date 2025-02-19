'use client'
import React from "react";

const InfoBanner = ({ children }) => {
  return (
    <div className="bg-backgroundYellow flex w-full py-2 mt-5 rounded-lg text-gray-800">
      <p className="mx-auto">{children}</p>
    </div>
  );
};

export default InfoBanner;
