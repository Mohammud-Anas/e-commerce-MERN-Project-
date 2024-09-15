import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    fullname: {
      required: true,
      type: String,
    },

    email: {
      required: true,
      type: String,
      unique: true,
    },
    phone: {
      required: true,
      type: String,
      unique: true,
    },
    address: {
      required: true,
      type: String,
    },
    pincode: {
      required: true,
      type: Number,
    },
    password: {
      required: true,
      type: String,
    },
    refreshToken: {
      type: String,
    },
    userType: {
      type: String,
      default: "General",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      phone: this.phone,
      fullname: this.fullname,
      userType: this.userType,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
