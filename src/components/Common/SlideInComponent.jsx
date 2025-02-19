"use client";

import React, { useState } from "react";

const SlideInComponent = ({isOpen,setIsOpen, children }) => {
  

  return (
    <div className="relative">
      {/* Toggle Button */}
      
      <button
        className="w-full py-2 px-4 bg-yellow-500 text-white rounded-lg focus:outline-none hover:bg-yellow-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Slide
      </button>
      {/* Sliding Content */}
      <div
        className={`absolute left-0 w-full bg-white rounded-lg shadow-md transform transition-transform duration-500 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-[100%] opacity-0"
        }`}
        style={{ transform: isOpen ? "translateY(-100%)" : "translateY(100%)" }}
      >
      <button
        className="w-full py-2 px-4 bg-yellow-400 text-white rounded-lg focus:outline-none hover:bg-yellow-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        Toggle Slide
      </button>
        {children}
      </div>
    </div>
  );
};

export default SlideInComponent;
