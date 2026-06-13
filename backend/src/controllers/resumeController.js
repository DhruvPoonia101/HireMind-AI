const fs = require("fs");
const pdfParse = require("pdf-parse");

const Resume = require("../models/Resume");

const { analyzeResume } = require("../services/geminiService");

const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const pdfBuffer = fs.readFileSync(req.file.path);

    const parsed = await pdfParse(pdfBuffer);

    const aiResponse = await analyzeResume(parsed.text);

    // Remove Gemini markdown wrapper
    const cleanedResponse = aiResponse
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Convert string to JSON
    const analysis = JSON.parse(cleanedResponse);
    await Resume.create({
      user: req.user.id,
      fileName: req.file.originalname,
      atsScore: analysis.atsScore,
      skillsFound: analysis.skillsFound,
      missingSkills: analysis.missingSkills,
      suggestions: analysis.suggestions,
    });

    res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



const getResumeHistory = async (req, res) => {
  try {
    const resumes = await Resume.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      resumes,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteResume = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);

    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    if (resume.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    await Resume.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Resume deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const clearHistory = async (req, res) => {
  try {
    await Resume.deleteMany({
      user: req.user.id,
    });

    res.status(200).json({
      success: true,
      message: "History cleared successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadResume,
  getResumeHistory,
  deleteResume,
  clearHistory,
};