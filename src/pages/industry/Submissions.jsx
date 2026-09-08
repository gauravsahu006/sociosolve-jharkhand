import React, { useMemo, useState } from "react";
import {
  Search,
  Filter,
  FileText,
  Eye,
  X,
  Calendar,
  Users,
  Star,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Download,
  MessageSquare,
} from "lucide-react";

const submissionsData = [
  {
    id: 1,
    project: "Smart Waste Management",
    challenge: "Smart Waste Management System",
    team: "BIT Mesra Innovation Team",
    version: "v1.2",
    submittedOn: "05 Sep 2026",
    status: "Under Review",
    score: null,
    reviewer: "Dr. Priya Singh",
    feedback:
      "The prototype is progressing well. Please improve the sensor validation report and add final performance metrics.",
    documents: [
      "Project Report.pdf",
      "Prototype Documentation.pdf",
      "Testing Results.pdf",
    ],
    timeline: [
      {
        title: "Submission Created",
        date: "03 Sep 2026",
        status: "done",
      },
      {
        title: "Final Submission",
        date: "05 Sep 2026",
        status: "done",
      },
      {
        title: "Under Review",
        date: "06 Sep 2026",
        status: "current",
      },
      {
        title: "Final Evaluation",
        date: "Pending",
        status: "pending",
      },
    ],
  },
  {
    id: 2,
    project: "Energy Efficiency Dashboard",
    challenge: "Renewable Energy Monitoring",
    team: "XLRI Student Team",
    version: "v2.0",
    submittedOn: "20 Aug 2026",
    status: "Approved",
    score: 92,
    reviewer: "Dr. Neha Gupta",
    feedback:
      "Excellent implementation with strong analytics and an effective monitoring dashboard.",
    documents: [
      "Final Project Report.pdf",
      "Dashboard Screenshots.pdf",
      "Evaluation Report.pdf",
    ],
    timeline: [
      {
        title: "Submission Created",
        date: "18 Aug 2026",
        status: "done",
      },
      {
        title: "Final Submission",
        date: "20 Aug 2026",
        status: "done",
      },
      {
        title: "Technical Review",
        date: "22 Aug 2026",
        status: "done",
      },
      {
        title: "Approved",
        date: "24 Aug 2026",
        status: "done",
      },
    ],
  },
  {
    id: 3,
    project: "Rural Healthcare Connect",
    challenge: "Rural Healthcare Access Platform",
    team: "BIT Sindri HealthTech Team",
    version: "v1.5",
    submittedOn: "25 Aug 2026",
    status: "Approved",
    score: 88,
    reviewer: "Dr. Rakesh Kumar",
    feedback:
      "Strong solution with good usability. The healthcare workflow and accessibility features are well implemented.",
    documents: [
      "Final Solution Report.pdf",
      "Healthcare Workflow.pdf",
      "Testing Report.pdf",
    ],
    timeline: [
      {
        title: "Submission Created",
        date: "22 Aug 2026",
        status: "done",
      },
      {
        title: "Final Submission",
        date: "25 Aug 2026",
        status: "done",
      },
      {
        title: "Technical Review",
        date: "27 Aug 2026",
        status: "done",
      },
      {
        title: "Approved",
        date: "29 Aug 2026",
        status: "done",
      },
    ],
  },
  {
    id: 4,
    project: "Industrial Water Monitoring",
    challenge: "Industrial Water Quality Monitoring",
    team: "NIT Jamshedpur Team",
    version: "v0.9",
    submittedOn: "10 Sep 2026",
    status: "Needs Revision",
    score: 74,
    reviewer: "Prof. Anil Verma",
    feedback:
      "The solution requires additional water-quality validation and more detailed analysis of collected data.",
    documents: [
      "Current Project Report.pdf",
      "Water Quality Data.pdf",
      "Prototype Report.pdf",
    ],
    timeline: [
      {
        title: "Submission Created",
        date: "08 Sep 2026",
        status: "done",
      },
      {
        title: "Submission Reviewed",
        date: "11 Sep 2026",
        status: "done",
      },
      {
        title: "Revision Requested",
        date: "12 Sep 2026",
        status: "current",
      },
      {
        title: "Resubmission",
        date: "Pending",
        status: "pending",
      },
    ],
  },
];

const statusStyles = {
  "Under Review": {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    icon: Clock3,
  },
  Approved: {
    badge: "bg-green-50 text-green-700 border-green-200",
    icon: CheckCircle2,
  },
  "Needs Revision": {
    badge: "bg-orange-50 text-orange-700 border-orange-200",
    icon: AlertCircle,
  },
};

