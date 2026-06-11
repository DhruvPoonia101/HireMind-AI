const fs = require("fs");
const pdfParse = require("pdf-parse");

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

module.exports = {
  uploadResume,
};