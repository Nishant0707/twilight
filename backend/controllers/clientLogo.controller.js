import ClientLogo from "../models/clientLogo.model.js";

export const uploadClientLogos = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    // Map files to client logo docs
    const logos = req.files.map((file) => ({
      url: `/uploads/${file.filename}`, // save relative path
    }));

    // Save all logos to DB
    const savedLogos = await ClientLogo.insertMany(logos);

    res.status(201).json({
      message: "Client logos uploaded successfully",
      logos: savedLogos,
    });
  } catch (error) {
    res.status(500).json({ message: "Error uploading client logos", error: error.message });
  }
};

export const getClientLogos = async (req, res) => {
  try {
    const logos = await ClientLogo.find().sort({ createdAt: -1 }); // latest first
    res.json({ logos: logos.map((logo) => logo.url) }); // send array of URLs
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch client logos", error: error.message });
  }
};
