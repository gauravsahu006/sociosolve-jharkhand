import React, { useMemo, useState } from "react";
import {
  Bell,
  Search,
  CheckCircle2,
  AlertTriangle,
  Clock3,
  FileText,
  Building2,
  GraduationCap,
  UserPlus,
  Check,
  Trash2,
} from "lucide-react";

const Notifications = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Project Submission",
      message:
        "Team AquaTech from BIT Mesra has submitted the final solution for Smart Water Management System.",
      type: "Submission",
      time: "10 minutes ago",
      read: false,
      icon: FileText,
    },
    {
      id: 2,
      title: "Industry Partner Approval Pending",
      message:
        "Adani Group has requested approval to participate as an industry partner.",
      type: "Approval",
      time: "1 hour ago",
      read: false,
      icon: Building2,
    },
    {
      id: 3,
      title: "Project Milestone Delayed",
      message:
        "Smart Traffic Monitoring project is behind its planned milestone schedule.",
      type: "Alert",
      time: "3 hours ago",
      read: false,
      icon: AlertTriangle,
    },
    {
      id: 4,
      title: "University Registration Approved",
      message:
        "Ranchi University has successfully completed the government verification process.",
      type: "University",
      time: "5 hours ago",
      read: true,
      icon: GraduationCap,
    },
    {
      id: 5,
      title: "New Industry Expert Added",
      message:
        "Tata Steel Ltd. has added 3 new experts to its project mentorship team.",
      type: "Industry",
      time: "Yesterday",
      read: true,
      icon: UserPlus,
    },
    {
      id: 6,
      title: "Submission Approved",
      message:
        "The AI Crop Disease Detection prototype has been approved by the review team.",
      type: "Submission",
      time: "Yesterday",
      read: true,
      icon: CheckCircle2,
    },
    {
      id: 7,
      title: "Milestone Deadline Approaching",
      message:
        "Rural Healthcare Platform field testing deadline is approaching on 20 Sep 2026.",
      type: "Reminder",
      time: "2 days ago",
      read: true,
      icon: Clock3,
    },
    {
      id: 8,
      title: "New University Project",
      message:
        "A new project has been initiated by NIT Jamshedpur under the agricultural productivity challenge.",
      type: "University",
      time: "3 days ago",
      read: true,
      icon: GraduationCap,
    },
  ]);

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const filteredNotifications = useMemo(() => {
    return notifications.filter((notification) => {
      const matchesSearch =
        notification.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        notification.message
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" || notification.type === filter;

      return matchesSearch && matchesFilter;
    });
  }, [notifications, search, filter]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const getTypeStyle = (type) => {
    if (type === "Alert") {
      return "bg-red-50 text-red-600";
    }

    if (type === "Approval") {
      return "bg-orange-50 text-orange-600";
    }

    if (type === "Submission") {
      return "bg-blue-50 text-blue-600";
    }

    if (type === "University") {
      return "bg-purple-50 text-purple-600";
    }

    if (type === "Industry") {
      return "bg-emerald-50 text-[#159447]";
    }

    return "bg-slate-100 text-slate-600";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
              Notifications
            </h1>

            {unreadCount > 0 && (
              <span className="rounded-full bg-[#159447] px-3 py-1 text-xs font-bold text-white">
                {unreadCount} New
              </span>
            )}
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Stay updated with project activities, approvals and important
            government actions.
          </p>
        </div>

        <button
          onClick={markAllAsRead}
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-[#159447] hover:text-[#159447]"
        >
          <Check size={17} />
          Mark All as Read
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Notifications
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#092752]">
                {notifications.length}
              </h2>
            </div>

            <div className="rounded-xl bg-blue-50 p-3 text-[#092752]">
              <Bell size={24} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Unread</p>

              <h2 className="mt-2 text-3xl font-bold text-[#159447]">
                {unreadCount}
              </h2>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 text-[#159447]">
              <Bell size={24} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Action Required
              </p>

              <h2 className="mt-2 text-3xl font-bold text-orange-600">
                03
              </h2>
            </div>

            <div className="rounded-xl bg-orange-50 p-3 text-orange-600">
              <AlertTriangle size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search notifications..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-[#159447] focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#159447]"
          >
            <option value="All">All Notifications</option>
            <option value="Submission">Submissions</option>
            <option value="Approval">Approvals</option>
            <option value="Alert">Alerts</option>
            <option value="University">Universities</option>
            <option value="Industry">Industry</option>
            <option value="Reminder">Reminders</option>
          </select>
        </div>
      </div>

      {/* Notification List */}
      <div className="space-y-3">
        {filteredNotifications.map((notification) => {
          const Icon = notification.icon;

          return (
            <div
              key={notification.id}
              className={`rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md ${
                notification.read
                  ? "border-slate-200"
                  : "border-emerald-200 bg-emerald-50/20"
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${getTypeStyle(
                    notification.type
                  )}`}
                >
                  <Icon size={21} />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-[#092752]">
                          {notification.title}
                        </h3>

                        {!notification.read && (
                          <span className="h-2 w-2 rounded-full bg-[#159447]" />
                        )}
                      </div>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {notification.message}
                      </p>
                    </div>

                    <span
                      className={`w-fit shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${getTypeStyle(
                        notification.type
                      )}`}
                    >
                      {notification.type}
                    </span>
                  </div>

                  {/* Bottom */}
                  <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Clock3 size={14} />
                      {notification.time}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-[#159447] hover:text-[#159447]"
                        >
                          <Check size={14} />
                          Mark as Read
                        </button>
                      )}

                      <button
                        onClick={() =>
                          removeNotification(notification.id)
                        }
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-500 transition hover:border-red-200 hover:text-red-600"
                      >
                        <Trash2 size={14} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {filteredNotifications.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <Bell
              size={42}
              className="mx-auto text-slate-300"
            />

            <h3 className="mt-3 text-lg font-semibold text-[#092752]">
              No notifications found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or notification filter.
            </p>
          </div>
        )}
      </div>

      {/* Notification Info */}
      <div className="rounded-2xl bg-[#092752] p-6 text-white">
        <div className="flex items-start gap-3">
          <Bell size={22} className="mt-0.5" />

          <div>
            <h3 className="font-bold">Stay Updated</h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Notifications keep government officers informed about
              submissions, project milestones, university activities and
              industry coordination.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;