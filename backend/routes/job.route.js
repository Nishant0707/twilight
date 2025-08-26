// backend/routes/job.route.js
import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import Job from "../models/job.model.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadPath = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadPath)) fs.mkdirSync(uploadPath);

const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, uploadPath),
  filename: (_, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Get all job entries
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ date: -1 });
    res.json({ success: true, data: jobs });
  } catch {
    res.status(500).json({ success: false, message: "Error loading jobs." });
  }
});

// Submit job application
router.post("/apply", upload.single("file"), async (req, res) => {
  try {
    const newApp = new Job({ ...req.body, file: req.file?.filename || "" });
    await newApp.save();
    res.status(201).json({ success: true, message: "Application submitted." });
  } catch {
    res.status(500).json({ success: false, message: "Submission failed." });
  }
});

// Download resume
router.get("/resume/:filename", (req, res) => {
  const filePath = path.join(uploadPath, req.params.filename);
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, message: "Resume not found." });
  }
  res.download(filePath);
});

// Delete application + resume
router.delete("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ success: false, message: "Not found." });

    if (job.file) {
      const filePath = path.join(uploadPath, job.file);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    await Job.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Application deleted." });
  } catch {
    res.status(500).json({ success: false, message: "Delete failed." });
  }
});

export default router;