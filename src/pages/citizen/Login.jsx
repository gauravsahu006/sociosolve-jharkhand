import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/citizen/dashboard");
    }, 500);
  };

  const handleRegister = () => {
    navigate("/citizen/register");
  };

  const handleForgotPassword = () => {
    alert("Password reset feature will be available soon.");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex min-h-screen w-full max-w-[520px] flex-col">

        {/* Form */}
        <div className="flex-1 px-7 pt-9 sm:px-10 sm:pt-10">

          <div className="text-center">
            <h1 className="text-[26px] font-bold leading-tight text-[#082e5c] sm:text-[29px]">
              Welcome Back!
            </h1>

            <p className="mt-1 text-sm text-[#707a83]">
              Login to your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-9 space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[13px] font-bold text-[#263746]"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="
                  h-11 w-full rounded-md
                  border border-[#d5dce1]
                  bg-white px-4
                  text-sm text-[#263746]
                  outline-none
                  placeholder:text-[#9da5ab]
                  transition
                  focus:border-[#078e60]
                  focus:ring-2
                  focus:ring-[#078e60]/10
                "
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-[13px] font-bold text-[#263746]"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="
                    h-11 w-full rounded-md
                    border border-[#d5dce1]
                    bg-white px-4 pr-12
                    text-sm text-[#263746]
                    outline-none
                    placeholder:text-[#9da5ab]
                    transition
                    focus:border-[#078e60]
                    focus:ring-2
                    focus:ring-[#078e60]/10
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute right-3 top-1/2
                    -translate-y-1/2
                    text-[#5e6c75]
                    hover:text-[#078e60]
                  "
                  aria-label="Show or hide password"
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Forgot Password */}
            <div>
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-[13px] font-semibold text-[#07865c] hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login */}
            <button
              type="submit"
              disabled={loading}
              className="
                h-12 w-full rounded-md
                bg-[#07915f]
                text-sm font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-[#067b51]
                active:scale-[0.99]
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Register */}
          <p className="mt-7 text-center text-[13px] text-[#59656d]">
            Don't have an account?{" "}
            <button
              type="button"
              onClick={handleRegister}
              className="font-semibold text-[#07865c] hover:underline"
            >
              Register Now
            </button>
          </p>
        </div>

        {/* Bottom Illustration */}
        <div className="relative h-[150px] w-full overflow-hidden sm:h-[175px]">

          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f4faf7] to-[#e5f2eb]" />

          <div className="absolute -bottom-12 -left-16 h-32 w-[70%] rounded-[50%] bg-[#e4f1e9]" />

          <div className="absolute -bottom-16 left-[20%] h-36 w-[70%] rounded-[50%] bg-[#d7ebdf]" />

          <div className="absolute -bottom-14 right-[-20%] h-36 w-[65%] rounded-[50%] bg-[#e0eee6]" />

          <div className="absolute bottom-0 h-7 w-full bg-[#bddbc9]" />

          <div className="absolute bottom-8 left-[62%] text-[20px] sm:text-[25px]">
            🏠
          </div>

          <div className="absolute bottom-8 left-[69%] text-[17px] sm:text-[22px]">
            ⛪
          </div>

          <div className="absolute bottom-3 left-[7%] text-[55px] leading-none sm:text-[70px]">
            🌳
          </div>

          <div className="absolute bottom-3 left-[20%] text-[43px] leading-none sm:text-[55px]">
            🌳
          </div>

          <div className="absolute bottom-3 left-[32%] text-[38px] leading-none sm:text-[48px]">
            🌳
          </div>

          <div className="absolute bottom-3 left-[47%] text-[42px] leading-none sm:text-[52px]">
            🌳
          </div>

          <div className="absolute bottom-3 left-[57%] text-[35px] leading-none sm:text-[45px]">
            🌳
          </div>

          <div className="absolute bottom-3 right-[13%] text-[43px] leading-none sm:text-[55px]">
            🌳
          </div>

          <div className="absolute bottom-2 right-[-2%] text-[58px] leading-none sm:text-[72px]">
            🌳
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;