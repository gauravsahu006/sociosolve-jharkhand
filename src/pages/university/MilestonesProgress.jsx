import React, { useState } from "react";
import {
  CheckCircle2,
  Clock3,
  Circle,
  CalendarDays,
  TrendingUp,
  FolderKanban,
  Users,
  AlertCircle,
} from "lucide-react";

const MilestonesProgress = () => {
  const [selectedProject, setSelectedProject] = useState("All Projects");

  // project milestone data
  const projects = [
    {
      id: 1,
      name: "Smart Waste Management",
      team: "Team Innovators",
      progress: 78,
      deadline: "30 Sep 2023",
      status: "On Track",
      milestones: [
        {
          name: "Problem Research",
          date: "10 Aug 2023",
          status: "Completed",
        },
        {
          name: "Requirement Analysis",
          date: "18 Aug 2023",
          status: "Completed",
        },
        {
          name: "Prototype Development",
          date: "05 Sep 2023",
          status: "Completed",
        },
        {
          name: "Testing & Validation",
          date: "20 Sep 2023",
          status: "In Progress",
        },
        {
          name: "Final Submission",
          date: "30 Sep 2023",
          status: "Upcoming",
        },
      ],
    },
    {
      id: 2,
      name: "Water Quality Monitoring",
      team: "Eco Warriors",
      progress: 62,
      deadline: "15 Oct 2023",
      status: "On Track",
      milestones: [
        {
          name: "Problem Research",
          date: "15 Aug 2023",
          status: "Completed",
        },
        {
          name: "Hardware Selection",
          date: "28 Aug 2023",
          status: "Completed",
        },
        {
          name: "Prototype Development",
          date: "20 Sep 2023",
          status: "In Progress",
        },
        {
          name: "Field Testing",
          date: "05 Oct 2023",
          status: "Upcoming",
        },
        {
          name: "Final Submission",
          date: "15 Oct 2023",
          status: "Upcoming",
        },
      ],
    },
    {
      id: 3,
      name: "Rural Healthcare Access",
      team: "Rural Connect",
      progress: 45,
      deadline: "25 Oct 2023",
      status: "Needs Attention",
      milestones: [
        {
          name: "Problem Research",
          date: "20 Aug 2023",
          status: "Completed",
        },
        {
          name: "User Interviews",
          date: "05 Sep 2023",
          status: "Completed",
        },
        {
          name: "Solution Design",
          date: "20 Sep 2023",
          status: "In Progress",
        },
        {
          name: "Prototype Development",
          date: "10 Oct 2023",
          status: "Upcoming",
        },
        {
          name: "Final Submission",
          date: "25 Oct 2023",
          status: "Upcoming",
        },
      ],
    },
  ];

  // selected project
  const activeProject =
    selectedProject === "All Projects"
      ? projects[0]
      : projects.find(
          (project) => project.name === selectedProject
        );

  // milestone statistics
  const completedMilestones = projects.reduce(
    (total, project) =>
      total +
      project.milestones.filter(
        (milestone) => milestone.status === "Completed"
      ).length,
    0
  );

  const inProgressMilestones = projects.reduce(
    (total, project) =>
      total +
      project.milestones.filter(
        (milestone) => milestone.status === "In Progress"
      ).length,
    0
  );

  const upcomingMilestones = projects.reduce(
    (total, project) =>
      total +
      project.milestones.filter(
        (milestone) => milestone.status === "Upcoming"
      ).length,
    0
  );

  const getMilestoneIcon = (status) => {
    if (status === "Completed") {
      return (
        <CheckCircle2
          size={22}
          className="text-emerald-500"
        />
      );
    }

    if (status === "In Progress") {
      return (
        <Clock3
          size={22}
          className="text-[#159447]"
        />
      );
    }

    return (
      <Circle
        size={22}
        className="text-slate-300"
      />
    );
  };

  const getMilestoneStyle = (status) => {
    if (status === "Completed") {
      return "border-emerald-100 bg-emerald-50";
    }

    if (status === "In Progress") {
      return "border-green-100 bg-green-50";
    }

    return "border-slate-100 bg-slate-50";
  };

  return (
    <div className="space-y-6">

      {/* page header */}
      <div>
        <p className="text-sm font-medium text-[#159447]">
          Project Management
        </p>

        <h1 className="mt-1 text-2xl font-bold text-[#092752] sm:text-3xl">
          Milestones & Progress
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Track project milestones, deadlines and overall progress.
        </p>
      </div>

      {/* statistics */}
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Projects
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#092752]">
                {projects.length}
              </h3>
            </div>

            <div className="rounded-xl bg-green-50 p-3 text-[#159447]">
              <FolderKanban size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Completed
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#092752]">
                {completedMilestones}
              </h3>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
              <CheckCircle2 size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                In Progress
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#092752]">
                {inProgressMilestones}
              </h3>
            </div>

            <div className="rounded-xl bg-green-50 p-3 text-[#159447]">
              <TrendingUp size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Upcoming
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#092752]">
                {upcomingMilestones}
              </h3>
            </div>

            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <CalendarDays size={22} />
            </div>
          </div>
        </div>

      </div>

      {/* project selector */}
      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 className="font-semibold text-[#092752]">
              Project Progress
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Select a project to view its milestones.
            </p>
          </div>

          <select
            value={selectedProject}
            onChange={(event) =>
              setSelectedProject(event.target.value)
            }
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-[#159447] focus:ring-2 focus:ring-green-100"
          >
            <option>All Projects</option>

            {projects.map((project) => (
              <option
                key={project.id}
                value={project.name}
              >
                {project.name}
              </option>
            ))}
          </select>

        </div>
      </div>

      {/* project overview */}
      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-6">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-[#159447]">
              <FolderKanban size={23} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#092752]">
                {activeProject.name}
              </h2>

              <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-500">

                <span className="inline-flex items-center gap-1.5">
                  <Users size={14} />
                  {activeProject.team}
                </span>

                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={14} />
                  Deadline: {activeProject.deadline}
                </span>

              </div>
            </div>
          </div>

          <div className="min-w-[180px]">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">
                Overall Progress
              </span>

              <span className="text-lg font-bold text-[#159447]">
                {activeProject.progress}%
              </span>
            </div>

            <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-[#159447]"
                style={{
                  width: `${activeProject.progress}%`,
                }}
              />
            </div>
          </div>

        </div>

        {/* status warning */}
        {activeProject.status === "Needs Attention" && (
          <div className="mt-5 flex items-start gap-3 rounded-xl bg-amber-50 p-4 text-amber-700">
            <AlertCircle
              size={19}
              className="mt-0.5 shrink-0"
            />

            <div>
              <p className="text-sm font-semibold">
                Project needs attention
              </p>

              <p className="mt-1 text-xs">
                Some milestones may require additional review
                to stay on schedule.
              </p>
            </div>
          </div>
        )}

      </div>

      {/* milestone timeline */}
      <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 sm:p-6">

        <div className="mb-6">
          <h2 className="text-lg font-bold text-[#092752]">
            Milestone Timeline
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Track each stage of the selected project.
          </p>
        </div>

        <div className="relative space-y-4">

          {activeProject.milestones.map(
            (milestone, index) => (
              <div
                key={milestone.name}
                className="relative flex gap-4"
              >

                {/* timeline line */}
                {index !==
                  activeProject.milestones.length - 1 && (
                  <div className="absolute left-[10px] top-9 h-[calc(100%+16px)] w-px bg-slate-200" />
                )}

                {/* icon */}
                <div className="relative z-10 shrink-0 bg-white">
                  {getMilestoneIcon(milestone.status)}
                </div>

                {/* milestone card */}
                <div
                  className={`flex-1 rounded-xl border p-4 ${getMilestoneStyle(
                    milestone.status
                  )}`}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                      <h3 className="font-semibold text-[#092752]">
                        {milestone.name}
                      </h3>

                      <div className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                        <CalendarDays size={13} />
                        {milestone.date}
                      </div>
                    </div>

                    <span
                      className={`w-fit rounded-full px-2.5 py-1 text-xs font-semibold ${
                        milestone.status === "Completed"
                          ? "bg-emerald-100 text-emerald-700"
                          : milestone.status ===
                            "In Progress"
                          ? "bg-green-100 text-[#159447]"
                          : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {milestone.status}
                    </span>

                  </div>
                </div>

              </div>
            )
          )}

        </div>
      </div>

      {/* all projects progress */}
      <div>
        <h2 className="mb-4 text-lg font-bold text-[#092752]">
          All Projects
        </h2>

        <div className="grid gap-4 lg:grid-cols-3">

          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() =>
                setSelectedProject(project.name)
              }
              className="text-left rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
            >

              <div className="flex items-start justify-between gap-3">

                <div>
                  <h3 className="font-semibold text-[#092752]">
                    {project.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {project.team}
                  </p>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    project.status === "Needs Attention"
                      ? "bg-amber-50 text-amber-700"
                      : "bg-green-50 text-[#159447]"
                  }`}
                >
                  {project.status}
                </span>

              </div>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Progress
                  </span>

                  <span className="text-sm font-bold text-[#159447]">
                    {project.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-[#159447]"
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>
                  Deadline
                </span>

                <span className="font-medium text-slate-700">
                  {project.deadline}
                </span>
              </div>

            </button>
          ))}

        </div>
      </div>

    </div>
  );
};

export default MilestonesProgress;