import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { motion } from "framer-motion";

function AnimatedCircularProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      if (current >= 88) {
        current = 88;
        clearInterval(interval);
      }

      setProgress(current);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-40 h-40"
    >
      <CircularProgressbar
        value={progress}
        text={`${progress}%`}
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
    </motion.div>
  );
}

export default AnimatedCircularProgress;