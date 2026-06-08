import { motion } from "framer-motion";

function Navbar() {
    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img
                            src="/logo.png"
                            alt="HireMind AI Logo"
                            className="w-16 h-16 object-contain"
                        />

                        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            HireMind AI
                        </h1>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex gap-8 text-gray-300">
                        <a href="#" className="hover:text-white transition">
                            Features
                        </a>

                        <a href="#" className="hover:text-white transition">
                            Roadmaps
                        </a>

                        <a href="#" className="hover:text-white transition">
                            Resume AI
                        </a>

                        <a href="#" className="hover:text-white transition">
                            Contact
                        </a>
                    </div>

                    {/* CTA Button */}
                    <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-105 transition-all duration-300">
                        Get Started
                    </button>

                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;