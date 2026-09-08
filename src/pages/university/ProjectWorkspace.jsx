import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Users,
  Target,
  Calendar,
  CheckCircle2,
  Clock3,
  FileText,
  Upload,
  Search,
  FlaskConical,
  MonitorCog,
  ClipboardCheck,
  Send,
  Plus,
  UserPlus,
  MessageSquare,
} from "lucide-react";

const ProjectWorkspace = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState("Overview");

  // workspace project data
  const project = {
    title: "Smart Waste Management System",
    challenge: "Smart Waste Management System",
    organization: "Ranchi Municipal Corporation",
    category: "Environment",
    status: "In Progress",
    progress: 68,
    deadline: "30 September 2026",
    team: "EcoTech Team",
    members: 5,
    mentor: "Dr. Rajeev Kumar",
    description:
      "AI-powered waste collection and monitoring platform designed to improve waste collection efficiency and urban cleanliness.",
  };

  // workspace tabs
  const tabs = [
    {
      name: "Overview",
      icon: Target,
    },
    {
      name: "Team",
      icon: Users,
    },
    {
      name: "Milestones",
      icon: CheckCircle2,
    },
    {
      name: "Research",
      icon: Search,
    },
    {
      name: "Prototype",
      icon: MonitorCog,
    },
    {
      name: "Testing",
      icon: ClipboardCheck,
    },
    {
      name: "Submission",
      icon: Send,
    },
  ];

  // team members
  const teamMembers = [
    {
      name: "Aman Kumar",
      role: "Team Lead",
      department: "Computer Science",
    },
    {
      name: "Priya Singh",
      role: "UI/UX Designer",
      department: "Information Technology",
    },
    {
      name: "Rahul Verma",
      role: "Backend Developer",
      department: "Computer Science",
    },
    {
      name: "Sneha Kumari",
      role: "Data Analyst",
      department: "Data Science",
    },
    {
      name: "Aditya Raj",
      role: "Frontend Developer",
      department: "Computer Science",
    },
  ];

  // milestones
  const milestones = [
    {
      title: "Problem Research",
      date: "10 Aug 2026",
      progress: 100,
      status: "Completed",
    },
    {
      title: "Requirement Analysis",
      date: "18 Aug 2026",
      progress: 100,
      status: "Completed",
    },
    {
      title: "System Design",
      date: "30 Aug 2026",
      progress: 80,
      status: "In Progress",
    },
    {
      title: "Prototype Development",
      date: "15 Sep 2026",
      progress: 55,
      status: "In Progress",
    },
    {
      title: "Testing & Validation",
      date: "22 Sep 2026",
      progress: 20,
      status: "Upcoming",
    },
    {
      title: "Final Submission",
      date: "30 Sep 2026",
      progress: 0,
      status: "Upcoming",
    },
  ];

  // research items
  const researchItems = [
    {
      title: "Existing Waste Collection Systems",
      description:
        "Research document covering current municipal waste collection methods.",
      type: "Research Paper",
    },
    {
      title: "Citizen Waste Management Survey",
      description:
        "Survey results collected from citizens to understand major problems.",
      type: "Survey",
    },
    {
      title: "Technology Feasibility Study",
      description:
        "Analysis of technologies suitable for real-time waste monitoring.",
      type: "Analysis",
    },
  ];

  // prototype modules
  const prototypeModules = [
    "Admin Dashboard",
    "Collection Vehicle Tracking",
    "Waste Pickup Scheduling",
    "Citizen Reporting",
    "Analytics Dashboard",
  ];

  // testing items
  const testingItems = [
    {
      name: "User Registration",
      status: "Passed",
    },
    {
      name: "Waste Complaint Submission",
      status: "Passed",
    },
    {
      name: "Vehicle Tracking",
      status: "In Progress",
    },
    {
      name: "Admin Dashboard",
      status: "Passed",
    },
    {
      name: "Notification System",
      status: "Pending",
    },
  ];

  // tab change
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="space-y-6">

      {/* =========================
          Back Navigation
      ========================= */}

      <button
        type="button"
        onClick={() => navigate("/university/projects")}
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-[#159447]"
      >
        <ArrowLeft size={18} />
        Back to My Projects
      </button>

      {/* =========================
          Workspace Header
      ========================= */}

      <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

          <div className="min-w-0">

            <div className="flex flex-wrap items-center gap-2">

              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-[#159447]">
                {project.category}
              </span>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                {project.status}
              </span>

            </div>

            <h1 className="mt-3 text-2xl font-bold text-[#092752] sm:text-3xl">
              {project.title}
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Challenge by {project.organization}
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
              {project.description}
            </p>

          </div>

          {/* Progress */}
          <div className="w-full rounded-xl bg-slate-50 p-4 sm:w-64">

            <div className="flex items-center justify-between">

              <span className="text-sm font-medium text-slate-600">
                Overall Progress
              </span>

              <span className="font-bold text-[#159447]">
                {project.progress}%
              </span>

            </div>

            <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-200">

              <div
                className="h-full rounded-full bg-[#159447]"
                style={{
                  width: `${project.progress}%`,
                }}
              />

            </div>

            <p className="mt-2 text-xs text-slate-500">
              Project ID: #{id}
            </p>

          </div>

        </div>

      </section>

      {/* =========================
          Project Information
      ========================= */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-green-50 p-3 text-[#159447]">
              <Users size={20} />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Student Team
              </p>

              <p className="mt-1 text-sm font-bold text-[#092752]">
                {project.team}
              </p>
            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
              <Users size={20} />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Team Members
              </p>

              <p className="mt-1 text-sm font-bold text-[#092752]">
                {project.members} Students
              </p>
            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-orange-50 p-3 text-orange-600">
              <Calendar size={20} />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Submission Deadline
              </p>

              <p className="mt-1 text-sm font-bold text-[#092752]">
                {project.deadline}
              </p>
            </div>

          </div>

        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
              <UserPlus size={20} />
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Faculty Mentor
              </p>

              <p className="mt-1 text-sm font-bold text-[#092752]">
                {project.mentor}
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* =========================
          Workspace Tabs
      ========================= */}

      <section className="overflow-hidden rounded-2xl bg-white shadow-sm">

        <div className="overflow-x-auto border-b border-slate-100">

          <div className="flex min-w-max px-2 sm:px-4">

            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.name;

              return (
                <button
                  key={tab.name}
                  type="button"
                  onClick={() => handleTabChange(tab.name)}
                  className={`flex items-center gap-2 border-b-2 px-4 py-4 text-sm font-medium transition ${
                    isActive
                      ? "border-[#159447] text-[#159447]"
                      : "border-transparent text-slate-500 hover:text-[#159447]"
                  }`}
                >
                  <Icon size={17} />
                  {tab.name}
                </button>
              );
            })}

          </div>

        </div>

        {/* =========================
            Tab Content
        ========================= */}

        <div className="p-5 sm:p-6">

          {/* =========================
              Overview Tab
          ========================= */}

          {activeTab === "Overview" && (
            <div className="space-y-6">

              <div>
                <h2 className="text-lg font-bold text-[#092752]">
                  Project Overview
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Track the current status and important activities.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

                {/* Objectives */}
                <div className="rounded-xl bg-slate-50 p-5">

                  <div className="flex items-center gap-3">

                    <div className="rounded-lg bg-green-100 p-2 text-[#159447]">
                      <Target size={19} />
                    </div>

                    <h3 className="font-semibold text-[#092752]">
                      Project Objectives
                    </h3>

                  </div>

                  <ul className="mt-4 space-y-3">

                    {[
                      "Optimize waste collection routes",
                      "Enable real-time vehicle tracking",
                      "Improve citizen complaint handling",
                      "Provide actionable analytics",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-[#159447]"
                        />

                        {item}
                      </li>
                    ))}

                  </ul>

                </div>

                {/* Recent Activity */}
                <div className="rounded-xl bg-slate-50 p-5">

                  <div className="flex items-center gap-3">

                    <div className="rounded-lg bg-blue-100 p-2 text-blue-600">
                      <Clock3 size={19} />
                    </div>

                    <h3 className="font-semibold text-[#092752]">
                      Recent Activity
                    </h3>

                  </div>

                  <div className="mt-4 space-y-4">

                    <div className="flex gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-[#159447]" />

                      <div>
                        <p className="text-sm font-medium text-slate-700">
                          Prototype dashboard updated
                        </p>

                        <p className="text-xs text-slate-400">
                          2 hours ago
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-[#159447]" />

                      <div>
                        <p className="text-sm font-medium text-slate-700">
                          Research document uploaded
                        </p>

                        <p className="text-xs text-slate-400">
                          Yesterday
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-[#159447]" />

                      <div>
                        <p className="text-sm font-medium text-slate-700">
                          Milestone updated
                        </p>

                        <p className="text-xs text-slate-400">
                          2 days ago
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          )}

          {/* =========================
              Team Tab
          ========================= */}

          {activeTab === "Team" && (
            <div className="space-y-5">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h2 className="text-lg font-bold text-[#092752]">
                    Student Team
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Manage students working on this project.
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
                >
                  <UserPlus size={17} />
                  Add Member
                </button>

              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-[#159447]">
                        {member.name.charAt(0)}
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-semibold text-[#092752]">
                          {member.name}
                        </h3>

                        <p className="mt-1 text-xs text-[#159447]">
                          {member.role}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {member.department}
                        </p>
                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          )}

          {/* =========================
              Milestones Tab
          ========================= */}

          {activeTab === "Milestones" && (
            <div className="space-y-5">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h2 className="text-lg font-bold text-[#092752]">
                    Project Milestones
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Track important project stages.
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#159447] px-4 py-2.5 text-sm font-semibold text-[#159447] transition hover:bg-green-50"
                >
                  <Plus size={17} />
                  Add Milestone
                </button>

              </div>

              <div className="space-y-4">

                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.title}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-4 sm:p-5"
                  >

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 font-bold text-[#159447]">
                        {index + 1}
                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                          <h3 className="font-semibold text-[#092752]">
                            {milestone.title}
                          </h3>

                          <span
                            className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                              milestone.status === "Completed"
                                ? "bg-green-100 text-green-700"
                                : milestone.status === "In Progress"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-slate-200 text-slate-600"
                            }`}
                          >
                            {milestone.status}
                          </span>

                        </div>

                        <div className="mt-3 flex items-center justify-between text-xs text-slate-500">

                          <span>
                            Due: {milestone.date}
                          </span>

                          <span className="font-semibold text-[#159447]">
                            {milestone.progress}%
                          </span>

                        </div>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">

                          <div
                            className="h-full rounded-full bg-[#159447]"
                            style={{
                              width: `${milestone.progress}%`,
                            }}
                          />

                        </div>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          )}

          {/* =========================
              Research Tab
          ========================= */}

          {activeTab === "Research" && (
            <div className="space-y-5">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h2 className="text-lg font-bold text-[#092752]">
                    Research & Documents
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Store and manage project research material.
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
                >
                  <Upload size={17} />
                  Upload Document
                </button>

              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

                {researchItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-5"
                  >

                    <div className="flex items-start gap-4">

                      <div className="rounded-xl bg-green-100 p-3 text-[#159447]">
                        <FileText size={21} />
                      </div>

                      <div className="min-w-0 flex-1">

                        <span className="text-xs font-semibold text-[#159447]">
                          {item.type}
                        </span>

                        <h3 className="mt-1 font-semibold text-[#092752]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>
          )}

          {/* =========================
              Prototype Tab
          ========================= */}

          {activeTab === "Prototype" && (
            <div className="space-y-5">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <h2 className="text-lg font-bold text-[#092752]">
                    Prototype Development
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Track the modules currently being developed.
                  </p>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
                >
                  <Plus size={17} />
                  Add Module
                </button>

              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                {prototypeModules.map((module, index) => (
                  <div
                    key={module}
                    className="rounded-xl border border-slate-100 bg-slate-50 p-5"
                  >

                    <div className="flex items-center justify-between">

                      <div className="rounded-xl bg-green-100 p-3 text-[#159447]">
                        <MonitorCog size={20} />
                      </div>

                      <span className="text-xs font-semibold text-slate-400">
                        Module {index + 1}
                      </span>

                    </div>

                    <h3 className="mt-4 font-semibold text-[#092752]">
                      {module}
                    </h3>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">

                      <div
                        className="h-full rounded-full bg-[#159447]"
                        style={{
                          width: `${[90, 75, 60, 50, 35][index]}%`,
                        }}
                      />

                    </div>

                    <p className="mt-2 text-xs text-slate-500">
                      {[90, 75, 60, 50, 35][index]}% completed
                    </p>

                  </div>
                ))}

              </div>

            </div>
          )}

          {/* =========================
              Testing Tab
          ========================= */}

          {activeTab === "Testing" && (
            <div className="space-y-5">

              <div>
                <h2 className="text-lg font-bold text-[#092752]">
                  Testing & Validation
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Monitor test cases and validation status.
                </p>
              </div>

              <div className="overflow-x-auto">

                <table className="w-full min-w-[600px]">

                  <thead>
                    <tr className="border-b border-slate-100 text-left">
                      <th className="px-4 py-3 text-xs font-semibold text-slate-500">
                        Test Case
                      </th>

                      <th className="px-4 py-3 text-xs font-semibold text-slate-500">
                        Status
                      </th>

                      <th className="px-4 py-3 text-xs font-semibold text-slate-500">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>

                    {testingItems.map((item) => (
                      <tr
                        key={item.name}
                        className="border-b border-slate-50"
                      >

                        <td className="px-4 py-4 text-sm font-medium text-[#092752]">
                          {item.name}
                        </td>

                        <td className="px-4 py-4">

                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                              item.status === "Passed"
                                ? "bg-green-50 text-green-700"
                                : item.status === "In Progress"
                                ? "bg-blue-50 text-blue-700"
                                : "bg-orange-50 text-orange-700"
                            }`}
                          >
                            {item.status === "Passed" && (
                              <CheckCircle2 size={14} />
                            )}

                            {item.status}
                          </span>

                        </td>

                        <td className="px-4 py-4">

                          <button
                            type="button"
                            className="text-xs font-semibold text-[#159447] hover:underline"
                          >
                            View Details
                          </button>

                        </td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>
          )}

          {/* =========================
              Submission Tab
          ========================= */}

          {activeTab === "Submission" && (
            <div className="space-y-6">

              <div>
                <h2 className="text-lg font-bold text-[#092752]">
                  Final Submission
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Submit your final solution for evaluation.
                </p>
              </div>

              {/* Submission checklist */}
              <div className="rounded-xl bg-green-50 p-5">

                <h3 className="font-semibold text-[#092752]">
                  Submission Checklist
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {[
                    "Project documentation",
                    "Source code",
                    "Prototype/demo",
                    "Testing report",
                    "Presentation",
                    "Team details",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <CheckCircle2
                        size={17}
                        className="text-[#159447]"
                      />

                      {item}
                    </div>
                  ))}

                </div>

              </div>

              {/* Upload area */}
              <div className="rounded-xl border-2 border-dashed border-slate-200 p-8 text-center">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-[#159447]">
                  <Upload size={25} />
                </div>

                <h3 className="mt-4 font-semibold text-[#092752]">
                  Upload Final Solution
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Upload project files, documentation and supporting
                  materials.
                </p>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#159447] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
                >
                  <Upload size={17} />
                  Choose Files
                </button>

              </div>

              {/* Submit button */}
              <div className="flex justify-end">

                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#092752] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#071d3e]"
                >
                  <Send size={17} />
                  Submit Solution
                </button>

              </div>

            </div>
          )}

        </div>

      </section>

      {/* =========================
          Mentor Communication
      ========================= */}

      <section className="rounded-2xl bg-[#092752] p-5 text-white sm:p-6">

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-white/10 p-3">
              <MessageSquare size={21} />
            </div>

            <div>
              <h3 className="font-bold">
                Need help with your project?
              </h3>

              <p className="mt-1 text-sm text-slate-300">
                Contact your faculty mentor for guidance and feedback.
              </p>
            </div>

          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#092752] transition hover:bg-slate-100"
          >
            <MessageSquare size={17} />
            Contact Mentor
          </button>

        </div>

      </section>

    </div>
  );
};

export default ProjectWorkspace;