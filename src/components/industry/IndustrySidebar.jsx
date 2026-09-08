import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Lightbulb,
  FolderKanban,
  BriefcaseBusiness,
  Users,
  GraduationCap,
  TrendingUp,
  FileText,
  Bell,
  BarChart3,
  LifeBuoy,
  Settings,
  X,
  LogOut,
  Building2,
} from "lucide-react";

const IndustrySidebar = ({ mobileOpen, setMobileOpen }) => {
  const navigate = useNavigate();

  const navigationItems = [
    {
      name: "Dashboard",
      path: "/industry/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Available Challenges",
      path: "/industry/challenges",
      icon: Lightbulb,
    },
    {
      name: "My Projects",
      path: "/industry/projects",
      icon: FolderKanban,
    },
    {
      name: "Industry Mentors",
      path: "/industry/mentors",
      icon: GraduationCap,
    },
    {
      name: "Expert Teams",
      path: "/industry/teams",
      icon: Users,
    },
    {
      name: "Project Workspace",
      path: "/industry/projects/1/workspace",
      icon: BriefcaseBusiness,
    },
    {
      name: "Milestones & Progress",
      path: "/industry/milestones-progress",
      icon: TrendingUp,
    },
    {
      name: "Submissions",
      path: "/industry/submissions",
      icon: FileText,
    },
    {
      name: "Notifications",
      path: "/industry/notifications",
      icon: Bell,
    },
    {
      name: "Reports & Analytics",
      path: "/industry/reports-analytics",
      icon: BarChart3,
    },
    {
      name: "Support & Resources",
      path: "/industry/support-resources",
      icon: LifeBuoy,
    },
    {
      name: "Profile & Settings",
      path: "/industry/profile-settings",
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    navigate("/industry/login");
    setMobileOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 flex w-64 flex-col
          bg-[#092752] text-white transition-transform duration-300
          lg:static lg:z-auto lg:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
          <button
            type="button"
            onClick={() => handleNavigation("/industry/dashboard")}
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#159447]">
              <Building2 size={19} />
            </div>

            <div className="text-left">
              <p className="text-sm font-bold">
                SocioSolve
              </p>

              <p className="text-[10px] text-slate-300">
                Industry Portal
              </p>
            </div>
          </button>

          {/* Mobile Close */}
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 lg:hidden"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Industry Workspace
          </p>

          <div className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `
                    flex items-center gap-3 rounded-lg px-3 py-2.5
                    text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-[#159447] text-white shadow-sm"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }
                    `
                  }
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-white/10 p-3">
          <div className="mb-3 rounded-lg bg-white/5 p-3">
            <p className="text-xs font-semibold text-white">
              Industry Partner
            </p>

            <p className="mt-1 text-[10px] leading-4 text-slate-400">
              Collaborate with universities and expert teams.
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-red-500/10 hover:text-red-300"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default IndustrySidebar;