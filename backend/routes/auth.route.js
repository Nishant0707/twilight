import express from "express";
import { login, registerAdmin } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public
router.post("/login", login);

// Protected — Only verified token with admin role can register
router.post("/register", verifyToken, registerAdmin);

export default router;