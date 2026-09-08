import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyProblems() {
  const [problems, setProblems] = useState([]);

  // ----------------------------------
  // Load Citizen Problems
  // ----------------------------------
  useEffect(() => {
    const loadProblems = () => {
      try {
        const citizenEmail =
          localStorage.getItem("citizenEmail") ||
          localStorage.getItem("citizenName");

        const allProblems =
          JSON.parse(
            localStorage.getItem("reviewerProblems") || "[]"
          );

        // Only show problems submitted by current citizen
        const citizenProblems = allProblems.filter(
          (problem) => {
            // If no citizen identity exists,
            // don't show another user's problems
            if (!citizenEmail) {
              return false;
            }

            return problem.citizenId === citizenEmail;
          }
        );

        // Latest problems first
        citizenProblems.sort(
          (a, b) =>
            new Date(b.submittedAt || 0).getTime() -
            new Date(a.submittedAt || 0).getTime()
        );

        setProblems(citizenProblems);
      } catch (error) {
        console.error(
          "Error loading problems:",
          error
        );

        setProblems([]);
      }
    };

    loadProblems();

    // Refresh when page becomes active
    window.addEventListener(
      "socioSolveProblemsUpdated",
      loadProblems
    );

    window.addEventListener(
      "storage",
      loadProblems
    );

    return () => {
      window.removeEventListener(
        "socioSolveProblemsUpdated",
        loadProblems
      );

      window.removeEventListener(
        "storage",
        loadProblems
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f8f7]">

      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col">

        {/* Back */}
        <Link
          to="/citizen/dashboard"
          className="mb-2 mt-9 inline-flex items-center gap-2 px-5 text-sm text-gray-600 hover:text-[#0f766e] sm:px-8 lg:px-10"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <main className="flex-1 px-5 py-8 sm:px-8 lg:px-10">

          <div className="mx-auto max-w-[1000px]">

            {/* Header */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

              <div>
                <h1 className="text-[24px] font-bold text-[#082e5c]">
                  My Problems
                </h1>

                <p className="mt-1 text-[12px] text-[#667085]">
                  View and track the problems you have reported.
                </p>
              </div>

              <Link
                to="/citizen/report"
                className="inline-flex items-center justify-center rounded-md bg-[#15915D] px-4 py-3 text-[12px] font-bold text-white shadow-sm transition hover:bg-[#107849]"
              >
                + Report a Problem
              </Link>

            </div>

            {/* Problems */}
            <div className="mt-7">

              {problems.length === 0 ? (
                <EmptyState />
              ) : (
                <div className="space-y-4">

                  {problems.map((problem) => (
                    <ProblemCard
                      key={problem.id}
                      problem={problem}
                    />
                  ))}

                </div>
              )}

            </div>

          </div>

        </main>

        {/* Bottom Decoration */}
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

// ----------------------------------
// Problem Card
// ----------------------------------
function ProblemCard({ problem }) {
  return (
    <div className="rounded-xl border border-[#DDE5EC] bg-white p-5 shadow-sm">

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

        <div className="min-w-0">

          <div className="flex flex-wrap items-center gap-2">

            <span className="rounded-full bg-[#E5F5ED] px-3 py-1 text-[10px] font-bold text-[#15915D]">
              {formatStatus(problem.status)}
            </span>

            <span className="text-[10px] font-semibold text-[#98A2B3]">
              {problem.id}
            </span>

          </div>

          <h2 className="mt-3 text-[16px] font-bold text-[#082e5c]">
            {problem.title || "Untitled Problem"}
          </h2>

          <p className="mt-2 line-clamp-2 text-[12px] leading-5 text-[#667085]">
            {problem.description ||
              "No description provided."}
          </p>

        </div>

        <Link
          to={`/citizen/problems/${problem.id}/tracking`}
          className="inline-flex shrink-0 items-center justify-center rounded-md border border-[#15915D] px-4 py-2.5 text-[11px] font-bold text-[#15915D] transition hover:bg-[#E5F5ED]"
        >
          Track Problem →
        </Link>

      </div>

      {/* Information */}
      <div className="mt-5 grid grid-cols-1 gap-3 border-t border-[#EEF2F5] pt-4 sm:grid-cols-3">

        <InfoItem
          label="Category"
          value={formatCategory(problem.category)}
        />

        <InfoItem
          label="Location"
          value={
            problem.location?.area ||
            problem.location?.address ||
            "Not provided"
          }
        />

        <InfoItem
          label="Submitted"
          value={formatDate(problem.submittedAt)}
        />

      </div>

    </div>
  );
}

// ----------------------------------
// Info Item
// ----------------------------------
function InfoItem({ label, value }) {
  return (
    <div>

      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#98A2B3]">
        {label}
      </p>

      <p className="mt-1 text-[11px] font-semibold text-[#243B53]">
        {value}
      </p>

    </div>
  );
}

// ----------------------------------
// Empty State
// ----------------------------------
function EmptyState() {
  return (
    <div className="rounded-xl border border-[#DDE5EC] bg-white px-6 py-14 text-center shadow-sm">

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E5F5ED] text-[25px]">
        📋
      </div>

      <h2 className="mt-4 text-[16px] font-bold text-[#082e5c]">
        No problems reported yet
      </h2>

      <p className="mx-auto mt-2 max-w-[400px] text-[12px] leading-5 text-[#667085]">
        When you report a civic problem, it will appear
        here so you can track its progress.
      </p>

      <Link
        to="/citizen/report"
        className="mt-5 inline-flex rounded-md bg-[#15915D] px-5 py-3 text-[12px] font-bold text-white transition hover:bg-[#107849]"
      >
        Report a Problem
      </Link>

    </div>
  );
}

// ----------------------------------
// Category
// ----------------------------------
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

// ----------------------------------
// Status
// ----------------------------------
function formatStatus(status) {
  const statuses = {
    submitted: "Submitted",
    under_review: "Under Review",
    info_requested: "Info Requested",
    verified: "Verified",
    rejected: "Rejected",
    assigned: "Assigned",
    in_progress: "In Progress",
    resolved: "Resolved",
  };

  return statuses[status] || "Submitted";
}

// ----------------------------------
// Date
// ----------------------------------
function formatDate(date) {
  if (!date) {
    return "Just now";
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "Just now";
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default MyProblems;