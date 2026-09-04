import { Link } from "react-router-dom";
import { ChevronDown, MapPin, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Solar Powered Smart Irrigation System",
    category: "Agriculture",
    university: "BIT Mesra",
    description:
      "An IoT based irrigation system to save water and increase productivity.",
    image: "agriculture",
    categoryBg: "bg-[#E6F4EA]",
    categoryText: "text-[#23804A]",
  },
  {
    id: 2,
    title: "Low-Cost Water Purification Unit",
    category: "Water & Sanitation",
    university: "Ranchi University",
    description:
      "Affordable water purification solution for rural households.",
    image: "water",
    categoryBg: "bg-[#E5F3FA]",
    categoryText: "text-[#087FC2]",
  },
  {
    id: 3,
    title: "Digital Learning Smart Classroom",
    category: "Education",
    university: "Kolhan University",
    description:
      "Smart classroom setup for rural schools with digital content.",
    image: "education",
    categoryBg: "bg-[#EEE9FA]",
    categoryText: "text-[#6844A4]",
  },
  {
    id: 4,
    title: "Biodegradable Waste Management System",
    category: "Environment",
    university: "Central University of Jharkhand",
    description:
      "Sustainable waste management solution for rural areas.",
    image: "environment",
    categoryBg: "bg-[#E7F4EA]",
    categoryText: "text-[#23804A]",
  },
];

const categories = [
  "All Categories",
  "Agriculture",
  "Water & Sanitation",
  "Education",
  "Environment",
];

