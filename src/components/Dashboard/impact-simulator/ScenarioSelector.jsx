import React from 'react'

const ScenarioSelector = () => {
  const ScenarioDropDown=[
    {
      
    }
  ]
  return (
    <div>
       <div
          className="p-2 mt-2 w-full rounded-xl flex gap-2 bg-backgroundGreen text-white items-center cursor-pointer"
          onClick={() => setDropdownVisible2(!dropdownVisible2)}
        >
          <div className="flex items-center text-gray-800">
            Select Scenario
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
          {ScenarioDropDown.map((item, index) => (
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
    </div>
  )
}

export default ScenarioSelector
