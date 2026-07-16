const Complaint = require("../models/Complaint");

const clusterComplaintsByLocation = require("../utils/clustering");

const detectRootCause = require("../services/aiService");


// ANALYZE ALL COMPLAINTS
const analyzeComplaints = async (req, res) => {
    try {
        // Get all complaints from MongoDB
        const complaints = await Complaint.find();

        // Group complaints by location
        const clusters = clusterComplaintsByLocation(complaints);

        // Analyze every cluster
        const analysis = clusters.map((cluster) => {
            return detectRootCause(cluster);
        });

        res.status(200).json({
            success: true,
            totalClusters: analysis.length,
            analysis
        });

    } catch (error) {
        console.error("AI Analysis Error:", error);

        res.status(500).json({
            success: false,
            message: "AI analysis failed",
            error: error.message
        });
    }
};


// VERY IMPORTANT
module.exports = {
    analyzeComplaints
};