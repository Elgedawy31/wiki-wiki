import React, { useState } from "react";
import Chart from "react-apexcharts";

const CircularChart = ({ colors, percent }) => {
  const [options, setOptions] = useState({
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          size: "65%",
        },
      },
    },
    fill: {
      type: 'solid',
    },
    stroke: {
      lineCap: 'round',
    },
    colors: colors, // Use the colors you've passed as a prop
    theme: {
      mode: "dark",
    },

    labels:['Coins Collected']
 
  });

  const [series, setSeries] = useState([percent]);

  return (
    <div id="chart">
      <Chart options={options} series={series} type="radialBar" height={250} />
    </div>
  );
};

export default CircularChart;
