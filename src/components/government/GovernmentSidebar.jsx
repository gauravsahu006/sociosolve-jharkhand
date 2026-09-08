import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  FileCheck2,
  Building2,
  Factory,
  GraduationCap,
  TrendingUp,
  FileText,
  Bell,
  BarChart3,
  LifeBuoy,
  Settings,
  LogOut,
  Landmark,
  X,
} from "lucide-react";

const GovernmentSidebar = ({ mobileOpen, setMobileOpen }) => {
  const navigate = useNavigate();

  const navigation = [
    {
      name: "Dashboard",
      path: "/government/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Challenges",
      path: "/government/challenges",
      icon: ClipboardList,
    },
    {
      name: "Problem Management",
      path: "/government/problems",
      icon: FileCheck2,
    },
    {
      name: "University Coordination",
      path: "/government/universities",
      icon: GraduationCap,
    },
    {
      name: "Industry Coordination",
      path: "/government/industries",
      icon: Factory,
    },
    {
      name: "Assignments",
      path: "/government/assignments",
      icon: Building2,
    },
    {
      name: "Milestones & Progress",
      path: "/government/milestones",
      icon: TrendingUp,
    },
    {
      name: "Submissions",
      path: "/government/submissions",
      icon: FileText,
    },
    {
      name: "Notifications",
      path: "/government/notifications",
      icon: Bell,
    },
    {
      name: "Reports & Analytics",
      path: "/government/reports",
      icon: BarChart3,
    },
    {
      name: "Support & Resources",
      path: "/government/support",
      icon: LifeBuoy,
    },
    {
      name: "Profile & Settings",
      path: "/government/profile",
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    navigate("/government/login");
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-[#092752] transition-transform duration-300 lg:static lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#159447] text-white">
              <Landmark size={21} />
            </div>

            <div>
              <h1 className="font-bold text-white">
                SocioSolve
              </h1>

              <p className="text-[11px] text-slate-300">
                Government Portal
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="text-slate-300 hover:text-white lg:hidden"
          >
            <X size={21} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
            Government Portal
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#159447] text-white"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`
                  }
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Bottom */}
        <div className="border-t border-white/10 p-3">
          <div className="mb-3 rounded-lg bg-white/5 px-3 py-3">
            <p className="text-xs font-medium text-white">
              Government Department
            </p>

            <p className="mt-1 text-[11px] text-slate-400">
              Jharkhand Government
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

export default GovernmentSidebar;