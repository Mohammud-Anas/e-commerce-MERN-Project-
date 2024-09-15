import { Product } from "../models/product.model.js";
import { Seller } from "../models/seller.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { cloudinary, uploadSingleImage } from "../utils/cloudinary.js";

const addProduct = asyncHandler(async (req, res) => {
  try {
    const { title, description, stock, price, category, product_owner } =
      req.body;
    console.log(req.body);
    const trimmedFields = [
      String(title).trim(),
      String(description).trim(),

      String(stock).trim(),
      String(price).trim(),
      String(category).trim(),
      String(product_owner).trim(),
    ];

    if (trimmedFields.some((field) => field === "")) {
      throw new ApiError(400, "All fields are required");
    }
    console.log("ye h product id");
    console.log(product_owner);
    console.log(req.body); // output json object but with no files
    console.log("hello ye h files");
    console.log(req.files); // output: undefined
    console.log("hello ye h files");
    const thumbnailFile = await req.files["thumbnail"][0];
    const imageFiles = await req.files["images"];
    console.log(thumbnailFile);
    console.log(imageFiles);
    if (!thumbnailFile) {
      throw new ApiError(400, "thumbnail is required");
    }
    if (!imageFiles) {
      throw new ApiError(400, "images are required");
    }

    const seller = await Seller.findById(product_owner).exec();
    if (!seller) {
      throw new ApiError(401, "unauthorized request product seller not found");
    }
    const uploadedThumbnail = await uploadSingleImage(
      thumbnailFile.path,
      "product_thumbnail"
    );
    const uploadedImages = await uploadMultipleImages(
      imageFiles.map((file) => file.path),
      "product_images"
    );

    const product = await Product.create({
      title,
      description,
      thumbnail: uploadedThumbnail.url,
      images: uploadedImages.map((img) => img.url),
      stock,
      price,
      category,
      product_owner,
    });

    if (!product) {
      throw new ApiError(500, "error while adding product");
    }
    console.log(product);
    await seller.products.push(product._id);
    await seller.save();
    console.log("product added successfully");
    return res
      .status(200)
      .json(new ApiResponse(product, 200, "product added successfully"));
  } catch (error) {
    console.log(error);
    // throw new ApiError(401, error?.message || "Internal server error");
    return res
      .status(500)
      .json(new ApiError(401, error.message || "internal server error"));
  }
});

// const addProduct = asyncHandler(async (req, res) => {
//   try {
//     const {
//       title,
//       description,
//       stock,
//       price,
//       category,
//       product_owner,
//       images,
//       thumbnail,
//     } = req.body;

//     const seller = await Seller.findById(product_owner).exec();
//     if (!seller) {
//       throw new ApiError(401, "unauthorized request product seller not found");
//     }

//     const product = await Product.create({
//       title,
//       description,
//       thumbnail: thumbnail,
//       images: images.map((img) => img),
//       stock,
//       price,
//       category,
//       product_owner,
//     });

//     if (!product) {
//       throw new ApiError(500, "error while adding product");
//     }
//     console.log(product);
//     await seller.products.push(product._id);
//     await seller.save();
//     console.log("product added successfully");
//     return res
//       .status(200)
//       .json(new ApiResponse(product, 200, "product added successfully"));
//   } catch (error) {
//     console.log(error);
//     // throw new ApiError(401, error?.message || "Internal server error");
//     return res
//       .status(500)
//       .json(new ApiError(401, error.message || "internal server error"));
//   }
// });
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
  ``;
  try {
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
    } = await req.body;
    console.log(req.body);
    let baseQuery = {};
    if (query) {
      baseQuery.$or = [
        { title: { $regex: query, $options: "i" } },
        { description: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ];
    }
    if (price) {
      baseQuery.price = { $regex: query, $options: "i" };
    }

    if (category) {
      baseQuery.category = { $regex: query, $options: "i" };
    }

    if (minPrice || maxPrice) {
      baseQuery.price = {};
      if (minPrice) baseQuery.price.$gte = minPrice;
      if (maxPrice) baseQuery.price.$lte = maxPrice;
    }

    let sortOptions = {};
    if (sortBy) {
      // Sort by `priceNumeric` if price sorting is requested
      const sortField = sortBy === "price" ? "priceNumeric" : sortBy;
      sortOptions[sortField] = sortOrder === "desc" ? -1 : 1;
    }
    let pageParams = parseInt(page) || 1;
    let limitParams = parseInt(limit) || 10;
    const skip = (pageParams - 1) * limitParams;

    const aggregationPipeline = [
      {
        $addFields: {
          priceNumeric: {
            $convert: {
              input: {
                $replaceAll: {
                  input: {
                    $replaceAll: {
                      input: {
                        $replaceAll: {
                          input: "$price", // Remove the dollar sign
                          find: "\\ $", // Escape dollar sign
                          replacement: "", // Remove dollar sign
                        },
                      },
                      find: "₹", // Remove the rupee symbol
                      replacement: "", // Remove rupee symbol
                    },
                  },
                  find: ",", // Remove commas in prices (e.g., "1,000")
                  replacement: "", // Replace commas with empty string
                },
              },
              to: "double", // Convert the cleaned string to double
              onError: 0, // Default value if conversion fails
              onNull: 0, // Default value if field is null
            },
          },
        },
      },
      { $match: baseQuery }, // Match based on base query
      { $skip: skip }, // Pagination: skip records
      { $limit: limitParams }, // Limit the number of records
    ];
    if (Object.keys(sortOptions).length > 0) {
      aggregationPipeline.splice(2, 0, { $sort: sortOptions });
    }
    const products = await Product.aggregate(aggregationPipeline);

    if (products.lenght === 0) {
      throw new ApiError(404, "Product not found");
    }
    return res
      .status(200)
      .json(new ApiResponse(products, 200, "products searched successfully"));
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json(new ApiError(404, error.message || "internal server error"));
  }
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
