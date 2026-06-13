const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const roadmapRoutes = require("./routes/roadmapRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/resume", resumeRoutes);
app.use("/api/roadmap", roadmapRoutes);

app.get("/", (req, res) => {
  res.send("HireMind AI API Running");
});

app.use("/api/auth", authRoutes);

module.exports = app;