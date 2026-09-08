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
  // Demo problems
  // ----------------------------------
  const demoProblems = [
    {
      id: "problem-001",
      title: "Water Supply Problem",
      category: "Water & Sanitation",
      subcategory: "Drainage / Water Logging",
      priority: "High",
      priorityLevel: "High Priority",
      location: {
        address: "Ward 12, Ranchi",
        area: "Ward 12",
        district: "Ranchi",
      },
      description:
        "Residents are facing water logging and irregular water supply in the area. The issue has been affecting local households for several days.",
      citizenId: "Citizen 1024",
      status: "under_review",
      submittedAt: "2026-09-08T11:00:00",
    },
    {
      id: "problem-002",
      title: "Damaged Road Near Main Market",
      category: "Road & Infrastructure",
      subcategory: "Road Damage",
      priority: "High",
      priorityLevel: "High Priority",
      location: {
        address: "Main Market, Ranchi",
        area: "Main Market",
        district: "Ranchi",
      },
      description:
        "A major section of the road near the main market is damaged and creating difficulties for pedestrians and vehicles.",
      citizenId: "Citizen 1045",
      status: "under_review",
      submittedAt: "2026-09-08T13:10:00",
    },
    {
      id: "problem-003",
      title: "Broken Street Light",
      category: "Public Safety",
      subcategory: "Non-functional Light",
      priority: "Medium",
      priorityLevel: "Medium Priority",
      location: {
        address: "Morabadi, Ranchi",
        area: "Morabadi",
        district: "Ranchi",
      },
      description:
        "Several street lights are not working properly, causing visibility and safety issues during the night.",
      citizenId: "Citizen 1088",
      status: "under_review",
      submittedAt: "2026-09-08T17:30:00",
    },
  ];

  // ----------------------------------
  // Load problem
  // ----------------------------------
  useEffect(() => {
    const loadProblem = () => {
      setLoading(true);
      setError("");

      if (!id) {
        setError("Problem ID is missing.");
        setLoading(false);
        return;
      }

      try {
        const storedProblems =
          JSON.parse(localStorage.getItem("reviewerProblems")) || [];

        const allProblems = [...demoProblems];

        storedProblems.forEach((storedProblem) => {
          const index = allProblems.findIndex(
            (item) => item.id === storedProblem.id
          );

          if (index !== -1) {
            allProblems[index] = {
              ...allProblems[index],
              ...storedProblem,
            };
          } else {
            allProblems.push(storedProblem);
          }
        });

        const selectedProblem = allProblems.find(
          (item) => item.id === id
        );

        if (!selectedProblem) {
          setError("Problem not found.");
          setLoading(false);
          return;
        }

        setProblem(selectedProblem);
      } catch (err) {
        console.error("Error loading problem:", err);
        setError("Failed to load problem.");
      } finally {
        setLoading(false);
      }
    };

    loadProblem();
  }, [id]);

  // ----------------------------------
  // Save problem
  // ----------------------------------
  const saveProblem = (updatedProblem) => {
    const storedProblems =
      JSON.parse(localStorage.getItem("reviewerProblems")) || [];

    const index = storedProblems.findIndex(
      (item) => item.id === updatedProblem.id
    );

    if (index !== -1) {
      storedProblems[index] = updatedProblem;
    } else {
      storedProblems.push(updatedProblem);
    }

    localStorage.setItem(
      "reviewerProblems",
      JSON.stringify(storedProblems)
    );
  };

  // ----------------------------------
  // Verify & Continue
  // ----------------------------------
  const handleVerify = async () => {
    if (!problem) return;

    setActionLoading(true);
    setError("");
    setMessage("");

    try {
      const reviewerEmail =
        localStorage.getItem("reviewerEmail") || "Reviewer";

      const updatedProblem = {
        ...problem,
        status: "under_review",
        reviewedBy: reviewerEmail,
        reviewStartedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      saveProblem(updatedProblem);
      setProblem(updatedProblem);

      // Keep same problem ID throughout verification flow
      navigate(
        `/reviewer/duplicate-check?problemId=${problem.id}`
      );
    } catch (err) {
      console.error("Start verification error:", err);
      setError("Failed to start verification.");
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
      const reviewerEmail =
        localStorage.getItem("reviewerEmail") || "Reviewer";

      const updatedProblem = {
        ...problem,
        status: "info_requested",
        reviewedBy: reviewerEmail,
        updatedAt: new Date().toISOString(),
      };

      saveProblem(updatedProblem);
      setProblem(updatedProblem);

      setMessage(
        "More information has been requested from the citizen."
      );
    } catch (err) {
      console.error("Request info error:", err);
      setError("Failed to request more information.");
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
      const reviewerEmail =
        localStorage.getItem("reviewerEmail") || "Reviewer";

      const updatedProblem = {
        ...problem,
        status: "rejected",
        reviewedBy: reviewerEmail,
        rejectedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      saveProblem(updatedProblem);
      setProblem(updatedProblem);

      setMessage("Problem has been rejected successfully.");
    } catch (err) {
      console.error("Reject problem error:", err);
      setError("Failed to reject problem.");
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
  // Problem data
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
    statusText[problem.status] ||
    problem.status ||
    "Submitted";

  return (
    <div className="w-full bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1100px]">

        {/* Main Content */}
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
                alt="Problem evidence"
                className="h-[65px] w-full rounded-md object-cover"
              />

              <img
                src="/images/water-logging-2.jpg"
                alt="Problem evidence"
                className="h-[65px] w-full rounded-md object-cover"
              />

              <div className="relative h-[65px] overflow-hidden rounded-md">
                <img
                  src="/images/water-logging-3.jpg"
                  alt="More problem evidence"
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

            {/* Description */}
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
            {actionLoading
              ? "Processing..."
              : "Verify & Continue"}
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

        {/* Success Message */}
        {message && (
          <div className="mt-4 rounded-md bg-[#f3f7ff] px-4 py-3 text-xs font-semibold text-[#1765b0]">
            {message}
          </div>
        )}

      </div>
    </div>
  );
}

// ----------------------------------
// Info Row
// ----------------------------------
function InfoRow({ icon, label, value }) {
  return (
    <div className="grid grid-cols-[18px_105px_1fr] items-center gap-2 text-xs sm:grid-cols-[18px_120px_1fr]">

      <span className="text-[#52616b]">
        {icon}
      </span>

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