import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchProducts } from "../api/product.api.js";
import Processing from "../components/Processing.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { setProductsList } from "../store/productSlice.js";
const ProductList = () => {
  const dispatch = useDispatch();
  const query = useParams();
  console.log(query.productName);
  const products = useSelector((state) => state.product.productsList);
  const [sortOrder, setSortOrder] = useState("");

  const [showProcessing, setProcessing] = useState(false);
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 1000,
    sortBy: "low",
  });
  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  const filterHandler = async (sortOrderValue) => {
    setSortOrder(sortOrderValue);
    setProcessing(true);
    const res = await searchProducts({
      query: query.productName,
      sortBy: "price",
      sortOrder: sortOrder,
    });
    console.log(res);
    if (res.status === 200) {
      dispatch(setProductsList(res.data.data));
    }
    setProcessing(false);
  };
  return (
    <>
      {showProcessing && <Processing />}

      <div className="flex flex-wrap lg:flex-nowrap w-full ">
        {/* Filter Sidebar */}

        <div
          className={`w-[60%] sm:w-1/4 h-screen overflow-y-auto pt-6  border-r-2 fixed inset-0 z-10 bg-gray-800 bg-opacity-50 lg:bg-opacity-0 lg:relative lg:z-auto ${
            isFilterVisible ? "block" : "hidden"
          } lg:block`}
          onClick={toggleFilter}
        >
          <div
            className="w-[90%] h-full bg-white p-4 absolute lg:relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lg:hidden mb-4" onClick={toggleFilter}>
              Close
            </button>
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="mb-4">
              <label className="block mb-1">Sort By:</label>
              <select
                className="w-full p-2 border rounded"
                onChange={(e) => filterHandler(e.target.value)}
              >
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Min Price</label>
              <input
                type="number"
                className="w-full"
                min="0"
                max="100000"
                value={filters.minPrice}
                onChange={(e) =>
                  handleFilterChange("maxPrice", Number(e.target.value))
                }
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Max Price</label>
              <input
                type="number"
                className="w-full"
                min="0"
                max="100000"
                value={filters.maxPrice}
                onChange={(e) =>
                  handleFilterChange("maxPrice", Number(e.target.value))
                }
              />
            </div>
          </div>
        </div>

        {/* Product Listing */}

        <div className="w-[98%] p-4 ">
          <button
            className="btn  bg-blue-gray-900 rounded-md text-white  border-4 p-2 md:hidden"
            onClick={toggleFilter}
          >
            Filters
          </button>
          <div className=" w-4/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-2 sm:px-4 px-1 ">
            {products?.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
            <div className=" w-full">
              <PaginationComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PaginationComponent = () => {
  return (
    <nav>
      <ul class="flex">
        <li>
          <a
            class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            href="#"
            aria-label="Previous"
          >
            <span class="material-icons text-sm">keyboard_arrow_left</span>
          </a>
        </li>
        <li>
          <a
            class="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-pink-600 to-pink-400 p-0 text-sm text-white shadow-md shadow-pink-500/20 transition duration-150 ease-in-out"
            href="#"
          >
            1
          </a>
        </li>
        <li>
          <a
            class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            href="#"
          >
            2
          </a>
        </li>
        <li>
          <a
            class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            href="#"
          >
            3
          </a>
        </li>
        <li>
          <a
            class="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
            href="#"
            aria-label="Next"
          >
            <span class="material-icons text-sm">keyboard_arrow_right</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default ProductList;
