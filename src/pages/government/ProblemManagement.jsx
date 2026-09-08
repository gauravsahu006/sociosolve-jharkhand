import React, { useMemo, useState } from "react";
import {
  Search,
  Filter,
  Eye,
  CheckCircle2,
  XCircle,
  Clock3,
  FileText,
} from "lucide-react";

const problems = [
  {
    id: 1,
    title: "Rural Drinking Water Monitoring",
    department: "Rural Development",
    submittedBy: "District Administration",
    category: "Water & Sanitation",
    date: "02 Sep 2026",
    status: "Pending",
    priority: "High",
  },
  {
    id: 2,
    title: "School Attendance Tracking",
    department: "Education Department",
    submittedBy: "District Education Office",
    category: "Education",
    date: "01 Sep 2026",
    status: "Approved",
    priority: "Medium",
  },
  {
    id: 3,
    title: "Village Health Data Management",
    department: "Health Department",
    submittedBy: "State Health Mission",
    category: "Healthcare",
    date: "30 Aug 2026",
    status: "Pending",
    priority: "High",
  },
  {
    id: 4,
    title: "Urban Waste Collection Tracking",
    department: "Urban Development",
    submittedBy: "Municipal Corporation",
    category: "Environment",
    date: "28 Aug 2026",
    status: "Approved",
    priority: "Medium",
  },
  {
    id: 5,
    title: "Public Transport Route Optimization",
    department: "Transport Department",
    submittedBy: "Transport Authority",
    category: "Transportation",
    date: "25 Aug 2026",
    status: "Rejected",
    priority: "Low",
  },
  {
    id: 6,
    title: "Agricultural Market Price Information",
    department: "Agriculture Department",
    submittedBy: "Agriculture Office",
    category: "Agriculture",
    date: "22 Aug 2026",
    status: "Pending",
    priority: "Medium",
  },
];

const ProblemManagement = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");

  const [problemList, setProblemList] = useState(problems);

  const filteredProblems = useMemo(() => {
    return problemList.filter((problem) => {
      const matchesSearch =
        problem.title.toLowerCase().includes(search.toLowerCase()) ||
        problem.department.toLowerCase().includes(search.toLowerCase()) ||
        problem.category.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || problem.status === status;

      const matchesPriority =
        priority === "All" || problem.priority === priority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [problemList, search, status, priority]);

  const updateStatus = (id, newStatus) => {
    setProblemList((current) =>
      current.map((problem) =>
        problem.id === id
          ? { ...problem, status: newStatus }
          : problem
      )
    );
  };

  const handleView = (problem) => {
    alert(`Opening problem: ${problem.title}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
          Problem Management
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Review, approve and manage problems submitted by
          government departments.
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Problems
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#092752]">
                36
              </h2>
            </div>

            <div className="rounded-xl bg-slate-100 p-3">
              <FileText className="h-5 w-5 text-[#092752]" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Pending Review
              </p>

              <h2 className="mt-2 text-3xl font-bold text-amber-600">
                08
              </h2>
            </div>

            <div className="rounded-xl bg-amber-50 p-3">
              <Clock3 className="h-5 w-5 text-amber-600" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Approved
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#159447]">
                24
              </h2>
            </div>

            <div className="rounded-xl bg-[#EAF7EF] p-3">
              <CheckCircle2 className="h-5 w-5 text-[#159447]" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Rejected
              </p>

              <h2 className="mt-2 text-3xl font-bold text-red-600">
                04
              </h2>
            </div>

            <div className="rounded-xl bg-red-50 p-3">
              <XCircle className="h-5 w-5 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search problems..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-[#E2E8F0] py-3 pl-10 pr-4 text-sm outline-none focus:border-[#159447]"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="hidden h-5 w-5 text-slate-400 sm:block" />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-[#159447]"
            >
              <option value="All">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-[#159447]"
          >
            <option value="All">All Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      {/* Problem List */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white">
        <div className="border-b border-[#E2E8F0] px-5 py-4">
          <h2 className="font-bold text-[#092752]">
            Submitted Problems
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {filteredProblems.length} problems found
          </p>
        </div>

        <div className="divide-y divide-[#E2E8F0]">
          {filteredProblems.length > 0 ? (
            filteredProblems.map((problem) => (
              <div
                key={problem.id}
                className="p-5 transition hover:bg-slate-50"
              >
                <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                  {/* Information */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-[#092752]">
                        {problem.title}
                      </h3>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          problem.status === "Approved"
                            ? "bg-[#EAF7EF] text-[#159447]"
                            : problem.status === "Rejected"
                            ? "bg-red-50 text-red-600"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {problem.status}
                      </span>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          problem.priority === "High"
                            ? "bg-red-50 text-red-600"
                            : problem.priority === "Medium"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {problem.priority} Priority
                      </span>
                    </div>

                    <div className="mt-3 grid grid-cols-1 gap-2 text-xs text-slate-500 sm:grid-cols-2 lg:grid-cols-4">
                      <span>
                        <strong className="text-slate-700">
                          Department:
                        </strong>{" "}
                        {problem.department}
                      </span>

                      <span>
                        <strong className="text-slate-700">
                          Category:
                        </strong>{" "}
                        {problem.category}
                      </span>

                      <span>
                        <strong className="text-slate-700">
                          Submitted By:
                        </strong>{" "}
                        {problem.submittedBy}
                      </span>

                      <span>
                        <strong className="text-slate-700">
                          Date:
                        </strong>{" "}
                        {problem.date}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => handleView(problem)}
                      className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] px-3 py-2 text-sm font-medium text-slate-600 hover:border-[#159447] hover:text-[#159447]"
                    >
                      <Eye className="h-4 w-4" />
                      View
                    </button>

                    {problem.status === "Pending" && (
                      <>
                        <button
                          onClick={() =>
                            updateStatus(problem.id, "Approved")
                          }
                          className="flex items-center gap-2 rounded-lg bg-[#159447] px-3 py-2 text-sm font-semibold text-white hover:bg-[#117C3B]"
                        >
                          <CheckCircle2 className="h-4 w-4" />
                          Approve
                        </button>

                        <button
                          onClick={() =>
                            updateStatus(problem.id, "Rejected")
                          }
                          className="flex items-center gap-2 rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
                        >
                          <XCircle className="h-4 w-4" />
                          Reject
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-10 text-center">
              <FileText className="mx-auto h-10 w-10 text-slate-300" />

              <h3 className="mt-3 font-semibold text-[#092752]">
                No problems found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemManagement;