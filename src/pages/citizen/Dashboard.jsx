import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";

import { auth } from "../../firebase/auth";
import { db } from "../../firebase/firestore";

function Dashboard() {
    const [citizenName, setCitizenName] = useState("Citizen");

    const [problems, setProblems] = useState([]);

    const [stats, setStats] = useState({
        total: 0,
        inReview: 0,
        inProgress: 0,
        resolved: 0,
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadDashboard = async () => {
            const user = auth.currentUser;

            if (!user) {
                setLoading(false);
                return;
            }

            try {
                // =========================
                // CITIZEN PROFILE
                // =========================
                const userDoc = await getDoc(
                    doc(db, "users", user.uid)
                );

                if (userDoc.exists()) {
                    const userData = userDoc.data();

                    if (userData.fullName) {
                        setCitizenName(userData.fullName);
                    }
                }

                // =========================
                // CITIZEN PROBLEMS
                // =========================
                const problemsRef = collection(db, "problems");

                const q = query(
                    problemsRef,
                    where("citizenId", "==", user.uid)
                );

                const snapshot = await getDocs(q);

                const fetchedProblems = snapshot.docs.map((problemDoc) => ({
                    id: problemDoc.id,
                    ...problemDoc.data(),
                }));

                // Latest problems first
                fetchedProblems.sort((a, b) => {
                    const dateA = new Date(
                        a.submittedAt || 0
                    ).getTime();

                    const dateB = new Date(
                        b.submittedAt || 0
                    ).getTime();

                    return dateB - dateA;
                });

                setProblems(fetchedProblems);

                // =========================
                // REAL COUNTS
                // =========================
                const total = fetchedProblems.length;

                const inReview = fetchedProblems.filter(
                    (problem) =>
                        problem.status === "under_review"
                ).length;

                const inProgress = fetchedProblems.filter(
                    (problem) =>
                        problem.status === "assigned" ||
                        problem.status === "in_progress"
                ).length;

                const resolved = fetchedProblems.filter(
                    (problem) =>
                        problem.status === "resolved"
                ).length;

                setStats({
                    total,
                    inReview,
                    inProgress,
                    resolved,
                });

            } catch (error) {
                console.error(
                    "Citizen dashboard Firebase error:",
                    error
                );
            } finally {
                setLoading(false);
            }
        };

        loadDashboard();

         }, []);  
    
    return (

        <div className="min-h-screen bg-[#f5f8f7]">

            {/* ================= MAIN DASHBOARD ================= */}
            <div className="overflow-hidden rounded-b-xl rounded-tr-xl border border-[#aebdca] bg-white shadow-sm">

                <div className="grid min-h-[650px] grid-cols-1 lg:grid-cols-[260px_1fr]">

                    {/* ================================================= */}
                    {/* SIDEBAR */}
                    {/* ================================================= */}
                    <aside className="border-b border-[#e0e6e9] bg-white lg:border-b-0 lg:border-r">

                        {/* Logo */}
                        <div className="px-7 pb-6 pt-7 text-center lg:text-left">
                            <div className="text-[24px] font-bold tracking-tight">
                                <span className="text-[#063b70]">Socio</span>
                                <span className="text-[#07915f]">Solve</span>
                            </div>

                            <p className="-mt-1 text-[11px] font-semibold text-[#07915f]">
                                Jharkhand
                            </p>
                        </div>

                        {/* Navigation */}
                        <nav className="px-4">

                            <NavItem
                                icon="▣"
                                text="Dashboard"
                                active
                            />

                            <Link to="/citizen/report">
                                <NavItem
                                    icon="◉"
                                    text="Report a Problem"
                                />
                            </Link>

                            <Link to="/citizen/problems">
                                <NavItem
                                    icon="▣"
                                    text="My Problems"
                                />
                            </Link>

                            <Link to="/citizen/notifications">
                                <NavItem
                                    icon="♧"
                                    text="Notifications"
                                    badge="3"
                                />
                            </Link>

                            <Link to="/citizen/profile">
                                <NavItem
                                    icon="♙"
                                    text="Profile"
                                />
                            </Link>

                            <Link to="/citizen/help">
                                <NavItem
                                    icon="?"
                                    text="Help & Support"
                                />
                            </Link>

                            <Link to="/">
                                <NavItem
                                    icon="↪"
                                    text="Logout"
                                />
                            </Link>

                        </nav>
                    </aside>

                    {/* ================================================= */}
                    {/* CONTENT */}
                    {/* ================================================= */}
                    <main className="bg-white p-5 sm:p-7 lg:p-8">

                        {/* Header */}
                        <div className="mb-7 flex items-start justify-between">

                            <div>
                                <h1 className="text-[23px] font-bold text-[#082e5c] sm:text-[26px]">
    Hello, {citizenName} 👋
</h1>

                                <p className="mt-1 text-xs text-[#69757d] sm:text-sm">
                                    Thank you for being a part of change!
                                </p>
                            </div>

                            {/* Notification */}
                            <button className="relative mt-1 text-2xl text-[#263746]">
                                ♧

                                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#df302f] text-[9px] font-bold text-white">
                                    3
                                </span>
                            </button>

                        </div>

                        {/* ================================================= */}
                        {/* STAT CARDS */}
                        {/* ================================================= */}
                        <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">

    <StatCard
        title="Total Problems"
        number={loading ? "..." : stats.total}
        description="Reported by you"
        numberClass="text-[#111827]"
    />

    <StatCard
        title="In Review"
        number={loading ? "..." : stats.inReview}
        description="Under verification"
        numberClass="text-[#111827]"
        titleClass="text-[#c47a19]"
    />

    <StatCard
        title="In Progress"
        number={loading ? "..." : stats.inProgress}
        description="Assigned & working"
        numberClass="text-[#1269bd]"
    />

    <StatCard
        title="Resolved"
        number={loading ? "..." : stats.resolved}
        description="Successfully resolved"
        numberClass="text-[#07915f]"
        titleClass="text-[#07915f]"
    />

</div>

                        {/* ================================================= */}
                        {/* RECENT + QUICK ACTIONS */}
                        {/* ================================================= */}
                        <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[1fr_240px]">

                            {/* Recent Updates */}
                            <div className="rounded-xl border border-[#dce4e8] bg-white p-4 sm:p-5">

                                <h2 className="mb-5 text-sm font-bold text-[#082e5c] sm:text-base">
                                    Recent Updates
                                </h2>

                                <div className="space-y-5">

    {loading ? (
        <p className="text-sm text-[#68747c]">
            Loading recent updates...
        </p>
    ) : problems.length === 0 ? (
        <p className="text-sm text-[#68747c]">
            No problems reported yet.
        </p>
    ) : (
        problems.slice(0, 3).map((problem) => (
            <UpdateItem
                key={problem.id}
                icon={
                    problem.status === "resolved"
                        ? "✓"
                        : problem.status === "verified"
                        ? "◎"
                        : problem.status === "assigned"
                        ? "⊙"
                        : problem.status === "in_progress"
                        ? "◷"
                        : "○"
                }
                text={getProblemUpdateText(problem)}
                time={getTimeAgo(problem.submittedAt)}
            />
        ))
    )}

</div>

                            </div>

                            {/* Quick Actions */}
                            <div className="rounded-xl border border-[#dce4e8] bg-white p-4 sm:p-5">

                                <h2 className="mb-5 text-sm font-bold text-[#082e5c] sm:text-base">
                                    Quick Actions
                                </h2>

                                <div className="space-y-4">

                                    <Link
                                        to="/citizen/report"
                                        className="flex h-12 items-center justify-center rounded-md bg-[#07915f] text-sm font-semibold text-white transition hover:bg-[#067b51]"
                                    >
                                        Report a Problem
                                    </Link>

                                    <Link
                                        to="/citizen/problems"
                                        className="flex h-12 items-center justify-center rounded-md border border-[#8db3a6] bg-white text-sm font-semibold text-[#26705b] transition hover:bg-[#f1f8f5]"
                                    >
                                        View My Problems
                                    </Link>

                                </div>

                            </div>

                        </div>

                        {/* Bottom decorative area */}
                        <div className="relative mt-7 h-20 overflow-hidden rounded-lg bg-gradient-to-t from-[#e2f0e8] to-white">

                            <div className="absolute -bottom-8 left-[-5%] h-20 w-[35%] rounded-[50%] bg-[#d6eadd]" />

                            <div className="absolute -bottom-10 left-[25%] h-24 w-[40%] rounded-[50%] bg-[#e5f1ea]" />

                            <div className="absolute -bottom-9 right-[-5%] h-24 w-[35%] rounded-[50%] bg-[#d6eadd]" />

                            <div className="absolute bottom-1 right-3 text-4xl">
                                🌳
                            </div>

                            <div className="absolute bottom-0 right-12 text-3xl">
                                🏙️
                            </div>

                            <div className="absolute bottom-1 left-8 text-3xl">
                                🌳
                            </div>

                        </div>

                    </main>
                </div>
            </div>
        </div>

    );
}


