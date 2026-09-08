import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AssignedProblems() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [error, setError] = useState("");

  // --------------------------------------------------
  // LOAD ASSIGNED PROBLEMS FROM FIREBASE
  // --------------------------------------------------
  useEffect(() => {
    const loadAssignedProblems = async () => {
      const user = auth.currentUser;

      if (!user) {
        setError("Reviewer login required.");
        setLoading(false);
        return;
      }

      try {
        setError("");

        const problemsRef = collection(db, "problems");

        const q = query(
          problemsRef,
          where("status", "==", "assigned")
        );

        const snapshot = await getDocs(q);

        const fetchedProblems = snapshot.docs.map((problemDoc) => ({
          id: problemDoc.id,
          ...problemDoc.data(),
        }));

        fetchedProblems.sort((a, b) => {
          const dateA = a.assignedAt?.seconds
            ? a.assignedAt.seconds * 1000
            : new Date(a.assignedAt || 0).getTime();

          const dateB = b.assignedAt?.seconds
            ? b.assignedAt.seconds * 1000
            : new Date(b.assignedAt || 0).getTime();

          return dateB - dateA;
        });

        setProblems(fetchedProblems);
      } catch (error) {
        console.error(
          "Error loading assigned problems:",
          error
        );

        if (error.code === "permission-denied") {
          setError(
            "Permission denied. Check Firebase Firestore rules."
          );
        } else {
          setError("Unable to load assigned problems.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadAssignedProblems();
  }, []);

  // --------------------------------------------------
  // START WORK
  // --------------------------------------------------
  const handleStartWork = async (problemId) => {
    const user = auth.currentUser;

    if (!user) {
      setError("Reviewer login required.");
      return;
    }

    try {
      setUpdatingId(problemId);
      setError("");

      const problemRef = doc(db, "problems", problemId);

      await updateDoc(problemRef, {
        status: "in_progress",
        workStartedBy: user.uid,
        workStartedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      // Remove it from Assigned list
      setProblems((prev) =>
        prev.filter((problem) => problem.id !== problemId)
      );
    } catch (error) {
      console.error("Start work error:", error);

      if (error.code === "permission-denied") {
        setError(
          "You are not allowed to update this problem."
        );
      } else {
        setError(
          error.message || "Failed to start work."
        );
      }
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
            Problems assigned to universities for solution development.
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

              <div className="grid grid-cols-[0.8fr_1.7fr_1.2fr_1.2fr_1fr_1fr_1.2fr] items-center bg-[#f8fafb] px-5 py-4 text-xs font-bold text-[#52616b]">
                <span>ID</span>
                <span>Problem</span>
                <span>University</span>
                <span>Coordinator</span>
                <span>Due Date</span>
                <span>Priority</span>
                <span>Action</span>
              </div>

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
                      Problems will appear here after a reviewer assigns them.
                    </p>
                  </div>
                ) : (
                  problems.map((problem) => {
                    const dueDate = problem.dueDate
                      ? new Date(
                          problem.dueDate
                        ).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })
                      : "Not Set";

                    const priority =
                      problem.priority || "Medium Priority";

                    return (
                      <div
                        key={problem.id}
                        className="grid min-h-[100px] grid-cols-[0.8fr_1.7fr_1.2fr_1.2fr_1fr_1fr_1.2fr] items-center px-5 py-4"
                      >

                        {/* ID */}
                        <p className="break-all pr-3 text-xs font-semibold text-[#355c91]">
                          {problem.id}
                        </p>

                        {/* PROBLEM */}
                        <div className="pr-5">
                          <p className="text-sm font-semibold text-[#092f5d]">
                            {problem.title || "Untitled Problem"}
                          </p>

                          <p className="mt-1 text-xs text-[#7a858c]">
                            {problem.category || "Category not specified"}
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
                            className={`inline-flex rounded-md px-2.5 py-1.5 text-[10px] font-semibold ${
                              priority
                                .toLowerCase()
                                .includes("high")
                                ? "bg-[#fff0ee] text-[#d84a3a]"
                                : priority
                                    .toLowerCase()
                                    .includes("low")
                                ? "bg-[#e9f8f1] text-[#07865c]"
                                : "bg-[#fff5df] text-[#c98316]"
                            }`}
                          >
                            {priority}
                          </span>
                        </div>

                        {/* ACTION */}
                        <div>
                          <button
                            type="button"
                            disabled={updatingId === problem.id}
                            onClick={() =>
                              handleStartWork(problem.id)
                            }
                            className="rounded-md bg-[#07865c] px-4 py-2 text-[10px] font-bold text-white transition hover:bg-[#06754f] disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {updatingId === problem.id
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