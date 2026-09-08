import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const demoProblems = [
  {
    id: "problem-001",
    title: "Broken Street Light",
    category: "Public Safety",
    status: "under_review",
    priority: "High",
    location: {
      area: "Morabadi",
      district: "Ranchi",
      pinCode: "834008",
    },
    submittedAt: "2026-09-08T17:30:00",
  },
  {
    id: "problem-002",
    title: "Garbage Collection Issue",
    category: "Waste Management",
    status: "under_review",
    priority: "Medium",
    location: {
      area: "Harmu",
      district: "Ranchi",
      pinCode: "834002",
    },
    submittedAt: "2026-09-08T15:20:00",
  },
  {
    id: "problem-003",
    title: "Damaged Road Near Main Market",
    category: "Road & Infrastructure",
    status: "under_review",
    priority: "High",
    location: {
      area: "Main Market",
      district: "Ranchi",
      pinCode: "834001",
    },
    submittedAt: "2026-09-08T13:10:00",
  },
  {
    id: "problem-004",
    title: "Water Supply Problem",
    category: "Water & Sanitation",
    status: "under_review",
    priority: "Medium",
    location: {
      area: "Lalpur",
      district: "Ranchi",
      pinCode: "834001",
    },
    submittedAt: "2026-09-08T11:00:00",
  },
  {
    id: "problem-005",
    title: "Traffic Signal Issue",
    category: "Traffic & Transport",
    status: "under_review",
    priority: "High",
    location: {
      area: "Albert Ekka Chowk",
      district: "Ranchi",
      pinCode: "834001",
    },
    submittedAt: "2026-09-07T15:30:00",
  },
];

function VerificationQueue() {
  const [verificationProblems, setVerificationProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // --------------------------------------------------
  // LOAD VERIFICATION PROBLEMS
  // --------------------------------------------------

  useEffect(() => {
    const loadVerificationProblems = () => {
      try {
        setLoading(true);
        setError("");

        const storedProblems = JSON.parse(
          localStorage.getItem("reviewerProblems") || "[]"
        );

        const allProblems = [...demoProblems];

        // Merge localStorage problems with demo problems
        storedProblems.forEach((storedProblem) => {
          const existingIndex = allProblems.findIndex(
            (problem) =>
              String(problem.id) === String(storedProblem.id)
          );

          if (existingIndex >= 0) {
            allProblems[existingIndex] = {
              ...allProblems[existingIndex],
              ...storedProblem,
            };
          } else {
            allProblems.push(storedProblem);
          }
        });

        // Only show problems under review
        const problems = allProblems
          .filter(
            (problem) => problem.status === "under_review"
          )
          .sort((a, b) => {
            const dateA = new Date(
              a.submittedAt || 0
            ).getTime();

            const dateB = new Date(
              b.submittedAt || 0
            ).getTime();

            return dateB - dateA;
          });

        setVerificationProblems(problems);
      } catch (err) {
        console.error(
          "Error loading verification queue:",
          err
        );

        setError(
          "Failed to load verification queue."
        );
      } finally {
        setLoading(false);
      }
    };

    loadVerificationProblems();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-[1100px] px-4 py-6 sm:px-6 lg:px-8">

        {/* HEADER */}

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
              Problems under review and awaiting detailed verification.
            </p>
          </div>

          <div className="w-fit rounded-full bg-[#fff5df] px-3 py-1.5 text-[9px] font-bold text-[#c98316] sm:text-[10px]">
            {loading
              ? "Loading..."
              : `${verificationProblems.length} Awaiting Verification`}
          </div>
        </div>

        {/* QUEUE */}

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
                {loading
                  ? "Loading problems..."
                  : `Showing ${verificationProblems.length} problems`}
              </span>

            </div>
          </div>

          {/* LOADING */}

          {loading && (
            <div className="px-5 py-10 text-center">
              <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-4 border-[#e5eee9] border-t-[#07865c]" />

              <p className="text-xs text-[#68757d]">
                Loading verification queue...
              </p>
            </div>
          )}

          {/* ERROR */}

          {!loading && error && (
            <div className="px-5 py-10 text-center">
              <p className="text-xs font-medium text-red-500">
                {error}
              </p>
            </div>
          )}

          {/* EMPTY */}

          {!loading &&
            !error &&
            verificationProblems.length === 0 && (
              <div className="px-5 py-12 text-center">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e9f4ff] text-lg text-[#1765b0]">
                  ✓
                </div>

                <h3 className="mt-3 text-sm font-bold text-[#082e5c]">
                  No Problems Awaiting Verification
                </h3>

                <p className="mt-1 text-[10px] text-[#68757d]">
                  Problems moved to Under Review will appear here.
                </p>

              </div>
            )}

          {/* PROBLEMS */}

          {!loading &&
            !error &&
            verificationProblems.length > 0 && (
              <div className="divide-y divide-[#e5e9ec]">

                {verificationProblems.map((problem) => (
                  <VerificationRow
                    key={problem.id}
                    problem={problem}
                  />
                ))}

              </div>
            )}

        </div>

        {/* FOOTER LINK */}

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

// =====================================================
// VERIFICATION ROW
// =====================================================

function VerificationRow({ problem }) {
  const location = problem.location || {};

  const locationText =
    location.address ||
    [
      location.area,
      location.district,
      location.pinCode,
    ]
      .filter(Boolean)
      .join(", ") ||
    "Location not provided";

  const submittedOn = formatDate(problem.submittedAt);

  const priority = problem.priority || "Medium";

  return (
    <div className="flex flex-col gap-4 px-5 py-5 lg:flex-row lg:items-center">

      {/* PROBLEM INFO */}

      <div className="flex min-w-0 flex-1 gap-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e9f4ff] text-lg font-bold text-[#1765b0]">
          ✓
        </div>

        <div className="min-w-0">

          <div className="flex flex-wrap items-center gap-2">

            <h3 className="text-sm font-bold text-[#082e5c] sm:text-[15px]">
              {problem.title || "Untitled Problem"}
            </h3>

            <span className="rounded bg-[#f1f4f6] px-2 py-0.5 text-[8px] font-semibold text-[#68757d]">
              {problem.id}
            </span>

          </div>

          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">

            <p className="text-[10px] text-[#68757d]">
              {problem.category || "Uncategorized"}
            </p>

            <p className="text-[10px] text-[#68757d]">
              {locationText}
            </p>

            <p className="text-[10px] text-[#68757d]">
              Submitted: {submittedOn}
            </p>

          </div>

        </div>
      </div>

      {/* ACTIONS */}

      <div className="flex flex-wrap items-center gap-3 lg:justify-end">

        <span
          className={`rounded-full px-3 py-1 text-[8px] font-bold sm:text-[9px] ${getPriorityStyle(
            priority
          )}`}
        >
          {priority} Priority
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

// =====================================================
// PRIORITY STYLE
// =====================================================

function getPriorityStyle(priority) {
  if (priority === "High") {
    return "bg-[#fff0f0] text-[#d63b42]";
  }

  if (priority === "Low") {
    return "bg-[#e9f8f1] text-[#07865c]";
  }

  return "bg-[#fff5df] text-[#c98316]";
}

// =====================================================
// DATE FORMAT
// =====================================================

function formatDate(value) {
  if (!value) {
    return "Date not available";
  }

  try {
    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return "Date not available";
    }

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "Date not available";
  }
}

export default VerificationQueue;