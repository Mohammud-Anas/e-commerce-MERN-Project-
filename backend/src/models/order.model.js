import mongoose from "mongoose";
const orderedProductSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    title: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: String, required: true },
    product_owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered", "Canceled"],
      default: "Pending",
    },
  },
  { _id: false }
);

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const paymentSchema = new mongoose.Schema(
  {
    paymentId: { type: String, required: true },
    method: {
      type: String,
      enum: ["Credit Card", "PayPal", "Stripe", "Razorpay"],
      required: true,
      default: "Razorpay",
    },
    status: {
      type: String,
      enum: ["Processing", "Completed", "Failed"],
      required: true,
      default: "Processing  ",
    },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    customer: customerSchema,
    product: [orderedProductSchema],
    totalAmount: { type: Number, required: true },
    orderStatus: {
      type: String,
      enum: ["Pending", "Shipped", "Delivered"],
      required: true,
      default: "Pending",
    },
    payment: paymentSchema,
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
