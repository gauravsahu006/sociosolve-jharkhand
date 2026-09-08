import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import { auth } from "../../firebase/auth";
import { db } from "../../firebase/firestore";







function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  const fullName = formData.fullName.trim();
  const mobile = formData.mobile.trim();
  const email = formData.email.trim();
  const password = formData.password;

  if (!fullName || !mobile || !email || !password) {
    setError("Please fill in all fields.");
    setLoading(false);
    return;
  }

  if (!/^\d{10}$/.test(mobile)) {
    setError("Please enter a valid 10-digit mobile number.");
    setLoading(false);
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters.");
    setLoading(false);
    return;
  }

  try {
    // 1. Create Citizen account in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // 2. Save Citizen profile in Firestore
    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      fullName: fullName,
      mobile: mobile,
      email: email,
      role: "citizen",
      createdAt: serverTimestamp(),
    });

    // 3. Registration successful
    navigate("/citizen/login");

  } catch (err) {
    console.error("Citizen registration error:", err);

    if (err.code === "auth/email-already-in-use") {
      setError("This email is already registered. Please login.");
    } else if (err.code === "auth/invalid-email") {
      setError("Please enter a valid email address.");
    } else if (err.code === "auth/weak-password") {
      setError("Password must be at least 6 characters.");
    } else if (err.code === "permission-denied") {
      setError("Database permission denied. Please check Firebase rules.");
    } else {
      setError(err.message || "Registration failed. Please try again.");
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-[520px] min-h-screen flex flex-col">

        <div className="flex-1 px-6 pt-8 sm:px-8 sm:pt-9">

          <div className="text-center">
            <h1 className="text-[27px] font-bold leading-tight text-[#082e5c] sm:text-[29px]">
              New Here?
            </h1>

            <p className="mt-1 text-sm text-[#707a83]">
              Create your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">

            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-[13px] font-bold text-[#263746]"
              >
                Full Name
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                className="
                  h-11
                  w-full
                  rounded-md
                  border border-[#d5dce1]
                  bg-white
                  px-4
                  text-sm
                  text-[#263746]
                  outline-none
                  placeholder:text-[#9da5ab]
                  transition
                  focus:border-[#078e60]
                  focus:ring-2
                  focus:ring-[#078e60]/10
                "
              />
            </div>

            {/* Mobile */}
            <div>
              <label
                htmlFor="mobile"
                className="mb-2 block text-[13px] font-bold text-[#263746]"
              >
                Mobile Number
              </label>

              <input
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter mobile number"
                maxLength={10}
                className="
                  h-11
                  w-full
                  rounded-md
                  border border-[#d5dce1]
                  bg-white
                  px-4
                  text-sm
                  text-[#263746]
                  outline-none
                  placeholder:text-[#9da5ab]
                  transition
                  focus:border-[#078e60]
                  focus:ring-2
                  focus:ring-[#078e60]/10
                "
              />
            </div>

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
                placeholder="Enter email address"
                className="
                  h-11
                  w-full
                  rounded-md
                  border border-[#d5dce1]
                  bg-white
                  px-4
                  text-sm
                  text-[#263746]
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

              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="
                  h-11
                  w-full
                  rounded-md
                  border border-[#d5dce1]
                  bg-white
                  px-4
                  text-sm
                  text-[#263746]
                  outline-none
                  placeholder:text-[#9da5ab]
                  transition
                  focus:border-[#078e60]
                  focus:ring-2
                  focus:ring-[#078e60]/10
                "
              />
            </div>

            {error && (
              <p className="text-center text-[12px] font-medium text-red-500">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="
                h-11
                w-full
                rounded-md
                bg-[#07915f]
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-[#067b51]
                active:scale-[0.99]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading ? "Creating Account..." : "Register"}
            </button>

          </form>

          <div className="mt-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#e1e5e8]" />

            <span className="whitespace-nowrap text-xs text-[#707a83]">
              or continue with
            </span>

            <div className="h-px flex-1 bg-[#e1e5e8]" />
          </div>

          <div className="mt-5 flex justify-center gap-6">

            <button
              type="button"
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-[#e1e5e8]
                bg-white
                text-xl font-bold
                text-[#4285f4]
                shadow-sm
                transition
                hover:bg-[#f7faf9]
              "
            >
              G
            </button>

            <button
              type="button"
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-[#e1e5e8]
                bg-white
                text-2xl font-bold
                text-[#1877f2]
                shadow-sm
                transition
                hover:bg-[#f7faf9]
              "
            >
              f
            </button>

            <button
              type="button"
              className="
                flex h-12 w-12
                items-center justify-center
                rounded-full
                border border-[#e1e5e8]
                bg-white
                text-lg
                text-[#263746]
                shadow-sm
                transition
                hover:bg-[#f7faf9]
              "
            >
              ◉
            </button>

          </div>

          <p className="mt-6 text-center text-[13px] text-[#59656d]">
            Already have an account?{" "}
            <Link
              to="/citizen/login"
              className="font-semibold text-[#07865c] hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

        <div className="relative h-[135px] w-full overflow-hidden sm:h-[155px]">

          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7fbf9] to-[#e5f2eb]" />

          <div className="absolute -bottom-12 -left-[15%] h-28 w-[65%] rounded-[50%] bg-[#e1efe7]" />

          <div className="absolute -bottom-14 left-[20%] h-32 w-[70%] rounded-[50%] bg-[#d6eadd]" />

          <div className="absolute -bottom-12 right-[-20%] h-32 w-[65%] rounded-[50%] bg-[#e1efe7]" />

          <div className="absolute bottom-0 h-6 w-full bg-[#bddbc9]" />

          <div className="absolute bottom-6 left-[1%] text-[24px] sm:text-[29px]">
            🏠
          </div>

          <div className="absolute bottom-6 left-[42%] text-[18px] sm:text-[23px]">
            🏠
          </div>

          <div className="absolute bottom-7 left-[58%] text-[17px] sm:text-[22px]">
            🏠
          </div>

          <div className="absolute bottom-2 left-[22%] text-[43px] leading-none sm:text-[53px]">
            🌳
          </div>

          <div className="absolute bottom-2 left-[36%] text-[42px] leading-none sm:text-[50px]">
            🌳
          </div>

          <div className="absolute bottom-2 left-[51%] text-[32px] leading-none sm:text-[42px]">
            🌳
          </div>

          <div className="absolute bottom-2 left-[67%] text-[39px] leading-none sm:text-[50px]">
            🌳
          </div>

          <div className="absolute bottom-0 right-[-3%] text-[75px] leading-none sm:text-[90px]">
            🌳
          </div>

        </div>

      </div>
    </div>
  );
}

export default Register;