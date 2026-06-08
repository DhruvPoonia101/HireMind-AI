import { motion } from "framer-motion";

function FloatingOrbs() {
  return (
    <>
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-32 left-20 w-72 h-72 bg-purple-600 rounded-full blur-[150px] opacity-20"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-60 right-20 w-72 h-72 bg-cyan-500 rounded-full blur-[150px] opacity-20"
      />

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="absolute bottom-40 left-1/2 w-64 h-64 bg-blue-600 rounded-full blur-[150px] opacity-20"
      />
    </>
  );
}

export default FloatingOrbs;