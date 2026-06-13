const express = require("express");
const upload = require("../middleware/uploadMiddleware");
const protect = require("../middleware/authMiddleware");

const {
  uploadResume,
  getResumeHistory,
  deleteResume,
  clearHistory,
} = require("../controllers/resumeController");

const router = express.Router();

router.post(
  "/upload",
  protect,
  upload.single("resume"),
  uploadResume
);

router.get(
  "/history",
  protect,
  getResumeHistory
);

router.delete(
  "/history",
  protect,
  clearHistory
);

router.delete(
  "/:id",
  protect,
  deleteResume
);

module.exports = router;