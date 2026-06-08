import { motion } from "framer-motion";

function BackgroundOrbs() {
  return (
    <>
      {/* Purple Orb */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        fixed
        top-20
        left-10
        w-96
        h-96
        rounded-full
        bg-purple-600/30
        blur-[140px]
        pointer-events-none
        -z-10
        "
      />

      {/* Blue Orb */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        fixed
        top-40
        right-10
        w-[500px]
        h-[500px]
        rounded-full
        bg-blue-500/30
        blur-[160px]
        pointer-events-none
        -z-10
        "
      />

      {/* Cyan Orb */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        fixed
        bottom-0
        left-1/3
        w-80
        h-80
        rounded-full
        bg-cyan-500/30
        blur-[120px]
        pointer-events-none
        -z-10
        "
      />
    </>
  );
}

export default BackgroundOrbs;