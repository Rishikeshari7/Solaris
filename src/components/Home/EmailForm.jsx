'use client'
import React from "react";

const EmailForm = ({ placeholder, buttonLabel, placeholderBgColor = "bg-gray-300" }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Form submitted");
  };

  return (
    <form onSubmit={submitHandler} className="relative">
      <input
        type="email"
        placeholder={placeholder}
        className={`w-full text-xl px-4 py-[14px] rounded-lg border ${placeholderBgColor} outline-none pr-40 placeholder-black placeholder:font-medium`}
      />
      <button
        className="bg-backgroundGreen absolute right-2 top-[6px] text-white text-xl py-2 px-5 rounded-lg hover:bg-opacity-90 transition"
      >
        {buttonLabel}
      </button>
    </form>
  );
};

export default EmailForm;
