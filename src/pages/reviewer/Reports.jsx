import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Download, FileText } from "lucide-react";

const reports = [
  {
    name: "Monthly Verification Report",
    description: "Summary of problems reviewed and verified this month.",
    date: "31 May 2024",
    type: "Verification",
  },
  {
    name: "University Assignment Report",
    description: "Problems assigned to universities for solution development.",
    date: "30 May 2024",
    type: "Assignment",
  },
  {
    name: "Duplicate Problems Report",
    description: "Problems identified as duplicates during review.",
    date: "30 May 2024",
    type: "Duplicate",
  },
  {
    name: "Problem Category Report",
    description: "Category-wise distribution of submitted problems.",
    date: "29 May 2024",
    type: "Category",
  },
];

function Reports() {
  const [message, setMessage] = useState("");

  const handleDownload = (reportName) => {
    setMessage(`${reportName} is ready for download.`);
  };

  return (
    <div className="min-h-screen w-full bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#092f5d]">
            Reports
          </h1>

          <p className="mt-1 text-sm text-[#687680]">
            Generate and access reviewer activity reports.
          </p>
        </div>

        <div className="space-y-3">
          {reports.map((report) => (
            <div
              key={report.name}
              className="flex flex-col gap-4 rounded-lg border border-[#e1e7ea] bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-[#eef7f3] text-[#07865c]">
                  <FileText size={19} />
                </div>

                <div>
                  <h2 className="text-sm font-bold text-[#092f5d]">
                    {report.name}
                  </h2>

                  <p className="mt-1 text-xs leading-5 text-[#687680]">
                    {report.description}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-3 text-[10px] text-[#7a858c]">
                    <span>{report.type}</span>
                    <span>•</span>
                    <span>{report.date}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleDownload(report.name)}
                className="flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#07865c] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#06754f]"
              >
                <Download size={15} />
                Download
              </button>
            </div>
          ))}
        </div>

        {message && (
          <div className="mt-4 rounded-md border border-[#b9dec9] bg-[#eefaf4] px-4 py-3 text-xs font-medium text-[#07865c]">
            {message}
          </div>
        )}

        <div className="mt-6">
          <Link
            to="/reviewer/dashboard"
            className="inline-flex rounded-md border border-[#d4dde2] px-5 py-2.5 text-sm font-semibold text-[#344653] transition hover:border-[#07865c] hover:text-[#07865c]"
          >
            ← Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Reports;