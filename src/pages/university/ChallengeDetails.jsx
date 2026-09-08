import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Building2,
  Users,
  Clock,
  CheckCircle2,
  Lightbulb,
  Target,
  FileText,
  Play,
} from "lucide-react";

const ChallengeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // challenge data
  const challenges = {
    "1": {
      title: "Smart Waste Management System",
      organization: "Ranchi Municipal Corporation",
      category: "Environment",
      priority: "High",
      location: "Ranchi, Jharkhand",
      deadline: "30 September 2026",
      duration: "3-6 Months",
      teams: "5 Teams",
      description:
        "Develop an intelligent waste management solution that can help authorities monitor waste collection, optimize routes and improve cleanliness across urban areas.",
      objective:
        "The objective is to build a technology-driven waste management system that enables real-time monitoring, efficient collection planning and better citizen participation.",
      requirements: [
        "Real-time waste collection monitoring",
        "Smart route optimization",
        "Citizen complaint and reporting system",
        "Collection vehicle tracking",
        "Analytics and performance dashboard",
      ],
    },

    "2": {
      title: "Rural Healthcare Access Platform",
      organization: "Department of Health, Jharkhand",
      category: "Healthcare",
      priority: "Critical",
      location: "Jharkhand",
      deadline: "15 October 2026",
      duration: "4-6 Months",
      teams: "4 Teams",
      description:
        "Create a digital platform that improves healthcare accessibility for people living in rural and remote areas.",
      objective:
        "The solution should connect citizens with healthcare services and provide better access to doctors, health information and nearby facilities.",
      requirements: [
        "Doctor consultation support",
        "Nearby healthcare facility discovery",
        "Health information system",
        "Appointment management",
        "Emergency assistance",
      ],
    },

    "3": {
      title: "Digital Education for Rural Students",
      organization: "Department of Education",
      category: "Education",
      priority: "High",
      location: "Rural Jharkhand",
      deadline: "20 October 2026",
      duration: "3-5 Months",
      teams: "6 Teams",
      description:
        "Build an accessible digital education platform for students in rural and underserved communities.",
      objective:
        "The platform should provide students with quality learning resources and help teachers monitor student progress.",
      requirements: [
        "Digital learning resources",
        "Low bandwidth support",
        "Student progress tracking",
        "Teacher dashboard",
        "Offline learning support",
      ],
    },
  };

  const challenge = challenges[id] || challenges["1"];

  // start project
  const handleStartProject = () => {
    navigate("/university/projects");
  };

  return (
    <div className="space-y-6">

      {/* =========================
          Back Button
      ========================= */}

      <button
        type="button"
        onClick={() => navigate("/university/challenges")}
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-[#159447]"
      >
        <ArrowLeft size={18} />
        Back to Recommended Challenges
      </button>

      {/* =========================
          Hero Section
      ========================= */}

      <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          <div className="max-w-4xl">

            {/* Category */}
            <div className="mb-4 flex flex-wrap items-center gap-2">

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-[#159447]">
                {challenge.category}
              </span>

              <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                {challenge.priority} Priority
              </span>

            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold leading-tight text-[#092752] sm:text-3xl">
              {challenge.title}
            </h1>

            {/* Organization */}
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
              <Building2 size={18} className="text-[#159447]" />
              {challenge.organization}
            </div>

            {/* Description */}
            <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
              {challenge.description}
            </p>

          </div>

          {/* Start Project */}
          <button
            type="button"
            onClick={handleStartProject}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#159447] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#117C3B]"
          >
            <Play size={18} />
            Start Project
          </button>

        </div>

      </section>

      {/* =========================
          Challenge Information
      ========================= */}

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Location */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-50 p-3 text-[#159447]">
              <MapPin size={20} />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Location
              </p>

              <p className="mt-1 text-sm font-semibold text-[#092752]">
                {challenge.location}
              </p>
            </div>
          </div>
        </div>

        {/* Deadline */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <Calendar size={20} />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Application Deadline
              </p>

              <p className="mt-1 text-sm font-semibold text-[#092752]">
                {challenge.deadline}
              </p>
            </div>
          </div>
        </div>

        {/* Duration */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-orange-50 p-3 text-orange-600">
              <Clock size={20} />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Project Duration
              </p>

              <p className="mt-1 text-sm font-semibold text-[#092752]">
                {challenge.duration}
              </p>
            </div>
          </div>
        </div>

        {/* Teams */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
              <Users size={20} />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Available Teams
              </p>

              <p className="mt-1 text-sm font-semibold text-[#092752]">
                {challenge.teams}
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* =========================
          Main Content
      ========================= */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* =========================
            Challenge Objective
        ========================= */}

        <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 xl:col-span-2">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-green-50 p-3 text-[#159447]">
              <Target size={21} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#092752]">
                Challenge Objective
              </h2>

              <p className="text-xs text-slate-500">
                What needs to be solved?
              </p>
            </div>

          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            {challenge.objective}
          </p>

        </section>

        {/* =========================
            Quick Info
        ========================= */}

        <section className="rounded-2xl bg-[#092752] p-5 text-white shadow-sm sm:p-6">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-white/10 p-3">
              <Lightbulb size={21} />
            </div>

            <div>
              <h2 className="text-lg font-bold">
                Why Participate?
              </h2>

              <p className="text-xs text-slate-300">
                Benefits for your university
              </p>
            </div>

          </div>

          <div className="mt-5 space-y-4">

            <div className="flex gap-3">
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-green-400"
              />

              <p className="text-sm text-slate-200">
                Work on real-world civic problems.
              </p>
            </div>

            <div className="flex gap-3">
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-green-400"
              />

              <p className="text-sm text-slate-200">
                Give students practical experience.
              </p>
            </div>

            <div className="flex gap-3">
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-green-400"
              />

              <p className="text-sm text-slate-200">
                Collaborate with government departments.
              </p>
            </div>

            <div className="flex gap-3">
              <CheckCircle2
                size={18}
                className="mt-0.5 shrink-0 text-green-400"
              />

              <p className="text-sm text-slate-200">
                Build solutions with measurable social impact.
              </p>
            </div>

          </div>

        </section>

      </div>

      {/* =========================
          Requirements
      ========================= */}

      <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
            <FileText size={21} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#092752]">
              Key Requirements
            </h2>

            <p className="text-xs text-slate-500">
              Expected features and capabilities
            </p>
          </div>

        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">

          {challenge.requirements.map((requirement, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
            >
              <CheckCircle2
                size={19}
                className="mt-0.5 shrink-0 text-[#159447]"
              />

              <p className="text-sm text-slate-700">
                {requirement}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* =========================
          Bottom Action
      ========================= */}

      <section className="rounded-2xl bg-green-50 p-5 sm:p-6">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h3 className="font-bold text-[#092752]">
              Ready to work on this challenge?
            </h3>

            <p className="mt-1 text-sm text-slate-600">
              Create a project and start collaborating with your student team.
            </p>
          </div>

          <button
            type="button"
            onClick={handleStartProject}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#159447] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
          >
            <Play size={18} />
            Start Project
          </button>

        </div>

      </section>

    </div>
  );
};

export default ChallengeDetails;