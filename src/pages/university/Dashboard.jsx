import React from "react";
import {
  Lightbulb,
  FolderKanban,
  Users,
  Send,
  CheckCircle2,
  ArrowRight,
  Upload,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* =========================
   Dashboard Statistics
========================= */

const statistics = [
  {
    title: "Challenges Received",
    value: "12",
    subtitle: "New this month",
    icon: Lightbulb,
  },
  {
    title: "Active Projects",
    value: "8",
    subtitle: "In Progress",
    icon: FolderKanban,
  },
  {
    title: "Student Teams",
    value: "24",
    subtitle: "Working",
    icon: Users,
  },
  {
    title: "Solutions Submitted",
    value: "5",
    subtitle: "This year",
    icon: Send,
  },
  {
    title: "Projects Completed",
    value: "2",
    subtitle: "Implemented",
    icon: CheckCircle2,
  },
];

/* =========================
   Recent Updates
========================= */

const recentUpdates = [
  {
    text: 'Team "EcoBin" submitted prototype for Waste Segregation Smart Bin.',
    time: "2 hours ago",
  },
  {
    text: 'Milestone "Field Testing" completed for Water Logging project.',
    time: "5 hours ago",
  },
  {
    text: 'New challenge assigned: Digital Learning Access.',
    time: "2 days ago",
  },
];

/* =========================
   Dashboard Component
========================= */

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-[1500px] space-y-6">

      {/* =========================
          Welcome Section
      ========================= */}

      <div>
        <h2 className="text-2xl font-extrabold text-[#092752] sm:text-3xl">
          Hello, Dr. Rajeev Kumar 👋
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Here's an overview of your university's
          innovation journey.
        </p>
      </div>

      {/* =========================
          Statistics Cards
      ========================= */}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">

        {statistics.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >

              <div className="flex items-start justify-between">

                <div>
                  <p className="text-xs font-semibold text-slate-500">
                    {stat.title}
                  </p>

                  <p className="mt-2 text-3xl font-extrabold text-[#092752]">
                    {stat.value}
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#159447]/10">
                  <Icon
                    size={18}
                    className="text-[#159447]"
                  />
                </div>

              </div>

              <p className="mt-2 text-[11px] text-slate-400">
                {stat.subtitle}
              </p>

            </div>
          );
        })}

      </div>

      {/* =========================
          Dashboard Main Grid
      ========================= */}

      <div className="grid gap-5 xl:grid-cols-3">

        {/* =========================
            Project Progress
        ========================= */}

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <h3 className="font-extrabold text-[#092752]">
              Project Progress Overview
            </h3>

            <button
              type="button"
              className="text-xs font-semibold text-[#159447]"
              onClick={() =>
                navigate("/university/milestones")
              }
            >
              View All
            </button>

          </div>

          <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">

            {/* Progress Circle */}

            <div
              className="relative flex h-36 w-36 shrink-0 items-center justify-center rounded-full"
              style={{
                background:
                  "conic-gradient(#159447 0% 60%, #2563eb 60% 85%, #f59e0b 85% 100%)",
              }}
            >

              <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white">

                <span className="text-2xl font-extrabold text-[#092752]">
                  8
                </span>

                <span className="text-[10px] text-slate-500">
                  Active Projects
                </span>

              </div>

            </div>

            {/* Legend */}

            <div className="space-y-3 text-xs">

              <div className="flex items-center justify-between gap-5">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#159447]" />
                  Prototype
                </span>

                <b>3 (37.5%)</b>
              </div>

              <div className="flex items-center justify-between gap-5">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Research
                </span>

                <b>2 (25%)</b>
              </div>

              <div className="flex items-center justify-between gap-5">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-orange-400" />
                  Testing
                </span>

                <b>2 (25%)</b>
              </div>

              <div className="flex items-center justify-between gap-5">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  Solution Ready
                </span>

                <b>1 (12.5%)</b>
              </div>

            </div>

          </div>

        </div>

        {/* =========================
            Recent Updates
        ========================= */}

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="flex items-center justify-between">

            <h3 className="font-extrabold text-[#092752]">
              Recent Updates
            </h3>

            <button
              type="button"
              className="text-xs font-semibold text-[#159447]"
              onClick={() =>
                navigate("/university/notifications")
              }
            >
              View All
            </button>

          </div>

          <div className="mt-5 space-y-4">

            {recentUpdates.map(
              (update, index) => (
                <div
                  key={index}
                  className="flex gap-3"
                >

                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#159447]/10">
                    <CheckCircle2
                      size={14}
                      className="text-[#159447]"
                    />
                  </div>

                  <div>

                    <p className="text-xs font-medium leading-5 text-slate-600">
                      {update.text}
                    </p>

                    <p className="mt-1 text-[10px] text-slate-400">
                      {update.time}
                    </p>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

        {/* =========================
            Quick Actions
        ========================= */}

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

          <h3 className="font-extrabold text-[#092752]">
            Quick Actions
          </h3>

          <div className="mt-5 grid gap-3">

            <button
              type="button"
              onClick={() =>
                navigate("/university/challenges")
              }
              className="flex items-center justify-between rounded-lg bg-[#159447] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#117C3B]"
            >
              <span className="flex items-center gap-2">
                <Lightbulb size={17} />
                View Challenges
              </span>

              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={() =>
                navigate("/university/projects")
              }
              className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm font-bold text-[#092752] transition hover:border-[#159447] hover:text-[#159447]"
            >
              <span className="flex items-center gap-2">
                <Plus size={17} />
                Create New Project
              </span>

              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              onClick={() =>
                navigate("/university/student-teams")
              }
              className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm font-bold text-[#092752] transition hover:border-[#159447] hover:text-[#159447]"
            >
              <span className="flex items-center gap-2">
                <Users size={17} />
                Create Student Team
              </span>

              <ArrowRight size={17} />
            </button>

            <button
              type="button"
              className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm font-bold text-[#092752] transition hover:border-[#159447] hover:text-[#159447]"
            >
              <span className="flex items-center gap-2">
                <Upload size={17} />
                Upload Document
              </span>

              <ArrowRight size={17} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;