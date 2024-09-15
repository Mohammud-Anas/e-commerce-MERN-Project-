import {
  faArrowRight,
  faDollarSign,
  faTasks,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "chart.js/auto";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const DashboardCard = ({
  title,
  value,
  percentage,
  sinceLastMonth,
  icon,
  color,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-2 w-full  md:w-1/4 lg:w-1/4 mb-4">
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-gray-500 text-sm font-medium">{title}</h5>
          <h3 className="text-2xl font-semibold">{value}</h3>
          <p
            className={`text-sm ${
              percentage > 0 ? "text-green-500" : "text-red-500"
            } flex items-center`}
          >
            <span className="mr-1">
              {percentage > 0 ? "↑" : "↓"} {Math.abs(percentage)}%
            </span>{" "}
            Since last month
          </p>
        </div>
        <div className={`p-2 rounded-full ${color} text-white`}>
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
      </div>
      {title === "TASK PROGRESS" && (
        <div className="mt-2">
          <div className="h-2 rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-purple-500"
              style={{ width: `${value}` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};
const DashboardChart = () => {
  // Chart Data
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40, 82, 67, 59, 80, 81],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
      },
      {
        label: "Revenue",
        data: [28, 48, 40, 19, 86, 27, 90, 30, 20, 40, 86, 27],
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="flex flex-col mb-4 md:mb-0">
          <div className="flex items-center text-blue-500 mb-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <div>
              <h5 className="text-gray-700 font-medium">Overall Sales</h5>
              <h3 className="text-2xl font-semibold">12 Millions</h3>
            </div>
          </div>
          <div className="flex items-center text-green-500 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <div>
              <h5 className="text-gray-700 font-medium">Overall Earnings</h5>
              <h3 className="text-2xl font-semibold">78 Millions</h3>
            </div>
          </div>
          <div className="flex items-center text-red-500 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div>
              <h5 className="text-gray-700 font-medium">Overall Revenue</h5>
              <h3 className="text-2xl font-semibold">60 Millions</h3>
            </div>
          </div>
          <div className="flex items-center text-yellow-500 mb-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div>
              <h5 className="text-gray-700 font-medium">New Customers</h5>
              <h3 className="text-2xl font-semibold">23k</h3>
            </div>
          </div>
          <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md flex items-center">
            <span>View Reports</span>
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
        <div className="flex justify-center">
          <div className="w-full  md:w-[700px] h-[350px]">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

const orders = [
  {
    customer: "Ellie Collins",
    product: "Ginger Snacks",
    userId: "Arise827",
    orderedPlaced: "12/12/2021",
    amount: "$18.00",
    paymentStatus: "Paid",
    orderStatus: "Delivered",
    paymentStatusClass: "text-green-500",
    orderStatusClass: "text-green-500",
  },
  {
    customer: "Sophie Nguyen",
    product: "Guava Sorbet",
    userId: "Arise253",
    orderedPlaced: "18/12/2021",
    amount: "$32.00",
    paymentStatus: "Failed",
    orderStatus: "Cancelled",
    paymentStatusClass: "text-red-500",
    orderStatusClass: "text-red-500",
  },
  {
    customer: "Darcy Ryan",
    product: "Gooseberry Surprise",
    userId: "Arise878",
    orderedPlaced: "22/12/2021",
    amount: "$19.00",
    paymentStatus: "Awaiting",
    orderStatus: "Processing",
    paymentStatusClass: "text-blue-500",
    orderStatusClass: "text-blue-500",
  },
  {
    customer: "Darcy Ryan",
    product: "Gooseberry Surprise",
    userId: "Arise878",
    orderedPlaced: "22/12/2021",
    amount: "$19.00",
    paymentStatus: "Awaiting",
    orderStatus: "Processing",
    paymentStatusClass: "text-blue-500",
    orderStatusClass: "text-blue-500",
  },
  {
    customer: "Darcy Ryan",
    product: "Gooseberry Surprise",
    userId: "Arise878",
    orderedPlaced: "22/12/2021",
    amount: "$19.00",
    paymentStatus: "Awaiting",
    orderStatus: "Processing",
    paymentStatusClass: "text-blue-500",
    orderStatusClass: "text-blue-500",
  },
  {
    customer: "Darcy Ryan",
    product: "Gooseberry Surprise",
    userId: "Arise878",
    orderedPlaced: "22/12/2021",
    amount: "$19.00",
    paymentStatus: "Awaiting",
    orderStatus: "Processing",
    paymentStatusClass: "text-blue-500",
    orderStatusClass: "text-blue-500",
  },
  // Add more orders as needed for testing scroll
  // ...
];

const OrdersTable = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    setIsScrolling(true);
    clearTimeout(timeout);
    const timeout = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
      <div
        className={`overflow-x-auto h-96 ${
          isScrolling ? "scrollbar-visible" : "scrollbar-hidden"
        }`}
        onScroll={handleScroll}
      >
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Product
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                User ID
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Ordered Placed
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Payment Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Order Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                      <img
                        className="w-full h-full rounded-full"
                        src={`https://i.pravatar.cc/100?img=${index + 1}`}
                        alt={`${order.customer}'s avatar`}
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {order.customer}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {order.product}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {order.userId}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {order.orderedPlaced}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {order.amount}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <p
                    className={`whitespace-no-wrap ${order.paymentStatusClass}`}
                  >
                    {order.paymentStatus}
                  </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <span
                    className={`relative inline-block px-3 py-1 font-semibold leading-tight ${order.orderStatusClass}`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">{order.orderStatus}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <>
      <div className="flex  justify-center gap-2 flex-col md:flex-row ">
        <DashboardCard
          title="BUDGET"
          value="$24k"
          percentage={12}
          sinceLastMonth={12}
          icon={faDollarSign}
          color="bg-blue-500"
        />
        <DashboardCard
          title="TOTAL CUSTOMERS"
          value="1.6k"
          percentage={-16}
          sinceLastMonth={-16}
          icon={faUser}
          color="bg-green-500"
        />
        <DashboardCard
          title="TASK PROGRESS"
          value="75.5%"
          percentage={0}
          sinceLastMonth={0}
          icon={faTasks}
          color="bg-orange-500"
        />
        <DashboardCard
          title="TOTAL PROFIT"
          value="$15k"
          percentage={0}
          sinceLastMonth={0}
          icon={faWallet}
          color="bg-purple-500"
        />
      </div>
      <DashboardChart />

      <OrdersTable />
    </>
  );
};

export default Dashboard;
