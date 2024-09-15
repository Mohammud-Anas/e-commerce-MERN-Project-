import { Router } from "express";
import {
  createProductOrder,
  paymentOrderValidate,
} from "../controllers/payment.controller.js";
const router = Router();
router.route("/create_payment_order").post(createProductOrder);
router.route("/validate_payment_order").post(paymentOrderValidate);
export default router;
