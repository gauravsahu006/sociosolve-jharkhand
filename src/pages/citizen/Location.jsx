import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Location() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    address: "",
    area: "",
    district: "",
    pinCode: "",
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

  const handleNext = () => {
    if (!formData.address.trim()) {
      setError("Please enter the problem location.");
      return;
    }

    if (!formData.area.trim()) {
      setError("Please enter the area or landmark.");
      return;
    }

    if (!formData.district.trim()) {
      setError("Please enter the district.");
      return;
    }

    if (formData.pinCode && !/^\d{6}$/.test(formData.pinCode)) {
      setError("Please enter a valid 6-digit PIN code.");
      return;
    }

    const existingData = JSON.parse(
      sessionStorage.getItem("socioSolveProblem") || "{}"
    );

    const problemData = {
      ...existingData,
      location: {
        address: formData.address,
        area: formData.area,
        district: formData.district,
        pinCode: formData.pinCode,
      },
    };

    sessionStorage.setItem(
      "socioSolveProblem",
      JSON.stringify(problemData)
    );

    navigate("/citizen/report/evidence");
  };

  const handleBack = () => {
    navigate("/citizen/report");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[1100px] flex-col">
        <div className="flex flex-1 flex-col md:flex-row">
          <aside className="w-full px-6 pt-8 md:w-[290px] md:px-7 md:pt-12">
            <div className="rounded-xl bg-white px-5 py-5 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
              <Step number="1" title="Problem Details" />
              <Step number="2" title="Location" active />
              <Step number="3" title="Upload Evidence" />
              <Step number="4" title="Review & Submit" />
            </div>
          </aside>

          <main className="flex-1 px-6 pb-8 pt-8 sm:px-8 md:px-10 md:pt-8">
            <div className="mx-auto max-w-[680px]">
              <h1 className="text-[23px] font-bold text-[#082e5c] sm:text-[25px]">
                Where is the problem?
              </h1>

              <p className="mt-2 text-[13px] text-[#667085]">
                Tell us where the problem is located so the concerned team can
                find it easily.
              </p>

              {error && (
                <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[13px] font-medium text-red-600">
                  {error}
                </div>
              )}

              <div className="mt-6 space-y-5">
                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-[12px] font-bold text-[#243B53]"
                  >
                    Problem Location *
                  </label>

                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Enter the complete address where the problem exists..."
                    className="w-full resize-none rounded-md border border-[#D5DEE7] bg-white px-3 py-3 text-[13px] text-[#243B53] outline-none transition focus:border-[#15915D] focus:ring-2 focus:ring-[#15915D]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="area"
                    className="mb-2 block text-[12px] font-bold text-[#243B53]"
                  >
                    Area / Landmark *
                  </label>

                  <input
                    id="area"
                    name="area"
                    type="text"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="e.g. Near Main Road, Ranchi University"
                    className="h-[44px] w-full rounded-md border border-[#D5DEE7] bg-white px-3 text-[13px] text-[#243B53] outline-none transition focus:border-[#15915D] focus:ring-2 focus:ring-[#15915D]/10"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="district"
                      className="mb-2 block text-[12px] font-bold text-[#243B53]"
                    >
                      District *
                    </label>

                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="h-[44px] w-full rounded-md border border-[#D5DEE7] bg-white px-3 text-[13px] text-[#243B53] outline-none transition focus:border-[#15915D] focus:ring-2 focus:ring-[#15915D]/10"
                    >
                      <option value="" disabled>
                        Select District
                      </option>
                      <option value="ranchi">Ranchi</option>
                      <option value="jamshedpur">East Singhbhum</option>
                      <option value="dhanbad">Dhanbad</option>
                      <option value="bokaro">Bokaro</option>
                      <option value="hazaribagh">Hazaribagh</option>
                      <option value="deoghar">Deoghar</option>
                      <option value="dumka">Dumka</option>
                      <option value="giridih">Giridih</option>
                      <option value="palamu">Palamu</option>
                      <option value="ramgarh">Ramgarh</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="pinCode"
                      className="mb-2 block text-[12px] font-bold text-[#243B53]"
                    >
                      PIN Code
                    </label>

                    <input
                      id="pinCode"
                      name="pinCode"
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      value={formData.pinCode}
                      onChange={handleChange}
                      placeholder="e.g. 834001"
                      className="h-[44px] w-full rounded-md border border-[#D5DEE7] bg-white px-3 text-[13px] text-[#243B53] outline-none transition focus:border-[#15915D] focus:ring-2 focus:ring-[#15915D]/10"
                    />
                  </div>
                </div>

                <div className="rounded-lg border border-[#DDE5EC] bg-[#F8FAFB] px-4 py-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E5F5ED] text-[18px]">
                      📍
                    </div>

                    <div>
                      <p className="text-[12px] font-bold text-[#243B53]">
                        Location tip
                      </p>
                      <p className="mt-1 text-[11px] leading-5 text-[#667085]">
                        Mention a nearby landmark, road name, school, hospital
                        or any place that helps identify the exact location.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3 pt-4">
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
                    Next: Upload Evidence →
                  </button>
                </div>
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

export default Location;