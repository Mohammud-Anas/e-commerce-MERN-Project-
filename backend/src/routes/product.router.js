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
} from "../controllers/product.controller";
import { verifyJwt } from "../middlewares/auth.middlware";
const router = Router();
router.route("/addProduct").post(verifyJwt, addProduct);
router.route("/deleteProduct/:productId").post(deleteProduct);
router.route("/updateProduct").patch(updateProductDetails);
router.route("/deleteProductImage").patch(deleteProductImage);
router.route("/addProductImage").patch(addProductImage);
router.route("/search").get(searchProducts);
router.route("/:productId").get(getProductDetails);
router.route("/changeThumbnail").patch(changeProductThumbnail);
export default router;
