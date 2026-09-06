import React from "react";
import { Link } from "react-router-dom";

const stats = [
  {
    label: "Problems Reviewed",
    value: "126",
    change: "+18%",
  },
  {
    label: "Verified Problems",
    value: "98",
    change: "+12%",
  },
  {
    label: "Duplicates Found",
    value: "17",
    change: "+5%",
  },
  {
    label: "Universities Assigned",
    value: "42",
    change: "+9%",
  },
];

const categoryData = [
  { name: "Water & Sanitation", value: 34 },
  { name: "Roads & Transport", value: 27 },
  { name: "Electricity", value: 18 },
  { name: "Waste Management", value: 15 },
  { name: "Other", value: 6 },
];

function Analytics() {
  return (
    <div className="min-h-screen w-full bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#092f5d]">
            Analytics
          </h1>

          <p className="mt-1 text-sm text-[#687680]">
            Overview of your problem verification and assignment activity.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-[#e1e7ea] bg-white p-4"
            >
              <p className="text-xs text-[#687680]">
                {stat.label}
              </p>

              <div className="mt-2 flex items-end justify-between gap-2">
                <p className="text-2xl font-bold text-[#092f5d]">
                  {stat.value}
                </p>

                <span className="text-[10px] font-semibold text-[#07865c]">
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-lg border border-[#e1e7ea] bg-white p-5">
            <h2 className="text-sm font-bold text-[#092f5d]">
              Problems by Category
            </h2>

            <div className="mt-5 space-y-4">
              {categoryData.map((item) => (
                <div key={item.name}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <p className="text-xs font-medium text-[#344653]">
                      {item.name}
                    </p>

                    <p className="text-xs font-semibold text-[#092f5d]">
                      {item.value}%
                    </p>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-[#edf1f3]">
                    <div
                      className="h-full rounded-full bg-[#07865c]"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#e1e7ea] bg-white p-5">
            <h2 className="text-sm font-bold text-[#092f5d]">
              Review Performance
            </h2>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#687680]">
                  Verification Rate
                </span>
                <span className="text-sm font-bold text-[#07865c]">
                  78%
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-[#687680]">
                  Average Review Time
                </span>
                <span className="text-sm font-bold text-[#092f5d]">
                  2.4 hrs
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-[#687680]">
                  Assignment Rate
                </span>
                <span className="text-sm font-bold text-[#07865c]">
                  91%
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-[#687680]">
                  Rejection Rate
                </span>
                <span className="text-sm font-bold text-[#d84a3a]">
                  7%
                </span>
              </div>
            </div>
          </div>
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

export default Analytics;