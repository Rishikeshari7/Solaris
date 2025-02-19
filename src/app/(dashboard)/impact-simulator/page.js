"use client";
import ReportButton from "@/components/Dashboard/energy-projection/ReportButton";
import CO2Emission from "@/components/Dashboard/impact-simulator/CO2Emission";
import CO2ReductionContribution from "@/components/Dashboard/impact-simulator/CO2ReductionContribution";
import PolicySelectionPanel from "@/components/Dashboard/impact-simulator/PolicySelectionPanel";
import TopSection from "@/components/Dashboard/impact-simulator/TopSection";
import React, { useState } from "react";

const page = () => {
  const [co2ActiveButton, setCo2ActiveButton] = useState("monthly");
  const [co2SelectedRange, setCo2SelectedRange] = useState("Jan to July");
  return (
    <div className="">
      <div className="flex justify-between">
        <TopSection />
        <PolicySelectionPanel/>
      </div>
       <ReportButton
        activeButton={co2ActiveButton}
        setActiveButton={setCo2ActiveButton}
        selectedRange={co2SelectedRange}
        setSelectedRange={setCo2SelectedRange}
      />
      <CO2Emission />
      <div className="flex items-center gap-10">
        {/* snacky */}
        <CO2ReductionContribution/>
      </div>

      {/* /SOM YAHA KAAM KRO/ */}
    </div>
  );
};

export default page;
