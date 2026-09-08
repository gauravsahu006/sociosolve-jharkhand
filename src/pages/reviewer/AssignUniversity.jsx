import React, { useEffect, useState } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";


function AssignUniversity() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [problemId, setProblemId] = useState("");
  const [problem, setProblem] = useState(null);

  const [loading, setLoading] = useState(true);
  const [assigning, setAssigning] = useState(false);
  const [error, setError] = useState("");

  const [selectedUniversity, setSelectedUniversity] =
    useState(null);

  const [formData, setFormData] = useState({
    university: "",
    coordinator: "",
    coordinatorEmail: "",
    coordinatorMobile: "",
    dueDate: "",
    notes: "",
  });

  // =====================================================
  // LOAD ASSIGNMENT DATA
  // =====================================================

  useEffect(() => {
    const loadAssignmentData = async () => {
      try {
        setLoading(true);
        setError("");

        // -----------------------------------------------
        // GET IDS FROM URL
        // -----------------------------------------------

        const urlProblemId =
          searchParams.get("problemId");

        const urlUniversityId =
          searchParams.get("universityId");

        // -----------------------------------------------
        // FALLBACK TO SESSION STORAGE
        // -----------------------------------------------

        const savedProblemId =
          sessionStorage.getItem(
            "socioSolveSelectedProblemId"
          );

        const savedUniversity =
          sessionStorage.getItem(
            "socioSolveSelectedUniversity"
          );

        const finalProblemId =
          urlProblemId || savedProblemId;

        if (!finalProblemId) {
          setError(
            "Problem ID not found. Please select a verified problem first."
          );
          return;
        }

        setProblemId(finalProblemId);

        // -----------------------------------------------
        // LOAD PROBLEM
        // -----------------------------------------------

        const problemRef = doc(
          db,
          "problems",
          finalProblemId
        );

        const problemSnapshot =
          await getDoc(problemRef);

        if (!problemSnapshot.exists()) {
          setError(
            "Problem not found in Firebase."
          );
          return;
        }

        const problemData = {
          id: problemSnapshot.id,
          ...problemSnapshot.data(),
        };

        setProblem(problemData);

        // -----------------------------------------------
        // DETERMINE UNIVERSITY ID
        // -----------------------------------------------

        let universityId = urlUniversityId;

        if (!universityId && savedUniversity) {
          try {
            const parsedUniversity =
              JSON.parse(savedUniversity);

            universityId =
              parsedUniversity.id;
          } catch (error) {
            console.error(
              "University session error:",
              error
            );
          }
        }

        if (!universityId) {
          setError(
            "Please select a university before assigning."
          );
          return;
        }

        // -----------------------------------------------
        // ALWAYS LOAD LATEST UNIVERSITY FROM FIREBASE
        // -----------------------------------------------

        const universityRef = doc(
          db,
          "universities",
          universityId
        );

        const universitySnapshot =
          await getDoc(universityRef);

        if (!universitySnapshot.exists()) {
          setError(
            "Selected university was not found in Firebase."
          );
          return;
        }

        const universityData =
          universitySnapshot.data();

        // -----------------------------------------------
        // CHECK APPROVAL
        // -----------------------------------------------

        if (universityData.status !== "approved") {
          setError(
            "Selected university is not approved."
          );
          return;
        }

        // -----------------------------------------------
        // CREATE FINAL UNIVERSITY OBJECT
        // -----------------------------------------------

        const university = {
          id: universitySnapshot.id,

          ...universityData,

          name:
            universityData.universityName ||
            universityData.name ||
            "University",

          location:
            universityData.address ||
            universityData.district ||
            "Jharkhand",

          score:
            (() => {
              if (savedUniversity) {
                try {
                  const parsed =
                    JSON.parse(savedUniversity);

                  return (
                    parsed.score ||
                    parsed.matchScore ||
                    "Recommended"
                  );
                } catch {
                  return "Recommended";
                }
              }

              return "Recommended";
            })(),
        };

        setSelectedUniversity(university);

        // -----------------------------------------------
        // AUTOMATICALLY FILL COORDINATOR DETAILS
        // -----------------------------------------------

        setFormData((prev) => ({
          ...prev,

          university: university.name,

          coordinator:
            universityData.coordinatorName ||
            "",

          coordinatorEmail:
            universityData.coordinatorEmail ||
            "",

          coordinatorMobile:
            universityData.mobile ||
            "",
        }));

      } catch (error) {
        console.error(
          "Assignment loading error:",
          error
        );

        setError(
          error.message ||
            "Unable to load assignment details."
        );
      } finally {
        setLoading(false);
      }
    };

    loadAssignmentData();
  }, [searchParams]);

  // =====================================================
  // FORM CHANGE
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // ASSIGN PROBLEM
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!auth.currentUser) {
      setError(
        "Please login as an approved reviewer."
      );
      return;
    }

    if (!problemId) {
      setError("Problem ID is missing.");
      return;
    }

    if (!problem) {
      setError(
        "Problem details could not be loaded."
      );
      return;
    }

    if (!selectedUniversity?.id) {
      setError(
        "Please select a valid registered university."
      );
      return;
    }

    try {
      setAssigning(true);

      // -----------------------------------------------
      // VERIFY REVIEWER
      // -----------------------------------------------

      const reviewerRef = doc(
        db,
        "reviewers",
        auth.currentUser.uid
      );

      const reviewerSnapshot =
        await getDoc(reviewerRef);

      if (!reviewerSnapshot.exists()) {
        setError(
          "Reviewer profile not found."
        );
        return;
      }

      const reviewerData =
        reviewerSnapshot.data();

      if (reviewerData.status !== "approved") {
        setError(
          "Your reviewer account is not approved."
        );
        return;
      }

      // -----------------------------------------------
      // GET LATEST UNIVERSITY DATA
      // -----------------------------------------------

      const universityRef = doc(
        db,
        "universities",
        selectedUniversity.id
      );

      const universitySnapshot =
        await getDoc(universityRef);

      if (!universitySnapshot.exists()) {
        setError(
          "Selected university was not found."
        );
        return;
      }

      const universityData =
        universitySnapshot.data();

      if (universityData.status !== "approved") {
        setError(
          "Selected university is not approved."
        );
        return;
      }

      // -----------------------------------------------
      // UPDATE PROBLEM
      // -----------------------------------------------

      const problemRef = doc(
        db,
        "problems",
        problemId
      );

      await updateDoc(problemRef, {
        // STATUS
        status: "assigned",

        // REAL FIREBASE UNIVERSITY UID
        assignedUniversityId:
          selectedUniversity.id,

        // UNIVERSITY DETAILS
        assignedUniversityName:
          universityData.universityName ||
          selectedUniversity.name ||
          "",

        assignedUniversityLocation:
          universityData.address ||
          universityData.district ||
          "Jharkhand",

        // COORDINATOR DETAILS
        coordinator:
          universityData.coordinatorName ||
          "",

        coordinatorEmail:
          universityData.coordinatorEmail ||
          "",

        coordinatorMobile:
          universityData.mobile ||
          "",

        // ASSIGNMENT DETAILS
        dueDate:
          formData.dueDate || "",

        assignmentNotes:
          formData.notes || "",

        // MATCH SCORE
        matchScore:
          selectedUniversity.score ||
          selectedUniversity.matchScore ||
          "",

        // REVIEWER
        assignedBy:
          auth.currentUser.uid,

        assignedAt:
          serverTimestamp(),

        updatedAt:
          serverTimestamp(),
      });

      // -----------------------------------------------
      // SAVE ASSIGNMENT HISTORY
      // -----------------------------------------------

      const assignment = {
        problemId,

        problemTitle:
          problem.title || "",

        universityId:
          selectedUniversity.id,

        universityName:
          universityData.universityName ||
          selectedUniversity.name ||
          "",

        universityLocation:
          universityData.address ||
          universityData.district ||
          "Jharkhand",

        coordinator:
          universityData.coordinatorName ||
          "",

        coordinatorEmail:
          universityData.coordinatorEmail ||
          "",

        coordinatorMobile:
          universityData.mobile ||
          "",

        dueDate:
          formData.dueDate || "",

        notes:
          formData.notes || "",

        matchScore:
          selectedUniversity.score ||
          selectedUniversity.matchScore ||
          "",

        status: "assigned",

        assignedBy:
          auth.currentUser.uid,

        assignedAt:
          new Date().toISOString(),
      };

      sessionStorage.setItem(
        "socioSolveUniversityAssignment",
        JSON.stringify(assignment)
      );

      // -----------------------------------------------
      // CLEAR OLD SELECTION
      // -----------------------------------------------

      sessionStorage.removeItem(
        "socioSolveSelectedProblemId"
      );

      sessionStorage.removeItem(
        "socioSolveSelectedUniversity"
      );

      // -----------------------------------------------
      // GO TO HISTORY
      // -----------------------------------------------

      navigate(
        "/reviewer/review-history"
      );

    } catch (error) {
      console.error(
        "Assignment error:",
        error
      );

      if (
        error.code ===
        "permission-denied"
      ) {
        setError(
          "Permission denied. Make sure your reviewer account is approved."
        );
      } else {
        setError(
          error.message ||
            "Failed to assign the problem."
        );
      }
    } finally {
      setAssigning(false);
    }
  };

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#e6f2ec] border-t-[#07865c]" />

          <p className="mt-4 text-sm font-bold text-[#07336B]">
            Loading Assignment...
          </p>
        </div>
      </div>
    );
  }

  // =====================================================
  // ERROR
  // =====================================================

  if (error && !problem) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-5">
        <div className="w-full max-w-lg rounded-xl border border-red-200 bg-red-50 p-7 text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl font-bold text-red-600">
            !
          </div>

          <h1 className="mt-4 text-lg font-bold text-[#07336B]">
            Assignment Error
          </h1>

          <p className="mt-2 text-sm text-red-600">
            {error}
          </p>

          <button
            type="button"
            onClick={() =>
              navigate(
                "/reviewer/verified"
              )
            }
            className="mt-5 rounded-md bg-[#07865c] px-5 py-2.5 text-xs font-bold text-white"
          >
            Back to Verified Problems
          </button>

        </div>
      </div>
    );
  }

  // =====================================================
  // MAIN UI
  // =====================================================

  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 lg:px-8">

      <div className="mx-auto w-full max-w-5xl">

        {/* PROBLEM INFORMATION */}

        <div className="mb-6 rounded-xl border border-[#dbe3e8] bg-white p-5 shadow-sm">

          <p className="text-xs font-bold uppercase tracking-wide text-[#07865c]">
            Verified Problem
          </p>

          <h1 className="mt-2 text-xl font-bold text-[#092f5d] sm:text-2xl">
            {problem?.title ||
              "Untitled Problem"}
          </h1>

          <p className="mt-2 text-xs text-[#68757d]">
            Problem ID: {problemId}
          </p>

          {problem?.category && (
            <p className="mt-1 text-xs text-[#68757d]">
              Category: {problem.category}
            </p>
          )}

        </div>

        {/* SELECTED UNIVERSITY */}

        {selectedUniversity && (
          <div className="mb-6 rounded-xl border border-[#bfe5d1] bg-[#f2faf6] p-5">

            <p className="text-xs font-bold uppercase tracking-wide text-[#07865c]">
              Selected University
            </p>

            <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <h2 className="text-lg font-bold text-[#092f5d]">
                  {selectedUniversity.name}
                </h2>

                <p className="text-xs text-[#68757d]">
                  {selectedUniversity.address ||
                    selectedUniversity.district ||
                    "Jharkhand"}
                </p>

              </div>

              <span className="w-fit rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#07865c]">
                {selectedUniversity.score ||
                  selectedUniversity.matchScore ||
                  "Selected"}
              </span>

            </div>

          </div>
        )}

        {/* ERROR */}

        {error && (
          <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
            <p className="text-xs font-medium text-red-600">
              {error}
            </p>
          </div>
        )}

        {/* ASSIGNMENT FORM */}

        <div className="rounded-xl border border-[#dbe3e8] bg-white p-5 shadow-sm sm:p-6">

          <h2 className="text-xl font-bold text-[#092f5d]">
            Assignment Details
          </h2>

          <p className="mt-1 text-xs text-[#68757d]">
            University details are automatically loaded from the registered university profile.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-6"
          >

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

              {/* UNIVERSITY */}

              <div>
                <label
                  htmlFor="university"
                  className="mb-2 block text-sm font-bold text-[#293b4a]"
                >
                  Assign To
                </label>

                <input
                  id="university"
                  name="university"
                  value={formData.university}
                  readOnly
                  className="h-12 w-full rounded-md border border-[#d4dde2] bg-[#f7faf9] px-3 text-sm font-medium text-[#40505d] outline-none"
                />
              </div>

              {/* COORDINATOR */}

              <div>
                <label
                  htmlFor="coordinator"
                  className="mb-2 block text-sm font-bold text-[#293b4a]"
                >
                  Faculty Coordinator
                </label>

                <input
                  id="coordinator"
                  name="coordinator"
                  value={formData.coordinator}
                  readOnly
                  placeholder="Not provided"
                  className="h-12 w-full rounded-md border border-[#d4dde2] bg-[#f7faf9] px-3 text-sm font-medium text-[#40505d] outline-none"
                />
              </div>

              {/* DUE DATE */}

              <div>
                <label
                  htmlFor="dueDate"
                  className="mb-2 block text-sm font-bold text-[#293b4a]"
                >
                  Due Date
                  <span className="font-medium text-[#7c878e]">
                    {" "}
                    (Optional)
                  </span>
                </label>

                <input
                  id="dueDate"
                  name="dueDate"
                  type="date"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="h-12 w-full rounded-md border border-[#d4dde2] bg-white px-3 text-sm font-medium text-[#40505d] outline-none transition focus:border-[#07865c] focus:ring-1 focus:ring-[#07865c]"
                />
              </div>

            </div>

            {/* COORDINATOR CONTACT */}

            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-bold text-[#293b4a]">
                  Coordinator Email
                </label>

                <input
                  value={
                    formData.coordinatorEmail
                  }
                  readOnly
                  placeholder="Not provided"
                  className="h-12 w-full rounded-md border border-[#d4dde2] bg-[#f7faf9] px-3 text-sm font-medium text-[#40505d] outline-none"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-[#293b4a]">
                  Coordinator Mobile
                </label>

                <input
                  value={
                    formData.coordinatorMobile
                  }
                  readOnly
                  placeholder="Not provided"
                  className="h-12 w-full rounded-md border border-[#d4dde2] bg-[#f7faf9] px-3 text-sm font-medium text-[#40505d] outline-none"
                />
              </div>

            </div>

            {/* NOTES */}

            <div className="mt-6">

              <label
                htmlFor="notes"
                className="mb-2 block text-sm font-bold text-[#293b4a]"
              >
                Notes for University
                <span className="font-medium text-[#7c878e]">
                  {" "}
                  (Optional)
                </span>
              </label>

              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                maxLength={500}
                rows={4}
                placeholder="Write instructions for the university..."
                className="w-full resize-none rounded-md border border-[#d4dde2] bg-white px-3 py-3 text-sm leading-6 text-[#40505d] outline-none transition focus:border-[#07865c] focus:ring-1 focus:ring-[#07865c]"
              />

              <p className="mt-1 text-right text-[10px] text-[#697780]">
                {formData.notes.length}/500
              </p>

            </div>

            {/* BUTTON */}

            <div className="mt-7 flex justify-center">

              <button
                type="submit"
                disabled={assigning}
                className="flex h-12 min-w-[230px] items-center justify-center rounded-md bg-[#07865c] px-8 text-sm font-bold text-white shadow-sm transition hover:bg-[#06754f] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {assigning
                  ? "Assigning..."
                  : "Assign Problem"}
              </button>

            </div>

          </form>

        </div>

      </div>
    </div>
  );
}

export default AssignUniversity;