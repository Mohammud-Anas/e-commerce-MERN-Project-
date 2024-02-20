import { Router } from "express";
import { verify } from "jsonwebtoken";
import {
  changePasword,
  loginSeller,
  logoutSeller,
  registerSeller,
} from "../controllers/seller.controller.js";
const sellerRouter = Router();
sellerRouter.route("/register").post(registerSeller);
sellerRouter.route("/logout").post(verify, logoutSeller);
sellerRouter.route("/login").post(loginSeller);
sellerRouter.route("/changePassword").post(verify, changePasword);
sellerRouter.route("/addProducts").post();
export default sellerRouter;
