// src/components/Navbar.jsx
import { Dropdown } from "flowbite-react";
import React, { useState } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // Add your search logic here
    console.log("Search term:", searchTerm);
  };

  return (
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-md dark:bg-gray-800">
      <div className="flex flex-wrap justify-between items-center mx-auto ">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Admin Dashboard
          </span>
        </Link>
        <div className="flex items-center lg:order-2 space-x-4">
          <div className="relative">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <FaUserCircle className="w-8 h-8 text-gray-700 dark:text-gray-400" />
            }
          >
            <Dropdown.Item>
              <Link
                to="/profile"
                className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200"
              >
                Profile
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                to="/settings"
                className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200"
              >
                Settings
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <button className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200">
                Logout
              </button>
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                to="/dashboard"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="/analytics"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                Analytics
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent"
              >
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
