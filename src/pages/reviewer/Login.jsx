import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/reviewer/dashboard");
  };

  return (
    <div className="min-h-screen bg-white px-3 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-40px)] w-full max-w-[510px] flex-col overflow-hidden rounded-lg border border-[#aebdca] bg-white shadow-sm">

        <div className="flex-1 px-6 pb-0 pt-7 sm:px-9 sm:pt-8">

          <div className="text-center">
            <h1 className="text-[24px] font-bold leading-tight text-[#082e5c] sm:text-[28px]">
              Welcome Back!
            </h1>

            <p className="mt-1 text-sm font-medium text-[#334653]">
              Please login to continue
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-7 space-y-5"
          >
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-[11px] font-bold text-[#263746] sm:text-xs"
              >
                Email / Mobile Number
              </label>

              <input
                id="email"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email or mobile number"
                className="
                  h-11 w-full rounded-md
                  border border-[#d4dce1]
                  bg-white px-3
                  text-xs text-[#263746]
                  outline-none
                  placeholder:text-[#9aa4aa]
                  focus:border-[#07865c]
                  focus:ring-1 focus:ring-[#07865c]
                "
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-[11px] font-bold text-[#263746] sm:text-xs"
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
                    border border-[#d4dce1]
                    bg-white px-3 pr-11
                    text-xs text-[#263746]
                    outline-none
                    placeholder:text-[#9aa4aa]
                    focus:border-[#07865c]
                    focus:ring-1 focus:ring-[#07865c]
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute right-3 top-1/2
                    -translate-y-1/2
                    text-sm text-[#52616b]
                  "
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? "◉" : "◌"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="
                    h-4 w-4
                    rounded border-[#b9c6cd]
                    accent-[#07865c]
                  "
                />

                <span className="text-[10px] font-medium text-[#46545e] sm:text-xs">
                  Remember me
                </span>
              </label>

              <button
                type="button"
                className="
                  text-[10px] font-semibold
                  text-[#1765b0]
                  hover:underline
                  sm:text-xs
                "
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="
                h-11 w-full rounded-md
                bg-[#07865c]
                text-xs font-bold text-white
                shadow-sm
                transition
                hover:bg-[#06754f]
                active:scale-[0.99]
              "
            >
              Login
            </button>
          </form>

          <div className="mt-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#e1e6e9]" />

            <span className="text-[10px] font-medium text-[#5d6971] sm:text-xs">
              or continue with
            </span>

            <div className="h-px flex-1 bg-[#e1e6e9]" />
          </div>

          <div className="mt-4 flex justify-center gap-5">
            <button
              type="button"
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-[#e1e7ea]
                bg-white
                text-xl font-bold
                text-[#4285f4]
                shadow-sm
                transition hover:bg-[#f7fafb]
              "
              aria-label="Continue with Google"
            >
              G
            </button>

            <button
              type="button"
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-[#e1e7ea]
                bg-white
                text-xl
                shadow-sm
                transition hover:bg-[#f7fafb]
              "
              aria-label="Continue with Microsoft"
            >
              <span className="grid grid-cols-2 gap-[2px]">
                <span className="h-[8px] w-[8px] bg-[#f25022]" />
                <span className="h-[8px] w-[8px] bg-[#7fba00]" />
                <span className="h-[8px] w-[8px] bg-[#00a4ef]" />
                <span className="h-[8px] w-[8px] bg-[#ffb900]" />
              </span>
            </button>

            <button
              type="button"
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-[#e1e7ea]
                bg-white
                text-lg font-bold
                text-[#334653]
                shadow-sm
                transition hover:bg-[#f7fafb]
              "
              aria-label="Continue with another account"
            >
              ◎
            </button>
          </div>
        </div>

        <div className="relative mt-5 h-[145px] overflow-hidden sm:h-[165px]">
          <div className="absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t from-[#a9cfa5] via-[#dcebd8] to-transparent" />

          <div className="absolute bottom-3 left-[7%] text-[45px] leading-none sm:text-[55px]">
            🌲
          </div>

          <div className="absolute bottom-1 left-[23%] text-[30px] leading-none sm:text-[38px]">
            🌳
          </div>

          <div className="absolute bottom-2 left-[39%] text-[34px] leading-none sm:text-[42px]">
            🌳
          </div>

          <div className="absolute bottom-2 right-[30%] text-[35px] leading-none sm:text-[44px]">
            🌳
          </div>

          <div className="absolute bottom-0 right-[8%] text-[58px] leading-none sm:text-[70px]">
            🌲
          </div>

          <div className="absolute bottom-[52px] left-[12%] text-[30px] text-[#9bb8c6] sm:text-[38px]">
            ♢
          </div>

          <div className="absolute bottom-[63px] left-[31%] text-[27px] text-[#a9c2cf] sm:text-[35px]">
            ♢
          </div>

          <div className="absolute bottom-[58px] right-[27%] text-[28px] text-[#a9c2cf] sm:text-[36px]">
            ♢
          </div>

          <div className="absolute bottom-[67px] right-[13%] text-[34px] text-[#b4cbd6] sm:text-[42px]">
            ♢
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;