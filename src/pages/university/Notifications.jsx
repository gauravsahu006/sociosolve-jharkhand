import React, { useState } from "react";
import {
  Bell,
  Check,
  CheckCheck,
  Clock3,
  FolderKanban,
  MessageSquare,
  Award,
  AlertCircle,
  Trash2,
} from "lucide-react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "project",
      title: "Project milestone completed",
      message:
        "Smart Waste Management project has completed the Research milestone.",
      time: "10 minutes ago",
      unread: true,
    },
    {
      id: 2,
      type: "message",
      title: "New message from mentor",
      message:
        "Dr. Priya Sharma sent you a message regarding your project prototype.",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      type: "challenge",
      title: "New challenge recommended",
      message:
        "A new challenge matching your university expertise has been added.",
      time: "3 hours ago",
      unread: true,
    },
    {
      id: 4,
      type: "submission",
      title: "Submission deadline reminder",
      message:
        "Your Smart Water Monitoring project submission deadline is approaching.",
      time: "Yesterday",
      unread: false,
    },
    {
      id: 5,
      type: "success",
      title: "Project approved",
      message:
        "Your submitted solution has been approved for the next evaluation stage.",
      time: "2 days ago",
      unread: false,
    },
    {
      id: 6,
      type: "alert",
      title: "Milestone deadline approaching",
      message:
        "The Prototype milestone for your project is due in 3 days.",
      time: "3 days ago",
      unread: false,
    },
  ]);

  const getIcon = (type) => {
    const icons = {
      project: FolderKanban,
      message: MessageSquare,
      challenge: Bell,
      submission: Clock3,
      success: Award,
      alert: AlertCircle,
    };

    return icons[type] || Bell;
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#092752] sm:text-3xl">
            Notifications
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Stay updated with your university activities and projects.
          </p>
        </div>

        <button
          type="button"
          onClick={markAllAsRead}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
        >
          <CheckCheck size={18} />
          Mark all as read
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Notifications</p>
          <p className="mt-2 text-2xl font-bold text-[#092752]">
            {notifications.length}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Unread</p>
          <p className="mt-2 text-2xl font-bold text-[#159447]">
            {unreadCount}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Read</p>
          <p className="mt-2 text-2xl font-bold text-[#092752]">
            {notifications.length - unreadCount}
          </p>
        </div>
      </div>

      {/* Notifications List */}
      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="font-semibold text-[#092752]">
              Recent Notifications
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              {unreadCount} unread notification
              {unreadCount !== 1 ? "s" : ""}
            </p>
          </div>

          <Bell size={20} className="text-[#159447]" />
        </div>

        <div>
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                <Bell size={26} className="text-slate-400" />
              </div>

              <h3 className="mt-4 font-semibold text-[#092752]">
                No notifications
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                You're all caught up.
              </p>
            </div>
          ) : (
            notifications.map((notification) => {
              const Icon = getIcon(notification.type);

              return (
                <div
                  key={notification.id}
                  className={`flex flex-col gap-4 border-b border-slate-100 px-5 py-5 transition last:border-b-0 sm:flex-row sm:items-start ${
                    notification.unread
                      ? "bg-green-50/40"
                      : "bg-white"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                      notification.unread
                        ? "bg-[#159447]/10 text-[#159447]"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h3
                        className={`text-sm font-semibold ${
                          notification.unread
                            ? "text-[#092752]"
                            : "text-slate-700"
                        }`}
                      >
                        {notification.title}
                      </h3>

                      {notification.unread && (
                        <span className="w-fit rounded-full bg-[#159447] px-2 py-1 text-[10px] font-semibold text-white">
                          NEW
                        </span>
                      )}
                    </div>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {notification.message}
                    </p>

                    <div className="mt-2 flex items-center gap-1 text-xs text-slate-400">
                      <Clock3 size={13} />
                      {notification.time}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {notification.unread && (
                      <button
                        type="button"
                        onClick={() => markAsRead(notification.id)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-[#159447] hover:text-[#159447]"
                      >
                        <Check size={15} />
                        Read
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() =>
                        deleteNotification(notification.id)
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;