function ATSScoreCard({ analysis }) {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-2xl
      p-6
      "
    >
      <h2 className="text-xl font-semibold mb-4">
        ATS Score
      </h2>

      <h1 className="text-6xl font-bold text-cyan-400">
        {analysis.atsScore}%
      </h1>

      <p className="text-gray-400 mt-3">
        AI Generated ATS Score
      </p>
    </div>
  );
}

export default ATSScoreCard;