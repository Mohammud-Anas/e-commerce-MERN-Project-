import jwt from "jsonwebtoken";
import { Seller } from "../models/seller.model";
import { User } from "../models/user.model";
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
const verifyJwt = asyncHandler(async (req, _, next) => {
  try {
    const accesToken =
      req.cookies?.accesToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    if (!accesToken) {
      throw new ApiError(401, "unauthorized request");
    }
    const decodedToken = jwt.verify(
      accesToken,
      process.env.ACCESS_TOKEN_SECRET
    );
    console.log(decodedToken);
    if (decodedToken.userType === "seller") {
      const seller = await Seller.findById(decodedToken._id).select(
        "-password -refreshToken"
      );
      if (!seller) {
        throw new ApiError(400, "invalid access token");
      }
      req.seller = seller;
      next();
    }
    if (decodedToken.userType === "buyer") {
      const user = await User.findById(decodedToken._id).select(
        "-password -refreshToken"
      );
      if (!user) {
        throw new ApiError(400, "invalid access token");
      }
      req.user = user;
      next();
    }
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "error while verifying access token");
  }
});
export { verifyJwt };
