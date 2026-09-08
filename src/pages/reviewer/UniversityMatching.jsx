import React, { useEffect, useState } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../../firebase/firestore";

const universities = [
  {
    name: "BIT Mesra",
    location: "Ranchi, Jharkhand",
    score: "95%",
    logo: "◉",
  },
  {
    name: "Ranchi University",
    location: "Ranchi, Jharkhand",
    score: "88%",
    logo: "◉",
  },
  {
    name: "Central University of Jharkhand",
    location: "Ranchi, Jharkhand",
    score: "78%",
    logo: "◉",
  },
];

const reasons = [
  "Expertise in Water Management and Civil Engineering",
  "Active student projects in similar domains",
  "Proximity to problem location",
  "High past acceptance rate",
];

function UniversityMatching() {
  const navigate = useNavigate();

  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // --------------------------------------------------
  // LOAD ACTUAL PROBLEM FROM FIRESTORE
  // --------------------------------------------------
  useEffect(() => {
    const loadProblem = async () => {
      try {
        setLoading(true);
        setError("");

        const problemId = sessionStorage.getItem(
          "socioSolveSelectedProblemId"
        );

        if (!problemId) {
          setError(
            "Problem ID not found. Please go back and start the verification again."
          );
          return;
        }

        const problemRef = doc(db, "problems", problemId);

        const problemSnapshot = await getDoc(problemRef);

        if (!problemSnapshot.exists()) {
          setError("This problem was not found in Firebase.");
          return;
        }

        const problemData = {
          id: problemSnapshot.id,
          ...problemSnapshot.data(),
        };

        setProblem(problemData);
      } catch (error) {
        console.error("Error loading problem:", error);

        if (error.code === "permission-denied") {
          setError(
            "Permission denied. Please check Firebase Firestore rules."
          );
        } else {
          setError("Unable to load problem details.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadProblem();
  }, []);

  // --------------------------------------------------
  // SELECT UNIVERSITY
  // --------------------------------------------------
  const handleSelectUniversity = (university) => {
    if (!problem?.id) {
      setError("Problem ID is missing. Please go back and try again.");
      return;
    }

    // Save selected problem ID
    sessionStorage.setItem(
      "socioSolveSelectedProblemId",
      problem.id
    );

    // Save selected university + actual problem ID
    const selectedUniversity = {
      ...university,
      problemId: problem.id,
      problemTitle: problem.title || "",
      problemCategory: problem.category || "",
    };

    sessionStorage.setItem(
      "socioSolveSelectedUniversity",
      JSON.stringify(selectedUniversity)
    );

    // Go to assignment page
    navigate("/reviewer/assign-university");
  };

  // --------------------------------------------------
  // LOADING SCREEN
  // --------------------------------------------------
  if (loading) {
    return (
      <div className="min-h-screen w-full bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#e5eee9] border-t-[#07865c]" />

          <p className="text-sm font-semibold text-[#082e5c]">
            Loading problem details...
          </p>

          <p className="mt-1 text-xs text-[#68757d]">
            Please wait while we fetch the problem from Firebase.
          </p>
        </div>
      </div>
    );
  }

  // --------------------------------------------------
  // ERROR SCREEN
  // --------------------------------------------------
  if (error) {
    return (
      <div className="min-h-screen w-full bg-white flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-xl border border-red-200 bg-red-50 p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
            !
          </div>

          <h1 className="mt-4 text-lg font-bold text-[#082e5c]">
            Unable to Continue
          </h1>

          <p className="mt-2 text-sm leading-5 text-red-600">
            {error}
          </p>

          <button
            type="button"
            onClick={() => navigate("/reviewer/verification")}
            className="mt-5 rounded-md bg-[#07865c] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#06754f]"
          >
            Back to Verification
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[900px]">

        {/* --------------------------------------------- */}
        {/* CURRENT PROBLEM DETAILS */}
        {/* --------------------------------------------- */}

        {problem && (
          <div className="mb-6 rounded-xl border border-[#dbe3e8] bg-[#f8fafb] p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wide text-[#68757d]">
                  Assigning Verified Problem
                </p>

                <h2 className="mt-1 text-base font-bold text-[#082e5c] sm:text-lg">
                  {problem.title || "Untitled Problem"}
                </h2>
              </div>

              <span className="w-fit rounded-md bg-[#e9f8f1] px-3 py-1.5 text-[9px] font-bold text-[#07865c]">
                {problem.status || "verified"}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">

              <div className="rounded-md bg-white p-3">
                <p className="text-[9px] font-semibold uppercase text-[#8a969e]">
                  Problem ID
                </p>

                <p className="mt-1 break-all text-[11px] font-bold text-[#344653]">
                  {problem.id}
                </p>
              </div>

              <div className="rounded-md bg-white p-3">
                <p className="text-[9px] font-semibold uppercase text-[#8a969e]">
                  Category
                </p>

                <p className="mt-1 text-[11px] font-bold text-[#344653]">
                  {problem.category || "Not specified"}
                </p>
              </div>

              <div className="rounded-md bg-white p-3">
                <p className="text-[9px] font-semibold uppercase text-[#8a969e]">
                  Location
                </p>

                <p className="mt-1 text-[11px] font-bold text-[#344653]">
                  {problem.location?.area ||
                    problem.location?.address ||
                    problem.location?.district ||
                    "Not specified"}
                </p>
              </div>

            </div>
          </div>
        )}

        {/* --------------------------------------------- */}
        {/* UNIVERSITY SECTION */}
        {/* --------------------------------------------- */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr_0.75fr]">

          <div>
            <h1 className="text-lg font-bold text-[#082e5c] sm:text-xl">
              Recommended Universities
            </h1>

            <p className="mt-1 text-xs text-[#68757d] sm:text-sm">
              Based on category, location &amp; expertise
            </p>

            <div className="mt-4 space-y-2">
              {universities.map((university) => (
                <UniversityCard
                  key={university.name}
                  university={university}
                  onSelect={handleSelectUniversity}
                />
              ))}
            </div>

            <div className="mt-5 flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => navigate("/universities")}
                className="flex h-10 items-center justify-center rounded-md border border-[#b8cbd1] px-7 text-xs font-bold text-[#082e5c] transition hover:bg-[#f4f8f6]"
              >
                View All Universities
              </button>
            </div>
          </div>

          {/* ------------------------------------------- */}
          {/* WHY THESE UNIVERSITIES */}
          {/* ------------------------------------------- */}

          <div className="rounded-lg border border-[#e2e8eb] bg-white p-5 sm:p-6">
            <h2 className="text-sm font-bold text-[#082e5c] sm:text-base">
              Why these universities?
            </h2>

            <div className="mt-5 space-y-4">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-2.5"
                >
                  <span className="mt-0.5 text-sm font-bold text-[#07865c]">
                    ✓
                  </span>

                  <p className="text-xs leading-5 text-[#344653] sm:text-[13px]">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// =====================================================
// UNIVERSITY CARD
// =====================================================

function UniversityCard({ university, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(university)}
      className="flex w-full items-center gap-3 rounded-md border border-[#e1e7ea] bg-white px-3 py-3 text-left transition hover:border-[#07865c] hover:bg-[#f8fcfa] sm:px-4"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef4f8] text-xl text-[#244e76]">
        {university.logo}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-xs font-bold text-[#082e5c] sm:text-sm">
          {university.name}
        </h3>

        <p className="mt-1 text-[10px] text-[#68757d] sm:text-xs">
          {university.location}
        </p>
      </div>

      <div className="shrink-0 text-right">
        <p className="text-[9px] font-semibold text-[#52616b] sm:text-[10px]">
          Match Score
        </p>

        <span className="mt-1 inline-flex rounded-md border border-[#a9cdbd] bg-[#f2faf6] px-3 py-1 text-sm font-bold text-[#28735c]">
          {university.score}
        </span>
      </div>
    </button>
  );
}

export default UniversityMatching;