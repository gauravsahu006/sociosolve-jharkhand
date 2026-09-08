import React, { useMemo, useState } from "react";
import {
  Search,
  FileText,
  CheckCircle2,
  Clock3,
  AlertTriangle,
  Eye,
  Download,
  GraduationCap,
  Building2,
  CalendarDays,
} from "lucide-react";

const Submissions = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [submissions, setSubmissions] = useState([
    {
      id: 1,
      title: "Smart Water Management System",
      challenge: "Water Conservation in Urban Areas",
      university: "BIT Mesra",
      industry: "Tata Steel Ltd.",
      submittedBy: "Team AquaTech",
      submittedOn: "02 Sep 2026",
      deadline: "05 Sep 2026",
      status: "Under Review",
      type: "Final Solution",
    },
    {
      id: 2,
      title: "AI Crop Disease Detection",
      challenge: "Improving Agricultural Productivity",
      university: "NIT Jamshedpur",
      industry: "Infosys",
      submittedBy: "AgriVision Team",
      submittedOn: "30 Aug 2026",
      deadline: "02 Sep 2026",
      status: "Approved",
      type: "Prototype",
    },
    {
      id: 3,
      title: "Smart Traffic Monitoring",
      challenge: "Urban Traffic Optimization",
      university: "XISS Ranchi",
      industry: "Tech Mahindra",
      submittedBy: "TrafficX Team",
      submittedOn: "28 Aug 2026",
      deadline: "01 Sep 2026",
      status: "Changes Required",
      type: "Progress Report",
    },
    {
      id: 4,
      title: "Rural Healthcare Platform",
      challenge: "Digital Healthcare Access",
      university: "IIT (ISM) Dhanbad",
      industry: "TCS",
      submittedBy: "HealthConnect Team",
      submittedOn: "01 Sep 2026",
      deadline: "04 Sep 2026",
      status: "Under Review",
      type: "Final Solution",
    },
    {
      id: 5,
      title: "Waste Segregation System",
      challenge: "Smart Waste Management",
      university: "BIT Sindri",
      industry: "Jindal Steel & Power",
      submittedBy: "EcoSmart Team",
      submittedOn: "25 Aug 2026",
      deadline: "29 Aug 2026",
      status: "Approved",
      type: "Prototype",
    },
    {
      id: 6,
      title: "Renewable Energy Monitoring",
      challenge: "Clean Energy Adoption",
      university: "Ranchi University",
      industry: "Adani Group",
      submittedBy: "GreenPower Team",
      submittedOn: "31 Aug 2026",
      deadline: "05 Sep 2026",
      status: "Changes Required",
      type: "Progress Report",
    },
  ]);

  const filteredSubmissions = useMemo(() => {
    return submissions.filter((submission) => {
      const matchesSearch =
        submission.title.toLowerCase().includes(search.toLowerCase()) ||
        submission.challenge.toLowerCase().includes(search.toLowerCase()) ||
        submission.university.toLowerCase().includes(search.toLowerCase()) ||
        submission.industry.toLowerCase().includes(search.toLowerCase()) ||
        submission.submittedBy.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || submission.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [submissions, search, statusFilter]);

  const stats = {
    total: submissions.length,
    review: submissions.filter(
      (item) => item.status === "Under Review"
    ).length,
    approved: submissions.filter(
      (item) => item.status === "Approved"
    ).length,
    changes: submissions.filter(
      (item) => item.status === "Changes Required"
    ).length,
  };

  const getStatusStyle = (status) => {
    if (status === "Approved") {
      return "bg-emerald-50 text-[#159447]";
    }

    if (status === "Under Review") {
      return "bg-blue-50 text-blue-600";
    }

    return "bg-orange-50 text-orange-600";
  };

  const handleStatusChange = (id, status) => {
    setSubmissions((prev) =>
      prev.map((submission) =>
        submission.id === id
          ? { ...submission, status }
          : submission
      )
    );
  };

  const handleView = (submission) => {
    alert(`Viewing submission: ${submission.title}`);
  };

  const handleDownload = (submission) => {
    alert(`Downloading ${submission.title} submission file`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
          Submissions
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Review project submissions, prototypes and final solutions from
          participating teams.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Submissions
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#092752]">
                27
              </h2>
            </div>

            <div className="rounded-xl bg-blue-50 p-3 text-[#092752]">
              <FileText size={24} />
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Submitted across active projects
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Under Review
              </p>

              <h2 className="mt-2 text-3xl font-bold text-blue-600">
                08
              </h2>
            </div>

            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <Clock3 size={24} />
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Awaiting government review
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Approved</p>

              <h2 className="mt-2 text-3xl font-bold text-[#159447]">
                16
              </h2>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 text-[#159447]">
              <CheckCircle2 size={24} />
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Successfully reviewed submissions
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Changes Required
              </p>

              <h2 className="mt-2 text-3xl font-bold text-orange-600">
                03
              </h2>
            </div>

            <div className="rounded-xl bg-orange-50 p-3 text-orange-600">
              <AlertTriangle size={24} />
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Waiting for revised submissions
          </p>
        </div>
      </div>

      {/* Review Summary */}
      <div className="rounded-2xl bg-[#092752] p-6 text-white">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <FileText size={21} />
              <h2 className="font-bold">
                Submission Review Overview
              </h2>
            </div>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Monitor all project submissions and ensure that teams receive
              timely feedback before final approval.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <div>
              <p className="text-xs text-slate-400">Review</p>
              <p className="mt-1 text-2xl font-bold">{stats.review}</p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Approved</p>
              <p className="mt-1 text-2xl font-bold">{stats.approved}</p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Changes</p>
              <p className="mt-1 text-2xl font-bold">{stats.changes}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search submission, project, university or industry..."
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
            <option value="Under Review">Under Review</option>
            <option value="Approved">Approved</option>
            <option value="Changes Required">
              Changes Required
            </option>
          </select>
        </div>
      </div>

      {/* Submission List */}
      <div className="space-y-4">
        {filteredSubmissions.map((submission) => (
          <div
            key={submission.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            {/* Top */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#159447]">
                  <FileText size={23} />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-[#092752]">
                      {submission.title}
                    </h3>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                        submission.status
                      )}`}
                    >
                      {submission.status}
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    {submission.challenge}
                  </p>

                  <p className="mt-2 text-xs font-medium text-slate-400">
                    {submission.type}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleView(submission)}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-[#159447] hover:text-[#159447]"
                >
                  <Eye size={16} />
                  View
                </button>

                <button
                  onClick={() => handleDownload(submission)}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-[#159447] hover:text-[#159447]"
                >
                  <Download size={16} />
                  Download
                </button>
              </div>
            </div>

            {/* Details */}
            <div className="mt-5 grid grid-cols-1 gap-4 border-t border-slate-100 pt-4 sm:grid-cols-2 xl:grid-cols-4">
              <div className="flex items-center gap-3">
                <GraduationCap
                  size={18}
                  className="text-[#159447]"
                />

                <div>
                  <p className="text-xs text-slate-400">University</p>
                  <p className="text-sm font-semibold text-slate-700">
                    {submission.university}
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
                    {submission.industry}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays
                  size={18}
                  className="text-[#159447]"
                />

                <div>
                  <p className="text-xs text-slate-400">Submitted On</p>
                  <p className="text-sm font-semibold text-slate-700">
                    {submission.submittedOn}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-400">Submitted By</p>
                <p className="mt-1 text-sm font-semibold text-slate-700">
                  {submission.submittedBy}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
              {submission.status === "Under Review" && (
                <>
                  <button
                    onClick={() =>
                      handleStatusChange(
                        submission.id,
                        "Approved"
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-lg bg-[#159447] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
                  >
                    <CheckCircle2 size={16} />
                    Approve
                  </button>

                  <button
                    onClick={() =>
                      handleStatusChange(
                        submission.id,
                        "Changes Required"
                      )
                    }
                    className="inline-flex items-center gap-2 rounded-lg border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-600 transition hover:bg-orange-50"
                  >
                    <AlertTriangle size={16} />
                    Request Changes
                  </button>
                </>
              )}

              {submission.status === "Changes Required" && (
                <span className="rounded-lg bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
                  Waiting for revised submission
                </span>
              )}

              {submission.status === "Approved" && (
                <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-2 text-sm font-medium text-[#159447]">
                  <CheckCircle2 size={16} />
                  Submission Approved
                </span>
              )}

              <div className="ml-auto flex items-center gap-2 text-xs text-slate-400">
                <CalendarDays size={14} />
                Deadline: {submission.deadline}
              </div>
            </div>
          </div>
        ))}

        {filteredSubmissions.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <FileText
              size={42}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-3 text-lg font-semibold text-[#092752]">
              No submissions found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or status filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Submissions;