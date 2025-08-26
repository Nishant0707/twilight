import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    message: { type: String, trim: true },
    address: { type: String, trim: true },   // For ContactInfo
    web: { type: String, trim: true },       // For ContactInfo
    callbackRequested: { type: Boolean, default: false },  // Callback request flag
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
