// src/pages/Analytics.js
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
const Analytics = () => {
  // Mock data for charts
  const salesData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Sales ($)",
        data: [12000, 19000, 30000, 50000, 20000, 30000],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const revenueData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Quarterly Revenue ($)",
        data: [150000, 200000, 250000, 300000],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const customerData = {
    labels: ["New", "Returning"],
    datasets: [
      {
        label: "Customer Distribution",
        data: [500, 300],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(255, 206, 86, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl mb-2">Monthly Sales</h2>
          <Line data={salesData} />
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl mb-2">Quarterly Revenue</h2>
          <Bar data={revenueData} />
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl mb-2">Customer Distribution</h2>
          <Pie data={customerData} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
