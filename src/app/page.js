"use client";

import React, { useEffect, useState, useRef } from "react";

// import ModelViewer from "@/components/ModelViewer/modelViewer";
import ModelViewer from "@/components/HeatMap/heatMap";

const Page = () => {


  return (
    <div className="flex flex-col w-[100vw] h-[100vh] p-4">
      {/* Model Viewer Component */}
      <ModelViewer/>
    </div>
  );
}
export default Page;