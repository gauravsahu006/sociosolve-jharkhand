import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";

import { db } from "../../firebase/firestore";

function VerifiedProblems() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const problemsRef = collection(db, "problems");

    const unsubscribe = onSnapshot(
      problemsRef,
      (snapshot) => {
        try {
          const today = new Date();

          const startOfToday = new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate()
          );

          const verifiedProblems = snapshot.docs
            .map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
            .filter((problem) => {
              if (problem.status !== "verified") {
                return false;
              }

              const verifiedAt =
                problem.verifiedAt?.toDate?.() ||
                new Date(
                  problem.verifiedAt ||
                    problem.updatedAt ||
                    problem.submittedAt ||
                    0
                );

              return verifiedAt >= startOfToday;
            })
            .sort((a, b) => {
              const dateA =
                a.verifiedAt?.toDate?.() ||
                new Date(
                  a.verifiedAt ||
                    a.updatedAt ||
                    0
                );

              const dateB =
                b.verifiedAt?.toDate?.() ||
                new Date(
                  b.verifiedAt ||
                    b.updatedAt ||
                    0
                );

              return dateB.getTime() - dateA.getTime();
            });

          setProblems(verifiedProblems);
          setError("");
          setLoading(false);
        } catch (err) {
          console.error(
            "Verified problems error:",
            err
          );

          setError(
            "Unable to load verified problems."
          );

          setLoading(false);
        }
      },
      (err) => {
        console.error(
          "Firebase verified problems error:",
          err
        );

        setError(
          err.message ||
            "Unable to load verified problems."
        );

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const formatDate = (value) => {
    if (!value) return "Not available";

    try {
      const date =
        value?.toDate?.() ||
        new Date(value);

      if (Number.isNaN(date.getTime())) {
        return "Not available";
      }

      return date.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "Not available";
    }
  };

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
              Verified Problems Today
            </h1>

            <p className="mt-1 text-[10px] text-[#68757d] sm:text-xs">
              Problems that were successfully verified today.
            </p>
          </div>

          <div className="w-fit rounded-full bg-[#e9f8f1] px-3 py-1.5 text-[9px] font-bold text-[#07865c] sm:text-[10px]">
            {loading
              ? "Loading..."
              : `${problems.length} Verified Today`}
          </div>

        </div>


        {/* CONTENT */}
        <div className="mt-6 rounded-lg border border-[#e0e6e9] bg-white">

          {loading && (
            <div className="px-5 py-12 text-center">
              <p className="text-xs text-[#68757d]">
                Loading verified problems...
              </p>
            </div>
          )}


          {!loading && error && (
            <div className="px-5 py-12 text-center">
              <p className="text-xs font-medium text-red-500">
                {error}
              </p>
            </div>
          )}


          {!loading &&
            !error &&
            problems.length === 0 && (
              <div className="px-5 py-12 text-center">

                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e9f8f1] text-lg text-[#07865c]">
                  ✓
                </div>

                <h3 className="mt-3 text-sm font-bold text-[#082e5c]">
                  No Problems Verified Today
                </h3>

                <p className="mt-1 text-[10px] text-[#68757d]">
                  Problems verified today will appear here.
                </p>

              </div>
            )}


          {!loading &&
            !error &&
            problems.length > 0 && (
              <div className="divide-y divide-[#e5e9ec]">

                {problems.map((problem) => {

                  const location =
                    problem.location || {};

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

                  return (
                    <div
                      key={problem.id}
                      className="flex flex-col gap-4 px-5 py-5 lg:flex-row lg:items-center lg:justify-between"
                    >

                      <div className="min-w-0">

                        <div className="flex flex-wrap items-center gap-2">

                          <h3 className="text-sm font-bold text-[#082e5c]">
                            {problem.title ||
                              "Untitled Problem"}
                          </h3>

                          <span className="rounded bg-[#f1f4f6] px-2 py-0.5 text-[8px] font-semibold text-[#68757d]">
                            {problem.id}
                          </span>

                        </div>

                        <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">

                          <p className="text-[10px] text-[#68757d]">
                            {problem.category ||
                              "Uncategorized"}
                          </p>

                          <p className="text-[10px] text-[#68757d]">
                            {locationText}
                          </p>

                          <p className="text-[10px] text-[#68757d]">
                            Verified:{" "}
                            {formatDate(
                              problem.verifiedAt ||
                                problem.updatedAt
                            )}
                          </p>

                        </div>

                      </div>


                      <div className="flex items-center gap-3">

  <span className="rounded-full bg-[#e9f8f1] px-3 py-1 text-[9px] font-bold text-[#07865c]">
    Verified
  </span>

  {problem.assignedUniversityId ? (
    <span className="rounded-md bg-[#eef4fb] px-4 py-2 text-[9px] font-bold text-[#1765b0] sm:text-[10px]">
      Assigned
    </span>
  ) : (
    <Link
      to={`/universities?mode=assign&problemId=${encodeURIComponent(
        problem.id
      )}`}
      className="rounded-md bg-[#07865c] px-4 py-2 text-[9px] font-bold text-white transition hover:bg-[#06754f] sm:text-[10px]"
    >
      Assign Problem
    </Link>
  )}

</div>

                    </div>
                  );
                })}

              </div>
            )}

        </div>


        <div className="mt-5 flex justify-center">

          <Link
            to="/reviewer/dashboard"
            className="text-[10px] font-semibold text-[#1765b0] hover:underline sm:text-xs"
          >
            ← Dashboard
          </Link>

        </div>

      </div>
    </div>
  );
}

export default VerifiedProblems;
