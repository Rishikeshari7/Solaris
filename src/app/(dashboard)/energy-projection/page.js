"use client";
import LineChart from "@/components/Charts/LineChart";
import BannerSection from "@/components/Dashboard/energy-projection/BannerSection";
import EnergyPotential from "@/components/Dashboard/energy-projection/EnergyPotential";
import InfoBanner from "@/components/Dashboard/energy-projection/InfoBanner";
import PieChartPotential from "@/components/Dashboard/energy-projection/PieChartPotential";
import ReportButton from "@/components/Dashboard/energy-projection/ReportButton";
import TotalPotentialGraph from "@/components/Dashboard/energy-projection/TotalPotentialGraph";
import TotalPotentialGraphYearly from "@/components/Dashboard/energy-projection/TotalPotentialGraphYearly";
import React,{useEffect, useState} from "react";

const page = () => {
  const [graphActiveButton, setGraphActiveButton] = useState("monthly");
  const [graphSelectedRange, setGraphSelectedRange] = useState("Jan to June");

  const [energyActiveButton, setEnergyActiveButton] = useState("monthly");
  const [energySelectedRange, setEnergySelectedRange] = useState("Jan to June");

  useEffect(()=>{
    console.log("graphActiveButton",graphActiveButton)
    console.log("graphSelectedRange",graphSelectedRange)
    console.log("energyActiveButton",energyActiveButton)
    console.log("energySelectedRange",energySelectedRange)
  },[graphActiveButton,graphSelectedRange,energyActiveButton,energySelectedRange])


  return (
    <div>
      <BannerSection />
      <ReportButton
        activeButton={graphActiveButton}
        setActiveButton={setGraphActiveButton}
        selectedRange={graphSelectedRange}
        setSelectedRange={setGraphSelectedRange}
      />
      
      {graphActiveButton === "monthly" ? <TotalPotentialGraph graphSelectedRange={graphSelectedRange} /> : <TotalPotentialGraphYearly />}

      <ReportButton
        activeButton={energyActiveButton}
        setActiveButton={setEnergyActiveButton}
        selectedRange={energySelectedRange}
        setSelectedRange={setEnergySelectedRange}
      />
      <div className="flex gap-10 min-h-[450px] lg:flex-row flex-col">
        <EnergyPotential energyActiveButton={energyActiveButton} energySelectedRange={energySelectedRange}/>
        <PieChartPotential />
      </div>
    </div>
  );
};

export default page;
