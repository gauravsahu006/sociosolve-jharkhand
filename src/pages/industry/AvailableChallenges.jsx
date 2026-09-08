import React, { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Lightbulb,
  MapPin,
  CalendarDays,
  Users,
  ArrowUpRight,
  X,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AvailableChallenges = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [priority, setPriority] = useState("All Priorities");

  const challenges = [
    {
      id: 1,
      title: "Smart Waste Management System",
      organization: "Urban Development Department",
      category: "Smart City",
      priority: "High",
      location: "Ranchi",
      deadline: "30 Sep 2026",
      teams: 8,
      description:
        "Develop an intelligent solution for real-time waste monitoring, collection optimization and better urban cleanliness.",
      tags: ["IoT", "AI", "Smart City"],
    },
    {
      id: 2,
      title: "Industrial Water Quality Monitoring",
      organization: "Jharkhand Industrial Area",
      category: "Environment",
      priority: "High",
      location: "Jamshedpur",
      deadline: "15 Oct 2026",
      teams: 5,
      description:
        "Build a reliable monitoring platform to track industrial water quality and identify contamination at an early stage.",
      tags: ["IoT", "Analytics", "Environment"],
    },
    {
      id: 3,
      title: "Rural Healthcare Access Platform",
      organization: "Health & Family Welfare",
      category: "Healthcare",
      priority: "Medium",
      location: "Dumka",
      deadline: "22 Oct 2026",
      teams: 6,
      description:
        "Create a digital platform that improves access to healthcare services for people in remote rural communities.",
      tags: ["Healthcare", "Mobile", "Cloud"],
    },
    {
      id: 4,
      title: "Agricultural Supply Chain Optimization",
      organization: "Agriculture Department",
      category: "Agriculture",
      priority: "High",
      location: "Hazaribagh",
      deadline: "05 Oct 2026",
      teams: 7,
      description:
        "Develop a technology-driven solution to reduce supply chain inefficiencies and improve farmer-market connectivity.",
      tags: ["AgriTech", "AI", "Logistics"],
    },
    {
      id: 5,
      title: "Renewable Energy Monitoring",
      organization: "Energy Development Corporation",
      category: "Energy",
      priority: "Medium",
      location: "Bokaro",
      deadline: "12 Nov 2026",
      teams: 4,
      description:
        "Design a dashboard for monitoring renewable energy generation, equipment performance and energy efficiency.",
      tags: ["Energy", "Dashboard", "Analytics"],
    },
    {
      id: 6,
      title: "Traffic Congestion Prediction",
      organization: "Transport Department",
      category: "Transportation",
      priority: "Critical",
      location: "Ranchi",
      deadline: "25 Sep 2026",
      teams: 9,
      description:
        "Use data and predictive analytics to identify traffic patterns and provide congestion forecasts.",
      tags: ["AI", "Data Science", "Transport"],
    },
  ];

  const categories = [
    "All Categories",
    "Smart City",
    "Environment",
    "Healthcare",
    "Agriculture",
    "Energy",
    "Transportation",
  ];

  const priorities = [
    "All Priorities",
    "Critical",
    "High",
    "Medium",
    "Low",
  ];

  const filteredChallenges = useMemo(() => {
    return challenges.filter((challenge) => {
      const matchesSearch =
        challenge.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        challenge.organization
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        challenge.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All Categories" ||
        challenge.category === category;

      const matchesPriority =
        priority === "All Priorities" ||
        challenge.priority === priority;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPriority
      );
    });
  }, [search, category, priority]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All Categories");
    setPriority("All Priorities");
  };

  const hasFilters =
    search ||
    category !== "All Categories" ||
    priority !== "All Priorities";

  const getPriorityClass = (value) => {
    if (value === "Critical") {
      return "bg-red-50 text-red-600";
    }

    if (value === "High") {
      return "bg-orange-50 text-orange-600";
    }

    if (value === "Medium") {
      return "bg-yellow-50 text-yellow-700";
    }

    return "bg-slate-100 text-slate-600";
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <section>
        <p className="text-sm font-semibold text-[#159447]">
          INDUSTRY CHALLENGES
        </p>

        <div className="mt-1 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
              Available Challenges
            </h1>

            <p className="mt-1 max-w-2xl text-sm text-slate-500">
              Explore real-world challenges and find opportunities
              for industry collaboration.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2">
            <Lightbulb
              size={17}
              className="text-[#159447]"
            />

            <span className="text-xs font-semibold text-[#117C3B]">
              {filteredChallenges.length} Challenges Available
            </span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-4 xl:flex-row">

          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search challenges..."
              className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
            />
          </div>

          {/* Category */}
          <div className="relative min-w-[190px]">
            <SlidersHorizontal
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-9 text-sm text-slate-600 outline-none focus:border-[#159447]"
            >
              {categories.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <ChevronDown
              size={15}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>

          {/* Priority */}
          <div className="relative min-w-[170px]">
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-2.5 pr-9 text-sm text-slate-600 outline-none focus:border-[#159447]"
            >
              {priorities.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>

            <ChevronDown
              size={15}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>

          {/* Clear */}
          {hasFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
            >
              <X size={16} />
              Clear
            </button>
          )}
        </div>
      </section>

      {/* Results */}
      <section>
        {filteredChallenges.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {filteredChallenges.map((challenge) => (
              <article
                key={challenge.id}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#159447]/40 hover:shadow-md"
              >

                {/* Top */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#159447]/10 text-[#159447]">
                    <Lightbulb size={20} />
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${getPriorityClass(
                      challenge.priority
                    )}`}
                  >
                    {challenge.priority} Priority
                  </span>
                </div>

                {/* Title */}
                <div className="mt-4">
                  <h2 className="line-clamp-2 text-base font-bold leading-6 text-[#092752] group-hover:text-[#159447]">
                    {challenge.title}
                  </h2>

                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {challenge.organization}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-3 line-clamp-3 text-xs leading-5 text-slate-500">
                  {challenge.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {challenge.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Meta */}
                <div className="mt-5 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-2">
                    <MapPin
                      size={14}
                      className="text-[#159447]"
                    />

                    <div>
                      <p className="text-[9px] text-slate-400">
                        Location
                      </p>

                      <p className="text-[11px] font-semibold text-slate-600">
                        {challenge.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays
                      size={14}
                      className="text-[#159447]"
                    />

                    <div>
                      <p className="text-[9px] text-slate-400">
                        Deadline
                      </p>

                      <p className="text-[11px] font-semibold text-slate-600">
                        {challenge.deadline}
                      </p>
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center gap-2">
                    <Users
                      size={14}
                      className="text-[#159447]"
                    />

                    <p className="text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-700">
                        {challenge.teams}
                      </span>{" "}
                      teams currently exploring this challenge
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      `/industry/challenges/${challenge.id}`
                    )
                  }
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#159447] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#117C3B]"
                >
                  View Challenge
                  <ArrowUpRight size={15} />
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <Search size={22} />
            </div>

            <h3 className="mt-4 text-base font-bold text-[#092752]">
              No challenges found
            </h3>

            <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">
              Try changing your search or filters to find
              relevant challenges.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 rounded-lg bg-[#159447] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#117C3B]"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

    </div>
  );
};

export default AvailableChallenges;