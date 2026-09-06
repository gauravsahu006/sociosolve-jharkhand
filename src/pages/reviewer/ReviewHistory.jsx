import React, { useEffect, useState } from "react";

const defaultHistory = [
  {
    title: "Water Logging in Street 12",
    action: "Assigned to BIT Mesra",
    by: "You",
    date: "16 May 2024",
    status: "Assigned",
    statusClass: "bg-[#e8f7ef] text-[#07865c]",
  },
  {
    title: "Garbage not collected",
    action: "Under Verification",
    by: "You",
    date: "15 May 2024",
    status: "In Review",
    statusClass: "bg-[#fff5df] text-[#c98316]",
  },
  {
    title: "Open Manhole on Road",
    action: "Marked as Duplicate",
    by: "You",
    date: "15 May 2024",
    status: "Duplicate",
    statusClass: "bg-[#eef0f2] text-[#52616b]",
  },
  {
    title: "Street Light Not Working",
    action: "Assigned to Ranchi University",
    by: "You",
    date: "14 May 2024",
    status: "Assigned",
    statusClass: "bg-[#e8f7ef] text-[#07865c]",
  },
  {
    title: "Poor Rural Road Connectivity",
    action: "Assigned to Kolhan University",
    by: "You",
    date: "13 May 2024",
    status: "Assigned",
    statusClass: "bg-[#e8f7ef] text-[#07865c]",
  },
];

function ReviewHistory() {
  const [history, setHistory] = useState(defaultHistory);

  useEffect(() => {
    const savedAssignment = sessionStorage.getItem(
      "socioSolveUniversityAssignment"
    );

    if (!savedAssignment) {
      return;
    }

    try {
      const assignment = JSON.parse(savedAssignment);

      const assignedDate = assignment.assignedAt
        ? new Date(assignment.assignedAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        : "Today";

      const newHistoryItem = {
        title: "Water Logging in Street 12",
        action: `Assigned to ${assignment.university}`,
        by: "You",
        date: assignedDate,
        status: "Assigned",
        statusClass: "bg-[#e8f7ef] text-[#07865c]",
      };

      setHistory((prev) => [
        newHistoryItem,
        ...prev.filter(
          (item) =>
            !(
              item.title === "Water Logging in Street 12" &&
              item.action.startsWith("Assigned to")
            )
        ),
      ]);
    } catch (error) {
      console.error("Unable to load assignment history:", error);
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1000px]">
        <div className="overflow-x-auto">
          <div className="min-w-[720px]">
            <div className="grid grid-cols-[1.4fr_1.45fr_0.65fr_0.9fr_0.7fr] items-center bg-[#f8fafb] px-4 py-3 text-[11px] font-bold text-[#52616b]">
              <span>Problem Title</span>
              <span>Action</span>
              <span>Action By</span>
              <span>Action On</span>
              <span>Status</span>
            </div>

            <div className="divide-y divide-[#e5e9ec]">
              {history.map((item, index) => (
                <div
                  key={`${item.title}-${item.date}-${index}`}
                  className="grid min-h-[62px] grid-cols-[1.4fr_1.45fr_0.65fr_0.9fr_0.7fr] items-center px-4 py-3"
                >
                  <div className="pr-4">
                    <p className="text-[11px] font-semibold leading-5 text-[#082e5c]">
                      {item.title}
                    </p>
                  </div>

                  <div className="pr-4">
                    <p className="text-[11px] font-medium leading-5 text-[#344653]">
                      {item.action}
                    </p>
                  </div>

                  <p className="text-[11px] text-[#344653]">
                    {item.by}
                  </p>

                  <p className="text-[11px] text-[#344653]">
                    {item.date}
                  </p>

                  <div>
                    <span
                      className={`inline-flex rounded-md px-3 py-1.5 text-[9px] font-semibold ${item.statusClass}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewHistory;