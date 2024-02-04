import { Router } from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/logout").post(logoutUser);
router.route("/login").post(loginUser);

export default router;
