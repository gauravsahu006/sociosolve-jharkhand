import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  Users,
  CalendarDays,
  Target,
  FileText,
  FlaskConical,
  Wrench,
  ShieldCheck,
  Send,
  MessageSquare,
  Upload,
  Plus,
  ExternalLink,
  AlertCircle,
} from "lucide-react";

const ProjectWorkspace = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("Overview");

  const project = {
    id,
    name: "Smart Waste Management",
    challenge: "Smart Waste Management System",
    organization: "Urban Development Department",
    university: "BIT Mesra Innovation Team",
    mentor: "Dr. Priya Singh",
    progress: 78,
    status: "In Progress",
    startDate: "05 Sep 2026",
    deadline: "30 Sep 2026",
    members: 6,
  };

  const tabs = [
    "Overview",
    "Team",
    "Milestones",
    "Research",
    "Prototype",
    "Testing",
    "Submission",
  ];

  const milestones = [
    {
      title: "Problem Understanding & Research",
      description: "Study the existing waste management process and identify major gaps.",
      date: "08 Sep 2026",
      status: "Completed",
    },
    {
      title: "Solution Design",
      description: "Design the proposed smart waste monitoring and management solution.",
      date: "12 Sep 2026",
      status: "Completed",
    },
    {
      title: "Prototype Development",
      description: "Develop the initial working prototype and dashboard.",
      date: "20 Sep 2026",
      status: "In Progress",
    },
    {
      title: "Testing & Validation",
      description: "Test the solution with sample datasets and validate results.",
      date: "26 Sep 2026",
      status: "Pending",
    },
    {
      title: "Final Submission",
      description: "Submit the final solution, documentation and presentation.",
      date: "30 Sep 2026",
      status: "Pending",
    },
  ];

  const teamMembers = [
    {
      name: "Rahul Kumar",
      role: "Team Lead",
      department: "Computer Science",
    },
    {
      name: "Priya Kumari",
      role: "Frontend Developer",
      department: "Information Technology",
    },
    {
      name: "Aman Raj",
      role: "Backend Developer",
      department: "Computer Science",
    },
    {
      name: "Neha Singh",
      role: "Data Analyst",
      department: "Data Science",
    },
    {
      name: "Rohit Verma",
      role: "IoT Engineer",
      department: "Electronics",
    },
    {
      name: "Anjali Sharma",
      role: "UI/UX Designer",
      department: "Design",
    },
  ];

  const researchItems = [
    {
      title: "Existing Waste Collection Systems",
      description:
        "Analysis of current waste collection practices and their operational limitations.",
      status: "Completed",
    },
    {
      title: "IoT Based Waste Monitoring",
      description:
        "Research on smart sensors and real-time bin-level monitoring.",
      status: "Completed",
    },
    {
      title: "Route Optimization",
      description:
        "Study of intelligent routing approaches for waste collection vehicles.",
      status: "In Progress",
    },
  ];

  const testingItems = [
    {
      title: "Sensor Data Validation",
      status: "Passed",
      result: "98% accuracy",
    },
    {
      title: "Dashboard Performance",
      status: "Passed",
      result: "1.8s average load time",
    },
    {
      title: "Route Prediction",
      status: "In Progress",
      result: "Under evaluation",
    },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Project Summary */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-medium text-green-600">
              {project.challenge}
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
              {project.name}
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Develop a smart and data-driven waste management solution that
              enables real-time monitoring, optimized collection routes and
              better operational decision-making.
            </p>
          </div>

          <span className="w-fit rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
            {project.status}
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-slate-500">
              <Users size={17} />
              <span className="text-xs">Project Team</span>
            </div>

            <p className="mt-2 font-semibold text-slate-900">
              {project.university}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-slate-500">
              <Target size={17} />
              <span className="text-xs">Industry Partner</span>
            </div>

            <p className="mt-2 font-semibold text-slate-900">
              Tata Steel Ltd.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-slate-500">
              <CalendarDays size={17} />
              <span className="text-xs">Deadline</span>
            </div>

            <p className="mt-2 font-semibold text-slate-900">
              {project.deadline}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <div className="flex items-center gap-2 text-slate-500">
              <MessageSquare size={17} />
              <span className="text-xs">Industry Mentor</span>
            </div>

            <p className="mt-2 font-semibold text-slate-900">
              {project.mentor}
            </p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-900">
              Overall Project Progress
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Current project completion status
            </p>
          </div>

          <span className="text-xl font-bold text-green-600">
            {project.progress}%
          </span>
        </div>

        <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-green-600"
            style={{ width: `${project.progress}%` }}
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-5 text-xs text-slate-500">
          <span>Started: {project.startDate}</span>
          <span>Deadline: {project.deadline}</span>
          <span>{project.members} Team Members</span>
        </div>
      </div>

      {/* Current Focus */}
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-50 p-2.5 text-green-600">
              <Target size={20} />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Current Focus
              </h3>

              <p className="text-xs text-slate-500">
                What the team is working on
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-600">
            The team is currently developing the working prototype and
            integrating real-time waste monitoring data with the management
            dashboard.
          </p>

          <button
            onClick={() => setActiveTab("Prototype")}
            className="mt-5 flex items-center gap-2 text-sm font-semibold text-green-600"
          >
            Open Prototype
            <ExternalLink size={15} />
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-50 p-2.5 text-blue-600">
              <MessageSquare size={20} />
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Mentor Feedback
              </h3>

              <p className="text-xs text-slate-500">
                Latest industry feedback
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-600">
            "The dashboard direction looks good. Please focus on improving
            route optimization and include measurable efficiency metrics."
          </p>

          <p className="mt-4 text-xs font-medium text-slate-400">
            — {project.mentor}
          </p>
        </div>
      </div>
    </div>
  );

  const renderTeam = () => (
    <div className="space-y-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Project Team
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Members working on this industry challenge
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white">
            <Plus size={16} />
            Add Member
          </button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 font-bold text-green-700">
                {member.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {member.name}
                </h3>

                <p className="text-xs text-green-600">
                  {member.role}
                </p>
              </div>
            </div>

            <div className="mt-4 border-t border-slate-100 pt-4">
              <p className="text-xs text-slate-500">
                Department
              </p>

              <p className="mt-1 text-sm font-medium text-slate-700">
                {member.department}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMilestones = () => (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
      <div>
        <h2 className="text-lg font-bold text-slate-900">
          Project Milestones
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Track every stage of the project
        </p>
      </div>

      <div className="mt-7 space-y-6">
        {milestones.map((milestone, index) => {
          const completed = milestone.status === "Completed";
          const active = milestone.status === "In Progress";

          return (
            <div key={milestone.title} className="relative flex gap-4">
              {index !== milestones.length - 1 && (
                <div className="absolute left-5 top-11 h-[calc(100%+1.5rem)] w-px bg-slate-200" />
              )}

              <div
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                  completed
                    ? "bg-green-600 text-white"
                    : active
                    ? "bg-green-50 text-green-600 ring-2 ring-green-200"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {completed ? (
                  <CheckCircle2 size={19} />
                ) : active ? (
                  <Clock3 size={19} />
                ) : (
                  <span className="text-sm font-semibold">
                    {index + 1}
                  </span>
                )}
              </div>

              <div className="flex-1 pb-2">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-slate-900">
                    {milestone.title}
                  </h3>

                  <span
                    className={`w-fit rounded-full px-2.5 py-1 text-xs font-medium ${
                      completed
                        ? "bg-green-50 text-green-700"
                        : active
                        ? "bg-yellow-50 text-yellow-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {milestone.status}
                  </span>
                </div>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  {milestone.description}
                </p>

                <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-400">
                  <CalendarDays size={13} />
                  Due {milestone.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderResearch = () => (
    <div className="space-y-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Research & Documentation
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Research work supporting the proposed solution
            </p>
          </div>

          <button className="flex w-fit items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white">
            <Upload size={16} />
            Upload Research
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {researchItems.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-5"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <FlaskConical size={20} />
              </div>

              <div className="flex-1">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <span className="w-fit rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                    {item.status}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                <button className="mt-3 flex items-center gap-2 text-sm font-semibold text-green-600">
                  <FileText size={15} />
                  View Document
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPrototype = () => (
    <div className="space-y-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-green-50 p-3 text-green-600">
            <Wrench size={21} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Prototype Development
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Current prototype and implementation progress
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-slate-500">Prototype Version</p>
            <p className="mt-2 font-semibold text-slate-900">v1.4</p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-slate-500">Development Status</p>
            <p className="mt-2 font-semibold text-green-600">
              78% Complete
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs text-slate-500">Last Updated</p>
            <p className="mt-2 font-semibold text-slate-900">
              08 Sep 2026
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <h3 className="font-semibold text-slate-900">
          Prototype Modules
        </h3>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            "Smart Bin Monitoring",
            "Real-Time Dashboard",
            "Collection Route Optimization",
            "Alert & Notification System",
          ].map((module) => (
            <div
              key={module}
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-4"
            >
              <CheckCircle2
                size={18}
                className="text-green-600"
              />

              <span className="text-sm font-medium text-slate-700">
                {module}
              </span>
            </div>
          ))}
        </div>

        <button className="mt-6 flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white">
          <ExternalLink size={16} />
          Open Prototype
        </button>
      </div>
    </div>
  );

  const renderTesting = () => (
    <div className="space-y-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-green-50 p-3 text-green-600">
            <ShieldCheck size={21} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Testing & Validation
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Validate the solution before final submission
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold text-slate-500">
                  Test
                </th>
                <th className="px-5 py-4 text-xs font-semibold text-slate-500">
                  Status
                </th>
                <th className="px-5 py-4 text-xs font-semibold text-slate-500">
                  Result
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {testingItems.map((item) => (
                <tr key={item.title}>
                  <td className="px-5 py-4 text-sm font-medium text-slate-800">
                    {item.title}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        item.status === "Passed"
                          ? "bg-green-50 text-green-700"
                          : "bg-yellow-50 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-slate-500">
                    {item.result}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
        <div className="flex gap-3">
          <AlertCircle
            size={19}
            className="mt-0.5 shrink-0 text-blue-600"
          />

          <p className="text-sm leading-6 text-blue-700">
            Complete all validation tests before moving the project to
            final submission.
          </p>
        </div>
      </div>
    </div>
  );

  const renderSubmission = () => (
    <div className="space-y-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-green-50 p-3 text-green-600">
            <Send size={21} />
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Final Submission
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Submit the completed industry challenge solution
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-slate-50 p-4">
          <div className="flex items-start gap-3">
            <Clock3
              size={19}
              className="mt-0.5 text-orange-500"
            />

            <div>
              <p className="text-sm font-semibold text-slate-800">
                Submission Deadline
              </p>

              <p className="mt-1 text-sm text-slate-500">
                30 Sep 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <h3 className="font-semibold text-slate-900">
          Submission Checklist
        </h3>

        <div className="mt-5 space-y-3">
          {[
            "Final solution documentation",
            "Working prototype",
            "Testing and validation report",
            "Project presentation",
            "Source code / technical files",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-4"
            >
              <CheckCircle2
                size={18}
                className="text-green-600"
              />

              <span className="text-sm text-slate-700">
                {item}
              </span>
            </div>
          ))}
        </div>

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700 sm:w-auto">
          <Send size={17} />
          Submit Final Solution
        </button>
      </div>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case "Team":
        return renderTeam();

      case "Milestones":
        return renderMilestones();

      case "Research":
        return renderResearch();

      case "Prototype":
        return renderPrototype();

      case "Testing":
        return renderTesting();

      case "Submission":
        return renderSubmission();

      default:
        return renderOverview();
    }
  };

  return (
    <div className="space-y-6">
      {/* Back */}
      <button
        onClick={() => navigate("/industry/projects")}
        className="flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-green-600"
      >
        <ArrowLeft size={17} />
        Back to My Projects
      </button>

      {/* Header */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-medium text-green-600">
              Project Workspace
            </p>

            <h1 className="mt-1 text-2xl font-bold text-slate-900">
              {project.name}
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              {project.challenge}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-slate-400">
                Project Progress
              </p>

              <p className="text-xl font-bold text-green-600">
                {project.progress}%
              </p>
            </div>

            <div className="h-12 w-12 rounded-full border-4 border-green-100 border-t-green-600" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="overflow-x-auto border-b border-slate-200">
        <div className="flex min-w-max gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 text-sm font-medium transition ${
                activeTab === tab
                  ? "text-green-600"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab}

              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-green-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {renderActiveTab()}
    </div>
  );
};

export default ProjectWorkspace;