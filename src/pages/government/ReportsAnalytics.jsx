import React, { useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  Building2,
  GraduationCap,
  FolderKanban,
  CheckCircle2,
  Download,
  CalendarDays,
  Target,
  Award,
} from "lucide-react";

const ReportsAnalytics = () => {
  const [period, setPeriod] = useState("2026-27");

  const monthlyData = [
    { month: "Apr", challenges: 4, projects: 2, solutions: 1 },
    { month: "May", challenges: 5, projects: 3, solutions: 2 },
    { month: "Jun", challenges: 7, projects: 4, solutions: 3 },
    { month: "Jul", challenges: 6, projects: 5, solutions: 4 },
    { month: "Aug", challenges: 9, projects: 6, solutions: 5 },
    { month: "Sep", challenges: 7, projects: 5, solutions: 4 },
  ];

  const departments = [
    {
      name: "Urban Development",
      challenges: 8,
      projects: 5,
      completion: 78,
    },
    {
      name: "Agriculture",
      challenges: 7,
      projects: 4,
      completion: 71,
    },
    {
      name: "Healthcare",
      challenges: 6,
      projects: 3,
      completion: 74,
    },
    {
      name: "Water Resources",
      challenges: 5,
      projects: 3,
      completion: 82,
    },
    {
      name: "Education",
      challenges: 4,
      projects: 2,
      completion: 68,
    },
  ];

  const handleDownload = (report) => {
    alert(`Downloading ${report}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
            Reports & Analytics
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Track platform performance, project outcomes and stakeholder
            participation.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 outline-none focus:border-[#159447]"
          >
            <option value="2024-25">2024-25</option>
            <option value="2025-26">2025-26</option>
            <option value="2026-27">2026-27</option>
          </select>

          <button
            onClick={() =>
              handleDownload(`Government Report ${period}`)
            }
            className="inline-flex items-center gap-2 rounded-xl bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
          >
            <Download size={17} />
            Export Report
          </button>
        </div>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Challenges Published
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#092752]">
                42
              </h2>

              <p className="mt-2 text-xs font-medium text-[#159447]">
                +18% from previous year
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-3 text-[#092752]">
              <Target size={24} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Active Projects
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#159447]">
                18
              </h2>

              <p className="mt-2 text-xs font-medium text-[#159447]">
                +12% from previous year
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 text-[#159447]">
              <FolderKanban size={24} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Solutions Delivered
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#092752]">
                27
              </h2>

              <p className="mt-2 text-xs font-medium text-[#159447]">
                +24% from previous year
              </p>
            </div>

            <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
              <Award size={24} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Average Completion
              </p>

              <h2 className="mt-2 text-3xl font-bold text-orange-600">
                72%
              </h2>

              <p className="mt-2 text-xs font-medium text-[#159447]">
                +8% improvement
              </p>
            </div>

            <div className="rounded-xl bg-orange-50 p-3 text-orange-600">
              <TrendingUp size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Stakeholder Overview */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-[#092752] p-5 text-white">
          <div className="flex items-center gap-3">
            <GraduationCap size={22} />
            <div>
              <p className="text-xs text-slate-300">
                Universities
              </p>
              <p className="mt-1 text-2xl font-bold">12</p>
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-300">
            Participating institutions
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3">
            <Building2 size={22} className="text-[#159447]" />

            <div>
              <p className="text-xs text-slate-500">
                Industry Partners
              </p>
              <p className="mt-1 text-2xl font-bold text-[#092752]">
                09
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Active industry organizations
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3">
            <Users size={22} className="text-[#159447]" />

            <div>
              <p className="text-xs text-slate-500">
                Student Participants
              </p>
              <p className="mt-1 text-2xl font-bold text-[#092752]">
                486
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Students working on projects
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={22} className="text-[#159447]" />

            <div>
              <p className="text-xs text-slate-500">
                Success Rate
              </p>
              <p className="mt-1 text-2xl font-bold text-[#092752]">
                86%
              </p>
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Successfully completed projects
          </p>
        </div>
      </div>

      {/* Monthly Performance */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#092752]">
              Monthly Performance
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Platform activity during the selected financial year.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#092752]" />
              Challenges
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#159447]" />
              Projects
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />
              Solutions
            </span>
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <div className="flex min-w-[650px] items-end justify-between gap-5 px-4">
            {monthlyData.map((item) => (
              <div
                key={item.month}
                className="flex flex-1 flex-col items-center"
              >
                <div className="flex h-64 items-end gap-1.5">
                  <div
                    className="w-5 rounded-t-md bg-[#092752]"
                    style={{
                      height: `${item.challenges * 22}px`,
                    }}
                    title={`Challenges: ${item.challenges}`}
                  />

                  <div
                    className="w-5 rounded-t-md bg-[#159447]"
                    style={{
                      height: `${item.projects * 22}px`,
                    }}
                    title={`Projects: ${item.projects}`}
                  />

                  <div
                    className="w-5 rounded-t-md bg-orange-500"
                    style={{
                      height: `${item.solutions * 22}px`,
                    }}
                    title={`Solutions: ${item.solutions}`}
                  />
                </div>

                <p className="mt-3 text-xs font-semibold text-slate-500">
                  {item.month}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Department Performance */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div>
          <h2 className="text-lg font-bold text-[#092752]">
            Department Performance
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Challenge and project performance across government
            departments.
          </p>
        </div>

        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead>
              <tr className="border-b border-slate-100 text-xs uppercase text-slate-400">
                <th className="px-4 py-3 font-semibold">
                  Department
                </th>
                <th className="px-4 py-3 font-semibold">
                  Challenges
                </th>
                <th className="px-4 py-3 font-semibold">
                  Projects
                </th>
                <th className="px-4 py-3 font-semibold">
                  Completion
                </th>
                <th className="px-4 py-3 font-semibold">
                  Performance
                </th>
              </tr>
            </thead>

            <tbody>
              {departments.map((department) => (
                <tr
                  key={department.name}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="px-4 py-4">
                    <p className="font-semibold text-[#092752]">
                      {department.name}
                    </p>
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {department.challenges}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-600">
                    {department.projects}
                  </td>

                  <td className="px-4 py-4">
                    <span className="font-semibold text-[#159447]">
                      {department.completion}%
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className="h-full rounded-full bg-[#159447]"
                          style={{
                            width: `${department.completion}%`,
                          }}
                        />
                      </div>

                      <span className="text-xs font-medium text-slate-500">
                        {department.completion >= 75
                          ? "Excellent"
                          : "Good"}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reports */}
      <div>
        <div className="mb-4">
          <h2 className="text-lg font-bold text-[#092752]">
            Available Reports
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Download detailed reports for government review and
            decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "Project Performance Report",
              description:
                "Detailed progress and milestone analysis.",
              icon: TrendingUp,
            },
            {
              title: "University Participation Report",
              description:
                "University engagement and student participation.",
              icon: GraduationCap,
            },
            {
              title: "Industry Partnership Report",
              description:
                "Industry contributions, experts and projects.",
              icon: Building2,
            },
            {
              title: "Challenge Impact Report",
              description:
                "Challenge outcomes and delivered solutions.",
              icon: Target,
            },
            {
              title: "Student Engagement Report",
              description:
                "Student teams, participation and project activity.",
              icon: Users,
            },
            {
              title: "Annual Government Report",
              description:
                "Complete SocioSolve performance summary.",
              icon: BarChart3,
            },
          ].map((report) => {
            const Icon = report.icon;

            return (
              <div
                key={report.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#159447]">
                    <Icon size={21} />
                  </div>

                  <button
                    onClick={() => handleDownload(report.title)}
                    className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-[#159447] hover:text-[#159447]"
                    title="Download report"
                  >
                    <Download size={17} />
                  </button>
                </div>

                <h3 className="mt-4 font-bold text-[#092752]">
                  {report.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {report.description}
                </p>

                <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                  <CalendarDays size={14} />
                  Financial Year {period}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Insight */}
      <div className="rounded-2xl bg-[#092752] p-6 text-white">
        <div className="flex items-start gap-3">
          <BarChart3 size={23} className="mt-0.5" />

          <div>
            <h3 className="font-bold">Key Insight</h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Project participation and solution delivery have shown
              consistent growth during the current financial year.
              Water Resources and Urban Development departments are
              currently showing the strongest project completion rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsAnalytics;