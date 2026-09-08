import React, { useMemo, useState } from "react";
import {
  Search,
  Filter,
  GraduationCap,
  Eye,
  CheckCircle2,
  Clock3,
  FolderKanban,
  Users,
  Mail,
} from "lucide-react";

const universities = [
  {
    id: 1,
    name: "BIT Mesra",
    location: "Ranchi, Jharkhand",
    coordinator: "Dr. Rajesh Kumar",
    email: "coordinator@bitmesra.ac.in",
    challenges: 5,
    projects: 8,
    students: 42,
    status: "Active",
    joined: "Jan 2026",
  },
  {
    id: 2,
    name: "NIT Jamshedpur",
    location: "Jamshedpur, Jharkhand",
    coordinator: "Dr. Priya Sharma",
    email: "innovation@nitjsr.ac.in",
    challenges: 4,
    projects: 6,
    students: 31,
    status: "Active",
    joined: "Feb 2026",
  },
  {
    id: 3,
    name: "IIT ISM Dhanbad",
    location: "Dhanbad, Jharkhand",
    coordinator: "Dr. Amit Verma",
    email: "innovation@iitism.ac.in",
    challenges: 6,
    projects: 9,
    students: 48,
    status: "Active",
    joined: "Dec 2025",
  },
  {
    id: 4,
    name: "BIT Sindri",
    location: "Dhanbad, Jharkhand",
    coordinator: "Dr. Neha Singh",
    email: "coordinator@bitsindri.ac.in",
    challenges: 3,
    projects: 4,
    students: 24,
    status: "Active",
    joined: "Mar 2026",
  },
  {
    id: 5,
    name: "XISS Ranchi",
    location: "Ranchi, Jharkhand",
    coordinator: "Dr. Sandeep Gupta",
    email: "innovation@xiss.ac.in",
    challenges: 2,
    projects: 3,
    students: 18,
    status: "Pending",
    joined: "Aug 2026",
  },
  {
    id: 6,
    name: "Kolhan University",
    location: "Chaibasa, Jharkhand",
    coordinator: "Dr. Anjali Kumari",
    email: "innovation@kolhanuniversity.ac.in",
    challenges: 2,
    projects: 2,
    students: 15,
    status: "Active",
    joined: "Apr 2026",
  },
];

const UniversityCoordination = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [universityList, setUniversityList] = useState(universities);

  const filteredUniversities = useMemo(() => {
    return universityList.filter((university) => {
      const matchesSearch =
        university.name.toLowerCase().includes(search.toLowerCase()) ||
        university.location.toLowerCase().includes(search.toLowerCase()) ||
        university.coordinator.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || university.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [universityList, search, status]);

  const handleView = (university) => {
    alert(`Opening university: ${university.name}`);
  };

  const handleContact = (university) => {
    window.location.href = `mailto:${university.email}`;
  };

  const approveUniversity = (id) => {
    setUniversityList((current) =>
      current.map((university) =>
        university.id === id
          ? { ...university, status: "Active" }
          : university
      )
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
          University Coordination
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage participating universities and coordinate innovation
          projects.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Universities
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#092752]">
                12
              </h2>
            </div>

            <div className="rounded-xl bg-[#EAF7EF] p-3">
              <GraduationCap className="h-6 w-6 text-[#159447]" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <p className="text-sm text-slate-500">
            Active Universities
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#159447]">
            10
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Currently participating
          </p>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <p className="text-sm text-slate-500">
            Active Projects
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#092752]">
            32
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Across all universities
          </p>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
          <p className="text-sm text-slate-500">
            Student Participants
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#159447]">
            178
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Students involved
          </p>
        </div>
      </div>

      {/* Coordination Overview */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 lg:col-span-2">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#EAF7EF] p-3">
              <FolderKanban className="h-6 w-6 text-[#159447]" />
            </div>

            <div>
              <h2 className="font-bold text-[#092752]">
                University Project Overview
              </h2>

              <p className="text-sm text-slate-500">
                Current participation across institutions
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-500">
                Challenges Assigned
              </p>

              <p className="mt-2 text-2xl font-bold text-[#092752]">
                22
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-500">
                Projects Running
              </p>

              <p className="mt-2 text-2xl font-bold text-[#159447]">
                32
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs text-slate-500">
                Completed Projects
              </p>

              <p className="mt-2 text-2xl font-bold text-[#092752]">
                14
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#092752] p-5 text-white">
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6" />

            <h2 className="font-bold">
              Student Participation
            </h2>
          </div>

          <p className="mt-5 text-4xl font-bold">
            178
          </p>

          <p className="mt-1 text-sm text-slate-300">
            students actively working on government challenges
          </p>

          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/20">
            <div
              className="h-full rounded-full bg-white"
              style={{ width: "76%" }}
            />
          </div>

          <p className="mt-2 text-xs text-slate-300">
            76% of registered students are currently active
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
        <div className="flex flex-col gap-3 lg:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search universities or coordinators..."
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
            </select>
          </div>
        </div>
      </div>

      {/* University List */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white">
        <div className="border-b border-[#E2E8F0] px-5 py-4">
          <h2 className="font-bold text-[#092752]">
            Participating Universities
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {filteredUniversities.length} universities found
          </p>
        </div>

        <div className="divide-y divide-[#E2E8F0]">
          {filteredUniversities.map((university) => (
            <div
              key={university.id}
              className="p-5 transition hover:bg-slate-50"
            >
              <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                {/* University Info */}
                <div className="flex min-w-0 gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF7EF]">
                    <GraduationCap className="h-6 w-6 text-[#159447]" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-[#092752]">
                        {university.name}
                      </h3>

                      <span
                        className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                          university.status === "Active"
                            ? "bg-[#EAF7EF] text-[#159447]"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {university.status}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      {university.location}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                      <span>
                        Coordinator:{" "}
                        <strong className="text-slate-700">
                          {university.coordinator}
                        </strong>
                      </span>

                      <span>
                        Joined:{" "}
                        <strong className="text-slate-700">
                          {university.joined}
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 xl:w-[360px]">
                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <p className="text-lg font-bold text-[#092752]">
                      {university.challenges}
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Challenges
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <p className="text-lg font-bold text-[#159447]">
                      {university.projects}
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Projects
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <p className="text-lg font-bold text-[#092752]">
                      {university.students}
                    </p>

                    <p className="text-[11px] text-slate-500">
                      Students
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => handleView(university)}
                    className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] px-3 py-2 text-sm font-medium text-slate-600 hover:border-[#159447] hover:text-[#159447]"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </button>

                  <button
                    onClick={() => handleContact(university)}
                    className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] px-3 py-2 text-sm font-medium text-slate-600 hover:border-[#159447] hover:text-[#159447]"
                  >
                    <Mail className="h-4 w-4" />
                    Contact
                  </button>

                  {university.status === "Pending" && (
                    <button
                      onClick={() => approveUniversity(university.id)}
                      className="flex items-center gap-2 rounded-lg bg-[#159447] px-3 py-2 text-sm font-semibold text-white hover:bg-[#117C3B]"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Approve
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {filteredUniversities.length === 0 && (
            <div className="p-10 text-center">
              <GraduationCap className="mx-auto h-10 w-10 text-slate-300" />

              <h3 className="mt-3 font-semibold text-[#092752]">
                No universities found
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

export default UniversityCoordination;