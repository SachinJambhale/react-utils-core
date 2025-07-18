const express = require("express");
const cors = require("cors");
const connectDB = require("./db/db");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// MongoDB Connection
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
