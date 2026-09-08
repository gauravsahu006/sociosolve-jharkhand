import React, { useMemo, useState } from "react";
import {
  Search,
  Filter,
  GraduationCap,
  Mail,
  Phone,
  Users,
  FolderKanban,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const FacultyMentors = () => {
  // faculty mentor data
  const mentors = [
    {
      id: 1,
      name: "Dr. Rajeev Kumar",
      designation: "Professor & Project Mentor",
      department: "Computer Science",
      expertise: [
        "Artificial Intelligence",
        "Machine Learning",
        "Smart Cities",
      ],
      projects: 3,
      students: 14,
      experience: "15+ Years",
      availability: "Available",
      email: "rajeev.kumar@bitmesra.ac.in",
      phone: "+91 98765 43210",
    },
    {
      id: 2,
      name: "Dr. Ananya Sharma",
      designation: "Associate Professor",
      department: "Information Technology",
      expertise: [
        "Web Development",
        "Cloud Computing",
        "Software Engineering",
      ],
      projects: 2,
      students: 9,
      experience: "11+ Years",
      availability: "Available",
      email: "ananya.sharma@bitmesra.ac.in",
      phone: "+91 98765 43120",
    },
    {
      id: 3,
      name: "Dr. Vikash Singh",
      designation: "Assistant Professor",
      department: "Electronics & Communication",
      expertise: [
        "IoT",
        "Embedded Systems",
        "Sensor Networks",
      ],
      projects: 4,
      students: 18,
      experience: "8+ Years",
      availability: "Busy",
      email: "vikash.singh@bitmesra.ac.in",
      phone: "+91 98765 43990",
    },
    {
      id: 4,
      name: "Dr. Neha Verma",
      designation: "Associate Professor",
      department: "Data Science",
      expertise: [
        "Data Analytics",
        "Data Visualization",
        "Predictive Models",
      ],
      projects: 2,
      students: 11,
      experience: "10+ Years",
      availability: "Available",
      email: "neha.verma@bitmesra.ac.in",
      phone: "+91 98765 43670",
    },
    {
      id: 5,
      name: "Dr. Amit Kumar",
      designation: "Professor",
      department: "Mechanical Engineering",
      expertise: [
        "Automation",
        "Robotics",
        "Industrial Systems",
      ],
      projects: 3,
      students: 12,
      experience: "17+ Years",
      availability: "Available",
      email: "amit.kumar@bitmesra.ac.in",
      phone: "+91 98765 43880",
    },
    {
      id: 6,
      name: "Dr. Pooja Singh",
      designation: "Assistant Professor",
      department: "Management",
      expertise: [
        "Social Innovation",
        "Project Management",
        "Entrepreneurship",
      ],
      projects: 1,
      students: 7,
      experience: "7+ Years",
      availability: "Available",
      email: "pooja.singh@bitmesra.ac.in",
      phone: "+91 98765 43440",
    },
  ];

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [availability, setAvailability] = useState("All");

  // unique departments
  const departments = [
    "All Departments",
    ...new Set(mentors.map((mentor) => mentor.department)),
  ];

  // filter mentors
  const filteredMentors = useMemo(() => {
    return mentors.filter((mentor) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        mentor.name.toLowerCase().includes(searchValue) ||
        mentor.department.toLowerCase().includes(searchValue) ||
        mentor.expertise.some((item) =>
          item.toLowerCase().includes(searchValue)
        );

      const matchesDepartment =
        department === "All Departments" ||
        mentor.department === department;

      const matchesAvailability =
        availability === "All" ||
        mentor.availability === availability;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesAvailability
      );
    });
  }, [search, department, availability]);

  // availability badge
  const getAvailabilityStyle = (value) => {
    if (value === "Available") {
      return "bg-green-50 text-green-700";
    }

    return "bg-orange-50 text-orange-700";
  };

  return (
    <div className="space-y-6">

      {/* =========================
          Page Header
      ========================= */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-green-50 p-3 text-[#159447]">
            <GraduationCap size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-[#092752]">
              Faculty Mentors
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Connect with faculty members for project guidance.
            </p>
          </div>

        </div>

        {/* Mentor count */}
        <div className="rounded-xl bg-white px-5 py-3 shadow-sm">

          <p className="text-xs text-slate-500">
            Total Mentors
          </p>

          <p className="mt-1 text-xl font-bold text-[#092752]">
            {mentors.length}
          </p>

        </div>

      </div>

      {/* =========================
          Summary Cards
      ========================= */}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Total Mentors
          </p>

          <p className="mt-2 text-2xl font-bold text-[#092752]">
            {mentors.length}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Available
          </p>

          <p className="mt-2 text-2xl font-bold text-[#159447]">
            {
              mentors.filter(
                (mentor) => mentor.availability === "Available"
              ).length
            }
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Active Projects
          </p>

          <p className="mt-2 text-2xl font-bold text-blue-600">
            {mentors.reduce(
              (total, mentor) => total + mentor.projects,
              0
            )}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Students Guided
          </p>

          <p className="mt-2 text-2xl font-bold text-[#092752]">
            {mentors.reduce(
              (total, mentor) => total + mentor.students,
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
              placeholder="Search mentor, department or expertise..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#159447] focus:bg-white focus:ring-2 focus:ring-green-100"
            />

          </div>

          {/* Department Filter */}
          <div className="relative lg:w-64">

            <Filter
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              value={department}
              onChange={(event) =>
                setDepartment(event.target.value)
              }
              className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#159447] focus:bg-white"
            >
              {departments.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

          </div>

          {/* Availability Filter */}
          <div className="lg:w-48">

            <select
              value={availability}
              onChange={(event) =>
                setAvailability(event.target.value)
              }
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-[#159447] focus:bg-white"
            >
              <option value="All">
                All Availability
              </option>

              <option value="Available">
                Available
              </option>

              <option value="Busy">
                Busy
              </option>
            </select>

          </div>

        </div>

      </section>

      {/* =========================
          Mentor Cards
      ========================= */}

      {filteredMentors.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

          {filteredMentors.map((mentor) => (
            <article
              key={mentor.id}
              className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6"
            >

              {/* Card Top */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                <div className="flex items-start gap-4">

                  {/* Avatar */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-50 text-lg font-bold text-[#159447]">
                    {mentor.name
                      .replace("Dr. ", "")
                      .charAt(0)}
                  </div>

                  <div className="min-w-0">

                    <h2 className="text-lg font-bold text-[#092752]">
                      {mentor.name}
                    </h2>

                    <p className="mt-1 text-sm font-medium text-[#159447]">
                      {mentor.designation}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {mentor.department}
                    </p>

                  </div>

                </div>

                {/* Availability */}
                <span
                  className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${getAvailabilityStyle(
                    mentor.availability
                  )}`}
                >
                  <CheckCircle2 size={14} />
                  {mentor.availability}
                </span>

              </div>

              {/* Expertise */}
              <div className="mt-5">

                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Areas of Expertise
                </p>

                <div className="mt-3 flex flex-wrap gap-2">

                  {mentor.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

              {/* Mentor Stats */}
              <div className="mt-5 grid grid-cols-3 gap-3 border-y border-slate-100 py-5">

                <div className="text-center">

                  <div className="flex items-center justify-center gap-1.5 text-[#159447]">
                    <FolderKanban size={16} />

                    <span className="text-lg font-bold">
                      {mentor.projects}
                    </span>
                  </div>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Projects
                  </p>

                </div>

                <div className="border-x border-slate-100 text-center">

                  <div className="flex items-center justify-center gap-1.5 text-blue-600">
                    <Users size={16} />

                    <span className="text-lg font-bold">
                      {mentor.students}
                    </span>
                  </div>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Students
                  </p>

                </div>

                <div className="text-center">

                  <div className="flex items-center justify-center gap-1.5 text-orange-600">
                    <Clock3 size={16} />

                    <span className="text-sm font-bold">
                      {mentor.experience}
                    </span>
                  </div>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Experience
                  </p>

                </div>

              </div>

              {/* Contact */}
              <div className="flex flex-col gap-3 sm:flex-row">

                <a
                  href={`mailto:${mentor.email}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#159447] hover:text-[#159447]"
                >
                  <Mail size={17} />
                  Email
                </a>

                <a
                  href={`tel:${mentor.phone}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
                >
                  <Phone size={17} />
                  Contact Mentor
                </a>

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
            <GraduationCap size={27} />
          </div>

          <h3 className="mt-4 text-lg font-bold text-[#092752]">
            No mentors found
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            Try changing your search or filter to find a suitable
            faculty mentor.
          </p>

        </div>
      )}

    </div>
  );
};

export default FacultyMentors;