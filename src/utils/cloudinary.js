import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadProductImages({ images, thumbnail }) {
  try {
    if (!images && !thumbnail) return;
    if (!Array.isArray(images)) {
      throw new Error("Images should be an array");
    }

    const uploadPromises = images.map(async (image) => {
      const result = await cloudinary.uploader.upload(image, {
        folder: "product_images",
      });
      return result;
    });

    const uploadedImages = await Promise.all(uploadPromises);

    let uploadedThumbnail = null;
    if (thumbnail) {
      const thumbnailResult = await cloudinary.uploader.upload(thumbnail, {
        folder: "product_thumbnails",
      });
      uploadedThumbnail = thumbnailResult;
    }
    return { images: uploadedImages, thumbnail: uploadedThumbnail };
  } catch (error) {
    console.error("Error uploading product images:", error.message);
    throw error;
  }
}
export default uploadProductImages;
