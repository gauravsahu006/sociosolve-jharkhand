import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  UserRound,
  ShieldCheck,
  GraduationCap,
  Factory,
  Landmark,
} from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "Challenges", href: "/#challenges" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Universities", href: "/#universities" },
    { name: "Projects", href: "/#projects" },
    { name: "Impact", href: "/#impact" },
    { name: "About Us", href: "/#about" },
  ];

  const portals = [
    {
      name: "Citizen",
      description: "Report & track problems",
      icon: UserRound,
      path: "/citizen/login",
    },
    {
      name: "Reviewer",
      description: "Verify reported problems",
      icon: ShieldCheck,
      path: "/reviewer/login",
    },
    {
      name: "University",
      description: "Work on solutions",
      icon: GraduationCap,
      path: "/university/login",
    },
    {
      name: "Industry",
      description: "Build & support solutions",
      icon: Factory,
      path: "/industry/login",
    },
    {
      name: "Government",
      description: "Monitor civic issues",
      icon: Landmark,
      path: "/government/login",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#DDE5EC] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[70px] max-w-[1500px] items-center justify-between px-5 lg:px-8">

        <Link
          to="/"
          onClick={() => {
            setOpen(false);
            setPortalOpen(false);
          }}
          className="flex shrink-0 items-center"
        >
          <div className="leading-none">
            <div className="text-[21px] font-extrabold tracking-[-0.6px] text-[#07336B]">
              Socio<span className="text-[#15915D]">Solve</span>
            </div>

            <div className="mt-[3px] text-[8px] font-bold tracking-[1.5px] text-[#15915D]">
              JHARKHAND
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[12px] font-semibold text-[#243B53] transition-colors hover:text-[#15915D]"
            >
              {item.name}
            </a>
          ))}

          <div className="hidden items-center gap-2 lg:flex">
            <div className="relative">
              <button
                type="button"
                onClick={() => setPortalOpen(!portalOpen)}
                className="flex items-center gap-1 rounded-md border border-[#DDE5EC] bg-white px-4 py-[10px] text-[11px] font-bold text-[#07336B] transition hover:border-[#15915D] hover:text-[#15915D]"
              >
                Portals
                <ChevronDown
                  size={14}
                  className={`transition-transform ${portalOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {portalOpen && (
                <div className="absolute right-0 top-12 z-50 w-72 rounded-xl border border-[#E5EBF0] bg-white p-2 shadow-xl">
                  <div className="px-3 py-2">
                    <p className="text-sm font-bold text-[#07336B]">
                      Choose your Portal
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Select your role to continue
                    </p>
                  </div>

                  {portals.map((portal) => {
                    const Icon = portal.icon;

                    return (
                      <Link
                        key={portal.name}
                        to={portal.path}
                        onClick={() => setPortalOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-green-50"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-[#15915D]">
                          <Icon size={18} />
                        </div>

                        <div>
                          <p className="text-[12px] font-bold text-[#07336B]">
                            {portal.name}
                          </p>
                          <p className="text-[10px] text-slate-500">
                            {portal.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/citizen/login"
              className="rounded-md bg-[#15915D] px-4 py-[10px] text-[11px] font-bold text-white shadow-sm transition hover:bg-[#107849]"
            >
              Report a Problem
            </Link>
          </div>
        </nav>

        <button
          type="button"
          onClick={() => {
            setOpen(!open);
            setPortalOpen(false);
          }}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-[#DDE5EC] text-[#07336B] lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#DDE5EC] bg-white lg:hidden">
          <nav className="mx-auto max-w-[1500px] px-5 py-4">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-[#EEF2F5] py-3 text-[13px] font-semibold text-[#243B53] transition hover:text-[#15915D]"
                >
                  {item.name}
                </a>
              ))}

              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => setPortalOpen(!portalOpen)}
                  className="flex w-full items-center justify-between border-b border-[#EEF2F5] py-3 text-[13px] font-semibold text-[#243B53]"
                >
                  <span>Portals</span>

                  <ChevronDown
                    size={17}
                    className={`transition-transform ${portalOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {portalOpen && (
                  <div className="mt-2 rounded-lg bg-[#F7FAF9] p-2">
                    {portals.map((portal) => {
                      const Icon = portal.icon;

                      return (
                        <Link
                          key={portal.name}
                          to={portal.path}
                          onClick={() => {
                            setOpen(false);
                            setPortalOpen(false);
                          }}
                          className="flex items-center gap-3 rounded-lg px-3 py-3 transition hover:bg-white"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-50 text-[#15915D]">
                            <Icon size={18} />
                          </div>

                          <div>
                            <p className="text-[12px] font-bold text-[#07336B]">
                              {portal.name}
                            </p>

                            <p className="text-[10px] text-slate-500">
                              {portal.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                to="/citizen/login"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-[#15915D] px-4 py-3 text-[12px] font-bold text-white"
              >
                Report a Problem
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;