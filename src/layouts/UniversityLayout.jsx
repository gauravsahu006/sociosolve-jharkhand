import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import UniversitySidebar from "../components/university/UniversitySidebar";
import UniversityHeader from "../components/university/UniversityHeader";

const UniversityLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      <div className="flex min-h-screen">

        {/* =========================
            University Sidebar
        ========================= */}

        <UniversitySidebar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        {/* =========================
            Main Portal Area
        ========================= */}

        <div className="flex min-w-0 flex-1 flex-col">

          {/* Header */}

          <UniversityHeader
            setMobileOpen={setMobileOpen}
          />

          {/* Page Content */}

          <main className="flex-1 p-4 sm:p-6 lg:p-7">
            <Outlet />
          </main>

        </div>

      </div>

    </div>
  );
};

export default UniversityLayout;