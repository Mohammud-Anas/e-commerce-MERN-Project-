import mongoose from "mongoose";
const userSchema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: Number,
  },
  address: {
    required: true,
    type: String,
  },
  picode: {
    required: true,
    type: Number,
  },
});

export const User = mongoose.model("User", userSchema);
