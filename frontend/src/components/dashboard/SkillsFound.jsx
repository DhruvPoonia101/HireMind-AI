function SkillsFound({ analysis }) {
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
        Skills Found
      </h2>

      <div className="flex flex-wrap gap-3">
        {analysis.skillsFound.map((skill) => (
          <span
            key={skill}
            className="
            px-4
            py-2
            rounded-full
            bg-green-500/10
            text-green-400
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsFound;