import React from "react";
import { useNavigate } from "react-router-dom";

const universities = [
  {
    name: "BIT Mesra",
    location: "Ranchi, Jharkhand",
    score: "95%",
    logo: "◉",
  },
  {
    name: "Ranchi University",
    location: "Ranchi, Jharkhand",
    score: "88%",
    logo: "◉",
  },
  {
    name: "Central University of Jharkhand",
    location: "Ranchi, Jharkhand",
    score: "78%",
    logo: "◉",
  },
];

const reasons = [
  "Expertise in Water Management and Civil Engineering",
  "Active student projects in similar domains",
  "Proximity to problem location",
  "High past acceptance rate",
];

function UniversityMatching() {
  const navigate = useNavigate();

  const handleSelectUniversity = (university) => {
    sessionStorage.setItem(
      "socioSolveSelectedUniversity",
      JSON.stringify(university)
    );

    navigate("/reviewer/assign-university");
  };

  return (
    <div className="min-h-screen w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[900px]">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <h1 className="text-lg font-bold text-[#082e5c] sm:text-xl">
              Recommended Universities
            </h1>

            <p className="mt-1 text-xs text-[#68757d] sm:text-sm">
              Based on category, location &amp; expertise
            </p>

            <div className="mt-4 space-y-2">
              {universities.map((university) => (
                <UniversityCard
                  key={university.name}
                  university={university}
                  onSelect={handleSelectUniversity}
                />
              ))}
            </div>

            <div className="mt-5 flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => navigate("/universities")}
                className="flex h-10 items-center justify-center rounded-md border border-[#b8cbd1] px-7 text-xs font-bold text-[#082e5c] transition hover:bg-[#f4f8f6]"
              >
                View All Universities
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-[#e2e8eb] bg-white p-5 sm:p-6">
            <h2 className="text-sm font-bold text-[#082e5c] sm:text-base">
              Why these universities?
            </h2>

            <div className="mt-5 space-y-4">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-2.5"
                >
                  <span className="mt-0.5 text-sm font-bold text-[#07865c]">
                    ✓
                  </span>

                  <p className="text-xs leading-5 text-[#344653] sm:text-[13px]">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UniversityCard({ university, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(university)}
      className="flex w-full items-center gap-3 rounded-md border border-[#e1e7ea] bg-white px-3 py-3 text-left transition hover:border-[#07865c] hover:bg-[#f8fcfa] sm:px-4"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef4f8] text-xl text-[#244e76]">
        {university.logo}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-xs font-bold text-[#082e5c] sm:text-sm">
          {university.name}
        </h3>

        <p className="mt-1 text-[10px] text-[#68757d] sm:text-xs">
          {university.location}
        </p>
      </div>

      <div className="shrink-0 text-right">
        <p className="text-[9px] font-semibold text-[#52616b] sm:text-[10px]">
          Match Score
        </p>

        <span className="mt-1 inline-flex rounded-md border border-[#a9cdbd] bg-[#f2faf6] px-3 py-1 text-sm font-bold text-[#28735c]">
          {university.score}
        </span>
      </div>
    </button>
  );
}

export default UniversityMatching;