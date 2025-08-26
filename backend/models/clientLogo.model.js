import mongoose from "mongoose";

const clientLogoSchema = new mongoose.Schema({
  url: { type: String, required: true }, // URL or path of the logo image
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("ClientLogo", clientLogoSchema);
