import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="px-6 pb-8">
      <div
        className="
          max-w-7xl
          mx-auto
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-10
        "
      >
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/logo.png"
                alt="HireMind AI"
                className="w-14 h-14 object-contain"
              />

              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                HireMind AI
              </h2>
            </div>

            <p className="text-gray-400 max-w-md leading-relaxed">
              Your AI-powered career copilot. Build ATS-friendly resumes,
              master DSA, prepare for interviews, and land your dream job.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Product
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a
                href="#"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Resume Analyzer
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                DSA Roadmaps
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Interview AI
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              <a
                href="#"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                About
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Contact
              </a>

              <a
                href="#"
                className="hover:text-cyan-400 transition-all duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 HireMind AI. All rights reserved.
          </p>

          <motion.a
            href="mailto:contact@hiremind.ai"
            whileHover={{
              y: -3,
              scale: 1.1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            <Mail className="text-gray-400 hover:text-cyan-400 transition-all duration-300" />
          </motion.a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;