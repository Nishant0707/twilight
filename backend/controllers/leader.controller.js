import Leader from "../models/leader.model.js";

export const getAllLeaders = async (req, res) => {
  try {
    const leaders = await Leader.find();
    res.json(leaders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addLeader = async (req, res) => {
  try {
    const newLeader = new Leader(req.body);
    await newLeader.save();
    res.status(201).json(newLeader);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteLeader = async (req, res) => {
  try {
    await Leader.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};