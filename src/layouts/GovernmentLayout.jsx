import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import GovernmentSidebar from "../components/government/GovernmentSidebar";
import GovernmentHeader from "../components/government/GovernmentHeader";

const GovernmentLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="flex min-h-screen">

        <GovernmentSidebar
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <div className="flex min-w-0 flex-1 flex-col">
          <GovernmentHeader
            setMobileOpen={setMobileOpen}
          />

          <main className="flex-1 p-4 sm:p-6 lg:p-7">
            <Outlet />
          </main>
        </div>

      </div>
    </div>
  );
};

export default GovernmentLayout;