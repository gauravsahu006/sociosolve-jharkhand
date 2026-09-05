import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: "▣", path: "/reviewer/dashboard", active: true },
  { label: "New Problems", icon: "◉", count: "12", countStyle: "red", path: "/reviewer/new-problems" },
  { label: "Verification Queue", icon: "◷", count: "8", countStyle: "orange", path: "/reviewer/verification" },
  { label: "Assigned Problems", icon: "♙", count: "15", countStyle: "blue", path: "/reviewer/assigned" },
  { label: "Review History", icon: "▤", path: "/reviewer/review-history" },
  { label: "Analytics", icon: "▥", path: "/reviewer/analytics" },
  { label: "University Directory", icon: "♜", path: "/reviewer/universities" },
  { label: "Reports", icon: "▧", path: "/reviewer/reports" },
  { label: "Notifications", icon: "♧", count: "5", countStyle: "blue", path: "/reviewer/notifications" },
  { label: "Profile", icon: "♙", path: "/reviewer/profile" },
  { label: "Help & Support", icon: "?", path: "/reviewer/help" },
];

const stats = [
  {
    title: "New Problems",
    value: "12",
    subtitle: "Awaiting Review",
    color: "purple",
  },
  {
    title: "In Verification",
    value: "8",
    subtitle: "Under Verification",
    color: "orange",
  },
  {
    title: "Assigned",
    value: "15",
    subtitle: "You Have Assigned",
    color: "blue",
  },
  {
    title: "Verified Today",
    value: "18",
    subtitle: "Verified Problems",
    color: "green",
  },
  {
    title: "Rejected Today",
    value: "3",
    subtitle: "Rejected Problems",
    color: "red",
  },
];

const activities = [
  {
    text: 'Problem "Water Logging in Street 12" verified.',
    time: "2 mins ago",
  },
  {
    text: 'Assigned "Garbage not collected" to BIT Mesra.',
    time: "25 mins ago",
  },
  {
    text: 'Marked "Open Manhole on Road" as Duplicate.',
    time: "1 hour ago",
  },
  {
    text: 'Assigned "Poor Rural Road Connectivity" to Ranchi.',
    time: "2 hours ago",
  },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1200px] flex-col lg:flex-row">

        <aside className="w-full shrink-0 border-b border-[#e0e6e9] bg-white lg:w-[225px] lg:border-b-0 lg:border-r">
          <div className="px-5 py-5">
            <Link to="/reviewer/dashboard" className="block">
              <h1 className="text-[21px] font-bold leading-none text-[#082e5c]">
                Socio<span className="text-[#07865c]">Solve</span>
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
                    px-3 py-3
                    text-[11px] font-semibold
                    transition
                    lg:mb-1
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

                  {item.count && (
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

            <Link
              to="/reviewer/login"
              className="
                mt-1 flex items-center gap-3 rounded-md
                px-3 py-3
                text-[11px] font-semibold text-[#334653]
                hover:bg-[#f4f8f6]
              "
            >
              <span className="flex w-5 justify-center text-sm">↪</span>
              Logout
            </Link>
          </nav>
        </aside>

        <main className="min-w-0 flex-1 px-4 py-5 sm:px-6 lg:px-8">

          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-[22px] font-bold text-[#082e5c] sm:text-[26px]">
                Hello, Reviewer! 👋
              </h2>

              <p className="mt-1 text-xs text-[#52616b] sm:text-sm">
                Here's what's happening today.
              </p>
            </div>

            <button
              type="button"
              className="
                relative flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full text-xl text-[#334653]
                hover:bg-[#f3f7f8]
              "
              aria-label="Notifications"
            >
              ♧

              <span className="absolute right-1 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#d92732] px-1 text-[8px] font-bold text-white">
                5
              </span>
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-[1.05fr_1.2fr_0.85fr]">

            <ReviewOverview />

            <RecentActivity />

            <QuickActions />

          </div>

          <div className="mt-4 flex flex-col gap-3 rounded-md border border-[#dbe7f4] bg-[#f3f7ff] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#07865c]">
                ♢
              </span>

              <p className="text-xs font-medium text-[#334653]">
                You have 8 problems in verification queue.
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

function StatCard({ title, value, subtitle, color }) {
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
    <div className="rounded-lg border border-[#e0e6e9] bg-white px-5 py-5">
      <p className={`text-[11px] font-semibold ${titleColors[color]}`}>
        {title}
      </p>

      <p className={`mt-3 text-[28px] font-bold ${valueColors[color]}`}>
        {value}
      </p>

      <p className="mt-1 text-[10px] text-[#68757d]">
        {subtitle}
      </p>
    </div>
  );
}

function ReviewOverview() {
  return (
    <div className="rounded-lg border border-[#e0e6e9] bg-white p-5">
      <h3 className="text-sm font-bold text-[#082e5c]">
        Review Overview
      </h3>

      <div className="mt-5 flex items-center gap-5">

        <div
          className="
            relative flex h-[125px] w-[125px] shrink-0
            items-center justify-center rounded-full
            bg-[conic-gradient(#07915f_0deg_202deg,#1765b0_202deg_299deg,#e6952c_299deg_323deg,#d9343d_323deg_337deg,#dfe7ec_337deg_360deg)]
          "
        >
          <div className="flex h-[86px] w-[86px] flex-col items-center justify-center rounded-full bg-white">
            <span className="text-xl font-bold text-[#263746]">
              254
            </span>
            <span className="text-[9px] text-[#68757d]">
              Total
            </span>
          </div>
        </div>

        <div className="space-y-3 text-[10px]">
          <Legend color="bg-[#07915f]" label="Verified" value="142 (56%)" />
          <Legend color="bg-[#e6952c]" label="In Review" value="68 (27%)" />
          <Legend color="bg-[#1765b0]" label="Assigned" value="32 (13%)" />
          <Legend color="bg-[#d9343d]" label="Rejected" value="12 (4%)" />
        </div>
      </div>
    </div>
  );
}

function Legend({ color, label, value }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      <span className="w-14 text-[#52616b]">{label}</span>
      <span className="font-semibold text-[#344653]">{value}</span>
    </div>
  );
}

function RecentActivity() {
  return (
    <div className="rounded-lg border border-[#e0e6e9] bg-white p-5">
      <h3 className="text-sm font-bold text-[#082e5c]">
        Recent Activity
      </h3>

      <div className="mt-4 space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex gap-3">
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
        ))}
      </div>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="rounded-lg border border-[#e0e6e9] bg-white p-5">
      <h3 className="text-sm font-bold text-[#082e5c]">
        Quick Actions
      </h3>

      <div className="mt-5 space-y-3">
        <Link
          to="/reviewer/new-problems"
          className="
            flex h-10 items-center justify-center
            rounded-md bg-[#07865c]
            text-[11px] font-bold text-white
            transition hover:bg-[#06754f]
          "
        >
          Review New Problem
        </Link>

        <Link
          to="/reviewer/verification"
          className="
            flex h-10 items-center justify-center
            rounded-md border border-[#aac7ba]
            text-[11px] font-semibold text-[#28735c]
            transition hover:bg-[#f0f8f4]
          "
        >
          Verification Queue
        </Link>

        <Link
          to="/reviewer/assigned"
          className="
            flex h-10 items-center justify-center
            rounded-md border border-[#aac7ba]
            text-[11px] font-semibold text-[#28735c]
            transition hover:bg-[#f0f8f4]
          "
        >
          View Assigned Problems
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;