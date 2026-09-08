import React, { useState } from "react";
import {
  Bell,
  Menu,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Building2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const IndustryHeader = ({ setMobileOpen }) => {
  const navigate = useNavigate();

  const [showYearMenu, setShowYearMenu] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const [academicYear, setAcademicYear] = useState("2023-24");

  const handleYearChange = (year) => {
    setAcademicYear(year);
    setShowYearMenu(false);
  };

  const handleLogout = () => {
    setShowUserMenu(false);
    navigate("/industry/login");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>

          <div className="flex items-center gap-2">
            <Building2
              size={18}
              className="text-[#159447] sm:hidden"
            />

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#159447]">
                Industry Portal
              </p>

              <h1 className="hidden text-sm font-bold text-[#092752] sm:block">
                Tata Steel Ltd.
              </h1>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Academic Year */}
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() => {
                setShowYearMenu(!showYearMenu);
                setShowUserMenu(false);
              }}
              className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-[#159447] hover:bg-slate-50"
            >
              <span>Academic Year:</span>

              <span className="text-[#092752]">
                {academicYear}
              </span>

              <ChevronDown
                size={14}
                className={`transition ${
                  showYearMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {showYearMenu && (
              <div className="absolute right-0 top-12 z-50 w-36 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg">
                {[
                  "2023-24",
                  "2024-25",
                  "2025-26",
                  "2026-27",
                ].map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => handleYearChange(year)}
                    className={`block w-full px-4 py-2.5 text-left text-sm transition hover:bg-green-50 hover:text-[#159447] ${
                      academicYear === year
                        ? "bg-green-50 font-semibold text-[#159447]"
                        : "text-slate-600"
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notifications */}
          <button
            type="button"
            onClick={() => navigate("/industry/notifications")}
            className="relative rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-[#159447]"
            aria-label="Notifications"
          >
            <Bell size={21} />

            <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-bold text-white">
              4
            </span>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setShowUserMenu(!showUserMenu);
                setShowYearMenu(false);
              }}
              className="hidden items-center gap-2 border-l border-slate-200 pl-4 md:flex"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#159447]/10 text-sm font-bold text-[#159447]">
                AS
              </div>

              <div className="hidden text-left lg:block">
                <p className="text-xs font-bold text-[#092752]">
                  Amit Sharma
                </p>

                <p className="text-[10px] text-slate-500">
                  Industry Coordinator
                </p>
              </div>

              <ChevronDown
                size={15}
                className={`text-slate-400 transition ${
                  showUserMenu ? "rotate-180" : ""
                }`}
              />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 top-12 z-50 w-52 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                
                {/* User Info */}
                <div className="border-b border-slate-100 px-4 py-3">
                  <p className="text-sm font-semibold text-[#092752]">
                    Amit Sharma
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Industry Coordinator
                  </p>
                </div>

                {/* Profile */}
                <button
                  type="button"
                  onClick={() => {
                    setShowUserMenu(false);
                    navigate("/industry/profile-settings");
                  }}
                  className="flex w-full items-center gap-3 px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-[#159447]"
                >
                  <User size={17} />
                  Profile
                </button>

                {/* Settings */}
                <button
                  type="button"
                  onClick={() => {
                    setShowUserMenu(false);
                    navigate("/industry/profile-settings");
                  }}
                  className="flex w-full items-center gap-3 px-4 py-3 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-[#159447]"
                >
                  <Settings size={17} />
                  Settings
                </button>

                <div className="border-t border-slate-100" />

                {/* Logout */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-500 transition hover:bg-red-50"
                >
                  <LogOut size={17} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default IndustryHeader;