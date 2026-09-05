import React from "react";
import { Link } from "react-router-dom";

function CategorizePrioritize() {
  return (
    <div className="min-h-screen w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[850px]">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <FormField label="Category">
            <select className="form-input">
              <option>⚠  Water &amp; Sanitation</option>
              <option>Road &amp; Transport</option>
              <option>Street Light</option>
              <option>Garbage Management</option>
              <option>Public Safety</option>
            </select>
          </FormField>

          <FormField label="Sub Category">
            <select className="form-input">
              <option>Drainage / Water Logging</option>
              <option>Blocked Drain</option>
              <option>Water Supply</option>
              <option>Flooding</option>
            </select>
          </FormField>

          <FormField label="Impact Level">
            <select className="form-input">
              <option>◉  High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </FormField>

          <FormField label="Priority">
            <select className="form-input">
              <option>🔴  High Priority</option>
              <option>🟠  Medium Priority</option>
              <option>🟢  Low Priority</option>
            </select>
          </FormField>

          <FormField label="People Affected (Approx.)">
            <div className="relative">
              <input
                type="number"
                defaultValue="500"
                className="form-input pr-12"
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-[#52616b]">
                ▣
              </span>
            </div>
          </FormField>

          <FormField label="Area / Ward">
            <input
              type="text"
              defaultValue="Ward 12, Ranchi"
              className="form-input"
            />
          </FormField>

          <div className="md:col-span-2">
            <FormField label="Notes (Optional)">
              <div className="relative">
                <textarea
                  defaultValue="Heavy water logging during rains. Affects daily commute and causes traffic."
                  maxLength={200}
                  rows={4}
                  className="form-input min-h-[120px] resize-none pb-8"
                />

                <span className="absolute bottom-3 right-4 text-xs text-[#68757d]">
                  78/200
                </span>
              </div>
            </FormField>
          </div>

        </div>

      </div>
    </div>
  );
}

function FormField({ label, children }) {
  return (
    <div className="w-full">
      <label className="mb-2 block text-[13px] font-bold text-[#263746] sm:text-sm">
        {label}
      </label>

      {children}
    </div>
  );
}

export default CategorizePrioritize;