import { motion } from "framer-motion";
import {
  Linkedin,
  Mail,
} from "lucide-react";

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

          {/* Brand Section */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-3 mb-4">

              <img
                src="/logo.png"
                alt="HireMind AI"
                className="w-12 h-12 object-contain"
              />

              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                HireMind AI
              </h2>

            </div>

            <p className="text-gray-400 max-w-md">
              Your AI-powered career copilot.
              Build ATS-friendly resumes, master DSA,
              prepare for interviews, and land your dream job.
            </p>

          </div>

          {/* Product Links */}
          <div>

            <h3 className="font-semibold mb-4">
              Product
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <a href="#" className="hover:text-cyan-400 transition">
                Resume Analyzer
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                DSA Roadmaps
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                Interview AI
              </a>

            </div>

          </div>

          {/* Company Links */}
          <div>

            <h3 className="font-semibold mb-4">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <a href="#" className="hover:text-cyan-400 transition">
                About
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                Contact
              </a>

              <a href="#" className="hover:text-cyan-400 transition">
                Privacy Policy
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 HireMind AI. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

           

            <motion.a
              whileHover={{
                y: -3,
                scale: 1.1,
              }}
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="text-gray-400 hover:text-white transition" />
            </motion.a>

            <motion.a
              whileHover={{
                y: -3,
                scale: 1.1,
              }}
              href="mailto:contact@hiremind.ai"
            >
              <Mail className="text-gray-400 hover:text-white transition" />
            </motion.a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;