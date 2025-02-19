import React from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import clsx from "clsx";

const ToolTip = ({ children, className }) => {
  return (
    <div
      className={clsx("relative flex items-center gap-2 mt-5 group", className)}
    >
      <IoMdInformationCircleOutline className="text-2xl" />

      <p className="text-sm text-black/80 opacity-0 group-hover:opacity-100 transform duration-500">
        {children}
      </p>
    </div>
  );
};

export default ToolTip;
