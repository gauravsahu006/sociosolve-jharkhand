import React, { useState } from "react";
import { Eye, EyeOff, GraduationCap, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  /* =========================
     Form Validation
  ========================= */

  const validateForm = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "University email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Enter a valid university email.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =========================
     Login Submit
  ========================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setLoading(true);

    /*
      Frontend-only login.
      Backend/Firebase baad me connect karenge.
    */

    setTimeout(() => {
      setLoading(false);

      navigate("/university/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* =========================
          Main Container
      ========================= */}

      <div className="flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8">

        <div className="w-full max-w-md">


          {/* =========================
              Login Card
          ========================= */}

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

            {/* Green Top Section */}

            <div className="bg-[#159447] px-6 py-7 text-center sm:px-8">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">

                <GraduationCap
                  size={34}
                  strokeWidth={1.8}
                  className="text-white"
                />

              </div>

              <h2 className="mt-4 text-2xl font-extrabold text-white">
                Welcome to University Portal
              </h2>

              <p className="mt-2 text-sm text-white/90">
                Login with your university account
              </p>

            </div>

            {/* =========================
                Form
            ========================= */}

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5 p-6 sm:p-8"
            >

              {/* Email */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-semibold text-[#092752]"
                >
                  Email / Username
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);

                    if (errors.email) {
                      setErrors((prev) => ({
                        ...prev,
                        email: "",
                      }));
                    }
                  }}
                  placeholder="Enter your university email"
                  autoComplete="email"
                  className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition ${
                    errors.email
                      ? "border-red-500 bg-red-50 focus:border-red-500"
                      : "border-slate-300 bg-white focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/15"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.email}
                  </p>
                )}

              </div>

              {/* Password */}

              <div>

                <div className="mb-1.5 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-sm font-semibold text-[#092752]"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-semibold text-[#159447] hover:text-[#117C3B]"
                  >
                    Forgot Password?
                  </button>

                </div>

                <div className="relative">

                  <input
                    id="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);

                      if (errors.password) {
                        setErrors((prev) => ({
                          ...prev,
                          password: "",
                        }));
                      }
                    }}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className={`w-full rounded-lg border px-4 py-3 pr-12 text-sm outline-none transition ${
                      errors.password
                        ? "border-red-500 bg-red-50 focus:border-red-500"
                        : "border-slate-300 bg-white focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/15"
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-[#159447]"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={19} />
                    ) : (
                      <Eye size={19} />
                    )}
                  </button>

                </div>

                {errors.password && (
                  <p className="mt-1.5 text-xs font-medium text-red-600">
                    {errors.password}
                  </p>
                )}

              </div>

              {/* Login Button */}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center rounded-lg bg-[#159447] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#117C3B] disabled:cursor-not-allowed disabled:opacity-70"
              >

                {loading ? (
                  <>
                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />

                    Signing in...
                  </>
                ) : (
                  "Login"
                )}

              </button>

              {/* =========================
                  Divider
              ========================= */}

              <div className="relative py-1">

                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200" />
                </div>

                <div className="relative flex justify-center">
                  <span className="bg-white px-3 text-xs font-medium text-slate-400">
                    or continue with
                  </span>
                </div>

              </div>

              {/* =========================
                  Social Login
              ========================= */}

              <div className="grid grid-cols-2 gap-3">

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#159447] hover:bg-slate-50"
                >
                  <span className="font-bold text-red-500">
                    G
                  </span>

                  Google
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#159447] hover:bg-slate-50"
                >
                  <span className="font-bold text-blue-600">
                    M
                  </span>

                  Microsoft
                </button>

              </div>

              {/* =========================
                  Security Note
              ========================= */}

              <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-3">

                <ShieldCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-[#159447]"
                />

                <p className="text-xs leading-5 text-slate-500">
                  Your university account is protected.
                  Never share your login credentials with
                  anyone.
                </p>

              </div>

            </form>

          </div>

          {/* =========================
              Footer
          ========================= */}

          <p className="mt-6 text-center text-xs text-slate-400">
            © 2024 SocioSolve Jharkhand. All rights reserved.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;