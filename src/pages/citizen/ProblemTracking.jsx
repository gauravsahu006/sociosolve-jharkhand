import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  FileText,
  MapPin,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const steps = [
  {
    title: "Submitted",
    description: "Your problem has been successfully submitted.",
    icon: FileText,
  },
  {
    title: "Under Verification",
    description: "The submitted problem is being reviewed.",
    icon: ShieldCheck,
  },
  {
    title: "Verified",
    description: "The problem has been verified.",
    icon: CheckCircle2,
  },
  {
    title: "Assigned",
    description: "The problem has been assigned for resolution.",
    icon: UserRound,
  },
  {
    title: "In Progress",
    description: "Work on the problem is currently in progress.",
    icon: Clock3,
  },
  {
    title: "Resolved",
    description: "The problem has been resolved.",
    icon: CheckCircle2,
  },
];

function formatDate(date) {
  if (!date) return "Not available";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function ProblemTracking() {
  const { id } = useParams();

  const [problem, setProblem] = useState(null);

  useEffect(() => {
    const savedProblem = sessionStorage.getItem(
      "socioSolveSubmittedProblem"
    );

    if (savedProblem) {
      const parsedProblem = JSON.parse(savedProblem);

      if (parsedProblem.id === id) {
        setProblem(parsedProblem);
      }
    }
  }, [id]);

  if (!problem) {
    return (
      <div className="min-h-screen bg-[#f5f8f7] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
            <FileText className="text-red-500" size={28} />
          </div>

          <h1 className="text-xl font-bold text-gray-900">
            Problem Not Found
          </h1>

          <p className="text-gray-500 mt-2 text-sm">
            We could not find the problem you are looking for.
          </p>

          <Link
            to="/citizen/problems"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg bg-[#0f766e] text-white text-sm font-medium hover:bg-[#0b625c]"
          >
            <ArrowLeft size={17} />
            Back to My Problems
          </Link>
        </div>
      </div>
    );
  }

  const currentStep = steps.findIndex(
    (step) => step.title === problem.status
  );

  const activeStep = currentStep >= 0 ? currentStep : 0;

  return (
    <div className="min-h-screen bg-[#f5f8f7] py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        <Link
          to="/citizen/problems"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#0f766e] mb-5"
        >
          <ArrowLeft size={18} />
          Back to My Problems
        </Link>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

          <div className="px-6 py-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

              <div>
                <p className="text-xs font-semibold text-[#0f766e] uppercase tracking-wide">
                  Problem Tracking
                </p>

                <h1 className="text-2xl font-bold text-gray-900 mt-1">
                  {problem.title}
                </h1>

                <p className="text-sm text-gray-500 mt-2">
                  Problem ID:{" "}
                  <span className="font-medium text-gray-700">
                    {problem.id}
                  </span>
                </p>
              </div>

              <span className="w-fit px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold">
                {problem.status}
              </span>

            </div>
          </div>

          <div className="p-6">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Category</p>
                <p className="text-sm font-semibold text-gray-900 mt-1">
                  {problem.category || "Not specified"}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Submitted On</p>
                <p className="text-sm font-semibold text-gray-900 mt-1">
                  {formatDate(problem.submittedAt)}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-sm font-semibold text-gray-900 mt-1 flex items-start gap-1">
                  <MapPin size={15} className="mt-0.5 text-[#0f766e]" />
                  {problem.location?.area || "Not specified"}
                </p>
              </div>

            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-900">
                Problem Status
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Track the progress of your reported problem.
              </p>
            </div>

            <div className="relative">

              <div className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-gray-200" />

              <div
                className="absolute left-[19px] top-5 w-0.5 bg-[#0f766e] transition-all"
                style={{
                  height:
                    activeStep === 0
                      ? "0%"
                      : `${(activeStep / (steps.length - 1)) * 100}%`,
                }}
              />

              <div className="space-y-7">

                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const completed = index <= activeStep;
                  const current = index === activeStep;

                  return (
                    <div
                      key={step.title}
                      className="relative flex gap-4"
                    >
                      <div
                        className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center border-2 shrink-0 ${
                          completed
                            ? "bg-[#0f766e] border-[#0f766e] text-white"
                            : "bg-white border-gray-200 text-gray-400"
                        } ${
                          current
                            ? "ring-4 ring-[#0f766e]/10"
                            : ""
                        }`}
                      >
                        <Icon size={18} />
                      </div>

                      <div className="pt-1">
                        <h3
                          className={`text-sm font-semibold ${
                            completed
                              ? "text-gray-900"
                              : "text-gray-400"
                          }`}
                        >
                          {step.title}
                        </h3>

                        <p
                          className={`text-sm mt-1 ${
                            completed
                              ? "text-gray-500"
                              : "text-gray-400"
                          }`}
                        >
                          {current
                            ? problem.status === "Submitted"
                              ? "Your problem has been received and is waiting for verification."
                              : step.description
                            : step.description}
                        </p>

                        {current && (
                          <span className="inline-block mt-2 text-xs font-medium text-[#0f766e]">
                            Current Status
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}

              </div>
            </div>

            <div className="mt-10 rounded-xl bg-[#f0fdfa] border border-[#ccfbf1] p-5">
              <h3 className="font-semibold text-gray-900">
                What happens next?
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                Our team will verify your submitted problem. Once verified,
                it will be assigned to the appropriate team or institution
                for further action.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}