import axios from "axios";

const API =
  "http://localhost:5000/api/roadmap";

export const generateRoadmap = async (
  roadmapData
) => {
  const token =
    localStorage.getItem("token");

  const response = await axios.post(
    `${API}/generate`,
    roadmapData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};