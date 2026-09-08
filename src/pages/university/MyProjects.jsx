import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  FolderKanban,
  Users,
  Calendar,
  ArrowRight,
  Clock3,
  CheckCircle2,
  PauseCircle,
  PlayCircle,
} from "lucide-react";

const MyProjects = () => {
  const navigate = useNavigate();

  // project data
  const projects = [
    {
      id: 1,
      title: "Smart Waste Management System",
      challenge: "Smart Waste Management System",
      category: "Environment",
      status: "In Progress",
      progress: 68,
      team: "EcoTech Team",
      members: 5,
      deadline: "30 Sep 2026",
      description:
        "AI-powered waste collection and monitoring platform for urban areas.",
    },
    {
      id: 2,
      title: "Rural Healthcare Access Platform",
      challenge: "Rural Healthcare Access Platform",
      category: "Healthcare",
      status: "In Progress",
      progress: 45,
      team: "HealthConnect",
      members: 4,
      deadline: "15 Oct 2026",
      description:
        "Digital platform connecting rural citizens with healthcare services.",
    },
    {
      id: 3,
      title: "Digital Education Platform",
      challenge: "Digital Education for Rural Students",
      category: "Education",
      status: "Completed",
      progress: 100,
      team: "EduBridge",
      members: 6,
      deadline: "20 Aug 2026",
      description:
        "Low-bandwidth digital learning platform for rural students.",
    },
    {
      id: 4,
      title: "Smart Water Monitoring",
      challenge: "Smart Water Monitoring",
      category: "Infrastructure",
      status: "On Hold",
      progress: 25,
      team: "AquaTech",
      members: 4,
      deadline: "10 Nov 2026",
      description:
        "IoT-based system for monitoring water quality and availability.",
    },
  ];

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.category.toLowerCase().includes(search.toLowerCase()) ||
        project.team.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        project.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  // status style
  const getStatusStyle = (status) => {
    if (status === "Completed") {
      return "bg-green-50 text-green-700";
    }

    if (status === "On Hold") {
      return "bg-orange-50 text-orange-700";
    }

    return "bg-blue-50 text-blue-700";
  };

  // status icon
  const getStatusIcon = (status) => {
    if (status === "Completed") {
      return <CheckCircle2 size={15} />;
    }

    if (status === "On Hold") {
      return <PauseCircle size={15} />;
    }

    return <PlayCircle size={15} />;
  };

  // open workspace
  const handleOpenWorkspace = (projectId) => {
    navigate(`/university/projects/${projectId}/workspace`);
  };

  return (
    <div className="space-y-6">

      {/* =========================
          Page Header
      ========================= */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-50 p-3 text-[#159447]">
              <FolderKanban size={23} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-[#092752]">
                My Projects
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Manage and track all your university projects.
              </p>
            </div>
          </div>
        </div>

        {/* Project count */}
        <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
          <p className="text-xs text-slate-500">
            Total Projects
          </p>

          <p className="mt-1 text-xl font-bold text-[#092752]">
            {projects.length}
          </p>
        </div>

      </div>

      {/* =========================
          Statistics
      ========================= */}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Total Projects
          </p>

          <p className="mt-2 text-2xl font-bold text-[#092752]">
            {projects.length}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Active
          </p>

          <p className="mt-2 text-2xl font-bold text-blue-600">
            {
              projects.filter(
                (project) => project.status === "In Progress"
              ).length
            }
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Completed
          </p>

          <p className="mt-2 text-2xl font-bold text-[#159447]">
            {
              projects.filter(
                (project) => project.status === "Completed"
              ).length
            }
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Student Teams
          </p>

          <p className="mt-2 text-2xl font-bold text-[#092752]">
            {projects.reduce(
              (total, project) => total + project.members,
              0
            )}
          </p>
        </div>

      </div>

      {/* =========================
          Search & Filters
      ========================= */}

      <section className="rounded-2xl bg-white p-4 shadow-sm sm:p-5">

        <div className="flex flex-col gap-3 lg:flex-row">

          {/* Search */}
          <div className="relative flex-1">

            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search projects, categories or teams..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#159447] focus:bg-white focus:ring-2 focus:ring-green-100"
            />

          </div>

          {/* Status Filter */}
          <div className="relative lg:w-52">

            <Filter
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              value={statusFilter}
              onChange={(event) =>
                setStatusFilter(event.target.value)
              }
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#159447] focus:bg-white"
            >
              <option value="All">
                All Status
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Completed">
                Completed
              </option>

              <option value="On Hold">
                On Hold
              </option>
            </select>

          </div>

        </div>

      </section>

      {/* =========================
          Project Cards
      ========================= */}

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
            >

              {/* Card Header */}
              <div className="flex items-start justify-between gap-4">

                <div className="flex min-w-0 gap-3">

                  <div className="hidden rounded-xl bg-green-50 p-3 text-[#159447] sm:flex">
                    <FolderKanban size={21} />
                  </div>

                  <div className="min-w-0">

                    <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {project.category}
                    </span>

                    <h2 className="mt-3 text-lg font-bold text-[#092752]">
                      {project.title}
                    </h2>

                  </div>

                </div>

                {/* Status */}
                <span
                  className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${getStatusStyle(
                    project.status
                  )}`}
                >
                  {getStatusIcon(project.status)}
                  {project.status}
                </span>

              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {project.description}
              </p>

              {/* Progress */}
              <div className="mt-5">

                <div className="mb-2 flex items-center justify-between">

                  <span className="text-sm font-medium text-slate-700">
                    Project Progress
                  </span>

                  <span className="text-sm font-bold text-[#159447]">
                    {project.progress}%
                  </span>

                </div>

                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">

                  <div
                    className="h-full rounded-full bg-[#159447] transition-all duration-500"
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />

                </div>

              </div>

              {/* Project Information */}
              <div className="mt-5 grid grid-cols-1 gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">

                {/* Team */}
                <div className="flex items-center gap-2">

                  <Users
                    size={17}
                    className="shrink-0 text-slate-400"
                  />

                  <div>
                    <p className="text-[11px] text-slate-400">
                      Team
                    </p>

                    <p className="text-xs font-semibold text-slate-700">
                      {project.team}
                    </p>
                  </div>

                </div>

                {/* Members */}
                <div className="flex items-center gap-2">

                  <Users
                    size={17}
                    className="shrink-0 text-slate-400"
                  />

                  <div>
                    <p className="text-[11px] text-slate-400">
                      Members
                    </p>

                    <p className="text-xs font-semibold text-slate-700">
                      {project.members} Students
                    </p>
                  </div>

                </div>

                {/* Deadline */}
                <div className="flex items-center gap-2">

                  <Calendar
                    size={17}
                    className="shrink-0 text-slate-400"
                  />

                  <div>
                    <p className="text-[11px] text-slate-400">
                      Deadline
                    </p>

                    <p className="text-xs font-semibold text-slate-700">
                      {project.deadline}
                    </p>
                  </div>

                </div>

              </div>

              {/* Action */}
              <div className="mt-5 flex justify-end">

                <button
                  type="button"
                  onClick={() =>
                    handleOpenWorkspace(project.id)
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
                >
                  Open Workspace
                  <ArrowRight size={17} />
                </button>

              </div>

            </article>
          ))}

        </div>
      ) : (
        /* =========================
           Empty State
        ========================= */

        <div className="rounded-2xl bg-white px-5 py-16 text-center shadow-sm">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <FolderKanban size={26} />
          </div>

          <h3 className="mt-4 text-lg font-bold text-[#092752]">
            No projects found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            Try changing your search or status filter to find
            the project you are looking for.
          </p>

        </div>
      )}

    </div>
  );
};

export default MyProjects;