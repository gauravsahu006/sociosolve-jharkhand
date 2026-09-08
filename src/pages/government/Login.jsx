import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const GovernmentLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      navigate("/government/dashboard");
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Section */}
        <div className="hidden bg-[#092752] lg:flex lg:flex-col lg:justify-between p-10 xl:p-14">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#159447] text-white">
                <Building2 size={23} />
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

            <div className="mt-24 max-w-lg">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#159447]">
                Government Portal
              </p>

              <h2 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
                Transforming Civic
                <span className="block text-[#49C77A]">
                  Challenges into Solutions
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
                Manage civic challenges, coordinate with universities
                and industries, and monitor solution development from
                one centralized platform.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-sm text-slate-300">
            <ShieldCheck size={19} className="text-[#49C77A]" />
            Secure Government Access
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-8 flex items-center justify-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#159447] text-white">
                <Building2 size={23} />
              </div>

              <div>
                <h1 className="text-xl font-bold text-[#092752]">
                  SocioSolve
                </h1>

                <p className="text-xs text-slate-500">
                  Government Portal
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#092752] sm:text-3xl">
                Government Portal Login
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Sign in to manage challenges and civic solutions.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1E293B]">
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
                    placeholder="official@gov.in"
                    className="w-full rounded-lg border border-[#E2E8F0] bg-white py-3 pl-10 pr-4 text-sm text-[#1E293B] outline-none transition focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1E293B]">
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
                    className="w-full rounded-lg border border-[#E2E8F0] bg-white py-3 pl-10 pr-11 text-sm text-[#1E293B] outline-none transition focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#159447]"
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
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#159447] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#117C3B] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  "Signing in..."
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Demo Note */}
            <div className="mt-6 rounded-lg border border-green-100 bg-green-50 p-4">
              <p className="text-xs leading-5 text-green-700">
                <span className="font-semibold">
                  Demo Mode:
                </span>{" "}
                Any non-empty email and password can be used to
                access the Government Portal.
              </p>
            </div>

            <p className="mt-8 text-center text-xs text-slate-400">
              SocioSolve Jharkhand • Government Access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentLogin;