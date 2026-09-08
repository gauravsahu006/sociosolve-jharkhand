import React, { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Filter,
  GraduationCap,
  Factory,
  CalendarDays,
  Eye,
  CheckCircle2,
  Clock3,
  UserPlus,
} from "lucide-react";

const initialAssignments = [
  {
    id: 1,
    challenge: "Smart Water Management",
    department: "Urban Development",
    university: "BIT Mesra",
    industry: "Tata Steel",
    assignedDate: "18 Aug 2026",
    deadline: "30 Sep 2026",
    status: "Active",
  },
  {
    id: 2,
    challenge: "Rural Healthcare Monitoring",
    department: "Health Department",
    university: "NIT Jamshedpur",
    industry: "Tech Mahindra",
    assignedDate: "20 Aug 2026",
    deadline: "15 Oct 2026",
    status: "Active",
  },
  {
    id: 3,
    challenge: "Digital Agriculture Platform",
    department: "Agriculture Department",
    university: "IIT ISM Dhanbad",
    industry: "Infosys",
    assignedDate: "22 Aug 2026",
    deadline: "25 Oct 2026",
    status: "Active",
  },
  {
    id: 4,
    challenge: "Smart Traffic Management",
    department: "Transport Department",
    university: "BIT Sindri",
    industry: "TCS",
    assignedDate: "25 Aug 2026",
    deadline: "10 Nov 2026",
    status: "Pending",
  },
  {
    id: 5,
    challenge: "Waste Management & Recycling",
    department: "Environment Department",
    university: "XISS Ranchi",
    industry: "Adani Group",
    assignedDate: "27 Aug 2026",
    deadline: "20 Nov 2026",
    status: "Completed",
  },
];

const Assignments = () => {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const filteredAssignments = useMemo(() => {
    return assignments.filter((item) => {
      const matchesSearch =
        item.challenge.toLowerCase().includes(search.toLowerCase()) ||
        item.department.toLowerCase().includes(search.toLowerCase()) ||
        item.university.toLowerCase().includes(search.toLowerCase()) ||
        item.industry.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || item.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [assignments, search, status]);

  const handleCreate = () => {
    alert("New assignment form will be connected next.");
  };

  const handleView = (assignment) => {
    alert(`Assignment: ${assignment.challenge}`);
  };

  const markCompleted = (id) => {
    setAssignments((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, status: "Completed" }
          : item
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
            Assignments
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Assign challenges to universities and industry partners.
          </p>
        </div>

        <button
          onClick={handleCreate}
          className="flex w-fit items-center gap-2 rounded-xl bg-[#159447] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#117C3B]"
        >
          <Plus className="h-5 w-5" />
          New Assignment
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <p className="text-sm text-slate-500">Total Assignments</p>

          <h2 className="mt-2 text-3xl font-bold text-[#092752]">
            24
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Across all challenges
          </p>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <p className="text-sm text-slate-500">Active</p>

          <h2 className="mt-2 text-3xl font-bold text-[#159447]">
            18
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Currently in progress
          </p>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <p className="text-sm text-slate-500">Pending</p>

          <h2 className="mt-2 text-3xl font-bold text-amber-600">
            03
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Awaiting confirmation
          </p>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <p className="text-sm text-slate-500">Completed</p>

          <h2 className="mt-2 text-3xl font-bold text-[#159447]">
            03
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Successfully delivered
          </p>
        </div>
      </div>

      {/* Assignment Overview */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#EAF7EF] p-3">
              <GraduationCap className="h-6 w-6 text-[#159447]" />
            </div>

            <div>
              <h2 className="font-bold text-[#092752]">
                University Assignments
              </h2>

              <p className="text-sm text-slate-500">
                12 universities currently participating
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-end justify-between">
            <span className="text-4xl font-bold text-[#092752]">
              15
            </span>

            <span className="text-sm font-semibold text-[#159447]">
              +3 this month
            </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-[#159447]"
              style={{ width: "72%" }}
            />
          </div>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#EAF7EF] p-3">
              <Factory className="h-6 w-6 text-[#159447]" />
            </div>

            <div>
              <h2 className="font-bold text-[#092752]">
                Industry Assignments
              </h2>

              <p className="text-sm text-slate-500">
                09 industry partners currently participating
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-end justify-between">
            <span className="text-4xl font-bold text-[#092752]">
              09
            </span>

            <span className="text-sm font-semibold text-[#159447]">
              +2 this month
            </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-[#159447]"
              style={{ width: "58%" }}
            />
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
              placeholder="Search assignments, universities, industries..."
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
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Assignment List */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white">
        <div className="border-b border-[#E2E8F0] px-5 py-4">
          <h2 className="font-bold text-[#092752]">
            Challenge Assignments
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {filteredAssignments.length} assignments found
          </p>
        </div>

        <div className="divide-y divide-[#E2E8F0]">
          {filteredAssignments.map((assignment) => (
            <div
              key={assignment.id}
              className="p-5 transition hover:bg-slate-50"
            >
              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                {/* Challenge */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-[#092752]">
                      {assignment.challenge}
                    </h3>

                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                        assignment.status === "Active"
                          ? "bg-[#EAF7EF] text-[#159447]"
                          : assignment.status === "Completed"
                          ? "bg-blue-50 text-blue-600"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {assignment.status}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-500">
                    {assignment.department}
                  </p>

                  {/* Assigned Partners */}
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                      <div className="rounded-lg bg-white p-2">
                        <GraduationCap className="h-5 w-5 text-[#159447]" />
                      </div>

                      <div>
                        <p className="text-[11px] text-slate-400">
                          University
                        </p>

                        <p className="text-sm font-semibold text-[#092752]">
                          {assignment.university}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                      <div className="rounded-lg bg-white p-2">
                        <Factory className="h-5 w-5 text-[#159447]" />
                      </div>

                      <div>
                        <p className="text-[11px] text-slate-400">
                          Industry
                        </p>

                        <p className="text-sm font-semibold text-[#092752]">
                          {assignment.industry}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="mt-3 flex flex-wrap gap-5 text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-4 w-4" />
                      Assigned: {assignment.assignedDate}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Clock3 className="h-4 w-4" />
                      Deadline: {assignment.deadline}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleView(assignment)}
                    className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] px-3 py-2 text-sm font-medium text-slate-600 hover:border-[#159447] hover:text-[#159447]"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </button>

                  {assignment.status === "Pending" && (
                    <button
                      onClick={() => markCompleted(assignment.id)}
                      className="flex items-center gap-2 rounded-lg bg-[#159447] px-3 py-2 text-sm font-semibold text-white hover:bg-[#117C3B]"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Confirm
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {filteredAssignments.length === 0 && (
            <div className="p-10 text-center">
              <UserPlus className="mx-auto h-10 w-10 text-slate-300" />

              <h3 className="mt-3 font-semibold text-[#092752]">
                No assignments found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Try changing your search or filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assignments;