function Projects() {
  const [category, setCategory] = useState("All Categories");

  const filteredProjects = useMemo(() => {
    if (category === "All Categories") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === category
    );
  }, [category]);

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-[1500px] px-5 py-6 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <header className="relative text-center">
          <h1 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#07336B] sm:text-[32px]">
            Innovative Projects &amp; Solutions
          </h1>

          <p className="mt-1.5 text-[11px] font-medium text-[#243B53] sm:text-[12px]">
            Real solutions built for real problems
          </p>

          {/* Category Filter */}
          <div className="absolute right-0 top-0">
            <div className="relative">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-[37px] w-[170px] appearance-none rounded-md border border-[#DCE3E9] bg-white px-3 pr-9 text-[10px] font-semibold text-[#536B7F] outline-none transition focus:border-[#15915D]"
              >
                {categories.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#536B7F]"
              />
            </div>
          </div>
        </header>

        {/* =====================================================
            PROJECT GRID
        ===================================================== */}
        <section className="mt-8">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-[#D5DFE7] py-14 text-center">
              <p className="text-sm font-bold text-[#07336B]">
                No projects found
              </p>

              <button
                type="button"
                onClick={() => setCategory("All Categories")}
                className="mt-4 rounded-md bg-[#07336B] px-5 py-2 text-[10px] font-bold text-white"
              >
                View All Projects
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
            onClick={() => setCategory("All Categories")}
            className="inline-flex h-[36px] items-center justify-center rounded-md bg-[#07336B] px-9 text-[10px] font-bold text-white shadow-sm transition hover:bg-[#0A447F]"
          >
            View All Projects
          </button>
        </div>
      </main>
    </div>
  );
}

/* ===============================================================
   PROJECT CARD
================================================================ */

function ProjectCard({ project }) {
  return (
    <article className="group flex min-h-[410px] flex-col overflow-hidden rounded-xl border border-[#DDE4EA] bg-white shadow-[0_1px_5px_rgba(7,51,107,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {/* Image */}
      <ProjectImage type={project.image} />

      {/* Content */}
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3.5">
        {/* Title */}
        <Link to={`/projects/${project.id}`}>
          <h2 className="min-h-[40px] text-[15px] font-extrabold leading-[19px] text-[#07336B] transition hover:text-[#15915D]">
            {project.title}
          </h2>
        </Link>

        {/* Category */}
        <div className="mt-2">
          <span
            className={`inline-flex rounded-full px-2.5 py-1 text-[9px] font-bold ${project.categoryBg} ${project.categoryText}`}
          >
            {project.category}
          </span>
        </div>

        {/* University */}
        <div className="mt-3 flex items-center gap-1.5 text-[10px] font-semibold text-[#536B7F]">
          <MapPin
            size={12}
            strokeWidth={2}
          />

          <span>{project.university}</span>
        </div>

        {/* Description */}
        <p className="mt-3 min-h-[48px] text-[10px] leading-[16px] text-[#536B7F]">
          {project.description}
        </p>

        {/* Button */}
        <Link
          to={`/projects/${project.id}`}
          className="mt-auto flex h-[38px] items-center justify-center gap-2 rounded-md border border-[#B7C5CF] text-[10px] font-bold text-[#15915D] transition hover:border-[#15915D] hover:bg-[#15915D] hover:text-white"
        >
          View Project
          <ArrowRight size={13} />
        </Link>
      </div>
    </article>
  );
}

/* ===============================================================
   PROJECT IMAGE
================================================================ */

function ProjectImage({ type }) {
  return (
    <div className="relative h-[150px] w-full overflow-hidden">
      {type === "agriculture" && <AgricultureImage />}
      {type === "water" && <WaterImage />}
      {type === "education" && <EducationImage />}
      {type === "environment" && <EnvironmentImage />}
    </div>
  );
}

/* ===============================================================
   AGRICULTURE IMAGE
================================================================ */

function AgricultureImage() {
  return (
    <div className="absolute inset-0 bg-[#B9D7E4]">
      {/* Sky */}
      <div className="absolute inset-x-0 top-0 h-[65%] bg-gradient-to-b from-[#91BDD0] to-[#D6E5E3]" />

      {/* Mountains */}
      <div className="absolute bottom-[57px] left-[-5%] h-[75px] w-[110%] bg-[#527D60] [clip-path:polygon(0_100%,18%_42%,31%_67%,48%_20%,62%_58%,78%_30%,100%_72%,100%_100%)]" />

      {/* Field */}
      <div className="absolute bottom-0 left-0 right-0 h-[62px] bg-[#6C974F]" />

      <div className="absolute bottom-0 left-0 right-0 h-[35px] bg-[#80A85C] [clip-path:polygon(0_35%,20%_10%,42%_42%,62%_12%,82%_43%,100%_18%,100%_100%,0_100%)]" />

      {/* Crop rows */}
      <div className="absolute bottom-[14px] left-[8%] right-[8%] space-y-2 opacity-70">
        <div className="h-[2px] bg-[#B7CF76]" />
        <div className="h-[2px] bg-[#B7CF76]" />
        <div className="h-[2px] bg-[#B7CF76]" />
      </div>
    </div>
  );
}

/* ===============================================================
   WATER IMAGE
================================================================ */

function WaterImage() {
  return (
    <div className="absolute inset-0 bg-[#BFD6DF]">
      {/* Sky */}
      <div className="absolute inset-x-0 top-0 h-[55%] bg-gradient-to-b from-[#91BED2] to-[#DDE9E8]" />

      {/* Trees */}
      <div className="absolute bottom-[37px] left-0 right-0 h-[50px] bg-[#6E9B60] [clip-path:polygon(0_80%,5%_40%,9%_75%,14%_25%,20%_70%,26%_35%,33%_72%,40%_25%,47%_70%,55%_30%,62%_75%,69%_20%,76%_70%,84%_30%,92%_72%,100%_35%,100%_100%,0_100%)]" />

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-[42px] bg-[#91A963]" />

      {/* Water tank */}
      <div className="absolute bottom-[22px] left-1/2 h-[82px] w-[73px] -translate-x-1/2 rounded-b-[12px] rounded-t-[18px] bg-[#1977B7] shadow-md">
        <div className="absolute left-1/2 top-[-5px] h-[11px] w-[60px] -translate-x-1/2 rounded-full bg-[#0868A8]" />

        <div className="absolute left-1/2 top-[34px] h-[27px] w-[38px] -translate-x-1/2 rounded-md border-2 border-[#164C70] bg-[#DDE8E8]" />

        <div className="absolute bottom-[7px] left-1/2 h-[6px] w-[45px] -translate-x-1/2 rounded-full bg-[#125E91]" />
      </div>
    </div>
  );
}

/* ===============================================================
   EDUCATION IMAGE
================================================================ */

function EducationImage() {
  return (
    <div className="absolute inset-0 bg-[#D4D7D1]">
      {/* Wall */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E4E5DE] to-[#BFC5BF]" />

      {/* Windows */}
      <div className="absolute left-4 top-5 h-[46px] w-[58px] border-4 border-[#6B777A] bg-[#B8D5DC]" />
      <div className="absolute right-4 top-5 h-[46px] w-[58px] border-4 border-[#6B777A] bg-[#B8D5DC]" />

      {/* Screen */}
      <div className="absolute left-1/2 top-4 h-[55px] w-[82px] -translate-x-1/2 rounded border-4 border-[#59656A] bg-[#D8ECE7]">
        <div className="absolute left-1/2 top-1/2 h-5 w-8 -translate-x-1/2 -translate-y-1/2 rounded bg-[#7FC1AA]" />
      </div>

      {/* Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[53px] bg-[#8D8173]" />

      {/* Desks */}
      <div className="absolute bottom-[23px] left-[12%] h-[17px] w-[75px] rounded-sm bg-[#795B47]" />
      <div className="absolute bottom-[23px] right-[12%] h-[17px] w-[75px] rounded-sm bg-[#795B47]" />

      {/* Students */}
      <div className="absolute bottom-[43px] left-[22%] h-[20px] w-[13px] rounded-full bg-[#243B53]" />
      <div className="absolute bottom-[43px] left-[45%] h-[20px] w-[13px] rounded-full bg-[#536B7F]" />
      <div className="absolute bottom-[43px] right-[22%] h-[20px] w-[13px] rounded-full bg-[#243B53]" />
    </div>
  );
}

/* ===============================================================
   ENVIRONMENT IMAGE
================================================================ */

function EnvironmentImage() {
  return (
    <div className="absolute inset-0 bg-[#AFC9D0]">
      {/* Sky */}
      <div className="absolute inset-x-0 top-0 h-[58%] bg-gradient-to-b from-[#8EB8C9] to-[#DCE6DC]" />

      {/* Trees */}
      <div className="absolute bottom-[48px] left-0 right-0 h-[75px] bg-[#4D8151] [clip-path:polygon(0_72%,7%_35%,14%_70%,21%_25%,29%_68%,38%_32%,47%_70%,56%_20%,64%_70%,73%_30%,81%_67%,90%_23%,100%_65%,100%_100%,0_100%)]" />

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-[53px] bg-[#79975C]" />

      {/* Waste containers */}
      <WasteBin className="left-[12%]" />
      <WasteBin className="left-[36%]" />
      <WasteBin className="left-[60%]" />
      <WasteBin className="right-[8%]" />
    </div>
  );
}

function WasteBin({ className }) {
  return (
    <div
      className={`absolute bottom-[16px] h-[42px] w-[48px] rounded-[8px] bg-[#4B9860] shadow-sm ${className}`}
    >
      <div className="absolute left-1/2 top-[-5px] h-[7px] w-[52px] -translate-x-1/2 rounded bg-[#36794A]" />

      <div className="absolute left-1/2 top-[13px] h-[17px] w-[15px] -translate-x-1/2 rounded bg-[#B9D6B8]/60" />
    </div>
  );
}

export default Projects;