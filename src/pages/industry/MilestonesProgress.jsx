import React, { useState } from "react";
import {
  CheckCircle2,
  Clock3,
  Circle,
  CalendarDays,
  Target,
  TrendingUp,
  AlertCircle,
  ChevronRight,
  X,
} from "lucide-react";

const MilestonesProgress = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Smart Waste Management",
      challenge: "Smart Waste Management System",
      team: "BIT Mesra Innovation Team",
      progress: 78,
      status: "In Progress",
      deadline: "30 Sep 2026",
    },
    {
      id: 2,
      name: "Industrial Water Monitoring",
      challenge: "Industrial Water Quality Monitoring",
      team: "NIT Jamshedpur Team",
      progress: 56,
      status: "In Progress",
      deadline: "15 Oct 2026",
    },
    {
      id: 3,
      name: "Energy Efficiency Dashboard",
      challenge: "Renewable Energy Monitoring",
      team: "XLRI Student Team",
      progress: 92,
      status: "Final Review",
      deadline: "12 Sep 2026",
    },
  ];

  const milestones = [
    {
      id: 1,
      title: "Problem Understanding & Research",
      description:
        "Understand the industry problem, existing systems and identify key requirements.",
      date: "08 Sep 2026",
      status: "Completed",
      project: "Smart Waste Management",
      owner: "BIT Mesra Innovation Team",
    },
    {
      id: 2,
      title: "Solution Design",
      description:
        "Prepare the architecture, workflow and technical design for the proposed solution.",
      date: "12 Sep 2026",
      status: "Completed",
      project: "Smart Waste Management",
      owner: "BIT Mesra Innovation Team",
    },
    {
      id: 3,
      title: "Prototype Development",
      description:
        "Develop and integrate the first working prototype of the proposed solution.",
      date: "20 Sep 2026",
      status: "In Progress",
      project: "Smart Waste Management",
      owner: "BIT Mesra Innovation Team",
    },
    {
      id: 4,
      title: "Testing & Validation",
      description:
        "Validate system performance using sample datasets and real-world scenarios.",
      date: "26 Sep 2026",
      status: "Pending",
      project: "Smart Waste Management",
      owner: "BIT Mesra Innovation Team",
    },
    {
      id: 5,
      title: "Final Submission",
      description:
        "Submit final documentation, prototype, testing report and presentation.",
      date: "30 Sep 2026",
      status: "Pending",
      project: "Smart Waste Management",
      owner: "BIT Mesra Innovation Team",
    },
  ];

  const getStatusIcon = (status) => {
    if (status === "Completed") {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white">
          <CheckCircle2 size={19} />
        </div>
      );
    }

    if (status === "In Progress") {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600 ring-2 ring-green-200">
          <Clock3 size={19} />
        </div>
      );
    }

    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <Circle size={18} />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Milestones & Progress
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Track project milestones, deadlines and overall progress.
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Overall Progress
              </p>

              <p className="mt-2 text-2xl font-bold text-green-600">
                75%
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-3 text-green-600">
              <TrendingUp size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Completed Milestones
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                18
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <CheckCircle2 size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                In Progress
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                07
              </p>
            </div>

            <div className="rounded-xl bg-yellow-50 p-3 text-yellow-600">
              <Clock3 size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Upcoming Deadlines
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                04
              </p>
            </div>

            <div className="rounded-xl bg-orange-50 p-3 text-orange-500">
              <CalendarDays size={22} />
            </div>
          </div>
        </div>
      </div>

      {/* Project Progress */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Project Progress
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Current progress of active industry projects
          </p>
        </div>

        <div className="mt-6 space-y-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-slate-200 p-4"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold text-slate-900">
                      {project.name}
                    </h3>

                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        project.status === "Final Review"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-green-50 text-green-700"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    {project.team}
                  </p>
                </div>

                <div className="flex items-center gap-5">
                  <div className="text-right">
                    <p className="text-xs text-slate-400">
                      Deadline
                    </p>

                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      {project.deadline}
                    </p>
                  </div>

                  <p className="text-xl font-bold text-green-600">
                    {project.progress}%
                  </p>
                </div>
              </div>

              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-green-600"
                  style={{ width: `${project.progress}%` }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between">
                <p className="text-xs text-slate-400">
                  Challenge: {project.challenge}
                </p>

                <button
                  onClick={() => setSelectedMilestone(project)}
                  className="flex items-center gap-1 text-xs font-semibold text-green-600 hover:text-green-700"
                >
                  View Milestones
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Milestone Timeline */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Current Project Milestones
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Smart Waste Management
          </p>
        </div>

        <div className="mt-7 space-y-6">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className="relative flex gap-4"
            >
              {index !== milestones.length - 1 && (
                <div className="absolute left-5 top-10 h-[calc(100%+1.5rem)] w-px bg-slate-200" />
              )}

              <div className="relative z-10 shrink-0">
                {getStatusIcon(milestone.status)}
              </div>

              <div className="min-w-0 flex-1 pb-2">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {milestone.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      {milestone.project}
                    </p>
                  </div>

                  <span
                    className={`w-fit rounded-full px-2.5 py-1 text-xs font-medium ${
                      milestone.status === "Completed"
                        ? "bg-green-50 text-green-700"
                        : milestone.status === "In Progress"
                        ? "bg-yellow-50 text-yellow-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {milestone.status}
                  </span>
                </div>

                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                  {milestone.description}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={13} />
                    Due {milestone.date}
                  </span>

                  <span>
                    Owner: {milestone.owner}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Warning */}
      <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
        <div className="flex gap-3">
          <AlertCircle
            size={20}
            className="mt-0.5 shrink-0 text-orange-500"
          />

          <div>
            <h3 className="font-semibold text-orange-800">
              Upcoming Milestone
            </h3>

            <p className="mt-1 text-sm leading-6 text-orange-700">
              Prototype Development is currently in progress and is
              due on 20 Sep 2026. Make sure the project team completes
              the prototype before starting final validation.
            </p>
          </div>
        </div>
      </div>

      {/* Milestone Detail Modal */}
      {selectedMilestone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
            <div className="flex items-start justify-between border-b border-slate-100 p-5 sm:p-6">
              <div>
                <p className="text-sm font-medium text-green-600">
                  Project Milestones
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  {selectedMilestone.name}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {selectedMilestone.team}
                </p>
              </div>

              <button
                onClick={() => setSelectedMilestone(null)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={19} />
              </button>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Overall Progress
                  </span>

                  <span className="font-bold text-green-600">
                    {selectedMilestone.progress}%
                  </span>
                </div>

                <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-green-600"
                    style={{
                      width: `${selectedMilestone.progress}%`,
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-xs text-slate-400">
                    Status
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selectedMilestone.status}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-xs text-slate-400">
                    Deadline
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selectedMilestone.deadline}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Challenge
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {selectedMilestone.challenge}
                </p>
              </div>

              <button
                onClick={() => setSelectedMilestone(null)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white hover:bg-green-700"
              >
                <Target size={17} />
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MilestonesProgress;