import { useState } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import OverviewCards from "../components/dashboard/OverviewCards";
import RecentActivity from "../components/dashboard/RecentActivity";
import ResumeUpload from "../components/dashboard/ResumeUpload";
import ATSScoreCard from "../components/dashboard/ATSScoreCard";
import SkillsFound from "../components/dashboard/SkillsFound";
import Suggestions from "../components/dashboard/Suggestions";
import ResumeHistory from "../components/dashboard/ResumeHistory";
import RoadmapGenerator from "../components/dashboard/RoadmapGenerator";

function Dashboard() {
  const [analysis, setAnalysis] = useState(null);
  const [refreshHistory, setRefreshHistory] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  return (
    <div className="min-h-screen bg-black text-white flex">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="flex-1 p-8 overflow-y-auto">
        <DashboardNavbar />

        {activeTab === "overview" && (
          <>
            <OverviewCards />
            <RecentActivity />
          </>
        )}

        {activeTab === "resume" && (
          <>
            <ResumeUpload
              setAnalysis={setAnalysis}
              setRefreshHistory={setRefreshHistory}
            />

            {analysis && (
              <div className="grid lg:grid-cols-3 gap-6 mt-8">
                <ATSScoreCard analysis={analysis} />
                <SkillsFound analysis={analysis} />
                <Suggestions analysis={analysis} />
              </div>
            )}

            <ResumeHistory
              refreshHistory={refreshHistory}
            />
          </>
        )}

        {activeTab === "roadmap" && (
  <RoadmapGenerator />
)}  

        {activeTab === "interview" && (
          <div className="mt-10 text-center text-2xl font-bold">
            Interview AI Coming Soon 🎤
          </div>
        )}
      </div>

    </div>
  );
}

export default Dashboard;