import { motion } from "framer-motion";
import { User, Mail, Lock } from "lucide-react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full blur-[180px] opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600 rounded-full blur-[180px] opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
        relative
        w-full
        max-w-md
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-8
        "
      >
        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img
            src="/logo.png"
            alt="HireMind AI"
            className="w-24"
          />
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold text-center mb-3">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Create Account
          </span>
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Start your AI-powered career journey
        </p>

        {/* Full Name */}
        <div className="mb-5">
          <label className="block mb-2 text-gray-300">
            Full Name
          </label>

          <div className="
            flex items-center
            bg-white/5
            border border-white/10
            hover:border-cyan-400/40
            focus-within:border-cyan-400
            transition-all
            rounded-xl
            px-4
          ">
            <User className="text-gray-400" size={20} />

            <input
              type="text"
              placeholder="Enter your name"
              className="
              w-full
              bg-transparent
              outline-none
              px-3
              py-4
              "
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 text-gray-300">
            Email
          </label>

          <div className="
            flex items-center
            bg-white/5
            border border-white/10
            hover:border-cyan-400/40
            focus-within:border-cyan-400
            transition-all
            rounded-xl
            px-4
          ">
            <Mail className="text-gray-400" size={20} />

            <input
              type="email"
              placeholder="Enter your email"
              className="
              w-full
              bg-transparent
              outline-none
              px-3
              py-4
              "
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="block mb-2 text-gray-300">
            Password
          </label>

          <div className="
            flex items-center
            bg-white/5
            border border-white/10
            hover:border-cyan-400/40
            focus-within:border-cyan-400
            transition-all
            rounded-xl
            px-4
          ">
            <Lock className="text-gray-400" size={20} />

            <input
              type="password"
              placeholder="Create password"
              className="
              w-full
              bg-transparent
              outline-none
              px-3
              py-4
              "
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block mb-2 text-gray-300">
            Confirm Password
          </label>

          <div className="
            flex items-center
            bg-white/5
            border border-white/10
            hover:border-cyan-400/40
            focus-within:border-cyan-400
            transition-all
            rounded-xl
            px-4
          ">
            <Lock className="text-gray-400" size={20} />

            <input
              type="password"
              placeholder="Confirm password"
              className="
              w-full
              bg-transparent
              outline-none
              px-3
              py-4
              "
            />
          </div>
        </div>

        {/* Button */}
        <button
          className="
          w-full
          py-4
          rounded-xl
          font-semibold
          bg-gradient-to-r
          from-purple-600
          to-blue-600
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:shadow-[0_0_35px_rgba(147,51,234,0.6)]
          active:scale-[0.98]
          "
        >
          Create Account
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400 hover:text-cyan-300"
          >
            Login
          </Link>
        </p>
      </motion.div>

    </div>
  );
}

export default Register;