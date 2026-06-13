import { useState } from "react";
import { Brain } from "lucide-react";
import { generateRoadmap } from "../../services/roadmapService";

function RoadmapGenerator() {
  const [company, setCompany] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [roadmap, setRoadmap] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (loading) return;
  if (!company || !level || !duration) {
    alert("Please fill all fields");
    return;
  }

  try {
    setLoading(true);

    const response = await generateRoadmap({
      company,
      level,
      duration,
    });

    setRoadmap(response.roadmap.roadmap);

  } catch (error) {
    console.error(error);
    alert("Failed to generate roadmap");
  }

  setLoading(false);
};

  return (
    <div
      className="
      max-w-4xl
      mx-auto
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-2xl
      p-8
      "
    >
      <div className="flex items-center gap-3 mb-8">
        <Brain className="text-purple-400" />
        <h2 className="text-3xl font-bold">
          DSA Roadmap Generator
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Company */}
        <div>
  <label className="block mb-2 text-gray-300">
    Target Company
  </label>

  <input
    type="text"
    value={company}
    onChange={(e) =>
      setCompany(e.target.value)
    }
    placeholder="e.g. Google, Amazon, NVIDIA"
    className="
    w-full
    bg-black/40
    border
    border-white/10
    rounded-xl
    p-3
    outline-none
    focus:border-purple-500
    "
  />
</div>

        {/* Level */}
        <div>
          <label className="block mb-2 text-gray-300">
            Current Level
          </label>

          <select
            value={level}
            onChange={(e) =>
              setLevel(e.target.value)
            }
            className="
            w-full
            bg-black/40
            border
            border-white/10
            rounded-xl
            p-3
            outline-none
            "
          >
            <option value="">
              Select Level
            </option>

            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="block mb-2 text-gray-300">
            Duration
          </label>

          <select
            value={duration}
            onChange={(e) =>
              setDuration(e.target.value)
            }
            className="
            w-full
            bg-black/40
            border
            border-white/10
            rounded-xl
            p-3
            outline-none
            "
          >
            <option value="">
              Select Duration
            </option>

            <option>1 Month</option>
            <option>3 Months</option>
            <option>6 Months</option>
            <option>12 Months</option>
          </select>
        </div>

      </div>

      <button
  onClick={handleGenerate}
  disabled={loading}
  className={`
    mt-8
    px-8
    py-3
    rounded-xl
    bg-gradient-to-r
    from-purple-600
    to-blue-600
    transition-all
    duration-300
    ${
      loading
        ? "opacity-50 cursor-not-allowed"
        : "hover:scale-105"
    }
  `}
>
  {loading ? "Generating..." : "Generate Roadmap"}
</button>
      {roadmap && (
  <div
    className="
    mt-8
    p-6
    rounded-2xl
    bg-black/30
    border
    border-white/10
    "
  >
    <h3 className="text-2xl font-bold mb-4">
      Generated Roadmap
    </h3>

    <pre
      className="
      whitespace-pre-wrap
      text-gray-300
      leading-7
      "
    >
      {roadmap}
    </pre>
  </div>
)}
    </div>
  );
}

export default RoadmapGenerator;