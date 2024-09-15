import { Router } from "express";
import {
  addItemsToCart,
  changeCartItemQuantity,
  deleteCartItem,
  getCartItems,
} from "../controllers/cart.controller.js";

const router = Router();
router.route("/allCartItems/:userId").get(getCartItems);
router.route("/deleteCartItem").post(deleteCartItem);
router.route("/changeQuantity").post(changeCartItemQuantity);
router.route("/addToCart").post(addItemsToCart);
export default router;
