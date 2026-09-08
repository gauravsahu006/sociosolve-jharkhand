import React, { useState } from "react";
import {
  User,
  Bell,
  Shield,
  Lock,
  Save,
  Camera,
  Mail,
  Phone,
  Building2,
  Eye,
  EyeOff,
} from "lucide-react";

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const [profile, setProfile] = useState({
    name: "Amit Sharma",
    email: "amit.sharma@jharkhand.gov.in",
    phone: "+91 98765 43210",
    department: "Department of Information Technology",
    designation: "Government Officer",
  });

  const [notifications, setNotifications] = useState({
    email: true,
    submissions: true,
    approvals: true,
    milestones: false,
    system: true,
  });

  const [security, setSecurity] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const tabs = [
    {
      name: "Profile",
      icon: User,
    },
    {
      name: "Notifications",
      icon: Bell,
    },
    {
      name: "Account",
      icon: Shield,
    },
    {
      name: "Security",
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

  const handleSecurityChange = (e) => {
    const { name, value } = e.target;

    setSecurity((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    alert(`${activeTab} settings saved successfully.`);
  };

  const handleNotificationChange = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#092752]">
          Profile & Settings
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage your government officer profile, preferences and account
          settings.
        </p>
      </div>

      {/* Profile Summary */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="relative">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#159447] text-2xl font-bold text-white">
              AS
            </div>

            <button
              onClick={() => alert("Profile photo upload")}
              className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#092752] text-white"
            >
              <Camera size={13} />
            </button>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#092752]">
              Amit Sharma
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Government Officer
            </p>

            <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Mail size={13} />
                amit.sharma@jharkhand.gov.in
              </span>

              <span className="flex items-center gap-1">
                <Building2 size={13} />
                Jharkhand Government
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex min-w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 border-b-2 px-5 py-4 text-sm font-medium transition ${
                  activeTab === tab.name
                    ? "border-[#159447] text-[#159447]"
                    : "border-transparent text-slate-500 hover:text-[#092752]"
                }`}
              >
                <Icon size={17} />
                {tab.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Profile */}
      {activeTab === "Profile" && (
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5">
            <h2 className="font-semibold text-[#092752]">
              Personal Information
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Update your basic profile information.
            </p>
          </div>

          <div className="grid gap-5 p-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#159447]"
              />
            </div>

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
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#159447]"
                />
              </div>
            </div>

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
                  name="phone"
                  value={profile.phone}
                  onChange={handleProfileChange}
                  className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#159447]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Designation
              </label>

              <input
                type="text"
                name="designation"
                value={profile.designation}
                onChange={handleProfileChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#159447]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Department
              </label>

              <input
                type="text"
                name="department"
                value={profile.department}
                onChange={handleProfileChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#159447]"
              />
            </div>
          </div>

          <div className="flex justify-end border-t border-slate-100 p-5">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 rounded-lg bg-[#159447] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#117C3B]"
            >
              <Save size={16} />
              Save Changes
            </button>
          </div>
        </div>
      )}

      {/* Notifications */}
      {activeTab === "Notifications" && (
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5">
            <h2 className="font-semibold text-[#092752]">
              Notification Preferences
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Choose which notifications you want to receive.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {[
              {
                key: "email",
                title: "Email Notifications",
                description: "Receive important updates through email.",
              },
              {
                key: "submissions",
                title: "New Submissions",
                description: "Get notified when a project is submitted.",
              },
              {
                key: "approvals",
                title: "Approval Requests",
                description: "Receive notifications for pending approvals.",
              },
              {
                key: "milestones",
                title: "Milestone Updates",
                description: "Get project milestone and progress updates.",
              },
              {
                key: "system",
                title: "System Notifications",
                description: "Receive important system announcements.",
              },
            ].map((item) => (
              <div
                key={item.key}
                className="flex items-center justify-between gap-4 p-5"
              >
                <div>
                  <h3 className="font-medium text-[#092752]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={() => handleNotificationChange(item.key)}
                  className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                    notifications[item.key]
                      ? "bg-[#159447]"
                      : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                      notifications[item.key]
                        ? "left-6"
                        : "left-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end border-t border-slate-100 p-5">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 rounded-lg bg-[#159447] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#117C3B]"
            >
              <Save size={16} />
              Save Preferences
            </button>
          </div>
        </div>
      )}

      {/* Account */}
      {activeTab === "Account" && (
        <div className="space-y-5">
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-100 p-5">
              <h2 className="font-semibold text-[#092752]">
                Account Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Information about your government portal account.
              </p>
            </div>

            <div className="space-y-4 p-5">
              <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    Account Status
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Your account is currently active.
                  </p>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-[#159447]">
                  Active
                </span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    User Role
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Access level assigned by the government administrator.
                  </p>
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  Government Officer
                </span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-slate-50 p-4">
                <div>
                  <p className="text-sm font-medium text-slate-700">
                    Financial Year
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Current portal working year.
                  </p>
                </div>

                <span className="font-medium text-[#092752]">
                  2026-27
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-red-200 bg-white p-5">
            <h2 className="font-semibold text-red-600">
              Account Actions
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              These actions require administrator approval.
            </p>

            <button
              onClick={() => alert("Account deactivation request sent")}
              className="mt-4 rounded-lg border border-red-200 px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50"
            >
              Request Account Deactivation
            </button>
          </div>
        </div>
      )}

      {/* Security */}
      {activeTab === "Security" && (
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5">
            <h2 className="font-semibold text-[#092752]">
              Security Settings
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Update your password and protect your account.
            </p>
          </div>

          <div className="max-w-2xl space-y-5 p-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Current Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="currentPassword"
                  value={security.currentPassword}
                  onChange={handleSecurityChange}
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 pr-11 text-sm outline-none focus:border-[#159447]"
                />

                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showPassword ? (
                    <EyeOff size={17} />
                  ) : (
                    <Eye size={17} />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                New Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                value={security.newPassword}
                onChange={handleSecurityChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#159447]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Confirm New Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                value={security.confirmPassword}
                onChange={handleSecurityChange}
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#159447]"
              />
            </div>

            <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-700">
              Password should contain at least 8 characters with a mix of
              letters, numbers and special characters.
            </div>
          </div>

          <div className="flex justify-end border-t border-slate-100 p-5">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 rounded-lg bg-[#159447] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#117C3B]"
            >
              <Save size={16} />
              Update Password
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;