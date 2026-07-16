const express = require("express");

const aiController = require("../controllers/aiController");

const router = express.Router();

router.get("/analyze", aiController.analyzeComplaints);

module.exports = router;