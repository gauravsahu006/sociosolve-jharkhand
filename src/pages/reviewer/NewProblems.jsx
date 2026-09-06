import React from "react";
import { Link } from "react-router-dom";

const problems = [
  {
    id: "PROB-001",
    title: "Water Logging in Street 12",
    location: "Ranchi, Jharkhand",
    date: "16 May 2024",
    priority: "High Priority",
    icon: "≋",
    iconStyle: "bg-[#e9f4ff] text-[#1765b0]",
    priorityStyle: "bg-[#fff0f0] text-[#d63b42]",
  },
  {
    id: "PROB-002",
    title: "Garbage not collected in Ward 15",
    location: "Ranchi, Jharkhand",
    date: "15 May 2024",
    priority: "Medium Priority",
    icon: "♜",
    iconStyle: "bg-[#eaf8f1] text-[#07865c]",
    priorityStyle: "bg-[#fff5df] text-[#c98316]",
  },
  {
    id: "PROB-003",
    title: "Open Manhole on Road",
    location: "Kanke Road, Ranchi",
    date: "15 May 2024",
    priority: "High Priority",
    icon: "◎",
    iconStyle: "bg-[#e9f8f3] text-[#28735c]",
    priorityStyle: "bg-[#fff0f0] text-[#d63b42]",
  },
  {
    id: "PROB-004",
    title: "Broken Footpath near Main Road",
    location: "Main Road, Ranchi",
    date: "14 May 2024",
    priority: "Low Priority",
    icon: "♙",
    iconStyle: "bg-[#eaf8f1] text-[#07865c]",
    priorityStyle: "bg-[#e9f8f1] text-[#07865c]",
  },
  {
    id: "PROB-005",
    title: "Street Light Not Working",
    location: "Near Park, Ranchi",
    date: "14 May 2024",
    priority: "Medium Priority",
    icon: "⚑",
    iconStyle: "bg-[#e9f4ff] text-[#1765b0]",
    priorityStyle: "bg-[#fff5df] text-[#c98316]",
  },
];

function NewProblems() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-[1100px] px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-sm font-bold text-[#082e5c] sm:text-base">
              Problems Awaiting Initial Review
            </h1>

            <p className="mt-1 text-[10px] text-[#68757d] sm:text-xs">
              Review newly reported civic problems before verification.
            </p>
          </div>

          <span className="rounded-full bg-[#fff0f0] px-3 py-1 text-[9px] font-bold text-[#d63b42] sm:text-[10px]">
            {problems.length} New
          </span>
        </div>

        <div className="mt-4 divide-y divide-[#e5e9ec]">
          {problems.map((problem) => (
            <ProblemRow
              key={problem.id}
              problem={problem}
            />
          ))}
        </div>

        <div className="flex justify-center pt-5">
          <Link
            to="/reviewer/new-problems"
            className="
              flex h-10 items-center justify-center gap-4
              rounded-md
              border border-[#b9cbd2]
              px-7
              text-xs font-bold
              text-[#082e5c]
              transition
              hover:bg-[#f4f8f6]
              sm:px-9
            "
          >
            View All New Problems
            <span className="text-base">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProblemRow({ problem }) {
  return (
    <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:gap-4 sm:py-5">
      <div
        className={`
          flex h-12 w-12 shrink-0 items-center justify-center
          rounded-full text-xl font-bold
          ${problem.iconStyle}
        `}
      >
        {problem.icon}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="truncate text-sm font-bold text-[#082e5c] sm:text-[15px]">
            {problem.title}
          </h2>

          <span className="rounded bg-[#f1f4f6] px-2 py-0.5 text-[8px] font-semibold text-[#68757d]">
            {problem.id}
          </span>
        </div>

        <p className="mt-1 text-[10px] text-[#68757d] sm:text-xs">
          {problem.location}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 sm:justify-end">
        <p className="whitespace-nowrap text-[9px] text-[#68757d] sm:text-[10px]">
          Submitted: {problem.date}
        </p>

        <span
          className={`
            whitespace-nowrap rounded-full
            px-2.5 py-1
            text-[8px] font-semibold
            sm:px-3 sm:text-[9px]
            ${problem.priorityStyle}
          `}
        >
          {problem.priority}
        </span>

        <Link
          to={`/reviewer/verification/${problem.id}`}
          className="
            whitespace-nowrap rounded-md
            bg-[#07865c]
            px-4 py-2
            text-[9px] font-bold text-white
            transition
            hover:bg-[#06754f]
            sm:text-[10px]
          "
        >
          Review
        </Link>
      </div>
    </div>
  );
}

export default NewProblems;