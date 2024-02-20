import { Cart } from "../models/cart.model";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler";

const getCartItems = asyncHandler(async (req, res) => {
  try {
    const cart = await Cart.aggregate([
      { $match: { user: req.user?._id } },
      {
        $lookup: {
          from: "products",
          localField: "product",
          foreignField: "_id",
          as: "productDetails",
        },
      },
    ]);
    if (cart.length == 0) {
      throw new ApiError(400, "no cart items found");
    }
    return res
      .status(200)
      .json(new ApiResponse(cart, 200, "cart items fetched successfully"));
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "error while fetching cart items", error);
  }
});
const deleteCartItem = asyncHandler(async (req, res) => {
  try {
    const { cartItemId } = req.params;
    if (!cartItemId) {
      throw new ApiError(400, "cartId is required");
    }
    const carItem = await Cart.findOneAndDelete(cartItemId);
    if (!carItem) {
      throw new ApiError(400, "invaid cart Id");
    }
    return res
      .status(200)
      .json(new ApiResponse({}, 200, "cart item removed successfully"));
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "error while deleting cart item", error);
  }
});
const changeCartItemQuantity = asyncHandler(async (req, res) => {
  const { cartItemId, newQuantity } = req.body;
  if (!cartItemId) {
    throw new ApiError();
  }
  const cartItem = await Cart.findByIdAndUpdate(cartItemId, {
    $set: { quantity: newQuantity },
  });
  if (!cartItem) {
    throw new ApiError(400, "cart item not found");
  }
  return response.status(200).json(new ApiResponse());
});
const addItemsToCart = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  if (!productId) {
    throw new ApiResponse(401, "product id is required");
  }
  await Cart.create({
    product: productId,
    user: req.user?._id,
  });
  return res
    .status(200)
    .json(new ApiResponse({}, 200, "item added to cart sucessfully"));
});
export { addItemsToCart, changeCartItemQuantity, deleteCartItem, getCartItems };
