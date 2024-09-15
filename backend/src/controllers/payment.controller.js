import crypto from "crypto";
import dotenv from "dotenv";
import Razorpay from "razorpay";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
dotenv.config({
  path: "./.env",
});

const createProductOrder = asyncHandler(async (req, res) => {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const options = req.body;
    const order = await razorpay.orders.create(options);
    if (!order) {
      throw new ApiError(500, "Couldn't create payment order");
    }
    res
      .status(200)
      .json(new ApiResponse(order, 200, "payment order created successfully"));
  } catch (error) {
    console.log(error);
    return res.status(500).json(new ApiError(500, error.message));
  }
});

const paymentOrderValidate = asyncHandler((req, res) => {
  try {
    const { razorpay_payment_id, order_id, razorpay_signature } = req.body;
    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    sha.update(order_id + "|" + razorpay_payment_id);
    const generatedSignature = sha.digest("hex");
    console.log("order_id: ", order_id);
    console.log("rezorpay_payment_id :", razorpay_payment_id);
    console.log("generated signature: " + generatedSignature);
    console.log("razorpay generated signature:" + razorpay_signature);
    if (generatedSignature !== razorpay_signature) {
      throw new ApiError(404, "Transaction is not legit!");
    }
    res.status(200).json({
      message: "Payement Successful",
      orderId: order_id,
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    console.log(error);
    return response
      .status(500)
      .json(new ApiError(500, "error while payment order validtaion"));
  }
});
export { createProductOrder, paymentOrderValidate };
