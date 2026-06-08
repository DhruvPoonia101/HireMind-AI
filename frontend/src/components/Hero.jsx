import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
      >
        HireMind AI
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-gray-400 text-lg md:text-2xl max-w-3xl"
      >
        Your AI-Powered Career Copilot for Resume Analysis,
        Personalized DSA Roadmaps, Interview Preparation,
        and Landing Your Dream Job.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-all duration-300">
          Get Started
        </button>

        <button className="px-8 py-3 rounded-xl border border-gray-700 hover:bg-white hover:text-black transition-all duration-300">
          Watch Demo
        </button>
      </motion.div>

    </div>
  );
}

export default Hero;