function getProblemUpdateText(problem) {
    const title = problem.title || "Your problem";

    switch (problem.status) {
        case "submitted":
            return `Your problem "${title}" has been submitted and is awaiting review.`;

        case "under_review":
            return `Your problem "${title}" is currently under verification.`;

        case "verified":
            return `Your problem "${title}" has been verified.`;

        case "assigned":
            return `Your problem "${title}" has been assigned for resolution.`;

        case "in_progress":
            return `Your problem "${title}" is currently in progress.`;

        case "resolved":
            return `Your problem "${title}" has been resolved.`;

        case "rejected":
            return `Your problem "${title}" has been rejected.`;

        default:
            return `Your problem "${title}" has been updated.`;
    }
}


function getTimeAgo(dateValue) {
    if (!dateValue) {
        return "Recently";
    }

    const date =
        dateValue?.toDate
            ? dateValue.toDate()
            : new Date(dateValue);

    const diff = Date.now() - date.getTime();

    const minutes = Math.floor(diff / 60000);

    if (minutes < 1) {
        return "Just now";
    }

    if (minutes < 60) {
        return `${minutes} min${minutes === 1 ? "" : "s"} ago`;
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
        return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    }

    const days = Math.floor(hours / 24);

    return `${days} day${days === 1 ? "" : "s"} ago`;
}

