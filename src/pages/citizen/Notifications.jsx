import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  CheckCircle2,
  ArrowLeft,
  Trash2,
} from "lucide-react";

function formatDate(date) {
  if (!date) return "";

  return new Date(date).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const savedNotifications = JSON.parse(
      sessionStorage.getItem("socioSolveNotifications") || "[]"
    );

    setNotifications(savedNotifications);
  }, []);

  const markAsRead = (id) => {
    const updated = notifications.map((notification) =>
      notification.id === id
        ? { ...notification, read: true }
        : notification
    );

    setNotifications(updated);

    sessionStorage.setItem(
      "socioSolveNotifications",
      JSON.stringify(updated)
    );
  };

  const markAllAsRead = () => {
    const updated = notifications.map((notification) => ({
      ...notification,
      read: true,
    }));

    setNotifications(updated);

    sessionStorage.setItem(
      "socioSolveNotifications",
      JSON.stringify(updated)
    );
  };

  const clearAll = () => {
    setNotifications([]);

    sessionStorage.removeItem("socioSolveNotifications");
  };

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

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

          <div className="px-6 py-5 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-[#f0fdfa] flex items-center justify-center">
                <Bell
                  size={22}
                  className="text-[#0f766e]"
                />
              </div>

              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Notifications
                </h1>

                <p className="text-sm text-gray-500 mt-0.5">
                  {unreadCount > 0
                    ? `${unreadCount} unread notification${
                        unreadCount > 1 ? "s" : ""
                      }`
                    : "You're all caught up"}
                </p>
              </div>
            </div>

            {notifications.length > 0 && (
              <div className="flex items-center gap-3">

                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="text-sm font-medium text-[#0f766e] hover:underline"
                  >
                    Mark all as read
                  </button>
                )}

                <button
                  onClick={clearAll}
                  className="inline-flex items-center gap-1.5 text-sm text-red-500 hover:text-red-600"
                >
                  <Trash2 size={16} />
                  Clear
                </button>

              </div>
            )}

          </div>

          <div className="divide-y divide-gray-100">

            {notifications.length === 0 ? (
              <div className="px-6 py-16 text-center">

                <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
                  <Bell
                    size={28}
                    className="text-gray-400"
                  />
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mt-4">
                  No notifications
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  New updates about your reported problems will appear here.
                </p>

                <Link
                  to="/citizen/report"
                  className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-lg bg-[#0f766e] text-white text-sm font-medium hover:bg-[#0b625c]"
                >
                  Report a Problem
                </Link>

              </div>
            ) : (
              notifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => markAsRead(notification.id)}
                  className={`px-6 py-5 cursor-pointer transition ${
                    notification.read
                      ? "bg-white"
                      : "bg-[#f0fdfa]"
                  } hover:bg-gray-50`}
                >
                  <div className="flex gap-4">

                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                      <CheckCircle2
                        size={20}
                        className="text-green-600"
                      />
                    </div>

                    <div className="flex-1">

                      <div className="flex items-start justify-between gap-3">

                        <h3
                          className={`text-sm font-semibold ${
                            notification.read
                              ? "text-gray-700"
                              : "text-gray-900"
                          }`}
                        >
                          {notification.title}
                        </h3>

                        {!notification.read && (
                          <span className="w-2.5 h-2.5 rounded-full bg-[#0f766e] shrink-0 mt-1" />
                        )}

                      </div>

                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>

                      <p className="text-xs text-gray-400 mt-2">
                        {formatDate(notification.createdAt)}
                      </p>

                    </div>

                  </div>
                </div>
              ))
            )}

          </div>
        </div>
      </div>
    </div>
  );
}