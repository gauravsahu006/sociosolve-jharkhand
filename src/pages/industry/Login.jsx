import React, { useState } from "react";
import { Eye, EyeOff, Building2, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IndustryLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    // Frontend-only login for now
    setTimeout(() => {
      setLoading(false);
      navigate("/industry/dashboard");
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="flex min-h-screen">

        {/* Left Section */}
        <div className="hidden w-1/2 bg-[#092752] lg:flex lg:flex-col lg:justify-between lg:p-12">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#159447]">
                <Building2 className="text-white" size={24} />
              </div>

              <div>
                <h1 className="text-xl font-bold text-white">
                  SocioSolve
                </h1>

                <p className="text-xs text-slate-300">
                  Jharkhand Civic Innovation Platform
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-lg">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#159447]">
              Industry Portal
            </p>

            <h2 className="text-4xl font-bold leading-tight text-white">
              Turn real-world challenges into impactful solutions.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-300">
              Partner with universities, experts and student teams to
              solve meaningful industry and community challenges.
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">
              © 2026 SocioSolve Jharkhand
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex w-full items-center justify-center px-5 py-10 sm:px-8 lg:w-1/2">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#159447]">
                <Building2 className="text-white" size={21} />
              </div>

              <div>
                <h1 className="font-bold text-[#092752]">
                  SocioSolve
                </h1>

                <p className="text-[11px] text-slate-500">
                  Industry Portal
                </p>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-sm font-semibold text-[#159447]">
                INDUSTRY PORTAL
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#092752]">
                Welcome Back
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Sign in to manage your challenges and projects.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Official Email
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="company@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-11 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-[#159447]"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              {/* Forgot Password */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm font-semibold text-[#159447] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center rounded-xl bg-[#159447] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#117C3B] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            {/* Demo info */}
            <div className="mt-6 rounded-xl border border-green-100 bg-green-50 p-4">
              <p className="text-xs font-semibold text-[#117C3B]">
                Frontend Demo
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-600">
                Any valid email and password can be used for now.
                Backend authentication will be connected later.
              </p>
            </div>

            <p className="mt-8 text-center text-xs text-slate-400">
              Industry Partner Access • SocioSolve Jharkhand
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default IndustryLogin;