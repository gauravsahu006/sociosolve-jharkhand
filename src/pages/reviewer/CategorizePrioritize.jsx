import React, { useEffect, useState } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import {
  doc,
  getDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth } from "../../firebase/auth";
import { db } from "../../firebase/firestore";


function CategorizePrioritize() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [problemId, setProblemId] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    category: "Water & Sanitation",
    subCategory: "Drainage / Water Logging",
    impactLevel: "High",
    priority: "High Priority",
    peopleAffected: "500",
    areaWard: "Ward 12, Ranchi",
    notes:
      "Heavy water logging during rains. Affects daily commute and causes traffic.",
  });


  // --------------------------------------------------
  // LOAD CURRENT PROBLEM
  // --------------------------------------------------
  useEffect(() => {
    const loadProblem = async () => {
      try {
        setLoading(true);
        setError("");

        const urlProblemId = searchParams.get("problemId");

const sessionProblemId = sessionStorage.getItem(
  "socioSolveSelectedProblemId"
);

const selectedProblemId =
  urlProblemId || sessionProblemId;

        if (!selectedProblemId) {
          setError(
            "Problem ID not found. Please go back to Verification Queue and start the review again."
          );
          return;
        }

        setProblemId(selectedProblemId);

        const problemRef = doc(
          db,
          "problems",
          selectedProblemId
        );

        const problemSnapshot = await getDoc(problemRef);

        if (!problemSnapshot.exists()) {
          setError(
            "This problem was not found in Firebase."
          );
          return;
        }

        const problem = problemSnapshot.data();

        // Load existing Firebase values if available
        setFormData({
          category:
            problem.category || "Water & Sanitation",

          subCategory:
            problem.subCategory ||
            "Drainage / Water Logging",

          impactLevel:
            problem.impactLevel || "High",

          priority:
            problem.priority || "High Priority",

          peopleAffected:
            problem.peopleAffected || "500",

          areaWard:
            problem.areaWard ||
            problem.location?.area ||
            problem.location?.address ||
            "Ward 12, Ranchi",

          notes:
            problem.reviewNotes ||
            "Heavy water logging during rains. Affects daily commute and causes traffic.",
        });

      } catch (error) {
        console.error(
          "Error loading problem:",
          error
        );

        if (
          error.code === "permission-denied"
        ) {
          setError(
            "Permission denied. Please make sure your reviewer account is approved."
          );
        } else {
          setError(
            "Unable to load problem details."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    loadProblem();
  }, [searchParams]);


  // --------------------------------------------------
  // INPUT CHANGE
  // --------------------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  // --------------------------------------------------
  // SAVE & CONTINUE
  // --------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!problemId) {
      setError(
        "Problem ID is missing. Please go back and start the verification again."
      );
      return;
    }

    if (!auth.currentUser) {
      setError(
        "Reviewer login is required."
      );
      return;
    }

    try {
      setSaving(true);
      setError("");

      const problemRef = doc(
        db,
        "problems",
        problemId
      );

      // ----------------------------------------------
      // UPDATE ACTUAL FIREBASE PROBLEM
      // ----------------------------------------------
      await updateDoc(problemRef, {
        category: formData.category,
        subCategory: formData.subCategory,
        impactLevel: formData.impactLevel,
        priority: formData.priority,
        peopleAffected: formData.peopleAffected,
        areaWard: formData.areaWard,
        reviewNotes: formData.notes,

        categorizedBy: auth.currentUser.uid,
        categorizedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });


      // ----------------------------------------------
      // KEEP PROBLEM ID FOR UNIVERSITY MATCHING
      // ----------------------------------------------
      sessionStorage.setItem(
        "socioSolveSelectedProblemId",
        problemId
      );


      // ----------------------------------------------
      // KEEP CATEGORY DATA FOR OTHER PAGES
      // ----------------------------------------------
      sessionStorage.setItem(
        "socioSolveCategorizedProblem",
        JSON.stringify({
          problemId,
          ...formData,
        })
      );


      // ----------------------------------------------
      // GO TO UNIVERSITY MATCHING
      // ----------------------------------------------
      navigate("/reviewer/universities");

    } catch (error) {
      console.error(
        "Error saving categorization:",
        error
      );

      if (
        error.code === "permission-denied"
      ) {
        setError(
          "Permission denied. Make sure this reviewer is approved."
        );
      } else {
        setError(
          error.message ||
            "Unable to save categorization."
        );
      }
    } finally {
      setSaving(false);
    }
  };


  // --------------------------------------------------
  // LOADING
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
  // ERROR
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
            onClick={() =>
              navigate("/reviewer/verification")
            }
            className="mt-5 rounded-md bg-[#07865c] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#06754f]"
          >
            Back to Verification
          </button>

        </div>
      </div>
    );
  }


  // --------------------------------------------------
  // PAGE
  // --------------------------------------------------
  return (
    <div className="min-h-screen w-full bg-white px-4 py-8 sm:px-6 lg:px-8">

      <div className="mx-auto w-full max-w-[850px]">

        {/* CURRENT PROBLEM */}
        <div className="mb-6 rounded-xl border border-[#dbe3e8] bg-[#f8fafb] p-4">

          <p className="text-[10px] font-bold uppercase tracking-wide text-[#68757d]">
            Categorizing Problem
          </p>

          <p className="mt-1 text-xs font-bold text-[#082e5c]">
            Problem ID: {problemId}
          </p>

        </div>


        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            <FormField label="Category">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-input"
              >
                <option>
                  Water &amp; Sanitation
                </option>

                <option>
                  Road &amp; Transport
                </option>

                <option>
                  Street Light
                </option>

                <option>
                  Garbage Management
                </option>

                <option>
                  Public Safety
                </option>
              </select>
            </FormField>


            <FormField label="Sub Category">
              <select
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                className="form-input"
              >
                <option>
                  Drainage / Water Logging
                </option>

                <option>
                  Blocked Drain
                </option>

                <option>
                  Water Supply
                </option>

                <option>
                  Flooding
                </option>
              </select>
            </FormField>


            <FormField label="Impact Level">
              <select
                name="impactLevel"
                value={formData.impactLevel}
                onChange={handleChange}
                className="form-input"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </FormField>


            <FormField label="Priority">
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="form-input"
              >
                <option>
                  High Priority
                </option>

                <option>
                  Medium Priority
                </option>

                <option>
                  Low Priority
                </option>
              </select>
            </FormField>


            <FormField label="People Affected (Approx.)">
              <div className="relative">

                <input
                  name="peopleAffected"
                  type="number"
                  value={formData.peopleAffected}
                  onChange={handleChange}
                  className="form-input pr-12"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-[#52616b]">
                  ▣
                </span>

              </div>
            </FormField>


            <FormField label="Area / Ward">
              <input
                name="areaWard"
                type="text"
                value={formData.areaWard}
                onChange={handleChange}
                className="form-input"
              />
            </FormField>


            <div className="md:col-span-2">

              <FormField label="Notes (Optional)">

                <div className="relative">

                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    maxLength={200}
                    rows={4}
                    className="form-input min-h-[120px] resize-none pb-8"
                  />

                  <span className="absolute bottom-3 right-4 text-xs text-[#68757d]">
                    {formData.notes.length}/200
                  </span>

                </div>

              </FormField>

            </div>

          </div>


          <div className="mt-7 flex justify-end">

            <button
              type="submit"
              disabled={saving}
              className="rounded-md bg-[#07865c] px-7 py-3 text-xs font-bold text-white transition hover:bg-[#06754f] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving
                ? "Saving..."
                : "Save & Continue →"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}


// --------------------------------------------------
// FORM FIELD
// --------------------------------------------------
function FormField({
  label,
  children,
}) {
  return (
    <div className="w-full">

      <label className="mb-2 block text-[13px] font-bold text-[#263746] sm:text-sm">
        {label}
      </label>

      {children}

    </div>
  );
}


export default CategorizePrioritize;