import LineChartDropDown from "@/components/HeatMap/LineChartDropDown";
import React, { useEffect } from "react";
import { MdArrowDropDown } from "react-icons/md";

const DropDown3dViewer = ({
  dropdownVisible3d,
  setDropdownVisible3d,
  labelData3d,
  selectedDropdown3d,
  setSelectedDropdown3d,
  isOn,
  shadowData
}) => {
  const faceOptions = Object.keys(labelData3d); // Get the keys dynamically (e.g., face1, face2, face3, face4)

  useEffect(() => {
    console.log("selectedDropdown3d -->", selectedDropdown3d);
  });
  return (
    <div className="relative">
      {/* Dropdown Toggle */}
      <div
        className="p-2 mt-2 w-fit rounded-xl flex gap-2 float-right  z-100 bg-backgroundGreen text-white items-center cursor-pointer"
        onClick={() => setDropdownVisible3d(!dropdownVisible3d)}
      >
        <div className="flex items-center">
          <span className="font-medium">Select Face</span>
          <MdArrowDropDown
            className={`text-3xl transform duration-500 transition-transform ${
              dropdownVisible3d ? "rotate-0" : "-rotate-90"
            }`}
          />
        </div>
      </div>

      {/* Dropdown Content */}
      <div
        className={`absolute right-0 top-14 bg-white rounded-xl border border-black/40 shadow-lg w-fit transition-all duration-700 overflow-hidden ${
          dropdownVisible3d
            ? "max-h-[15rem] p-3 mt-2 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        {faceOptions.map((face, index) => (
          <button
            key={index}
            className={`block my-1 w-fit text-left px-4 py-2 rounded-lg hover:bg-backgroundYellow/50 cursor-pointer ${
              selectedDropdown3d === index + 1
                ? "bg-backgroundYellow text-black hover:bg-backgroundYellow"
                : "bg-white text-gray-700"
            }`}
            onClick={() => {
              setSelectedDropdown3d(index + 1); // Update the selected dropdown
              setDropdownVisible3d(false); // Close the dropdown
            }}
          >
            {`Face ${index + 1}`} {/* Label as Face 1, Face 2, etc. */}
          </button>
        ))}
      </div>

      {/* Line Chart for Selected Face */}
      {selectedDropdown3d && (
        <div className="mt-4">
          {isOn ? (
            <LineChartDropDown
              labelData={shadowData[`face${selectedDropdown3d}`]}
              label="Shadow %"
              title="Shadow Time Line Graph for Each Face in During the whole Day Time"
              yAxisLabel="Shadow Percentage for Each Face (in %)"
            />
          ) : (
            <LineChartDropDown
              labelData={labelData3d[`face${selectedDropdown3d}`]}
              label="BIPV Potential"
              title="BIPV Potential for Each Face in During the whole Day Time"
              yAxisLabel="BIPV Potential for Each Face (in kwh)"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DropDown3dViewer;
