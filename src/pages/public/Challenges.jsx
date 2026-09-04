import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Droplets,
  GraduationCap,
  HeartPulse,
  Leaf,
  MapPin,
  Search,
  ShieldCheck,
  Sprout,
  Wrench,
} from "lucide-react";

const challenges = [
  {
    id: 1,
    title: "Unsafe Drinking Water in Village Areas",
    category: "Water & Sanitation",
    location: "Ranchi",
    description:
      "Many villages lack access to clean and safe drinking water.",
    status: "Verified",
    priority: "High Priority",
    icon: Droplets,
    iconBg: "bg-[#E8F5FB]",
    iconColor: "text-[#087FC2]",
    statusBg: "bg-[#E4F5EA]",
    statusColor: "text-[#23804A]",
    priorityBg: "bg-[#FCE7E7]",
    priorityColor: "text-[#D34D4D]",
  },
  {
    id: 2,
    title: "Low Crop Productivity in Rainy Season",
    category: "Agriculture",
    location: "Dumka",
    description:
      "Farmers face low productivity due to soil quality and water issues.",
    status: "Verified",
    priority: "Medium Priority",
    icon: Sprout,
    iconBg: "bg-[#EAF7EF]",
    iconColor: "text-[#15915D]",
    statusBg: "bg-[#E4F5EA]",
    statusColor: "text-[#23804A]",
    priorityBg: "bg-[#FFF1D9]",
    priorityColor: "text-[#D78A17]",
  },
  {
    id: 3,
    title: "Lack of Digital Learning Resources",
    category: "Education",
    location: "Hazaribagh",
    description:
      "Many schools do not have access to digital learning resources.",
    status: "Under Review",
    priority: "Medium Priority",
    icon: GraduationCap,
    iconBg: "bg-[#F0EAF9]",
    iconColor: "text-[#6844A4]",
    statusBg: "bg-[#E8F0FB]",
    statusColor: "text-[#3C68A2]",
    priorityBg: "bg-[#FFF1D9]",
    priorityColor: "text-[#D78A17]",
  },
  {
    id: 4,
    title: "Waste Management in Rural Areas",
    category: "Water & Sanitation",
    location: "Jamshedpur",
    description:
      "Rural communities need better systems for waste collection and disposal.",
    status: "Verified",
    priority: "High Priority",
    icon: Droplets,
    iconBg: "bg-[#E8F5FB]",
    iconColor: "text-[#087FC2]",
    statusBg: "bg-[#E4F5EA]",
    statusColor: "text-[#23804A]",
    priorityBg: "bg-[#FCE7E7]",
    priorityColor: "text-[#D34D4D]",
  },
  {
    id: 5,
    title: "Healthcare Access in Remote Villages",
    category: "Healthcare",
    location: "Palamu",
    description:
      "Remote villages have limited access to basic healthcare services.",
    status: "Verified",
    priority: "High Priority",
    icon: HeartPulse,
    iconBg: "bg-[#EEF3FA]",
    iconColor: "text-[#12345B]",
    statusBg: "bg-[#E4F5EA]",
    statusColor: "text-[#23804A]",
    priorityBg: "bg-[#FCE7E7]",
    priorityColor: "text-[#D34D4D]",
  },
  {
    id: 6,
    title: "Poor Rural Road Connectivity",
    category: "Infrastructure",
    location: "Gumla",
    description:
      "Poor road connectivity makes transportation difficult for rural communities.",
    status: "Under Review",
    priority: "Low Priority",
    icon: Wrench,
    iconBg: "bg-[#EEF3FA]",
    iconColor: "text-[#12345B]",
    statusBg: "bg-[#E8F0FB]",
    statusColor: "text-[#3C68A2]",
    priorityBg: "bg-[#E6F4EC]",
    priorityColor: "text-[#4D9170]",
  },
];

const categories = [
  "All Categories",
  "Water & Sanitation",
  "Agriculture",
  "Education",
  "Healthcare",
  "Environment",
  "Infrastructure",
];

const districts = [
  "All Districts",
  "Ranchi",
  "Dumka",
  "Hazaribagh",
  "Jamshedpur",
  "Palamu",
  "Gumla",
];

const statuses = [
  "All Statuses",
  "Verified",
  "Under Review",
];

