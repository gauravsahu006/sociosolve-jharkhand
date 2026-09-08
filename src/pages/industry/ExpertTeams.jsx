import React, { useState } from "react";

import {
  Search,
  Users,
  UserRound,
  BriefcaseBusiness,
  Star,
  MapPin,
  CheckCircle2,
  X,
  UserPlus,
} from "lucide-react";

const ExpertTeams = () => {
  const [search, setSearch] = useState("");
  const [specialization, setSpecialization] = useState("All");
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teams = [
    {
      id: 1,
      name: "Smart Systems Expert Team",
      lead: "Dr. Priya Singh",
      organization: "BIT Mesra",
      specialization: "IoT & Smart Systems",
      members: 6,
      projects: 4,
      completed: 12,
      rating: 4.9,
      location: "Ranchi, Jharkhand",
      availability: "Available",
      skills: [
        "IoT",
        "Embedded Systems",
        "Smart Cities",
        "Cloud",
      ],
    },
    {
      id: 2,
      name: "Environmental Solutions Team",
      lead: "Prof. Anil Verma",
      organization: "NIT Jamshedpur",
      specialization: "Environment & Sustainability",
      members: 5,
      projects: 5,
      completed: 15,
      rating: 4.8,
      location: "Jamshedpur, Jharkhand",
      availability: "Available",
      skills: [
        "Water Quality",
        "Waste Management",
        "Environmental Analytics",
        "Sustainability",
      ],
    },
    {
      id: 3,
      name: "AI & Data Analytics Team",
      lead: "Dr. Neha Gupta",
      organization: "XLRI Jamshedpur",
      specialization: "AI & Data Analytics",
      members: 7,
      projects: 6,
      completed: 18,
      rating: 4.9,
      location: "Jamshedpur, Jharkhand",
      availability: "Busy",
      skills: [
        "Machine Learning",
        "Data Analytics",
        "Predictive Models",
        "Visualization",
      ],
    },
    {
      id: 4,
      name: "Healthcare Technology Team",
      lead: "Dr. Rakesh Kumar",
      organization: "BIT Sindri",
      specialization: "Healthcare Technology",
      members: 6,
      projects: 3,
      completed: 10,
      rating: 4.7,
      location: "Dhanbad, Jharkhand",
      availability: "Available",
      skills: [
        "HealthTech",
        "Digital Healthcare",
        "Mobile Apps",
        "Data Management",
      ],
    },
    {
      id: 5,
      name: "Logistics & Supply Chain Team",
      lead: "Prof. S. Chatterjee",
      organization: "IIT (ISM) Dhanbad",
      specialization: "Supply Chain & Logistics",
      members: 5,
      projects: 4,
      completed: 13,
      rating: 4.8,
      location: "Dhanbad, Jharkhand",
      availability: "Available",
      skills: [
        "Supply Chain",
        "Logistics",
        "Optimization",
        "Operations",
      ],
    },
    {
      id: 6,
      name: "Clean Energy Research Team",
      lead: "Dr. Amit Kumar",
      organization: "NIT Jamshedpur",
      specialization: "Renewable Energy",
      members: 4,
      projects: 2,
      completed: 8,
      rating: 4.6,
      location: "Jamshedpur, Jharkhand",
      availability: "Available",
      skills: [
        "Solar Energy",
        "Energy Monitoring",
        "Energy Efficiency",
        "IoT",
      ],
    },
  ];

  const specializationOptions = [
    "All",
    "IoT & Smart Systems",
    "Environment & Sustainability",
    "AI & Data Analytics",
    "Healthcare Technology",
    "Supply Chain & Logistics",
    "Renewable Energy",
  ];

  const filteredTeams = teams.filter((team) => {
    const matchesSearch =
      team.name.toLowerCase().includes(search.toLowerCase()) ||
      team.lead.toLowerCase().includes(search.toLowerCase()) ||
      team.organization.toLowerCase().includes(search.toLowerCase()) ||
      team.specialization.toLowerCase().includes(search.toLowerCase());

    const matchesSpecialization =
      specialization === "All" ||
      team.specialization === specialization;

    return matchesSearch && matchesSpecialization;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Expert Teams
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Explore expert teams and connect them with suitable
          industry projects.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Teams
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                32
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-3 text-green-600">
              <Users size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Available Teams
              </p>

              <p className="mt-2 text-2xl font-bold text-green-600">
                21
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-3 text-green-600">
              <CheckCircle2 size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Active Projects
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                48
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <BriefcaseBusiness size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Completed Projects
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                76
              </p>
            </div>

            <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
              <Star size={22} />
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search expert teams, leads or organizations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-green-500"
          >
            {specializationOptions.map((option) => (
              <option key={option} value={option}>
                {option === "All"
                  ? "All Specializations"
                  : option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Team Cards */}
      {filteredTeams.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredTeams.map((team) => (
            <div
              key={team.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Team Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Users size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {team.name}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Led by {team.lead}
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    team.availability === "Available"
                      ? "bg-green-50 text-green-700"
                      : "bg-orange-50 text-orange-600"
                  }`}
                >
                  {team.availability}
                </span>
              </div>

              {/* Organization */}
              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-800">
                  {team.organization}
                </p>

                <p className="mt-1 text-sm text-green-600">
                  {team.specialization}
                </p>
              </div>

              {/* Skills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {team.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs text-slate-600"
                  >
                    {skill}
                  </span>
                ))}

                {team.skills.length > 3 && (
                  <span className="rounded-lg bg-slate-50 px-2.5 py-1 text-xs text-slate-500">
                    +{team.skills.length - 3}
                  </span>
                )}
              </div>

              {/* Team Stats */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                <div className="rounded-xl bg-slate-50 p-3 text-center">
                  <p className="text-lg font-bold text-slate-800">
                    {team.members}
                  </p>

                  <p className="text-[10px] text-slate-400">
                    Members
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3 text-center">
                  <p className="text-lg font-bold text-slate-800">
                    {team.projects}
                  </p>

                  <p className="text-[10px] text-slate-400">
                    Active
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3 text-center">
                  <p className="text-lg font-bold text-slate-800">
                    {team.completed}
                  </p>

                  <p className="text-[10px] text-slate-400">
                    Completed
                  </p>
                </div>
              </div>

              {/* Rating & Location */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Star
                    size={15}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-sm font-semibold text-slate-700">
                    {team.rating}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin size={14} />
                  {team.location}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => setSelectedTeam(team)}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                <UserRound size={16} />
                View Team
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <Users
            size={40}
            className="mx-auto text-slate-300"
          />

          <h3 className="mt-4 font-semibold text-slate-800">
            No expert teams found
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Try changing your search or specialization filter.
          </p>
        </div>
      )}

      {/* Team Details Modal */}
      {selectedTeam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <Users size={25} />
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    {selectedTeam.name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {selectedTeam.organization}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedTeam(null)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={19} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-5 p-5 sm:p-6">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    Team Lead
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {selectedTeam.lead}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    Specialization
                  </p>

                  <p className="mt-1 text-sm font-semibold text-green-600">
                    {selectedTeam.specialization}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Core Skills
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedTeam.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Performance */}
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Team Performance
                </p>

                <div className="mt-3 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-slate-200 p-3 text-center">
                    <p className="text-lg font-bold text-slate-900">
                      {selectedTeam.members}
                    </p>

                    <p className="text-[11px] text-slate-400">
                      Members
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-3 text-center">
                    <p className="text-lg font-bold text-slate-900">
                      {selectedTeam.completed}
                    </p>

                    <p className="text-[11px] text-slate-400">
                      Completed
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-200 p-3 text-center">
                    <p className="text-lg font-bold text-slate-900">
                      {selectedTeam.rating}
                    </p>

                    <p className="text-[11px] text-slate-400">
                      Rating
                    </p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <MapPin
                  size={17}
                  className="text-slate-400"
                />
                {selectedTeam.location}
              </div>

              {/* Assign */}
              <button
                disabled={
                  selectedTeam.availability !== "Available"
                }
                className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold ${
                  selectedTeam.availability === "Available"
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "cursor-not-allowed bg-slate-100 text-slate-400"
                }`}
              >
                <UserPlus size={17} />

                {selectedTeam.availability === "Available"
                  ? "Assign to Project"
                  : "Team Currently Busy"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertTeams;