import React, { useMemo, useState } from "react";
import {
  Search,
  BookOpen,
  FileText,
  Video,
  Download,
  ExternalLink,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  LifeBuoy,
  Mail,
  Phone,
  X,
} from "lucide-react";

const resources = [
  {
    id: 1,
    title: "Industry Partner Guide",
    description:
      "Complete guide for industry partners to participate in challenges and manage projects.",
    category: "Guides",
    type: "PDF",
    size: "2.4 MB",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Project Submission Guidelines",
    description:
      "Learn about submission requirements, evaluation criteria and documentation standards.",
    category: "Guides",
    type: "PDF",
    size: "1.8 MB",
    icon: FileText,
  },
  {
    id: 3,
    title: "Managing Industry Projects",
    description:
      "Step-by-step tutorial for managing teams, milestones, mentors and project submissions.",
    category: "Tutorials",
    type: "Video",
    size: "12 min",
    icon: Video,
  },
  {
    id: 4,
    title: "Mentor Collaboration Guide",
    description:
      "Best practices for working with university mentors and expert teams.",
    category: "Guides",
    type: "PDF",
    size: "1.2 MB",
    icon: BookOpen,
  },
  {
    id: 5,
    title: "Evaluation & Scoring Framework",
    description:
      "Understand how project solutions are evaluated and scored on the platform.",
    category: "Documentation",
    type: "PDF",
    size: "980 KB",
    icon: FileText,
  },
  {
    id: 6,
    title: "Platform Walkthrough",
    description:
      "Quick video walkthrough covering the major features of the Industry Portal.",
    category: "Tutorials",
    type: "Video",
    size: "8 min",
    icon: Video,
  },
];

const faqs = [
  {
    question: "How do I accept a challenge?",
    answer:
      "Open Available Challenges, select the challenge you want to work on and click Accept Challenge. After acceptance, the challenge will appear under My Projects.",
  },
  {
    question: "How can I add members to my project?",
    answer:
      "Open your project workspace and go to the Team section. From there you can manage project members and view the assigned expert team.",
  },
  {
    question: "Where can I track project milestones?",
    answer:
      "You can track milestones from the Project Workspace or use the Milestones & Progress section to see progress across all active projects.",
  },
  {
    question: "How do I submit a final solution?",
    answer:
      "Open the relevant project workspace, complete the submission checklist, upload the required documents and submit the solution for review.",
  },
  {
    question: "What happens when a submission needs revision?",
    answer:
      "The reviewer will provide feedback explaining the required changes. You can review the feedback from Submissions and update the project before resubmitting.",
  },
  {
    question: "How can I contact platform support?",
    answer:
      "You can contact the support team using the email address or phone number provided in the Contact Support section on this page.",
  },
];

const SupportResources = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);

  const categories = [
    "All",
    "Guides",
    "Tutorials",
    "Documentation",
  ];

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const searchText =
        `${resource.title} ${resource.description}`.toLowerCase();

      const matchesSearch = searchText.includes(
        search.toLowerCase()
      );

      const matchesCategory =
        category === "All" || resource.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
          Support & Resources
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Guides, tutorials and support resources to help you
          manage your industry projects
        </p>
      </div>

      {/* Search */}
      <div className="rounded-xl bg-[#092752] p-5 sm:p-7">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            How can we help you?
          </h2>

          <p className="mt-2 text-sm text-slate-300">
            Search guides, documentation and frequently asked
            questions
          </p>

          <div className="relative mt-5">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for help..."
              className="w-full rounded-xl border-0 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-700 outline-none ring-0 placeholder:text-slate-400"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              category === item
                ? "bg-[#159447] text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Resources */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#092752]">
              Helpful Resources
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Everything you need to get the most out of the
              Industry Portal
            </p>
          </div>

          <span className="hidden text-sm text-slate-400 sm:block">
            {filteredResources.length} resources
          </span>
        </div>

        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteredResources.map((resource) => {
              const Icon = resource.icon;

              return (
                <div
                  key={resource.id}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50">
                      <Icon className="h-5 w-5 text-[#159447]" />
                    </div>

                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                      {resource.category}
                    </span>
                  </div>

                  <h3 className="mt-4 font-bold text-[#092752]">
                    {resource.title}
                  </h3>

                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
                    {resource.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs text-slate-400">
                      {resource.type} · {resource.size}
                    </span>

                    <button
                      onClick={() =>
                        setSelectedResource(resource)
                      }
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#159447] hover:underline"
                    >
                      {resource.type === "Video"
                        ? "Watch"
                        : "View"}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white py-14 text-center">
            <Search className="mx-auto h-9 w-9 text-slate-300" />

            <h3 className="mt-3 font-semibold text-slate-700">
              No resources found
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Try another search term or category.
            </p>
          </div>
        )}
      </section>

      {/* FAQ */}
      <section>
        <div className="mb-4">
          <h2 className="text-lg font-bold text-[#092752]">
            Frequently Asked Questions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Quick answers to common questions
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={faq.question}
                className="border-b border-slate-200 last:border-0"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 shrink-0 text-[#159447]" />

                    <span className="text-sm font-semibold text-slate-700">
                      {faq.question}
                    </span>
                  </div>

                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 shrink-0 text-slate-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pl-12">
                    <p className="text-sm leading-6 text-slate-500">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact support */}
      <section className="rounded-xl border border-green-100 bg-green-50 p-5 sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white">
                <LifeBuoy className="h-5 w-5 text-[#159447]" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#092752]">
                  Still need help?
                </h2>

                <p className="text-sm text-slate-500">
                  Our support team is here to help you.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#092752] shadow-sm transition hover:bg-slate-50">
              <Mail className="h-4 w-4" />
              Email Support
            </button>

            <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]">
              <MessageCircle className="h-4 w-4" />
              Contact Support
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-green-200 pt-4 text-sm text-slate-500 sm:flex-row sm:gap-6">
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-[#159447]" />
            support@sociosolve.in
          </span>

          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#159447]" />
            +91 1800-123-4567
          </span>
        </div>
      </section>

      {/* Resource Modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-200 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50">
                  <selectedResource.icon className="h-5 w-5 text-[#159447]" />
                </div>

                <div>
                  <h2 className="font-bold text-[#092752]">
                    {selectedResource.title}
                  </h2>

                  <p className="text-xs text-slate-400">
                    {selectedResource.type} ·{" "}
                    {selectedResource.size}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedResource(null)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5">
              <p className="text-sm leading-7 text-slate-600">
                {selectedResource.description}
              </p>

              <div className="mt-5 rounded-lg bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Resource Type
                  </span>

                  <span className="text-sm font-semibold text-slate-700">
                    {selectedResource.type}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Category
                  </span>

                  <span className="text-sm font-semibold text-slate-700">
                    {selectedResource.category}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Size / Duration
                  </span>

                  <span className="text-sm font-semibold text-slate-700">
                    {selectedResource.size}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 border-t border-slate-200 p-5">
              <button
                onClick={() => setSelectedResource(null)}
                className="flex-1 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                Close
              </button>

              <button
                onClick={() => setSelectedResource(null)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
              >
                {selectedResource.type === "Video" ? (
                  <>
                    <Video className="h-4 w-4" />
                    Watch Video
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    Open Resource
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportResources;