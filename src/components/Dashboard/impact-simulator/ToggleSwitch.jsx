'use client'

const ToggleSwitch = ({solarInstallation,setSolarInstallation}) => {
  

  const handleToggle = () => {
    setSolarInstallation((prev) => !prev);
  };

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      {/* Toggle Switch */}
      <div
        className={`relative inline-block w-10 h-6 rounded-full transition-colors duration-300 ${
          solarInstallation
           ? "bg-yellow-400" : "bg-gray-300"
        }`}
        onClick={handleToggle}
      >
        <div
          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
            solarInstallation ? "translate-x-4" : ""
          }`}
        ></div>
      </div>
      {/* Label */}
    </label>
  );
};

export default ToggleSwitch;
