const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
    res.send("Task Manager API is running...");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const taskRoutes = require("./routes/taskRoutes");
app.use("/api", taskRoutes);
