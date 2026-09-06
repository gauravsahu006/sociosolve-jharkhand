import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CategorizePrioritize() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: "Water & Sanitation",
    subCategory: "Drainage / Water Logging",
    impactLevel: "High",
    priority: "High Priority",
    peopleAffected: "500",
    areaWard: "Ward 12, Ranchi",
    notes:
      "Heavy water logging during rains. Affects daily commute and causes traffic.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sessionStorage.setItem(
      "socioSolveCategorizedProblem",
      JSON.stringify(formData)
    );

    navigate("/reviewer/universities");
  };

  return (
    <div className="min-h-screen w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[850px]">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField label="Category">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-input"
              >
                <option>Water &amp; Sanitation</option>
                <option>Road &amp; Transport</option>
                <option>Street Light</option>
                <option>Garbage Management</option>
                <option>Public Safety</option>
              </select>
            </FormField>

            <FormField label="Sub Category">
              <select
                name="subCategory"
                value={formData.subCategory}
                onChange={handleChange}
                className="form-input"
              >
                <option>Drainage / Water Logging</option>
                <option>Blocked Drain</option>
                <option>Water Supply</option>
                <option>Flooding</option>
              </select>
            </FormField>

            <FormField label="Impact Level">
              <select
                name="impactLevel"
                value={formData.impactLevel}
                onChange={handleChange}
                className="form-input"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </FormField>

            <FormField label="Priority">
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="form-input"
              >
                <option>High Priority</option>
                <option>Medium Priority</option>
                <option>Low Priority</option>
              </select>
            </FormField>

            <FormField label="People Affected (Approx.)">
              <div className="relative">
                <input
                  name="peopleAffected"
                  type="number"
                  value={formData.peopleAffected}
                  onChange={handleChange}
                  className="form-input pr-12"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-[#52616b]">
                  ▣
                </span>
              </div>
            </FormField>

            <FormField label="Area / Ward">
              <input
                name="areaWard"
                type="text"
                value={formData.areaWard}
                onChange={handleChange}
                className="form-input"
              />
            </FormField>

            <div className="md:col-span-2">
              <FormField label="Notes (Optional)">
                <div className="relative">
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    maxLength={200}
                    rows={4}
                    className="form-input min-h-[120px] resize-none pb-8"
                  />

                  <span className="absolute bottom-3 right-4 text-xs text-[#68757d]">
                    {formData.notes.length}/200
                  </span>
                </div>
              </FormField>
            </div>
          </div>

          <div className="mt-7 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-[#07865c] px-7 py-3 text-xs font-bold text-white transition hover:bg-[#06754f]"
            >
              Save & Continue →
            </button>
          </div>
        </form>
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