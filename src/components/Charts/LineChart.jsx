"use client";
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const LineChart = ({
  data = {
    labels: ["Default Year 1", "Default Year 2"],
    datasets: [
      {
        label: "Default Dataset",
        data: [100, 200],
        borderColor: "#888",
        backgroundColor: "rgba(136, 136, 136, 0.5)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  },
  name = "Default Chart Title",
  xAxisLabel = "X-axis Label",
  yAxisLabel = "Y-axis Label",
}) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const config = {
      type: "line", // Line chart
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: xAxisLabel,
            },
          },
          y: {
            beginAtZero: true,
           suggestedMax: 9,
            title: {
              display: true,
              text: yAxisLabel,
            },
          },
        },
      },
    };

    const myChart = new Chart(ctx, config);

    return () => myChart.destroy(); // Cleanup
  }, [data, xAxisLabel, yAxisLabel]);

  return (
    <div className="relative flex flex-col p-5 pl-12 gap-3 my-5 justify-center items-center border border-backgroundGreen rounded-lg">
      <p className="font-medium">{name}</p>
      <div className="flex w-full">
        <canvas className="max-h-[25rem]" ref={chartRef} />
      </div>
    </div>
  );
};

export default LineChart;
