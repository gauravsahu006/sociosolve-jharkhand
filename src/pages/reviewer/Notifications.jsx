import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  AlertCircle,
  Info,
  Bell,
} from "lucide-react";

const initialNotifications = [
  {
    id: 1,
    title: "New problem submitted",
    message:
      "A new civic problem has been submitted and is waiting for verification.",
    time: "10 minutes ago",
    type: "new",
    read: false,
  },
  {
    id: 2,
    title: "Problem assigned successfully",
    message:
      "Water Logging in Street 12 has been assigned to BIT Mesra.",
    time: "1 hour ago",
    type: "success",
    read: false,
  },
  {
    id: 3,
    title: "Verification pending",
    message:
      "You have 8 problems waiting in the verification queue.",
    time: "3 hours ago",
    type: "warning",
    read: false,
  },
  {
    id: 4,
    title: "University response received",
    message:
      "Ranchi University has accepted an assigned problem.",
    time: "Yesterday",
    type: "success",
    read: true,
  },
  {
    id: 5,
    title: "System update",
    message:
      "Reviewer dashboard statistics have been updated.",
    time: "2 days ago",
    type: "info",
    read: true,
  },
];

function Notifications() {
  const [notifications, setNotifications] = useState(
    initialNotifications
  );

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

  const clearNotifications = () => {
    setNotifications([]);
  };

  const getIcon = (type) => {
    if (type === "success") {
      return <CheckCircle2 size={18} />;
    }

    if (type === "warning") {
      return <AlertCircle size={18} />;
    }

    if (type === "info") {
      return <Info size={18} />;
    }

    return <Bell size={18} />;
  };

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  return (
    <div className="min-h-screen w-full bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#092f5d]">
              Notifications
            </h1>

            <p className="mt-1 text-sm text-[#687680]">
              Stay updated with your reviewer activities.
            </p>
          </div>

          {notifications.length > 0 && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={markAllAsRead}
                className="rounded-md border border-[#d4dde2] px-3 py-2 text-xs font-semibold text-[#344653] transition hover:border-[#07865c] hover:text-[#07865c]"
              >
                Mark all as read
              </button>

              <button
                type="button"
                onClick={clearNotifications}
                className="rounded-md border border-[#efd2ce] px-3 py-2 text-xs font-semibold text-[#d84a3a] transition hover:bg-[#fff7f5]"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {notifications.length > 0 && (
          <div className="mb-4 flex items-center gap-2 text-xs text-[#687680]">
            <span className="font-semibold text-[#092f5d]">
              {unreadCount}
            </span>
            unread notification{unreadCount !== 1 ? "s" : ""}
          </div>
        )}

        <div className="divide-y divide-[#e5e9ec] rounded-lg border border-[#e1e7ea] bg-white">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex gap-3 p-4 transition ${
                  notification.read
                    ? "bg-white"
                    : "bg-[#f8fcfa]"
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef7f3] text-[#07865c]">
                  {getIcon(notification.type)}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h2
                      className={`text-sm ${
                        notification.read
                          ? "font-semibold text-[#52616b]"
                          : "font-bold text-[#092f5d]"
                      }`}
                    >
                      {notification.title}
                    </h2>

                    {!notification.read && (
                      <span className="w-fit rounded-full bg-[#07865c] px-2 py-0.5 text-[9px] font-bold text-white">
                        NEW
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-xs leading-5 text-[#687680]">
                    {notification.message}
                  </p>

                  <div className="mt-2 flex items-center justify-between gap-3">
                    <span className="text-[10px] text-[#929da3]">
                      {notification.time}
                    </span>

                    {!notification.read && (
                      <button
                        type="button"
                        onClick={() => markAsRead(notification.id)}
                        className="text-[10px] font-semibold text-[#07865c] hover:underline"
                      >
                        Mark as read
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="px-5 py-14 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eef7f3] text-[#07865c]">
                <Bell size={21} />
              </div>

              <h2 className="mt-4 text-sm font-bold text-[#092f5d]">
                No notifications
              </h2>

              <p className="mt-1 text-xs text-[#89959c]">
                You're all caught up.
              </p>
            </div>
          )}
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

export default Notifications;