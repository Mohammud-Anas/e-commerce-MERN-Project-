import { Order } from "../models/order.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const { userId, sellerId } = req.body;

    if (userId) {
      const orders = await Order.find({ userId: userId });
      if (orders.length <= 0) {
        return res
          .status(200)
          .json(new ApiResponse({}, 200, "no orders found of given userId"));
      }

      return res
        .status(200)
        .json(new ApiResponse(orders, 200, "orders fetched successfully"));
    }
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Error while fetching orders");
  }
});
const createOrder = asyncHandler(async (req, res) => {
  try {
    const { userId, customerInfo, product, totalAmount, payment } = req.body;
    console.log(req.body);
    if (!userId) {
      throw new ApiError(401, "userId is required");
    }
    if (!product || product.length === 0) {
      throw new ApiError(401, "product is required");
    }
    const newOrder = await Order.create({
      userId,
      customer: { ...customerInfo },
      product,
      totalAmount,
      payment,
    });
    if (!newOrder) {
      throw new ApiError(500, "error creating order");
    }
    return res
      .status(200)
      .json(new ApiResponse(newOrder, 200, "order created successfully"));
  } catch (error) {
    console.log(error);
    return res.status(500).json(new ApiError(500, "error creating order"));
  }
});
const updateOrder = asyncHandler(async (req, res) => {
  try {
    const { orderId, orderStatus, orderPayment } = req.body;
    if (!orderId) {
      throw new ApiError(400, "orderId is required");
    }
    const order = await Order.findById(orderId);
    if (!order) {
      throw new ApiError(500, "order not found");
    }
    order.status = orderStatus || order.status;
    order.payment = orderPayment || order.payment;
    order.save({ ValidateBeforeSave: false });
    return res
      .status(200)
      .json(new ApiResponse(order, 200, "order updated successfully"));
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "error while updating order", error);
  }
});
const cancelOrder = asyncHandler(async (req, res) => {
  try {
    const { orderId } = req.params;
    if (!orderId) {
      throw new ApiError(500, "order is required");
    }
    const order = await Order.findByIdAndUpdate(
      orderId,
      {
        $set: {
          status: "Canceled",
        },
      },
      { new: true }
    );
    return res
      .status(200)
      .json(new ApiResponse(order, 200, "order Cancelled successfully"));
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "error while cancelling order", error);
  }
});
export { cancelOrder, createOrder, getAllOrders, updateOrder };
