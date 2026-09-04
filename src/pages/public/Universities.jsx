import { Link } from "react-router-dom";
import { ChevronDown, ArrowRight, GraduationCap } from "lucide-react";
import { useMemo, useState } from "react";

const universities = [
  {
    id: 1,
    name: "BIT Mesra",
    district: "Ranchi",
    focus: "Engineering, Technology, Innovation",
    variant: "blue",
  },
  {
    id: 2,
    name: "Ranchi University",
    district: "Ranchi",
    focus: "Science, Humanities, Social Sciences",
    variant: "blue",
  },
  {
    id: 3,
    name: "Kolhan University",
    district: "Chaibasa",
    focus: "Tribal Studies, Environment, Development",
    variant: "blue",
  },
  {
    id: 4,
    name: "Vinoba Bhave University",
    district: "Hazaribagh",
    focus: "Agriculture, Forestry, Rural Development",
    variant: "green",
  },
  {
    id: 5,
    name: "Nilamber Pitamber University",
    district: "Medinagar",
    focus: "Commerce, Management, Humanities",
    variant: "blue",
  },
  {
    id: 6,
    name: "Sidho Kanho Murmu University",
    district: "Dumka",
    focus: "Tribal Studies, Education, Culture",
    variant: "blue",
  },
  {
    id: 7,
    name: "Jharkhand University of Technology",
    district: "Ranchi",
    focus: "Engineering, Technology, Research",
    variant: "blue",
  },
  {
    id: 8,
    name: "Central University of Jharkhand",
    district: "Ranchi",
    focus: "Multi-disciplinary Research & Innovation",
    variant: "green",
  },
];

const districts = [
  "All Districts",
  "Ranchi",
  "Chaibasa",
  "Hazaribagh",
  "Medinagar",
  "Dumka",
];

function Universities() {
  const [district, setDistrict] = useState("All Districts");

  const filteredUniversities = useMemo(() => {
    if (district === "All Districts") {
      return universities;
    }

    return universities.filter(
      (university) => university.district === district
    );
  }, [district]);

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-[1500px] px-5 py-6 sm:px-8 lg:px-10">
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
          <div className="px-16 text-center sm:px-28">
            <h1 className="text-[27px] font-extrabold tracking-[-0.7px] text-[#07336B] sm:text-[31px]">
              Our Partner Universities
            </h1>

            <p className="mt-1.5 text-[11px] font-medium text-[#243B53] sm:text-[12px]">
              Empowering innovation through knowledge and research
            </p>
          </div>

          {/* District dropdown */}
          <div className="absolute right-0 top-0">
            <div className="relative">
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="h-[35px] w-[150px] appearance-none rounded-md border border-[#DCE3E9] bg-white px-3 pr-8 text-[10px] font-semibold text-[#536B7F] outline-none transition focus:border-[#15915D]"
              >
                {districts.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#536B7F]"
              />
            </div>
          </div>
        </header>

        {/* =====================================================
            UNIVERSITY GRID
        ===================================================== */}
        <section className="mt-6">
          {filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {filteredUniversities.map((university) => (
                <UniversityCard
                  key={university.id}
                  university={university}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-[#D5DFE7] py-14 text-center">
              <GraduationCap
                size={30}
                className="mx-auto text-[#9AAAB8]"
              />

              <p className="mt-3 text-sm font-bold text-[#07336B]">
                No universities found
              </p>

              <button
                type="button"
                onClick={() => setDistrict("All Districts")}
                className="mt-4 rounded-md bg-[#07336B] px-5 py-2 text-[10px] font-bold text-white"
              >
                View All Universities
              </button>
            </div>
          )}
        </section>

        {/* =====================================================
            VIEW ALL
        ===================================================== */}
        <div className="mt-3 flex justify-center">
          <button
            type="button"
            onClick={() => setDistrict("All Districts")}
            className="inline-flex h-[36px] items-center justify-center rounded-md bg-[#07336B] px-8 text-[10px] font-bold text-white shadow-sm transition hover:bg-[#0A447F]"
          >
            View All Universities
          </button>
        </div>
      </main>
    </div>
  );
}

/* ===============================================================
   UNIVERSITY CARD
================================================================ */

function UniversityCard({ university }) {
  const isGreen = university.variant === "green";

  return (
    <article className="group flex min-h-[220px] flex-col items-center rounded-xl border border-[#DDE4EA] bg-white px-5 py-4 text-center shadow-[0_1px_5px_rgba(7,51,107,0.035)] transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {/* Logo */}
      <UniversityLogo green={isGreen} />

      {/* Name */}
      <h2 className="mt-3 min-h-[36px] max-w-[190px] text-[14px] font-extrabold leading-[18px] text-[#07336B] sm:text-[15px]">
        {university.name}
      </h2>

      {/* District */}
      <p className="mt-1 text-[10px] font-bold text-[#243B53]">
        {university.district}
      </p>

      {/* Focus */}
      <p className="mt-2 min-h-[34px] max-w-[190px] text-[10px] leading-[15px] text-[#536B7F]">
        Focus area: {university.focus}
      </p>

      {/* Button */}
      <Link
        to={`/universities/${university.id}`}
        className="mt-auto flex h-[30px] w-full max-w-[154px] items-center justify-center rounded-md border border-[#9FB3C2] text-[10px] font-bold text-[#07336B] transition hover:border-[#15915D] hover:bg-[#15915D] hover:text-white"
      >
        View University
      </Link>
    </article>
  );
}

/* ===============================================================
   UNIVERSITY LOGO
================================================================ */

function UniversityLogo({ green = false }) {
  return (
    <div
      className={`relative flex h-[58px] w-[58px] items-center justify-center rounded-full border-[3px] ${
        green
          ? "border-[#23804A] bg-[#F1F8F3]"
          : "border-[#45698E] bg-[#F3F6F9]"
      }`}
    >
      {/* Outer ring */}
      <div
        className={`absolute inset-[5px] rounded-full border ${
          green ? "border-[#77A98B]" : "border-[#8CA4B9]"
        }`}
      />

      {/* Inner symbol */}
      <div
        className={`relative flex h-[28px] w-[28px] items-center justify-center rounded-full ${
          green ? "text-[#23804A]" : "text-[#45698E]"
        }`}
      >
        <GraduationCap
          size={25}
          strokeWidth={1.7}
        />
      </div>
    </div>
  );
}

export default Universities;