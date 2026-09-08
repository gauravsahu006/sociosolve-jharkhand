import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  FolderKanban,
  CheckCircle2,
  Clock3,
  Download,
  Target,
} from "lucide-react";

const ReportsAnalytics = () => {
  const [period, setPeriod] = useState("This Year");

  const projectStats = [
    {
      title: "Total Projects",
      value: "12",
      change: "+20%",
      icon: FolderKanban,
    },
    {
      title: "Active Projects",
      value: "7",
      change: "+16%",
      icon: TrendingUp,
    },
    {
      title: "Completed",
      value: "5",
      change: "+25%",
      icon: CheckCircle2,
    },
    {
      title: "Student Teams",
      value: "18",
      change: "+12%",
      icon: Users,
    },
  ];

  const monthlyProjects = [
    { month: "Jan", value: 3 },
    { month: "Feb", value: 5 },
    { month: "Mar", value: 4 },
    { month: "Apr", value: 7 },
    { month: "May", value: 6 },
    { month: "Jun", value: 9 },
    { month: "Jul", value: 8 },
    { month: "Aug", value: 11 },
    { month: "Sep", value: 10 },
    { month: "Oct", value: 12 },
    { month: "Nov", value: 9 },
    { month: "Dec", value: 12 },
  ];

  const categoryData = [
    {
      name: "Waste Management",
      projects: 4,
      percentage: 80,
    },
    {
      name: "Water & Sanitation",
      projects: 3,
      percentage: 60,
    },
    {
      name: "Smart Agriculture",
      projects: 2,
      percentage: 40,
    },
    {
      name: "Education",
      projects: 2,
      percentage: 40,
    },
    {
      name: "Public Safety",
      projects: 1,
      percentage: 20,
    },
  ];

  const teamPerformance = [
    {
      team: "Team EcoTech",
      project: "Smart Waste Management",
      progress: 85,
      status: "On Track",
    },
    {
      team: "Team Aqua",
      project: "Smart Water Monitoring",
      progress: 72,
      status: "On Track",
    },
    {
      team: "Team AgriVision",
      project: "Smart Agriculture",
      progress: 58,
      status: "Needs Attention",
    },
    {
      team: "Team EduConnect",
      project: "Digital Education",
      progress: 91,
      status: "On Track",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
            Reports & Analytics
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Track your university's project performance and impact.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-[#159447]"
          >
            <option>This Year</option>
            <option>Last 6 Months</option>
            <option>Last 3 Months</option>
          </select>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
          >
            <Download size={17} />
            Export Report
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {projectStats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#159447]/10 text-[#159447]">
                  <Icon size={22} />
                </div>

                <span className="text-xs font-semibold text-[#159447]">
                  {item.change}
                </span>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                {item.title}
              </p>

              <p className="mt-1 text-2xl font-bold text-[#092752]">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Project Growth */}
        <div className="rounded-xl bg-white p-5 shadow-sm xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold text-[#092752]">
                Project Activity
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Projects created throughout the year
              </p>
            </div>

            <BarChart3 size={21} className="text-[#159447]" />
          </div>

          <div className="mt-8 flex h-64 items-end gap-2 sm:gap-4">
            {monthlyProjects.map((item) => (
              <div
                key={item.month}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <span className="text-[10px] font-medium text-slate-500 sm:text-xs">
                  {item.value}
                </span>

                <div className="flex h-full w-full items-end">
                  <div
                    className="w-full rounded-t-md bg-[#159447] transition hover:bg-[#117C3B]"
                    style={{
                      height: `${(item.value / 12) * 100}%`,
                    }}
                  />
                </div>

                <span className="text-[10px] text-slate-400 sm:text-xs">
                  {item.month}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Completion */}
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div>
            <h2 className="font-semibold text-[#092752]">
              Project Completion
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Overall project progress
            </p>
          </div>

          <div className="flex flex-col items-center py-8">
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[18px] border-slate-100">
              <div className="absolute inset-[-18px] rounded-full border-[18px] border-transparent border-t-[#159447] border-r-[#159447] rotate-45" />

              <div className="text-center">
                <p className="text-3xl font-bold text-[#092752]">
                  68%
                </p>

                <p className="text-xs text-slate-500">
                  Completion
                </p>
              </div>
            </div>

            <div className="mt-7 grid w-full grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-lg font-bold text-[#159447]">
                  5
                </p>
                <p className="text-xs text-slate-500">
                  Completed
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-[#092752]">
                  7
                </p>
                <p className="text-xs text-slate-500">
                  Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="rounded-xl bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-[#092752]">
              Projects by Category
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Distribution of university projects
            </p>
          </div>

          <Target size={21} className="text-[#159447]" />
        </div>

        <div className="mt-6 space-y-5">
          {categoryData.map((item) => (
            <div key={item.name}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">
                  {item.name}
                </span>

                <span className="text-xs text-slate-500">
                  {item.projects} projects
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-[#159447]"
                  style={{
                    width: `${item.percentage}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Performance */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="border-b border-slate-200 px-5 py-4">
          <h2 className="font-semibold text-[#092752]">
            Team Performance
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Current progress of active student teams
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Team
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Project
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Progress
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {teamPerformance.map((team) => (
                <tr
                  key={team.team}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#159447]/10 text-sm font-bold text-[#159447]">
                        {team.team.charAt(5)}
                      </div>

                      <span className="text-sm font-medium text-[#092752]">
                        {team.team}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-600">
                    {team.project}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-[#159447]"
                          style={{
                            width: `${team.progress}%`,
                          }}
                        />
                      </div>

                      <span className="text-xs font-semibold text-slate-600">
                        {team.progress}%
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                        team.status === "On Track"
                          ? "bg-green-50 text-[#159447]"
                          : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {team.status === "On Track" ? (
                        <CheckCircle2 size={13} />
                      ) : (
                        <Clock3 size={13} />
                      )}

                      {team.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;