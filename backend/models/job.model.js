// backend/models/job.model.js
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  // Optional job listing fields
  title: String,
  location: String,
  description: String,
  applyLink: String,

  // Candidate fields
  firstName: String,
  lastName: String,
  phone: String,
  address1: String,
  address2: String,
  address3: String,
  pincode: String,
  state: String,
  education: String,
  file: String, // resume filename
  date: { type: Date, default: Date.now },
});

// Auto-delete after 30 days
jobSchema.index({ date: 1 }, { expireAfterSeconds: 2592000 });

export default mongoose.model("Job", jobSchema);