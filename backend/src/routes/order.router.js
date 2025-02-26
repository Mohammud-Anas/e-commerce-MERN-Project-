import { Router } from "express";
import {
  cancelOrder,
  createOrder,
  getAllOrders,
  updateOrder,
} from "../controllers/order.controller.js";
const router = new Router();
router.route("/allorders").post(getAllOrders);
router.route("/updateOrder").patch(updateOrder);
router.route("/cancelOrder/:orderId").post(cancelOrder);
router.route("/createOrder").post(createOrder);
export default router;
