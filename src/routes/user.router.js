import { Router } from "express";
import {
  changePasword,
  getUserCartItems,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/logout").post(logoutUser);
router.route("/login").post(loginUser);
router.route("/changePassword").post(changePasword);
router.route("/cart").get(getUserCartItems);

export default router;