function Challenges() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [district, setDistrict] = useState("All Districts");
  const [status, setStatus] = useState("All Statuses");

  const filteredChallenges = useMemo(() => {
    return challenges.filter((challenge) => {
      const searchMatch =
        challenge.title.toLowerCase().includes(search.toLowerCase()) ||
        challenge.description.toLowerCase().includes(search.toLowerCase());

      const categoryMatch =
        category === "All Categories" ||
        challenge.category === category;

      const districtMatch =
        district === "All Districts" ||
        challenge.location === district;

      const statusMatch =
        status === "All Statuses" ||
        challenge.status === status;

      return (
        searchMatch &&
        categoryMatch &&
        districtMatch &&
        statusMatch
      );
    });
  }, [search, category, district, status]);

  function clearFilters() {
    setSearch("");
    setCategory("All Categories");
    setDistrict("All Districts");
    setStatus("All Statuses");
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-[1500px] px-5 py-7 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <header className="relative">
          {/* Logo */}
          <Link
            to="/"
            className="absolute left-0 top-0 flex flex-col leading-none"
          >
            <span className="text-[22px] font-extrabold tracking-[-1px] text-[#12345B] sm:text-[24px]">
              Socio<span className="text-[#15915D]">Solve</span>
            </span>

            <span className="mt-0.5 pl-5 text-[7px] font-bold tracking-[1px] text-[#15915D]">
              Jharkhand
            </span>
          </Link>

          {/* Center heading */}
          <div className="px-16 text-center sm:px-24">
            <h1 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#07336B] sm:text-[32px]">
              Explore Challenges
            </h1>

            <p className="mt-1.5 text-[12px] font-medium text-[#243B53] sm:text-[13px]">
              Browse real problems from across Jharkhand
            </p>
          </div>
        </header>

        {/* =====================================================
            FILTERS
        ===================================================== */}
        <section className="mt-7">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[1.45fr_1fr_1fr_1fr_auto]">
            {/* Search */}
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#536B7F]"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search challenges..."
                className="h-[38px] w-full rounded-md border border-[#DCE3E9] bg-white pl-9 pr-3 text-[11px] text-[#243B53] outline-none transition placeholder:text-[#8292A1] focus:border-[#15915D] focus:ring-2 focus:ring-[#15915D]/10"
              />
            </div>

            <FilterSelect
              value={category}
              onChange={setCategory}
              options={categories}
            />

            <FilterSelect
              value={district}
              onChange={setDistrict}
              options={districts}
            />

            <FilterSelect
              value={status}
              onChange={setStatus}
              options={statuses}
            />

            <button
              type="button"
              className="h-[38px] rounded-md bg-[#15915D] px-7 text-[11px] font-bold text-white shadow-sm transition hover:bg-[#107849]"
            >
              Search
            </button>
          </div>
        </section>

        {/* =====================================================
            CHALLENGE GRID
        ===================================================== */}
        <section className="mt-4">
          {filteredChallenges.length > 0 ? (
            <div className="grid gap-3.5 md:grid-cols-2 lg:grid-cols-3">
              {filteredChallenges.map((challenge) => (
                <ChallengeCard
                  key={challenge.id}
                  challenge={challenge}
                />
              ))}
            </div>
          ) : (
            <EmptyState onClear={clearFilters} />
          )}
        </section>

        {/* =====================================================
            VIEW ALL
        ===================================================== */}
        <div className="mt-7 flex justify-center">
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex h-[38px] items-center justify-center rounded-md bg-[#07336B] px-7 text-[11px] font-bold text-white shadow-sm transition hover:bg-[#0A447F]"
          >
            View All Challenges
          </button>
        </div>
      </main>
    </div>
  );
}

/* ===============================================================
   CHALLENGE CARD
================================================================ */

function ChallengeCard({ challenge }) {
  const Icon = challenge.icon;

  return (
    <article className="min-h-[210px] rounded-xl border border-[#DDE4EA] bg-white p-5 shadow-[0_1px_5px_rgba(7,51,107,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {/* Category */}
      <div className="flex items-center gap-2">
        <div
          className={`flex h-7 w-7 items-center justify-center rounded-full ${challenge.iconBg} ${challenge.iconColor}`}
        >
          <Icon size={15} strokeWidth={2.2} />
        </div>

        <span
          className={`text-[10px] font-bold ${challenge.iconColor}`}
        >
          {challenge.category}
        </span>
      </div>

      {/* Title */}
      <Link to={`/challenges/${challenge.id}`}>
        <h2 className="mt-3 line-clamp-2 min-h-[40px] text-[16px] font-extrabold leading-5 text-[#07336B] transition hover:text-[#15915D]">
          {challenge.title}
        </h2>
      </Link>

      {/* Location */}
      <div className="mt-2 flex items-center gap-1.5 text-[10px] font-medium text-[#536B7F]">
        <MapPin size={12} strokeWidth={2.2} />
        <span>{challenge.location}, Jharkhand</span>
      </div>

      {/* Description */}
      <p className="mt-3 line-clamp-2 min-h-[32px] text-[11px] leading-4 text-[#536B7F]">
        {challenge.description}
      </p>

      {/* Bottom */}
      <div className="mt-4 flex items-center justify-between gap-2">
        <span
          className={`rounded-full px-2.5 py-1 text-[9px] font-bold ${challenge.statusBg} ${challenge.statusColor}`}
        >
          {challenge.status}
        </span>

        <span
          className={`rounded-full px-2.5 py-1 text-[9px] font-bold ${challenge.priorityBg} ${challenge.priorityColor}`}
        >
          {challenge.priority}
        </span>
      </div>

      {/* Details link */}
      <Link
        to={`/challenges/${challenge.id}`}
        className="mt-3 flex items-center justify-end gap-1 text-[9px] font-bold text-[#07336B] transition hover:text-[#15915D]"
      >
        View Details
        <ArrowRight size={12} />
      </Link>
    </article>
  );
}

/* ===============================================================
   FILTER SELECT
================================================================ */

function FilterSelect({ value, onChange, options }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-[38px] w-full appearance-none rounded-md border border-[#DCE3E9] bg-white px-3 pr-9 text-[11px] font-medium text-[#243B53] outline-none transition focus:border-[#15915D] focus:ring-2 focus:ring-[#15915D]/10"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={15}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#536B7F]"
      />
    </div>
  );
}

/* ===============================================================
   EMPTY STATE
================================================================ */

function EmptyState({ onClear }) {
  return (
    <div className="rounded-xl border border-dashed border-[#CBD7E0] px-5 py-14 text-center">
      <Search
        size={30}
        className="mx-auto text-[#9AAAB8]"
      />

      <h2 className="mt-4 text-base font-bold text-[#07336B]">
        No challenges found
      </h2>

      <p className="mt-1 text-xs text-[#6B7C8C]">
        Try changing your search or filters.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="mt-5 rounded-md bg-[#07336B] px-5 py-2.5 text-[11px] font-bold text-white"
      >
        Clear Filters
      </button>
    </div>
  );
}

export default Challenges;