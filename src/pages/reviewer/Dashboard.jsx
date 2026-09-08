import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Bell,
  UserCircle,
  ChevronDown,
  LogOut,
  Settings,
} from "lucide-react";


// --------------------------------------------------
// DEMO PROBLEMS
// --------------------------------------------------
const demoProblems = [
  {
    id: 1,
    title: "Broken Street Light",
    status: "submitted",
    createdAt: "2026-09-08T17:30:00",
  },
  {
    id: 2,
    title: "Garbage Collection Issue",
    status: "under_review",
    createdAt: "2026-09-08T15:20:00",
    updatedAt: "2026-09-08T16:30:00",
  },
  {
    id: 3,
    title: "Damaged Road Near Main Market",
    status: "assigned",
    assignedUniversityName: "BIT Mesra",
    createdAt: "2026-09-08T13:10:00",
    updatedAt: "2026-09-08T15:00:00",
  },
  {
    id: 4,
    title: "Water Supply Problem",
    status: "verified",
    createdAt: "2026-09-08T11:00:00",
    updatedAt: "2026-09-08T14:20:00",
  },
  {
    id: 5,
    title: "Public Park Maintenance",
    status: "rejected",
    createdAt: "2026-09-07T18:00:00",
    updatedAt: "2026-09-08T10:15:00",
  },
  {
    id: 6,
    title: "Traffic Signal Issue",
    status: "in_progress",
    createdAt: "2026-09-07T15:30:00",
    updatedAt: "2026-09-08T09:40:00",
  },
  {
    id: 7,
    title: "Drainage Blockage",
    status: "resolved",
    createdAt: "2026-09-06T14:00:00",
    updatedAt: "2026-09-07T18:20:00",
  },
];


