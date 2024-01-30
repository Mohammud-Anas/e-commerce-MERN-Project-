import mongoose from "mongoose";
const sellerSchema = new Schema(
  {
    storename: {
      required: true,
      type: String,
    },
    store_address: {
      required: true,
      type: String,
    },
    store_pincode: {
      required: true,
      type: Number,
    },
    store_owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Seller = mongoose.model("Seller", sellerSchema);
