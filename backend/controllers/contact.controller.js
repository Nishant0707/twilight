import Contact from "../models/contact.model.js";

// POST: create message or callback request
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message, callbackRequested, address, web } = req.body;

    // Validation for message or callback request
    if (callbackRequested) {
      if (!phone) {
        return res.status(400).json({ error: "Phone is required for callback request." });
      }
    } else {
      if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: "Fields name, email, phone, message are required." });
      }
    }

    // For ContactInfo update (admin only, you may add auth later)
    if (address || web) {
      // Upsert contact info (only one document)
      let info = await Contact.findOne();
      if (info) {
        if (address) info.address = address;
        if (web) info.web = web;
        await info.save();
        return res.status(200).json({ message: "Contact info updated.", data: info });
      } else {
        const newInfo = new Contact({ address, web });
        await newInfo.save();
        return res.status(201).json({ message: "Contact info created.", data: newInfo });
      }
    }

    // Save message or callback request
    const newContact = new Contact({ name, email, phone, message, callbackRequested: !!callbackRequested });
    const savedContact = await newContact.save();

    res.status(201).json({ message: "Submission saved.", data: savedContact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
};

// GET: fetch all contact messages and callback requests
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({
      $or: [
        { message: { $exists: true, $ne: "" } },
        { callbackRequested: true },
      ],
    }).sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch contact data." });
  }
};

// GET: get current contact info
export const getContactInfo = async (req, res) => {
  try {
    const info = await Contact.findOne({ address: { $exists: true } });
    if (!info) {
      return res.status(404).json({ error: "Contact info not found." });
    }
    res.status(200).json(info);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
};

// PUT: update contact info by ID
export const updateContactInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, phone, address, web } = req.body;

    const updated = await Contact.findByIdAndUpdate(id, { email, phone, address, web }, { new: true });

    res.status(200).json({ message: "Contact info updated.", data: updated });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update contact info." });
  }
};

// DELETE: delete a contact message or callback request by ID
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ message: "Contact entry deleted." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete contact entry." });
  }
};
