import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function CTASection() {
    return (
        <section className="py-28 px-6">

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="
        max-w-6xl
        mx-auto
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-12
        text-center
        "
            >

                {/* Glow Effect */}
                <div
                    className="
          absolute
          inset-0
          bg-gradient-to-r
          from-purple-500/10
          via-cyan-500/10
          to-purple-500/10
          blur-3xl
          "
                />

                <div className="relative z-10">

                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        Ready To Accelerate
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            {" "}Your Career?
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
                        Upload your resume, generate personalized DSA roadmaps,
                        improve interview performance, and get AI-powered career
                        guidance — all in one platform.
                    </p>

                    <div className="flex justify-center gap-4 flex-wrap">

                        <motion.button
                            
                            whileHover={{
                                scale: 1.05,
                                y: -4,
                            }}
                            whileTap={{
                                scale: 0.96,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            }}
                            className="
  px-8
  py-4
  rounded-2xl
  bg-gradient-to-r
  from-purple-600
  to-blue-600
  font-semibold
  flex
  items-center
  gap-2
  shadow-lg
  shadow-purple-500/20
  "
                        >
                            Get Started Free
                            <ArrowRight size={20} />
                        </motion.button>

                        <button
                            className="
              px-8
              py-4
              rounded-2xl
              border
              border-white/10
              hover:border-cyan-400/40
              transition-all
              "
                        >
                            Watch Demo
                        </button>

                    </div>

                </div>

            </motion.div>

        </section>
    );
}

export default CTASection;