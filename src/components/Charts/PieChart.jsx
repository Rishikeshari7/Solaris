
"use client";
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const PieChart = ({ dataset }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const data = {
      labels: dataset.labels, // Extract labels from the dataset
      datasets: [
        {
          label: dataset.label, // Dataset label
          data: dataset.dataPoints, // Extract data points
          backgroundColor: dataset.colors, // Extract colors
          hoverOffset: 4, // Optional hover effect
        },
      ],
    };

    const config = {
      type: "pie",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false, // Disable default legend
          },
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                const value = tooltipItem.raw;
                return `${tooltipItem.label}: ${value} GWh`;
              },
            },
          },
        },
      },
    };

    // Initialize the pie chart
    const myPieChart = new Chart(ctx, config);

    // Cleanup on component unmount
    return () => myPieChart.destroy();
  }, [dataset]);

  return (
    <div className="relative flex flex-col p-5 gap-3 my-5 justify-center items-center border border-backgroundGreen rounded-lg">
      <p className="font-medium mb-4">{dataset.title || "Pie Chart"}</p>
      <div className="flex justify-center flex-wrap items-center gap-4">
        {dataset.labels.map((label, index) => (
          <div className="flex items-center gap-2" key={index}>
            <div
              className="w-4 h-4"
              style={{ backgroundColor: dataset.colors[index] }}
            ></div>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <canvas className="mb-4 max-h-[15rem]" ref={chartRef} />
    </div>
  );
};

export default PieChart;
