import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { promises as fsPromises } from "fs";
import { ApiError } from "./ApiError.js";
dotenv.config({
  path: "./.env",
});
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// New function to delete local file after uploading to Cloudinary
const deleteLocalFile = async (filePath) => {
  try {
    await fsPromises.unlink(filePath); // Delete the file from the local storage
    console.log(`Successfully deleted file: ${filePath}`);
  } catch (error) {
    console.error(`Error deleting file: ${filePath}`, error);
  }
};
const uploadSingleImage = async (filePath, folderName) => {
  try {
    const fileBuffer = await fsPromises.readFile(filePath);
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: folderName },
        async (error, result) => {
          if (error) {
            reject(
              new ApiError(
                500,
                "error while uploading image to Cloudinary",
                error
              )
            );
          } else {
            // Delete the local file after successful upload
            await deleteLocalFile(filePath); // <-- Added this line
            resolve(result);
          }
        }
      );
      uploadStream.end(fileBuffer);
    });
  } catch (error) {
    throw new ApiError(500, "error while reading image file", error);
  }
};

const uploadMultipleImages = async (files, folderName) => {
  try {
    if (!Array.isArray(files)) {
      throw new ApiError(401, "Images must be provided as an array");
    }

    const uploadPromises = files.map((file) =>
      uploadSingleImage(file, folderName)
    );
    const uploadedImages = await Promise.all(uploadPromises);
    return uploadedImages;
  } catch (error) {
    console.error("Error uploading images to Cloudinary:", error);
    throw error;
  }
};
export { cloudinary, uploadMultipleImages, uploadSingleImage };
