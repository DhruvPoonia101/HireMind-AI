const Roadmap = require("../models/Roadmap");

const {
  generateRoadmap,
} = require("../services/roadmapService");

const createRoadmap = async (req, res) => {
  try {
    const {
      company,
      level,
      duration,
    } = req.body;

    // Check existing roadmap first
    const existingRoadmap =
      await Roadmap.findOne({
        user: req.user.id,
        company,
        level,
        duration,
      });

    if (existingRoadmap) {
      return res.status(200).json({
        success: true,
        roadmap: existingRoadmap,
        cached: true,
      });
    }

    // Generate only if not found
    const roadmapText =
      await generateRoadmap(
        company,
        level,
        duration
      );

    const roadmap =
      await Roadmap.create({
        user: req.user.id,
        company,
        level,
        duration,
        roadmap: roadmapText,
      });

    res.status(200).json({
      success: true,
      roadmap,
      cached: false,
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
  createRoadmap,
};