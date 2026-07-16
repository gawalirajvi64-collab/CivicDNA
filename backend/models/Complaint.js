const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        location: {
            type: String,
            required: true,
            trim: true
        },

        complaintType: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        image: {
            type: String,
            default: null
        },

        status: {
            type: String,
            default: "Pending"
        },

        priorityScore: {
            type: Number,
            default: 0
        }
    },

    {
        timestamps: true
    }
);

const Complaint = mongoose.model("Complaint", complaintSchema);

module.exports = Complaint;