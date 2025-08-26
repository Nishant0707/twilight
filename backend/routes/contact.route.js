import express from "express";
import {
  createContact,
  getAllContacts,
  getContactInfo,
  updateContactInfo,
  deleteContact,
} from "../controllers/contact.controller.js";

const router = express.Router();

router.post("/", createContact); // create message, callback, or update info
router.get("/all", getAllContacts); // get messages + callbacks
router.get("/info", getContactInfo); // get contact info
router.put("/info/:id", updateContactInfo); // update contact info
router.delete("/:id", deleteContact); // delete contact by id

export default router;
