import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser(formData);

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            alert("Login Successful 🚀");

            navigate("/dashboard");
        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Login Failed"
            );
        }
    };

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
                <div className="text-center mb-8">
                    <img
                        src="/logo.png"
                        alt="HireMind AI"
                        className="w-20 h-20 mx-auto mb-4"
                    />

                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Welcome Back
                    </h1>

                    <p className="text-gray-400 mt-2">
                        Login to continue your career journey
                    </p>
                </div>

                <form onSubmit={handleSubmit}>

                    {/* Email */}
                    <div className="mb-5">
                        <label className="block mb-2 text-sm text-gray-300">
                            Email
                        </label>

                        <div className="relative">
                            <Mail
                                size={18}
                                className="absolute left-4 top-4 text-gray-400"
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="
                w-full
                bg-white/5
                border
                border-white/10
                rounded-xl
                py-3
                pl-12
                pr-4
                outline-none
                focus:border-cyan-400
                transition-all
                "
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="block mb-2 text-sm text-gray-300">
                            Password
                        </label>

                        <div className="relative">
                            <Lock
                                size={18}
                                className="absolute left-4 top-4 text-gray-400"
                            />

                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter password"
                                required
                                className="
                w-full
                bg-white/5
                border
                border-white/10
                rounded-xl
                py-3
                pl-12
                pr-4
                outline-none
                focus:border-cyan-400
                transition-all
                "
                            />
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="
            w-full
            py-3
            rounded-xl
            bg-gradient-to-r
            from-purple-600
            to-blue-600
            hover:scale-[1.02]
            transition-all
            duration-300
            font-medium
            "
                    >
                        Login
                    </button>

                </form>

                <p className="text-center text-gray-400 mt-6">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-cyan-400 hover:text-cyan-300"
                    >
                        Register
                    </Link>
                </p>
            </motion.div>
        </div>
    );
}

export default Login;