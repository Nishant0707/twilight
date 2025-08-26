import mongoose from "mongoose";

const leaderSchema = new mongoose.Schema({
  name: String,
  position: String,
  about: String,
  img: String, // Store base64 or URL
}, { timestamps: true });

const Leader = mongoose.model("Leader", leaderSchema);
export default Leader;