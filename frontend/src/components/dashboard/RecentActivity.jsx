import {
  FileText,
  Brain,
  MessageSquare,
} from "lucide-react";

function RecentActivity() {
  const activities = [
    {
      title: "Resume Uploaded",
      time: "2 hours ago",
      icon: <FileText size={18} />,
    },
    {
      title: "DSA Roadmap Generated",
      time: "Yesterday",
      icon: <Brain size={18} />,
    },
    {
      title: "Interview Session Completed",
      time: "3 days ago",
      icon: <MessageSquare size={18} />,
    },
  ];

  return (
    <div
      className="
      mt-8
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-2xl
      p-6
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activities.map((item, index) => (
          <div
            key={index}
            className="
            flex
            items-center
            justify-between
            p-4
            rounded-xl
            bg-white/5
            border
            border-white/5
            "
          >
            <div className="flex items-center gap-4">
              <div className="text-cyan-400">
                {item.icon}
              </div>

              <div>
                <p className="font-medium">
                  {item.title}
                </p>

                <p className="text-sm text-gray-400">
                  {item.time}
                </p>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default RecentActivity;