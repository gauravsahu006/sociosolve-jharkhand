import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#07336B] text-white">
      <div className="mx-auto max-w-[1500px] px-5 py-5 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-[12px] md:flex-row">

          {/* Copyright */}
          <p className="text-white/90">
            © 2026 SocioSolve Jharkhand. All rights reserved.
          </p>

          {/* Footer Links */}
          <div className="flex items-center gap-3 text-white/90">
            <Link
              to="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <span className="text-white/50">|</span>

            <Link
              to="/terms"
              className="transition hover:text-white"
            >
              Terms of Service
            </Link>

            <span className="text-white/50">|</span>

            <Link
              to="/accessibility"
              className="transition hover:text-white"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;