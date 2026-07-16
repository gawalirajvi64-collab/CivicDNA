const express = require("express");

const {
    createComplaint,
    getAllComplaints
} = require("../controllers/complaintController");

const router = express.Router();

router.get("/", getAllComplaints);

router.post("/", createComplaint);

module.exports = router;