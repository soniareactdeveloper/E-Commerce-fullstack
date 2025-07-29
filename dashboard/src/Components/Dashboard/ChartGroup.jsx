// ChartGroup.js
import React from "react";
import { Bar, Pie, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const ChartGroup = () => {
  const barData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Growth",
        data: [12000, 19000, 30000, 50000],
        backgroundColor: "#60a5fa",
      },
    ],
  };

  const pieData = {
    labels: ["Organic", "Referral", "Social", "Email"],
    datasets: [
      {
        data: [400, 300, 200, 100],
        backgroundColor: ["#34D399", "#60A5FA", "#FBBF24", "#F87171"],
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($K)",
        data: [150, 200, 180, 220, 240, 260],
        fill: true,
        borderColor: "#10B981",
        backgroundColor: "rgba(16, 185, 129, 0.1)",
        tension: 0.4,
      },
    ],
  };

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "#374151" },
      },
    },
    scales: {
      x: { ticks: { color: "#6B7280" } },
      y: { beginAtZero: true, ticks: { color: "#6B7280" } },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right", // ✅ Label beside pie chart
        labels: {
          color: "#374151",
          boxWidth: 16,
          padding: 20,
        },
      },
    },
    layout: {
      padding: {
        right: 20,
      },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row gap-3 flex-wrap justify-center mt-[90px]">
      {/* Market Overview - Bar Chart */}
      <div className="bg-white p-4 shadow-md rounded-lg w-full max-w-[290px] h-[360px]">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Market Overview</h3>
        <Bar data={barData} options={commonOptions} />
      </div>

      {/* Visits by Source - Pie Chart */}
      <div className="bg-white p-4 shadow-md rounded-lg w-full max-w-[290px] h-[360px]">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Visits by Source</h3>
        <Pie data={pieData} options={pieOptions} />
      </div>

      {/* Market Revenue - Line Chart */}
      <div className="bg-white p-4 shadow-md rounded-lg w-full max-w-[290px] h-[360px]">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Market Revenue</h3>
        <Line data={lineData} options={commonOptions} />
      </div>
    </div>
  );
};

export default ChartGroup;
