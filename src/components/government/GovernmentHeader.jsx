import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  Bell,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Landmark,
} from "lucide-react";

const GovernmentHeader = ({ setMobileOpen }) => {
  const navigate = useNavigate();

  const [yearOpen, setYearOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [year, setYear] = useState("2026-27");

  const years = [
    "2024-25",
    "2025-26",
    "2026-27",
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-[#E2E8F0] bg-white">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6">

        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
          >
            <Menu size={21} />
          </button>

          <div className="hidden items-center gap-2 sm:flex">
            <Landmark
              size={19}
              className="text-[#159447]"
            />

            <div>
              <p className="text-sm font-semibold text-[#092752]">
                Government Portal
              </p>

              <p className="text-[11px] text-slate-400">
                Jharkhand Government
              </p>
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
                setYearOpen(!yearOpen);
                setUserOpen(false);
              }}
              className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-3 py-2 text-sm text-[#1E293B] hover:bg-slate-50"
            >
              <span>{year}</span>
              <ChevronDown size={16} />
            </button>

            {yearOpen && (
              <div className="absolute right-0 top-11 z-50 w-32 rounded-lg border border-[#E2E8F0] bg-white py-1 shadow-lg">
                {years.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setYear(item);
                      setYearOpen(false);
                    }}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-green-50 ${
                      year === item
                        ? "font-semibold text-[#159447]"
                        : "text-slate-600"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notifications */}
          <button
            type="button"
            onClick={() => navigate("/government/notifications")}
            className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-[#159447]"
          >
            <Bell size={20} />

            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {/* User */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setUserOpen(!userOpen);
                setYearOpen(false);
              }}
              className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-slate-50"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#159447] text-sm font-semibold text-white">
                AS
              </div>

              <div className="hidden text-left md:block">
                <p className="text-sm font-semibold text-[#092752]">
                  Amit Sharma
                </p>

                <p className="text-[11px] text-slate-400">
                  Government Officer
                </p>
              </div>

              <ChevronDown
                size={16}
                className="hidden text-slate-400 md:block"
              />
            </button>

            {userOpen && (
              <div className="absolute right-0 top-12 z-50 w-52 rounded-xl border border-[#E2E8F0] bg-white p-2 shadow-lg">

                <div className="border-b border-[#E2E8F0] px-3 py-2">
                  <p className="text-sm font-semibold text-[#092752]">
                    Amit Sharma
                  </p>

                  <p className="text-xs text-slate-400">
                    Government Officer
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setUserOpen(false);
                    navigate("/government/profile");
                  }}
                  className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                >
                  <User size={17} />
                  Profile
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setUserOpen(false);
                    navigate("/government/profile");
                  }}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                >
                  <Settings size={17} />
                  Settings
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/government/login")}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-600 hover:bg-red-50"
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

export default GovernmentHeader;