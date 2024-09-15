import mongoose from "mongoose";
import { Cart } from "../models/cart.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getCartItems = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.params;
    console.log(userId);
    const cart = await Cart.aggregate([
      { $match: { user: new mongoose.Types.ObjectId(userId) } },
      {
        $lookup: {
          from: "products",
          localField: "product",
          foreignField: "_id",
          as: "productDetails",
        },
      },
    ]);
    if (cart.length === 0) {
      throw new ApiError(400, "no cart items found");
    }
    return res
      .status(200)
      .json(new ApiResponse(cart, 200, "cart items fetched successfully"));
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json(new ApiError(500, "error while fetching cart items", error));
  }
});
const deleteCartItem = asyncHandler(async (req, res) => {
  try {
    const { cartItemIds } = req.body;
    console.log(cartItemIds);
    if (!cartItemIds) {
      throw new ApiError(400, "cartId is required");
    }

    const carItem = await Cart.deleteMany({
      _id: { $in: cartItemIds },
    });
    if (!carItem) {
      throw new ApiError(400, "invaid cart Id");
    }
    return res
      .status(200)
      .json(new ApiResponse({}, 200, "cart item removed successfully"));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(new ApiError(500, "error while deleting cart item", error));
  }
});
const changeCartItemQuantity = asyncHandler(async (req, res) => {
  try {
    const { cartItemId, newQuantity } = req.body;

    const cartItem = await Cart.findByIdAndUpdate(cartItemId, {
      $set: { quantity: newQuantity },
    });
    if (!cartItem) {
      throw new ApiError(400, "cart item not found");
    }
    return res.status(200).json(new ApiResponse());
  } catch (error) {
    return res
      .status(404)
      .json(new ApiResponse({}, 404, "error while updating"));
  }
});
const addItemsToCart = asyncHandler(async (req, res) => {
  try {
    const { productId, userId } = req.body;
    if (!productId) {
      throw new ApiResponse(401, "product id is required");
    }
    await Cart.create({
      product: productId,
      user: userId,
    });
    return res
      .status(200)
      .json(new ApiResponse({}, 200, "item added to cart sucessfully"));
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json(new ApiError(404, error.message || "internal server error"));
  }
});
export { addItemsToCart, changeCartItemQuantity, deleteCartItem, getCartItems };
