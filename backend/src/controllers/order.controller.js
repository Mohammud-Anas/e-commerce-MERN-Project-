import { Order } from "../models/order.model.js";
import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const { userId, sellerId } = req.body;

    if (userId) {
      const orders = await Order.aggregate([
        {
          $match: { user: userId },
        },
        {
          $lookup: {
            from: "products",
            localField: "product",
            foreignField: "_id",
            as: "productDetails",
          },
        },
      ]);
      if (orders.length <= 0) {
        return res
          .status(200)
          .json(new ApiResponse({}, 200, "no orders found of given userId"));
      }

      return res
        .status(200)
        .json(new ApiResponse(orders, 200, "orders fetched successfully"));
    } else if (sellerId) {
      const products = await Product.find({ product_ownwer: sellerId });
      if (products.length === 0) {
        throw new ApiError(404, "products not found of seller");
      }
      const productIds = products.map((product) => product._id);
      const orders = await Order.aggregate([
        { $match: { product: { $in: productIds } } },
        {
          $lookup: {
            from: "products",
            localField: "product",
            foreignField: "_id",
            as: "productDetails",
          },
        },
      ]);

      res
        .status(200)
        .json(new ApiResponse(orders, 200, "orders fetched successfully"));
    } else {
      throw new ApiError(400, "userId or sellerId is required");
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
