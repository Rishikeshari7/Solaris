import PieChart from '@/components/Charts/PieChart'
import React from 'react'

const CO2ReductionContribution = () => {

    const dataset = {
        title: "Contribution of different sectors to CO2 reductions",
        label: "Energy Potential (GWh)",
        labels: [
          "Residential",
          "Commercial",
          "Public Infrastructure",
          "Industrial",
        ],
        dataPoints: [45, 55, 35, 65],
        colors: ["#52736E", "#FFD682", "#FDA25C", "#8AFDB8"],
      };

  return (
    <>
      <PieChart dataset={dataset}/>
    </>
  )
}

export default CO2ReductionContribution
