import { motion } from "framer-motion";
import { Brain, FileText, Target } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume Analyzer",
    description:
      "Upload your resume and get ATS score, missing skills, and AI-powered improvement suggestions.",
  },
  {
    icon: Brain,
    title: "DSA Roadmap AI",
    description:
      "Personalized coding roadmap based on your skill level, target company, and available time.",
  },
  {
    icon: Target,
    title: "Interview Assistant",
    description:
      "Practice technical and HR interviews with AI-generated questions and feedback.",
  },
];

function FeatureCards() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Powerful AI Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
              >
                <Icon
                  size={40}
                  className="text-cyan-400 mb-6"
                />

                <h3 className="text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default FeatureCards;