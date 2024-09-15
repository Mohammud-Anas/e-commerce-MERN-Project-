import { Router } from "express";
import {
  addProduct,
  addProductImage,
  changeProductThumbnail,
  deleteProduct,
  deleteProductImage,
  getProductDetails,
  searchProducts,
  updateProductDetails,
} from "../controllers/product.controller.js";
import upload from "../utils/multer.js";
const router = Router();
const Upload = upload.fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "images", maxCount: 6 },
]);
router.route("/addProduct").post(Upload, addProduct);
router.route("/deleteProduct/:productId").post(deleteProduct);
router.route("/updateProduct").patch(updateProductDetails);
router.route("/deleteProductImage").patch(deleteProductImage);
router.route("/addProductImage").patch(addProductImage);
router.route("/search").post(searchProducts);
router.route("/:productId").get(getProductDetails);
router.route("/changeThumbnail").patch(changeProductThumbnail);
export default router;
