import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  CheckCircle2,
  Clock3,
  Users,
  FileText,
  Target,
  CalendarDays,
  Download,
  ChevronDown,
} from "lucide-react";

const projectData = [
  {
    name: "Smart Waste Management",
    team: "BIT Mesra Innovation Team",
    progress: 78,
    status: "In Progress",
    score: 86,
  },
  {
    name: "Industrial Water Monitoring",
    team: "NIT Jamshedpur Team",
    progress: 56,
    status: "In Progress",
    score: 74,
  },
  {
    name: "Energy Efficiency Dashboard",
    team: "XLRI Student Team",
    progress: 92,
    status: "Final Review",
    score: 92,
  },
  {
    name: "Rural Healthcare Connect",
    team: "BIT Sindri HealthTech Team",
    progress: 100,
    status: "Completed",
    score: 88,
  },
  {
    name: "Smart Logistics Platform",
    team: "IIT (ISM) Dhanbad Team",
    progress: 34,
    status: "On Hold",
    score: 68,
  },
];

const monthlyData = [
  { month: "Apr", challenges: 3, projects: 2, submissions: 1 },
  { month: "May", challenges: 5, projects: 4, submissions: 3 },
  { month: "Jun", challenges: 7, projects: 5, submissions: 4 },
  { month: "Jul", challenges: 8, projects: 7, submissions: 6 },
  { month: "Aug", challenges: 11, projects: 9, submissions: 8 },
  { month: "Sep", challenges: 14, projects: 12, submissions: 10 },
];

