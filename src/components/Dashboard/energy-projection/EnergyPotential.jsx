"use client";
import BarChart from "@/components/Charts/BarChart";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const EnergyPotential = () => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        barPercentage: 0.5,
        barThickness: 20,
        maxBarThickness: 21,
        minBarLength: 2,
        label: "Energy potential (in GWh or KWh)",
        data: [4, 7.0, 5.0, 8.5, 6.5, 3.5, 5.5], // Example data in GWh for BIPV
        backgroundColor: "#FFD682", // Background color for BIPV
        borderColor: "#FFD682", // Border color for BIPV (optional, same as bg color)
        borderWidth: 1, // Optional, for better visualization
      },
    ],
  };

  return (
    <div className="w-[60%] h-full grow">
      <BarChart
        name="Solar energy potential for each month"
        data={chartData}
        bannerMessage="BIPV systems perform 30% better in summer compared to monsoon due to cloud cover"
      />
    </div>
  );
};

export default EnergyPotential;
