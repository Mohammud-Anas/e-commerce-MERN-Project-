import mongoose from "mongoose";
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
      },
    ],
    price: {
      type: String,
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
