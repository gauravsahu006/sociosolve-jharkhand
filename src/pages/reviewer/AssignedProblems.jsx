import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const defaultProblems = [
  {
    id: "PROB-001",
    title: "Water Logging in Street 12",
    category: "Water & Sanitation",
    university: "BIT Mesra",
    coordinator: "Dr. Rajeev Kumar",
    dueDate: "30 May 2024",
    priority: "High Priority",
    status: "Assigned",
  },
  {
    id: "PROB-004",
    title: "Street Light Not Working",
    category: "Electricity",
    university: "Ranchi University",
    coordinator: "Dr. Priya Singh",
    dueDate: "28 May 2024",
    priority: "Medium",
    status: "Assigned",
  },
  {
    id: "PROB-005",
    title: "Poor Rural Road Connectivity",
    category: "Roads & Transport",
    university: "Kolhan University",
    coordinator: "Dr. Amit Kumar",
    dueDate: "27 May 2024",
    priority: "High Priority",
    status: "Assigned",
  },
];

function AssignedProblems() {
  const [problems, setProblems] = useState(defaultProblems);

  useEffect(() => {
    const savedAssignment = sessionStorage.getItem(
      "socioSolveUniversityAssignment"
    );

    if (!savedAssignment) {
      return;
    }

    try {
      const assignment = JSON.parse(savedAssignment);

      const newProblem = {
        id: assignment.problemId || "PROB-001",
        title: "Water Logging in Street 12",
        category: "Water & Sanitation",
        university: assignment.university || "BIT Mesra",
        coordinator: assignment.coordinator || "Not Assigned",
        dueDate: assignment.dueDate
          ? new Date(assignment.dueDate).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
          : "Not Set",
        priority: "High Priority",
        status: "Assigned",
      };

      setProblems((prev) => [
        newProblem,
        ...prev.filter((item) => item.id !== newProblem.id),
      ]);
    } catch (error) {
      console.error("Unable to load assigned problem:", error);
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#092f5d]">
            Assigned Problems
          </h1>

          <p className="mt-1 text-sm text-[#687680]">
            Problems assigned to universities for solution development.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-[#dbe3e8] bg-white shadow-sm">
          <div className="overflow-x-auto">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-[0.8fr_1.7fr_1.2fr_1.2fr_1fr_1fr_0.8fr] items-center bg-[#f8fafb] px-5 py-4 text-xs font-bold text-[#52616b]">
                <span>ID</span>
                <span>Problem</span>
                <span>University</span>
                <span>Coordinator</span>
                <span>Due Date</span>
                <span>Priority</span>
                <span>Status</span>
              </div>

              <div className="divide-y divide-[#e5e9ec]">
                {problems.map((problem) => (
                  <div
                    key={problem.id}
                    className="grid min-h-[80px] grid-cols-[0.8fr_1.7fr_1.2fr_1.2fr_1fr_1fr_0.8fr] items-center px-5 py-4"
                  >
                    <p className="text-xs font-semibold text-[#355c91]">
                      {problem.id}
                    </p>

                    <div className="pr-5">
                      <p className="text-sm font-semibold text-[#092f5d]">
                        {problem.title}
                      </p>

                      <p className="mt-1 text-xs text-[#7a858c]">
                        {problem.category}
                      </p>
                    </div>

                    <p className="pr-3 text-xs font-medium text-[#344653]">
                      {problem.university}
                    </p>

                    <p className="pr-3 text-xs text-[#344653]">
                      {problem.coordinator}
                    </p>

                    <p className="text-xs text-[#344653]">
                      {problem.dueDate}
                    </p>

                    <div>
                      <span
                        className={`inline-flex rounded-md px-2.5 py-1.5 text-[10px] font-semibold ${
                          problem.priority === "High Priority"
                            ? "bg-[#fff0ee] text-[#d84a3a]"
                            : "bg-[#fff5df] text-[#c98316]"
                        }`}
                      >
                        {problem.priority}
                      </span>
                    </div>

                    <div>
                      <span className="inline-flex rounded-md bg-[#e8f7ef] px-3 py-1.5 text-[10px] font-semibold text-[#07865c]">
                        {problem.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/reviewer/dashboard"
            className="rounded-md border border-[#d4dde2] px-5 py-2.5 text-sm font-semibold text-[#344653] transition hover:border-[#07865c] hover:text-[#07865c]"
          >
            ← Dashboard
          </Link>

          <Link
            to="/reviewer/review-history"
            className="rounded-md bg-[#07865c] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#06754f]"
          >
            Review History
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AssignedProblems;