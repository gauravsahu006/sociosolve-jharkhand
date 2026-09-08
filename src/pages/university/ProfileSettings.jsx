import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Building2,
  Lock,
  Bell,
  ShieldCheck,
  Save,
  Camera,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const [profile, setProfile] = useState({
    name: "Dr. Rajeev Kumar",
    email: "rajeev.kumar@bitmesra.ac.in",
    phone: "+91 98765 43210",
    university: "BIT Mesra",
    department: "Computer Science & Engineering",
    designation: "Professor & Project Coordinator",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    newPassword: false,
    confirm: false,
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    projectUpdates: true,
    challengeAlerts: true,
    mentorMessages: true,
  });

  const [saved, setSaved] = useState(false);

  const handleProfileChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePasswordChange = (field, value) => {
    setPasswords((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const togglePassword = (field) => {
    setShowPasswords((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const tabs = [
    {
      id: "profile",
      label: "Profile Information",
      icon: User,
    },
    {
      id: "security",
      label: "Security",
      icon: Lock,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
          Profile & Settings
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage your profile information, security and preferences.
        </p>
      </div>

      {/* Success Message */}
      {saved && (
        <div className="flex items-center gap-3 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-[#159447]">
          <CheckCircle2 size={19} />
          Your changes have been saved successfully.
        </div>
      )}

      {/* Profile Top */}
      <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#159447]/10 text-3xl font-bold text-[#159447]">
              RK
            </div>

            <button
              type="button"
              className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#159447] text-white shadow-sm transition hover:bg-[#117C3B]"
            >
              <Camera size={15} />
            </button>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#092752]">
              Dr. Rajeev Kumar
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Professor & Project Coordinator
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Building2 size={13} />
                BIT Mesra
              </span>

              <span className="flex items-center gap-1">
                <Mail size={13} />
                rajeev.kumar@bitmesra.ac.in
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs + Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[250px_1fr]">
        {/* Tabs */}
        <div className="rounded-xl bg-white p-3 shadow-sm">
          <div className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
            {tabs.map((tab) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex min-w-max items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition ${
                    activeTab === tab.id
                      ? "bg-[#159447]/10 text-[#159447]"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="rounded-xl bg-white p-5 shadow-sm sm:p-6">
          {/* Profile */}
          {activeTab === "profile" && (
            <div>
              <div className="border-b border-slate-100 pb-4">
                <h2 className="font-semibold text-[#092752]">
                  Profile Information
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Update your university profile information.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) =>
                        handleProfileChange("name", e.target.value)
                      }
                      className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#159447]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) =>
                        handleProfileChange("email", e.target.value)
                      }
                      className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#159447]"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      value={profile.phone}
                      onChange={(e) =>
                        handleProfileChange("phone", e.target.value)
                      }
                      className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#159447]"
                    />
                  </div>
                </div>

                {/* University */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    University
                  </label>

                  <div className="relative">
                    <Building2
                      size={17}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      value={profile.university}
                      onChange={(e) =>
                        handleProfileChange(
                          "university",
                          e.target.value
                        )
                      }
                      className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#159447]"
                    />
                  </div>
                </div>

                {/* Department */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Department
                  </label>

                  <input
                    type="text"
                    value={profile.department}
                    onChange={(e) =>
                      handleProfileChange(
                        "department",
                        e.target.value
                      )
                    }
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#159447]"
                  />
                </div>

                {/* Designation */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Designation
                  </label>

                  <input
                    type="text"
                    value={profile.designation}
                    onChange={(e) =>
                      handleProfileChange(
                        "designation",
                        e.target.value
                      )
                    }
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#159447]"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#159447] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
                >
                  <Save size={17} />
                  Save Changes
                </button>
              </div>
            </div>
          )}

          {/* Security */}
          {activeTab === "security" && (
            <div>
              <div className="border-b border-slate-100 pb-4">
                <h2 className="font-semibold text-[#092752]">
                  Security Settings
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Update your password and account security.
                </p>
              </div>

              <div className="mt-6 max-w-xl space-y-5">
                {/* Current Password */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Current Password
                  </label>

                  <div className="relative">
                    <input
                      type={
                        showPasswords.current ? "text" : "password"
                      }
                      value={passwords.current}
                      onChange={(e) =>
                        handlePasswordChange(
                          "current",
                          e.target.value
                        )
                      }
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 pr-11 text-sm outline-none focus:border-[#159447]"
                    />

                    <button
                      type="button"
                      onClick={() => togglePassword("current")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                    >
                      {showPasswords.current ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* New Password */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    New Password
                  </label>

                  <div className="relative">
                    <input
                      type={
                        showPasswords.newPassword
                          ? "text"
                          : "password"
                      }
                      value={passwords.newPassword}
                      onChange={(e) =>
                        handlePasswordChange(
                          "newPassword",
                          e.target.value
                        )
                      }
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 pr-11 text-sm outline-none focus:border-[#159447]"
                    />

                    <button
                      type="button"
                      onClick={() => togglePassword("newPassword")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                    >
                      {showPasswords.newPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Confirm New Password
                  </label>

                  <div className="relative">
                    <input
                      type={
                        showPasswords.confirm ? "text" : "password"
                      }
                      value={passwords.confirm}
                      onChange={(e) =>
                        handlePasswordChange(
                          "confirm",
                          e.target.value
                        )
                      }
                      className="w-full rounded-lg border border-slate-200 px-4 py-2.5 pr-11 text-sm outline-none focus:border-[#159447]"
                    />

                    <button
                      type="button"
                      onClick={() => togglePassword("confirm")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                    >
                      {showPasswords.confirm ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={20}
                      className="mt-0.5 text-[#159447]"
                    />

                    <div>
                      <p className="text-sm font-medium text-[#092752]">
                        Password security
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Use at least 8 characters with a combination of
                        letters, numbers and special characters.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#159447] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
                >
                  <Lock size={17} />
                  Update Password
                </button>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === "notifications" && (
            <div>
              <div className="border-b border-slate-100 pb-4">
                <h2 className="font-semibold text-[#092752]">
                  Notification Preferences
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Choose which notifications you want to receive.
                </p>
              </div>

              <div className="mt-5 divide-y divide-slate-100">
                {[
                  {
                    key: "emailNotifications",
                    title: "Email Notifications",
                    description:
                      "Receive important platform notifications through email.",
                  },
                  {
                    key: "projectUpdates",
                    title: "Project Updates",
                    description:
                      "Get updates about your projects and milestones.",
                  },
                  {
                    key: "challengeAlerts",
                    title: "Challenge Alerts",
                    description:
                      "Receive notifications about new recommended challenges.",
                  },
                  {
                    key: "mentorMessages",
                    title: "Mentor Messages",
                    description:
                      "Get notified when a faculty mentor sends you a message.",
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between gap-4 py-5"
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-[#092752]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setPreferences((prev) => ({
                          ...prev,
                          [item.key]: !prev[item.key],
                        }))
                      }
                      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                        preferences[item.key]
                          ? "bg-[#159447]"
                          : "bg-slate-300"
                      }`}
                    >
                      <span
                        className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition ${
                          preferences[item.key]
                            ? "left-6"
                            : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#159447] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
                >
                  <Save size={17} />
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;