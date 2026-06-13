require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
console.log("Using Gemini Key:", process.env.GEMINI_API_KEY?.slice(0, 10));

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const analyzeResume = async (resumeText) => {
  const prompt = `
You are an ATS Resume Analyzer.

Analyze this resume and return ONLY valid JSON.

Format:

{
  "atsScore": 85,
  "skillsFound": ["Java", "React"],
  "missingSkills": ["Docker", "AWS"],
  "suggestions": [
    "Add quantified achievements",
    "Improve keyword density"
  ]
}

Resume:
${resumeText}
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
};

module.exports = {
  model,
  analyzeResume,
};