import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Building2,
  BriefcaseBusiness,
  MapPin,
  Camera,
  Save,
  Bell,
  Lock,
  Globe,
  Clock3,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Eye,
  EyeOff,
} from "lucide-react";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const [profile, setProfile] = useState({
    name: "Amit Sharma",
    email: "amit.sharma@tatasteel.com",
    phone: "+91 98765 43210",
    designation: "Industry Coordinator",
    department: "Corporate Innovation",
    organization: "Tata Steel Ltd.",
    location: "Ranchi, Jharkhand",
  });

  const [preferences, setPreferences] = useState({
    academicYear: "2026-27",
    language: "English",
    timezone: "Asia/Kolkata",
    projectUpdates: true,
    submissionReviews: true,
    mentorMessages: true,
    deadlineReminders: true,
    announcements: false,
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    newPassword: false,
    confirm: false,
  });

  const [saved, setSaved] = useState(false);

  const tabs = [
    {
      id: "profile",
      label: "Profile",
      icon: User,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
    },
    {
      id: "account",
      label: "Account",
      icon: Globe,
    },
    {
      id: "security",
      label: "Security",
      icon: Lock,
    },
  ];

  const handleProfileChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;

    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const renderPasswordInput = (name, label, placeholder) => {
    const visible = showPassword[name];

    return (
      <div>
        <label className="mb-2 block text-sm font-medium text-[#1E293B]">
          {label}
        </label>

        <div className="relative">
          <input
            type={visible ? "text" : "password"}
            name={name}
            value={passwords[name]}
            onChange={handlePasswordChange}
            placeholder={placeholder}
            className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 pr-12 text-sm text-[#1E293B] outline-none transition focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword((prev) => ({
                ...prev,
                [name]: !prev[name],
              }))
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#159447]"
          >
            {visible ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#092752]">
          Profile & Settings
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage your industry profile, account preferences and security.
        </p>
      </div>

      {/* Success Message */}
      {saved && (
        <div className="mb-5 flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          <CheckCircle2 size={19} />
          <span>Changes saved successfully.</span>
        </div>
      )}

      {/* Profile Summary */}
      <div className="mb-6 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="relative flex-shrink-0">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#159447] text-3xl font-bold text-white">
              AS
            </div>

            <button
              type="button"
              className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#092752] text-white shadow-md hover:bg-[#117C3B]"
            >
              <Camera size={15} />
            </button>
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-bold text-[#092752]">
              Amit Sharma
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Industry Coordinator
            </p>

            <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Building2 size={14} />
                Tata Steel Ltd.
              </span>

              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                Ranchi, Jharkhand
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-sm font-medium text-[#159447]">
            <CheckCircle2 size={16} />
            Active Account
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 overflow-x-auto rounded-xl bg-white shadow-sm ring-1 ring-slate-200/70">
        <div className="flex min-w-max border-b border-[#E2E8F0]">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 border-b-2 px-5 py-4 text-sm font-medium transition ${
                  active
                    ? "border-[#159447] text-[#159447]"
                    : "border-transparent text-slate-500 hover:text-[#092752]"
                }`}
              >
                <Icon size={17} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Profile Tab */}
      {activeTab === "profile" && (
        <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#092752]">
              Personal Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Update your basic profile and organization information.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-[#1E293B]">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                  className="w-full rounded-lg border border-[#E2E8F0] py-3 pl-10 pr-4 text-sm outline-none focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#1E293B]">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  className="w-full rounded-lg border border-[#E2E8F0] py-3 pl-10 pr-4 text-sm outline-none focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#1E293B]">
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleProfileChange}
                  className="w-full rounded-lg border border-[#E2E8F0] py-3 pl-10 pr-4 text-sm outline-none focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#1E293B]">
                Designation
              </label>

              <div className="relative">
                <BriefcaseBusiness
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  name="designation"
                  value={profile.designation}
                  onChange={handleProfileChange}
                  className="w-full rounded-lg border border-[#E2E8F0] py-3 pl-10 pr-4 text-sm outline-none focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#1E293B]">
                Department
              </label>

              <input
                type="text"
                name="department"
                value={profile.department}
                onChange={handleProfileChange}
                className="w-full rounded-lg border border-[#E2E8F0] px-4 py-3 text-sm outline-none focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[#1E293B]">
                Organization
              </label>

              <input
                type="text"
                name="organization"
                value={profile.organization}
                onChange={handleProfileChange}
                className="w-full rounded-lg border border-[#E2E8F0] px-4 py-3 text-sm outline-none focus:border-[#159447] focus:ring-2 focus:ring-[#159447]/10"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-end border-t border-[#E2E8F0] pt-5">
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-2 rounded-lg bg-[#159447] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
            >
              <Save size={17} />
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === "notifications" && (
        <div className="space-y-6">
          <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6">
            <h2 className="text-lg font-semibold text-[#092752]">
              Notification Preferences
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Choose which updates you want to receive.
            </p>

            <div className="mt-6 divide-y divide-[#E2E8F0]">
              {[
                {
                  key: "projectUpdates",
                  title: "Project Updates",
                  description:
                    "Receive updates about active industry projects.",
                },
                {
                  key: "submissionReviews",
                  title: "Submission Reviews",
                  description:
                    "Get notified when project submissions are reviewed.",
                },
                {
                  key: "mentorMessages",
                  title: "Mentor Messages",
                  description:
                    "Receive messages and updates from assigned mentors.",
                },
                {
                  key: "deadlineReminders",
                  title: "Deadline Reminders",
                  description:
                    "Get reminders about upcoming project deadlines.",
                },
                {
                  key: "announcements",
                  title: "Platform Announcements",
                  description:
                    "Receive important platform announcements.",
                },
              ].map((item) => (
                <div
                  key={item.key}
                  className="flex items-center justify-between gap-4 py-5"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#1E293B]">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => togglePreference(item.key)}
                    className={`relative h-6 w-11 flex-shrink-0 rounded-full transition ${
                      preferences[item.key]
                        ? "bg-[#159447]"
                        : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                        preferences[item.key]
                          ? "left-6"
                          : "left-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-2 rounded-lg bg-[#159447] px-5 py-3 text-sm font-semibold text-white hover:bg-[#117C3B]"
            >
              <Save size={17} />
              Save Preferences
            </button>
          </div>
        </div>
      )}

      {/* Account Tab */}
      {activeTab === "account" && (
        <div className="space-y-6">
          <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6">
            <h2 className="text-lg font-semibold text-[#092752]">
              Account Preferences
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Configure your portal preferences.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1E293B]">
                  Academic Year
                </label>

                <select
                  value={preferences.academicYear}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      academicYear: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm outline-none focus:border-[#159447]"
                >
                  <option>2024-25</option>
                  <option>2025-26</option>
                  <option>2026-27</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#1E293B]">
                  Language
                </label>

                <select
                  value={preferences.language}
                  onChange={(e) =>
                    setPreferences((prev) => ({
                      ...prev,
                      language: e.target.value,
                    }))
                  }
                  className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-sm outline-none focus:border-[#159447]"
                >
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#1E293B]">
                  Time Zone
                </label>

                <div className="relative">
                  <Clock3
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    value={preferences.timezone}
                    onChange={(e) =>
                      setPreferences((prev) => ({
                        ...prev,
                        timezone: e.target.value,
                      }))
                    }
                    className="w-full appearance-none rounded-lg border border-[#E2E8F0] bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-[#159447]"
                  >
                    <option value="Asia/Kolkata">
                      Asia/Kolkata (IST)
                    </option>
                    <option value="UTC">UTC</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end border-t border-[#E2E8F0] pt-5">
              <button
                type="button"
                onClick={handleSave}
                className="flex items-center gap-2 rounded-lg bg-[#159447] px-5 py-3 text-sm font-semibold text-white hover:bg-[#117C3B]"
              >
                <Save size={17} />
                Save Settings
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-red-200 bg-red-50 p-5 sm:p-6">
            <div className="flex gap-3">
              <AlertTriangle className="mt-0.5 text-red-500" size={20} />

              <div>
                <h3 className="font-semibold text-red-700">
                  Deactivate Account
                </h3>

                <p className="mt-1 text-sm text-red-600">
                  Deactivating your account will disable access to
                  the Industry Portal.
                </p>

                <button
                  type="button"
                  className="mt-4 rounded-lg border border-red-300 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-100"
                >
                  Deactivate Account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === "security" && (
        <div className="space-y-6">
          <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-[#159447]">
                <ShieldCheck size={20} />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#092752]">
                  Password & Security
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Keep your account secure by using a strong password.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5">
              {renderPasswordInput(
                "current",
                "Current Password",
                "Enter current password"
              )}

              {renderPasswordInput(
                "newPassword",
                "New Password",
                "Enter new password"
              )}

              {renderPasswordInput(
                "confirm",
                "Confirm New Password",
                "Confirm new password"
              )}
            </div>

            <div className="mt-6 flex justify-end border-t border-[#E2E8F0] pt-5">
              <button
                type="button"
                onClick={handleSave}
                className="flex items-center gap-2 rounded-lg bg-[#159447] px-5 py-3 text-sm font-semibold text-white hover:bg-[#117C3B]"
              >
                <Lock size={17} />
                Change Password
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200/70 sm:p-6">
            <h3 className="text-base font-semibold text-[#092752]">
              Security Status
            </h3>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
                <div>
                  <p className="text-sm font-medium text-[#1E293B]">
                    Password
                  </p>
                  <p className="text-xs text-slate-500">
                    Last changed 30 days ago
                  </p>
                </div>

                <CheckCircle2
                  size={19}
                  className="text-[#159447]"
                />
              </div>

              <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
                <div>
                  <p className="text-sm font-medium text-[#1E293B]">
                    Email Verification
                  </p>
                  <p className="text-xs text-slate-500">
                    Your email address is verified
                  </p>
                </div>

                <CheckCircle2
                  size={19}
                  className="text-[#159447]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;