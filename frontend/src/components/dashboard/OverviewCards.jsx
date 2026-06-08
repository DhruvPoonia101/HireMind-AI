import {
  FileText,
  Brain,
  TrendingUp,
  Trophy,
} from "lucide-react";

function OverviewCards() {
  const cards = [
    {
      title: "Resume Score",
      value: "92%",
      icon: <FileText size={24} />,
      color: "text-cyan-400",
    },
    {
      title: "DSA Progress",
      value: "78%",
      icon: <Brain size={24} />,
      color: "text-purple-400",
    },
    {
      title: "Interview Readiness",
      value: "88%",
      icon: <Trophy size={24} />,
      color: "text-yellow-400",
    },
    {
      title: "Skill Growth",
      value: "+24%",
      icon: <TrendingUp size={24} />,
      color: "text-green-400",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card) => (
        <div
          key={card.title}
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-2xl
          p-6
          "
        >
          <div className={`${card.color} mb-4`}>
            {card.icon}
          </div>

          <h3 className="text-gray-400 text-sm">
            {card.title}
          </h3>

          <h2 className={`text-3xl font-bold mt-2 ${card.color}`}>
            {card.value}
          </h2>
        </div>
      ))}

    </div>
  );
}

export default OverviewCards;