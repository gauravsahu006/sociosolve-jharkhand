
import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

function DuplicateCheck() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const problemId = searchParams.get("problemId");

  const [problem, setProblem] = useState(null);
  const [duplicates, setDuplicates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [error, setError] = useState("");

  /*
   * -----------------------------------------
   * GET LOCATION TEXT
   * -----------------------------------------
   */
  const getLocationText = (location) => {
    if (!location) {
      return "";
    }

    if (typeof location === "string") {
      return location;
    }

    return (
      location.area ||
      location.address ||
      location.city ||
      ""
    );
  };

  /*
   * -----------------------------------------
   * LOAD PROBLEM
   * -----------------------------------------
   */
  useEffect(() => {
    const loadProblem = () => {
      setLoading(true);
      setError("");

      /*
       * Reviewer login check
       */
      const reviewerLoggedIn =
        localStorage.getItem("reviewerLoggedIn");

      if (reviewerLoggedIn !== "true") {
        setError("Reviewer login required.");
        setLoading(false);
        return;
      }

      /*
       * Problem ID check
       */
      if (!problemId) {
        setError("Problem ID is missing.");
        setLoading(false);
        return;
      }

      try {
        /*
         * -----------------------------------------
         * GET ALL PROBLEMS
         * -----------------------------------------
         */
        const storedProblems =
          localStorage.getItem(
            "reviewerProblems"
          );

        const allProblems = storedProblems
          ? JSON.parse(storedProblems)
          : [];

        /*
         * Find current problem
         */
        const currentProblem =
          allProblems.find(
            (item) => item.id === problemId
          );

        if (!currentProblem) {
          setError("Problem not found.");
          setLoading(false);
          return;
        }

        setProblem(currentProblem);

        /*
         * -----------------------------------------
         * FIND POSSIBLE DUPLICATES
         * -----------------------------------------
         *
         * Same category + same location
         */
        const currentCategory = (
          currentProblem.category || ""
        )
          .toString()
          .trim()
          .toLowerCase();

        const currentLocation =
          getLocationText(
            currentProblem.location
          )
            .toString()
            .trim()
            .toLowerCase();

        const possibleDuplicates =
          allProblems.filter((item) => {

            /*
             * Don't compare problem with itself
             */
            if (item.id === problemId) {
              return false;
            }

            /*
             * Don't show rejected problems
             */
            if (item.status === "rejected") {
              return false;
            }

            /*
             * Don't show duplicates
             */
            if (item.status === "duplicate") {
              return false;
            }

            const itemCategory = (
              item.category || ""
            )
              .toString()
              .trim()
              .toLowerCase();

            const itemLocation =
              getLocationText(
                item.location
              )
                .toString()
                .trim()
                .toLowerCase();

            const sameCategory =
              currentCategory &&
              itemCategory &&
              currentCategory ===
                itemCategory;

            const sameLocation =
              currentLocation &&
              itemLocation &&
              currentLocation ===
                itemLocation;

            return (
              sameCategory &&
              sameLocation
            );
          });

        /*
         * Latest problems first
         */
        possibleDuplicates.sort(
          (a, b) => {
            const dateA =
              a.submittedAt ||
              a.createdAt ||
              0;

            const dateB =
              b.submittedAt ||
              b.createdAt ||
              0;

            return (
              new Date(dateB) -
              new Date(dateA)
            );
          }
        );

        setDuplicates(
          possibleDuplicates
        );

      } catch (err) {
        console.error(
          "Duplicate check error:",
          err
        );

        setError(
          "Failed to load duplicate information."
        );
      } finally {
        setLoading(false);
      }
    };

    loadProblem();
  }, [problemId]);

  /*
   * -----------------------------------------
   * MARK AS DUPLICATE
   * -----------------------------------------
   */
  const handleDuplicate = () => {
    if (!problemId || !problem) {
      return;
    }

    try {
      const storedProblems =
        localStorage.getItem(
          "reviewerProblems"
        );

      const allProblems = storedProblems
        ? JSON.parse(storedProblems)
        : [];

      /*
       * Update current problem
       */
      const updatedProblems =
        allProblems.map((item) => {

          if (item.id !== problemId) {
            return item;
          }

          return {
            ...item,

            status: "duplicate",

            duplicateCheckedBy:
              localStorage.getItem(
                "reviewerEmail"
              ) ||
              localStorage.getItem(
                "reviewerName"
              ) ||
              "Reviewer",

            duplicateCheckedAt:
              new Date().toISOString(),

            updatedAt:
              new Date().toISOString(),
          };
        });

      /*
       * Save
       */
      localStorage.setItem(
        "reviewerProblems",
        JSON.stringify(updatedProblems)
      );

      /*
       * Update local state
       */
      const updatedProblem =
        updatedProblems.find(
          (item) =>
            item.id === problemId
        );

      setProblem(updatedProblem);
      setIsDuplicate(true);

      /*
       * Notify other pages
       */
      window.dispatchEvent(
        new Event(
          "socioSolveProblemsUpdated"
        )
      );

    } catch (err) {
      console.error(
        "Mark duplicate error:",
        err
      );

      setError(
        "Failed to mark problem as duplicate."
      );
    }
  };

  /*
   * -----------------------------------------
   * CONTINUE
   * -----------------------------------------
   */
  const handleContinue = () => {
    if (!problemId) {
      return;
    }

    /*
     * Save selected problem
     */
    sessionStorage.setItem(
      "socioSolveSelectedProblemId",
      problemId
    );

    /*
     * Continue to categorization
     */
    navigate(
      `/reviewer/categorize?problemId=${problemId}`
    );
  };

  /*
   * -----------------------------------------
   * LOADING SCREEN
   * -----------------------------------------
   */
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">

        <div className="text-center">

          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-[#07865c] border-t-transparent" />

          <p className="text-sm text-[#68757d]">
            Loading duplicate check...
          </p>

        </div>

      </div>
    );
  }

  /*
   * -----------------------------------------
   * ERROR SCREEN
   * -----------------------------------------
   */
  if (error || !problem) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">

        <div className="text-center">

          <p className="text-sm font-semibold text-red-500">
            {error || "Problem not found."}
          </p>

          <Link
            to="/reviewer/verification"
            className="inline-block mt-4 text-sm text-[#1765b0] hover:underline"
          >
            Back to Verification Queue
          </Link>

        </div>

      </div>
    );
  }

  /*
   * -----------------------------------------
   * MAIN UI
   * -----------------------------------------
   */
  return (
    <div className="w-full bg-white px-4 py-5 sm:px-6 lg:px-8">

      <div className="mx-auto w-full max-w-[1050px]">

        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

          <h1 className="text-sm font-bold text-[#082e5c] sm:text-base">
            Potential Duplicates Found (
            {duplicates.length}
            )
          </h1>

          <div className="flex items-center gap-1 text-xs font-semibold text-[#334653]">

            <span>
              Similarity Threshold: 85%
            </span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#80909b] text-[9px]">
              i
            </span>

          </div>

        </div>

        {/* Duplicate Table */}
        <div className="mt-5 overflow-x-auto">

          <div className="min-w-[700px] overflow-hidden rounded-md border border-[#edf0f2]">

            {/* Table Header */}
            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr_0.8fr] bg-[#f8fafb] px-4 py-3 text-[10px] font-bold text-[#52616b]">

              <span>
                Problem Title
              </span>

              <span>
                Location
              </span>

              <span>
                Submitted On
              </span>

              <span>
                Submitted By
              </span>

              <span>
                Similarity
              </span>

            </div>

            {/* No Duplicates */}
            {duplicates.length === 0 ? (

              <div className="px-4 py-8 text-center text-xs text-[#68757d]">

                No potential duplicates found.

              </div>

            ) : (

              /*
               * Duplicate Rows
               */
              duplicates.map((item) => (

                <div
                  key={item.id}
                  className="grid grid-cols-[1.6fr_1fr_1fr_1fr_0.8fr] items-center border-t border-[#edf0f2] px-4 py-3"
                >

                  {/* Title */}
                  <span className="text-[10px] font-semibold text-[#082e5c]">

                    {item.title ||
                      "Untitled Problem"}

                  </span>

                  {/* Location */}
                  <span className="text-[10px] text-[#52616b]">

                    {getLocationText(
                      item.location
                    ) ||
                      "Not available"}

                  </span>

                  {/* Date */}
                  <span className="text-[10px] text-[#52616b]">

                    {item.submittedAt
                      ? new Date(
                          item.submittedAt
                        ).toLocaleDateString(
                          "en-IN"
                        )
                      : "Not available"}

                  </span>

                  {/* Citizen */}
                  <span className="text-[10px] text-[#52616b]">

                    {item.citizenId ||
                      item.citizenEmail ||
                      "Citizen"}

                  </span>

                  {/* Similarity */}
                  <div className="flex items-center gap-2">

                    <span className="text-[10px] font-semibold text-[#344653]">
                      Potential
                    </span>

                    <span className="rounded-md bg-[#ffe9e9] px-3 py-1 text-[9px] font-semibold text-[#d43b43]">
                      Review
                    </span>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>

        {/* Question */}
        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <h2 className="text-sm font-bold text-[#082e5c]">
            Is this a duplicate of an existing problem?
          </h2>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

            {/* Duplicate */}
            <button
              type="button"
              onClick={handleDuplicate}
              disabled={isDuplicate}
              className={`h-11 rounded-md border px-6 text-xs font-bold transition sm:min-w-[235px] ${
                isDuplicate
                  ? "cursor-not-allowed border-[#d5dde1] bg-[#f5f8f9] text-[#89959c]"
                  : "border-[#cbd5da] text-[#082e5c] hover:bg-[#f5f8f9]"
              }`}
            >
              {isDuplicate
                ? "Marked as Duplicate"
                : "Yes, Mark as Duplicate"}
            </button>

            {/* Continue */}
            <button
              type="button"
              onClick={handleContinue}
              disabled={isDuplicate}
              className={`flex h-11 items-center justify-center rounded-md px-8 text-xs font-bold text-white transition sm:min-w-[220px] ${
                isDuplicate
                  ? "cursor-not-allowed bg-[#9db8ad]"
                  : "bg-[#07865c] hover:bg-[#06754f]"
              }`}
            >
              No, Continue
            </button>

          </div>

        </div>

        {/* Success Message */}
        {isDuplicate && (

          <div className="mt-5 rounded-md bg-[#e9f8f1] px-4 py-3 text-xs font-semibold text-[#07865c]">

            Problem has been marked as duplicate successfully.

          </div>

        )}

        {/* Current Problem Info */}
        <div className="mt-7 rounded-md border border-[#edf0f2] bg-[#f8fafb] p-4">

          <p className="text-[10px] font-bold uppercase tracking-wide text-[#68757d]">
            Current Problem
          </p>

          <p className="mt-1 text-sm font-bold text-[#082e5c]">
            {problem.title ||
              "Untitled Problem"}
          </p>

          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-[#52616b]">

            <span>
              Category:{" "}
              {problem.category ||
                "Other"}
            </span>

            <span>
              Location:{" "}
              {getLocationText(
                problem.location
              ) ||
                "Not available"}
            </span>

            <span>
              ID: {problem.id}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DuplicateCheck;

