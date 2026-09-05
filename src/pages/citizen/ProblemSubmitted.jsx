import React from "react";
import { Link, useLocation } from "react-router-dom";

function ProblemSubmitted() {
  const location = useLocation();

  const savedProblem = JSON.parse(
    sessionStorage.getItem("socioSolveSubmittedProblem") || "{}"
  );

  const problemId =
    location.state?.problemId || savedProblem.id || "PROB-PENDING";

  const problemTitle = savedProblem.title || "Your reported problem";

  const category = formatCategory(savedProblem.category);

  return (
    <div className="min-h-screen bg-[#f5f8f7]">
      <div className="mx-auto flex min-h-screen w-full max-w-[1100px] flex-col">
        <main className="flex flex-1 items-center justify-center px-5 py-12">
          <div className="w-full max-w-[620px]">
            <div className="rounded-2xl border border-[#DDE5EC] bg-white px-6 py-8 text-center shadow-sm sm:px-10 sm:py-10">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E5F5ED] text-[30px] text-[#15915D]">
                ✓
              </div>

              <h1 className="mt-5 text-[25px] font-bold text-[#082e5c]">
                Problem Submitted Successfully!
              </h1>

              <p className="mx-auto mt-3 max-w-[470px] text-[13px] leading-6 text-[#667085]">
                Thank you for helping improve your community. Your problem has
                been submitted and will now go through the verification
                process.
              </p>

              <div className="mt-7 rounded-xl bg-[#F8FAFB] px-5 py-5 text-left">
                <div className="flex items-center justify-between border-b border-[#E7EDF2] pb-4">
                  <span className="text-[11px] font-semibold text-[#98A2B3]">
                    Problem ID
                  </span>

                  <span className="text-[13px] font-bold text-[#15915D]">
                    {problemId}
                  </span>
                </div>

                <div className="space-y-4 pt-4">
                  <InfoRow label="Problem" value={problemTitle} />
                  <InfoRow label="Category" value={category} />
                  <InfoRow label="Status" value="Submitted" />
                </div>
              </div>

              <div className="mt-5 rounded-lg border border-[#DDE5EC] bg-white px-4 py-4 text-left">
                <p className="text-[12px] font-bold text-[#243B53]">
                  What happens next?
                </p>

                <div className="mt-4 space-y-3">
                  <StatusStep
                    number="1"
                    title="Submitted"
                    description="Your problem has been received."
                    active
                  />

                  <StatusStep
                    number="2"
                    title="Verification"
                    description="Our reviewer will verify the problem."
                  />

                  <StatusStep
                    number="3"
                    title="Assignment"
                    description="The problem will be sent to the appropriate team."
                  />

                  <StatusStep
                    number="4"
                    title="Resolution"
                    description="You will receive updates until resolution."
                  />
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  to="/citizen/problems"
                  className="inline-flex items-center justify-center rounded-md border border-[#D5DEE7] bg-white px-5 py-3 text-[12px] font-bold text-[#243B53] transition hover:bg-[#F8FAFB]"
                >
                  View My Problems
                </Link>

                <Link
                  to="/citizen/dashboard"
                  className="inline-flex items-center justify-center rounded-md bg-[#15915D] px-5 py-3 text-[12px] font-bold text-white shadow-sm transition hover:bg-[#107849]"
                >
                  Go to Dashboard
                </Link>
              </div>

              <Link
                to="/citizen/report"
                className="mt-5 inline-block text-[11px] font-semibold text-[#15915D] hover:underline"
              >
                Report another problem
              </Link>
            </div>
          </div>
        </main>

        <div className="relative h-[95px] overflow-hidden bg-gradient-to-b from-white to-[#edf7f1] sm:h-[115px]">
          <div className="absolute bottom-[-25px] left-[8%] h-[70px] w-[180px] rounded-t-full border-[8px] border-[#d7ebe1] opacity-70" />
          <div className="absolute bottom-[-35px] left-[28%] h-[90px] w-[220px] rounded-t-full border-[9px] border-[#dcefe5] opacity-60" />
          <div className="absolute bottom-[-30px] right-[18%] h-[80px] w-[200px] rounded-t-full border-[8px] border-[#d7ebe1] opacity-60" />
          <div className="absolute bottom-[-45px] right-[2%] h-[100px] w-[250px] rounded-t-full border-[10px] border-[#e1f2e9] opacity-60" />
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <span className="text-[11px] font-semibold text-[#98A2B3]">
        {label}
      </span>

      <span className="max-w-[70%] text-right text-[12px] font-semibold text-[#243B53]">
        {value}
      </span>
    </div>
  );
}

function StatusStep({ number, title, description, active }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
          active
            ? "bg-[#15915D] text-white"
            : "bg-[#EEF2F5] text-[#98A2B3]"
        }`}
      >
        {active ? "✓" : number}
      </div>

      <div>
        <p
          className={`text-[11px] font-bold ${
            active ? "text-[#15915D]" : "text-[#243B53]"
          }`}
        >
          {title}
        </p>

        <p className="mt-1 text-[10px] leading-4 text-[#98A2B3]">
          {description}
        </p>
      </div>
    </div>
  );
}

function formatCategory(category) {
  const categories = {
    roads: "Roads & Infrastructure",
    water: "Water & Sanitation",
    electricity: "Electricity",
    waste: "Waste Management",
    "street-light": "Street Light",
    other: "Other",
  };

  return categories[category] || "Not provided";
}

export default ProblemSubmitted;