import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Evidence() {
  const navigate = useNavigate();

  const [files, setFiles] = useState([]);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    if (selectedFiles.length === 0) {
      return;
    }

    if (selectedFiles.length > 5) {
      setError("You can upload maximum 5 files.");
      return;
    }

    const validFiles = selectedFiles.filter((file) =>
      ["image/jpeg", "image/png", "image/webp"].includes(file.type)
    );

    if (validFiles.length !== selectedFiles.length) {
      setError("Please upload only JPG, PNG or WEBP images.");
      return;
    }

    const tooLarge = validFiles.some((file) => file.size > 5 * 1024 * 1024);

    if (tooLarge) {
      setError("Each image must be smaller than 5 MB.");
      return;
    }

    setFiles(validFiles);
    setError("");
  };

  const handleNext = () => {
    const existingData = JSON.parse(
      sessionStorage.getItem("socioSolveProblem") || "{}"
    );

    const evidenceData = files.map((file) => ({
      name: file.name,
      type: file.type,
      size: file.size,
    }));

    const problemData = {
      ...existingData,
      evidence: evidenceData,
    };

    sessionStorage.setItem(
      "socioSolveProblem",
      JSON.stringify(problemData)
    );

    navigate("/citizen/report/review");
  };

  const handleBack = () => {
    navigate("/citizen/report/location");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1100px] flex-col">
        <div className="flex flex-1 flex-col md:flex-row">
          <aside className="w-full px-6 pt-8 md:w-[290px] md:px-7 md:pt-12">
            <div className="rounded-xl bg-white px-5 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <Step number="1" title="Problem Details" />
              <Step number="2" title="Location" />
              <Step number="3" title="Upload Evidence" active />
              <Step number="4" title="Review & Submit" />
            </div>
          </aside>

          <main className="flex-1 px-6 pb-8 pt-8 sm:px-8 md:px-10 md:pt-8">
            <div className="mx-auto max-w-[680px]">
              <h1 className="text-[23px] font-bold text-[#082e5c] sm:text-[25px]">
                Upload evidence
              </h1>

              <p className="mt-2 text-[13px] text-[#667085]">
                Upload photos that help us understand the problem better.
              </p>

              {error && (
                <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[13px] font-medium text-red-600">
                  {error}
                </div>
              )}

              <div className="mt-6">
                <label
                  htmlFor="evidence"
                  className="flex min-h-[230px] cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#CBD5DF] bg-[#F8FAFB] px-6 text-center transition hover:border-[#15915D] hover:bg-[#F5FBF8]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E5F5ED] text-[26px]">
                    📷
                  </div>

                  <p className="mt-4 text-[14px] font-bold text-[#243B53]">
                    Click to upload photos
                  </p>

                  <p className="mt-2 text-[11px] text-[#98A2B3]">
                    JPG, PNG or WEBP · Maximum 5 MB each
                  </p>

                  <input
                    id="evidence"
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
              </div>

              {files.length > 0 && (
                <div className="mt-5">
                  <p className="mb-3 text-[12px] font-bold text-[#243B53]">
                    Selected photos ({files.length})
                  </p>

                  <div className="space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={`${file.name}-${index}`}
                        className="flex items-center justify-between rounded-md border border-[#DDE5EC] bg-white px-4 py-3"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-[12px] font-semibold text-[#243B53]">
                            {file.name}
                          </p>

                          <p className="mt-1 text-[10px] text-[#98A2B3]">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>

                        <span className="ml-3 text-[18px]">✓</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-5 rounded-lg border border-[#DDE5EC] bg-[#F8FAFB] px-4 py-4">
                <p className="text-[12px] font-bold text-[#243B53]">
                  Evidence is optional
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#667085]">
                  Photos can help the reviewer verify your problem faster, but
                  you can continue without uploading any photo.
                </p>
              </div>

              <div className="flex items-center justify-between gap-3 pt-7">
                <button
                  type="button"
                  onClick={handleBack}
                  className="rounded-md border border-[#D5DEE7] bg-white px-5 py-3 text-[12px] font-bold text-[#243B53] transition hover:bg-[#F8FAFB]"
                >
                  ← Back
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="rounded-md bg-[#15915D] px-5 py-3 text-[12px] font-bold text-white shadow-sm transition hover:bg-[#107849]"
                >
                  Next: Review & Submit →
                </button>
              </div>
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

export default Evidence;