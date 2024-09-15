import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllOrders } from "../api/order.api.js";
import { getProductDetails } from "../api/product.api.js";
import { setOrderData } from "../store/orderSlice.js";
import { setProduct } from "../store/productSlice.js";
const MyOrders = () => {
  const { _id } = useSelector((state) => state.user.profile);
  const orderData = useSelector((state) => state.order.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    getOrders(_id);
  }, []);
  const productDetails = async (id) => {
    const res = await getProductDetails(id);
    console.log("product detaial in my orders page", res);
    if (res.data.success == true) {
      const productDetails = res.data.data;
      dispatch(setProduct(productDetails));
      navigate(`/product/${productDetails._id}`);
    }
  };

  const getOrders = async (id) => {
    const res = await getAllOrders({ userId: id });
    const data = res.data.data;
    console.log(data);

    dispatch(setOrderData(data));
    console.log(orderData);
  };
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-3 md:mt-10 mb-10">
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>

      {orderData?.map((order) => {
        const formattedDate = moment(order.createdAt).format("MMMM D, YYYY");

        console.log(formattedDate);
        return (
          <div
            className="bg-gray-100 p-4 rounded-lg mt-7 border"
            key={order._id}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500">
              <div>
                <span className="font-semibold">Order Id</span>
                <p>{order._id}</p>
              </div>
              <div>
                <span className="font-semibold">Order Date</span>
                <p>{formattedDate}</p>
              </div>
              <div>
                <span className="font-semibold">Delivery Date</span>
                <p>Jan 26, 2022</p>
              </div>
              <div>
                <span className="font-semibold">Ship To</span>
                <p>{order.customer.address}</p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col space-y-4">
              {/* {1} */}
              {order.product?.map((item) => {
                return (
                  <div className="flex justify-between" key={item.productId}>
                    <div className="flex space-x-4">
                      <img
                        src="https://via.placeholder.com/100"
                        alt="Product"
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div>
                        <p
                          className="font-semibold cursor-pointer"
                          onClick={() => productDetails(item.productId)}
                        >
                          {item.title}
                        </p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold">{item.price}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr className="my-4" />
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">
                Total Amount:{" "}
                <span className="text-blue-600 font-semibold">
                  Rs.{order.totalAmount}
                </span>
              </p>
              <p className="font-semibold text-lg">
                Status:{" "}
                <span className="text-blue-600 font-semibold">Pending</span>
              </p>
              <a
                href="#"
                className="text-indigo-500 hover:underline flex items-center"
              >
                Download Invoice
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyOrders;
