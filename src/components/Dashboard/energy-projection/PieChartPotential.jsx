"use client";
import PieChart from "@/components/Charts/PieChart";

const PieChartPotential = () => {
  const dataset = {
    title: "Energy Potential Distribution",
    label: "Energy Potential (GWh)",
    labels: ["BIPV Potential", "Rooftop PV Potential"],
    dataPoints: [45, 55],
    colors: ["#1B3431", "#FFD682"],
  };

  return (
    <>
      <PieChart dataset={dataset}/>
    </>
  );
};

export default PieChartPotential;