const Submissions = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const filteredSubmissions = useMemo(() => {
    return submissionsData.filter((submission) => {
      const matchesSearch =
        submission.project.toLowerCase().includes(search.toLowerCase()) ||
        submission.team.toLowerCase().includes(search.toLowerCase()) ||
        submission.challenge.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || submission.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const stats = [
    {
      title: "Total Submissions",
      value: "12",
      icon: FileText,
      description: "All submitted solutions",
    },
    {
      title: "Under Review",
      value: "03",
      icon: Clock3,
      description: "Currently being evaluated",
    },
    {
      title: "Approved",
      value: "07",
      icon: CheckCircle2,
      description: "Successfully approved",
    },
    {
      title: "Needs Revision",
      value: "02",
      icon: AlertCircle,
      description: "Revision required",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
          Submissions
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Track and manage your project solution submissions
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-[#092752]">
                    {stat.value}
                  </h2>

                  <p className="mt-1 text-xs text-slate-400">
                    {stat.description}
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50">
                  <Icon className="h-5 w-5 text-[#159447]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search submissions, projects or teams..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#159447] focus:ring-2 focus:ring-green-100"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-slate-400" />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 outline-none focus:border-[#159447]"
            >
              <option value="All">All Status</option>
              <option value="Under Review">Under Review</option>
              <option value="Approved">Approved</option>
              <option value="Needs Revision">Needs Revision</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submission list */}
      <div className="space-y-4">
        {filteredSubmissions.length > 0 ? (
          filteredSubmissions.map((submission) => {
            const style = statusStyles[submission.status];
            const StatusIcon = style.icon;

            return (
              <div
                key={submission.id}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
                  {/* Main information */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold text-[#092752]">
                        {submission.project}
                      </h2>

                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium ${style.badge}`}
                      >
                        <StatusIcon className="h-3.5 w-3.5" />
                        {submission.status}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      {submission.challenge}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {submission.team}
                      </div>

                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        {submission.version}
                      </div>

                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {submission.submittedOn}
                      </div>
                    </div>
                  </div>

                  {/* Score */}
                  <div className="flex items-center gap-5">
                    {submission.score !== null && (
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="h-4 w-4 fill-current text-yellow-500" />

                          <span className="text-2xl font-bold text-[#092752]">
                            {submission.score}
                          </span>
                        </div>

                        <p className="text-xs text-slate-400">
                          Evaluation Score
                        </p>
                      </div>
                    )}

                    <button
                      onClick={() => setSelectedSubmission(submission)}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
                    >
                      <Eye className="h-4 w-4" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white py-14 text-center">
            <FileText className="mx-auto h-10 w-10 text-slate-300" />

            <h3 className="mt-3 text-base font-semibold text-slate-700">
              No submissions found
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Try changing your search or filter.
            </p>
          </div>
        )}
      </div>

      {/* Submission Details Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
            {/* Modal header */}
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-200 bg-white p-5">
              <div>
                <h2 className="text-xl font-bold text-[#092752]">
                  {selectedSubmission.project}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Submission {selectedSubmission.version}
                </p>
              </div>

              <button
                onClick={() => setSelectedSubmission(null)}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-6 p-5">
              {/* Status + score */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Status
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    {(() => {
                      const style = statusStyles[selectedSubmission.status];
                      const Icon = style.icon;

                      return (
                        <span
                          className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm font-medium ${style.badge}`}
                        >
                          <Icon className="h-4 w-4" />
                          {selectedSubmission.status}
                        </span>
                      );
                    })()}
                  </div>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Submitted On
                  </p>

                  <p className="mt-2 font-semibold text-slate-700">
                    {selectedSubmission.submittedOn}
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Evaluation Score
                  </p>

                  <div className="mt-2 flex items-center gap-1">
                    {selectedSubmission.score ? (
                      <>
                        <Star className="h-4 w-4 fill-current text-yellow-500" />
                        <span className="text-xl font-bold text-[#092752]">
                          {selectedSubmission.score}/100
                        </span>
                      </>
                    ) : (
                      <span className="text-sm text-slate-400">
                        Evaluation pending
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div>
                <h3 className="text-base font-bold text-[#092752]">
                  Project Information
                </h3>

                <div className="mt-3 grid grid-cols-1 gap-4 rounded-xl border border-slate-200 p-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs text-slate-400">Challenge</p>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {selectedSubmission.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Team</p>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {selectedSubmission.team}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Version</p>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {selectedSubmission.version}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Reviewer</p>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                      {selectedSubmission.reviewer}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h3 className="text-base font-bold text-[#092752]">
                  Submission Timeline
                </h3>

                <div className="mt-4 space-y-4">
                  {selectedSubmission.timeline.map((item, index) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3"
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full ${
                            item.status === "done"
                              ? "bg-green-100 text-[#159447]"
                              : item.status === "current"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-slate-100 text-slate-400"
                          }`}
                        >
                          {item.status === "done" ? (
                            <CheckCircle2 className="h-4 w-4" />
                          ) : item.status === "current" ? (
                            <Clock3 className="h-4 w-4" />
                          ) : (
                            <div className="h-2 w-2 rounded-full bg-current" />
                          )}
                        </div>

                        {index < selectedSubmission.timeline.length - 1 && (
                          <div className="h-8 w-px bg-slate-200" />
                        )}
                      </div>

                      <div className="pt-1">
                        <p className="text-sm font-semibold text-slate-700">
                          {item.title}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feedback */}
              <div>
                <h3 className="text-base font-bold text-[#092752]">
                  Reviewer Feedback
                </h3>

                <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
                  <div className="flex gap-3">
                    <MessageSquare className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                    <div>
                      <p className="text-sm leading-6 text-slate-700">
                        {selectedSubmission.feedback}
                      </p>

                      <p className="mt-2 text-xs font-medium text-blue-600">
                        — {selectedSubmission.reviewer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div>
                <h3 className="text-base font-bold text-[#092752]">
                  Submitted Documents
                </h3>

                <div className="mt-3 space-y-2">
                  {selectedSubmission.documents.map((document) => (
                    <div
                      key={document}
                      className="flex items-center justify-between rounded-lg border border-slate-200 p-3"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50">
                          <FileText className="h-4 w-4 text-[#159447]" />
                        </div>

                        <span className="truncate text-sm font-medium text-slate-700">
                          {document}
                        </span>
                      </div>

                      <button className="ml-3 rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-[#159447]">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="sticky bottom-0 flex flex-col-reverse gap-3 border-t border-slate-200 bg-white p-5 sm:flex-row sm:justify-end">
              {selectedSubmission.status === "Needs Revision" && (
                <button className="rounded-lg border border-orange-200 bg-orange-50 px-4 py-2.5 text-sm font-semibold text-orange-700 transition hover:bg-orange-100">
                  Resubmit Solution
                </button>
              )}

              <button
                onClick={() => setSelectedSubmission(null)}
                className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
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