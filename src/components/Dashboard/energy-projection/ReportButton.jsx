import React, { useState } from "react";

const ReportButton = ({ activeButton, setActiveButton, selectedRange, setSelectedRange }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <div className="flex flex-col gap-5 mt-3">
      <div className="flex gap-5">
        {/* Monthly Report Button */}
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded ${
            activeButton === "monthly"
              ? "bg-backgroundGreen text-white"
              : "border border-backgroundGreen text-backgroundGreen"
          }`}
          onClick={() => {
            setActiveButton("monthly");
            setDropdownVisible(!dropdownVisible);
          }}
        >
          Monthly Report
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform ${
              dropdownVisible ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Seasonal Report Button */}
        <button
          className={`px-4 py-2 rounded ${
            activeButton === "seasonal"
              ? "bg-backgroundGreen text-white"
              : "border border-backgroundGreen text-backgroundGreen"
          }`}
          onClick={() => {
            setActiveButton("seasonal");
            setDropdownVisible(false);
          }}
        >
          Seasonal Report
        </button>
      </div>

      {/* Dropdown for Monthly Report */}
      {dropdownVisible && activeButton === "monthly" && (
        <div className="w-36 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          <ul className="text-sm text-gray-700">
            <li
              className={`px-4 py-2 hover:bg-backgroundYellow/50 cursor-pointer ${
                selectedRange === "Jan to July" ? "bg-backgroundYellow" : ""
              }`}
              onClick={() => {
                setSelectedRange("Jan to June");
                setDropdownVisible(false);
              }}
            >
              Jan to July
            </li>
            <li
              className={`px-4 py-2 hover:bg-backgroundYellow/50 cursor-pointer ${
                selectedRange === "Aug to Dec" ? "bg-backgroundYellow" : ""
              }`}
              onClick={() => {
                setSelectedRange("July to Dec");
                setDropdownVisible(false);
              }}
            >
              July to Dec
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReportButton;