/* ================================================= */
/* SIDEBAR ITEM */
/* ================================================= */

function NavItem({ icon, text, active, badge }) {
    return (
        <div
            className={`
        mb-1 flex h-12 items-center gap-4 rounded-md px-4
        text-sm font-medium transition
        ${active
                    ? "bg-[#e8f5ef] text-[#167157]"
                    : "text-[#263746] hover:bg-[#f4f8f6]"
                }
      `}
        >
            <span className="flex w-5 justify-center text-lg">
                {icon}
            </span>

            <span className="flex-1">
                {text}
            </span>

            {badge && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#1269bd] px-1.5 text-[10px] font-bold text-white">
                    {badge}
                </span>
            )}
        </div>
    );
}


/* ================================================= */
/* STAT CARD */
/* ================================================= */

function StatCard({
    title,
    number,
    description,
    numberClass,
    titleClass = "text-[#263746]",
}) {
    return (
        <div className="min-h-[125px] rounded-xl border border-[#dce4e8] bg-white p-4 sm:p-5">

            <p className={`text-xs font-semibold ${titleClass}`}>
                {title}
            </p>

            <p className={`mt-3 text-[30px] font-bold leading-none ${numberClass}`}>
                {number}
            </p>

            <p className="mt-2 text-[10px] text-[#68747c] sm:text-xs">
                {description}
            </p>

        </div>
    );
}


/* ================================================= */
/* UPDATE ITEM */
/* ================================================= */

function UpdateItem({ icon, text, time }) {
    return (
        <div className="flex gap-3">

            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#d4e0e5] text-sm text-[#263746]">
                {icon}
            </div>

            <div>
                <p className="text-xs leading-5 text-[#37434c] sm:text-sm">
                    {text}
                </p>

                <p className="mt-0.5 text-[10px] text-[#89939a] sm:text-xs">
                    {time}
                </p>
            </div>

        </div>
    );
}

export default Dashboard;