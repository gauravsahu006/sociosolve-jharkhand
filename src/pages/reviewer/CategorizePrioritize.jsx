import React, { useEffect, useState } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const demoProblems = [
  {
    id: "problem-001",
    title: "Water Supply Problem",
    category: "Water & Sanitation",
    subCategory: "Drainage / Water Logging",
    impactLevel: "High",
    priority: "High Priority",
    peopleAffected: "500",
    areaWard: "Ward 12, Ranchi",
    reviewNotes:
      "Heavy water logging during rains. Affects daily commute and causes traffic.",
    location: {
      area: "Ward 12",
      district: "Ranchi",
    },
    status: "under_review",
  },
  {
    id: "problem-002",
    title: "Damaged Road Near Main Market",
    category: "Road & Transport",
    subCategory: "Road Damage",
    impactLevel: "High",
    priority: "High Priority",
    peopleAffected: "800",
    areaWard: "Main Market, Ranchi",
    reviewNotes:
      "Damaged road surface is creating difficulty for commuters.",
    location: {
      area: "Main Market",
      district: "Ranchi",
    },
    status: "under_review",
  },
  {
    id: "problem-003",
    title: "Broken Street Light",
    category: "Street Light",
    subCategory: "Non-functional Light",
    impactLevel: "Medium",
    priority: "Medium Priority",
    peopleAffected: "250",
    areaWard: "Morabadi, Ranchi",
    reviewNotes:
      "Street light is not working and the area becomes dark at night.",
    location: {
      area: "Morabadi",
      district: "Ranchi",
    },
    status: "under_review",
  },
];

// --------------------------------------------------
// DEFAULT FORM
// --------------------------------------------------

const defaultFormData = {
  category: "Water & Sanitation",
  subCategory: "Drainage / Water Logging",
  impactLevel: "High",
  priority: "High Priority",
  peopleAffected: "500",
  areaWard: "Ward 12, Ranchi",
  notes:
    "Heavy water logging during rains. Affects daily commute and causes traffic.",
};

