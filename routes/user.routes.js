import express from "express";
import { isAuthenticatedUser } from "../middlewares/auth.js";
import {
  getCurrentUser,
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/user.controllers.js";

const router = express.Router();

router.route("/").get(isAuthenticatedUser, getCurrentUser).post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(isAuthenticatedUser, logoutUser);

export default router;
