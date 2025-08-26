import express from "express";
import { getAllLeaders, addLeader, deleteLeader } from "../controllers/leader.controller.js";

const router = express.Router();

router.get("/", getAllLeaders);
router.post("/", addLeader);
router.delete("/:id", deleteLeader);

export default router;