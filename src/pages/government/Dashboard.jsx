import React from "react";
import {
  ClipboardList,
  FolderKanban,
  GraduationCap,
  Factory,
  CheckCircle2,
  Plus,
  FileCheck2,
  Building2,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    title: "Total Challenges",
    value: "42",
    change: "+8 this month",
    icon: ClipboardList,
  },
  {
    title: "Active Projects",
    value: "18",
    change: "+3 this month",
    icon: FolderKanban,
  },
  {
    title: "Universities Engaged",
    value: "12",
    change: "+2 this month",
    icon: GraduationCap,
  },
  {
    title: "Industry Partners",
    value: "09",
    change: "+1 this month",
    icon: Factory,
  },
  {
    title: "Solutions Delivered",
    value: "27",
    change: "+5 this quarter",
    icon: CheckCircle2,
  },
];

const projects = [
  {
    name: "Smart Water Management",
    department: "Urban Development",
    university: "BIT Mesra",
    industry: "Tata Steel",
    progress: 82,
    status: "On Track",
  },
  {
    name: "Rural Healthcare Monitoring",
    department: "Health Department",
    university: "NIT Jamshedpur",
    industry: "Tech Mahindra",
    progress: 68,
    status: "On Track",
  },
  {
    name: "Digital Agriculture Platform",
    department: "Agriculture Department",
    university: "IIT ISM Dhanbad",
    industry: "Infosys",
    progress: 51,
    status: "In Progress",
  },
  {
    name: "Smart Traffic Management",
    department: "Transport Department",
    university: "BIT Sindri",
    industry: "TCS",
    progress: 36,
    status: "Needs Review",
  },
];

const activities = [
  {
    title: "New solution submitted",
    description: "Smart Water Management project submitted for review.",
    time: "2 hours ago",
  },
  {
    title: "Challenge assigned",
    description: "Rural Healthcare Monitoring assigned to NIT Jamshedpur.",
    time: "5 hours ago",
  },
  {
    title: "University onboarded",
    description: "A new university has joined the innovation network.",
    time: "Yesterday",
  },
  {
    title: "Milestone completed",
    description: "Digital Agriculture Platform completed Phase 2.",
    time: "Yesterday",
  },
];

const quickActions = [
  {
    title: "Create Challenge",
    icon: Plus,
    path: "/government/challenges",
  },
  {
    title: "Review Problems",
    icon: FileCheck2,
    path: "/government/problems",
  },
  {
    title: "Assign University",
    icon: GraduationCap,
    path: "/government/universities",
  },
  {
    title: "Assign Industry",
    icon: Building2,
    path: "/government/industries",
  },
  {
    title: "View Reports",
    icon: BarChart3,
    path: "/government/reports",
  },
];

const Dashboard = () => {
  const handleNavigate = (path) => {
    window.location.href = path;
  };

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
          Welcome, Amit Sharma 👋
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Here's what's happening across the SocioSolve innovation ecosystem.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-[#092752]">
                    {stat.value}
                  </h2>

                  <p className="mt-2 text-xs font-medium text-[#159447]">
                    {stat.change}
                  </p>
                </div>

                <div className="rounded-xl bg-[#EAF7EF] p-3">
                  <Icon className="h-5 w-5 text-[#159447]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Project Progress */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white xl:col-span-2">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] p-5">
            <div>
              <h2 className="font-bold text-[#092752]">
                Project Progress
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Current implementation status
              </p>
            </div>

            <button
              onClick={() => handleNavigate("/government/milestones")}
              className="flex items-center gap-1 text-sm font-semibold text-[#159447] hover:text-[#117C3B]"
            >
              View All
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="divide-y divide-[#E2E8F0]">
            {projects.map((project) => (
              <div key={project.name} className="p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-[#092752]">
                      {project.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {project.department} • {project.university} •{" "}
                      {project.industry}
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                      project.status === "Needs Review"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-[#EAF7EF] text-[#159447]"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-[#159447]"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>

                  <span className="w-10 text-right text-sm font-bold text-[#092752]">
                    {project.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-2xl border border-[#E2E8F0] bg-white">
          <div className="border-b border-[#E2E8F0] p-5">
            <h2 className="font-bold text-[#092752]">
              Recent Activity
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Latest ecosystem updates
            </p>
          </div>

          <div className="divide-y divide-[#E2E8F0]">
            {activities.map((activity) => (
              <div key={activity.title} className="p-5">
                <div className="flex gap-3">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#159447]" />

                  <div>
                    <h3 className="text-sm font-semibold text-[#092752]">
                      {activity.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {activity.description}
                    </p>

                    <p className="mt-2 text-[11px] text-slate-400">
                      {activity.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
        <div className="mb-5">
          <h2 className="font-bold text-[#092752]">
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Frequently used government operations
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {quickActions.map((action) => {
            const Icon = action.icon;

            return (
              <button
                key={action.title}
                onClick={() => handleNavigate(action.path)}
                className="group flex items-center gap-3 rounded-xl border border-[#E2E8F0] p-4 text-left transition hover:border-[#159447] hover:bg-[#F3FBF6]"
              >
                <div className="rounded-lg bg-[#EAF7EF] p-2.5">
                  <Icon className="h-5 w-5 text-[#159447]" />
                </div>

                <span className="text-sm font-semibold text-[#092752]">
                  {action.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;