"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  { value: 0, label: "0%" },
  { value: 20, label: "20%" },
  { value: 40, label: "40%" },
  { value: 60, label: "60%" },
  { value: 80, label: "80%" },
  { value: 100, label: "100%" },
];

function valuetext(value) {
  return `${value}%`;
}

export default function BipvSlider({sliderValue,setSliderValue}) {
  

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <Box sx={{ width: 300, textAlign: "center" }}>
      {/* Box to show slider value */}
      <Box
        sx={{
          mb: 2,
          fontWeight: "bold",
          color: "#52736E",
          fontSize: "18px",
        }}
      >
        {sliderValue}%
      </Box>

      {/* Slider */}
      <Slider
        aria-label="Percentage Slider"
        defaultValue={20}
        value={sliderValue}
        onChange={handleSliderChange}
        getAriaValueText={valuetext}
        marks={marks}
        valueLabelDisplay="on"
        sx={{
          color: "#52736E", // Slider track and thumb color
          "& .MuiSlider-valueLabel": {
            backgroundColor: "#52736E", // Tooltip background
            color: "white", // Tooltip text
          },
          
          "& .MuiSlider-markLabel": {
            color: "gray", // Mark label color
            marginTop:"5px"
            
          },
        }}
      />
    </Box>
  );
}
