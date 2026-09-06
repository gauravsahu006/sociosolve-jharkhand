import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  Mail,
  Phone,
  Building2,
  LockKeyhole,
  Eye,
  EyeOff,
  Pencil,
} from "lucide-react";

const defaultProfile = {
  fullName: "Reviewer",
  email: "reviewer@example.com",
  mobile: "",
  organization: "",
};

function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(defaultProfile);
  const [formData, setFormData] = useState(defaultProfile);
  const [editing, setEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedReviewer = sessionStorage.getItem("socioSolveReviewer");

    if (!savedReviewer) {
      return;
    }

    try {
      const data = JSON.parse(savedReviewer);

      const reviewerData = {
        fullName: data.fullName || defaultProfile.fullName,
        email: data.email || defaultProfile.email,
        mobile: data.mobile || "",
        organization: data.organization || "",
      };

      setProfile(reviewerData);
      setFormData(reviewerData);
    } catch (error) {
      console.error("Unable to load reviewer profile:", error);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.mobile.trim() ||
      !formData.organization.trim()
    ) {
      setMessage("Please fill all profile details.");
      return;
    }

    if (!/^\d{10}$/.test(formData.mobile)) {
      setMessage("Mobile number must contain 10 digits.");
      return;
    }

    sessionStorage.setItem(
      "socioSolveReviewer",
      JSON.stringify(formData)
    );

    setProfile(formData);
    setEditing(false);
    setMessage("Profile updated successfully.");
  };

  const handleCancel = () => {
    setFormData(profile);
    setEditing(false);
    setMessage("");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#092f5d]">
              Profile
            </h1>

            <p className="mt-1 text-sm text-[#687680]">
              Manage your reviewer account information.
            </p>
          </div>

          {!editing && (
            <button
              type="button"
              onClick={() => {
                setEditing(true);
                setMessage("");
              }}
              className="flex items-center gap-2 rounded-md bg-[#07865c] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#06754f]"
            >
              <Pencil size={14} />
              Edit Profile
            </button>
          )}
        </div>

        <div className="rounded-lg border border-[#e1e7ea] bg-white p-5 sm:p-6">
          <div className="flex flex-col items-center border-b border-[#e5e9ec] pb-6 sm:flex-row sm:gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eef4f8] text-[#244e76]">
              <UserRound size={30} />
            </div>

            <div className="mt-3 text-center sm:mt-0 sm:text-left">
              <h2 className="text-lg font-bold text-[#092f5d]">
                {profile.fullName}
              </h2>

              <p className="mt-1 text-xs text-[#687680]">
                {profile.organization || "Reviewer"}
              </p>
            </div>
          </div>

          {editing ? (
            <form onSubmit={handleSave} className="mt-6 space-y-5">
              <ProfileInput
                icon={<UserRound size={17} />}
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />

              <ProfileInput
                icon={<Mail size={17} />}
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />

              <ProfileInput
                icon={<Phone size={17} />}
                label="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                maxLength={10}
              />

              <ProfileInput
                icon={<Building2 size={17} />}
                label="Organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
              />

              <div className="pt-2">
                <label className="mb-2 block text-xs font-semibold text-[#344653]">
                  New Password
                </label>

                <div className="flex items-center rounded-md border border-[#d7e0e4] px-3 focus-within:border-[#07865c]">
                  <LockKeyhole
                    size={17}
                    className="shrink-0 text-[#7b8991]"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter new password"
                    className="w-full px-3 py-3 text-sm text-[#344653] outline-none placeholder:text-[#a0aaaf]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    className="text-[#7b8991]"
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
              </div>

              {message && (
                <div className="rounded-md border border-[#efd2ce] bg-[#fff7f5] px-4 py-3 text-xs font-medium text-[#d84a3a]">
                  {message}
                </div>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="rounded-md bg-[#07865c] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#06754f]"
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded-md border border-[#d4dde2] px-5 py-2.5 text-xs font-semibold text-[#344653] transition hover:border-[#07865c]"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-6 space-y-5">
              <InfoRow
                icon={<UserRound size={17} />}
                label="Full Name"
                value={profile.fullName}
              />

              <InfoRow
                icon={<Mail size={17} />}
                label="Email"
                value={profile.email}
              />

              <InfoRow
                icon={<Phone size={17} />}
                label="Mobile Number"
                value={profile.mobile || "Not provided"}
              />

              <InfoRow
                icon={<Building2 size={17} />}
                label="Organization"
                value={profile.organization || "Not provided"}
              />

              {message && (
                <div className="rounded-md border border-[#b9dec9] bg-[#eefaf4] px-4 py-3 text-xs font-medium text-[#07865c]">
                  {message}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-5 rounded-lg border border-[#efd2ce] bg-[#fffaf9] p-5">
          <h2 className="text-sm font-bold text-[#092f5d]">
            Account
          </h2>

          <p className="mt-1 text-xs text-[#687680]">
            Sign out from your reviewer account.
          </p>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-4 rounded-md border border-[#e5bdb8] px-5 py-2.5 text-xs font-semibold text-[#d84a3a] transition hover:bg-[#fff2ef]"
          >
            Logout
          </button>
        </div>

        <div className="mt-6">
          <Link
            to="/reviewer/dashboard"
            className="inline-flex rounded-md border border-[#d4dde2] px-5 py-2.5 text-sm font-semibold text-[#344653] transition hover:border-[#07865c] hover:text-[#07865c]"
          >
            ← Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProfileInput({
  icon,
  label,
  name,
  type = "text",
  value,
  onChange,
  maxLength,
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-[#344653]">
        {label}
      </label>

      <div className="flex items-center rounded-md border border-[#d7e0e4] px-3 focus-within:border-[#07865c]">
        <span className="shrink-0 text-[#7b8991]">
          {icon}
        </span>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          className="w-full px-3 py-3 text-sm text-[#344653] outline-none"
        />
      </div>
    </div>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 border-b border-[#eef1f3] pb-4 last:border-0 last:pb-0">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#eef7f3] text-[#07865c]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-[#89959c]">
          {label}
        </p>

        <p className="mt-1 truncate text-sm font-medium text-[#344653]">
          {value}
        </p>
      </div>
    </div>
  );
}

export default Profile;