"use client";
import React, { useEffect, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import BipvSlider from "./BipvSlider";
import { IoMdInformationCircleOutline } from "react-icons/io";
import ToolTip from "./ToolTip";
import ToggleSwitch from "./ToggleSwitch";

const PolicySelectionPanel = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);
  const [dropdownVisible3, setDropdownVisible3] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(1);
  const [sliderValue, setSliderValue] = useState(20);
  const [solarSliderValue, setSolarSliderValue] = useState(20);
  const [selectedTaxDropdown, setSelectedTaxDropdown] = useState(1);
  const [taxIncentives, setTaxIncentives] = useState(0);
  const [solarInstallation, setSolarInstallation] = useState(false);

  const dropDown = [
    { name: "Subsidies for BIPV Installations", value: 1 },
    { name: "Tax Incentives", value: 2 },
    { name: "Mandatory Solar Installation", value: 3 },
  ];
  const taxDropDown = [
    { name: "Income Tax Rebate", value: 1 },
    { name: "Property Tax Reduction", value: 2 },
    { name: "VAT/GST Reduction on Solar Panels", value: 3 },
  ];

  const selectedItem = dropDown[selectedDropdown - 1];
  const selectedTexItemv = taxDropDown[selectedTaxDropdown - 1];

  useEffect(() => {
    console.log("taxIncentives", taxIncentives);
  }, [taxIncentives]);
  return (
    <div className="relative">
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
        <p className="font-medium">Policy selection panel</p>
      </div>

      {/* Main Dropdown Content */}
      <div
        className={`absolute bg-white rounded-l-xl p-3 border border-black/80 shadow-2xl w-[22.5rem] mx-auto top-16 -right-8 z-10 transition-all duration-700 overflow-hidden ${
          dropdownVisible ? "max-h-[45rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Nested Dropdown Toggle */}
        <div
          className="p-2 mt-2 w-full rounded-xl flex gap-2 border border-black/80 items-center cursor-pointer"
          onClick={() => setDropdownVisible2(!dropdownVisible2)}
        >
          <div className="flex items-center text-gray-800">
            {selectedItem.name}
            <MdArrowDropDown
              className={`text-3xl transform duration-500 transition-transform ${
                dropdownVisible2 ? "rotate-0" : "-rotate-90"
              }`}
            />
          </div>
        </div>

        {/* Nested Dropdown Content */}
        <div
          className={`bg-white rounded-xl  border  border-black/40 shadow-lg w-full transition-all duration-700 overflow-hidden ${
            dropdownVisible2
              ? "max-h-[15rem] p-3 mt-2   opacity-100"
              : "max-h-0  opacity-0 "
          }`}
        >
          {dropDown.map((item, index) => (
            <button
              key={index}
              className={`block my-1 w-full text-left px-4 py-2 rounded-lg hover:bg-backgroundYellow/50 cursor-pointer ${
                item.value === selectedDropdown
                  ? "bg-backgroundYellow text-black hover:bg-backgroundYellow"
                  : "bg-white text-gray-700"
              } `}
              onClick={() => {
                setSelectedDropdown(item.value);
                setDropdownVisible2(false); // Close nested dropdown on selection
              }}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Selected Item Display */}
        {selectedDropdown === 1 && (
          <div className="mt-4  p-4 rounded-lg">
            <p className=" font-bold">
              Subsidy Percentage for BIPV Installations
            </p>
            <BipvSlider
              sliderValue={sliderValue}
              setSliderValue={setSliderValue}
              color="#FF5733" // Custom color for Slider 1
            />

            <ToolTip>
              The percentage of installation costs covered by the government
            </ToolTip>
          </div>
        )}
        {selectedDropdown === 2 && (
          <div className="mt-4 p-4 rounded-lg">
            <div
              className="p-2 mt-2 w-full rounded-xl flex gap-2 border border-black/80 items-center cursor-pointer"
              onClick={() => setDropdownVisible3(!dropdownVisible3)}
            >
              <div className="flex items-center text-gray-800">
                {selectedTexItemv.name}
                <MdArrowDropDown
                  className={`text-3xl transform duration-500 transition-transform ${
                    dropdownVisible3 ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </div>
            </div>

            {/* Nested Dropdown Content */}
            <div
              className={`bg-white rounded-xl  border  border-black/40 shadow-lg w-full transition-all duration-700 overflow-hidden ${
                dropdownVisible3
                  ? "max-h-[15rem] p-3 mt-2   opacity-100"
                  : "max-h-0  opacity-0 "
              }`}
            >
              {taxDropDown.map((item, index) => (
                <button
                  key={index}
                  className={`block my-1 w-full text-left px-4 py-2 rounded-lg hover:bg-backgroundYellow/50 cursor-pointer ${
                    item.value === selectedTaxDropdown
                      ? "bg-backgroundYellow text-black hover:bg-backgroundYellow"
                      : "bg-white text-gray-700"
                  } `}
                  onClick={() => {
                    setSelectedTaxDropdown(item.value);
                    setDropdownVisible3(false); // Close nested dropdown on selection
                  }}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <ToolTip className="mt-2">
              Select the type of tax relief offered to adopters
            </ToolTip>
            <input
              type="number"
              className="border mt-2 border-black w-full p-2 rounded-xl placeholder:text-black/70"
              placeholder="Enter Percentage of Tax Incentives"
              onChange={(e) => setTaxIncentives(e.target.value)}
            ></input>
            <ToolTip className="x">
              Specify the reduction in applicable taxes
            </ToolTip>
          </div>
        )}
        {selectedDropdown === 3 && (
          <div className="mt-4 p-4 w-full rounded-lg">
            <div className="flex items-center gap-5 justify-between">
              <p className="font-medium">
                Enforce Solar Panel Installation on New Buildings
              </p>
              <ToggleSwitch
                solarInstallation={solarInstallation}
                setSolarInstallation={setSolarInstallation}
              />
            </div>
            <ToolTip>
              Toggle to enforce mandatory solar panel installations on all new
              constructions
            </ToolTip>

            {solarInstallation && (
              <div className="mt-4">
                <p className="font-medium text-lg">
                  Percentage of New Buildings Mandated to Install Solar Panels
                </p>
                <BipvSlider
                  sliderValue={solarSliderValue}
                  setSliderValue={setSolarSliderValue}
                />
                <ToolTip>
                  Set the percentage of new buildings required to adopt solar
                  panels
                </ToolTip>
              </div>
            )}
          </div>
        )}
        <div className="w-full flex flex-col gap-3 grow font-medium text-lg mt-10">
          {/* Green Button */}
          <button className="bg-[#52736E] grow rounded-xl text-white py-2 hover:bg-[#406150] transition-colors duration-300">
            Run Simulation
          </button>
          {/* Red Button */}
          <button className="bg-[#FFA8A8] grow rounded-xl text-black py-2 hover:bg-[#f58888] transition-colors duration-300">
            Run Simulation
          </button>
        </div>
      </div>
      {/* Submit Button */}
    </div>
  );
};

export default PolicySelectionPanel;
