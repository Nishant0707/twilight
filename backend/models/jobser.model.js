import mongoose from "mongoose";

const jobsersSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    shortJD: { type: String, required: true },
    fullJD: { type: String, required: true },
    category: { type: String, required: true },
    image: {
      type: String,
      default: "https://via.placeholder.com/300x200?text=No+Image",
    },
    applyRoute: { type: String, default: "/jobs" },
  },
  { timestamps: true }
);

export default mongoose.model("jobsers", jobsersSchema);
