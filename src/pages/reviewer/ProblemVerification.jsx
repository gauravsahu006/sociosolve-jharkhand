import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function ProblemVerification() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // ----------------------------------
  // Load problem from Firestore
  // ----------------------------------
  useEffect(() => {
    const loadProblem = async () => {
      const user = auth.currentUser;

      if (!user) {
        setError("Please login as a reviewer first.");
        setLoading(false);
        return;
      }

      if (!id) {
        setError("Problem ID is missing.");
        setLoading(false);
        return;
      }

      try {
        const problemRef = doc(db, "problems", id);
        const problemSnapshot = await getDoc(problemRef);

        if (!problemSnapshot.exists()) {
          setError("Problem not found.");
          setLoading(false);
          return;
        }

        setProblem({
          id: problemSnapshot.id,
          ...problemSnapshot.data(),
        });
      } catch (err) {
        console.error("Error loading problem:", err);

        if (err.code === "permission-denied") {
          setError(
            "Permission denied. Make sure this reviewer is approved."
          );
        } else {
          setError(
            err.message || "Failed to load problem."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    loadProblem();
  }, [id]);

  // ----------------------------------
  // Verify & Continue
  // ----------------------------------
 const handleVerify = async () => {
  if (!problem) return;

  setActionLoading(true);
  setError("");
  setMessage("");

  try {
    const problemRef = doc(db, "problems", problem.id);

    // IMPORTANT:
    // This button only STARTS the verification process.
    // It must NOT mark the problem as verified yet.
    await updateDoc(problemRef, {
      status: "under_review",
      reviewedBy: auth.currentUser.uid,
      reviewStartedAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    // Keep the actual problem ID throughout the verification flow
    navigate(
      `/reviewer/duplicate-check?problemId=${problem.id}`
    );
  } catch (err) {
    console.error("Start verification error:", err);

    if (err.code === "permission-denied") {
      setError(
        "Permission denied. Make sure your reviewer account is approved."
      );
    } else {
      setError(
        err.message || "Failed to start verification."
      );
    }
  } finally {
    setActionLoading(false);
  }
};

  // ----------------------------------
  // Request More Information
  // ----------------------------------
  const handleRequestInfo = async () => {
    if (!problem) return;

    setActionLoading(true);
    setError("");
    setMessage("");

    try {
      const problemRef = doc(db, "problems", problem.id);

      await updateDoc(problemRef, {
        status: "info_requested",
        reviewedBy: auth.currentUser.uid,
        updatedAt: serverTimestamp(),
      });

      setProblem((prev) => ({
        ...prev,
        status: "info_requested",
      }));

      setMessage(
        "More information has been requested from the citizen."
      );
    } catch (err) {
      console.error("Request info error:", err);

      setError(
        err.message || "Failed to request more information."
      );
    } finally {
      setActionLoading(false);
    }
  };

  // ----------------------------------
  // Reject Problem
  // ----------------------------------
  const handleReject = async () => {
    if (!problem) return;

    setActionLoading(true);
    setError("");
    setMessage("");

    try {
      const problemRef = doc(db, "problems", problem.id);

      await updateDoc(problemRef, {
        status: "rejected",
        reviewedBy: auth.currentUser.uid,
        rejectedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      setProblem((prev) => ({
        ...prev,
        status: "rejected",
      }));

      setMessage("Problem has been rejected successfully.");
    } catch (err) {
      console.error("Reject problem error:", err);

      if (err.code === "permission-denied") {
        setError(
          "Permission denied. Make sure your reviewer account is approved."
        );
      } else {
        setError(
          err.message || "Failed to reject problem."
        );
      }
    } finally {
      setActionLoading(false);
    }
  };

  // ----------------------------------
  // Loading
  // ----------------------------------
  if (loading) {
    return (
      <div className="w-full bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1100px] text-center">
          <p className="text-sm font-semibold text-[#52616b]">
            Loading problem...
          </p>
        </div>
      </div>
    );
  }

  // ----------------------------------
  // Error
  // ----------------------------------
  if (error && !problem) {
    return (
      <div className="w-full bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="rounded-md bg-[#fff5f5] px-4 py-3 text-sm font-semibold text-[#d33b43]">
            {error}
          </div>
        </div>
      </div>
    );
  }

  if (!problem) {
    return null;
  }

  // ----------------------------------
  // Format Firestore data
  // ----------------------------------
  const location = problem.location || {};

  const locationText =
    location.address ||
    location.area ||
    location.district ||
    "Location not provided";

  const category =
    problem.category || "Not categorized";

  const submittedOn = problem.submittedAt
    ? new Date(problem.submittedAt).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "Not available";

  const statusText = {
    submitted: "Submitted",
    under_review: "Under Review",
    info_requested: "Info Requested",
    verified: "Verified",
    rejected: "Rejected",
    assigned: "Assigned",
    in_progress: "In Progress",
    resolved: "Resolved",
  };

  const currentStatus =
    statusText[problem.status] || problem.status || "Submitted";

  return (
    <div className="w-full bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1100px]">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[270px_1fr]">

          {/* Evidence / Image Section */}
          <div>
            <div className="overflow-hidden rounded-md">
              <img
                src="/images/water-logging.jpg"
                alt="Problem evidence"
                className="h-[180px] w-full object-cover sm:h-[210px] lg:h-[180px]"
              />
            </div>

            <div className="mt-2 grid grid-cols-3 gap-2">
              <img
                src="/images/water-logging-1.jpg"
                alt=""
                className="h-[65px] w-full rounded-md object-cover"
              />

              <img
                src="/images/water-logging-2.jpg"
                alt=""
                className="h-[65px] w-full rounded-md object-cover"
              />

              <div className="relative h-[65px] overflow-hidden rounded-md">
                <img
                  src="/images/water-logging-3.jpg"
                  alt=""
                  className="h-full w-full object-cover brightness-50"
                />

                <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
                  +3
                </span>
              </div>
            </div>
          </div>

          {/* Problem Details */}
          <div className="min-w-0">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <h1 className="text-xl font-bold text-[#082e5c] sm:text-[21px]">
                {problem.title || "Untitled Problem"}
              </h1>

              <span className="w-fit rounded-md bg-[#e8f7ef] px-3 py-1.5 text-[10px] font-semibold text-[#07865c]">
                {currentStatus}
              </span>
            </div>

            <div className="mt-4 space-y-2.5">

              <InfoRow
                icon="⌖"
                label="Location"
                value={locationText}
              />

              <InfoRow
                icon="▣"
                label="Category"
                value={category}
              />

              <InfoRow
                icon="▣"
                label="Submitted On"
                value={submittedOn}
              />

              <InfoRow
                icon="♙"
                label="Submitted By"
                value={problem.citizenId || "Citizen"}
              />

              <InfoRow
                icon="◎"
                label="Reference ID"
                value={problem.id}
              />

            </div>

            <div className="mt-5">
              <h2 className="text-sm font-bold text-[#082e5c]">
                Problem Description
              </h2>

              <p className="mt-2 max-w-[650px] text-xs leading-5 text-[#52616b] sm:text-[13px]">
                {problem.description || "No description provided."}
              </p>
            </div>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 rounded-md bg-[#fff5f5] px-4 py-3 text-xs font-semibold text-[#d33b43]">
            {error}
          </div>
        )}

        {/* Actions */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">

          <button
            type="button"
            onClick={handleVerify}
            disabled={actionLoading}
            className="h-10 rounded-md border border-[#a9cbbd] bg-white px-4 text-xs font-bold text-[#28735c] transition hover:bg-[#eff8f4] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {actionLoading ? "Processing..." : "Verify & Continue"}
          </button>

          <button
            type="button"
            onClick={handleRequestInfo}
            disabled={actionLoading}
            className="h-10 rounded-md border border-[#e2c49d] bg-white px-4 text-xs font-bold text-[#bd7b1d] transition hover:bg-[#fff9ef] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Request More Info
          </button>

          <button
            type="button"
            onClick={handleReject}
            disabled={actionLoading}
            className="h-10 rounded-md border border-[#e0b1b5] bg-white px-4 text-xs font-bold text-[#d33b43] transition hover:bg-[#fff5f5] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Reject Problem
          </button>

        </div>

        {message && (
          <div className="mt-4 rounded-md bg-[#f3f7ff] px-4 py-3 text-xs font-semibold text-[#1765b0]">
            {message}
          </div>
        )}

      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="grid grid-cols-[18px_105px_1fr] items-center gap-2 text-xs sm:grid-cols-[18px_120px_1fr]">
      <span className="text-[#52616b]">{icon}</span>

      <span className="font-semibold text-[#52616b]">
        {label}
      </span>

      <span className="font-medium text-[#344653]">
        {value}
      </span>
    </div>
  );
}

export default ProblemVerification;