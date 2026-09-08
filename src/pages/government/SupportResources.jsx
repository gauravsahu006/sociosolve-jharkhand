import React, { useMemo, useState } from "react";
import {
  Search,
  BookOpen,
  FileText,
  GraduationCap,
  ShieldCheck,
  HelpCircle,
  Download,
  Eye,
  Headphones,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";

const resourcesData = [
  {
    id: 1,
    title: "Government Portal User Guidelines",
    category: "Guidelines",
    description:
      "Complete guide for managing challenges, projects, assignments and government activities.",
    format: "PDF",
    updated: "02 Sep 2026",
    size: "2.4 MB",
  },
  {
    id: 2,
    title: "Challenge Creation Template",
    category: "Templates",
    description:
      "Standard template for creating and publishing new industry problem statements.",
    format: "DOCX",
    updated: "28 Aug 2026",
    size: "840 KB",
  },
  {
    id: 3,
    title: "Project Monitoring Guide",
    category: "Guidelines",
    description:
      "Guide for tracking project milestones, progress and implementation status.",
    format: "PDF",
    updated: "25 Aug 2026",
    size: "1.8 MB",
  },
  {
    id: 4,
    title: "Government Officer Training Module",
    category: "Training",
    description:
      "Training material covering the complete SocioSolve government workflow.",
    format: "PDF",
    updated: "20 Aug 2026",
    size: "4.2 MB",
  },
  {
    id: 5,
    title: "University Coordination Checklist",
    category: "Templates",
    description:
      "Checklist for coordinating universities, student teams and faculty mentors.",
    format: "XLSX",
    updated: "18 Aug 2026",
    size: "620 KB",
  },
  {
    id: 6,
    title: "Industry Partnership Policy",
    category: "Policy",
    description:
      "Policy framework for government-industry collaboration and project participation.",
    format: "PDF",
    updated: "15 Aug 2026",
    size: "3.1 MB",
  },
  {
    id: 7,
    title: "Submission Review SOP",
    category: "Guidelines",
    description:
      "Standard operating procedure for reviewing and approving project submissions.",
    format: "PDF",
    updated: "12 Aug 2026",
    size: "1.5 MB",
  },
  {
    id: 8,
    title: "Frequently Asked Questions",
    category: "FAQ",
    description:
      "Answers to common questions related to government portal operations.",
    format: "PDF",
    updated: "10 Aug 2026",
    size: "980 KB",
  },
];

const categories = [
  "All",
  "Guidelines",
  "Templates",
  "Training",
  "Policy",
  "FAQ",
];

const categoryIcons = {
  Guidelines: BookOpen,
  Templates: FileText,
  Training: GraduationCap,
  Policy: ShieldCheck,
  FAQ: HelpCircle,
};

const SupportResources = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredResources = useMemo(() => {
    return resourcesData.filter((resource) => {
      const matchesSearch =
        resource.title.toLowerCase().includes(search.toLowerCase()) ||
        resource.description.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || resource.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const handleView = (resource) => {
    alert(`Opening ${resource.title}`);
  };

  const handleDownload = (resource) => {
    alert(`Downloading ${resource.title}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#092752]">
          Support & Resources
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Access guidelines, templates, training material and support resources.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Total Resources</p>
              <h3 className="mt-2 text-2xl font-bold text-[#092752]">18</h3>
            </div>
            <div className="rounded-lg bg-green-50 p-3 text-[#159447]">
              <BookOpen size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Guidelines</p>
              <h3 className="mt-2 text-2xl font-bold text-[#092752]">06</h3>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
              <BookOpen size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Templates</p>
              <h3 className="mt-2 text-2xl font-bold text-[#092752]">05</h3>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 text-orange-600">
              <FileText size={22} />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Training</p>
              <h3 className="mt-2 text-2xl font-bold text-[#092752]">04</h3>
            </div>
            <div className="rounded-lg bg-purple-50 p-3 text-purple-600">
              <GraduationCap size={22} />
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#159447]"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition ${
                  category === item
                    ? "bg-[#159447] text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resources */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#092752]">
              Available Resources
            </h2>
            <p className="text-sm text-slate-500">
              {filteredResources.length} resources found
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {filteredResources.map((resource) => {
            const Icon = categoryIcons[resource.category] || FileText;

            return (
              <div
                key={resource.id}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-green-50 text-[#159447]">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-semibold text-[#092752]">
                        {resource.title}
                      </h3>

                      <span className="mt-2 inline-flex rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-[#159447]">
                        {resource.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {resource.description}
                </p>

                <div className="mt-4 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4 text-xs">
                  <div>
                    <p className="text-slate-400">Format</p>
                    <p className="mt-1 font-medium text-slate-700">
                      {resource.format}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400">Updated</p>
                    <p className="mt-1 font-medium text-slate-700">
                      {resource.updated}
                    </p>
                  </div>

                  <div>
                    <p className="text-slate-400">Size</p>
                    <p className="mt-1 font-medium text-slate-700">
                      {resource.size}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex gap-3">
                  <button
                    onClick={() => handleView(resource)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    <Eye size={16} />
                    View
                  </button>

                  <button
                    onClick={() => handleDownload(resource)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#159447] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#117C3B]"
                  >
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredResources.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white py-12 text-center">
            <FileText className="mx-auto text-slate-400" size={36} />
            <h3 className="mt-3 font-semibold text-[#092752]">
              No resources found
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or category filter.
            </p>
          </div>
        )}
      </div>

      {/* Help Center */}
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="rounded-xl bg-[#092752] p-6 text-white lg:col-span-1">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
            <Headphones size={22} />
          </div>

          <h3 className="mt-4 text-lg font-semibold">Help Center</h3>

          <p className="mt-2 text-sm leading-6 text-slate-300">
            Need help with the Government Portal? Browse support resources or
            contact our support team.
          </p>

          <button
            onClick={() => alert("Opening Help Center")}
            className="mt-5 flex items-center gap-2 text-sm font-medium text-white hover:underline"
          >
            Visit Help Center
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50 text-[#159447]">
            <Mail size={21} />
          </div>

          <h3 className="mt-4 font-semibold text-[#092752]">
            Email Support
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Get assistance through our official support email.
          </p>

          <a
            href="mailto:support@sociosolve.in"
            className="mt-4 inline-block text-sm font-medium text-[#159447]"
          >
            support@sociosolve.in
          </a>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Phone size={21} />
          </div>

          <h3 className="mt-4 font-semibold text-[#092752]">
            Contact Support
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Contact the SocioSolve support team for technical assistance.
          </p>

          <button
            onClick={() => alert("Support contact: +91 1800-123-4567")}
            className="mt-4 text-sm font-medium text-[#159447]"
          >
            +91 1800-123-4567
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportResources;