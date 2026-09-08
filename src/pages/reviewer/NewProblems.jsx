import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const demoProblems = [
  {
    id: 1,
    title: "Broken Street Light",
    status: "submitted",
    location: {
      area: "Morabadi",
      district: "Ranchi",
      address: "Morabadi Main Road",
    },
    submittedAt: "2026-09-08T17:30:00",
    priority: "High Priority",
  },
  {
    id: 2,
    title: "Garbage Collection Issue",
    status: "under_review",
    location: {
      area: "Harmu",
      district: "Ranchi",
      address: "Harmu Housing Colony",
    },
    submittedAt: "2026-09-08T15:20:00",
    priority: "Medium Priority",
  },
  {
    id: 3,
    title: "Damaged Road Near Main Market",
    status: "assigned",
    location: {
      area: "Main Market",
      district: "Ranchi",
      address: "Main Market Road",
    },
    submittedAt: "2026-09-08T13:10:00",
    priority: "High Priority",
  },
  {
    id: 4,
    title: "Water Supply Problem",
    status: "verified",
    location: {
      area: "Lalpur",
      district: "Ranchi",
      address: "Lalpur Water Supply Area",
    },
    submittedAt: "2026-09-08T11:00:00",
    priority: "Medium Priority",
  },
  {
    id: 5,
    title: "Public Park Maintenance",
    status: "rejected",
    location: {
      area: "Kanke",
      district: "Ranchi",
      address: "Kanke Road Park",
    },
    submittedAt: "2026-09-07T18:00:00",
    priority: "Low Priority",
  },
  {
    id: 6,
    title: "Traffic Signal Issue",
    status: "in_progress",
    location: {
      area: "Albert Ekka Chowk",
      district: "Ranchi",
      address: "Main Traffic Junction",
    },
    submittedAt: "2026-09-07T15:30:00",
    priority: "High Priority",
  },
];

function NewProblems() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNewProblems = () => {
      setLoading(true);

      setTimeout(() => {
        const newProblems = demoProblems
          .filter((problem) => problem.status === "submitted")
          .sort(
            (a, b) =>
              new Date(b.submittedAt).getTime() -
              new Date(a.submittedAt).getTime()
          );

        setProblems(newProblems);
        setLoading(false);
      }, 400);
    };

    loadNewProblems();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-[1100px] px-4 py-6 sm:px-6 lg:px-8">

        <Link
          to="/reviewer/dashboard"
          className="text-[10px] font-semibold text-[#1765b0] hover:underline sm:text-xs mb-5"
        >
          ← Back to Dashboard
        </Link>

        {/* Header */}
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
            {loading ? "..." : `${problems.length} New`}
          </span>
        </div>

        {/* Problems */}
        <div className="mt-4 divide-y divide-[#e5e9ec]">
          {loading ? (
            <div className="py-10 text-center text-xs text-[#68757d]">
              Loading new problems...
            </div>
          ) : problems.length === 0 ? (
            <div className="py-10 text-center text-xs text-[#68757d]">
              No new problems awaiting review.
            </div>
          ) : (
            problems.map((problem) => (
              <ProblemRow
                key={problem.id}
                problem={problem}
              />
            ))
          )}
        </div>

        {/* View All */}
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

            <span className="text-base">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProblemRow({ problem }) {
  const location = problem.location || {};

  const locationText =
    location.address ||
    location.area ||
    location.district ||
    "Location not provided";

  const submittedDate = problem.submittedAt
    ? new Date(problem.submittedAt).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    : "Date not available";

  const priority = problem.priority || "Medium Priority";

  let priorityStyle = "bg-[#fff5df] text-[#c98316]";

  if (priority.toLowerCase().includes("high")) {
    priorityStyle = "bg-[#fff0f0] text-[#d63b42]";
  }

  if (priority.toLowerCase().includes("low")) {
    priorityStyle = "bg-[#e9f8f3] text-[#28735c]";
  }

  return (
    <div
      className="
        flex flex-col gap-3
        py-4
        sm:flex-row sm:items-center sm:gap-4 sm:py-5
      "
    >

      {/* Icon */}
      <div
        className="
          flex h-12 w-12 shrink-0
          items-center justify-center
          rounded-full
          bg-[#e9f4ff]
          text-xl font-bold
          text-[#1765b0]
        "
      >
        ≋
      </div>

      {/* Problem Information */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="truncate text-sm font-bold text-[#082e5c] sm:text-[15px]">
            {problem.title || "Untitled Problem"}
          </h2>

          <span
            className="
              rounded
              bg-[#f1f4f6]
              px-2 py-0.5
              text-[8px]
              font-semibold
              text-[#68757d]
            "
          >
            #{problem.id}
          </span>
        </div>

        <p className="mt-1 text-[10px] text-[#68757d] sm:text-xs">
          {locationText}
        </p>
      </div>

      {/* Actions */}
      <div
        className="
          flex flex-wrap
          items-center
          justify-between
          gap-3
          sm:justify-end
        "
      >
        <p
          className="
            whitespace-nowrap
            text-[9px]
            text-[#68757d]
            sm:text-[10px]
          "
        >
          Submitted: {submittedDate}
        </p>

        <span
          className={`
            whitespace-nowrap
            rounded-full
            px-2.5 py-1
            text-[8px] font-semibold
            sm:px-3 sm:text-[9px]
            ${priorityStyle}
          `}
        >
          {priority}
        </span>

        <Link
          to={`/reviewer/verification/${problem.id}`}
          className="
            whitespace-nowrap
            rounded-md
            bg-[#07865c]
            px-4 py-2
            text-[9px]
            font-bold
            text-white
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