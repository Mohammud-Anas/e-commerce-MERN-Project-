import { Router } from "express";
import {
  addItemsToCart,
  changeCartItemQuantity,
  deleteCartItem,
  getCartItems,
} from "../controllers/cart.controller";
import { verifyJwt } from "../middlewares/auth.middlware";
const router = Router();
router.route("/allCartItems").get(verifyJwt, getCartItems);
router.route("/deleteCartItem/:cartItemId").post(deleteCartItem);
router.route("/changeQuantity").post(changeCartItemQuantity);
router.route("/addToCart").post(verifyJwt, addItemsToCart);
export default router;
