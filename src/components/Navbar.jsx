import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "Challenges", href: "/#challenges" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Universities", href: "/#universities" },
    { name: "Projects", href: "/#projects" },
    { name: "Impact", href: "/#impact" },
    { name: "About Us", href: "/#about" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#DDE5EC] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[70px] max-w-[1500px] items-center justify-between px-5 lg:px-8">

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
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

        {/* DESKTOP NAV */}
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


        </nav>

        {/* REPORT BUTTON */}
        <Link
          to="/citizen/login"
          className="hidden rounded-md bg-[#15915D] px-4 py-[10px] text-[11px] font-bold text-white shadow-sm transition hover:bg-[#107849] lg:inline-flex"
        >
          Report a Problem
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-[#DDE5EC] text-[#07336B] lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE NAV */}
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