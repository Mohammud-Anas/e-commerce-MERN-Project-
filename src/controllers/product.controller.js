import { Product } from "../models/product.model.js";
import { Seller } from "../models/seller.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {
  cloudinary,
  uploadMultipleImages,
  uploadSingleImage,
} from "../utils/cloudinary.js";

const addProduct = asyncHandler(async (req, res) => {
  try {
    const { title, description, thumbnail, images, stock, price, category } =
      req.body;
    if (
      [title, description, thumbnail, images, stock, price, category].some(
        (feild) => feild?.trim() === ""
      )
    ) {
      throw new ApiError(400, "All fields are required");
    }

    const { uploadedImage } = await uploadSingleImage(
      thumbnail,
      "product_thumbnail"
    );
    const { uploadedImages } = await uploadMultipleImages(
      images,
      "product_images"
    );

    const product = await Product.create({
      title,
      description,
      thumbnail: uploadedImage,
      images: uploadedImages,
      stock,
      price,
      category,
      product_ownwer: req.seller._id,
    });

    if (!product) {
      throw new ApiError(500, "error while adding product");
    }
    const seller = await Seller.findById(req.seller._id);
    if (!seller) {
      throw new ApiError(401, "unauthorized request ");
    }

    await seller.products.push(product._id);
    await seller.save();
    return res
      .status(200)
      .json(new ApiResponse(product, 200, "product added successfully"));
  } catch (error) {
    console.log(error);
    throw new ApiError(401, error?.message || "Internal server error");
  }
});
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const { product_id } = req.body;

    if (!product_id) {
      throw new ApiError(401, "invalid product id");
    }
    const product = await Product.findByIdAndDelete(product_id);
    if (!product) {
      throw new ApiError(401, "product not found");
    }
    // await product.remove();

    return res
      .status(200)
      .json(new ApiResponse({}, 200, "product deleted successfully"));
  } catch (error) {
    console.log(error.message);
    throw new ApiError(500, "error while deleting product", error);
  }
});
const updateProductDetails = asyncHandler(async (req, response) => {
  const { title, description, stock, price, category, product_id } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(
      product_id,

      {
        $set: {
          title: title || product.title,
          description: description || product.description,
          stock: stock || product.stock,
          price: price || product.price,
          category: category || product.category,
        },
      },
      { new: true }
    );
    if (!product) {
      throw new ApiError(404, "Product not found");
    }

    return response
      .status(200)
      .json(new ApiResponse({}, 200, "product updated successfully"));
  } catch (error) {
    console.log(error);
    throw new ApiError(
      500,
      "internal server error while updating product",
      error
    );
  }
});
const deleteProductImage = asyncHandler(async (req, res) => {
  const { ImagePublic_id, product_id } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(product_id, {
      $pull: { images: { public_id: ImagePublic_id } },
    });
    if (!product) {
      throw new ApiError(404, "Product not found");
    }
    return res.status(200).json(200, " Product image deleted successfully");
    //   const imageIndex =await product.images.findIndex((image) => image.public_id === ImagePublic_id)
    //  await product.images.splice(imageIndex, 1);
    //  await product.save();
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Error while deleting image");
  }
});
const addProductImage = asyncHandler(async (req, res) => {
  const { product_id, newImage } = req.body;
  try {
    const { uploadedImage } = await uploadSingleImage(
      newImage,
      "product_images"
    );
    if (!uploadedImage) {
      throw new ApiError(400, "error while  uploading product image");
    }
    const product = await Product.findByIdAndUpdate(product_id, {
      $push: { images: uploadedImage },
    });
    if (!product) {
      throw new ApiError(400, "Product not found");
    }

    return res
      .status(200)
      .json(new ApiResponse({}, 200, "product Image added successfully"));
    //  await product.images.push(uploadedImage)
    //  await product.save();
  } catch (error) {
    console.log(error);
    throw new ApiError(500, "Error while deleting image");
  }
});
const getProductDetails = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  if (!productId) {
    throw new ApiError(400, "product id is missing");
  }
  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(400, " invalid product id");
  }
  return res
    .status(200)
    .json(
      new ApiResponse(product, 200, "product details fetched successfully")
    );
});
const searchProducts = asyncHandler(async (req, res) => {
  const {
    query,
    price,
    category,
    minPrice,
    maxPrice,
    sortBy,
    sortOrder,
    page,
    limit,
  } = req.body;
  let baseQuery = {};
  if (query) {
    baseQuery.title = { $regex: query, $options: "i" };
    baseQuery.description = { $regex: query, $options: "i" };
    baseQuery.category = { $regex: query, $options: "i" };
  }
  if (price) {
    baseQuery.price = { $regex: query, $options: "i" };
  }

  if (category) {
    baseQuery.category = { $regex: query, $options: "i" };
  }

  if (minPrice && maxPrice) {
    baseQuery.price = { $gte: minPrice, $lte: maxPrice };
  } else if (minPrice) {
    baseQuery.price = { $gte: minPrice };
  } else if (maxPrice) {
    baseQuery.price = { $lte: maxPrice };
  }

  let sortOptions = {};
  if (sortBy) {
    sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;
  }
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 10;
  const skip = (page - 1) * limit;

  const products = await Product.find({
    $or: [baseQuery],
  })
    .sort(sortOptions)
    .skip(skip)
    .limit(limit);
  if (!products) {
    throw new ApiError(404, "Product not found");
  }
  return res
    .status(200)
    .json(new ApiResponse(products, 200, "products searched successfully"));
});
const changeProductThumbnail = asyncHandler(async (req, res) => {
  const { newThumnailImage, oldThumbnailPublicId, productId } = req.body;
  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(404, "product not found");
  }
  if (oldThumbnailPublicId) {
    await cloudinary.uploader.destroy(oldThumbnailPublicId);
  }
  const newThumbnailUploadedImage = await uploadSingleImage(newThumnailImage);
  if (!newThumbnailUploadedImage) {
    throw new ApiError(
      500,
      "error while uploading thumbnail image to cloudinary"
    );
  }
  product.thumbnail = newThumbnailUploadedImage;
  await product.save({ validateBeforeSave: false });
  return res
    .status(200)
    .json(new ApiResponse({}, 200, "thumnail updated succesfully"));
});

export {
  addProduct,
  addProductImage,
  changeProductThumbnail,
  deleteProduct,
  deleteProductImage,
  getProductDetails,
  searchProducts,
  updateProductDetails,
};
