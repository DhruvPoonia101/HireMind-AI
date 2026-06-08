import {
  LayoutDashboard,
  FileText,
  Brain,
  MessageSquare,
  LogOut,
} from "lucide-react";

function Sidebar() {
  return (
    <div
      className="
      w-72
      min-h-screen
      bg-white/5
      backdrop-blur-xl
      border-r
      border-white/10
      p-6
      "
    >
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <img
          src="/logo.png"
          alt="HireMind AI"
          className="w-12 h-12"
        />

        <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          HireMind AI
        </h1>
      </div>

      {/* Menu */}
      <div className="space-y-3">

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-purple-500/20 text-purple-300">
          <LayoutDashboard size={20} />
          Overview
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition">
          <FileText size={20} />
          Resume Analyzer
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition">
          <Brain size={20} />
          DSA Roadmap
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 transition">
          <MessageSquare size={20} />
          Interview AI
        </button>

      </div>

      {/* Logout */}
      <div className="mt-auto pt-10">

        <button
          className="
          w-full
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-xl
          bg-red-500/10
          hover:bg-red-500/20
          transition
          "
        >
          <LogOut size={20} />
          Logout
        </button>

      </div>
    </div>
  );
}

export default Sidebar;