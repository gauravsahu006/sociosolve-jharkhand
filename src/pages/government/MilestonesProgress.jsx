import React, { useMemo, useState } from "react";
import {
  TrendingUp,
  Search,
  FolderKanban,
  CheckCircle2,
  Clock3,
  AlertTriangle,
  CalendarDays,
  Building2,
  GraduationCap,
  Eye,
} from "lucide-react";

const MilestonesProgress = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const projects = [
    {
      id: 1,
      name: "Smart Water Management System",
      challenge: "Water Conservation in Urban Areas",
      university: "BIT Mesra",
      industry: "Tata Steel Ltd.",
      progress: 82,
      milestone: "Testing & Validation",
      status: "On Track",
      deadline: "30 Sep 2026",
      completed: 5,
      total: 6,
    },
    {
      id: 2,
      name: "AI Crop Disease Detection",
      challenge: "Improving Agricultural Productivity",
      university: "NIT Jamshedpur",
      industry: "Infosys",
      progress: 68,
      milestone: "Prototype Development",
      status: "On Track",
      deadline: "15 Oct 2026",
      completed: 4,
      total: 6,
    },
    {
      id: 3,
      name: "Smart Traffic Monitoring",
      challenge: "Urban Traffic Optimization",
      university: "XISS Ranchi",
      industry: "Tech Mahindra",
      progress: 54,
      milestone: "Research & Development",
      status: "Delayed",
      deadline: "05 Oct 2026",
      completed: 3,
      total: 6,
    },
    {
      id: 4,
      name: "Rural Healthcare Platform",
      challenge: "Digital Healthcare Access",
      university: "IIT (ISM) Dhanbad",
      industry: "TCS",
      progress: 76,
      milestone: "Field Testing",
      status: "On Track",
      deadline: "20 Sep 2026",
      completed: 5,
      total: 6,
    },
    {
      id: 5,
      name: "Waste Segregation System",
      challenge: "Smart Waste Management",
      university: "BIT Sindri",
      industry: "Jindal Steel & Power",
      progress: 41,
      milestone: "Prototype Development",
      status: "At Risk",
      deadline: "25 Oct 2026",
      completed: 2,
      total: 6,
    },
    {
      id: 6,
      name: "Renewable Energy Monitoring",
      challenge: "Clean Energy Adoption",
      university: "Ranchi University",
      industry: "Adani Group",
      progress: 32,
      milestone: "Research",
      status: "At Risk",
      deadline: "10 Nov 2026",
      completed: 2,
      total: 6,
    },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.challenge.toLowerCase().includes(search.toLowerCase()) ||
        project.university.toLowerCase().includes(search.toLowerCase()) ||
        project.industry.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || project.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [projects, search, statusFilter]);

  const stats = {
    total: projects.length,
    onTrack: projects.filter((p) => p.status === "On Track").length,
    delayed: projects.filter((p) => p.status === "Delayed").length,
    atRisk: projects.filter((p) => p.status === "At Risk").length,
  };

  const getStatusStyle = (status) => {
    if (status === "On Track") {
      return "bg-emerald-50 text-[#159447]";
    }

    if (status === "Delayed") {
      return "bg-orange-50 text-orange-600";
    }

    return "bg-red-50 text-red-600";
  };

  const getProgressStyle = (progress) => {
    if (progress >= 70) {
      return "bg-[#159447]";
    }

    if (progress >= 50) {
      return "bg-orange-500";
    }

    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
          Milestones & Progress
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Monitor project milestones, deadlines and overall implementation
          progress.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Projects</p>
              <h2 className="mt-2 text-3xl font-bold text-[#092752]">
                18
              </h2>
            </div>

            <div className="rounded-xl bg-blue-50 p-3 text-[#092752]">
              <FolderKanban size={24} />
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Projects currently monitored
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">On Track</p>
              <h2 className="mt-2 text-3xl font-bold text-[#159447]">
                13
              </h2>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 text-[#159447]">
              <CheckCircle2 size={24} />
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Projects progressing normally
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Delayed</p>
              <h2 className="mt-2 text-3xl font-bold text-orange-600">
                03
              </h2>
            </div>

            <div className="rounded-xl bg-orange-50 p-3 text-orange-600">
              <Clock3 size={24} />
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Projects requiring attention
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">At Risk</p>
              <h2 className="mt-2 text-3xl font-bold text-red-600">
                02
              </h2>
            </div>

            <div className="rounded-xl bg-red-50 p-3 text-red-600">
              <AlertTriangle size={24} />
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Immediate review required
          </p>
        </div>
      </div>

      {/* Overall Progress */}
      <div className="rounded-2xl bg-[#092752] p-6 text-white">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <TrendingUp size={21} />
              <h2 className="font-bold">Overall Project Progress</h2>
            </div>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Government officers can monitor the implementation status of
              all active university-industry projects from this dashboard.
            </p>
          </div>

          <div className="text-left lg:text-right">
            <p className="text-4xl font-bold">64%</p>
            <p className="mt-1 text-sm text-slate-300">
              Average completion
            </p>
          </div>
        </div>

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-[64%] rounded-full bg-[#159447]" />
        </div>
      </div>

      {/* Search & Filters */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search project, challenge, university or industry..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#159447] focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#159447]"
          >
            <option value="All">All Status</option>
            <option value="On Track">On Track</option>
            <option value="Delayed">Delayed</option>
            <option value="At Risk">At Risk</option>
          </select>
        </div>
      </div>

      {/* Project Progress List */}
      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex flex-col gap-5">
              {/* Project Header */}
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#159447]">
                    <FolderKanban size={23} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-[#092752]">
                        {project.name}
                      </h3>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      {project.challenge}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() =>
                    alert(`Viewing progress for ${project.name}`)
                  }
                  className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#159447] hover:text-[#159447]"
                >
                  <Eye size={16} />
                  View
                </button>
              </div>

              {/* Progress */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">
                    Project Progress
                  </span>

                  <span className="text-sm font-bold text-[#092752]">
                    {project.progress}%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full transition-all ${getProgressStyle(
                      project.progress
                    )}`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 gap-3 border-t border-slate-100 pt-4 sm:grid-cols-2 xl:grid-cols-4">
                <div className="flex items-center gap-3">
                  <GraduationCap
                    size={18}
                    className="text-[#159447]"
                  />

                  <div>
                    <p className="text-xs text-slate-400">University</p>
                    <p className="text-sm font-semibold text-slate-700">
                      {project.university}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Building2
                    size={18}
                    className="text-[#159447]"
                  />

                  <div>
                    <p className="text-xs text-slate-400">Industry</p>
                    <p className="text-sm font-semibold text-slate-700">
                      {project.industry}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <TrendingUp
                    size={18}
                    className="text-[#159447]"
                  />

                  <div>
                    <p className="text-xs text-slate-400">
                      Current Milestone
                    </p>
                    <p className="text-sm font-semibold text-slate-700">
                      {project.milestone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDays
                    size={18}
                    className="text-[#159447]"
                  />

                  <div>
                    <p className="text-xs text-slate-400">Deadline</p>
                    <p className="text-sm font-semibold text-slate-700">
                      {project.deadline}
                    </p>
                  </div>
                </div>
              </div>

              {/* Milestone Count */}
              <div className="flex flex-col gap-2 rounded-xl bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#092752]">
                    Milestone Completion
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {project.completed} of {project.total} milestones
                    completed
                  </p>
                </div>

                <div className="flex gap-1.5">
                  {Array.from({ length: project.total }).map(
                    (_, index) => (
                      <div
                        key={index}
                        className={`h-2.5 w-8 rounded-full ${
                          index < project.completed
                            ? "bg-[#159447]"
                            : "bg-slate-200"
                        }`}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <FolderKanban
              size={42}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-3 text-lg font-semibold text-[#092752]">
              No projects found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or status filter.
            </p>
          </div>
        )}
      </div>

      {/* Alerts */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">
          <div className="flex items-center gap-3">
            <Clock3 className="text-orange-600" size={21} />

            <h3 className="font-bold text-orange-800">
              Delayed Projects
            </h3>
          </div>

          <p className="mt-2 text-sm leading-6 text-orange-700">
            3 projects are currently behind their planned milestones.
            Government officers should coordinate with universities and
            industry partners for corrective action.
          </p>
        </div>

        <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-red-600" size={21} />

            <h3 className="font-bold text-red-800">
              Projects At Risk
            </h3>
          </div>

          <p className="mt-2 text-sm leading-6 text-red-700">
            2 projects require immediate review because their progress is
            significantly below the expected timeline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MilestonesProgress;