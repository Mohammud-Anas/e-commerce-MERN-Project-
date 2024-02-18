import { Router } from "express";
import {
  cancelOrder,
  createOrder,
  getAllOrders,
  updateOrder,
} from "../controllers/order.controller";
const router = new Router();
router.router("/allorders").get(getAllOrders);
router.router("/updateOrder").patch(updateOrder);
router.router("/cancelOrder").get(cancelOrder);
router.router("/placeOrder").get(createOrder);
export default router;
