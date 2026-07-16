require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

// Routes
const complaintRoutes = require("./routes/complaintRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();


// ===============================
// CONNECT TO DATABASE
// ===============================

connectDB();


// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());

app.use(express.json());


// ===============================
// HOME ROUTE
// ===============================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "🚀 CivicDNA Backend is Running Successfully"
    });
});


// ===============================
// COMPLAINT ROUTES
// ===============================

app.use("/api/complaints", complaintRoutes);


// ===============================
// AI ROUTES
// ===============================

app.use("/api/ai", aiRoutes);


// ===============================
// START SERVER
// ===============================

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});