const ReportsAnalytics = () => {
  const [period, setPeriod] = useState("Last 6 Months");

  const stats = [
    {
      title: "Projects Completed",
      value: "07",
      change: "+16.7%",
      icon: CheckCircle2,
    },
    {
      title: "Average Progress",
      value: "75%",
      change: "+8.4%",
      icon: TrendingUp,
    },
    {
      title: "Solutions Submitted",
      value: "15",
      change: "+25.0%",
      icon: FileText,
    },
    {
      title: "Active Teams",
      value: "12",
      change: "+9.1%",
      icon: Users,
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
            Track project performance, outcomes and industry
            collaboration insights
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 outline-none focus:border-[#159447]"
          >
            <option>Last 6 Months</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
            <option>Last Year</option>
          </select>

          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]">
            <Download className="h-4 w-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-[#092752]">
                    {stat.value}
                  </h2>

                  <p className="mt-1 text-xs font-medium text-[#159447]">
                    {stat.change} from previous period
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50">
                  <Icon className="h-5 w-5 text-[#159447]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main analytics */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Activity chart */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#092752]">
                Collaboration Activity
              </h2>

              <p className="text-sm text-slate-500">
                Challenges, projects and submissions
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#159447]" />
                Challenges
              </span>

              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#092752]" />
                Projects
              </span>

              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                Submissions
              </span>
            </div>
          </div>

          <div className="mt-6 flex h-64 items-end gap-3 sm:gap-5">
            {monthlyData.map((item) => {
              const maxValue = 15;

              return (
                <div
                  key={item.month}
                  className="flex h-full flex-1 flex-col justify-end"
                >
                  <div className="flex h-full items-end justify-center gap-1">
                    <div
                      title={`${item.challenges} challenges`}
                      className="w-2 rounded-t bg-[#159447] sm:w-3"
                      style={{
                        height: `${(item.challenges / maxValue) * 100}%`,
                      }}
                    />

                    <div
                      title={`${item.projects} projects`}
                      className="w-2 rounded-t bg-[#092752] sm:w-3"
                      style={{
                        height: `${(item.projects / maxValue) * 100}%`,
                      }}
                    />

                    <div
                      title={`${item.submissions} submissions`}
                      className="w-2 rounded-t bg-slate-300 sm:w-3"
                      style={{
                        height: `${(item.submissions / maxValue) * 100}%`,
                      }}
                    />
                  </div>

                  <p className="mt-2 text-center text-xs font-medium text-slate-400">
                    {item.month}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Overall performance */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-[#092752]">
            Overall Performance
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Industry partnership metrics
          </p>

          <div className="mt-6 flex items-center justify-center">
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[14px] border-green-100">
              <div className="absolute inset-[-14px] rounded-full border-[14px] border-transparent border-l-[#159447] border-t-[#159447] border-r-[#159447] rotate-[-35deg]" />

              <div className="text-center">
                <p className="text-4xl font-bold text-[#092752]">
                  82%
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Success Rate
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Challenge Adoption
              </span>
              <span className="text-sm font-bold text-[#092752]">
                89%
              </span>
            </div>

            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-2 w-[89%] rounded-full bg-[#159447]" />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Project Completion
              </span>
              <span className="text-sm font-bold text-[#092752]">
                76%
              </span>
            </div>

            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-2 w-[76%] rounded-full bg-[#159447]" />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Solution Quality
              </span>
              <span className="text-sm font-bold text-[#092752]">
                84%
              </span>
            </div>

            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-2 w-[84%] rounded-full bg-[#159447]" />
            </div>
          </div>
        </div>
      </div>

      {/* Project performance */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-2 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#092752]">
              Project Performance
            </h2>

            <p className="text-sm text-slate-500">
              Current performance across active projects
            </p>
          </div>

          <button className="inline-flex items-center gap-1 text-sm font-semibold text-[#159447]">
            View All
            <ChevronDown className="h-4 w-4 -rotate-90" />
          </button>
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Project
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Team
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Progress
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Status
                </th>

                <th className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Score
                </th>
              </tr>
            </thead>

            <tbody>
              {projectData.map((project) => (
                <tr
                  key={project.name}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="px-5 py-4">
                    <p className="text-sm font-semibold text-[#092752]">
                      {project.name}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-500">
                    {project.team}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 rounded-full bg-slate-100">
                        <div
                          className="h-2 rounded-full bg-[#159447]"
                          style={{
                            width: `${project.progress}%`,
                          }}
                        />
                      </div>

                      <span className="text-xs font-semibold text-slate-600">
                        {project.progress}%
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        project.status === "Completed"
                          ? "bg-green-50 text-green-700"
                          : project.status === "On Hold"
                            ? "bg-orange-50 text-orange-700"
                            : "bg-blue-50 text-blue-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <span className="font-bold text-[#092752]">
                      {project.score}
                    </span>
                    <span className="text-xs text-slate-400">
                      /100
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="space-y-3 p-4 md:hidden">
          {projectData.map((project) => (
            <div
              key={project.name}
              className="rounded-lg border border-slate-200 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-[#092752]">
                    {project.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400">
                    {project.team}
                  </p>
                </div>

                <span className="text-lg font-bold text-[#092752]">
                  {project.score}
                </span>
              </div>

              <div className="mt-4">
                <div className="mb-1 flex justify-between text-xs">
                  <span className="text-slate-400">
                    Progress
                  </span>

                  <span className="font-semibold text-slate-600">
                    {project.progress}%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-[#159447]"
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mt-3">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    project.status === "Completed"
                      ? "bg-green-50 text-green-700"
                      : project.status === "On Hold"
                        ? "bg-orange-50 text-orange-700"
                        : "bg-blue-50 text-blue-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-green-100 bg-green-50 p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
            <Target className="h-5 w-5 text-[#159447]" />
          </div>

          <h3 className="mt-4 font-bold text-[#092752]">
            Strong Solution Quality
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            Submitted solutions are maintaining an average
            evaluation score of 82/100.
          </p>
        </div>

        <div className="rounded-xl border border-blue-100 bg-blue-50 p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
            <TrendingUp className="h-5 w-5 text-blue-600" />
          </div>

          <h3 className="mt-4 font-bold text-[#092752]">
            Project Growth
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            Industry-university projects have increased by
            25% during the selected period.
          </p>
        </div>

        <div className="rounded-xl border border-orange-100 bg-orange-50 p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
            <CalendarDays className="h-5 w-5 text-orange-600" />
          </div>

          <h3 className="mt-4 font-bold text-[#092752]">
            Upcoming Deadlines
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            4 project milestones are approaching within the
            next 30 days.
          </p>
        </div>
      </div>

      {/* Report footer */}
      <div className="rounded-xl bg-[#092752] p-5 text-white sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold">
              Industry Partnership Report
            </h2>

            <p className="mt-1 text-sm text-slate-300">
              Generate a detailed report for management and
              partnership review.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#092752] transition hover:bg-slate-100">
            <BarChart3 className="h-4 w-4" />
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;