const Complaint = require("../models/Complaint");

const createComplaint = async (req, res) => {
    try {
        const complaint = await Complaint.create(req.body);

        res.status(201).json({
            success: true,
            message: "Complaint created successfully",
            complaint
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create complaint",
            error: error.message
        });
    }
};

const getAllComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find();

        res.status(200).json({
            success: true,
            count: complaints.length,
            complaints
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch complaints",
            error: error.message
        });
    }
};

module.exports = {
    createComplaint,
    getAllComplaints
};