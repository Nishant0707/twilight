import express from "express";
import multer from "multer";
import path from "path";
import {
  createJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} from "../controllers/jobser.controller.js";

const router = express.Router();

// Setup uploads directory and multer middleware
const uploadDir = path.join(process.cwd(), "uploads");
import fs from "fs";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// All routes support file upload (single image)
router.post("/", upload.single("image"), createJob);
router.get("/", getJobs);
router.get("/:id", getJobById);
router.put("/:id", upload.single("image"), updateJob);
router.delete("/:id", deleteJob);

export default router;
