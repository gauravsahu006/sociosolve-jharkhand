import React, { useState } from "react";

import {
  Search,
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  BriefcaseBusiness,
  Star,
  Users,
  X,
} from "lucide-react";

const IndustryMentors = () => {
  const [search, setSearch] = useState("");
  const [expertiseFilter, setExpertiseFilter] = useState("All");
  const [selectedMentor, setSelectedMentor] = useState(null);

  const mentors = [
    {
      id: 1,
      name: "Dr. Priya Singh",
      designation: "Professor & Industry Mentor",
      organization: "BIT Mesra",
      expertise: "IoT & Smart Systems",
      experience: "12 Years",
      projects: 18,
      rating: 4.9,
      location: "Ranchi, Jharkhand",
      email: "priya.singh@bitmesra.ac.in",
      phone: "+91 98765 43210",
      availability: "Available",
    },
    {
      id: 2,
      name: "Prof. Anil Verma",
      designation: "Associate Professor",
      organization: "NIT Jamshedpur",
      expertise: "Environmental Engineering",
      experience: "15 Years",
      projects: 22,
      rating: 4.8,
      location: "Jamshedpur, Jharkhand",
      email: "anil.verma@nitjsr.ac.in",
      phone: "+91 98765 12345",
      availability: "Available",
    },
    {
      id: 3,
      name: "Dr. Neha Gupta",
      designation: "Faculty Mentor",
      organization: "XLRI Jamshedpur",
      expertise: "Data Analytics & AI",
      experience: "10 Years",
      projects: 14,
      rating: 4.7,
      location: "Jamshedpur, Jharkhand",
      email: "neha.gupta@xlri.ac.in",
      phone: "+91 98765 67890",
      availability: "Busy",
    },
    {
      id: 4,
      name: "Dr. Rakesh Kumar",
      designation: "Professor & Research Mentor",
      organization: "BIT Sindri",
      expertise: "Healthcare Technology",
      experience: "13 Years",
      projects: 16,
      rating: 4.8,
      location: "Dhanbad, Jharkhand",
      email: "rakesh.kumar@bitsindri.ac.in",
      phone: "+91 98765 24680",
      availability: "Available",
    },
    {
      id: 5,
      name: "Prof. S. Chatterjee",
      designation: "Professor",
      organization: "IIT (ISM) Dhanbad",
      expertise: "Supply Chain & Logistics",
      experience: "17 Years",
      projects: 25,
      rating: 4.9,
      location: "Dhanbad, Jharkhand",
      email: "s.chatterjee@iitism.ac.in",
      phone: "+91 98765 13579",
      availability: "Available",
    },
    {
      id: 6,
      name: "Dr. Amit Kumar",
      designation: "Assistant Professor",
      organization: "NIT Jamshedpur",
      expertise: "Renewable Energy",
      experience: "9 Years",
      projects: 11,
      rating: 4.6,
      location: "Jamshedpur, Jharkhand",
      email: "amit.kumar@nitjsr.ac.in",
      phone: "+91 98765 11223",
      availability: "Available",
    },
  ];

  const expertiseOptions = [
    "All",
    "IoT & Smart Systems",
    "Environmental Engineering",
    "Data Analytics & AI",
    "Healthcare Technology",
    "Supply Chain & Logistics",
    "Renewable Energy",
  ];

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(search.toLowerCase()) ||
      mentor.organization.toLowerCase().includes(search.toLowerCase()) ||
      mentor.expertise.toLowerCase().includes(search.toLowerCase());

    const matchesExpertise =
      expertiseFilter === "All" ||
      mentor.expertise === expertiseFilter;

    return matchesSearch && matchesExpertise;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Industry Mentors
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Connect with faculty experts and mentors for your industry
          projects.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Mentors
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                24
              </p>
            </div>

            <div className="rounded-xl bg-green-50 p-3 text-green-600">
              <GraduationCap size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Available
              </p>

              <p className="mt-2 text-2xl font-bold text-green-600">
                18
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
                Active Projects
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                42
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
                Avg. Rating
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                4.8
              </p>
            </div>

            <div className="rounded-xl bg-yellow-50 p-3 text-yellow-500">
              <Star size={22} />
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search mentors, organizations or expertise..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <select
            value={expertiseFilter}
            onChange={(e) => setExpertiseFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-green-500"
          >
            {expertiseOptions.map((option) => (
              <option key={option} value={option}>
                {option === "All"
                  ? "All Expertise"
                  : option}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mentor Cards */}
      {filteredMentors.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredMentors.map((mentor) => (
            <div
              key={mentor.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Profile */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 font-bold text-green-700">
                    {mentor.name
                      .replace("Dr. ", "")
                      .replace("Prof. ", "")
                      .split(" ")
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join("")}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {mentor.name}
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-500">
                      {mentor.designation}
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    mentor.availability === "Available"
                      ? "bg-green-50 text-green-700"
                      : "bg-orange-50 text-orange-600"
                  }`}
                >
                  {mentor.availability}
                </span>
              </div>

              {/* Organization */}
              <div className="mt-5">
                <p className="text-sm font-semibold text-slate-800">
                  {mentor.organization}
                </p>

                <p className="mt-1 text-sm text-green-600">
                  {mentor.expertise}
                </p>
              </div>

              {/* Details */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[11px] text-slate-400">
                    Experience
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {mentor.experience}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-[11px] text-slate-400">
                    Projects
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {mentor.projects}
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
                    {mentor.rating}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin size={14} />
                  {mentor.location}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => setSelectedMentor(mentor)}
                className="mt-5 w-full rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                View Mentor Profile
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
          <GraduationCap
            size={40}
            className="mx-auto text-slate-300"
          />

          <h3 className="mt-4 font-semibold text-slate-800">
            No mentors found
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Try changing your search or expertise filter.
          </p>
        </div>
      )}

      {/* Mentor Modal */}
      {selectedMentor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-lg font-bold text-green-700">
                  {selectedMentor.name
                    .replace("Dr. ", "")
                    .replace("Prof. ", "")
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div>
                  <h2 className="font-bold text-slate-900">
                    {selectedMentor.name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {selectedMentor.designation}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedMentor(null)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={19} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="space-y-5 p-5 sm:p-6">
              <div>
                <p className="text-xs text-slate-400">
                  Organization
                </p>

                <p className="mt-1 font-semibold text-slate-800">
                  {selectedMentor.organization}
                </p>
              </div>

              <div>
                <p className="text-xs text-slate-400">
                  Area of Expertise
                </p>

                <p className="mt-1 font-semibold text-green-600">
                  {selectedMentor.expertise}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    Experience
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    {selectedMentor.experience}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    Rating
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    ★ {selectedMentor.rating}
                  </p>
                </div>
              </div>

              <div className="space-y-3 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Mail size={17} className="text-slate-400" />
                  {selectedMentor.email}
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Phone size={17} className="text-slate-400" />
                  {selectedMentor.phone}
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <MapPin size={17} className="text-slate-400" />
                  {selectedMentor.location}
                </div>
              </div>

              <button
                disabled={
                  selectedMentor.availability !== "Available"
                }
                className={`w-full rounded-xl px-4 py-3 text-sm font-semibold ${
                  selectedMentor.availability === "Available"
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "cursor-not-allowed bg-slate-100 text-slate-400"
                }`}
              >
                {selectedMentor.availability === "Available"
                  ? "Connect Mentor"
                  : "Currently Unavailable"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndustryMentors;