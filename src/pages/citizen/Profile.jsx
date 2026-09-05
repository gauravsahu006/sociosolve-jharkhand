import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Phone,
  Mail,
  MapPin,
  Pencil,
  Lock,
  LogOut,
  Save,
} from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    fullName: "Anjali",
    mobile: "",
    email: "",
    address: "",
    district: "",
  });

  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedProfile = sessionStorage.getItem("socioSolveProfile");

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else {
      const registeredUser = sessionStorage.getItem("socioSolveUser");

      if (registeredUser) {
        const user = JSON.parse(registeredUser);

        setProfile((prev) => ({
          ...prev,
          fullName: user.fullName || prev.fullName,
          mobile: user.mobile || "",
        }));
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (!profile.fullName.trim()) {
      setMessage("Full name is required.");
      return;
    }

    if (!profile.mobile.trim()) {
      setMessage("Mobile number is required.");
      return;
    }

    if (!/^\d{10}$/.test(profile.mobile)) {
      setMessage("Enter a valid 10-digit mobile number.");
      return;
    }

    sessionStorage.setItem(
      "socioSolveProfile",
      JSON.stringify(profile)
    );

    setEditing(false);
    setMessage("Profile updated successfully.");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f5f8f7] py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <Link
          to="/citizen/dashboard"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#0f766e] mb-5"
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </Link>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

          <div className="px-6 py-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#ccfbf1] flex items-center justify-center">
                  <User
                    size={30}
                    className="text-[#0f766e]"
                  />
                </div>

                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {profile.fullName || "Citizen"}
                  </h1>

                  <p className="text-sm text-gray-500 mt-1">
                    Citizen Profile
                  </p>
                </div>
              </div>

              {!editing && (
                <button
                  onClick={() => setEditing(true)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Pencil size={16} />
                  Edit Profile
                </button>
              )}

            </div>
          </div>

          <form onSubmit={handleSave} className="p-6">

            {message && (
              <div className="mb-6 rounded-lg bg-[#f0fdfa] border border-[#ccfbf1] px-4 py-3 text-sm text-[#0f766e]">
                {message}
              </div>
            )}

            <h2 className="text-lg font-bold text-gray-900">
              Personal Information
            </h2>

            <p className="text-sm text-gray-500 mt-1 mb-6">
              Manage your personal information used on SocioSolve.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="fullName"
                    value={profile.fullName}
                    onChange={handleChange}
                    disabled={!editing}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 outline-none text-sm disabled:bg-gray-50 disabled:text-gray-600 focus:border-[#0f766e]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="tel"
                    name="mobile"
                    value={profile.mobile}
                    onChange={handleChange}
                    disabled={!editing}
                    maxLength={10}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 outline-none text-sm disabled:bg-gray-50 disabled:text-gray-600 focus:border-[#0f766e]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    disabled={!editing}
                    placeholder="Enter email address"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 outline-none text-sm disabled:bg-gray-50 disabled:text-gray-600 focus:border-[#0f766e]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  District
                </label>

                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="district"
                    value={profile.district}
                    onChange={handleChange}
                    disabled={!editing}
                    placeholder="Enter district"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 outline-none text-sm disabled:bg-gray-50 disabled:text-gray-600 focus:border-[#0f766e]"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address
                </label>

                <div className="relative">
                  <MapPin
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />

                  <textarea
                    name="address"
                    value={profile.address}
                    onChange={handleChange}
                    disabled={!editing}
                    rows={3}
                    placeholder="Enter your address"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 outline-none text-sm resize-none disabled:bg-gray-50 disabled:text-gray-600 focus:border-[#0f766e]"
                  />
                </div>
              </div>

            </div>

            {editing && (
              <div className="flex flex-col sm:flex-row gap-3 mt-7">

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#0f766e] text-white text-sm font-medium hover:bg-[#0b625c]"
                >
                  <Save size={17} />
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="px-5 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>

              </div>
            )}

          </form>

          <div className="border-t border-gray-200 p-6">

            <h2 className="text-lg font-bold text-gray-900">
              Account Settings
            </h2>

            <div className="mt-4 space-y-3">

              <button
                type="button"
                className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:bg-gray-50 text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                  <Lock size={19} className="text-gray-600" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Change Password
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Update your account password
                  </p>
                </div>
              </button>

              <button
                type="button"
                onClick={handleLogout}
                className="w-full flex items-center gap-4 p-4 rounded-xl border border-red-100 hover:bg-red-50 text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                  <LogOut size={19} className="text-red-500" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-red-600">
                    Logout
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Sign out from your SocioSolve account
                  </p>
                </div>
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}