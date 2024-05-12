import { Router } from "express";

import {
  changePasword,
  loginSeller,
  logoutSeller,
  registerSeller,
} from "../controllers/seller.controller.js";
import { verifyJwt } from "../middlewares/auth.middlware.js";
const sellerRouter = Router();
sellerRouter.route("/register").post(registerSeller);
sellerRouter.route("/logout").post(verifyJwt, logoutSeller);
sellerRouter.route("/login").post(loginSeller);
sellerRouter.route("/changePassword").post(verifyJwt, changePasword);
sellerRouter.route("/addProducts").post();
export default sellerRouter;
