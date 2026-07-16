require("dotenv").config();

const mongoose = require("mongoose");
const connectDB = require("./config/db");
const Complaint = require("./models/Complaint");

const sampleComplaints = [
    {
        name: "Aarav",
        location: "ABC Chowk",
        complaintType: "Pothole",
        description: "Large pothole near the main road causing traffic problems.",
        priorityScore: 2
    },
    {
        name: "Riya",
        location: "ABC Chowk",
        complaintType: "Water Leakage",
        description: "Water is continuously leaking from the underground pipeline.",
        priorityScore: 3
    },
    {
        name: "Kabir",
        location: "ABC Chowk",
        complaintType: "Road Damage",
        description: "The road surface is damaged and sinking near the junction.",
        priorityScore: 4
    },
    {
        name: "Meera",
        location: "ABC Chowk",
        complaintType: "Pothole",
        description: "Multiple potholes have appeared after water started accumulating.",
        priorityScore: 2
    },
    {
        name: "Dev",
        location: "ABC Chowk",
        complaintType: "Water Leakage",
        description: "Roadside water leakage has been happening for several days.",
        priorityScore: 3
    },

    {
        name: "Anaya",
        location: "Market Road",
        complaintType: "Garbage",
        description: "Garbage has not been collected for several days.",
        priorityScore: 2
    },
    {
        name: "Vihaan",
        location: "Market Road",
        complaintType: "Flooding",
        description: "Heavy water accumulation occurs during rainfall.",
        priorityScore: 5
    },
    {
        name: "Ishita",
        location: "Market Road",
        complaintType: "Garbage",
        description: "Overflowing garbage bins are blocking the drainage area.",
        priorityScore: 2
    },

    {
        name: "Arjun",
        location: "Station Area",
        complaintType: "Streetlight",
        description: "Multiple streetlights are not working at night.",
        priorityScore: 2
    },
    {
        name: "Sara",
        location: "Station Area",
        complaintType: "Road Damage",
        description: "The road near the station has severe cracks.",
        priorityScore: 4
    }
];

const seedDatabase = async () => {
    try {
        await connectDB();

        await Complaint.deleteMany();

        await Complaint.insertMany(sampleComplaints);

        console.log("✅ Sample complaints added successfully!");

        console.log(`📊 Total complaints inserted: ${sampleComplaints.length}`);

        await mongoose.connection.close();

        console.log("🔌 Database connection closed");

        process.exit(0);

    } catch (error) {
        console.error("❌ Error inserting sample complaints:");
        console.error(error.message);

        process.exit(1);
    }
};

seedDatabase();