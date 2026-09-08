import React, { useMemo, useState } from "react";
import {
    Search,
    Plus,
    Filter,
    Eye,
    Edit3,
    MoreVertical,
    ClipboardList,
} from "lucide-react";

const challenges = [
    {
        id: 1,
        title: "Smart Water Management",
        department: "Urban Development",
        category: "Smart City",
        deadline: "30 Sep 2026",
        projects: 4,
        status: "Active",
        description:
            "Develop a technology-driven solution for monitoring and managing urban water usage.",
    },
    {
        id: 2,
        title: "Rural Healthcare Monitoring",
        department: "Health Department",
        category: "Healthcare",
        deadline: "15 Oct 2026",
        projects: 3,
        status: "Active",
        description:
            "Create an affordable digital platform for remote healthcare monitoring in rural areas.",
    },
    {
        id: 3,
        title: "Digital Agriculture Platform",
        department: "Agriculture Department",
        category: "Agriculture",
        deadline: "25 Oct 2026",
        projects: 5,
        status: "Active",
        description:
            "Build a platform that helps farmers access agricultural information and services.",
    },
    {
        id: 4,
        title: "Smart Traffic Management",
        department: "Transport Department",
        category: "Transportation",
        deadline: "10 Nov 2026",
        projects: 2,
        status: "Under Review",
        description:
            "Develop an intelligent traffic management solution for major urban areas.",
    },
    {
        id: 5,
        title: "Waste Management & Recycling",
        department: "Environment Department",
        category: "Environment",
        deadline: "20 Nov 2026",
        projects: 3,
        status: "Active",
        description:
            "Improve waste collection, segregation and recycling using digital technologies.",
    },
    {
        id: 6,
        title: "Digital Education Access",
        department: "Education Department",
        category: "Education",
        deadline: "05 Dec 2026",
        projects: 1,
        status: "Draft",
        description:
            "Create solutions to improve access to quality digital education across Jharkhand.",
    },
];