function CategorizePrioritize() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [problemId, setProblemId] = useState("");
  const [problem, setProblem] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState(
    defaultFormData
  );

  // --------------------------------------------------
  // LOAD CURRENT PROBLEM
  // --------------------------------------------------

  useEffect(() => {
    const loadProblem = () => {
      try {
        setLoading(true);
        setError("");

        const urlProblemId =
          searchParams.get("problemId");

        const sessionProblemId =
          sessionStorage.getItem(
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

        // ----------------------------------------------
        // LOAD LOCAL STORAGE DATA
        // ----------------------------------------------

        const storedProblems = JSON.parse(
          localStorage.getItem("reviewerProblems") || "[]"
        );

        let selectedProblem =
          storedProblems.find(
            (item) =>
              String(item.id) ===
              String(selectedProblemId)
          );

        // ----------------------------------------------
        // IF NOT FOUND, LOAD DEMO PROBLEM
        // ----------------------------------------------

        if (!selectedProblem) {
          selectedProblem =
            demoProblems.find(
              (item) =>
                String(item.id) ===
                String(selectedProblemId)
            );
        }

        // ----------------------------------------------
        // FALLBACK
        // ----------------------------------------------

        if (!selectedProblem) {
          selectedProblem =
            storedProblems.find(
              (item) =>
                item.status === "under_review"
            ) || demoProblems[0];
        }

        if (!selectedProblem) {
          setError(
            "Unable to find the selected problem."
          );
          return;
        }

        setProblem(selectedProblem);

        setFormData({
          category:
            selectedProblem.category ||
            defaultFormData.category,

          subCategory:
            selectedProblem.subCategory ||
            defaultFormData.subCategory,

          impactLevel:
            selectedProblem.impactLevel ||
            defaultFormData.impactLevel,

          priority:
            selectedProblem.priority ||
            defaultFormData.priority,

          peopleAffected:
            String(
              selectedProblem.peopleAffected ||
                defaultFormData.peopleAffected
            ),

          areaWard:
            selectedProblem.areaWard ||
            selectedProblem.location?.area ||
            selectedProblem.location?.address ||
            defaultFormData.areaWard,

          notes:
            selectedProblem.reviewNotes ||
            selectedProblem.notes ||
            defaultFormData.notes,
        });

        // Keep selected problem
        sessionStorage.setItem(
          "socioSolveSelectedProblemId",
          String(selectedProblem.id)
        );
      } catch (err) {
        console.error(
          "Error loading problem:",
          err
        );

        setError(
          "Unable to load problem details."
        );
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

    try {
      setSaving(true);
      setError("");

      // Small delay for realistic frontend interaction
      await new Promise((resolve) =>
        setTimeout(resolve, 500)
      );

      const categorizedData = {
        ...formData,
        problemId,
        updatedAt: new Date().toISOString(),
        categorizedAt: new Date().toISOString(),
        categorizedBy:
          localStorage.getItem("reviewerEmail") ||
          "Reviewer",
      };

      // ----------------------------------------------
      // UPDATE LOCAL STORAGE
      // ----------------------------------------------

      const storedProblems = JSON.parse(
        localStorage.getItem("reviewerProblems") || "[]"
      );

      const existingIndex =
        storedProblems.findIndex(
          (item) =>
            String(item.id) ===
            String(problemId)
        );

      const updatedProblem = {
        ...(problem || {}),
        ...categorizedData,
      };

      if (existingIndex >= 0) {
        storedProblems[existingIndex] = updatedProblem;
      } else {
        storedProblems.push(updatedProblem);
      }

      localStorage.setItem(
        "reviewerProblems",
        JSON.stringify(storedProblems)
      );

      // ----------------------------------------------
      // SAVE CATEGORY DATA FOR NEXT PAGES
      // ----------------------------------------------

      sessionStorage.setItem(
        "socioSolveCategorizedProblem",
        JSON.stringify(categorizedData)
      );

      sessionStorage.setItem(
        "socioSolveSelectedProblemId",
        String(problemId)
      );

      // ----------------------------------------------
      // GO TO UNIVERSITY MATCHING
      // ----------------------------------------------

      navigate(
        `/reviewer/universities?problemId=${problemId}`
      );
    } catch (err) {
      console.error(
        "Error saving categorization:",
        err
      );

      setError(
        "Unable to save categorization. Please try again."
      );
    } finally {
      setSaving(false);
    }
  };

  // --------------------------------------------------
  // LOADING
  // --------------------------------------------------

  if (loading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-white px-4">
        <div className="text-center">

          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-[#e5eee9] border-t-[#07865c]" />

          <p className="text-sm font-semibold text-[#082e5c]">
            Loading problem details...
          </p>

          <p className="mt-1 text-xs text-[#68757d]">
            Please wait while we prepare the problem for categorization.
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
      <div className="flex min-h-screen w-full items-center justify-center bg-white px-4">

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

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wide text-[#68757d]">
                Categorizing Problem
              </p>

              <p className="mt-1 text-xs font-bold text-[#082e5c]">
                Problem ID: {problemId}
              </p>
            </div>

            {problem?.title && (
              <span className="w-fit rounded-md bg-[#e9f8f1] px-3 py-1.5 text-[9px] font-bold text-[#07865c]">
                {problem.title}
              </span>
            )}

          </div>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            {/* CATEGORY */}

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

            {/* SUB CATEGORY */}

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

                <option>
                  Road Damage
                </option>

                <option>
                  Non-functional Light
                </option>
              </select>
            </FormField>

            {/* IMPACT */}

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

            {/* PRIORITY */}

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

            {/* PEOPLE AFFECTED */}

            <FormField label="People Affected (Approx.)">

              <div className="relative">

                <input
                  name="peopleAffected"
                  type="number"
                  min="0"
                  value={formData.peopleAffected}
                  onChange={handleChange}
                  className="form-input pr-12"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-[#52616b]">
                  ▣
                </span>

              </div>

            </FormField>

            {/* AREA */}

            <FormField label="Area / Ward">

              <input
                name="areaWard"
                type="text"
                value={formData.areaWard}
                onChange={handleChange}
                className="form-input"
              />

            </FormField>

            {/* NOTES */}

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

          {/* ACTIONS */}

          <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={() =>
                navigate("/reviewer/verification")
              }
              className="rounded-md border border-[#b8cbd1] px-6 py-3 text-xs font-bold text-[#082e5c] transition hover:bg-[#f4f8f6]"
            >
              Cancel
            </button>

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

// =====================================================
// FORM FIELD
// =====================================================

function FormField({ label, children }) {
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