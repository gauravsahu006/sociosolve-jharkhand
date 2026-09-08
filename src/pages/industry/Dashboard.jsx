import React from "react";
import {
  Lightbulb,
  FolderKanban,
  Users,
  FileCheck2,
  Trophy,
  ArrowUpRight,
  Clock3,
  CheckCircle2,
  CircleDot,
  Plus,
  Search,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Challenges Available",
      value: "24",
      change: "+6 this month",
      icon: Lightbulb,
    },
    {
      title: "Active Projects",
      value: "08",
      change: "+2 this month",
      icon: FolderKanban,
    },
    {
      title: "Expert Teams",
      value: "12",
      change: "+3 assigned",
      icon: Users,
    },
    {
      title: "Solutions Submitted",
      value: "15",
      change: "+4 this month",
      icon: FileCheck2,
    },
    {
      title: "Projects Completed",
      value: "07",
      change: "+2 completed",
      icon: Trophy,
    },
  ];

  const projects = [
    {
      id: 1,
      name: "Smart Waste Management",
      team: "BIT Mesra Innovation Team",
      progress: 78,
      status: "In Progress",
      deadline: "18 Sep 2026",
    },
    {
      id: 2,
      name: "Industrial Water Monitoring",
      team: "NIT Jamshedpur Team",
      progress: 56,
      status: "In Progress",
      deadline: "25 Sep 2026",
    },
    {
      id: 3,
      name: "Energy Efficiency Dashboard",
      team: "XLRI Student Team",
      progress: 92,
      status: "Final Review",
      deadline: "12 Sep 2026",
    },
  ];

  const updates = [
    {
      title: "New solution submitted",
      description:
        "BIT Mesra team submitted the prototype for Smart Waste Management.",
      time: "2 hours ago",
      icon: FileCheck2,
    },
    {
      title: "Milestone completed",
      description:
        "Industrial Water Monitoring project completed the research phase.",
      time: "5 hours ago",
      icon: CheckCircle2,
    },
    {
      title: "New expert assigned",
      description:
        "Dr. Priya Singh has been assigned as project mentor.",
      time: "Yesterday",
      icon: Users,
    },
    {
      title: "Challenge received",
      description:
        "A new university solution is ready for industry review.",
      time: "Yesterday",
      icon: Lightbulb,
    },
  ];

  return (
    <div className="space-y-6">

      {/* Welcome */}
      <section>
        <p className="text-sm font-semibold text-[#159447]">
          INDUSTRY DASHBOARD
        </p>

        <div className="mt-1 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
              Welcome, Amit Sharma
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage your industry challenges, projects and collaborations.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/industry/challenges")}
            className="flex w-fit items-center gap-2 rounded-lg bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
          >
            <Plus size={17} />
            Create Challenge
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#159447]/10 text-[#159447]">
                  <Icon size={20} />
                </div>

                <ArrowUpRight
                  size={17}
                  className="text-slate-300"
                />
              </div>

              <p className="mt-4 text-xs font-medium text-slate-500">
                {stat.title}
              </p>

              <div className="mt-1 flex items-end justify-between gap-2">
                <p className="text-2xl font-bold text-[#092752]">
                  {stat.value}
                </p>

                <p className="text-[10px] font-semibold text-[#159447]">
                  {stat.change}
                </p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Main Grid */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Projects */}
        <div className="xl:col-span-2 rounded-xl border border-slate-200 bg-white">
          <div className="flex flex-col justify-between gap-3 border-b border-slate-100 p-5 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-bold text-[#092752]">
                Project Progress Overview
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Track your ongoing industry projects.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/industry/projects")}
              className="flex w-fit items-center gap-1 text-xs font-semibold text-[#159447] hover:underline"
            >
              View All
              <ArrowUpRight size={14} />
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-5 transition hover:bg-slate-50"
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row">
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        navigate(
                          `/industry/projects/${project.id}/workspace`
                        )
                      }
                      className="text-left text-sm font-bold text-[#092752] hover:text-[#159447]"
                    >
                      {project.name}
                    </button>

                    <p className="mt-1 text-xs text-slate-500">
                      {project.team}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-[#159447]">
                      {project.status}
                    </span>

                    <span className="flex items-center gap-1 text-[10px] text-slate-400">
                      <Clock3 size={12} />
                      {project.deadline}
                    </span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-[10px] font-medium text-slate-500">
                      Progress
                    </span>

                    <span className="text-xs font-bold text-[#092752]">
                      {project.progress}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-[#159447] transition-all"
                      style={{
                        width: `${project.progress}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Updates */}
        <div className="rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-100 p-5">
            <h2 className="font-bold text-[#092752]">
              Recent Updates
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Latest activity across your workspace.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {updates.map((update, index) => {
              const Icon = update.icon;

              return (
                <div
                  key={index}
                  className="flex gap-3 p-4"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#159447]/10 text-[#159447]">
                    <Icon size={17} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#092752]">
                      {update.title}
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-slate-500">
                      {update.description}
                    </p>

                    <p className="mt-1.5 text-[10px] text-slate-400">
                      {update.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <div className="mb-4">
          <h2 className="font-bold text-[#092752]">
            Quick Actions
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Frequently used industry workspace actions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <button
            type="button"
            onClick={() => navigate("/industry/challenges")}
            className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-[#159447] hover:shadow-sm"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-[#159447]">
              <Search size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#092752]">
                Find Challenges
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                Explore available challenges
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigate("/industry/projects")}
            className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-[#159447] hover:shadow-sm"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-[#159447]">
              <FolderKanban size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#092752]">
                View Projects
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                Manage active projects
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigate("/industry/teams")}
            className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-[#159447] hover:shadow-sm"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-[#159447]">
              <Users size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#092752]">
                Expert Teams
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                Connect with expert teams
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => navigate("/industry/submissions")}
            className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-[#159447] hover:shadow-sm"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-[#159447]">
              <MessageSquare size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#092752]">
                Review Submissions
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                Check submitted solutions
              </p>
            </div>
          </button>

        </div>
      </section>

      {/* Bottom Status */}
      <section className="rounded-xl bg-[#092752] p-5 text-white sm:p-6">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <CircleDot
                size={16}
                className="text-[#159447]"
              />

              <p className="text-sm font-bold">
                Industry Partnership Status
              </p>
            </div>

            <p className="mt-2 text-xs leading-5 text-slate-300">
              Your organization is actively collaborating with
              universities and expert teams across Jharkhand.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/industry/reports-analytics")}
            className="flex w-fit items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-[#092752] transition hover:bg-slate-100"
          >
            View Analytics
            <ArrowUpRight size={14} />
          </button>
        </div>
      </section>

    </div>
  );
};

export default Dashboard;