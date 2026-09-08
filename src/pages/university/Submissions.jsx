import React, { useMemo, useState } from "react";
import {
  Search,
  FileText,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Eye,
  Download,
  CalendarDays,
  Users,
  FolderKanban,
  X,
} from "lucide-react";

const Submissions = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [selectedSubmission, setSelectedSubmission] =
    useState(null);

  // submission data
  const submissions = [
    {
      id: 1,
      project: "Smart Waste Management",
      team: "Team Innovators",
      type: "Final Solution",
      submittedOn: "28 Sep 2023",
      deadline: "30 Sep 2023",
      status: "Submitted",
      version: "v1.0",
      score: "Pending Review",
      description:
        "An intelligent waste management solution using smart bins, sensors and a centralized monitoring dashboard.",
      files: [
        "SmartWaste_FinalReport.pdf",
        "SmartWaste_SourceCode.zip",
        "SmartWaste_Presentation.pptx",
      ],
    },
    {
      id: 2,
      project: "Water Quality Monitoring",
      team: "Eco Warriors",
      type: "Prototype Submission",
      submittedOn: "18 Sep 2023",
      deadline: "05 Oct 2023",
      status: "Under Review",
      version: "v0.8",
      score: "82 / 100",
      description:
        "IoT based water quality monitoring system that measures water parameters and sends alerts to users.",
      files: [
        "WaterQuality_Report.pdf",
        "IoT_Prototype.zip",
        "Testing_Data.xlsx",
      ],
    },
    {
      id: 3,
      project: "Rural Healthcare Access",
      team: "Rural Connect",
      type: "Progress Report",
      submittedOn: "15 Sep 2023",
      deadline: "20 Sep 2023",
      status: "Needs Revision",
      version: "v0.5",
      score: "64 / 100",
      description:
        "A digital platform designed to improve healthcare accessibility for people in rural areas.",
      files: [
        "RuralHealthcare_Report.pdf",
        "Research_Data.xlsx",
      ],
    },
    {
      id: 4,
      project: "Solar Energy Optimization",
      team: "Green Tech",
      type: "Final Solution",
      submittedOn: "10 Sep 2023",
      deadline: "15 Sep 2023",
      status: "Approved",
      version: "v1.0",
      score: "91 / 100",
      description:
        "A solution for optimizing solar panel performance and energy generation using intelligent monitoring.",
      files: [
        "SolarEnergy_FinalReport.pdf",
        "SolarEnergy_SourceCode.zip",
        "SolarEnergy_Presentation.pptx",
      ],
    },
    {
      id: 5,
      project: "Traffic Management System",
      team: "Smart City Labs",
      type: "Prototype Submission",
      submittedOn: "05 Sep 2023",
      deadline: "25 Sep 2023",
      status: "Submitted",
      version: "v0.6",
      score: "Pending Review",
      description:
        "A smart traffic management platform for monitoring traffic flow and optimizing signal timing.",
      files: [
        "TrafficManagement_Report.pdf",
        "Prototype_Source.zip",
      ],
    },
  ];

  // filter submissions
  const filteredSubmissions = useMemo(() => {
    return submissions.filter((submission) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        submission.project
          .toLowerCase()
          .includes(searchText) ||
        submission.team
          .toLowerCase()
          .includes(searchText) ||
        submission.type
          .toLowerCase()
          .includes(searchText);

      const matchesStatus =
        status === "All Status" ||
        submission.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  // submission statistics
  const totalSubmissions = submissions.length;

  const approved = submissions.filter(
    (item) => item.status === "Approved"
  ).length;

  const underReview = submissions.filter(
    (item) => item.status === "Under Review"
  ).length;

  const needsRevision = submissions.filter(
    (item) => item.status === "Needs Revision"
  ).length;

  // status styling
  const getStatusStyle = (submissionStatus) => {
    if (submissionStatus === "Approved") {
      return "bg-emerald-50 text-emerald-700";
    }

    if (submissionStatus === "Under Review") {
      return "bg-blue-50 text-blue-700";
    }

    if (submissionStatus === "Needs Revision") {
      return "bg-amber-50 text-amber-700";
    }

    return "bg-green-50 text-[#159447]";
  };

  // status icon
  const getStatusIcon = (submissionStatus) => {
    if (submissionStatus === "Approved") {
      return <CheckCircle2 size={16} />;
    }

    if (submissionStatus === "Under Review") {
      return <Clock3 size={16} />;
    }

    if (submissionStatus === "Needs Revision") {
      return <AlertCircle size={16} />;
    }

    return <FileText size={16} />;
  };

  return (
    <div className="space-y-6">

      {/* page header */}
      <div>
        <p className="text-sm font-medium text-[#159447]">
          Project Management
        </p>

        <h1 className="mt-1 text-2xl font-bold text-[#092752] sm:text-3xl">
          Submissions
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Review project submissions, reports and final solutions.
        </p>
      </div>

      {/* statistics */}
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-slate-500">
                Total Submissions
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#092752]">
                {totalSubmissions}
              </h3>
            </div>

            <div className="rounded-xl bg-green-50 p-3 text-[#159447]">
              <FileText size={22} />
            </div>

          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-slate-500">
                Approved
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#092752]">
                {approved}
              </h3>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
              <CheckCircle2 size={22} />
            </div>

          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-slate-500">
                Under Review
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#092752]">
                {underReview}
              </h3>
            </div>

            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <Clock3 size={22} />
            </div>

          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-slate-500">
                Needs Revision
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#092752]">
                {needsRevision}
              </h3>
            </div>

            <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
              <AlertCircle size={22} />
            </div>

          </div>
        </div>

      </div>

      {/* search and filter */}
      <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
        <div className="grid gap-3 lg:grid-cols-[1fr_200px]">

          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search project, team or submission..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#159447] focus:bg-white focus:ring-2 focus:ring-green-100"
            />
          </div>

          <select
            value={status}
            onChange={(event) =>
              setStatus(event.target.value)
            }
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-[#159447] focus:ring-2 focus:ring-green-100"
          >
            <option>All Status</option>
            <option>Submitted</option>
            <option>Under Review</option>
            <option>Needs Revision</option>
            <option>Approved</option>
          </select>

        </div>
      </div>

      {/* submissions */}
      <div className="space-y-4">

        {filteredSubmissions.map((submission) => (
          <div
            key={submission.id}
            className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md sm:p-6"
          >

            {/* top section */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">

              <div className="flex min-w-0 gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-[#159447]">
                  <FileText size={23} />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">

                    <h2 className="font-bold text-[#092752]">
                      {submission.project}
                    </h2>

                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusStyle(
                        submission.status
                      )}`}
                    >
                      {getStatusIcon(submission.status)}
                      {submission.status}
                    </span>

                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    {submission.type}
                  </p>
                </div>

              </div>

              <span className="w-fit rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                {submission.version}
              </span>

            </div>

            {/* details */}
            <div className="mt-5 grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-2 lg:grid-cols-4">

              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-slate-50 p-2 text-slate-500">
                  <Users size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Team
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-slate-700">
                    {submission.team}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-slate-50 p-2 text-slate-500">
                  <CalendarDays size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Submitted
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-slate-700">
                    {submission.submittedOn}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-slate-50 p-2 text-slate-500">
                  <CalendarDays size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Deadline
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-slate-700">
                    {submission.deadline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-slate-50 p-2 text-slate-500">
                  <CheckCircle2 size={17} />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Score
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-slate-700">
                    {submission.score}
                  </p>
                </div>
              </div>

            </div>

            {/* actions */}
            <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <FolderKanban size={15} />
                {submission.files.length} files attached
              </div>

              <div className="flex flex-wrap gap-2">

                <button
                  type="button"
                  onClick={() =>
                    setSelectedSubmission(submission)
                  }
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  <Eye size={15} />
                  View Details
                </button>

                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#159447] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#117C3B]"
                >
                  <Download size={15} />
                  Download
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* empty state */}
      {filteredSubmissions.length === 0 && (
        <div className="rounded-2xl bg-white py-14 text-center shadow-sm ring-1 ring-slate-100">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-[#159447]">
            <FileText size={25} />
          </div>

          <h3 className="mt-4 font-semibold text-[#092752]">
            No submissions found
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Try changing your search or filter.
          </p>

        </div>
      )}

      {/* submission details modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4">

          <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl">

            {/* modal header */}
            <div className="flex items-start justify-between border-b border-slate-100 p-5">

              <div>
                <p className="text-xs font-medium text-[#159447]">
                  Submission Details
                </p>

                <h2 className="mt-1 text-xl font-bold text-[#092752]">
                  {selectedSubmission.project}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedSubmission(null)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
              >
                <X size={20} />
              </button>

            </div>

            {/* modal content */}
            <div className="space-y-5 p-5">

              <div className="flex flex-wrap gap-2">

                <span
                  className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold ${getStatusStyle(
                    selectedSubmission.status
                  )}`}
                >
                  {getStatusIcon(selectedSubmission.status)}
                  {selectedSubmission.status}
                </span>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                  {selectedSubmission.version}
                </span>

              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#092752]">
                  Project Description
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {selectedSubmission.description}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    Team
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {selectedSubmission.team}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    Score
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-700">
                    {selectedSubmission.score}
                  </p>
                </div>

              </div>

              <div>
                <h3 className="mb-3 text-sm font-semibold text-[#092752]">
                  Attached Files
                </h3>

                <div className="space-y-2">

                  {selectedSubmission.files.map((file) => (
                    <div
                      key={file}
                      className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3"
                    >

                      <div className="flex min-w-0 items-center gap-3">

                        <FileText
                          size={17}
                          className="shrink-0 text-[#159447]"
                        />

                        <span className="truncate text-sm text-slate-700">
                          {file}
                        </span>

                      </div>

                      <button
                        type="button"
                        className="ml-3 shrink-0 rounded-lg p-2 text-slate-400 hover:bg-white hover:text-[#159447]"
                      >
                        <Download size={16} />
                      </button>

                    </div>
                  ))}

                </div>
              </div>

            </div>

            {/* modal footer */}
            <div className="flex justify-end border-t border-slate-100 p-5">

              <button
                type="button"
                onClick={() => setSelectedSubmission(null)}
                className="rounded-xl bg-[#159447] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#117C3B]"
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Submissions;