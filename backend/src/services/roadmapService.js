const { model } = require("./geminiService");

const generateRoadmap = async (
  company,
  level,
  duration
) => {
  const prompt = `
Generate a DSA roadmap.

Company: ${company}
Level: ${level}
Duration: ${duration}

Return plain text roadmap only.

Format:

Month 1:
- Topic
- Topic

Month 2:
- Topic
- Topic
`;

  const result = await model.generateContent(
    prompt
  );

  return result.response.text();
};

module.exports = {
  generateRoadmap,
};