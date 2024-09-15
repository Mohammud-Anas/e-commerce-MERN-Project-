import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/100",
    name: "Urban Explorer Sneakers",
    category: "Accessories",
    createdAt: "28 Jun 2024 8:12 pm",
    stock: "out of stock",
    price: "$83.74",
    publish: "Draft",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/100",
    name: "Classic Leather Loafers",
    category: "Shoes",
    createdAt: "27 Jun 2024 7:12 pm",
    stock: "72 in stock",
    price: "$97.14",
    publish: "Published",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/100",
    name: "Mountain Trekking Boots",
    category: "Apparel",
    createdAt: "26 Jun 2024 6:12 pm",
    stock: "10 low stock",
    price: "$68.71",
    publish: "Published",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/100",
    name: "Mountain Trekking Boots",
    category: "Apparel",
    createdAt: "26 Jun 2024 6:12 pm",
    stock: "10 low stock",
    price: "$68.71",
    publish: "Published",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/100",
    name: "Mountain Trekking Boots",
    category: "Apparel",
    createdAt: "26 Jun 2024 6:12 pm",
    stock: "10 low stock",
    price: "$68.71",
    publish: "Published",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/100",
    name: "Mountain Trekking Boots",
    category: "Apparel",
    createdAt: "26 Jun 2024 6:12 pm",
    stock: "10 low stock",
    price: "$68.71",
    publish: "Published",
  },
];

const ProductList = () => {
  const [menuOpen, setMenuOpen] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const toggleMenu = (index) => {
    setMenuOpen(menuOpen === index ? null : index);
  };

  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map((product) => product.id));
    }
  };

  const handleSelectProduct = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(
        selectedProducts.filter((productId) => productId !== id)
      );
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold mb-4 sm:mb-0">Product List</h1>
        <div className=" flex items-center">
          <button className="p-2  md:p-4 hover:shadow-2xl gap-1 bg-blue-600 rounded-lg text-white flex items-center ">
            <FaPlus />{" "}
            <NavLink to={"/admin-pannel/add-product"}>New product</NavLink>
          </button>
          <button
            className={`ml-4 cursor-pointer btn ${
              selectedProducts.length > 0 ? "block" : "hidden"
            }`}
          >
            <MdDeleteOutline color="red" size={"20px"} />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg">
          <thead>
            <tr>
              <th className="w-1/12 px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  checked={selectedProducts.length === products.length}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Create at
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Publish
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id} className="sm:flex sm:flex-col md:table-row">
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleSelectProduct(product.id)}
                  />
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm flex items-center space-x-4">
                  <img
                    className="w-10 h-10 rounded"
                    src={product.image}
                    alt={product.name}
                  />
                  <div>
                    <div className="text-gray-900">{product.name}</div>
                    <div className="text-gray-500">{product.category}</div>
                  </div>
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {product.createdAt}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {product.stock.includes("out of stock") ? (
                    <span className="text-red-500">{product.stock}</span>
                  ) : product.stock.includes("low stock") ? (
                    <span className="text-yellow-500">{product.stock}</span>
                  ) : (
                    <span className="text-green-500">{product.stock}</span>
                  )}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {product.price}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  {product.publish === "Draft" ? (
                    <span className="text-gray-500">{product.publish}</span>
                  ) : (
                    <span className="text-blue-500">{product.publish}</span>
                  )}
                </td>
                <td className="px-6 py-4 border-b border-gray-200 text-sm">
                  <div className="relative">
                    <button
                      className="text-gray-500 hover:text-gray-700"
                      onClick={() => toggleMenu(index)}
                    >
                      &#x22EE;
                    </button>
                    {menuOpen === index && (
                      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                          <FiEye className="inline mr-2" /> View
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                          <FiEdit className="inline mr-2" /> Edit
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
                          <FiTrash2 className="inline mr-2" /> Delete
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

export default ProductList;
