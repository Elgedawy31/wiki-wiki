import React, { useState } from "react";
import Chart from "react-apexcharts";

export const mainChartColors = ["#fff"];

const BarChart = ({ data, labels }) => {
  const multipleYAxisChartOpts = {
    chart: {
      height: 320,
      type: "line",
      stacked: false,
      toolbar: {
        show: false,
      },
    },

    plotOptions: {
      bar: {
        columnWidth: "25%",
        horizontal: false, // Set to true for horizontal bars
        borderRadius: 5, // Set the border radius of the bars
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [0, 0, 3],
    },
    series: [
      {
        name: "series-1",
        data: data,
      },
    ],
    colors: mainChartColors,
    xaxis: {
      categories: labels,

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
    legend: {
      offsetY: 7,
    },
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
    <Chart
      options={multipleYAxisChartOpts}
      series={multipleYAxisChartOpts.series}
      type="bar"
      height={320}
    />
  );
};

export default BarChart;
