import Job from "../models/jobser.model.js";

// Create Job (with image upload support)
export const createJob = async (req, res) => {
  try {
    const { title, shortJD, fullJD, category, applyRoute } = req.body;
    let image = req.body.image; // fallback, but usually file from multer

    if (req.file) {
      image = `/uploads/${req.file.filename}`;
    }

    if (!title || !shortJD || !fullJD || !category) {
      return res.status(400).json({ message: "Title, shortJD, fullJD, and category are required" });
    }

    const job = await Job.create({ title, shortJD, fullJD, category, image, applyRoute });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error creating job", error: error.message });
  }
};

// Get all jobs
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error: error.message });
  }
};

// Get job by ID
export const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json(job);
  } catch (error) {
    res.status(500).json({ message: "Error fetching job", error: error.message });
  }
};

// Update job (with image)
export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    let updates = req.body;
    if (req.file) {
      updates.image = `/uploads/${req.file.filename}`;
    }
    const updatedJob = await Job.findByIdAndUpdate(id, updates, { new: true, runValidators: true });
    if (!updatedJob) return res.status(404).json({ message: "Job not found" });
    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: "Error updating job", error: error.message });
  }
};

// Delete job
export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByIdAndDelete(id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting job", error: error.message });
  }
};