// --------------------------------------------------
// FORMAT DATE
// --------------------------------------------------
const formatActivityTime = (dateValue) => {
  if (!dateValue) return "Recently";

  let date;

  if (dateValue?.toDate) {
    date = dateValue.toDate();
  } else {
    date = new Date(dateValue);
  }

  if (Number.isNaN(date.getTime())) {
    return "Recently";
  }

  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} mins ago`;
  if (hours < 24) return `${hours} hours ago`;
  if (days === 1) return "Yesterday";

  return `${days} days ago`;
};


// --------------------------------------------------
// GET PROBLEM ACTIVITY
// --------------------------------------------------
const getProblemActivity = (problem) => {
  if (!problem) return null;

  const title = problem.title || "Untitled Problem";

  if (problem.status === "resolved") {
    return {
      text: `Problem "${title}" resolved.`,
      time: formatActivityTime(
        problem.resolvedAt || problem.updatedAt
      ),
    };
  }

  if (problem.status === "in_progress") {
    return {
      text: `Work started on "${title}".`,
      time: formatActivityTime(
        problem.workStartedAt || problem.updatedAt
      ),
    };
  }

  if (problem.status === "assigned") {
    return {
      text: `Assigned "${title}" to ${
        problem.assignedUniversityName || "a university"
      }.`,
      time: formatActivityTime(
        problem.assignedAt || problem.updatedAt
      ),
    };
  }

  if (problem.status === "verified") {
    return {
      text: `Problem "${title}" verified.`,
      time: formatActivityTime(
        problem.updatedAt || problem.submittedAt
      ),
    };
  }

  if (problem.status === "rejected") {
    return {
      text: `Problem "${title}" rejected.`,
      time: formatActivityTime(
        problem.rejectedAt || problem.updatedAt
      ),
    };
  }

  if (problem.status === "under_review") {
    return {
      text: `Problem "${title}" is under verification.`,
      time: formatActivityTime(
        problem.reviewStartedAt || problem.updatedAt
      ),
    };
  }

  return {
    text: `New problem "${title}" submitted.`,
    time: formatActivityTime(
      problem.submittedAt || problem.createdAt
    ),
  };
};


// --------------------------------------------------
// DASHBOARD
// --------------------------------------------------
function Dashboard() {
  const navigate = useNavigate();

  const [reviewerName, setReviewerName] = useState("Reviewer");

  const [counts, setCounts] = useState({
    newProblems: 0,
    verification: 0,
    assigned: 0,
    verifiedToday: 0,
    rejectedToday: 0,
    inProgress: 0,
    resolved: 0,
  });

  const [activities, setActivities] = useState([]);

  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(true);
  const [error, setError] = useState("");

  // Profile dropdown
  const [profileOpen, setProfileOpen] = useState(false);


  // --------------------------------------------------
  // FRONTEND DASHBOARD DATA
  // --------------------------------------------------
  useEffect(() => {
    const savedName = localStorage.getItem("reviewerName");

    if (savedName) {
      setReviewerName(savedName);
    }

    try {
      const problems = demoProblems;

      // ------------------------------------------
      // TODAY
      // ------------------------------------------
      const today = new Date();

      const startOfToday = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );

      // ------------------------------------------
      // COUNTS
      // ------------------------------------------
      const newProblems = problems.filter(
        (problem) =>
          problem.status === "submitted"
      ).length;

      const verification = problems.filter(
        (problem) =>
          problem.status === "under_review"
      ).length;

      const assigned = problems.filter(
        (problem) =>
          problem.status === "assigned"
      ).length;

      const inProgress = problems.filter(
        (problem) =>
          problem.status === "in_progress"
      ).length;

      const resolved = problems.filter(
        (problem) =>
          problem.status === "resolved"
      ).length;

      const verifiedToday = problems.filter(
        (problem) => {
          if (problem.status !== "verified") {
            return false;
          }

          const updatedAt =
            problem.updatedAt?.toDate?.() ||
            new Date(
              problem.updatedAt ||
                problem.submittedAt ||
                problem.createdAt ||
                0
            );

          return updatedAt >= startOfToday;
        }
      ).length;

      const rejectedToday = problems.filter(
        (problem) => {
          if (problem.status !== "rejected") {
            return false;
          }

          const updatedAt =
            problem.updatedAt?.toDate?.() ||
            new Date(
              problem.updatedAt ||
                problem.submittedAt ||
                problem.createdAt ||
                0
            );

          return updatedAt >= startOfToday;
        }
      ).length;

      setCounts({
        newProblems,
        verification,
        assigned,
        verifiedToday,
        rejectedToday,
        inProgress,
        resolved,
      });


      // ------------------------------------------
      // RECENT ACTIVITY
      // ------------------------------------------
      const sortedProblems = [...problems]
        .sort((a, b) => {
          const getTime = (problem) => {
            const value =
              problem.updatedAt ||
              problem.assignedAt ||
              problem.submittedAt ||
              problem.createdAt;

            if (value?.toDate) {
              return value.toDate().getTime();
            }

            return new Date(value || 0).getTime();
          };

          return getTime(b) - getTime(a);
        })
        .slice(0, 4);

      setActivities(
        sortedProblems
          .map(getProblemActivity)
          .filter(Boolean)
      );

      setError("");
      setLoading(false);
      setAuthLoading(false);
    } catch (err) {
      console.error(
        "Dashboard processing error:",
        err
      );

      setError(
        "Unable to load dashboard data."
      );

      setLoading(false);
      setAuthLoading(false);
    }
  }, []);


  // --------------------------------------------------
  // LOGOUT
  // --------------------------------------------------
  const handleLogout = () => {
    localStorage.removeItem("reviewerName");
    localStorage.removeItem("reviewerEmail");
    localStorage.removeItem("reviewerLoggedIn");

    navigate("/reviewer/login");
  };


  // --------------------------------------------------
  // MENU
  // --------------------------------------------------
  const menuItems = [
    {
      label: "Dashboard",
      icon: "▣",
      path: "/reviewer/dashboard",
      active: true,
    },
    {
      label: "New Problems",
      icon: "◉",
      count: counts.newProblems,
      countStyle: "red",
      path: "/reviewer/new-problems",
    },
    {
      label: "Verification Queue",
      icon: "◷",
      count: counts.verification,
      countStyle: "orange",
      path: "/reviewer/verification",
    },
    {
      label: "Assigned Problems",
      icon: "♙",
      count: counts.assigned,
      countStyle: "blue",
      path: "/reviewer/assigned",
    },
    {
      label: "Review History",
      icon: "▤",
      path: "/reviewer/review-history",
    },
    {
      label: "Analytics",
      icon: "▥",
      path: "/reviewer/analytics",
    },
    {
      label: "University Directory",
      icon: "♜",
      path: "/reviewer/universities",
    },
    {
      label: "Reports",
      icon: "▧",
      path: "/reviewer/reports",
    },
    {
      label: "Notifications",
      icon: "♧",
      path: "/reviewer/notifications",
    },
    {
      label: "Profile",
      icon: "♙",
      path: "/reviewer/profile",
    },
    {
      label: "Help & Support",
      icon: "?",
      path: "/reviewer/help",
    },
  ];


  // --------------------------------------------------
  // STATS
  // --------------------------------------------------
  const stats = [
    {
      title: "New Problems",
      value: loading ? "..." : counts.newProblems,
      subtitle: "Awaiting Review",
      color: "purple",
    },
    {
      title: "In Verification",
      value: loading ? "..." : counts.verification,
      subtitle: "Under Verification",
      color: "orange",
    },
    {
      title: "Assigned",
      value: loading ? "..." : counts.assigned,
      subtitle: "Assigned to Universities",
      color: "blue",
    },
    {
      title: "Verified Today",
      value: loading ? "..." : counts.verifiedToday,
      subtitle: "Verified Problems",
      color: "green",
      path: "/reviewer/verified",
    },
    {
      title: "Rejected Today",
      value: loading ? "..." : counts.rejectedToday,
      subtitle: "Rejected Problems",
      color: "red",
    },
  ];


  // --------------------------------------------------
  // LOADING
  // --------------------------------------------------
  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <p className="text-sm font-semibold text-[#52616b]">
          Loading reviewer dashboard...
        </p>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col lg:flex-row">

        {/* SIDEBAR */}
        <aside className="w-full shrink-0 border-b border-[#e0e6e9] bg-white lg:w-[225px] lg:border-b-0 lg:border-r">
          <div className="px-5 py-5">
            <Link
              to="/reviewer/dashboard"
              className="block"
            >
              <h1 className="text-[21px] font-bold leading-none text-[#082e5c]">
                Socio
                <span className="text-[#07865c]">
                  Solve
                </span>
              </h1>

              <p className="ml-10 mt-1 text-[9px] font-semibold text-[#07865c]">
                Jharkhand
              </p>
            </Link>
          </div>


          <nav className="px-3 pb-4 lg:px-3">
            <div className="flex gap-1 overflow-x-auto lg:block">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`
                    flex min-w-max items-center gap-3 rounded-md
                    px-3 py-3 text-[11px] font-semibold
                    transition lg:mb-1
                    ${
                      item.active
                        ? "bg-[#e9f7f1] text-[#07865c]"
                        : "text-[#334653] hover:bg-[#f4f8f6]"
                    }
                  `}
                >
                  <span className="flex w-5 justify-center text-sm">
                    {item.icon}
                  </span>

                  <span className="flex-1">
                    {item.label}
                  </span>

                  {item.count !== undefined && (
                    <span
                      className={`
                        flex h-5 min-w-5 items-center justify-center
                        rounded-full px-1 text-[9px] font-bold text-white
                        ${
                          item.countStyle === "red"
                            ? "bg-[#dc3038]"
                            : item.countStyle === "orange"
                            ? "bg-[#e6952c]"
                            : "bg-[#1765b0]"
                        }
                      `}
                    >
                      {item.count}
                    </span>
                  )}
                </Link>
              ))}
            </div>


            {/* REAL LOGOUT */}
            <button
              type="button"
              onClick={handleLogout}
              className="
                mt-1 flex w-full items-center gap-3 rounded-md
                px-3 py-3 text-left text-[11px]
                font-semibold text-[#334653]
                hover:bg-[#f4f8f6]
              "
            >
              <span className="flex w-5 justify-center text-sm">
                ↪
              </span>

              Logout
            </button>
          </nav>
        </aside>


        {/* MAIN */}
        <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="flex items-start justify-between gap-4">

            <div>
              <h2 className="text-[22px] font-bold text-[#082e5c] sm:text-[26px]">
                Hello, {reviewerName}! 👋
              </h2>

              <p className="mt-1 text-xs text-[#52616b] sm:text-sm">
                Here's what's happening today.
              </p>
            </div>


            {/* HEADER RIGHT SIDE */}
            <div className="flex items-center gap-2">

              {/* NOTIFICATIONS */}
              <Link
                to="/reviewer/notifications"
                className="
                  relative flex h-10 w-10 shrink-0
                  items-center justify-center rounded-full
                  text-[#334653]
                  hover:bg-[#f3f7f8]
                "
                aria-label="Notifications"
              >
                <Bell size={20} />

                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
              </Link>


              {/* PROFILE */}
              <div className="relative">

                <button
                  type="button"
                  onClick={() =>
                    setProfileOpen(!profileOpen)
                  }
                  className="
                    flex items-center gap-2 rounded-full
                    px-1.5 py-1.5 transition
                    hover:bg-[#f3f7f8]
                  "
                  aria-label="Reviewer Profile"
                >
                  <div className="
                    flex h-9 w-9 items-center
                    justify-center rounded-full
                    bg-[#07865c] text-white
                  ">
                    <UserCircle size={21} />
                  </div>

                  <div className="hidden text-left sm:block">
                    <p className="text-[11px] font-bold text-[#263746]">
                      {reviewerName}
                    </p>

                    <p className="text-[9px] text-[#68757d]">
                      Reviewer
                    </p>
                  </div>

                  <ChevronDown
                    size={15}
                    className={`
                      text-[#52616b] transition-transform
                      ${profileOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>


                {/* PROFILE DROPDOWN */}
                {profileOpen && (
                  <div className="
                    absolute right-0 top-12 z-50
                    w-48 overflow-hidden rounded-lg
                    border border-[#e0e6e9]
                    bg-white shadow-lg
                  ">

                    {/* PROFILE */}
                    <Link
                      to="/reviewer/profile"
                      onClick={() =>
                        setProfileOpen(false)
                      }
                      className="
                        flex items-center gap-3
                        px-4 py-3 text-[11px]
                        font-semibold text-[#334653]
                        hover:bg-[#f4f8f6]
                      "
                    >
                      <UserCircle size={17} />
                      Profile
                    </Link>


                    {/* SETTINGS */}
                    <Link
                      to="/reviewer/profile"
                      onClick={() =>
                        setProfileOpen(false)
                      }
                      className="
                        flex items-center gap-3
                        px-4 py-3 text-[11px]
                        font-semibold text-[#334653]
                        hover:bg-[#f4f8f6]
                      "
                    >
                      <Settings size={17} />
                      Settings
                    </Link>


                    <div className="border-t border-[#e0e6e9]" />


                    {/* LOGOUT */}
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="
                        flex w-full items-center gap-3
                        px-4 py-3 text-left text-[11px]
                        font-semibold text-red-600
                        hover:bg-red-50
                      "
                    >
                      <LogOut size={17} />
                      Logout
                    </button>

                  </div>
                )}

              </div>
            </div>
          </div>


          {/* ERROR */}
          {error && (
            <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-xs font-semibold text-red-600">
              {error}
            </div>
          )}


          {/* STATS */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {stats.map((stat) => (
              <StatCard
                key={stat.title}
                {...stat}
              />
            ))}
          </div>


          {/* CONTENT */}
          <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-[1.05fr_1.2fr_0.85fr]">

            <ReviewOverview
              counts={counts}
              loading={loading}
            />

            <RecentActivity
              activities={activities}
            />

            <QuickActions
              counts={counts}
            />

          </div>


          {/* QUEUE MESSAGE */}
          <div className="mt-4 flex flex-col gap-3 rounded-md border border-[#dbe7f4] bg-[#f3f7ff] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#07865c]">
                ♢
              </span>

              <p className="text-xs font-medium text-[#334653]">
                You have{" "}
                {loading
                  ? "..."
                  : counts.verification}{" "}
                problems in verification queue.
              </p>
            </div>

            <Link
              to="/reviewer/verification"
              className="text-xs font-semibold text-[#1765b0] hover:underline"
            >
              View Queue →
            </Link>

          </div>

        </main>
      </div>
    </div>
  );
}


// --------------------------------------------------
// STAT CARD
// --------------------------------------------------
function StatCard({
  title,
  value,
  subtitle,
  color,
  path,
}) {
  const titleColors = {
    purple: "text-[#6544a3]",
    orange: "text-[#bd7b1d]",
    blue: "text-[#1765b0]",
    green: "text-[#07865c]",
    red: "text-[#d6323a]",
  };

  const valueColors = {
    purple: "text-[#263746]",
    orange: "text-[#263746]",
    blue: "text-[#1765b0]",
    green: "text-[#07865c]",
    red: "text-[#263746]",
  };

  return (
    <Link
      to={path || "#"}
      className="
        block rounded-lg border border-[#e0e6e9]
        bg-white px-5 py-5
        transition
        hover:-translate-y-0.5
        hover:border-[#07865c]
        hover:shadow-sm
      "
    >
      <p
        className={`text-[11px] font-semibold ${titleColors[color]}`}
      >
        {title}
      </p>

      <p
        className={`mt-3 text-[28px] font-bold ${valueColors[color]}`}
      >
        {value}
      </p>

      <p className="mt-1 text-[10px] text-[#68757d]">
        {subtitle}
      </p>
    </Link>
  );
}


// --------------------------------------------------
// REVIEW OVERVIEW
// --------------------------------------------------
function ReviewOverview({
  counts,
  loading,
}) {
  const total =
    counts.newProblems +
    counts.verification +
    counts.assigned +
    counts.verifiedToday +
    counts.rejectedToday;

  const verifiedPercent =
    total > 0
      ? Math.round(
          (counts.verifiedToday / total) * 100
        )
      : 0;

  const verificationPercent =
    total > 0
      ? Math.round(
          (counts.verification / total) * 100
        )
      : 0;

  const assignedPercent =
    total > 0
      ? Math.round(
          (counts.assigned / total) * 100
        )
      : 0;

  const rejectedPercent =
    total > 0
      ? Math.round(
          (counts.rejectedToday / total) * 100
        )
      : 0;

  const verifiedDeg =
    verifiedPercent * 3.6;

  const verificationDeg =
    verificationPercent * 3.6;

  const assignedDeg =
    assignedPercent * 3.6;

  const rejectedDeg =
    rejectedPercent * 3.6;

  const verifiedEnd = verifiedDeg;

  const verificationEnd =
    verifiedEnd + verificationDeg;

  const assignedEnd =
    verificationEnd + assignedDeg;

  const rejectedEnd =
    assignedEnd + rejectedDeg;

  const donutStyle = {
    background: `
      conic-gradient(
        #07915f 0deg ${verifiedEnd}deg,
        #e6952c ${verifiedEnd}deg ${verificationEnd}deg,
        #1765b0 ${verificationEnd}deg ${assignedEnd}deg,
        #d9343d ${assignedEnd}deg ${rejectedEnd}deg,
        #dfe7ec ${rejectedEnd}deg 360deg
      )
    `,
  };

  return (
    <div className="rounded-lg border border-[#e0e6e9] bg-white p-5">

      <h3 className="text-sm font-bold text-[#082e5c]">
        Review Overview
      </h3>

      <div className="mt-5 flex items-center gap-5">

        <div
          style={donutStyle}
          className="
            relative flex h-[125px] w-[125px] shrink-0
            items-center justify-center rounded-full
          "
        >
          <div className="
            flex h-[86px] w-[86px]
            flex-col items-center justify-center
            rounded-full bg-white
          ">
            <span className="text-xl font-bold text-[#263746]">
              {loading ? "..." : total}
            </span>

            <span className="text-[9px] text-[#68757d]">
              Total
            </span>
          </div>
        </div>


        <div className="space-y-3 text-[10px]">

          <Legend
            color="bg-[#07915f]"
            label="Verified"
            value={`${counts.verifiedToday} (${verifiedPercent}%)`}
          />

          <Legend
            color="bg-[#e6952c]"
            label="In Review"
            value={`${counts.verification} (${verificationPercent}%)`}
          />

          <Legend
            color="bg-[#1765b0]"
            label="Assigned"
            value={`${counts.assigned} (${assignedPercent}%)`}
          />

          <Legend
            color="bg-[#d9343d]"
            label="Rejected"
            value={`${counts.rejectedToday} (${rejectedPercent}%)`}
          />

        </div>
      </div>


      {/* EXTRA LIVE STATUS */}
      <div className="mt-5 grid grid-cols-2 gap-2">

        <div className="rounded-md bg-[#f4f8fb] px-3 py-2">
          <p className="text-[9px] text-[#7a858c]">
            In Progress
          </p>

          <p className="mt-1 text-sm font-bold text-[#1765b0]">
            {counts.inProgress}
          </p>
        </div>


        <div className="rounded-md bg-[#f0f8f4] px-3 py-2">
          <p className="text-[9px] text-[#7a858c]">
            Resolved
          </p>

          <p className="mt-1 text-sm font-bold text-[#07865c]">
            {counts.resolved}
          </p>
        </div>

      </div>
    </div>
  );
}


// --------------------------------------------------
// LEGEND
// --------------------------------------------------
function Legend({
  color,
  label,
  value,
}) {
  return (
    <div className="flex items-center gap-2">

      <span
        className={`h-2 w-2 rounded-full ${color}`}
      />

      <span className="w-14 text-[#52616b]">
        {label}
      </span>

      <span className="font-semibold text-[#344653]">
        {value}
      </span>

    </div>
  );
}


// --------------------------------------------------
// RECENT ACTIVITY
// --------------------------------------------------
function RecentActivity({
  activities,
}) {
  return (
    <div className="rounded-lg border border-[#e0e6e9] bg-white p-5">

      <div className="flex items-center justify-between">

        <h3 className="text-sm font-bold text-[#082e5c]">
          Recent Activity
        </h3>

        <span className="text-[9px] font-semibold text-[#07865c]">
          LIVE
        </span>

      </div>


      <div className="mt-4 space-y-4">

        {activities.length === 0 ? (
          <p className="py-5 text-center text-[10px] text-[#89949b]">
            No recent activity.
          </p>
        ) : (
          activities.map(
            (activity, index) => (
              <div
                key={index}
                className="flex gap-3"
              >

                <span className="mt-1 flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-[#7894ae] text-[6px] text-[#1765b0]">
                  ●
                </span>

                <div>

                  <p className="text-[10px] leading-4 text-[#334653] sm:text-[11px]">
                    {activity.text}
                  </p>

                  <p className="mt-0.5 text-[9px] text-[#89949b]">
                    {activity.time}
                  </p>

                </div>

              </div>
            )
          )
        )}

      </div>
    </div>
  );
}


// --------------------------------------------------
// QUICK ACTIONS
// --------------------------------------------------
function QuickActions({
  counts,
}) {
  return (
    <div className="rounded-lg border border-[#e0e6e9] bg-white p-5">

      <h3 className="text-sm font-bold text-[#082e5c]">
        Quick Actions
      </h3>


      <div className="mt-5 space-y-3">

        <Link
          to="/reviewer/new-problems"
          className="
            flex h-10 items-center justify-between
            rounded-md bg-[#07865c] px-4
            text-[11px] font-bold text-white
            transition hover:bg-[#06754f]
          "
        >
          <span>Review New Problem</span>

          <span>
            {counts.newProblems}
          </span>
        </Link>


        <Link
          to="/reviewer/verification"
          className="
            flex h-10 items-center justify-between
            rounded-md border border-[#aac7ba]
            px-4 text-[11px] font-semibold
            text-[#28735c]
            transition hover:bg-[#f0f8f4]
          "
        >
          <span>Verification Queue</span>

          <span>
            {counts.verification}
          </span>
        </Link>


        <Link
          to="/reviewer/assigned"
          className="
            flex h-10 items-center justify-between
            rounded-md border border-[#aac7ba]
            px-4 text-[11px] font-semibold
            text-[#28735c]
            transition hover:bg-[#f0f8f4]
          "
        >
          <span>View Assigned Problems</span>

          <span>
            {counts.assigned}
          </span>
        </Link>

      </div>
    </div>
  );
}


export default Dashboard;