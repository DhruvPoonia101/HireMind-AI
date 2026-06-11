function Suggestions({ analysis }) {
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
        AI Suggestions
      </h2>

      <ul className="space-y-3">
        {analysis.suggestions.map((item, index) => (
          <li
            key={index}
            className="text-gray-300"
          >
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Suggestions;