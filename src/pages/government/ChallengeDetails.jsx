import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  Building2,
  GraduationCap,
  Factory,
  Users,
  CheckCircle2,
  Clock3,
  FileText,
  Edit3,
  Send,
} from "lucide-react";

const ChallengeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const challenge = {
    title: "Smart Water Management",
    department: "Urban Development Department",
    category: "Smart City",
    status: "Active",
    deadline: "30 September 2026",
    published: "12 August 2026",
    applicants: 18,
    projects: 4,
    description:
      "Develop a technology-driven solution for monitoring, managing and optimizing water consumption across urban areas of Jharkhand.",
    problemStatement:
      "Urban areas are facing increasing pressure on water resources due to population growth, inefficient distribution and limited real-time monitoring. The government needs a scalable digital solution that can identify water usage patterns, detect wastage and support better decision-making.",
    requirements: [
      "Real-time water consumption monitoring",
      "Leakage and wastage detection",
      "Data analytics and reporting dashboard",
      "Mobile-friendly interface",
      "Scalable solution for multiple cities",
      "Integration with existing government systems",
    ],
    outcomes: [
      "Reduce unnecessary water consumption",
      "Improve water distribution efficiency",
      "Provide actionable insights to government departments",
      "Enable faster identification of leakage and wastage",
    ],
  };

  const timeline = [
    {
      title: "Challenge Published",
      date: "12 Aug 2026",
      status: "completed",
    },
    {
      title: "University / Industry Registration",
      date: "15 Aug - 10 Sep 2026",
      status: "completed",
    },
    {
      title: "Solution Development",
      date: "11 Sep - 20 Sep 2026",
      status: "current",
    },
    {
      title: "Final Submission",
      date: "30 Sep 2026",
      status: "upcoming",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          onClick={() => navigate("/government/challenges")}
          className="flex w-fit items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#159447]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Challenges
        </button>

        <div className="flex gap-2">
          <button
            onClick={() => alert(`Editing challenge ${id}`)}
            className="flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 hover:border-[#159447] hover:text-[#159447]"
          >
            <Edit3 className="h-4 w-4" />
            Edit Challenge
          </button>

          <button
            onClick={() => alert("Challenge published successfully")}
            className="flex items-center gap-2 rounded-xl bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#117C3B]"
          >
            <Send className="h-4 w-4" />
            Publish Update
          </button>
        </div>
      </div>

      {/* Challenge Header */}
      <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-4xl">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#EAF7EF] px-3 py-1 text-xs font-semibold text-[#159447]">
                {challenge.status}
              </span>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {challenge.category}
              </span>
            </div>

            <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
              {challenge.title}
            </h1>

            <p className="mt-2 text-sm font-medium text-[#159447]">
              {challenge.department}
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {challenge.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[430px]">
            <div className="rounded-xl bg-slate-50 p-4">
              <CalendarDays className="h-5 w-5 text-[#159447]" />
              <p className="mt-2 text-xs text-slate-500">Deadline</p>
              <p className="mt-1 text-sm font-bold text-[#092752]">
                30 Sep
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <Users className="h-5 w-5 text-[#159447]" />
              <p className="mt-2 text-xs text-slate-500">Applicants</p>
              <p className="mt-1 text-sm font-bold text-[#092752]">
                {challenge.applicants}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <GraduationCap className="h-5 w-5 text-[#159447]" />
              <p className="mt-2 text-xs text-slate-500">Universities</p>
              <p className="mt-1 text-sm font-bold text-[#092752]">
                12
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 p-4">
              <Factory className="h-5 w-5 text-[#159447]" />
              <p className="mt-2 text-xs text-slate-500">Industries</p>
              <p className="mt-1 text-sm font-bold text-[#092752]">
                09
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Left */}
        <div className="space-y-6 xl:col-span-2">
          {/* Problem Statement */}
          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-[#EAF7EF] p-2">
                <FileText className="h-5 w-5 text-[#159447]" />
              </div>

              <h2 className="text-lg font-bold text-[#092752]">
                Problem Statement
              </h2>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {challenge.problemStatement}
            </p>
          </section>

          {/* Requirements */}
          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6">
            <h2 className="text-lg font-bold text-[#092752]">
              Key Requirements
            </h2>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {challenge.requirements.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#159447]" />

                  <span className="text-sm leading-6 text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Expected Outcomes */}
          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6">
            <h2 className="text-lg font-bold text-[#092752]">
              Expected Outcomes
            </h2>

            <div className="mt-4 space-y-3">
              {challenge.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#159447]" />

                  <p className="text-sm leading-6 text-slate-600">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right */}
        <div className="space-y-6">
          {/* Timeline */}
          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6">
            <h2 className="text-lg font-bold text-[#092752]">
              Challenge Timeline
            </h2>

            <div className="mt-5 space-y-5">
              {timeline.map((item, index) => (
                <div key={item.title} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full ${
                        item.status === "completed"
                          ? "bg-[#159447] text-white"
                          : item.status === "current"
                          ? "bg-[#EAF7EF] text-[#159447]"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {item.status === "completed" ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <Clock3 className="h-4 w-4" />
                      )}
                    </div>

                    {index < timeline.length - 1 && (
                      <div className="mt-1 h-8 w-px bg-slate-200" />
                    )}
                  </div>

                  <div className="pb-2">
                    <h3 className="text-sm font-semibold text-[#092752]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Participation */}
          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6">
            <h2 className="text-lg font-bold text-[#092752]">
              Participation
            </h2>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-[#159447]" />
                  <span className="text-sm text-slate-600">
                    Universities
                  </span>
                </div>

                <span className="font-bold text-[#092752]">
                  12
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <Factory className="h-5 w-5 text-[#159447]" />
                  <span className="text-sm text-slate-600">
                    Industry Partners
                  </span>
                </div>

                <span className="font-bold text-[#092752]">
                  09
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <FolderKanbanIcon />
                  <span className="text-sm text-slate-600">
                    Active Projects
                  </span>
                </div>

                <span className="font-bold text-[#092752]">
                  {challenge.projects}
                </span>
              </div>
            </div>
          </section>

          {/* Government Info */}
          <section className="rounded-2xl bg-[#092752] p-5 text-white sm:p-6">
            <p className="text-xs font-medium text-slate-300">
              Published by
            </p>

            <h3 className="mt-1 font-bold">
              Jharkhand Government
            </h3>

            <p className="mt-3 text-xs leading-5 text-slate-300">
              Government innovation challenge for improving public
              services through technology and collaboration.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

const FolderKanbanIcon = () => {
  return (
    <div className="h-5 w-5 rounded border-2 border-[#159447]">
      <div className="mx-auto mt-1 h-0.5 w-2 bg-[#159447]" />
    </div>
  );
};

export default ChallengeDetails;