import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { collection, getDocs, query, where } from "firebase/firestore";

import { auth } from "../../firebase/auth";
import { db } from "../../firebase/firestore";

function NewProblems() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNewProblems = async () => {
      const user = auth.currentUser;

      if (!user) {
        setProblems([]);
        setLoading(false);
        return;
      }

      try {
        const problemsRef = collection(db, "problems");

        const q = query(
          problemsRef,
          where("status", "==", "submitted")
        );

        const snapshot = await getDocs(q);

        const fetchedProblems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Latest submitted problems first
        fetchedProblems.sort(
          (a, b) =>
            new Date(b.submittedAt || 0).getTime() -
            new Date(a.submittedAt || 0).getTime()
        );

        setProblems(fetchedProblems);
      } catch (error) {
        console.error("Error loading new problems:", error);
        setProblems([]);
      } finally {
        setLoading(false);
      }
    };

    loadNewProblems();
  }, []);

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
            {loading ? "..." : `${problems.length} New`}
          </span>
        </div>

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

  // Priority will be connected later from Categorize/Prioritize.
  const priority = problem.priority || "Medium Priority";

  let priorityStyle =
    "bg-[#fff5df] text-[#c98316]";

  if (priority.toLowerCase().includes("high")) {
    priorityStyle = "bg-[#fff0f0] text-[#d63b42]";
  }

  if (priority.toLowerCase().includes("low")) {
    priorityStyle = "bg-[#e9f8f3] text-[#28735c]";
  }

  return (
    <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:gap-4 sm:py-5">
      <div
        className="
          flex h-12 w-12 shrink-0 items-center justify-center
          rounded-full text-xl font-bold
          bg-[#e9f4ff] text-[#1765b0]
        "
      >
        ≋
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="truncate text-sm font-bold text-[#082e5c] sm:text-[15px]">
            {problem.title || "Untitled Problem"}
          </h2>

          <span className="rounded bg-[#f1f4f6] px-2 py-0.5 text-[8px] font-semibold text-[#68757d]">
            {problem.id}
          </span>
        </div>

        <p className="mt-1 text-[10px] text-[#68757d] sm:text-xs">
          {locationText}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 sm:justify-end">
        <p className="whitespace-nowrap text-[9px] text-[#68757d] sm:text-[10px]">
          Submitted: {submittedDate}
        </p>

        <span
          className={`
            whitespace-nowrap rounded-full
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