import React, { useMemo, useState } from "react";
import {
  Bell,
  Check,
  CheckCircle2,
  Clock3,
  FileText,
  MessageSquare,
  AlertTriangle,
  CalendarDays,
  FolderKanban,
  X,
} from "lucide-react";

const notificationsData = [
  {
    id: 1,
    type: "review",
    title: "Submission is under review",
    message:
      "Your Smart Waste Management solution has been submitted successfully and is now under review.",
    time: "2 hours ago",
    date: "06 Sep 2026",
    unread: true,
    icon: FileText,
  },
  {
    id: 2,
    type: "feedback",
    title: "New mentor feedback received",
    message:
      "Dr. Priya Singh has added feedback to your Smart Waste Management project workspace.",
    time: "5 hours ago",
    date: "06 Sep 2026",
    unread: true,
    icon: MessageSquare,
  },
  {
    id: 3,
    type: "deadline",
    title: "Upcoming project deadline",
    message:
      "The final submission deadline for Smart Waste Management is 30 Sep 2026.",
    time: "Yesterday",
    date: "05 Sep 2026",
    unread: true,
    icon: CalendarDays,
  },
  {
    id: 4,
    type: "milestone",
    title: "Milestone completed",
    message:
      "Solution Design milestone has been marked as completed by the project team.",
    time: "Yesterday",
    date: "05 Sep 2026",
    unread: false,
    icon: CheckCircle2,
  },
  {
    id: 5,
    type: "team",
    title: "Expert team assigned",
    message:
      "Smart Systems Expert Team has been assigned to your Smart Waste Management project.",
    time: "2 days ago",
    date: "04 Sep 2026",
    unread: false,
    icon: FolderKanban,
  },
  {
    id: 6,
    type: "review",
    title: "Submission approved",
    message:
      "Your Energy Efficiency Dashboard submission has been approved with a score of 92/100.",
    time: "3 days ago",
    date: "03 Sep 2026",
    unread: false,
    icon: CheckCircle2,
  },
  {
    id: 7,
    type: "alert",
    title: "Revision requested",
    message:
      "Industrial Water Monitoring requires additional water-quality validation before resubmission.",
    time: "4 days ago",
    date: "02 Sep 2026",
    unread: false,
    icon: AlertTriangle,
  },
  {
    id: 8,
    type: "milestone",
    title: "Prototype milestone updated",
    message:
      "Prototype Development is currently in progress with 78% overall project completion.",
    time: "5 days ago",
    date: "01 Sep 2026",
    unread: false,
    icon: Clock3,
  },
];

const notificationStyles = {
  review: {
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  feedback: {
    bg: "bg-purple-50",
    text: "text-purple-600",
  },
  deadline: {
    bg: "bg-orange-50",
    text: "text-orange-600",
  },
  milestone: {
    bg: "bg-green-50",
    text: "text-[#159447]",
  },
  team: {
    bg: "bg-cyan-50",
    text: "text-cyan-600",
  },
  alert: {
    bg: "bg-red-50",
    text: "text-red-600",
  },
};

const Notifications = () => {
  const [notifications, setNotifications] = useState(
    notificationsData
  );
  const [filter, setFilter] = useState("All");
  const [selectedNotification, setSelectedNotification] =
    useState(null);

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  const filteredNotifications = useMemo(() => {
    if (filter === "Unread") {
      return notifications.filter(
        (notification) => notification.unread
      );
    }

    return notifications;
  }, [notifications, filter]);

  const markAsRead = (id) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const handleNotificationClick = (notification) => {
    markAsRead(notification.id);
    setSelectedNotification(notification);
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
              <span className="rounded-full bg-[#159447] px-2.5 py-1 text-xs font-semibold text-white">
                {unreadCount} New
              </span>
            )}
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Stay updated with your projects, submissions and
            collaboration activities
          </p>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={markAllAsRead}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            <Check className="h-4 w-4" />
            Mark All as Read
          </button>
        )}
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Total Notifications
              </p>
              <p className="mt-2 text-3xl font-bold text-[#092752]">
                {notifications.length}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-green-50">
              <Bell className="h-5 w-5 text-[#159447]" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                Unread
              </p>
              <p className="mt-2 text-3xl font-bold text-[#092752]">
                {unreadCount}
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50">
              <Clock3 className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">
                This Week
              </p>
              <p className="mt-2 text-3xl font-bold text-[#092752]">
                8
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-purple-50">
              <CalendarDays className="h-5 w-5 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <button
          onClick={() => setFilter("All")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            filter === "All"
              ? "bg-[#159447] text-white"
              : "text-slate-500 hover:bg-slate-50"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("Unread")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            filter === "Unread"
              ? "bg-[#159447] text-white"
              : "text-slate-500 hover:bg-slate-50"
          }`}
        >
          Unread
        </button>
      </div>

      {/* Notifications */}
      <div className="space-y-3">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => {
            const Icon = notification.icon;
            const style = notificationStyles[notification.type];

            return (
              <div
                key={notification.id}
                onClick={() =>
                  handleNotificationClick(notification)
                }
                className={`cursor-pointer rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5 ${
                  notification.unread
                    ? "border-green-200"
                    : "border-slate-200"
                }`}
              >
                <div className="flex gap-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${style.bg}`}
                  >
                    <Icon
                      className={`h-5 w-5 ${style.text}`}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-center gap-2">
                        {notification.unread && (
                          <span className="h-2 w-2 rounded-full bg-[#159447]" />
                        )}

                        <h3 className="text-sm font-bold text-[#092752] sm:text-base">
                          {notification.title}
                        </h3>
                      </div>

                      <span className="shrink-0 text-xs text-slate-400">
                        {notification.time}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {notification.message}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        {notification.date}
                      </span>

                      {notification.unread && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            markAsRead(notification.id);
                          }}
                          className="text-xs font-semibold text-[#159447] hover:underline"
                        >
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <Bell className="mx-auto h-10 w-10 text-slate-300" />

            <h3 className="mt-3 font-semibold text-slate-700">
              No unread notifications
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              You're all caught up!
            </p>
          </div>
        )}
      </div>

      {/* Notification Details Modal */}
      {selectedNotification && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">
            <div className="flex items-start justify-between border-b border-slate-200 p-5">
              <div className="flex items-center gap-3">
                {(() => {
                  const Icon = selectedNotification.icon;
                  const style =
                    notificationStyles[
                      selectedNotification.type
                    ];

                  return (
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-lg ${style.bg}`}
                    >
                      <Icon
                        className={`h-5 w-5 ${style.text}`}
                      />
                    </div>
                  );
                })()}

                <div>
                  <h2 className="font-bold text-[#092752]">
                    Notification Details
                  </h2>

                  <p className="text-xs text-slate-400">
                    {selectedNotification.date}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedNotification(null)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-[#092752]">
                {selectedNotification.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {selectedNotification.message}
              </p>

              <div className="mt-5 rounded-lg bg-slate-50 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Notification Status
                  </span>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-[#159447]">
                    <Check className="h-3.5 w-3.5" />
                    Read
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Received
                  </span>

                  <span className="text-sm font-medium text-slate-700">
                    {selectedNotification.time}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 p-5">
              <button
                onClick={() => setSelectedNotification(null)}
                className="w-full rounded-lg bg-[#159447] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#117C3B]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications;