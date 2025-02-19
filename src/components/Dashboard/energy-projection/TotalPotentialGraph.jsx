"use client"; 
import BarChart from "@/components/Charts/BarChart";
import InfoBanner from "./InfoBanner";

const TotalPotentialGraph = ({ graphSelectedRange }) => {
  const chartData = {
    "Jan to June": {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Rooftop PV",
          data: [500, 550, 600, 800, 900, 700],
          backgroundColor: "#FFD682",
          borderColor: "#FFD682",
          borderWidth: 1,
        },
        {
          label: "BIPV",
          data: [450, 400, 380, 300, 200, 180],
          backgroundColor: "#52736E",
          borderColor: "#52736E",
          borderWidth: 1,
        },
      ],
    },
    "July to Dec": {
      labels: ["July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: "Rooftop PV",
          data: [400, 450, 500, 550, 600, 550],
          backgroundColor: "#FFD682",
          borderColor: "#FFD682",
          borderWidth: 1,
        },
        {
          label: "BIPV",
          data: [220, 250, 300, 350, 400, 420],
          backgroundColor: "#52736E",
          borderColor: "#52736E",
          borderWidth: 1,
        },
      ],
    },
  };

  return (
    <>
      <InfoBanner>
        BIPV systems perform 30% better in summer compared to monsoon due to
        cloud cover
      </InfoBanner>
      <BarChart
        name="Contribution of each type to the total potential"
        data={chartData[graphSelectedRange]}
        title="Proportion (%) or Absolute value (KWh)"
      />
    </>
  );
};

export default TotalPotentialGraph;
