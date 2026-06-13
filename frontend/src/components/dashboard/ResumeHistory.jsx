import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";
function ResumeHistory({ refreshHistory }) {
    const [resumes, setResumes] = useState([]);

    const fetchHistory = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://localhost:5000/api/resume/history",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setResumes(response.data.resumes);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
  fetchHistory();
}, [refreshHistory]);

    const deleteResume = async (id) => {
        try {
            const token = localStorage.getItem("token");

            await axios.delete(
                `http://localhost:5000/api/resume/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            fetchHistory();

        } catch (error) {
            console.error(error);
        }
    };

    const clearHistory = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to clear all history?"
        );

        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("token");

            await axios.delete(
                "http://localhost:5000/api/resume/history",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setResumes([]);

        } catch (error) {
            console.error(error);
        }
    };

    

    return (
        <div
            className="
      mt-8
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-2xl
      p-6
      "
        >
            <h2 className="text-2xl font-bold mb-6">
                Resume History
            </h2>
            <div className="flex justify-end mb-4">
                <button
                    onClick={clearHistory}
                    className="
    flex items-center gap-2
    px-4 py-2
    rounded-xl
    bg-red-500/20
    text-red-400
    hover:bg-red-500/30
    transition-all
    "
                >
                    <Trash2 size={16} />
                    Clear History
                </button>
            </div>

            <div className="space-y-4">
                {resumes.map((resume) => (
                    <div
  key={resume._id}
  className="
  p-4
  rounded-xl
  bg-white/5
  border
  border-white/10
  flex
  justify-between
  items-center
  "
>
  <div>
    <h3 className="font-semibold">
      {resume.fileName}
    </h3>

    <p className="text-cyan-400 mt-1">
      ATS Score: {resume.atsScore}%
    </p>

    <p className="text-gray-500 text-sm mt-1">
      {new Date(
        resume.createdAt
      ).toLocaleDateString()}
    </p>
  </div>

  <button
    onClick={() => deleteResume(resume._id)}
    className="
    text-red-400
    hover:text-red-300
    transition-all
    "
  >
    <Trash2 size={18} />
  </button>
</div>
                ))}
            </div>
        </div>
    );
}

export default ResumeHistory;