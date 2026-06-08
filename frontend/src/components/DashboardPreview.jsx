import { motion } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedCircularProgress from "./AnimatedCircularProgress";
import ResumeChart from "./ResumeChart";

import {
    FileText,
    Brain,
    Trophy,
    TrendingUp,
} from "lucide-react";

function DashboardPreview() {
    return (
        <section className="py-28 px-6">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl md:text-6xl font-bold text-center mb-6">
                    AI Career Dashboard
                </h2>

                <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
                    Track your resume score, interview readiness,
                    DSA progress and skill growth in one beautiful dashboard.
                </p>

                <div className="relative">

                    {/* Background Glow */}
                    <div
                        className="
            absolute
            inset-0
            bg-gradient-to-r
            from-purple-500/10
            via-cyan-500/10
            to-purple-500/10
            blur-3xl
            rounded-3xl
            "
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="
            relative
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            "
                    >
                        <div className="grid lg:grid-cols-3 gap-6">

                            {/* Left Column */}
                            <div className="space-y-6">

                                {/* Resume Score */}
                                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <FileText className="text-cyan-400" />
                                        <h3 className="font-semibold">Resume Score</h3>
                                    </div>

                                    <h2 className="text-5xl font-bold text-cyan-400">
                                        92%
                                    </h2>

                                    <p className="text-gray-400 mt-2">
                                        ATS Optimized
                                    </p>
                                </div>

                                {/* DSA Progress */}
                                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Brain className="text-purple-400" />
                                        <h3 className="font-semibold">
                                            DSA Progress
                                        </h3>
                                    </div>

                                    <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "78%" }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1.8,
                                                ease: "easeOut",
                                            }}
                                            className="
    h-3
    rounded-full
    bg-gradient-to-r
    from-purple-500
    via-blue-500
    to-cyan-400
    shadow-[0_0_20px_rgba(34,211,238,0.5)]
    "
                                        />

                                    </div>

                                    <p className="text-gray-400 mt-3">
                                        78% Complete
                                    </p>
                                </div>

                            </div>

                            {/* Center Column */}
                            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">

                                <h3 className="font-semibold mb-6">
                                    Interview Readiness
                                </h3>

                                <div className="flex justify-center items-center h-56">

                                    <div className="w-40 h-40">

                                        <AnimatedCircularProgress
                                            value={88}
                                            text={`88%`}
                                            styles={{
                                                path: {
                                                    stroke: "#22d3ee",
                                                    strokeLinecap: "round",
                                                },
                                                trail: {
                                                    stroke: "rgba(255,255,255,0.08)",
                                                },
                                                text: {
                                                    fill: "#ffffff",
                                                    fontSize: "16px",
                                                    fontWeight: "bold",
                                                },
                                            }}
                                        />

                                    </div>

                                </div>

                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">

                                {/* Skill Growth */}
                                <div className="bg-white/5 rounded-2xl p-5 border border-white/10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <TrendingUp className="text-green-400" />
                                        <h3 className="font-semibold">
                                            Skill Growth
                                        </h3>
                                    </div>

                                    <h2 className="text-4xl font-bold text-green-400">
                                        +24%
                                    </h2>

                                    <p className="text-gray-400">
                                        Last 30 Days
                                    </p>
                                </div>

                                {/* AI Insights */}
<div className="bg-white/5 rounded-2xl p-5 border border-white/10">

  <div className="flex items-center gap-3 mb-4">
    <Trophy className="text-yellow-400" />
    <h3 className="font-semibold">
      AI Insights
    </h3>
  </div>

  <div className="space-y-3">

    <div className="flex items-center gap-2 text-green-400">
      <span>✓</span>
      <span>Resume ATS Ready</span>
    </div>

    <div className="flex items-center gap-2 text-green-400">
      <span>✓</span>
      <span>Strong DSA Progress</span>
    </div>

    <div className="flex items-center gap-2 text-yellow-400">
      <span>⚠</span>
      <span>Improve System Design</span>
    </div>

    <div className="flex items-center gap-2 text-yellow-400">
      <span>⚠</span>
      <span>Practice HR Questions</span>
    </div>

  </div>

</div>

                            </div>

                        </div>
                    </motion.div>
                    <ResumeChart />
                </div>

            </div>
        </section>
    );
}

export default DashboardPreview;