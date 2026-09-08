import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const demoAssignedProblems = [
  {
    id: 3,
    title: "Damaged Road Near Main Market",
    category: "Road & Infrastructure",
    status: "assigned",
    assignedUniversityName: "BIT Mesra",
    coordinator: "Rahul Kumar",
    dueDate: "2026-09-20",
    priority: "High Priority",
    assignedAt: "2026-09-08T15:00:00",
  },

  {
    id: 11,
    title: "Water Drainage Improvement",
    category: "Drainage",
    status: "assigned",
    assignedUniversityName: "NIT Jamshedpur",
    coordinator: "Priya Singh",
    dueDate: "2026-09-25",
    priority: "Medium Priority",
    assignedAt: "2026-09-08T13:30:00",
  },

  {
    id: 12,
    title: "Public Toilet Maintenance",
    category: "Public Facilities",
    status: "assigned",
    assignedUniversityName: "BIT Sindri",
    coordinator: "Aman Verma",
    dueDate: "2026-09-28",
    priority: "Low Priority",
    assignedAt: "2026-09-07T16:20:00",
  },
];

function AssignedProblems() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [error, setError] = useState("");

  // LOAD ASSIGNED PROBLEMS
  useEffect(() => {
    const loadAssignedProblems = () => {
      setLoading(true);
      setError("");

      setTimeout(() => {
        try {
          const storedProblems =
            JSON.parse(
              localStorage.getItem("reviewerProblems")
            ) || [];

          const storedAssignedProblems =
            storedProblems.filter(
              (problem) =>
                problem.status === "assigned"
            );

          const storedIds = new Set(
            storedAssignedProblems.map(
              (problem) => String(problem.id)
            )
          );

          const remainingDemoProblems =
            demoAssignedProblems.filter(
              (problem) =>
                !storedIds.has(String(problem.id))
            );

          const assignedProblems = [
            ...storedAssignedProblems,
            ...remainingDemoProblems,
          ];

          assignedProblems.sort(
            (a, b) =>
              new Date(
                b.assignedAt || 0
              ).getTime() -
              new Date(
                a.assignedAt || 0
              ).getTime()
          );

          setProblems(assignedProblems);
        } catch (err) {
          console.error(
            "Assigned problems error:",
            err
          );

          setError(
            "Unable to load assigned problems."
          );
        } finally {
          setLoading(false);
        }
      }, 400);
    };

    loadAssignedProblems();
  }, []);

  // START WORK
  const handleStartWork = (problemId) => {
    try {
      setUpdatingId(problemId);
      setError("");

      const problem = problems.find(
        (item) => item.id === problemId
      );

      if (!problem) {
        setError("Problem not found.");
        return;
      }

      const updatedProblem = {
        ...problem,
        status: "in_progress",
        workStartedBy:
          localStorage.getItem("reviewerEmail") ||
          "Reviewer",
        workStartedAt:
          new Date().toISOString(),
        updatedAt:
          new Date().toISOString(),
      };

      const storedProblems =
        JSON.parse(
          localStorage.getItem("reviewerProblems")
        ) || [];

      const existingIndex =
        storedProblems.findIndex(
          (item) =>
            String(item.id) ===
            String(problemId)
        );

      let updatedProblems = [
        ...storedProblems,
      ];

      if (existingIndex >= 0) {
        updatedProblems[existingIndex] =
          updatedProblem;
      } else {
        updatedProblems.push(
          updatedProblem
        );
      }

      localStorage.setItem(
        "reviewerProblems",
        JSON.stringify(updatedProblems)
      );

      // Remove from Assigned Problems
      setProblems((prev) =>
        prev.filter(
          (item) => item.id !== problemId
        )
      );
    } catch (err) {
      console.error(
        "Start work error:",
        err
      );

      setError(
        "Failed to start work."
      );
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#092f5d]">
            Assigned Problems
          </h1>

          <p className="mt-1 text-sm text-[#687680]">
            Problems assigned to universities for
            solution development.
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
            {error}
          </div>
        )}

        {/* TABLE */}
        <div className="overflow-hidden rounded-xl border border-[#dbe3e8] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <div className="min-w-[1100px]">

              {/* TABLE HEADER */}
              <div
                className="
                  grid
                  grid-cols-[0.8fr_1.7fr_1.2fr_1.2fr_1fr_1fr_1.2fr]
                  items-center
                  bg-[#f8fafb]
                  px-5 py-4
                  text-xs
                  font-bold
                  text-[#52616b]
                "
              >
                <span>ID</span>
                <span>Problem</span>
                <span>University</span>
                <span>Coordinator</span>
                <span>Due Date</span>
                <span>Priority</span>
                <span>Action</span>
              </div>

              {/* TABLE BODY */}
              <div className="divide-y divide-[#e5e9ec]">

                {loading ? (
                  <div className="px-5 py-12 text-center text-sm text-[#687680]">
                    Loading assigned problems...
                  </div>
                ) : problems.length === 0 ? (
                  <div className="px-5 py-12 text-center">
                    <p className="text-sm font-semibold text-[#344653]">
                      No assigned problems.
                    </p>

                    <p className="mt-1 text-xs text-[#7a858c]">
                      Problems will appear here after
                      a reviewer assigns them.
                    </p>
                  </div>
                ) : (
                  problems.map((problem) => {
                    const dueDate = problem.dueDate
                      ? new Date(
                          problem.dueDate
                        ).toLocaleDateString(
                          "en-IN",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          }
                        )
                      : "Not Set";

                    const priority =
                      problem.priority ||
                      "Medium Priority";

                    const priorityText =
                      priority.toLowerCase();

                    let priorityStyle =
                      "bg-[#fff5df] text-[#c98316]";

                    if (
                      priorityText.includes(
                        "high"
                      )
                    ) {
                      priorityStyle =
                        "bg-[#fff0ee] text-[#d84a3a]";
                    }

                    if (
                      priorityText.includes(
                        "low"
                      )
                    ) {
                      priorityStyle =
                        "bg-[#e9f8f1] text-[#07865c]";
                    }

                    return (
                      <div
                        key={problem.id}
                        className="
                          grid min-h-[100px]
                          grid-cols-[0.8fr_1.7fr_1.2fr_1.2fr_1fr_1fr_1.2fr]
                          items-center
                          px-5 py-4
                        "
                      >

                        {/* ID */}
                        <p className="break-all pr-3 text-xs font-semibold text-[#355c91]">
                          #{problem.id}
                        </p>

                        {/* PROBLEM */}
                        <div className="pr-5">
                          <p className="text-sm font-semibold text-[#092f5d]">
                            {problem.title ||
                              "Untitled Problem"}
                          </p>

                          <p className="mt-1 text-xs text-[#7a858c]">
                            {problem.category ||
                              "Category not specified"}
                          </p>
                        </div>

                        {/* UNIVERSITY */}
                        <p className="pr-3 text-xs font-medium text-[#344653]">
                          {problem.assignedUniversityName ||
                            "Not Assigned"}
                        </p>

                        {/* COORDINATOR */}
                        <p className="pr-3 text-xs text-[#344653]">
                          {problem.coordinator ||
                            "Not Assigned"}
                        </p>

                        {/* DUE DATE */}
                        <p className="text-xs text-[#344653]">
                          {dueDate}
                        </p>

                        {/* PRIORITY */}
                        <div>
                          <span
                            className={`
                              inline-flex
                              rounded-md
                              px-2.5 py-1.5
                              text-[10px]
                              font-semibold
                              ${priorityStyle}
                            `}
                          >
                            {priority}
                          </span>
                        </div>

                        {/* ACTION */}
                        <div>
                          <button
                            type="button"
                            disabled={
                              updatingId ===
                              problem.id
                            }
                            onClick={() =>
                              handleStartWork(
                                problem.id
                              )
                            }
                            className="
                              rounded-md
                              bg-[#07865c]
                              px-4 py-2
                              text-[10px]
                              font-bold
                              text-white
                              transition
                              hover:bg-[#06754f]
                              disabled:cursor-not-allowed
                              disabled:opacity-60
                            "
                          >
                            {updatingId ===
                            problem.id
                              ? "Starting..."
                              : "Start Work"}
                          </button>
                        </div>

                      </div>
                    );
                  })
                )}

              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BUTTONS */}
        <div className="mt-6 flex flex-wrap gap-3">

          <Link
            to="/reviewer/dashboard"
            className="
              rounded-md
              border border-[#d4dde2]
              px-5 py-2.5
              text-sm font-semibold
              text-[#344653]
              transition
              hover:border-[#07865c]
              hover:text-[#07865c]
            "
          >
            ← Dashboard
          </Link>

          <Link
            to="/reviewer/review-history"
            className="
              rounded-md
              bg-[#07865c]
              px-5 py-2.5
              text-sm font-semibold
              text-white
              transition
              hover:bg-[#06754f]
            "
          >
            Review History
          </Link>

        </div>

      </div>
    </div>
  );
}

export default AssignedProblems;