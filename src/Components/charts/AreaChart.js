import React from "react";
import ReactApexChart from "react-apexcharts";

export const mainChartColors = ["#fc155c", "#4e14a5"];
const AreaChart = ({ data }) => {
  // const data = [
  //   { year: 2009, amount: 116, count: 500 },
  //   { year: 2010, amount: 416, count: 32 },
  //   { year: 2011, amount: 215, count: 134 },
  //   { year: 2012, amount: 716, count: 124 },
  //   { year: 2012, amount: 405, count: 940 },
  //   { year: 2012, amount: 103, count: 394 },
  //   { year: 2012, amount: 949, count: 30 },
  //   { year: 2012, amount: 120, count: 30 },
  // ];

  const amounts = data.data;
  const years = data.labels;

  const chartOptions = {
    chart: {
      height: 320,
      type: "area",
      stacked: false,
    },
    fill: {
      opacity: 0, // Adjust the opacity here (0 is fully transparent, 1 is fully opaque)
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Amount",
        type: "area",
        data: amounts,
      },
    ],
    colors: mainChartColors,

    xaxis: {
      categories: years,
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
        color: "#675db7",
      },
      labels: {
        style: {
          colors: "#ffffff", // Change the color of the y-axis here
        },
      },
    },

    yaxis: [
      {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
          color: "#675db7",
        },
        labels: {
          style: {
            colors: "#ffffff", // Change the color of the y-axis here
          },
        },
        title: {
          // text: 'Income (thousand crores)',
          // text: 'Amount (Dollar)',
        },
      },
    ],

    tooltip: {
      followCursor: true,
      theme: "dark",
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y + " ";
          }
          return y;
        },
      },
    },
    grid: {
      // borderColor: 'transparent',
      show: false,
      padding: {
        bottom: 0,
      },
    },
    // legend: {
    //   offsetY:'-100%',
    //   offsetx:'-100%',

    // },
    responsive: [
      {
        breakpoint: 600,
        options: {
          yaxis: {
            show: false,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  };

  return (
    <ReactApexChart
      options={chartOptions}
      series={chartOptions.series}
      type="area"
      height={320}
    />
  );
};

export default AreaChart;
