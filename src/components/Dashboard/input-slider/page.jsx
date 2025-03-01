"use client";
import React, { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputSelection = ({
  datePicker = true,
  selectedDate,
  setSelectedDate,
  onSubmit,
  bipvValue=0.4,
  setbipvValue,
  ghi=5, setGhi
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <>

{dropdownVisible && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setDropdownVisible(false)}
        ></div>
      )}

      <div className="relative z-50">
      {/* Main Dropdown Toggle */}
      <div
        className="w-60 bg-backgroundYellow float-right p-3 -m-8 mt-2 rounded-l-xl font-semibold text-xl flex justify-between items-center cursor-pointer"
        onClick={() => setDropdownVisible(!dropdownVisible)}
      >
        <MdArrowDropDown
          className={`text-gray-800 text-3xl transform duration-500 transition-transform ${
            dropdownVisible ? "rotate-0" : "-rotate-90"
          }`}
        />
        <p className="font-medium">Input selection panel</p>
      </div>

      {/* Main Dropdown Content */}
      <div
        className={`absolute bg-white flex flex-col rounded-l-xl p-3 border border-black/80 shadow-2xl w-[22.5rem] mx-auto top-16 -right-8 z-10 transition-all duration-700 overflow-hidden ${
          dropdownVisible
            ? "max-h-[45rem] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
      <button className="absolute"
      onClick={() => setDropdownVisible(!dropdownVisible)}
       >❌</button>
        {/* Date Picker */}
        {datePicker ? (
          <div className="max-w-[284px] flex flex-col justify-center items-center mx-auto">
            <label
              htmlFor="date-time-picker"
              className="block text-sm font-medium text-gray-700 mb-2"
            >Select Date</label>
            <DatePicker
              id="birth-date"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="Select a date"
              inline
              className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="mt-1 text-sm text-gray-500">Please Select a Date</p>
            <p>
              {selectedDate
                ? selectedDate.toLocaleDateString()
                : "No date selected"}
            </p>
            <input
            type="number"
            onChange={(e)=>setGhi(e.target.value)}
            placeholder="Enter GHI Value"
            className="border border-black mt-2 px-1 rounded-md "
            ></input>
            <p className="text-lg font-medium mt-2 ">GHI Value: <span className="text-red-500 font-semibold">{ghi}</span> <span  className="text-sm">kW/m <sup>2</sup></span>  </p>
          </div>
        ) : (
          <div className="max-w-[284px] mx-auto">
      {/* Date and Time Picker */}
      <label
        htmlFor="date-time-picker"
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        Select Date and Time
      </label>
      <input
        id="date-time-picker"
        type="datetime-local"
        value={selectedDate}
        onChange={(e) => setSelectedDate(new Date(e.target.value))}
        className="w-full border border-gray-300 rounded-md shadow-sm px-2 py-1 focus:ring-indigo-500 focus:border-indigo-500"
      />
      <p className="mt-1 text-sm text-gray-500">Please Select Date and Time</p>
      <p>
        {selectedDate
          ? selectedDate.toLocaleString()
          : "No date and time selected"}
      </p>
    </div>
        )}
        {
          !datePicker&&
          <button className="mx-auto float-end mt-10 py-2 bg-backgroundGreen hover:bg-backgroundGreen/90 w-full text-white text-lg rounded-xl" 
        onClick={onSubmit}
        > Submit</button>
        }
        
      </div>
      {/* Submit Button */}
    </div>
    </>
   
  );
};

export default InputSelection;
