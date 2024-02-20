import { Router } from "express";
import {
  changePasword,
  getUserCartItems,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middlware.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/logout").post(verifyJwt, logoutUser);
router.route("/login").post(loginUser);
router.route("/changePassword").post(verifyJwt, changePasword);
router.route("/cart").get(verifyJwt, getUserCartItems);

export default router;
