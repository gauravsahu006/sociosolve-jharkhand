import React from "react";
import {
    LayoutDashboard,
    Lightbulb,
    FolderKanban,
    GraduationCap,
    Users,
    BriefcaseBusiness,
    Milestone,
    FileCheck,
    Bell,
    BarChart3,
    LifeBuoy,
    Settings,
    LogOut,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

/* =========================
   Sidebar Navigation Items
========================= */

const navigationItems = [
    {
        name: "Dashboard",
        path: "/university/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Recommended Challenges",
        path: "/university/challenges",
        icon: Lightbulb,
    },
    {
        name: "My Projects",
        path: "/university/projects",
        icon: FolderKanban,
    },
    {
        name: "Faculty Mentors",
        path: "/university/faculty-mentors",
        icon: GraduationCap,
    },
    {
        name: "Student Teams",
        path: "/university/student-teams",
        icon: Users,
    },
    {
        name: "Project Workspace",
        path: "/university/projects/1/workspace",
        icon: BriefcaseBusiness,
    },
    {
        name: "Milestones & Progress",
        path: "/university/milestones",
        icon: Milestone,
    },
    {
        name: "Submissions",
        path: "/university/submissions",
        icon: FileCheck,
    },
    {
        name: "Notifications",
        path: "/university/notifications",
        icon: Bell,
    },
    {
        name: "Reports & Analytics",
        path: "/university/reports",
        icon: BarChart3,
    },
    {
        name: "Support & Resources",
        path: "/university/support",
        icon: LifeBuoy,
    },
    {
        name: "Profile & Settings",
        path: "/university/profile",
        icon: Settings,
    },
];

/* =========================
   University Sidebar
========================= */

const UniversitySidebar = ({ mobileOpen, setMobileOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();

    /* =========================
       Check Active Navigation
    ========================= */

    const isActive = (path) => {
        if (path === "/university/dashboard") {
            return location.pathname === path;
        }

        return location.pathname.startsWith(path);
    };

    /* =========================
       Logout Handler
    ========================= */

    const handleLogout = () => {
        navigate("/university/login");
    };

    return (
        <>
            {/* =========================
          Mobile Overlay
      ========================= */}

            {mobileOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            {/* =========================
          Sidebar
      ========================= */}

            <aside
                className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-white shadow-xl transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 lg:shadow-none ${mobileOpen
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }`}
            >

                {/* =========================
            University Branding
        ========================= */}

                <div className="border-b border-slate-200 px-5 py-5">

                    <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#159447]">
                            <GraduationCap
                                size={25}
                                className="text-white"
                            />
                        </div>

                        <div className="min-w-0">

                            <h2 className="truncate text-sm font-extrabold text-[#092752]">
                                BIT Mesra
                            </h2>

                            <p className="text-xs text-slate-500">
                                Ranchi, Jharkhand
                            </p>

                        </div>

                    </div>

                </div>

                {/* =========================
            Navigation
        ========================= */}

                <nav className="flex-1 overflow-y-auto px-3 py-4">

                    <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        University Portal
                    </p>

                    <div className="space-y-1">

                        {navigationItems.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.path);

                            return (
                                <button
                                    key={item.name}
                                    type="button"
                                    onClick={() => {
                                        navigate(item.path);
                                        setMobileOpen(false);
                                    }}
                                    className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition ${active
                                            ? "bg-[#159447]/10 text-[#159447]"
                                            : "text-slate-600 hover:bg-slate-50 hover:text-[#092752]"
                                        }`}
                                >

                                    <Icon
                                        size={18}
                                        strokeWidth={active ? 2.5 : 2}
                                        className={
                                            active
                                                ? "text-[#159447]"
                                                : "text-slate-400 group-hover:text-[#159447]"
                                        }
                                    />

                                    <span className="truncate">
                                        {item.name}
                                    </span>

                                    {/* Notification Badge */}

                                    {item.name === "Notifications" && (
                                        <span className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-bold text-white">
                                            6
                                        </span>
                                    )}

                                </button>
                            );
                        })}

                    </div>

                </nav>

                {/* =========================
            Logout
        ========================= */}

                <div className="border-t border-slate-200 p-3">

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-red-50 hover:text-red-600"
                    >
                        <LogOut size={18} />

                        Logout
                    </button>

                </div>

            </aside>
        </>
    );
};

export default UniversitySidebar;