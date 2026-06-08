import { motion } from "framer-motion";
import {
    Brain,
    FileText,
    Briefcase,
    Target,
    Sparkles,
    Trophy,
} from "lucide-react";

const benefits = [
    {
        icon: FileText,
        title: "ATS Resume Analysis",
        description:
            "Get instant ATS score and detailed resume improvement suggestions.",
    },
    {
        icon: Brain,
        title: "Personalized DSA Roadmaps",
        description:
            "AI-generated coding roadmap based on your current level.",
    },
    {
        icon: Trophy,
        title: "Mock Interviews",
        description:
            "Practice real interview questions with AI feedback.",
    },
    {
        icon: Briefcase,
        title: "Job Matching",
        description:
            "Find jobs that match your skills and career goals.",
    },
    {
        icon: Target,
        title: "Skill Gap Analysis",
        description:
            "Discover missing skills required by top companies.",
    },
    {
        icon: Sparkles,
        title: "AI Career Guidance",
        description:
            "Get personalized career recommendations powered by AI.",
    },
];

function WhyHireMind() {
    return (
        <section className="py-28 px-6">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">
                    Why Choose
                    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {" "}HireMind AI?
                    </span>
                </h2>

                <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
                    Everything you need to prepare for interviews, improve your resume,
                    master DSA, and land your dream job.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                scale: 1.03,
                                y: -8,
                            }}
                            className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-7
              hover:border-cyan-400/40
              hover:border-cyan-400/40
              hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
              transition-all
              duration-300
              "
                        >
                            <item.icon
                                size={38}
                                className="text-cyan-400 mb-5"
                            />

                            <h3 className="text-2xl font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-400">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WhyHireMind;