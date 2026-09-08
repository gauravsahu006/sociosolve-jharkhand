import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Lightbulb,
  MapPin,
  Target,
  Users,
  Building2,
  FileText,
  AlertCircle,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ChallengeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [accepted, setAccepted] = useState(false);

  const challenges = {
    1: {
      title: "Smart Waste Management System",
      organization: "Urban Development Department",
      category: "Smart City",
      priority: "High",
      location: "Ranchi, Jharkhand",
      deadline: "30 Sep 2026",
      teams: 8,
      description:
        "Develop an intelligent waste management solution that enables real-time monitoring of waste collection, optimizes collection routes and improves overall urban cleanliness.",
      objective:
        "Create a scalable technology solution that can help cities monitor waste generation and collection while reducing operational costs and improving service efficiency.",
      requirements: [
        "Real-time waste collection monitoring",
        "GPS-based vehicle tracking",
        "Smart route optimization",
        "Waste generation analytics",
        "Administrative dashboard",
        "Mobile-friendly interface",
      ],
      expectedOutcome: [
        "Working web or mobile prototype",
        "Real-time monitoring dashboard",
        "Analytics and reporting module",
        "Demonstration of route optimization",
      ],
    },

    2: {
      title: "Industrial Water Quality Monitoring",
      organization: "Jharkhand Industrial Area",
      category: "Environment",
      priority: "High",
      location: "Jamshedpur, Jharkhand",
      deadline: "15 Oct 2026",
      teams: 5,
      description:
        "Build a reliable technology platform for monitoring industrial water quality and identifying contamination at an early stage.",
      objective:
        "Develop an intelligent monitoring system that collects water quality data, identifies abnormal readings and provides actionable insights to industry operators.",
      requirements: [
        "Water quality parameter monitoring",
        "IoT sensor integration",
        "Real-time alerts",
        "Historical data visualization",
        "Quality threshold management",
        "Industry dashboard",
      ],
      expectedOutcome: [
        "IoT-enabled monitoring prototype",
        "Real-time quality dashboard",
        "Alert and notification system",
        "Water quality analytics",
      ],
    },

    3: {
      title: "Rural Healthcare Access Platform",
      organization: "Health & Family Welfare Department",
      category: "Healthcare",
      priority: "Medium",
      location: "Dumka, Jharkhand",
      deadline: "22 Oct 2026",
      teams: 6,
      description:
        "Create a digital platform that improves access to healthcare services for people living in remote rural communities.",
      objective:
        "Build an accessible digital solution connecting rural communities with healthcare information, services and support.",
      requirements: [
        "Patient service discovery",
        "Healthcare information",
        "Doctor consultation support",
        "Appointment management",
        "Location-based services",
        "Mobile-first design",
      ],
      expectedOutcome: [
        "Working healthcare platform",
        "Mobile responsive interface",
        "Healthcare service directory",
        "Prototype consultation workflow",
      ],
    },
  };

  const challenge = challenges[id] || challenges[1];

  const handleStartProject = () => {
    setAccepted(true);

    setTimeout(() => {
      navigate("/industry/projects");
    }, 500);
  };

  return (
    <div className="space-y-6">

      {/* Back */}
      <button
        type="button"
        onClick={() => navigate("/industry/challenges")}
        className="flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#159447]"
      >
        <ArrowLeft size={17} />
        Back to Challenges
      </button>

      {/* Main Header */}
      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#159447]/10 text-[#159447]">
              <Lightbulb size={24} />
            </div>

            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold text-[#159447]">
                  {challenge.category}
                </span>

                <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-bold text-orange-600">
                  {challenge.priority} Priority
                </span>
              </div>

              <h1 className="max-w-3xl text-2xl font-bold leading-tight text-[#092752] sm:text-3xl">
                {challenge.title}
              </h1>

              <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                <Building2 size={15} />
                {challenge.organization}
              </div>
            </div>
          </div>

          <div className="shrink-0">
            <button
              type="button"
              onClick={handleStartProject}
              disabled={accepted}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#159447] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#117C3B] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {accepted ? "Starting Project..." : "Accept Challenge"}
              {!accepted && <ArrowRight size={17} />}
            </button>
          </div>
        </div>

        {/* Meta */}
        <div className="mt-6 grid grid-cols-1 gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">

          <div className="flex items-center gap-3">
            <MapPin
              size={18}
              className="text-[#159447]"
            />

            <div>
              <p className="text-[10px] text-slate-400">
                Location
              </p>

              <p className="text-xs font-semibold text-slate-700">
                {challenge.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays
              size={18}
              className="text-[#159447]"
            />

            <div>
              <p className="text-[10px] text-slate-400">
                Submission Deadline
              </p>

              <p className="text-xs font-semibold text-slate-700">
                {challenge.deadline}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users
              size={18}
              className="text-[#159447]"
            />

            <div>
              <p className="text-[10px] text-slate-400">
                Interested Teams
              </p>

              <p className="text-xs font-semibold text-slate-700">
                {challenge.teams} teams
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Content */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Left */}
        <div className="space-y-6 xl:col-span-2">

          {/* Description */}
          <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <FileText
                size={18}
                className="text-[#159447]"
              />

              <h2 className="font-bold text-[#092752]">
                Challenge Description
              </h2>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {challenge.description}
            </p>
          </section>

          {/* Objective */}
          <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Target
                size={18}
                className="text-[#159447]"
              />

              <h2 className="font-bold text-[#092752]">
                Objective
              </h2>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {challenge.objective}
            </p>
          </section>

          {/* Requirements */}
          <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="font-bold text-[#092752]">
              Key Requirements
            </h2>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {challenge.requirements.map((requirement) => (
                <div
                  key={requirement}
                  className="flex items-start gap-3 rounded-lg bg-slate-50 p-3"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-[#159447]"
                  />

                  <p className="text-xs leading-5 text-slate-600">
                    {requirement}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Expected Outcome */}
          <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="font-bold text-[#092752]">
              Expected Outcome
            </h2>

            <div className="mt-4 space-y-3">
              {challenge.expectedOutcome.map((outcome, index) => (
                <div
                  key={outcome}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#159447]/10 text-[10px] font-bold text-[#159447]">
                    {index + 1}
                  </span>

                  <p className="text-sm text-slate-600">
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
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-2">
              <Clock3
                size={18}
                className="text-[#159447]"
              />

              <h2 className="font-bold text-[#092752]">
                Challenge Timeline
              </h2>
            </div>

            <div className="mt-5 space-y-5">

              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#159447]" />

                <div>
                  <p className="text-xs font-bold text-[#092752]">
                    Challenge Published
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    01 Sep 2026
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#159447]" />

                <div>
                  <p className="text-xs font-bold text-[#092752]">
                    Project Development
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    Sep - Oct 2026
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-slate-300" />

                <div>
                  <p className="text-xs font-bold text-[#092752]">
                    Final Submission
                  </p>

                  <p className="mt-1 text-[11px] text-slate-500">
                    {challenge.deadline}
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Collaboration */}
          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="font-bold text-[#092752]">
              Collaboration
            </h2>

            <div className="mt-4 space-y-3">

              <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                <div className="flex items-center gap-2">
                  <Users
                    size={16}
                    className="text-[#159447]"
                  />

                  <span className="text-xs text-slate-600">
                    Interested Teams
                  </span>
                </div>

                <span className="text-sm font-bold text-[#092752]">
                  {challenge.teams}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-slate-50 p-3">
                <div className="flex items-center gap-2">
                  <Building2
                    size={16}
                    className="text-[#159447]"
                  />

                  <span className="text-xs text-slate-600">
                    Organization
                  </span>
                </div>

                <span className="max-w-[130px] text-right text-[10px] font-semibold text-[#092752]">
                  {challenge.organization}
                </span>
              </div>

            </div>
          </section>

          {/* Important */}
          <section className="rounded-xl bg-[#092752] p-5 text-white">
            <div className="flex gap-3">
              <AlertCircle
                size={19}
                className="mt-0.5 shrink-0 text-[#159447]"
              />

              <div>
                <h3 className="text-sm font-bold">
                  Before accepting
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-300">
                  Make sure your organization can provide the
                  required resources, expertise and coordination
                  needed for this challenge.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleStartProject}
              disabled={accepted}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-xs font-bold text-[#092752] transition hover:bg-slate-100 disabled:opacity-60"
            >
              {accepted
                ? "Project Starting..."
                : "Accept & Start Project"}
              {!accepted && <ArrowRight size={14} />}
            </button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;