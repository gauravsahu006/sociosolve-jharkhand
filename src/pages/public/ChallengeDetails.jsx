import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  FileText,
  Image as ImageIcon,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";

const challengeData = {
  1: {
    title: "Unsafe Drinking Water in Village Areas",
    category: "Water & Sanitation",
    location: "Ranchi District, Jharkhand",
    district: "Ranchi",
    submittedBy: "Ramesh Kumar",
    submittedOn: "12 May 2024",
    village: "Kanke Block, Village - Bero",
    status: "Verified",
    priority: "High Priority",
    date: "Problem ID: CH-0001",
    description:
      "Many villages in the region do not have access to clean and safe drinking water. People rely on contaminated sources which causes water-borne diseases. We need a sustainable and affordable solution for clean water.",
  },

  2: {
    title: "Low Crop Productivity in Rainy Season",
    category: "Agriculture",
    location: "Dumka, Jharkhand",
    district: "Dumka",
    submittedBy: "Community Representative",
    submittedOn: "18 June 2024",
    village: "Dumka Rural",
    status: "Verified",
    priority: "Medium Priority",
    date: "Problem ID: CH-0002",
    description:
      "Farmers face low crop productivity during the rainy season due to soil quality, water management and unpredictable weather conditions.",
  },

  3: {
    title: "Lack of Digital Learning Resources",
    category: "Education",
    location: "Hazaribagh, Jharkhand",
    district: "Hazaribagh",
    submittedBy: "School Representative",
    submittedOn: "05 July 2024",
    village: "Hazaribagh Rural",
    status: "Under Review",
    priority: "Medium Priority",
    date: "Problem ID: CH-0003",
    description:
      "Many schools do not have access to digital learning resources, limiting students' access to modern educational content and tools.",
  },

  4: {
    title: "Waste Management in Rural Areas",
    category: "Water & Sanitation",
    location: "Jamshedpur, Jharkhand",
    district: "Jamshedpur",
    submittedBy: "Community Representative",
    submittedOn: "21 July 2024",
    village: "Rural Jamshedpur",
    status: "Verified",
    priority: "High Priority",
    date: "Problem ID: CH-0004",
    description:
      "Rural communities need better systems for waste collection, segregation and disposal to maintain clean and healthy surroundings.",
  },

  5: {
    title: "Healthcare Access in Remote Villages",
    category: "Healthcare",
    location: "Palamu, Jharkhand",
    district: "Palamu",
    submittedBy: "Village Health Worker",
    submittedOn: "02 August 2024",
    village: "Remote Palamu",
    status: "Verified",
    priority: "High Priority",
    date: "Problem ID: CH-0005",
    description:
      "Remote villages have limited access to basic healthcare services and need affordable ways to connect citizens with essential medical support.",
  },

  6: {
    title: "Poor Rural Road Connectivity",
    category: "Infrastructure",
    location: "Gumla, Jharkhand",
    district: "Gumla",
    submittedBy: "Local Resident",
    submittedOn: "15 August 2024",
    village: "Gumla Rural",
    status: "Under Review",
    priority: "Low Priority",
    date: "Problem ID: CH-0006",
    description:
      "Poor road connectivity makes transportation difficult for rural communities and affects access to schools, healthcare and local markets.",
  },
};

const gallery = [
  {
    type: "water",
  },
  {
    type: "field",
  },
  {
    type: "village",
  },
  {
    type: "more",
  },
];

