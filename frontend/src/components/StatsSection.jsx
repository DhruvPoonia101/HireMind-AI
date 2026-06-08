import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { useInView } from "react-intersection-observer";

function StatCard({ end, suffix, label }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });

    return (
        <motion.div
            ref={ref}
            whileHover={{
                scale: 1.05,
                y: -8,
            }}
            className="
      backdrop-blur-xl
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-10
      text-center
      transition-all
      duration-300
      hover:border-purple-400/40
      hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]
      "
        >
            <h2 className="
text-6xl
font-bold
bg-gradient-to-r
from-purple-400
to-cyan-400
bg-clip-text
text-transparent
drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]
">
                {inView ? (
                    <>
                        <AnimatedCounter value={end} />
                        {suffix}
                    </>
                ) : (
                    <>0{suffix}</>
                )}
            </h2>

            <p className="mt-4 text-gray-400">
                {label}
            </p>
        </motion.div>
    );
}

function StatsSection() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="grid md:grid-cols-3 gap-8">

                    <StatCard
                        end={10247}
                        suffix="+"
                        label="Resumes Analyzed"
                    />

                    <StatCard
                        end={5682}
                        suffix="+"
                        label="Interview Sessions"
                    />

                    <StatCard
                        end={1348}
                        suffix="+"
                        label="DSA Roadmaps Generated"
                    />

                </div>

            </div>
        </section>
    );
}

export default StatsSection;