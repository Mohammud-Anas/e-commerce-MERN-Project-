import { Seller } from "../models/seller.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
const generateAccessAndRefreshToken = async (userId) => {
  const seller = await Seller.findById(userId);
  const accesToken = seller.generateAccessToken();
  const refreshToken = seller.generateRefreshToken();
  seller.refreshToken = refreshToken;
  seller.save({ validateBeforeSave: false });
  return { accesToken, refreshToken };
};
const registerSeller = asyncHandler(async (req, res) => {
  try {
    const {
      company,
      pincode,
      email,
      phoneNumber,
      address,
      sellername,
      password,
    } = req.body;

    const existedSeller = await Seller.findOne({
      $or: [{ email }, { phoneNumber }],
    });
    if (existedSeller) {
      throw new ApiError(
        400,
        "seller already exists, please login as a seller"
      );
    }
    const newSeller = await Seller.create({
      company,
      address,
      pincode,
      email,
      phoneNumber,
      sellername,
      password,
    });
    const createdSeller = await Seller.findById(newSeller._id).select(
      "-password -refreshToken"
    );
    if (!createdSeller) {
      throw new ApiError(
        500,
        "something went wrong while registering as seller"
      );
    }
    return res
      .status(200)
      .json(new ApiResponse(createdSeller, "seller  registered successfully"));
  } catch (error) {
    console.log(error);
    return res
      .status(error.status || 500)
      .json({ success: false, message: error.message });
  }
});
const loginSeller = asyncHandler(async (req, res) => {
  try {
    const { email, phoneNumber, password } = req.body;
    if (!(email || phoneNumber)) {
      throw new ApiError(400, "email or phone number is required");
    }
    if (!password) {
      throw new ApiError(400, "password is required");
    }

    const seller = await Seller.findOne({
      $or: [{ email }, { phoneNumber }],
    });
    if (!seller) {
      throw new ApiError(404, "seller does not exist");
    }
    const isPasswordValid = await seller.isPasswordCorrect(password);
    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid user credentials");
    }
    const { accesToken, refreshToken } = await generateAccessAndRefreshToken(
      seller._id
    );
    const loggedInSeller = await Seller.findById(seller._id).select(
      "-password -refreshToken"
    );
    const option = {
      httpOnly: true,
      secure: true,
    };
    return res
      .status(200)
      .cookie("accesToken", accesToken, option)
      .cookie("refreshToken", refreshToken, option)
      .json(
        new ApiResponse(
          {
            user: loggedInSeller,
            accesToken,
            refreshToken,
          },
          200,
          "Seller logged in successfully"
        )
      );
  } catch (error) {
    console.log(error);
    return res
      .status(error.status || 500)
      .json({ success: false, message: error.message });
  }
});
const logoutSeller = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.body;
    const seller = await Seller.findByIdAndUpdate(
      _id,
      { $unset: { refreshToken: 1 } },
      { new: true }
    );
    if (!seller) {
      throw new ApiError(404, "unauthorized request");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };
    res
      .status(200)
      .clearCookie("accesToken", options)
      .clearCookie("refreshToken", options)
      .json(new ApiResponse({}, 200, "seller logged out sccessFully"));
  } catch (error) {
    throw new ApiError(500, error?.message || "Invalid access");
  }
});
const changePasword = asyncHandler(async (req, res) => {
  try {
    const { oldPassword, newPassword, _id } = req.body;
    if (!(oldPassword && newPassword)) {
      throw new ApiError(401, "old and new password is required");
    }
    const seller = await Seller.findById(_id);
    if (!seller) {
      throw new ApiError(401, "invalid access");
    }
    if (oldPassword !== seller.password) {
      throw new ApiError(400, "password is incorrect");
    }
    seller.password = newPassword;
    await seller.save({ validateBeforeSave: false });
    return res
      .status(200)
      .json(new ApiResponse({}, 200, "password changed successfully"));
  } catch (error) {
    console.log(error);
    return res
      .status(error.status || 500)
      .json({ success: false, message: error.message });
  }
});
export { changePasword, loginSeller, logoutSeller, registerSeller };
