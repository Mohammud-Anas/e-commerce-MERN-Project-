import { Router } from "express";
import {
  changePasword,
  loginUser,
  loginWithRefreshToken,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middlware.js";
const router = Router();

router.route("/register").post(registerUser);

router.route("/logout").post(logoutUser);
router.route("/login").post(loginUser);
router.route("/changePassword").post(verifyJwt, changePasword);
router.route("/auth").post(loginWithRefreshToken);

export default router;
