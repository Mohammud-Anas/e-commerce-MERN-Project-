import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const generateAccessAndRefreshToken = async (userId) => {
  const user = await User.findById(userId);
  const accesToken = user.generateAccessToken();
  const refreshToken = user.generateRefreshToken();
  user.refreshToken = refreshToken;
  user.save({ validateBeforeSave: false });
  return { accesToken, refreshToken };
};

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { fullname, email, phone, address, pincode, password } = req.body;
    if (
      [fullname, email, phone, address, pincode, password].some(
        (item) => item?.trim() === ""
      )
    ) {
      throw new ApiError(400, "all fields are required");
    }
    const existedUser = await User.findOne({
      $or: [{ email }, { phone }],
    });
    if (existedUser) {
      throw new ApiError(409, "user already exists,  please login");
    }
    const user = await User.create({
      fullname,
      email,
      phone,
      address,
      pincode,
      password,
    });
    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );
    if (!createdUser)
      throw new ApiError(500, "something went wrong while registering");
    return res
      .status(200)
      .json(
        new ApiResponse(
          { user: createdUser },
          200,
          "user registered successfully"
        )
      );
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).send(error.message);
  }
});
const loginUser = asyncHandler(async (req, res) => {
  try {
    const { emailOrPhone, password } = req.body;

    if (!emailOrPhone) {
      throw new ApiError(400, "email or phone number is required");
    }
    if (!password) {
      throw new ApiError(400, "password is required");
    }

    const user = await User.findOne({
      $or: [{ email: emailOrPhone }, { phone: emailOrPhone }],
    });

    if (!user) {
      throw new ApiError(404, "user does not exist");
    }
    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      throw new ApiError(401, "Invalid user credentials");
    }
    const { accesToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id
    );
    const loggedInUser = await User.findById(user._id).select(
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
            user: loggedInUser,
            accesToken,
            refreshToken,
          },
          200,
          "User logged in successfully"
        )
      );
  } catch (error) {
    console.log(error);
    return res
      .status(error.status || 500)
      .json({ success: false, message: error.message });
  }
});
const logoutUser = asyncHandler(async (req, res) => {
  try {
    const { _id } = req.body;
    if (!_id) {
      console.log("User ID not provided");
      throw new ApiError(400, "User ID is required");
    }
    const user = await User.findByIdAndUpdate(
      _id,
      { $unset: { refreshToken: 1 } },
      { new: true }
    );
    if (!user) {
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
      .json(new ApiResponse({}, 200, "User logged out sccessFully"));
  } catch (error) {
    // throw new ApiError(500, error?.message || "Invalid access");
    console.log(error);
    return res
      .status(error.status || 500)
      .json({ success: false, message: error.message });
  }
});
const regenrateAccessToken = asyncHandler(async (req, res) => {
  try {
    const inComingAccessToken = req.body.refreshToken;
    if (!inComingAccessToken) {
      throw new ApiError(401, "unauthorized request");
    }
    const decodedToken = jwt.verify(
      inComingAccessToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, "invalid refreshToken");
    }
    if (inComingAccessToken !== user.refreshToken) {
      throw new ApiError(401, "refreshToken is expired or used");
    }

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshToken(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken)
      .cookie("refreshToken", newRefreshToken)
      .json(
        new ApiResponse(
          { accessToken, refreshToken: newRefreshToken },
          200,
          "Access Token refreshed successfully"
        )
      );
  } catch (error) {}
});
const changePasword = asyncHandler(async (req, res) => {
  try {
    const { oldPassword, newPassword, _id } = req.body;
    if (!(oldPassword && newPassword)) {
      throw new ApiError(401, "old and new password is required");
    }
    const user = await User.findById(_id);
    if (!user) {
      throw new ApiError(401, "invalid access");
    }
    if (oldPassword !== user.password) {
      throw new ApiError(400, "password is incorrect");
    }
    user.password = newPassword;
    await user.save({ validateBeforeSave: false });
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
const loginWithRefreshToken = asyncHandler(async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) throw new ApiError(400, "no refresh token found");

    const user = await User.findOne(refreshToken);
    if (!user) throw new ApiError(400, "no user found");
    return res
      .status(200)
      .json(new ApiResponse(user, 200, "Logged in successfully"));
  } catch (error) {
    console.log(error);
    return res.status(error.status || 500).send(error.message);
  }
});
// const getUserCartItems = asyncHandler(async (req, res) => {
//   const { user_id } = req.body;
//   if (!user_id) {
//     throw new ApiError(404, "User's cart not found");
//   }
//   const cartItem = await User.aggregate([
//     {
//       $match: {
//         _id: user_id,
//       },
//     },
//     {
//       $lookup: {
//         from: "carts",
//         as: "cartItems",
//         localField: "_id",
//         foreignField: "added_by",
//       },
//     },
//   ]);
//   if (!cartItem) {
//     throw new ApiError(401, "your cart is empty");
//   }
//   const cartItemsDetails = cartItem.map(async (item) => {
//     return await Product.findById(item.product);
//   });
//   return res
//     .status(200)
//     .json(
//       new ApiResponse(cartItemsDetails, 200, "cart item fetched successfully")
//     );
// });

export {
  changePasword,
  loginUser,
  loginWithRefreshToken,
  logoutUser,
  regenrateAccessToken,
  registerUser,
};
