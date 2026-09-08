import React, { useState } from "react";
import {
  BookOpen,
  FileText,
  HelpCircle,
  MessageCircle,
  Search,
  ExternalLink,
  Download,
  Video,
  Lightbulb,
  ChevronDown,
} from "lucide-react";

const SupportResources = () => {
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  const resources = [
    {
      title: "University Portal Guide",
      description:
        "Complete guide to managing challenges, projects and student teams.",
      type: "Guide",
      icon: BookOpen,
    },
    {
      title: "Project Development Handbook",
      description:
        "Learn how to plan, develop, test and submit your project.",
      type: "PDF",
      icon: FileText,
    },
    {
      title: "Submission Guidelines",
      description:
        "Important instructions and requirements for final submissions.",
      type: "Guidelines",
      icon: FileText,
    },
    {
      title: "Project Workspace Tutorial",
      description:
        "Step-by-step guide for using the project workspace.",
      type: "Video",
      icon: Video,
    },
  ];

  const faqs = [
    {
      question: "How can I start a new project?",
      answer:
        "Go to Recommended Challenges, open a suitable challenge and click Start Project. The project will then appear in My Projects.",
    },
    {
      question: "How can I add students to a team?",
      answer:
        "Open Student Teams from the sidebar and use the team management options to view and manage your student teams.",
    },
    {
      question: "Where can I submit my project?",
      answer:
        "Open your project workspace and go to the Submission tab. Upload the required files and submit the final solution.",
    },
    {
      question: "How can I contact a faculty mentor?",
      answer:
        "Open Faculty Mentors from the sidebar. You can search mentors by department and view their available contact options.",
    },
    {
      question: "What should I do if I face a technical issue?",
      answer:
        "You can use the support options on this page or contact the platform support team for assistance.",
    },
  ];

  const filteredResources = resources.filter((resource) =>
    `${resource.title} ${resource.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
          Support & Resources
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Find guides, tutorials and support for your university projects.
        </p>
      </div>

      {/* Search */}
      <div className="rounded-xl bg-[#092752] p-5 sm:p-6">
        <div className="max-w-2xl">
          <h2 className="text-lg font-semibold text-white">
            How can we help?
          </h2>

          <p className="mt-1 text-sm text-slate-300">
            Search guides, tutorials and helpful resources.
          </p>

          <div className="relative mt-4">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search resources..."
              className="w-full rounded-lg border-0 bg-white py-3 pl-11 pr-4 text-sm text-slate-700 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Quick Support */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#159447]/10 text-[#159447]">
            <HelpCircle size={22} />
          </div>

          <h3 className="mt-4 font-semibold text-[#092752]">
            Help Center
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Find answers to common questions about the university portal.
          </p>

          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#159447] hover:text-[#117C3B]"
          >
            Visit Help Center
            <ExternalLink size={15} />
          </button>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#159447]/10 text-[#159447]">
            <MessageCircle size={22} />
          </div>

          <h3 className="mt-4 font-semibold text-[#092752]">
            Contact Support
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Need help with something? Contact our support team.
          </p>

          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#159447] hover:text-[#117C3B]"
          >
            Contact Support
            <ExternalLink size={15} />
          </button>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#159447]/10 text-[#159447]">
            <Lightbulb size={22} />
          </div>

          <h3 className="mt-4 font-semibold text-[#092752]">
            Project Tips
          </h3>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Get useful tips for building better solutions and projects.
          </p>

          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#159447] hover:text-[#117C3B]"
          >
            View Tips
            <ExternalLink size={15} />
          </button>
        </div>
      </div>

      {/* Resources */}
      <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-[#092752]">
              Helpful Resources
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Guides and materials to help you complete your projects.
            </p>
          </div>

          <BookOpen
            size={21}
            className="text-[#159447]"
          />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          {filteredResources.map((resource) => {
            const Icon = resource.icon;

            return (
              <div
                key={resource.title}
                className="rounded-xl border border-slate-200 p-4 transition hover:border-[#159447]/40 hover:shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#159447]/10 text-[#159447]">
                    <Icon size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-semibold text-[#092752]">
                        {resource.title}
                      </h3>

                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-500">
                        {resource.type}
                      </span>
                    </div>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {resource.description}
                    </p>

                    <button
                      type="button"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#159447] hover:text-[#117C3B]"
                    >
                      {resource.type === "PDF"
                        ? "Download"
                        : "Open Resource"}

                      {resource.type === "PDF" ? (
                        <Download size={15} />
                      ) : (
                        <ExternalLink size={15} />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="py-10 text-center">
            <Search
              size={28}
              className="mx-auto text-slate-300"
            />

            <p className="mt-3 text-sm font-medium text-slate-600">
              No resources found
            </p>

            <p className="mt-1 text-xs text-slate-400">
              Try searching with a different keyword.
            </p>
          </div>
        )}
      </div>

      {/* FAQ */}
      <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
        <div>
          <h2 className="font-semibold text-[#092752]">
            Frequently Asked Questions
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Quick answers to common university portal questions.
          </p>
        </div>

        <div className="mt-5 divide-y divide-slate-100">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-sm font-medium text-[#092752]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-400 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-4 pr-8">
                    <p className="text-sm leading-6 text-slate-500">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Support Banner */}
      <div className="rounded-xl bg-green-50 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <MessageCircle
              size={22}
              className="mt-0.5 shrink-0 text-[#159447]"
            />

            <div>
              <h3 className="font-semibold text-[#092752]">
                Still need help?
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Our support team is available to help you with portal
                related issues.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="rounded-lg bg-[#159447] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
          >
            Get Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportResources;