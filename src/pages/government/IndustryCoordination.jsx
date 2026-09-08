import React, { useMemo, useState } from "react";
import {
  Search,
  Building2,
  Users,
  FolderKanban,
  UserRound,
  Mail,
  Eye,
  CheckCircle2,
  Clock3,
  MapPin,
} from "lucide-react";

const IndustryCoordination = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [industries, setIndustries] = useState([
    {
      id: 1,
      company: "Tata Steel Ltd.",
      location: "Jamshedpur, Jharkhand",
      coordinator: "Rahul Mehta",
      email: "rahul.mehta@tatasteel.com",
      challenges: 8,
      projects: 5,
      experts: 14,
      status: "Active",
      joined: "Jan 2025",
    },
    {
      id: 2,
      company: "Tech Mahindra",
      location: "Ranchi, Jharkhand",
      coordinator: "Priya Sharma",
      email: "priya.sharma@techmahindra.com",
      challenges: 6,
      projects: 4,
      experts: 10,
      status: "Active",
      joined: "Feb 2025",
    },
    {
      id: 3,
      company: "Infosys",
      location: "Ranchi, Jharkhand",
      coordinator: "Amit Verma",
      email: "amit.verma@infosys.com",
      challenges: 5,
      projects: 3,
      experts: 9,
      status: "Active",
      joined: "Mar 2025",
    },
    {
      id: 4,
      company: "TCS",
      location: "Jamshedpur, Jharkhand",
      coordinator: "Neha Singh",
      email: "neha.singh@tcs.com",
      challenges: 7,
      projects: 3,
      experts: 12,
      status: "Active",
      joined: "Apr 2025",
    },
    {
      id: 5,
      company: "Adani Group",
      location: "Dhanbad, Jharkhand",
      coordinator: "Vikas Kumar",
      email: "vikas.kumar@adani.com",
      challenges: 4,
      projects: 2,
      experts: 6,
      status: "Pending",
      joined: "Aug 2026",
    },
    {
      id: 6,
      company: "Jindal Steel & Power",
      location: "Bokaro, Jharkhand",
      coordinator: "Rohit Gupta",
      email: "rohit.gupta@jindalsteel.com",
      challenges: 3,
      projects: 1,
      experts: 3,
      status: "Active",
      joined: "Jun 2026",
    },
  ]);

  const filteredIndustries = useMemo(() => {
    return industries.filter((industry) => {
      const matchesSearch =
        industry.company.toLowerCase().includes(search.toLowerCase()) ||
        industry.coordinator.toLowerCase().includes(search.toLowerCase()) ||
        industry.location.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || industry.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [industries, search, statusFilter]);

  const totalPartners = industries.length;
  const activePartners = industries.filter(
    (industry) => industry.status === "Active"
  ).length;
  const activeProjects = industries.reduce(
    (total, industry) => total + industry.projects,
    0
  );
  const industryExperts = industries.reduce(
    (total, industry) => total + industry.experts,
    0
  );

  const handleApprove = (id) => {
    setIndustries((prev) =>
      prev.map((industry) =>
        industry.id === id
          ? { ...industry, status: "Active" }
          : industry
      )
    );
  };

  const handleView = (industry) => {
    alert(`Viewing details for ${industry.company}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
              Industry Coordination
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage industry partnerships and monitor industry participation.
            </p>
          </div>

          <div className="rounded-xl bg-[#092752] px-4 py-3 text-white">
            <p className="text-xs text-slate-300">Industry Network</p>
            <p className="mt-1 text-lg font-bold">Jharkhand Industry Partners</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Industry Partners</p>
              <h2 className="mt-2 text-3xl font-bold text-[#092752]">
                09
              </h2>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 text-[#159447]">
              <Building2 size={24} />
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Registered industry partners
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Active Partners</p>
              <h2 className="mt-2 text-3xl font-bold text-[#159447]">
                08
              </h2>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 text-[#159447]">
              <CheckCircle2 size={24} />
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Currently participating
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Active Projects</p>
              <h2 className="mt-2 text-3xl font-bold text-[#092752]">
                18
              </h2>
            </div>

            <div className="rounded-xl bg-blue-50 p-3 text-[#092752]">
              <FolderKanban size={24} />
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Industry-linked projects
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Industry Experts</p>
              <h2 className="mt-2 text-3xl font-bold text-[#092752]">
                54
              </h2>
            </div>

            <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
              <Users size={24} />
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-400">
            Experts contributing to projects
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search company, coordinator or location..."
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
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Industry List */}
      <div className="space-y-4">
        {filteredIndustries.map((industry) => (
          <div
            key={industry.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              {/* Company Info */}
              <div className="flex min-w-0 items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-[#159447]">
                  <Building2 size={27} />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-[#092752]">
                      {industry.company}
                    </h3>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        industry.status === "Active"
                          ? "bg-emerald-50 text-[#159447]"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {industry.status}
                    </span>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={15} />
                      {industry.location}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <UserRound size={15} />
                      {industry.coordinator}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Clock3 size={15} />
                      Joined {industry.joined}
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:min-w-[470px]">
                <div className="rounded-xl bg-slate-50 p-3 text-center">
                  <p className="text-xs text-slate-500">Challenges</p>
                  <p className="mt-1 text-lg font-bold text-[#092752]">
                    {industry.challenges}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3 text-center">
                  <p className="text-xs text-slate-500">Projects</p>
                  <p className="mt-1 text-lg font-bold text-[#092752]">
                    {industry.projects}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3 text-center">
                  <p className="text-xs text-slate-500">Experts</p>
                  <p className="mt-1 text-lg font-bold text-[#092752]">
                    {industry.experts}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3 text-center">
                  <p className="text-xs text-slate-500">Status</p>
                  <p className="mt-1 text-sm font-bold text-[#159447]">
                    {industry.status}
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
              <button
                onClick={() => handleView(industry)}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#159447] hover:text-[#159447]"
              >
                <Eye size={16} />
                View
              </button>

              <a
                href={`mailto:${industry.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#159447] hover:text-[#159447]"
              >
                <Mail size={16} />
                Contact
              </a>

              {industry.status === "Pending" && (
                <button
                  onClick={() => handleApprove(industry.id)}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#159447] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
                >
                  <CheckCircle2 size={16} />
                  Approve
                </button>
              )}
            </div>
          </div>
        ))}

        {filteredIndustries.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <Building2 className="mx-auto text-slate-300" size={42} />
            <h3 className="mt-3 text-lg font-semibold text-[#092752]">
              No industries found
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or status filter.
            </p>
          </div>
        )}
      </div>

      {/* Coordination Summary */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-2xl bg-[#092752] p-6 text-white">
          <div className="flex items-center gap-3">
            <Building2 size={22} />
            <h3 className="font-bold">Industry Participation</h3>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Industry partners are contributing real-world challenges,
            technical expertise and mentorship to student projects across
            Jharkhand.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-400">Active Partners</p>
              <p className="mt-1 text-2xl font-bold">08</p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Experts</p>
              <p className="mt-1 text-2xl font-bold">54</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-bold text-[#092752]">
            Coordination Overview
          </h3>

          <div className="mt-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Registered partners
              </span>
              <span className="font-semibold text-[#092752]">
                {totalPartners}
              </span>
            </div>

            <div className="h-2 rounded-full bg-slate-100">
              <div className="h-2 w-[88%] rounded-full bg-[#159447]" />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Active participation
              </span>
              <span className="font-semibold text-[#159447]">
                {activePartners}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Projects supported
              </span>
              <span className="font-semibold text-[#092752]">
                {activeProjects}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Experts available
              </span>
              <span className="font-semibold text-[#092752]">
                {industryExperts}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryCoordination;