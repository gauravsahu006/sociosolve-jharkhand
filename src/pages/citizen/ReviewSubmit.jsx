import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ReviewSubmit() {
    const navigate = useNavigate();

    const [problem, setProblem] = useState(null);
    const [error, setError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    // ----------------------------------
    // Load saved problem
    // ----------------------------------
    useEffect(() => {
        const savedData = sessionStorage.getItem("socioSolveProblem");

        if (!savedData) {
            navigate("/citizen/report");
            return;
        }

        try {
            setProblem(JSON.parse(savedData));
        } catch {
            navigate("/citizen/report");
        }
    }, [navigate]);

    // ----------------------------------
    // Back
    // ----------------------------------
    const handleBack = () => {
        navigate("/citizen/report/evidence");
    };

    // ----------------------------------
    // Submit Problem
    // ----------------------------------
    const handleSubmit = () => {
        if (!problem) {
            setError("Problem details could not be loaded.");
            return;
        }

        setError("");
        setSubmitting(true);

        try {
            // ----------------------------------
            // Create unique problem ID
            // ----------------------------------
            const problemId = `PROB-${Date.now()}`;

            // ----------------------------------
            // Get citizen information
            // ----------------------------------
            const citizenEmail =
                localStorage.getItem("citizenEmail") ||
                localStorage.getItem("citizenName") ||
                "Citizen";

            // ----------------------------------
            // Prepare submitted problem
            // ----------------------------------
            const submittedProblem = {
                id: problemId,

                citizenId: citizenEmail,

                title: problem.title || "",
                description: problem.description || "",
                category: problem.category || "",

                date: problem.date || "",
                peopleAffected: problem.peopleAffected || "",

                location: problem.location || {},

                evidence: (problem.evidence || []).map((file) => ({
                    name: file.name || "",
                    size: file.size || 0,
                    type: file.type || "",
                })),

                status: "submitted",

                submittedAt: new Date().toISOString(),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };

            // ----------------------------------
            // Get existing reviewer problems
            // ----------------------------------
            const existingProblems =
                JSON.parse(
                    localStorage.getItem("reviewerProblems") || "[]"
                );

            // ----------------------------------
            // Add new problem
            // ----------------------------------
            const updatedProblems = [
                ...existingProblems,
                submittedProblem,
            ];

            // ----------------------------------
            // Save for Reviewer Portal
            // ----------------------------------
            localStorage.setItem(
                "reviewerProblems",
                JSON.stringify(updatedProblems)
            );

            window.dispatchEvent(
                new Event("socioSolveProblemsUpdated")
            );

            // ----------------------------------
            // Save for Citizen Success Page
            // ----------------------------------
            sessionStorage.setItem(
                "socioSolveSubmittedProblem",
                JSON.stringify(submittedProblem)
            );

            // ----------------------------------
            // Save selected problem
            // ----------------------------------
            sessionStorage.setItem(
                "socioSolveSelectedProblemId",
                problemId
            );

            // ----------------------------------
            // Remove temporary form data
            // ----------------------------------
            sessionStorage.removeItem("socioSolveProblem");

            // ----------------------------------
            // Small delay for realistic submission
            // ----------------------------------
            setTimeout(() => {
                navigate("/citizen/report/success", {
                    state: {
                        problemId,
                    },
                });
            }, 500);
        } catch (err) {
            console.error("Problem submission error:", err);

            setError(
                "Failed to submit problem. Please try again."
            );

            setSubmitting(false);
        }
    };

    // ----------------------------------
    // Loading
    // ----------------------------------
    if (!problem) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-white">
                <p className="text-[13px] text-[#667085]">
                    Loading problem details...
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <div className="mx-auto flex min-h-screen w-full max-w-[1100px] flex-col">

                <div className="flex flex-1 flex-col md:flex-row">

                    {/* Sidebar */}
                    <aside className="w-full px-6 pt-8 md:w-[290px] md:px-7 md:pt-12">
                        <div className="rounded-xl bg-white px-5 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

                            <Step
                                number="1"
                                title="Problem Details"
                            />

                            <Step
                                number="2"
                                title="Location"
                            />

                            <Step
                                number="3"
                                title="Upload Evidence"
                            />

                            <Step
                                number="4"
                                title="Review & Submit"
                                active
                            />

                        </div>
                    </aside>

                    {/* Main */}
                    <main className="flex-1 px-6 pb-8 pt-8 sm:px-8 md:px-10 md:pt-8">
                        <div className="mx-auto max-w-[680px]">

                            <h1 className="text-[23px] font-bold text-[#082e5c] sm:text-[25px]">
                                Review & Submit
                            </h1>

                            <p className="mt-2 text-[13px] text-[#667085]">
                                Please review your information before submitting the problem.
                            </p>

                            {/* Error */}
                            {error && (
                                <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[13px] font-medium text-red-600">
                                    {error}
                                </div>
                            )}

                            {/* Review Cards */}
                            <div className="mt-6 space-y-4">

                                {/* Problem Details */}
                                <ReviewCard title="Problem Details">

                                    <InfoRow
                                        label="Title"
                                        value={problem.title}
                                    />

                                    <InfoRow
                                        label="Category"
                                        value={formatCategory(problem.category)}
                                    />

                                    <InfoRow
                                        label="Description"
                                        value={problem.description}
                                    />

                                    {problem.date && (
                                        <InfoRow
                                            label="Date"
                                            value={problem.date}
                                        />
                                    )}

                                    {problem.peopleAffected && (
                                        <InfoRow
                                            label="People Affected"
                                            value={problem.peopleAffected}
                                        />
                                    )}

                                </ReviewCard>

                                {/* Location */}
                                <ReviewCard title="Location">

                                    <InfoRow
                                        label="Address"
                                        value={problem.location?.address}
                                    />

                                    <InfoRow
                                        label="Area / Landmark"
                                        value={problem.location?.area}
                                    />

                                    <InfoRow
                                        label="District"
                                        value={formatDistrict(
                                            problem.location?.district
                                        )}
                                    />

                                    {problem.location?.pinCode && (
                                        <InfoRow
                                            label="PIN Code"
                                            value={problem.location.pinCode}
                                        />
                                    )}

                                </ReviewCard>

                                {/* Evidence */}
                                <ReviewCard title="Evidence">

                                    {problem.evidence?.length > 0 ? (
                                        <div className="space-y-2">

                                            {problem.evidence.map(
                                                (file, index) => (
                                                    <div
                                                        key={`${file.name}-${index}`}
                                                        className="flex items-center gap-3 rounded-md bg-[#F8FAFB] px-3 py-2"
                                                    >
                                                        <span className="text-[16px]">
                                                            📷
                                                        </span>

                                                        <div className="min-w-0">
                                                            <p className="truncate text-[12px] font-semibold text-[#243B53]">
                                                                {file.name}
                                                            </p>

                                                            <p className="text-[10px] text-[#98A2B3]">
                                                                {(
                                                                    file.size /
                                                                    1024 /
                                                                    1024
                                                                ).toFixed(2)}{" "}
                                                                MB
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            )}

                                        </div>
                                    ) : (
                                        <p className="text-[12px] text-[#667085]">
                                            No evidence uploaded.
                                        </p>
                                    )}

                                </ReviewCard>

                            </div>

                            {/* Ready */}
                            <div className="mt-5 rounded-lg border border-[#DDE5EC] bg-[#F8FAFB] px-4 py-4">

                                <p className="text-[12px] font-bold text-[#243B53]">
                                    Ready to submit?
                                </p>

                                <p className="mt-1 text-[11px] leading-5 text-[#667085]">
                                    Once submitted, your problem will be sent for
                                    verification and you will be able to track its
                                    progress.
                                </p>

                            </div>

                            {/* Buttons */}
                            <div className="flex items-center justify-between gap-3 pt-7">

                                <button
                                    type="button"
                                    onClick={handleBack}
                                    disabled={submitting}
                                    className="rounded-md border border-[#D5DEE7] bg-white px-5 py-3 text-[12px] font-bold text-[#243B53] transition hover:bg-[#F8FAFB] disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    ← Back
                                </button>

                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={submitting}
                                    className="rounded-md bg-[#15915D] px-6 py-3 text-[12px] font-bold text-white shadow-sm transition hover:bg-[#107849] disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {submitting
                                        ? "Submitting..."
                                        : "Submit Problem ✓"}
                                </button>

                            </div>

                        </div>
                    </main>
                </div>

                {/* Bottom Decoration */}
                <div className="relative h-[95px] overflow-hidden bg-gradient-to-b from-white to-[#edf7f1] sm:h-[115px]">

                    <div className="absolute bottom-[-25px] left-[8%] h-[70px] w-[180px] rounded-t-full border-[8px] border-[#d7ebe1] opacity-70" />

                    <div className="absolute bottom-[-35px] left-[28%] h-[90px] w-[220px] rounded-t-full border-[9px] border-[#dcefe5] opacity-60" />

                    <div className="absolute bottom-[-30px] right-[18%] h-[80px] w-[200px] rounded-t-full border-[8px] border-[#d7ebe1] opacity-60" />

                    <div className="absolute bottom-[-45px] right-[2%] h-[100px] w-[250px] rounded-t-full border-[10px] border-[#e1f2e9] opacity-60" />

                </div>

            </div>
        </div>
    );
}

