import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReportProblem() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    date: "",
    peopleAffected: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      setError("Please enter a problem title.");
      return;
    }

    if (!formData.category) {
      setError("Please select a category.");
      return;
    }

    if (!formData.description.trim()) {
      setError("Please describe the problem.");
      return;
    }

    const existingData = JSON.parse(
      sessionStorage.getItem("socioSolveProblem") || "{}"
    );

    const problemData = {
      ...existingData,
      ...formData,
    };

    sessionStorage.setItem(
      "socioSolveProblem",
      JSON.stringify(problemData)
    );

    navigate("/citizen/report/location");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1100px] flex-col">
        <div className="flex flex-1 flex-col md:flex-row">
          <aside className="w-full px-6 pt-8 md:w-[290px] md:px-7 md:pt-12">
            <div className="rounded-xl bg-white px-5 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <Step number="1" title="Problem Details" active />
              <Step number="2" title="Location" />
              <Step number="3" title="Upload Evidence" />
              <Step number="4" title="Review & Submit" />
            </div>
          </aside>

          <main className="flex-1 px-6 pb-8 pt-8 sm:px-8 md:px-10 md:pt-8">
            <div className="mx-auto max-w-[680px]">
              <h1 className="text-[23px] font-bold text-[#082e5c] sm:text-[25px]">
                Tell us about the problem
              </h1>

              <p className="mt-2 text-[13px] text-[#667085]">
                Provide some details so we can understand and process your
                problem better.
              </p>

              {error && (
                <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[13px] font-medium text-red-600">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="title"
                    className="mb-2 block text-[12px] font-bold text-[#243B53]"
                  >
                    Problem Title *
                  </label>

                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="e.g. Water logging near Main Road"
                    className="h-[44px] w-full rounded-md border border-[#D5DEE7] bg-white px-3 text-[13px] text-[#243B53] outline-none transition focus:border-[#15915D] focus:ring-2 focus:ring-[#15915D]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="category"
                    className="mb-2 block text-[12px] font-bold text-[#243B53]"
                  >
                    Category *
                  </label>

                  <div className="relative">
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="h-[44px] w-full appearance-none rounded-md border border-[#D5DEE7] bg-white px-3 pr-10 text-[13px] text-[#243B53] outline-none transition focus:border-[#15915D] focus:ring-2 focus:ring-[#15915D]/10"
                    >
                      <option value="" disabled>
                        Select Category
                      </option>
                      <option value="roads">
                        Roads & Infrastructure
                      </option>
                      <option value="water">Water & Sanitation</option>
                      <option value="electricity">Electricity</option>
                      <option value="waste">Waste Management</option>
                      <option value="street-light">Street Light</option>
                      <option value="other">Other</option>
                    </select>

                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[18px] text-[#667085]">
                      ⌄
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="mb-2 block text-[12px] font-bold text-[#243B53]"
                  >
                    Problem Description *
                  </label>

                  <div className="relative">
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      maxLength={500}
                      rows={5}
                      placeholder="Describe the problem in detail..."
                      className="w-full resize-none rounded-md border border-[#D5DEE7] bg-white px-3 py-3 pb-7 text-[13px] text-[#243B53] outline-none transition focus:border-[#15915D] focus:ring-2 focus:ring-[#15915D]/10"
                    />

                    <span className="absolute bottom-2 right-3 text-[11px] text-[#98A2B3]">
                      {formData.description.length}/500
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="date"
                      className="mb-2 block text-[12px] font-bold text-[#243B53]"
                    >
                      When did this happen?
                    </label>

                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="h-[44px] w-full rounded-md border border-[#D5DEE7] bg-white px-3 text-[13px] text-[#243B53] outline-none transition focus:border-[#15915D] focus:ring-2 focus:ring-[#15915D]/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="peopleAffected"
                      className="mb-2 block text-[12px] font-bold text-[#243B53]"
                    >
                      How many people are affected?
                    </label>

                    <input
                      id="peopleAffected"
                      name="peopleAffected"
                      type="number"
                      min="0"
                      value={formData.peopleAffected}
                      onChange={handleChange}
                      placeholder="Enter approximate number"
                      className="h-[44px] w-full rounded-md border border-[#D5DEE7] bg-white px-3 text-[13px] text-[#243B53] outline-none transition focus:border-[#15915D] focus:ring-2 focus:ring-[#15915D]/10"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-md bg-[#15915D] px-5 py-3 text-[12px] font-bold text-white shadow-sm transition hover:bg-[#107849]"
                  >
                    Next: Location →
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>

        <div className="relative h-[95px] overflow-hidden bg-gradient-to-b from-white to-[#edf7f1] sm:h-[115px]">
          <div className="absolute bottom-[-25px] left-[8%] h-[70px] w-[180px] rounded-t-full border-[8px] border-[#d7ebe1] opacity-70" />
          <div className="absolute bottom-[-35px] left-[28%] h-[90px] w-[220px] rounded-t-full border-[9px] border-[#dcefe5] opacity-60" />
          <div className="absolute bottom-[-30px] right-[18%] h-[80px] w-[200px] rounded-t-full border-[8px] border-[#d7ebe1] opacity-60" />
          <div className="absolute bottom-[-45px] right-[2%] h-[100px] w-[250px] rounded-t-full border-[10px] border-[#e1f2e9] opacity-60" />
        </div>
      </div>
    </div>
  );
}

function Step({ number, title, active }) {
  return (
    <div className="flex items-center gap-3 py-3">
      <div
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[12px] font-bold ${
          active
            ? "bg-[#15915D] text-white"
            : "bg-[#EEF2F5] text-[#667085]"
        }`}
      >
        {number}
      </div>

      <span
        className={`text-[12px] font-semibold ${
          active ? "text-[#082e5c]" : "text-[#98A2B3]"
        }`}
      >
        {title}
      </span>
    </div>
  );
}

export default ReportProblem;