const Challenges = () => {
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All");
    const [department, setDepartment] = useState("All");

    const filteredChallenges = useMemo(() => {
        return challenges.filter((challenge) => {
            const matchesSearch =
                challenge.title.toLowerCase().includes(search.toLowerCase()) ||
                challenge.department.toLowerCase().includes(search.toLowerCase()) ||
                challenge.category.toLowerCase().includes(search.toLowerCase());

            const matchesStatus =
                status === "All" || challenge.status === status;

            const matchesDepartment =
                department === "All" ||
                challenge.department === department;

            return matchesSearch && matchesStatus && matchesDepartment;
        });
    }, [search, status, department]);

    const handleCreateChallenge = () => {
        alert("Create Challenge page will be connected next.");
    };
    
    const handleView = (challenge) => {
        window.location.href = `/government/challenges/${challenge.id}`;
    };

    const handleEdit = (challenge) => {
        alert(`Editing: ${challenge.title}`);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
                        Challenges
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage government challenges and innovation problems.
                    </p>
                </div>

                <button
                    onClick={handleCreateChallenge}
                    className="flex w-fit items-center gap-2 rounded-xl bg-[#159447] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#117C3B]"
                >
                    <Plus className="h-5 w-5" />
                    Create Challenge
                </button>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-slate-500">
                                Total Challenges
                            </p>

                            <h2 className="mt-2 text-3xl font-bold text-[#092752]">
                                42
                            </h2>
                        </div>

                        <div className="rounded-xl bg-[#EAF7EF] p-3">
                            <ClipboardList className="h-6 w-6 text-[#159447]" />
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
                    <p className="text-sm text-slate-500">Active Challenges</p>

                    <h2 className="mt-2 text-3xl font-bold text-[#159447]">
                        28
                    </h2>

                    <p className="mt-1 text-xs text-slate-400">
                        Currently accepting solutions
                    </p>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
                    <p className="text-sm text-slate-500">
                        Under Review
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-amber-600">
                        06
                    </h2>

                    <p className="mt-1 text-xs text-slate-400">
                        Awaiting government approval
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4">
                <div className="flex flex-col gap-3 lg:flex-row">
                    {/* Search */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                        <input
                            type="text"
                            placeholder="Search challenges, departments..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-xl border border-[#E2E8F0] py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#159447]"
                        />
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-2">
                        <Filter className="hidden h-5 w-5 text-slate-400 sm:block" />

                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-[#159447]"
                        >
                            <option value="All">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Under Review">Under Review</option>
                            <option value="Draft">Draft</option>
                        </select>
                    </div>

                    {/* Department */}
                    <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-[#159447]"
                    >
                        <option value="All">All Departments</option>
                        <option value="Urban Development">
                            Urban Development
                        </option>
                        <option value="Health Department">
                            Health Department
                        </option>
                        <option value="Agriculture Department">
                            Agriculture Department
                        </option>
                        <option value="Transport Department">
                            Transport Department
                        </option>
                        <option value="Environment Department">
                            Environment Department
                        </option>
                        <option value="Education Department">
                            Education Department
                        </option>
                    </select>
                </div>
            </div>

            {/* Challenge List */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white">
                <div className="border-b border-[#E2E8F0] px-5 py-4">
                    <h2 className="font-bold text-[#092752]">
                        Government Challenges
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                        Showing {filteredChallenges.length} challenges
                    </p>
                </div>

                <div className="divide-y divide-[#E2E8F0]">
                    {filteredChallenges.length > 0 ? (
                        filteredChallenges.map((challenge) => (
                            <div
                                key={challenge.id}
                                className="p-5 transition hover:bg-slate-50"
                            >
                                <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                                    {/* Challenge Info */}
                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <h3 className="font-bold text-[#092752]">
                                                {challenge.title}
                                            </h3>

                                            <span
                                                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${challenge.status === "Active"
                                                        ? "bg-[#EAF7EF] text-[#159447]"
                                                        : challenge.status === "Under Review"
                                                            ? "bg-amber-50 text-amber-700"
                                                            : "bg-slate-100 text-slate-600"
                                                    }`}
                                            >
                                                {challenge.status}
                                            </span>
                                        </div>

                                        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                                            {challenge.description}
                                        </p>

                                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
                                            <span>
                                                <strong className="text-slate-700">
                                                    Department:
                                                </strong>{" "}
                                                {challenge.department}
                                            </span>

                                            <span>
                                                <strong className="text-slate-700">
                                                    Category:
                                                </strong>{" "}
                                                {challenge.category}
                                            </span>

                                            <span>
                                                <strong className="text-slate-700">
                                                    Deadline:
                                                </strong>{" "}
                                                {challenge.deadline}
                                            </span>

                                            <span>
                                                <strong className="text-slate-700">
                                                    Projects:
                                                </strong>{" "}
                                                {challenge.projects}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleView(challenge)}
                                            className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-[#159447] hover:text-[#159447]"
                                        >
                                            <Eye className="h-4 w-4" />
                                            <span className="hidden sm:inline">
                                                View
                                            </span>
                                        </button>

                                        <button
                                            onClick={() => handleEdit(challenge)}
                                            className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-[#159447] hover:text-[#159447]"
                                        >
                                            <Edit3 className="h-4 w-4" />
                                            <span className="hidden sm:inline">
                                                Edit
                                            </span>
                                        </button>

                                        <button className="rounded-lg border border-[#E2E8F0] p-2 text-slate-500 transition hover:border-[#159447] hover:text-[#159447]">
                                            <MoreVertical className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="p-10 text-center">
                            <ClipboardList className="mx-auto h-10 w-10 text-slate-300" />

                            <h3 className="mt-3 font-semibold text-[#092752]">
                                No challenges found
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                Try changing your search or filters.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Challenges;