import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";


function DuplicateCheck() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const problemId = searchParams.get("problemId");

  const [problem, setProblem] = useState(null);
  const [duplicates, setDuplicates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProblem = async () => {
      const user = auth.currentUser;

      if (!user) {
        setError("Reviewer login required.");
        setLoading(false);
        return;
      }

      if (!problemId) {
        setError("Problem ID is missing.");
        setLoading(false);
        return;
      }

      try {
        const problemsRef = collection(db, "problems");

        const snapshot = await getDocs(problemsRef);

        const allProblems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const currentProblem = allProblems.find(
          (item) => item.id === problemId
        );

        if (!currentProblem) {
          setError("Problem not found.");
          setLoading(false);
          return;
        }

        setProblem(currentProblem);

        // Find possible duplicates using same category/location.
        const possibleDuplicates = allProblems.filter((item) => {
          if (item.id === problemId) return false;

          const sameCategory =
            item.category &&
            currentProblem.category &&
            item.category.toLowerCase() ===
              currentProblem.category.toLowerCase();

          const currentLocation =
            currentProblem.location?.area ||
            currentProblem.location?.address ||
            "";

          const itemLocation =
            item.location?.area ||
            item.location?.address ||
            "";

          const sameLocation =
            currentLocation &&
            itemLocation &&
            currentLocation.toLowerCase() ===
              itemLocation.toLowerCase();

          return sameCategory && sameLocation;
        });

        setDuplicates(possibleDuplicates);
      } catch (err) {
        console.error("Duplicate check error:", err);
        setError("Failed to load duplicate information.");
      } finally {
        setLoading(false);
      }
    };

    loadProblem();
  }, [problemId]);

  const handleDuplicate = async () => {
  if (!problemId) return;

  try {
    const problemRef = doc(db, "problems", problemId);

    await updateDoc(problemRef, {
      status: "duplicate",
      duplicateCheckedBy: auth.currentUser.uid,
      duplicateCheckedAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    setIsDuplicate(true);
  } catch (err) {
    console.error("Mark duplicate error:", err);

    setError(
      err.message || "Failed to mark problem as duplicate."
    );
  }
};

  const handleContinue = () => {
    if (!problemId) return;

    navigate(`/reviewer/categorize?problemId=${problemId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-sm text-[#68757d]">
          Loading duplicate check...
        </p>
      </div>
    );
  }

  if (error || !problem) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
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

  return (
    <div className="w-full bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1050px]">

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-sm font-bold text-[#082e5c] sm:text-base">
            Potential Duplicates Found ({duplicates.length})
          </h1>

          <div className="flex items-center gap-1 text-xs font-semibold text-[#334653]">
            <span>Similarity Threshold: 85%</span>

            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#80909b] text-[9px]">
              i
            </span>
          </div>
        </div>

        <div className="mt-5 overflow-x-auto">
          <div className="min-w-[700px] overflow-hidden rounded-md border border-[#edf0f2]">

            <div className="grid grid-cols-[1.6fr_1fr_1fr_1fr_0.8fr] bg-[#f8fafb] px-4 py-3 text-[10px] font-bold text-[#52616b]">
              <span>Problem Title</span>
              <span>Location</span>
              <span>Submitted On</span>
              <span>Submitted By</span>
              <span>Similarity</span>
            </div>

            {duplicates.length === 0 ? (
              <div className="px-4 py-8 text-center text-xs text-[#68757d]">
                No potential duplicates found.
              </div>
            ) : (
              duplicates.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[1.6fr_1fr_1fr_1fr_0.8fr] items-center border-t border-[#edf0f2] px-4 py-3"
                >
                  <span className="text-[10px] font-semibold text-[#082e5c]">
                    {item.title || "Untitled Problem"}
                  </span>

                  <span className="text-[10px] text-[#52616b]">
                    {item.location?.area ||
                      item.location?.address ||
                      "Not available"}
                  </span>

                  <span className="text-[10px] text-[#52616b]">
                    {item.submittedAt
                      ? new Date(
                          item.submittedAt
                        ).toLocaleDateString("en-IN")
                      : "Not available"}
                  </span>

                  <span className="text-[10px] text-[#52616b]">
                    {item.citizenId || "Citizen"}
                  </span>

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

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <h2 className="text-sm font-bold text-[#082e5c]">
            Is this a duplicate of an existing problem?
          </h2>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

            <button
              type="button"
              onClick={handleDuplicate}
              className="h-11 rounded-md border border-[#cbd5da] px-6 text-xs font-bold text-[#082e5c] transition hover:bg-[#f5f8f9] sm:min-w-[235px]"
            >
              Yes, Mark as Duplicate
            </button>

            <button
              type="button"
              onClick={handleContinue}
              className="flex h-11 items-center justify-center rounded-md bg-[#07865c] px-8 text-xs font-bold text-white transition hover:bg-[#06754f] sm:min-w-[220px]"
            >
              No, Continue
            </button>

          </div>
        </div>

        {isDuplicate && (
          <div className="mt-5 rounded-md bg-[#e9f8f1] px-4 py-3 text-xs font-semibold text-[#07865c]">
            Problem has been marked as duplicate successfully.
          </div>
        )}

      </div>
    </div>
  );
}

export default DuplicateCheck;