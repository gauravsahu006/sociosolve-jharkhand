import React, { useMemo, useState } from "react";
import {
  Search,
  FolderKanban,
  Users,
  CalendarDays,
  Clock3,
  CheckCircle2,
  PauseCircle,
  ArrowUpRight,
  TrendingUp,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const MyProjects = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const projects = [
    {
      id: 1,
      name: "Smart Waste Management",
      challenge: "Smart Waste Management System",
      team: "BIT Mesra Innovation Team",
      mentor: "Dr. Priya Singh",
      progress: 78,
      status: "In Progress",
      startDate: "05 Sep 2026",
      deadline: "30 Sep 2026",
      members: 6,
      description:
        "Intelligent waste monitoring and collection optimization solution for urban areas.",
    },
    {
      id: 2,
      name: "Industrial Water Monitoring",
      challenge: "Industrial Water Quality Monitoring",
      team: "NIT Jamshedpur Team",
      mentor: "Prof. Anil Verma",
      progress: 56,
      status: "In Progress",
      startDate: "10 Sep 2026",
      deadline: "15 Oct 2026",
      members: 5,
      description:
        "Real-time water quality monitoring and contamination detection platform.",
    },
    {
      id: 3,
      name: "Energy Efficiency Dashboard",
      challenge: "Renewable Energy Monitoring",
      team: "XLRI Student Team",
      mentor: "Dr. Neha Gupta",
      progress: 92,
      status: "Final Review",
      startDate: "20 Aug 2026",
      deadline: "12 Sep 2026",
      members: 4,
      description:
        "Analytics dashboard for monitoring renewable energy generation and efficiency.",
    },
    {
      id: 4,
      name: "Rural Healthcare Connect",
      challenge: "Rural Healthcare Access Platform",
      team: "BIT Sindri HealthTech Team",
      mentor: "Dr. Rakesh Kumar",
      progress: 100,
      status: "Completed",
      startDate: "01 Jul 2026",
      deadline: "25 Aug 2026",
      members: 7,
      description:
        "Digital healthcare access platform connecting rural communities with services.",
    },
    {
      id: 5,
      name: "Smart Logistics Platform",
      challenge: "Agricultural Supply Chain Optimization",
      team: "IIT (ISM) Dhanbad Team",
      mentor: "Prof. S. Chatterjee",
      progress: 34,
      status: "On Hold",
      startDate: "15 Aug 2026",
      deadline: "30 Oct 2026",
      members: 5,
      description:
        "Technology-driven platform for improving agricultural supply chain efficiency.",
    },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        project.name.toLowerCase().includes(searchValue) ||
        project.challenge.toLowerCase().includes(searchValue) ||
        project.team.toLowerCase().includes(searchValue);

      const matchesStatus =
        status === "All" || project.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  const stats = [
    {
      title: "Total Projects",
      value: projects.length,
      icon: FolderKanban,
    },
    {
      title: "In Progress",
      value: projects.filter(
        (project) => project.status === "In Progress"
      ).length,
      icon: TrendingUp,
    },
    {
      title: "Completed",
      value: projects.filter(
        (project) => project.status === "Completed"
      ).length,
      icon: CheckCircle2,
    },
    {
      title: "On Hold",
      value: projects.filter(
        (project) => project.status === "On Hold"
      ).length,
      icon: PauseCircle,
    },
  ];

  const getStatusStyle = (projectStatus) => {
    if (projectStatus === "Completed") {
      return "bg-green-50 text-green-600";
    }

    if (projectStatus === "Final Review") {
      return "bg-blue-50 text-blue-600";
    }

    if (projectStatus === "On Hold") {
      return "bg-yellow-50 text-yellow-700";
    }

    return "bg-orange-50 text-orange-600";
  };

  const getProgressStyle = (projectStatus) => {
    if (projectStatus === "Completed") {
      return "bg-[#159447]";
    }

    if (projectStatus === "Final Review") {
      return "bg-blue-500";
    }

    if (projectStatus === "On Hold") {
      return "bg-yellow-500";
    }

    return "bg-[#159447]";
  };

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <section>
        <p className="text-sm font-semibold text-[#159447]">
          INDUSTRY PROJECTS
        </p>

        <div className="mt-1 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
              My Projects
            </h1>

            <p className="mt-1 max-w-2xl text-sm text-slate-500">
              Track and manage projects being developed with
              university and expert teams.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/industry/challenges")}
            className="flex w-fit items-center gap-2 rounded-lg bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
          >
            <FolderKanban size={17} />
            Find New Challenge
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#159447]/10 text-[#159447]">
                  <Icon size={19} />
                </div>

                <span className="text-2xl font-bold text-[#092752]">
                  {stat.value}
                </span>
              </div>

              <p className="mt-3 text-xs font-semibold text-slate-500">
                {stat.title}
              </p>
            </div>
          );
        })}
      </section>

      {/* Filters */}
      <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row">

          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects, challenges or teams..."
              className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
            />
          </div>

          {/* Status */}
          <div className="flex flex-wrap gap-2">
            {[
              "All",
              "In Progress",
              "Final Review",
              "Completed",
              "On Hold",
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setStatus(item)}
                className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                  status === item
                    ? "bg-[#159447] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-green-50 hover:text-[#159447]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Clear */}
          {(search || status !== "All") && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setStatus("All");
              }}
              className="flex items-center justify-center gap-1 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
            >
              <X size={14} />
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Project Cards */}
      <section>
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#159447]/40 hover:shadow-md sm:p-6"
              >
                {/* Top */}
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div className="flex gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#159447]/10 text-[#159447]">
                      <FolderKanban size={20} />
                    </div>

                    <div>
                      <h2 className="text-base font-bold text-[#092752]">
                        {project.name}
                      </h2>

                      <p className="mt-1 text-xs text-slate-500">
                        {project.challenge}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`w-fit rounded-full px-2.5 py-1 text-[10px] font-bold ${getStatusStyle(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs leading-5 text-slate-500">
                  {project.description}
                </p>

                {/* Progress */}
                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">
                      Project Progress
                    </span>

                    <span className="text-sm font-bold text-[#092752]">
                      {project.progress}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full rounded-full transition-all ${getProgressStyle(
                        project.status
                      )}`}
                      style={{
                        width: `${project.progress}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="mt-5 grid grid-cols-1 gap-3 border-t border-slate-100 pt-4 sm:grid-cols-2">

                  <div className="flex items-center gap-2">
                    <Users
                      size={15}
                      className="text-[#159447]"
                    />

                    <div>
                      <p className="text-[9px] text-slate-400">
                        Team
                      </p>

                      <p className="text-[11px] font-semibold text-slate-600">
                        {project.team}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users
                      size={15}
                      className="text-[#159447]"
                    />

                    <div>
                      <p className="text-[9px] text-slate-400">
                        Members
                      </p>

                      <p className="text-[11px] font-semibold text-slate-600">
                        {project.members} Members
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays
                      size={15}
                      className="text-[#159447]"
                    />

                    <div>
                      <p className="text-[9px] text-slate-400">
                        Started
                      </p>

                      <p className="text-[11px] font-semibold text-slate-600">
                        {project.startDate}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3
                      size={15}
                      className="text-[#159447]"
                    />

                    <div>
                      <p className="text-[9px] text-slate-400">
                        Deadline
                      </p>

                      <p className="text-[11px] font-semibold text-slate-600">
                        {project.deadline}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mentor */}
                <div className="mt-4 rounded-lg bg-slate-50 px-3 py-2.5">
                  <p className="text-[9px] text-slate-400">
                    Project Mentor
                  </p>

                  <p className="mt-0.5 text-xs font-semibold text-[#092752]">
                    {project.mentor}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    onClick={() =>
                      navigate(
                        `/industry/projects/${project.id}/workspace`
                      )
                    }
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#159447] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#117C3B]"
                  >
                    Open Workspace
                    <ArrowUpRight size={15} />
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      navigate("/industry/milestones-progress")
                    }
                    className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-600 transition hover:border-[#159447] hover:text-[#159447]"
                  >
                    <TrendingUp size={15} />
                    Progress
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <FolderKanban size={22} />
            </div>

            <h3 className="mt-4 text-base font-bold text-[#092752]">
              No projects found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or status filter.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setStatus("All");
              }}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#159447] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#117C3B]"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default MyProjects;