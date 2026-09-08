import React, { useMemo, useState } from "react";
import {
  Search,
  MapPin,
  SlidersHorizontal,
  ArrowRight,
  Droplets,
  Recycle,
  GraduationCap,
  Tractor,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* =========================
   Challenges Data
========================= */

const challenges = [
  {
    id: 1,
    title: "Water Logging in Street 12",
    category: "Water & Sanitation",
    location: "Ranchi, Jharkhand",
    priority: "High",
    description:
      "Develop a practical solution to reduce water logging and improve drainage conditions in residential areas.",
    icon: Droplets,
  },
  {
    id: 2,
    title: "Garbage not collected in Ward 15",
    category: "Waste Management",
    location: "Ranchi, Jharkhand",
    priority: "Medium",
    description:
      "Design an efficient waste collection and monitoring solution for Ward 15.",
    icon: Recycle,
  },
  {
    id: 3,
    title: "Digital Learning Access in Rural Areas",
    category: "Education",
    location: "Jharkhand",
    priority: "Medium",
    description:
      "Create an affordable digital learning solution for students in rural communities.",
    icon: GraduationCap,
  },
  {
    id: 4,
    title: "Poor Rural Road Connectivity",
    category: "Infrastructure",
    location: "Khunti, Gumla, Simdega",
    priority: "High",
    description:
      "Develop an innovative approach for improving rural road connectivity and monitoring.",
    icon: MapPin,
  },
  {
    id: 5,
    title: "Low Crop Productivity in Rainy Season",
    category: "Agriculture",
    location: "Various Districts",
    priority: "Low",
    description:
      "Develop a smart and sustainable solution to improve crop productivity during the rainy season.",
    icon: Tractor,
  },
];

/* =========================
   Categories
========================= */

const categories = [
  "All Categories",
  "Water & Sanitation",
  "Waste Management",
  "Education",
  "Infrastructure",
  "Agriculture",
];

/* =========================
   Priority Options
========================= */

const priorities = [
  "All Priorities",
  "High",
  "Medium",
  "Low",
];

/* =========================
   Recommended Challenges
========================= */

const RecommendedChallenges = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All Categories");

  const [priority, setPriority] =
    useState("All Priorities");

  /* =========================
     Filter Challenges
  ========================= */

  const filteredChallenges = useMemo(() => {
    return challenges.filter((challenge) => {
      const searchText =
        `${challenge.title} ${challenge.category} ${challenge.location}`
          .toLowerCase();

      const matchesSearch =
        searchText.includes(
          search.toLowerCase().trim()
        );

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

  /* =========================
     Clear Filters
  ========================= */

  const clearFilters = () => {
    setSearch("");
    setCategory("All Categories");
    setPriority("All Priorities");
  };

  return (
    <div className="mx-auto max-w-[1500px] space-y-6">

      {/* =========================
          Page Header
      ========================= */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#159447]">
            University Innovation
          </p>

          <h1 className="mt-1 text-2xl font-extrabold text-[#092752] sm:text-3xl">
            Recommended Challenges
          </h1>

          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Challenges matched with your university's
            expertise, research capabilities and student
            interests.
          </p>
        </div>

        <div className="rounded-lg bg-[#159447]/10 px-4 py-2 text-sm font-bold text-[#159447]">
          {filteredChallenges.length} Challenges Available
        </div>

      </div>

      {/* =========================
          Search & Filters
      ========================= */}

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

        <div className="grid gap-3 lg:grid-cols-[1fr_220px_180px_auto]">

          {/* Search */}

          <div className="relative">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search challenges..."
              className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-10 text-sm outline-none transition focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                aria-label="Clear search"
              >
                <X size={17} />
              </button>
            )}

          </div>

          {/* Category */}

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
          >
            {categories.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

          {/* Priority */}

          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value)
            }
            className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
          >
            {priorities.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>

          {/* Filter Button */}

          <button
            type="button"
            onClick={clearFilters}
            className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-bold text-[#092752] transition hover:border-[#159447] hover:text-[#159447]"
          >
            <SlidersHorizontal size={17} />

            Clear
          </button>

        </div>

      </div>

      {/* =========================
          Challenge Cards
      ========================= */}

      {filteredChallenges.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {filteredChallenges.map(
            (challenge) => {
              const Icon = challenge.icon;

              return (
                <div
                  key={challenge.id}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#159447]/30 hover:shadow-md"
                >

                  {/* Card Header */}

                  <div className="flex items-start justify-between gap-3">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#159447]/10">
                      <Icon
                        size={22}
                        className="text-[#159447]"
                      />
                    </div>

                    {/* Priority */}

                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                        challenge.priority === "High"
                          ? "bg-red-50 text-red-600"
                          : challenge.priority === "Medium"
                          ? "bg-orange-50 text-orange-600"
                          : "bg-green-50 text-[#159447]"
                      }`}
                    >
                      {challenge.priority} Priority
                    </span>

                  </div>

                  {/* Category */}

                  <p className="mt-5 text-xs font-bold text-[#159447]">
                    {challenge.category}
                  </p>

                  {/* Title */}

                  <h2 className="mt-1 text-lg font-extrabold leading-6 text-[#092752]">
                    {challenge.title}
                  </h2>

                  {/* Location */}

                  <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">

                    <MapPin size={14} />

                    {challenge.location}

                  </div>

                  {/* Description */}

                  <p className="mt-4 flex-1 text-sm leading-6 text-slate-500">
                    {challenge.description}
                  </p>

                  {/* Bottom */}

                  <div className="mt-5 border-t border-slate-100 pt-4">

                    <button
                      type="button"
                      onClick={() =>
                        navigate(
                          `/university/challenges/${challenge.id}`
                        )
                      }
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-bold text-[#092752] transition hover:border-[#159447] hover:bg-[#159447] hover:text-white"
                    >
                      View Details

                      <ArrowRight
                        size={16}
                      />
                    </button>

                  </div>

                </div>
              );
            }
          )}

        </div>
      ) : (
        /* =========================
           Empty State
        ========================= */

        <div className="rounded-xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
            <Search
              size={24}
              className="text-slate-400"
            />
          </div>

          <h3 className="mt-4 text-lg font-bold text-[#092752]">
            No challenges found
          </h3>

          <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">
            Try changing your search text or removing
            one of the filters.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 rounded-lg bg-[#159447] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#117C3B]"
          >
            Clear Filters
          </button>

        </div>
      )}

    </div>
  );
};

export default RecommendedChallenges;