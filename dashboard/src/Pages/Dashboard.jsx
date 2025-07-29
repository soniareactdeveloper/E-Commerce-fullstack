import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import StatCard from "../Components/Dashboard/StatCard";
import RecentPurchases from "../Components/Dashboard/RecentPurchases";
import ChartGroup from "../Components/Dashboard/ChartGroup";
import Footer from "../Components/Footer/Footer";

// Register Bar chart components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Dashboard = () => {
  const stats = [
    {
      title: "Total sells",
      amount: "126.500",
      percentage: "34.7",
      iconColor: "bg-emerald-400",
      textColor: "text-emerald-500",
    },
    {
      title: "Orders value",
      amount: "136.800",
      percentage: "22.8",
      iconColor: "bg-blue-600",
      textColor: "text-blue-500",
    },
    {
      title: "Daily orders",
      amount: "25.200",
      percentage: "17.8",
      iconColor: "bg-purple-600",
      textColor: "text-purple-500",
    },
    {
      title: "Daily Revenue",
      amount: "12.125",
      percentage: "23.9",
      iconColor: "bg-pink-400",
      textColor: "text-pink-500",
    },
  ];

  // Bar Chart Data
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Completed",
        data: [120, 190, 300, 250, 220, 400, 380],
        backgroundColor: "#10b981", // green
      },
      {
        label: "Pending",
        data: [80, 110, 260, 240, 220, 150, 180],
        backgroundColor: "#155dfc", // blue
      },
      {
        label: "Unpaid",
        data: [50, 70, 90, 100, 360, 180, 40],
        backgroundColor: "#f3bcfd", // light purple
      },
      {
        label: "Delivered",
        data: [100, 150, 400, 200, 190, 220, 240],
        backgroundColor: "#b9a2fb", // light violet
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#374151", // text-gray-700
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#6B7280", // text-gray-500
        },
      },
      x: {
        ticks: {
          color: "#6B7280", // text-gray-500
        },
      },
    },
  };

  return (
   <section>

     <div className="min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((item, index) => (
          <StatCard key={index} {...item} />
        ))}
      </div>

      {/* Chart */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-12">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Weekly Order Status Overview</h3>
        <Bar data={chartData} options={chartOptions} />
      </div>

      {/* Recent Purchases Table */}
      <RecentPurchases />

      {/* chart group */}
      <ChartGroup/>

    </div>
      {/* Footer */}
      <Footer/>
   </section>
  );
};

export default Dashboard;
