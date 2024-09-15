import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar, FiMoreVertical } from "react-icons/fi";

const orders = [
  {
    id: "#6010",
    customer: "Jayvion Simon",
    email: "nannie.abernathy70@yahoo.com",
    date: "06 Jul 2024 10:54 am",
    items: 6,
    price: "$484.15",
    status: "Refunded",
  },
  {
    id: "#6011",
    customer: "Lucian Obrien",
    email: "ashlynn.ohara62@gmail.com",
    date: "05 Jul 2024 9:54 am",
    items: 1,
    price: "$83.74",
    status: "Completed",
  },
  {
    id: "#60110",
    customer: "Soren Durham",
    email: "vergie.block82@hotmail.com",
    date: "26 Jun 2024 12:54 am",
    items: 5,
    price: "$400.41",
    status: "Pending",
  },
  {
    id: "#60111",
    customer: "Cortez Herring",
    email: "vito.hudson@hotmail.com",
    date: "24 Jun 2024 11:54 pm",
    items: 1,
    price: "$83.74",
    status: "Completed",
  },
  {
    id: "#60112",
    customer: "Brycen Jimenez",
    email: "tyrel.greenholt@gmail.com",
    date: "23 Jun 2024 10:54 pm",
    items: 6,
    price: "$484.15",
    status: "Refunded",
  },
];

const OrderList = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [menuOpen, setMenuOpen] = useState(null);

  const toggleMenu = (index) => {
    setMenuOpen(menuOpen === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between items-center mb-4">
        <div className="flex flex-wrap space-x-4 mb-2 md:mb-0">
          <button className="py-2 px-4 bg-gray-200 rounded mb-2 md:mb-0">
            All 20
          </button>
          <button className="py-2 px-4 bg-yellow-200 rounded mb-2 md:mb-0">
            Pending 6
          </button>
          <button className="py-2 px-4 bg-green-200 rounded mb-2 md:mb-0">
            Completed 10
          </button>
          <button className="py-2 px-4 bg-red-200 rounded mb-2 md:mb-0">
            Cancelled 2
          </button>
          <button className="py-2 px-4 bg-blue-200 rounded mb-2 md:mb-0">
            Refunded 2
          </button>
        </div>
      </div>

      <div className="flex flex-wrap space-x-4 mb-4">
        <div className="flex items-center space-x-2">
          <FiCalendar />
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Start date"
            className="border border-gray-300 rounded py-2 px-4"
          />
        </div>
        <div className="flex items-center space-x-2">
          <FiCalendar />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="End date"
            className="border border-gray-300 rounded py-2 px-4"
          />
        </div>
        <input
          type="text"
          placeholder="Search customer or order number..."
          className="form-input rounded-md border-gray-300 shadow-sm flex-grow"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr>
              <th className="w-1/12 px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" />
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Order
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Items
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.id} className="sm:flex sm:flex-col md:table-row">
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  <input type="checkbox" />
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {order.id}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-10 h-10 rounded-full"
                      src={`https://i.pravatar.cc/50?img=${index + 1}`}
                      alt={order.customer}
                    />
                    <div>
                      <div className="text-gray-900">{order.customer}</div>
                      <div className="text-gray-500">{order.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {order.date}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {order.items}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {order.price}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  <span
                    className={`py-1 px-3 rounded-full text-xs ${
                      order.status === "Refunded"
                        ? "bg-gray-200 text-gray-700"
                        : order.status === "Completed"
                        ? "bg-green-200 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-200 text-yellow-700"
                        : ""
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  <div className="relative">
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => toggleMenu(index)}
                    >
                      <FiMoreVertical />
                    </button>
                    {menuOpen === index && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                          View
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                          Edit
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
