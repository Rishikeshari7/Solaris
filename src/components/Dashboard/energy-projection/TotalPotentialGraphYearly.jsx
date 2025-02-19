"use client";
import LineChart from "@/components/Charts/LineChart";
import InfoBanner from "./InfoBanner";

const TotalPotentialGraphYearly = () => {
  const yearlyData = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        label: "Rooftop PV",
        data: [450, 480, 510, 520, 560, 600],
        borderColor: "#FFD682",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
      },
      {
        label: "BIPV",
        data: [350, 400, 450, 480, 510, 550],
        borderColor: "#52736E",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <InfoBanner>
      5% annual increase in adoption leads to 20% growth in energy generation by 2030
      </InfoBanner>
      <LineChart
        data={yearlyData}
        name="Year-wise Energy Potential (in GWh)"
        xAxisLabel="Year"
        yAxisLabel="Energy Potential (GWh)"
      />
    </>
  );
};

export default TotalPotentialGraphYearly;
