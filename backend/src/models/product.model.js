import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    thumbnail: {
      required: true,
      type: String,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    stock: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    product_ownwer: {
      type: Schema.Types.ObjectId,
      ref: "Seller",
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("product", productSchema);
