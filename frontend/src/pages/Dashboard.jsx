import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import OverviewCards from "../components/dashboard/OverviewCards";
import RecentActivity from "../components/dashboard/RecentActivity";
import ResumeUpload from "../components/dashboard/ResumeUpload";
import ATSScoreCard from "../components/dashboard/ATSScoreCard";
import SkillsFound from "../components/dashboard/SkillsFound";
import Suggestions from "../components/dashboard/Suggestions";

function Dashboard() {
  const [analysis, setAnalysis] = useState(null);
  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <div className="flex-1 p-8 overflow-y-auto">
        <DashboardNavbar />

        <OverviewCards />

        <RecentActivity />

        <ResumeUpload setAnalysis={setAnalysis} />

        {/* ATS Results Section */}
        {analysis && (
          <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <ATSScoreCard analysis={analysis} />

            <SkillsFound analysis={analysis} />

            <Suggestions analysis={analysis} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;