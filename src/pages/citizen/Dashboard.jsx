import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
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
                                    Hello, Anjali 👋
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
                                number="5"
                                description="Reported by you"
                                numberClass="text-[#111827]"
                            />

                            <StatCard
                                title="In Review"
                                number="2"
                                description="Under verification"
                                numberClass="text-[#111827]"
                                titleClass="text-[#c47a19]"
                            />

                            <StatCard
                                title="In Progress"
                                number="2"
                                description="Assigned & working"
                                numberClass="text-[#1269bd]"
                            />

                            <StatCard
                                title="Resolved"
                                number="1"
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

                                    <UpdateItem
                                        icon="◎"
                                        text='Your problem "Water Logging in Street 12" has been verified.'
                                        time="2 hours ago"
                                    />

                                    <UpdateItem
                                        icon="⊙"
                                        text='Your problem "Garbage not collected" is assigned to BIT Mesra.'
                                        time="1 day ago"
                                    />

                                    <UpdateItem
                                        icon="◎"
                                        text='Your problem "Street Light Not Working" is in progress.'
                                        time="2 days ago"
                                    />

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