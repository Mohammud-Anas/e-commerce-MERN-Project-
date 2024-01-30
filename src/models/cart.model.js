import mongoose from "mongoose";
const cartSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    added_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

export const Cart = mongoose.model("cart", cartSchema);
