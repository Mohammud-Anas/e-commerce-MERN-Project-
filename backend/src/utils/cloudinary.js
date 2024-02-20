import { v2 as cloudinary } from "cloudinary";
import { ApiError } from "./ApiError.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadSingleImage = async (image, folderName) => {
  try {
    const uploadedImage = await cloudinary.uploader.upload(image, {
      folder: `${folderName}`,
    });
    return uploadedImage.url, uploadedImage.public_id;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw new ApiError(500, "error while uploading image to Cloudinary", error);
  }
};
const uploadMultipleImages = async (images) => {
  try {
    if (!Array.isArray(images)) {
      throw new ApiError(401, "Images must be provided as an array");
    }
    const uploadPromises = images.map(
      async (image) => await uploadSingleImage(image)
    );
    const uploadedImages = await Promise.all(uploadPromises);
    return uploadedImages;
  } catch (error) {
    console.error("Error uploading images to Cloudinary:", error);
    throw error;
  }
};
export { cloudinary, uploadMultipleImages, uploadSingleImage };
