import React from "react";
import { Link } from "react-router-dom";

const duplicates = [
  {
    title: "Water Logging in Street 12",
    location: "Street 12, Harmu",
    date: "12 May 2024",
    submittedBy: "Rohit Verma",
    similarity: "92%",
  },
  {
    title: "Water Logging near Park",
    location: "Street 12, Harmu",
    date: "10 May 2024",
    submittedBy: "Suman Oraon",
    similarity: "89%",
  },
  {
    title: "Rain Water Stagnation in Street 12",
    location: "Street 12, Harmu",
    date: "09 May 2024",
    submittedBy: "Vikas Kumar",
    similarity: "86%",
  },
];

function DuplicateCheck() {
  return (
    <div className="w-full bg-white px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1050px]">

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-sm font-bold text-[#082e5c] sm:text-base">
            Potential Duplicates Found (3)
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

            {duplicates.map((item) => (
              <div
                key={item.title}
                className="grid grid-cols-[1.6fr_1fr_1fr_1fr_0.8fr] items-center border-t border-[#edf0f2] px-4 py-3"
              >
                <span className="text-[10px] font-semibold text-[#082e5c]">
                  {item.title}
                </span>

                <span className="text-[10px] text-[#52616b]">
                  {item.location}
                </span>

                <span className="text-[10px] text-[#52616b]">
                  {item.date}
                </span>

                <span className="text-[10px] text-[#52616b]">
                  {item.submittedBy}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-[#344653]">
                    {item.similarity}
                  </span>

                  <span className="rounded-md bg-[#ffe9e9] px-3 py-1 text-[9px] font-semibold text-[#d43b43]">
                    High
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>

        <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <h2 className="text-sm font-bold text-[#082e5c]">
            Is this a duplicate of an existing problem?
          </h2>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

            <button
              type="button"
              className="
                h-11 rounded-md border border-[#cbd5da]
                px-6 text-xs font-bold text-[#082e5c]
                transition hover:bg-[#f5f8f9]
                sm:min-w-[235px]
              "
            >
              Yes, Mark as Duplicate
            </button>

            <Link
              to="/reviewer/categorize"
              className="
                flex h-11 items-center justify-center
                rounded-md bg-[#07865c]
                px-8 text-xs font-bold text-white
                transition hover:bg-[#06754f]
                sm:min-w-[220px]
              "
            >
              No, Continue
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}

export default DuplicateCheck;