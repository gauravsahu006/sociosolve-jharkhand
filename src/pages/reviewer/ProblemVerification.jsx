import React from "react";
import { Link } from "react-router-dom";

const problem = {
  title: "Water Logging in Street 12",
  location: "Street 12, Harmu, Ranchi",
  category: "Water & Sanitation",
  submittedOn: "16 May 2024, 11:20 AM",
  submittedBy: "Anjali Kumari (Citizen)",
  referenceId: "PROB-2024-05-000123",
  description:
    "During heavy rainfall, water gets accumulated in the street near the park. People face difficulty in commuting and vehicles get damaged.",
};

function ProblemVerification() {
  return (
    <div className="w-full bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1100px]">

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[270px_1fr]">

          <div>
            <div className="overflow-hidden rounded-md">
              <img
                src="/images/water-logging.jpg"
                alt="Water logging problem"
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

          <div className="min-w-0">

            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <h1 className="text-xl font-bold text-[#082e5c] sm:text-[21px]">
                {problem.title}
              </h1>

              <span className="w-fit rounded-md bg-[#e8f7ef] px-3 py-1.5 text-[10px] font-semibold text-[#07865c]">
                Submitted
              </span>
            </div>

            <div className="mt-4 space-y-2.5">

              <InfoRow
                icon="⌖"
                label="Location"
                value={problem.location}
              />

              <InfoRow
                icon="▣"
                label="Category"
                value={problem.category}
              />

              <InfoRow
                icon="▣"
                label="Submitted On"
                value={problem.submittedOn}
              />

              <InfoRow
                icon="♙"
                label="Submitted By"
                value={problem.submittedBy}
              />

              <InfoRow
                icon="◎"
                label="Reference ID"
                value={problem.referenceId}
              />

            </div>

            <div className="mt-5">
              <h2 className="text-sm font-bold text-[#082e5c]">
                Problem Description
              </h2>

              <p className="mt-2 max-w-[650px] text-xs leading-5 text-[#52616b] sm:text-[13px]">
                {problem.description}
              </p>
            </div>

          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">

          <button
            type="button"
            className="
              h-10 rounded-md border border-[#a9cbbd]
              bg-white px-4
              text-xs font-bold text-[#28735c]
              transition hover:bg-[#eff8f4]
            "
          >
            Verify & Continue
          </button>

          <button
            type="button"
            className="
              h-10 rounded-md border border-[#e2c49d]
              bg-white px-4
              text-xs font-bold text-[#bd7b1d]
              transition hover:bg-[#fff9ef]
            "
          >
            Request More Info
          </button>

          <button
            type="button"
            className="
              h-10 rounded-md border border-[#e0b1b5]
              bg-white px-4
              text-xs font-bold text-[#d33b43]
              transition hover:bg-[#fff5f5]
            "
          >
            Reject Problem
          </button>

        </div>

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