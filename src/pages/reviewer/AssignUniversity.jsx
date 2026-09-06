import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AssignUniversity() {
  const navigate = useNavigate();

  const [selectedUniversity, setSelectedUniversity] = useState({
    name: "BIT Mesra",
    location: "Ranchi, Jharkhand",
    score: "95%",
  });

  const [formData, setFormData] = useState({
    university: "BIT Mesra",
    coordinator: "Dr. Rajeev Kumar",
    dueDate: "2024-05-30",
    notes:
      "Please analyze the drainage issue and propose a feasible solution.",
  });

  useEffect(() => {
    const savedUniversity = sessionStorage.getItem(
      "socioSolveSelectedUniversity"
    );

    if (!savedUniversity) {
      return;
    }

    try {
      const university = JSON.parse(savedUniversity);

      setSelectedUniversity(university);

      setFormData((prev) => ({
        ...prev,
        university: university.name,
      }));
    } catch (error) {
      console.error("Unable to load selected university:", error);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const assignment = {
      ...formData,
      problemId: "PROB-001",
      matchScore: selectedUniversity.score,
      status: "Assigned",
      assignedAt: new Date().toISOString(),
    };

    sessionStorage.setItem(
      "socioSolveUniversityAssignment",
      JSON.stringify(assignment)
    );

    navigate("/reviewer/review-history");
  };

  return (
    <div className="min-h-screen bg-white px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-7 flex flex-col gap-4 rounded-xl border border-[#dbe3e8] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eef4fb]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#355c91] text-[#355c91]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="h-6 w-6"
                >
                  <circle cx="12" cy="12" r="8" />
                  <path d="M12 7v10M8 10h8M9 15h6" />
                </svg>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-[#4d5964]">
                You are assigning this problem to:
              </p>

              <h2 className="mt-0.5 text-lg font-bold text-[#092f5d] sm:text-xl">
                {selectedUniversity.name}
              </h2>

              <p className="text-sm text-[#6d7881]">
                {selectedUniversity.location}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-center">
            <span className="text-sm font-semibold text-[#4e5963]">
              Match Score
            </span>

            <span className="rounded-md border border-[#8ac8ad] bg-[#effaf5] px-4 py-2 text-sm font-bold text-[#087c55]">
              {selectedUniversity.score}
            </span>
          </div>
        </div>

        <div>
          <h1 className="mb-5 text-xl font-bold text-[#092f5d] sm:text-2xl">
            Assignment Details
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div>
                <label
                  htmlFor="university"
                  className="mb-2 block text-sm font-bold text-[#293b4a]"
                >
                  Assign To
                </label>

                <div className="relative">
                  <select
                    id="university"
                    name="university"
                    value={formData.university}
                    onChange={handleChange}
                    className="h-12 w-full appearance-none rounded-md border border-[#d4dde2] bg-white px-3 pr-10 text-sm font-medium text-[#40505d] outline-none transition focus:border-[#07865c] focus:ring-1 focus:ring-[#07865c]"
                  >
                    <option>BIT Mesra</option>
                    <option>Ranchi University</option>
                    <option>Kolhan University</option>
                    <option>Vinoba Bhave University</option>
                    <option>Central University of Jharkhand</option>
                  </select>

                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#63717b]">
                    ▼
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="coordinator"
                  className="mb-2 block text-sm font-bold text-[#293b4a]"
                >
                  Faculty Coordinator{" "}
                  <span className="font-medium text-[#7c878e]">
                    (Optional)
                  </span>
                </label>

                <div className="relative">
                  <select
                    id="coordinator"
                    name="coordinator"
                    value={formData.coordinator}
                    onChange={handleChange}
                    className="h-12 w-full appearance-none rounded-md border border-[#d4dde2] bg-white px-3 pr-10 text-sm font-medium text-[#40505d] outline-none transition focus:border-[#07865c] focus:ring-1 focus:ring-[#07865c]"
                  >
                    <option>Dr. Rajeev Kumar</option>
                    <option>Dr. Priya Singh</option>
                    <option>Dr. Amit Kumar</option>
                    <option>Dr. Neha Sharma</option>
                  </select>

                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#63717b]">
                    ▼
                  </span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="dueDate"
                  className="mb-2 block text-sm font-bold text-[#293b4a]"
                >
                  Due Date{" "}
                  <span className="font-medium text-[#7c878e]">
                    (For Review)
                  </span>
                </label>

                <input
                  id="dueDate"
                  name="dueDate"
                  type="date"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="h-12 w-full rounded-md border border-[#d4dde2] bg-white px-3 text-sm font-medium text-[#40505d] outline-none transition focus:border-[#07865c] focus:ring-1 focus:ring-[#07865c]"
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="notes"
                className="mb-2 block text-sm font-bold text-[#293b4a]"
              >
                Notes for University{" "}
                <span className="font-medium text-[#7c878e]">
                  (Optional)
                </span>
              </label>

              <div className="relative">
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  maxLength={200}
                  rows={4}
                  className="min-h-[105px] w-full resize-none rounded-md border border-[#d4dde2] bg-white px-3 py-3 pb-7 text-sm leading-6 text-[#40505d] outline-none transition focus:border-[#07865c] focus:ring-1 focus:ring-[#07865c]"
                  placeholder="Write instructions for the university..."
                />

                <span className="absolute bottom-2 right-3 text-xs text-[#697780]">
                  {formData.notes.length}/200
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="h-12 min-w-[210px] rounded-md bg-[#07865c] px-8 text-sm font-bold text-white shadow-sm transition hover:bg-[#06754f] active:scale-[0.99] sm:min-w-[250px] sm:text-base"
              >
                Assign Problem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AssignUniversity;