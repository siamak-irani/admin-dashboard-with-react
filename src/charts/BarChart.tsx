import React from "react";

import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { ChartElementsPosition } from "../lib/type";

ChartJS.register(BarController, BarElement, CategoryScale, LinearScale);


export type SparklineAreaDataType = { x: number; yval: number }[];

type BarChartProps = {
  chartData: SparklineAreaDataType;
  color: string;
  width: string;
  height: string;
};

const BarChart = ({ chartData, color, width, height }: BarChartProps) => {
  const barChartData = chartData.map((item) => {
    return { x: item.x, y: item.yval };
  });

  const data = {
    datasets: [
      {
        data: barChartData,
        backgroundColor: color,
        barPercentage: 1.1,
      },
    ],
    labels: ["5", "5", "6", "5", "2"],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <Chart
        type="bar"
        data={data}
        options={options}
        width={width}
        height={height}
      />
    </div>
  );
};

export default BarChart;
