import React, { useMemo, useState } from "react";
import {
  Search,
  Users,
  UserRound,
  FolderKanban,
  CheckCircle2,
  Clock3,
  MoreVertical,
  Mail,
  Eye,
  Plus,
  X,
} from "lucide-react";

const StudentTeams = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] = useState("All Status");
  const [selectedTeam, setSelectedTeam] = useState(null);

  // student team data
  const teams = [
    {
      id: 1,
      name: "Team Innovators",
      project: "Smart Waste Management",
      department: "Computer Science",
      mentor: "Dr. Rajeev Kumar",
      leader: "Rahul Kumar",
      members: 5,
      progress: 78,
      status: "Active",
      updated: "2 hours ago",
      memberList: [
        "Rahul Kumar",
        "Priya Singh",
        "Aman Verma",
        "Sneha Kumari",
        "Rohit Das",
      ],
    },
    {
      id: 2,
      name: "Eco Warriors",
      project: "Water Quality Monitoring",
      department: "Electronics",
      mentor: "Dr. Anjali Mehta",
      leader: "Ankit Sharma",
      members: 4,
      progress: 62,
      status: "Active",
      updated: "5 hours ago",
      memberList: [
        "Ankit Sharma",
        "Neha Gupta",
        "Vikas Kumar",
        "Pooja Singh",
      ],
    },
    {
      id: 3,
      name: "Rural Connect",
      project: "Rural Healthcare Access",
      department: "Information Technology",
      mentor: "Dr. Suresh Prasad",
      leader: "Vivek Kumar",
      members: 6,
      progress: 45,
      status: "Active",
      updated: "Yesterday",
      memberList: [
        "Vivek Kumar",
        "Karan Singh",
        "Riya Kumari",
        "Aditya Raj",
        "Nisha Verma",
        "Deepak Das",
      ],
    },
    {
      id: 4,
      name: "Green Tech",
      project: "Solar Energy Optimization",
      department: "Mechanical",
      mentor: "Dr. Amit Sharma",
      leader: "Arjun Singh",
      members: 5,
      progress: 100,
      status: "Completed",
      updated: "3 days ago",
      memberList: [
        "Arjun Singh",
        "Mohit Kumar",
        "Simran Kaur",
        "Ravi Raj",
        "Kajal Kumari",
      ],
    },
    {
      id: 5,
      name: "Smart City Labs",
      project: "Traffic Management System",
      department: "Computer Science",
      mentor: "Dr. Priya Nair",
      leader: "Aditya Kumar",
      members: 4,
      progress: 31,
      status: "Active",
      updated: "4 days ago",
      memberList: [
        "Aditya Kumar",
        "Shreya Singh",
        "Manish Kumar",
        "Anjali Das",
      ],
    },
    {
      id: 6,
      name: "Tech For Society",
      project: "Digital Education Platform",
      department: "Information Technology",
      mentor: "Dr. Rajeev Kumar",
      leader: "Rohan Singh",
      members: 5,
      progress: 18,
      status: "On Hold",
      updated: "1 week ago",
      memberList: [
        "Rohan Singh",
        "Sakshi Kumari",
        "Amit Kumar",
        "Pankaj Raj",
        "Komal Singh",
      ],
    },
  ];

  // filter teams
  const filteredTeams = useMemo(() => {
    return teams.filter((team) => {
      const matchesSearch =
        team.name.toLowerCase().includes(search.toLowerCase()) ||
        team.project.toLowerCase().includes(search.toLowerCase()) ||
        team.leader.toLowerCase().includes(search.toLowerCase());

      const matchesDepartment =
        department === "All Departments" ||
        team.department === department;

      const matchesStatus =
        status === "All Status" ||
        team.status === status;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [search, department, status]);

  // team statistics
  const totalTeams = teams.length;
  const activeTeams = teams.filter(
    (team) => team.status === "Active"
  ).length;
  const completedTeams = teams.filter(
    (team) => team.status === "Completed"
  ).length;

  const totalStudents = teams.reduce(
    (total, team) => total + team.members,
    0
  );

  const getStatusStyle = (teamStatus) => {
    if (teamStatus === "Completed") {
      return "bg-emerald-50 text-emerald-700";
    }

    if (teamStatus === "On Hold") {
      return "bg-amber-50 text-amber-700";
    }

    return "bg-green-50 text-[#159447]";
  };

  const getProgressStyle = (progress) => {
    if (progress === 100) {
      return "bg-emerald-500";
    }

    return "bg-[#159447]";
  };

  return (
    <div className="space-y-6">

      {/* page header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-medium text-[#159447]">
            University Management
          </p>

          <h1 className="mt-1 text-2xl font-bold text-[#092752] sm:text-3xl">
            Student Teams
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage student teams and monitor their project progress.
          </p>
        </div>

        <button
          type="button"
          className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
        >
          <Plus size={18} />
          Create Team
        </button>
      </div>

      {/* statistics */}
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Teams
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#092752]">
                {totalTeams}
              </h3>
            </div>

            <div className="rounded-xl bg-green-50 p-3 text-[#159447]">
              <Users size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Active Teams
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#092752]">
                {activeTeams}
              </h3>
            </div>

            <div className="rounded-xl bg-green-50 p-3 text-[#159447]">
              <Clock3 size={22} />
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
                {completedTeams}
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
                Total Students
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#092752]">
                {totalStudents}
              </h3>
            </div>

            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <UserRound size={22} />
            </div>
          </div>
        </div>

      </div>

      {/* search and filters */}
      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
        <div className="grid gap-3 lg:grid-cols-[1fr_220px_180px]">

          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search team, project or team leader..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#159447] focus:bg-white focus:ring-2 focus:ring-green-100"
            />
          </div>

          <select
            value={department}
            onChange={(event) => setDepartment(event.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#159447] focus:ring-2 focus:ring-green-100"
          >
            <option>All Departments</option>
            <option>Computer Science</option>
            <option>Information Technology</option>
            <option>Electronics</option>
            <option>Mechanical</option>
          </select>

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#159447] focus:ring-2 focus:ring-green-100"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Completed</option>
            <option>On Hold</option>
          </select>

        </div>
      </div>

      {/* team cards */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {filteredTeams.map((team) => (
          <div
            key={team.id}
            className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
          >

            {/* card top */}
            <div className="flex items-start justify-between gap-3">

              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-[#159447]">
                  <Users size={21} />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-bold text-[#092752]">
                    {team.name}
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-500">
                    {team.department}
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-600"
              >
                <MoreVertical size={18} />
              </button>

            </div>

            {/* status */}
            <div className="mt-4">
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyle(
                  team.status
                )}`}
              >
                {team.status}
              </span>
            </div>

            {/* project */}
            <div className="mt-4 rounded-xl bg-slate-50 p-3">
              <div className="flex items-start gap-3">
                <FolderKanban
                  size={18}
                  className="mt-0.5 shrink-0 text-[#159447]"
                />

                <div>
                  <p className="text-xs text-slate-500">
                    Project
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {team.project}
                  </p>
                </div>
              </div>
            </div>

            {/* team information */}
            <div className="mt-4 space-y-3">

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">
                  Team Leader
                </span>

                <span className="font-medium text-slate-700">
                  {team.leader}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">
                  Team Members
                </span>

                <span className="font-semibold text-slate-700">
                  {team.members} Students
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">
                  Faculty Mentor
                </span>

                <span className="max-w-[55%] truncate font-medium text-slate-700">
                  {team.mentor}
                </span>
              </div>

            </div>

            {/* progress */}
            <div className="mt-5">

              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  Project Progress
                </span>

                <span className="text-sm font-bold text-[#159447]">
                  {team.progress}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full transition-all ${getProgressStyle(
                    team.progress
                  )}`}
                  style={{
                    width: `${team.progress}%`,
                  }}
                />
              </div>

            </div>

            {/* footer */}
            <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

              <span className="text-xs text-slate-400">
                Updated {team.updated}
              </span>

              <button
                type="button"
                onClick={() => setSelectedTeam(team)}
                className="inline-flex items-center gap-1.5 rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-[#159447] transition hover:bg-green-100"
              >
                <Eye size={15} />
                View Team
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* empty state */}
      {filteredTeams.length === 0 && (
        <div className="rounded-2xl bg-white py-14 text-center shadow-sm ring-1 ring-slate-100">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-[#159447]">
            <Users size={25} />
          </div>

          <h3 className="mt-4 font-semibold text-[#092752]">
            No teams found
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Try changing your search or filters.
          </p>
        </div>
      )}

      {/* team details modal */}
      {selectedTeam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl">

            {/* modal header */}
            <div className="flex items-center justify-between border-b border-slate-100 p-5">
              <div>
                <p className="text-xs font-medium text-[#159447]">
                  Student Team
                </p>

                <h2 className="mt-1 text-xl font-bold text-[#092752]">
                  {selectedTeam.name}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedTeam(null)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <X size={20} />
              </button>
            </div>

            {/* modal content */}
            <div className="space-y-5 p-5">

              <div className="rounded-xl bg-green-50 p-4">
                <p className="text-xs text-slate-500">
                  Current Project
                </p>

                <p className="mt-1 font-semibold text-[#092752]">
                  {selectedTeam.project}
                </p>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold text-[#092752]">
                    Team Members
                  </h3>

                  <span className="text-xs text-slate-500">
                    {selectedTeam.members} Members
                  </span>
                </div>

                <div className="space-y-2">
                  {selectedTeam.memberList.map((member, index) => (
                    <div
                      key={member}
                      className="flex items-center justify-between rounded-xl bg-slate-50 p-3"
                    >
                      <div className="flex items-center gap-3">

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-[#159447]">
                          {member.charAt(0)}
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-700">
                            {member}
                          </p>

                          <p className="text-xs text-slate-400">
                            {index === 0 ? "Team Leader" : "Team Member"}
                          </p>
                        </div>

                      </div>

                      <button
                        type="button"
                        className="rounded-lg p-2 text-slate-400 hover:bg-white hover:text-[#159447]"
                      >
                        <Mail size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Project Progress
                  </span>

                  <span className="font-bold text-[#159447]">
                    {selectedTeam.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-[#159447]"
                    style={{
                      width: `${selectedTeam.progress}%`,
                    }}
                  />
                </div>
              </div>

            </div>

            {/* modal footer */}
            <div className="flex justify-end gap-3 border-t border-slate-100 p-5">

              <button
                type="button"
                onClick={() => setSelectedTeam(null)}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                Close
              </button>

              <button
                type="button"
                className="rounded-xl bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#117C3B]"
              >
                Open Project
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default StudentTeams;