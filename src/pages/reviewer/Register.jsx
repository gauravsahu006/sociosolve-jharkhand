import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  UserRound,
  Mail,
  Phone,
  Building2,
  LockKeyhole,
} from "lucide-react";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    organization: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.mobile ||
      !formData.organization ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    sessionStorage.setItem(
      "socioSolveReviewer",
      JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        mobile: formData.mobile,
        organization: formData.organization,
      })
    );

    navigate("/reviewer/login");
  };

  return (
    <div className="min-h-screen bg-white px-3 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-screen w-full max-w-[560px] flex-col overflow-hidden bg-white">

        <div className="flex-1 px-6 pb-8 pt-7 sm:px-9 sm:pt-8">

          <div className="text-center">
            <h1 className="text-[24px] font-bold leading-tight text-[#082e5c] sm:text-[28px]">
              Create Reviewer Account
            </h1>

            <p className="mt-1 text-sm font-medium text-[#334653]">
              Register to manage and verify civic problems
            </p>
          </div>

          {error && (
            <div className="mt-5 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-7 space-y-4"
          >

            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-[11px] font-bold text-[#263746] sm:text-xs"
              >
                Full Name
              </label>

              <div className="relative">
                <UserRound
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7c8992]"
                />

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="h-11 w-full rounded-md border border-[#d4dce1] bg-white pl-10 pr-3 text-xs text-[#263746] outline-none placeholder:text-[#9aa4aa] focus:border-[#07865c] focus:ring-1 focus:ring-[#07865c]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[11px] font-bold text-[#263746] sm:text-xs"
              >
                Official Email
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7c8992]"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter official email"
                  className="h-11 w-full rounded-md border border-[#d4dce1] bg-white pl-10 pr-3 text-xs text-[#263746] outline-none placeholder:text-[#9aa4aa] focus:border-[#07865c] focus:ring-1 focus:ring-[#07865c]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="mb-2 block text-[11px] font-bold text-[#263746] sm:text-xs"
              >
                Mobile Number
              </label>

              <div className="relative">
                <Phone
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7c8992]"
                />

                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  maxLength={10}
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter 10-digit mobile number"
                  className="h-11 w-full rounded-md border border-[#d4dce1] bg-white pl-10 pr-3 text-xs text-[#263746] outline-none placeholder:text-[#9aa4aa] focus:border-[#07865c] focus:ring-1 focus:ring-[#07865c]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="organization"
                className="mb-2 block text-[11px] font-bold text-[#263746] sm:text-xs"
              >
                Organization / Department
              </label>

              <div className="relative">
                <Building2
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7c8992]"
                />

                <input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleChange}
                  placeholder="Enter organization or department"
                  className="h-11 w-full rounded-md border border-[#d4dce1] bg-white pl-10 pr-3 text-xs text-[#263746] outline-none placeholder:text-[#9aa4aa] focus:border-[#07865c] focus:ring-1 focus:ring-[#07865c]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-[11px] font-bold text-[#263746] sm:text-xs"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7c8992]"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="h-11 w-full rounded-md border border-[#d4dce1] bg-white pl-10 pr-11 text-xs text-[#263746] outline-none placeholder:text-[#9aa4aa] focus:border-[#07865c] focus:ring-1 focus:ring-[#07865c]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#52616b]"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-[11px] font-bold text-[#263746] sm:text-xs"
              >
                Confirm Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7c8992]"
                />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="h-11 w-full rounded-md border border-[#d4dce1] bg-white pl-10 pr-11 text-xs text-[#263746] outline-none placeholder:text-[#9aa4aa] focus:border-[#07865c] focus:ring-1 focus:ring-[#07865c]"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#52616b]"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
            </div>

            <label className="flex cursor-pointer items-start gap-2 pt-1">
              <input
                type="checkbox"
                required
                className="mt-0.5 h-4 w-4 rounded border-[#b9c6cd] accent-[#07865c]"
              />

              <span className="text-[10px] leading-4 text-[#46545e] sm:text-xs">
                I agree to the SocioSolve terms and confirm that the
                information provided is accurate.
              </span>
            </label>

            <button
              type="submit"
              className="h-11 w-full rounded-md bg-[#07865c] text-xs font-bold text-white shadow-sm transition hover:bg-[#06754f] active:scale-[0.99]"
            >
              Create Reviewer Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[11px] font-medium text-[#5d6971] sm:text-xs">
              Already have an account?{" "}
              <Link
                to="/reviewer/login"
                className="font-bold text-[#1765b0] hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>

        <div className="relative h-[105px] overflow-hidden sm:h-[120px]">
          <div className="absolute inset-x-0 bottom-0 h-[85px] bg-gradient-to-t from-[#a9cfa5] via-[#dcebd8] to-transparent" />

          <div className="absolute bottom-2 left-[8%] text-[42px] leading-none sm:text-[50px]">
            🌲
          </div>

          <div className="absolute bottom-1 left-[25%] text-[28px] leading-none sm:text-[35px]">
            🌳
          </div>

          <div className="absolute bottom-1 left-[43%] text-[32px] leading-none sm:text-[38px]">
            🌳
          </div>

          <div className="absolute bottom-1 right-[27%] text-[31px] leading-none sm:text-[38px]">
            🌳
          </div>

          <div className="absolute bottom-0 right-[8%] text-[50px] leading-none sm:text-[62px]">
            🌲
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;