// ----------------------------------
// Review Card
// ----------------------------------
function ReviewCard({ title, children }) {
    return (
        <div className="rounded-xl border border-[#DDE5EC] bg-white p-5">

            <h2 className="mb-4 text-[13px] font-bold text-[#082e5c]">
                {title}
            </h2>

            <div className="space-y-3">
                {children}
            </div>

        </div>
    );
}

// ----------------------------------
// Info Row
// ----------------------------------
function InfoRow({ label, value }) {
    return (
        <div className="grid grid-cols-[120px_1fr] gap-3 border-b border-[#EEF2F5] pb-3 last:border-0 last:pb-0">

            <span className="text-[11px] font-semibold text-[#98A2B3]">
                {label}
            </span>

            <span className="break-words text-[12px] font-medium leading-5 text-[#243B53]">
                {value || "Not provided"}
            </span>

        </div>
    );
}

// ----------------------------------
// Step
// ----------------------------------
function Step({ number, title, active }) {
    return (
        <div className="flex items-center gap-3 py-3">

            <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[12px] font-bold ${active
                        ? "bg-[#15915D] text-white"
                        : "bg-[#EEF2F5] text-[#667085]"
                    }`}
            >
                {number}
            </div>

            <span
                className={`text-[12px] font-semibold ${active
                        ? "text-[#082e5c]"
                        : "text-[#98A2B3]"
                    }`}
            >
                {title}
            </span>

        </div>
    );
}

// ----------------------------------
// Category
// ----------------------------------
function formatCategory(category) {
    const categories = {
        roads: "Roads & Infrastructure",
        water: "Water & Sanitation",
        electricity: "Electricity",
        waste: "Waste Management",
        "street-light": "Street Light",
        other: "Other",
    };

    return categories[category] || "Not provided";
}

// ----------------------------------
// District
// ----------------------------------
function formatDistrict(district) {
    const districts = {
        ranchi: "Ranchi",
        jamshedpur: "East Singhbhum",
        dhanbad: "Dhanbad",
        bokaro: "Bokaro",
        hazaribagh: "Hazaribagh",
        deoghar: "Deoghar",
        dumka: "Dumka",
        giridih: "Giridih",
        palamu: "Palamu",
        ramgarh: "Ramgarh",
    };

    return districts[district] || "Not provided";
}

export default ReviewSubmit;