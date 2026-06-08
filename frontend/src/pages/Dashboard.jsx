import Sidebar from "../components/dashboard/Sidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import OverviewCards from "../components/dashboard/OverviewCards";
import RecentActivity from "../components/dashboard/RecentActivity";
import ResumeUpload from "../components/dashboard/ResumeUpload";

function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex">

      <Sidebar />

      <div className="flex-1 p-8">

        <DashboardNavbar />
        <OverviewCards />
        <RecentActivity />
        <ResumeUpload />

      </div>

    </div>
  );
}

export default Dashboard;