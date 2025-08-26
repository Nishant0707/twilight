import express from "express";
import multer from "multer";
import path from "path";
import { uploadClientLogos, getClientLogos } from "../controllers/clientLogo.controller.js";

const router = express.Router();

const uploadDir = path.join(process.cwd(), "uploads");
import fs from "fs";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Upload multiple logos - admin use
router.post("/", upload.array("files", 20), uploadClientLogos);

// Get all logos - client use
router.get("/", getClientLogos);

export default router;
