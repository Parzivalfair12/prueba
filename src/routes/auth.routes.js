import { registerSchema, loginSchema } from "../schema/user.model.js";
import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
  verifyToken,
} from "../controllers/authController.js";

const router = Router();
router.post("register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/verifyToken", verifyToken);
router.get("/profile", autRequired, profile);

export default router;