function ChallengeDetails() {
  const { id } = useParams();

  const challenge = challengeData[id] || challengeData[1];

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-[1500px] px-5 py-5 sm:px-8 lg:px-10">
        {/* =====================================================
            BACK
        ===================================================== */}
        <Link
          to="/challenges"
          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#243B53] transition hover:text-[#15915D]"
        >
          <ArrowLeft size={14} />
          Back to Challenges
        </Link>

        {/* =====================================================
            TOP SECTION
        ===================================================== */}
        <section className="mt-5 grid gap-7 lg:grid-cols-[1fr_310px]">
          {/* LEFT */}
          <div>
            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-[#DDF0FA] px-3 py-1.5 text-[10px] font-bold text-[#087FC2]">
                {challenge.category}
              </span>

              <span className="ml-auto rounded-full bg-[#E4F5EA] px-3 py-1.5 text-[10px] font-bold text-[#23804A] sm:ml-0">
                {challenge.status}
              </span>

              <span className="rounded-full bg-[#FCE7E7] px-3 py-1.5 text-[10px] font-bold text-[#D34D4D]">
                {challenge.priority}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-5 max-w-[800px] text-[28px] font-extrabold leading-[1.15] tracking-[-0.7px] text-[#07336B] sm:text-[32px]">
              {challenge.title}
            </h1>

            {/* Meta */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#536B7F]">
                <MapPin size={14} />
                {challenge.location}
              </div>

              <span className="text-[9px] font-medium text-[#7A8997]">
                {challenge.date}
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 max-w-[850px] text-[12px] leading-5 text-[#4D6072]">
              {challenge.description}
            </p>

            {/* Gallery */}
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {gallery.map((item, index) => (
                <GalleryImage
                  key={index}
                  type={item.type}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* ===================================================
              DETAILS SIDEBAR
          =================================================== */}
          <aside className="h-fit rounded-xl border border-[#E0E6EB] bg-white p-5 shadow-[0_1px_5px_rgba(7,51,107,0.04)]">
            <h2 className="text-[14px] font-extrabold text-[#07336B]">
              Details
            </h2>

            <div className="mt-5 space-y-4">
              <DetailRow
                label="Category"
                value={challenge.category}
              />

              <DetailRow
                label="Submitted By"
                value={challenge.submittedBy}
              />

              <DetailRow
                label="Submitted On"
                value={challenge.submittedOn}
              />

              <DetailRow
                label="District"
                value={challenge.district}
              />

              <DetailRow
                label="Location"
                value={challenge.village}
              />

              <DetailRow
                label="Status"
                value={challenge.status}
              />

              <DetailRow
                label="Priority"
                value={challenge.priority.replace(" Priority", "")}
                valueClass={
                  challenge.priority === "High Priority"
                    ? "text-[#D34D4D]"
                    : "text-[#D78A17]"
                }
              />
            </div>
          </aside>
        </section>

        {/* =====================================================
            LOWER SECTION
        ===================================================== */}
        <section className="mt-6 grid gap-7 border-t border-[#E1E7EC] pt-5 lg:grid-cols-[1fr_310px]">
          {/* LEFT CONTENT */}
          <div>
            {/* Tabs */}
            <div className="flex items-center gap-7 border-b border-[#E1E7EC]">
              <button
                type="button"
                className="relative pb-3 text-[11px] font-extrabold text-[#07336B]"
              >
                Problem Description
                <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#07336B]" />
              </button>

              <button
                type="button"
                className="pb-3 text-[11px] font-medium text-[#536B7F]"
              >
                Location
              </button>

              <button
                type="button"
                className="pb-3 text-[11px] font-medium text-[#536B7F]"
              >
                Documents
              </button>

              <button
                type="button"
                className="pb-3 text-[11px] font-medium text-[#536B7F]"
              >
                Activity
              </button>
            </div>

            {/* Description */}
            <div className="py-6">
              <p className="max-w-[760px] text-[12px] leading-6 text-[#536B7F]">
                The villagers face serious issues with the quality and
                availability of drinking water.
                <br />
                Most water sources are polluted and cause health problems.
                <br />
                There is an urgent need for a cost-effective and long-term
                solution.
              </p>

              {/* Problem points */}
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <ProblemPoint
                  icon={<DropletIcon />}
                  title="Clean Water"
                  text="Improve access to safe drinking water."
                />

                <ProblemPoint
                  icon={<ShieldCheck size={16} />}
                  title="Health"
                  text="Reduce water-borne health risks."
                />

                <ProblemPoint
                  icon={<Users size={16} />}
                  title="Community"
                  text="Create a sustainable local solution."
                />
              </div>
            </div>
          </div>

          {/* ACTIVITY */}
          <aside className="h-fit rounded-xl border border-[#E1E7EC] bg-white p-5 shadow-[0_1px_5px_rgba(7,51,107,0.03)]">
            <h2 className="text-[13px] font-extrabold text-[#07336B]">
              Activity Timeline
            </h2>

            <div className="mt-6 flex gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8F6EF] text-[#15915D]">
                <CheckCircle2 size={15} />
              </div>

              <div>
                <p className="text-[11px] font-bold text-[#07336B]">
                  Problem Submitted
                </p>

                <div className="mt-1 flex items-center gap-1.5 text-[9px] text-[#718292]">
                  <CalendarDays size={11} />
                  {challenge.submittedOn}
                </div>
              </div>
            </div>

            <TimelineItem
              icon={<ShieldCheck size={15} />}
              title="Problem Verified"
              date="18 May 2024"
            />

            <TimelineItem
              icon={<MessageCircle size={15} />}
              title="Community Discussion"
              date="24 May 2024"
            />
          </aside>
        </section>
      </main>
    </div>
  );
}

/* ===============================================================
   DETAIL ROW
================================================================ */

function DetailRow({
  label,
  value,
  valueClass = "text-[#243B53]",
}) {
  return (
    <div className="grid grid-cols-[105px_1fr] gap-3 text-[10px]">
      <span className="font-semibold text-[#536B7F]">
        {label}
      </span>

      <span className={`font-bold ${valueClass}`}>
        {value}
      </span>
    </div>
  );
}

/* ===============================================================
   GALLERY
================================================================ */

function GalleryImage({ type, index }) {
  if (type === "more") {
    return (
      <div className="relative flex h-[105px] items-center justify-center overflow-hidden rounded-lg bg-[#30475D]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5E7180] to-[#243B53]" />

        <span className="relative text-2xl font-extrabold text-white">
          +3
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-[105px] overflow-hidden rounded-lg border border-[#DDE5EA]">
      <div
        className={`absolute inset-0 ${
          type === "water"
            ? "bg-gradient-to-b from-[#8FAFC3] via-[#D6E4E8] to-[#C2AA82]"
            : type === "field"
            ? "bg-gradient-to-b from-[#A9C6D6] via-[#D8E4D2] to-[#7C9D58]"
            : "bg-gradient-to-b from-[#A7C0CB] via-[#D3D8C8] to-[#9B7959]"
        }`}
      />

      {/* Simple illustration */}
      {type === "water" && (
        <>
          <div className="absolute bottom-4 left-1/2 h-10 w-16 -translate-x-1/2 rounded-full border-4 border-[#7C8C92] bg-[#A9CBD8]" />
          <div className="absolute bottom-[48px] left-1/2 h-5 w-1 -translate-x-1/2 bg-[#7D8B91]" />
          <div className="absolute bottom-[60px] left-1/2 h-1 w-8 -translate-x-1/2 rotate-12 bg-[#7D8B91]" />
        </>
      )}

      {type === "field" && (
        <>
          <div className="absolute bottom-4 left-4 h-14 w-1 bg-[#5E744C]" />
          <div className="absolute bottom-14 left-3 h-8 w-8 rounded-full bg-[#6F9A5E]" />
          <div className="absolute bottom-10 right-8 h-12 w-1 bg-[#5E744C]" />
          <div className="absolute bottom-20 right-6 h-7 w-7 rounded-full bg-[#739F63]" />
        </>
      )}

      {type === "village" && (
        <>
          <div className="absolute bottom-4 left-1/2 h-14 w-20 -translate-x-1/2 rounded-t-lg bg-[#B27F5A]" />
          <div className="absolute bottom-[52px] left-1/2 h-0 w-0 -translate-x-1/2 border-x-[42px] border-b-[28px] border-x-transparent border-b-[#6E6654]" />
          <div className="absolute bottom-4 left-1/2 h-6 w-5 -translate-x-1/2 bg-[#D7C4A3]" />
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 h-5 bg-[#78905E]/50" />

      <span className="absolute left-2 top-2 rounded bg-white/80 px-1.5 py-0.5 text-[7px] font-bold text-[#243B53]">
        Image {index + 1}
      </span>
    </div>
  );
}

/* ===============================================================
   PROBLEM POINT
================================================================ */

function ProblemPoint({ icon, title, text }) {
  return (
    <div className="rounded-lg border border-[#E1E7EC] bg-[#FAFCFD] p-4">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E8F6EF] text-[#15915D]">
        {icon}
      </div>

      <h3 className="mt-3 text-[10px] font-bold text-[#07336B]">
        {title}
      </h3>

      <p className="mt-1 text-[9px] leading-4 text-[#6B7C8C]">
        {text}
      </p>
    </div>
  );
}

/* ===============================================================
   TIMELINE ITEM
================================================================ */

function TimelineItem({ icon, title, date }) {
  return (
    <div className="mt-5 flex gap-3 border-t border-[#EEF2F5] pt-5">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF4FA] text-[#07336B]">
        {icon}
      </div>

      <div>
        <p className="text-[11px] font-bold text-[#07336B]">
          {title}
        </p>

        <div className="mt-1 flex items-center gap-1.5 text-[9px] text-[#718292]">
          <CalendarDays size={11} />
          {date}
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   DROPLET
================================================================ */

function DropletIcon() {
  return <span className="text-[15px]">💧</span>;
}

export default ChallengeDetails;