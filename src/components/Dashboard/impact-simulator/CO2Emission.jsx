import LineChart from '@/components/Charts/LineChart'
import React from 'react'

const CO2Emission = () => {

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
        ],
      };

  return (
    <div>
      <LineChart
        data={yearlyData}
        name="CO2 emissions reduce over a specified period due to BIPV adoption"
        xAxisLabel="Year"
        yAxisLabel="Tons of CO2 saved over time"
      />
    </div>
  )
}

export default CO2Emission
