import React from "react";
import { Link } from "react-router-dom";

const verificationProblems = [
  {
    id: "PROB-001",
    title: "Water Logging in Street 12",
    category: "Water & Sanitation",
    location: "Street 12, Harmu, Ranchi",
    submittedOn: "16 May 2024",
    priority: "High",
    priorityStyle: "bg-[#fff0f0] text-[#d63b42]",
  },
  {
    id: "PROB-002",
    title: "Garbage not collected in Ward 15",
    category: "Waste Management",
    location: "Ward 15, Ranchi",
    submittedOn: "15 May 2024",
    priority: "Medium",
    priorityStyle: "bg-[#fff5df] text-[#c98316]",
  },
  {
    id: "PROB-003",
    title: "Open Manhole on Road",
    category: "Road & Safety",
    location: "Kanke Road, Ranchi",
    submittedOn: "15 May 2024",
    priority: "High",
    priorityStyle: "bg-[#fff0f0] text-[#d63b42]",
  },
  {
    id: "PROB-004",
    title: "Broken Footpath near Main Road",
    category: "Road & Infrastructure",
    location: "Main Road, Ranchi",
    submittedOn: "14 May 2024",
    priority: "Low",
    priorityStyle: "bg-[#e9f8f1] text-[#07865c]",
  },
  {
    id: "PROB-005",
    title: "Street Light Not Working",
    category: "Electricity & Lighting",
    location: "Near Park, Ranchi",
    submittedOn: "14 May 2024",
    priority: "Medium",
    priorityStyle: "bg-[#fff5df] text-[#c98316]",
  },
  {
    id: "PROB-006",
    title: "Poor Rural Road Connectivity",
    category: "Road & Infrastructure",
    location: "Namkum, Ranchi",
    submittedOn: "13 May 2024",
    priority: "High",
    priorityStyle: "bg-[#fff0f0] text-[#d63b42]",
  },
];

function VerificationQueue() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-[1100px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              to="/reviewer/dashboard"
              className="text-[10px] font-semibold text-[#1765b0] hover:underline sm:text-xs"
            >
              ← Back to Dashboard
            </Link>

            <h1 className="mt-3 text-xl font-bold text-[#082e5c] sm:text-2xl">
              Verification Queue
            </h1>

            <p className="mt-1 text-[10px] text-[#68757d] sm:text-xs">
              Problems verified for review and awaiting detailed verification.
            </p>
          </div>

          <div className="w-fit rounded-full bg-[#fff5df] px-3 py-1.5 text-[9px] font-bold text-[#c98316] sm:text-[10px]">
            {verificationProblems.length} Awaiting Verification
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-[#e0e6e9] bg-white">
          <div className="border-b border-[#e5e9ec] px-5 py-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h2 className="text-sm font-bold text-[#082e5c]">
                  Problems in Queue
                </h2>

                <p className="mt-1 text-[10px] text-[#68757d]">
                  Select a problem to verify its details.
                </p>
              </div>

              <span className="text-[10px] font-semibold text-[#68757d]">
                Showing {verificationProblems.length} problems
              </span>
            </div>
          </div>

          <div className="divide-y divide-[#e5e9ec]">
            {verificationProblems.map((problem) => (
              <VerificationRow
                key={problem.id}
                problem={problem}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 flex justify-center">
          <Link
            to="/reviewer/new-problems"
            className="text-[10px] font-semibold text-[#1765b0] hover:underline sm:text-xs"
          >
            ← View New Problems
          </Link>
        </div>
      </div>
    </div>
  );
}

function VerificationRow({ problem }) {
  return (
    <div className="flex flex-col gap-4 px-5 py-5 lg:flex-row lg:items-center">
      <div className="flex min-w-0 flex-1 gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e9f4ff] text-lg font-bold text-[#1765b0]">
          ✓
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-sm font-bold text-[#082e5c] sm:text-[15px]">
              {problem.title}
            </h3>

            <span className="rounded bg-[#f1f4f6] px-2 py-0.5 text-[8px] font-semibold text-[#68757d]">
              {problem.id}
            </span>
          </div>

          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
            <p className="text-[10px] text-[#68757d]">
              {problem.category}
            </p>

            <p className="text-[10px] text-[#68757d]">
              {problem.location}
            </p>

            <p className="text-[10px] text-[#68757d]">
              Submitted: {problem.submittedOn}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 lg:justify-end">
        <span
          className={`rounded-full px-3 py-1 text-[8px] font-bold sm:text-[9px] ${problem.priorityStyle}`}
        >
          {problem.priority} Priority
        </span>

        <span className="rounded-full bg-[#eef5ff] px-3 py-1 text-[8px] font-semibold text-[#1765b0] sm:text-[9px]">
          Under Verification
        </span>

        <Link
          to={`/reviewer/verification/${problem.id}`}
          className="rounded-md bg-[#07865c] px-4 py-2 text-[9px] font-bold text-white transition hover:bg-[#06754f] sm:text-[10px]"
        >
          Verify
        </Link>
      </div>
    </div>
  );
}

export default VerificationQueue;