import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const { userId, sellerId } = req.body;
    if (userId) {
      const orders = await Order.find({ user: userId })
        .populate("product")
        .populate("quantity")
        .populate("status")
        .populate("payment");
      if (orders.length <= 0) {
        return res
          .status(200)
          .json(new ApiResponse({}, 200, "no orders found of given userId"));
      }

      return res
        .status(200)
        .json(new ApiResponse(orders, 200, "orders fetched successfully"));
    }
    if (sellerId) {
      const products = await Product.find({ product_ownwer: sellerId });
      if (!products) {
        throw new ApiError(404, "products not found of seller");
      }
      const productIds = products.map((product) => product._id);
      const orders = await Order.find({ product: { $in: productIds } })
        .populate("product")
        .populate("users")
        .populate("quantity")
        .populate("status")
        .populate("payment");

      res
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
    const { userId, productId, quantity, payment } = req.body;
    if (!userId) {
      throw new ApiError(401, "userId is required");
    }
    if (!productId) {
      throw new ApiError(401, "productId is required");
    }
    const newOrder = await Order.create({
      user: userId,
      product: productId,
      quantity,
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
    throw new ApiError(500, "error creating order");
  }
});
const updateOrder = asyncHandler(async (req, res) => {
  const { orderId, orderStatus, orderPayment } = req.body;
  const order = await Order.findById(orderId);
  if (!order) {
    throw new ApiError(500, "order not found");
  }
  order.status = orderStatus || order.status;
  order.payment = orderPayment || order.payment;
  order.save({ ValidateBeforeSave: false });
});
const cancelOrder = asyncHandler(async (req, res) => {
  const { orderId } = req.body;
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
});
export { cancelOrder, createOrder, getAllOrders, updateOrder };
