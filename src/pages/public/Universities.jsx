import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ChevronDown,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../../firebase/auth";
import { db } from "../../firebase/firestore";

const defaultUniversities = [
  {
    id: "static-bit",
    name: "BIT Mesra",
    district: "Ranchi",
    focus: "Engineering, Technology, Innovation",
    variant: "blue",
  },
  {
    id: "static-ranchi",
    name: "Ranchi University",
    district: "Ranchi",
    focus: "Science, Humanities, Social Sciences",
    variant: "blue",
  },
  {
    id: "static-kolhan",
    name: "Kolhan University",
    district: "Chaibasa",
    focus: "Tribal Studies, Environment, Development",
    variant: "blue",
  },
  {
    id: "static-vinoba",
    name: "Vinoba Bhave University",
    district: "Hazaribagh",
    focus: "Agriculture, Forestry, Rural Development",
    variant: "green",
  },
  {
    id: "static-nilamber",
    name: "Nilamber Pitamber University",
    district: "Medinagar",
    focus: "Commerce, Management, Humanities",
    variant: "blue",
  },
  {
    id: "static-sidho",
    name: "Sidho Kanho Murmu University",
    district: "Dumka",
    focus: "Tribal Studies, Education, Culture",
    variant: "blue",
  },
  {
    id: "static-jut",
    name: "Jharkhand University of Technology",
    district: "Ranchi",
    focus: "Engineering, Technology, Research",
    variant: "blue",
  },
  {
    id: "static-cuj",
    name: "Central University of Jharkhand",
    district: "Ranchi",
    focus: "Multi-disciplinary Research & Innovation",
    variant: "green",
  },
];

const districts = [
  "All Districts",
  "Ranchi",
  "Chaibasa",
  "Hazaribagh",
  "Medinagar",
  "Dumka",
];

function Universities() {
  const [district, setDistrict] = useState("All Districts");

  const [searchParams] = useSearchParams();

  // --------------------------------------------------
  // ASSIGNMENT MODE
  // URL example:
  // /universities?mode=assign&problemId=PROB-123
  // --------------------------------------------------

  const assignMode = searchParams.get("mode") === "assign";
  const problemId = searchParams.get("problemId");

  const [currentUser, setCurrentUser] = useState(null);
  const [universities, setUniversities] = useState(
    defaultUniversities
  );

  const [loading, setLoading] = useState(assignMode);
  const [error, setError] = useState("");
  const [selectedUniversity, setSelectedUniversity] =
    useState(null);

  // --------------------------------------------------
  // CHECK LOGIN
  // --------------------------------------------------

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  // --------------------------------------------------
  // LOAD REGISTERED UNIVERSITIES FROM FIREBASE
  // Only needed in assignment mode
  // --------------------------------------------------

  useEffect(() => {
    if (!assignMode) {
      setLoading(false);
      return;
    }

    const loadUniversities = async () => {
      try {
        setLoading(true);
        setError("");

        if (!problemId) {
          setError(
            "Problem ID missing. Please open this page from a verified problem."
          );
          return;
        }

        const snapshot = await getDocs(
          collection(db, "universities")
        );

        const firebaseUniversities = snapshot.docs
          .map((item) => {
            const data = item.data();

            return {
              id: item.id,
              name:
                data.universityName ||
                data.name ||
                data.fullName ||
                "University",

              district:
                data.district ||
                data.location ||
                "Jharkhand",

              focus:
                data.focus ||
                data.focusArea ||
                "Community Development",

              email: data.email || "",
              mobile: data.mobile || "",
              status: data.status || "pending",

              variant: "green",
              registered: true,
            };
          })
          .filter(
            (university) =>
              university.status === "approved"
          );

        setUniversities(firebaseUniversities);
      } catch (err) {
        console.error(
          "Error loading universities:",
          err
        );

        if (err.code === "permission-denied") {
          setError(
            "Permission denied. Only an approved reviewer can assign problems."
          );
        } else {
          setError(
            err.message ||
              "Unable to load universities."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    loadUniversities();
  }, [assignMode, problemId]);

  // --------------------------------------------------
  // FILTER
  // --------------------------------------------------

  const filteredUniversities = useMemo(() => {
    if (district === "All Districts") {
      return universities;
    }

    return universities.filter(
      (university) =>
        university.district === district
    );
  }, [district, universities]);

  // --------------------------------------------------
  // ASSIGN UNIVERSITY
  // --------------------------------------------------

  const handleAssign = (university) => {
    if (!assignMode) {
      return;
    }

    if (!problemId) {
      setError(
        "Problem ID is missing. Please go back to verification."
      );
      return;
    }

    if (!currentUser) {
      setError(
        "Please login as a reviewer before assigning a problem."
      );
      return;
    }

    if (!university.registered) {
      setError(
        "This university is not registered on the platform yet."
      );
      return;
    }

    if (university.status !== "approved") {
      setError(
        "This university is not approved yet."
      );
      return;
    }

    // Save problem
    sessionStorage.setItem(
      "socioSolveSelectedProblemId",
      problemId
    );

    // Save university with REAL Firebase UID
    sessionStorage.setItem(
      "socioSolveSelectedUniversity",
      JSON.stringify({
        id: university.id,
        name: university.name,
        location: university.district,
        district: university.district,
        focus: university.focus,
        email: university.email || "",
        mobile: university.mobile || "",
        status: university.status,
        problemId,
      })
    );

    setSelectedUniversity(university);

    // Assignment confirmation
    window.location.href =
      `/reviewer/assign-university?problemId=${encodeURIComponent(
        problemId
      )}&universityId=${encodeURIComponent(
        university.id
      )}`;
  };

  // --------------------------------------------------
  // LOADING
  // --------------------------------------------------

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-[#e5eee9] border-t-[#07865c]" />

          <p className="mt-4 text-sm font-bold text-[#07336B]">
            Loading Universities...
          </p>

          <p className="mt-1 text-xs text-[#68757d]">
            Fetching registered universities from Firebase.
          </p>
        </div>
      </div>
    );
  }

  // --------------------------------------------------
  // ERROR
  // --------------------------------------------------

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white px-5">
        <div className="w-full max-w-lg rounded-xl border border-red-200 bg-red-50 p-7 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-xl text-red-600">
            !
          </div>

          <h1 className="mt-4 text-lg font-bold text-[#07336B]">
            Unable to Load Universities
          </h1>

          <p className="mt-2 text-sm text-red-600">
            {error}
          </p>

          {assignMode && (
            <Link
              to="/reviewer/verification"
              className="mt-5 inline-flex rounded-md bg-[#07865c] px-5 py-2.5 text-xs font-bold text-white"
            >
              Back to Verification
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-[1500px] px-5 py-6 sm:px-8 lg:px-10">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="relative">

          <Link
            to="/"
            className="absolute left-0 top-0 flex flex-col leading-none"
          >
            <span className="text-[22px] font-extrabold tracking-[-1px] text-[#12345B] sm:text-[24px]">
              Socio<span className="text-[#15915D]">
                Solve
              </span>
            </span>

            <span className="mt-0.5 pl-5 text-[7px] font-bold tracking-[1px] text-[#15915D]">
              Jharkhand
            </span>
          </Link>

          <div className="px-16 text-center sm:px-28">

            {assignMode ? (
              <>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#EAF8F1] px-3 py-1.5 text-[10px] font-bold text-[#07865c]">
                  <CheckCircle2 size={13} />
                  VERIFIED PROBLEM
                </div>

                <h1 className="text-[27px] font-extrabold tracking-[-0.7px] text-[#07336B] sm:text-[31px]">
                  Assign Problem
                </h1>

                <p className="mt-1.5 text-[11px] font-medium text-[#243B53] sm:text-[12px]">
                  Select the appropriate university to work on this problem.
                </p>

                <p className="mt-2 text-[10px] font-bold text-[#07865c]">
                  Problem ID: {problemId}
                </p>
              </>
            ) : (
              <>
                <h1 className="text-[27px] font-extrabold tracking-[-0.7px] text-[#07336B] sm:text-[31px]">
                  Our Partner Universities
                </h1>

                <p className="mt-1.5 text-[11px] font-medium text-[#243B53] sm:text-[12px]">
                  Empowering innovation through knowledge and research
                </p>
              </>
            )}
          </div>

          {/* District dropdown */}

          <div className="absolute right-0 top-0">
            <div className="relative">

              <select
                value={district}
                onChange={(e) =>
                  setDistrict(e.target.value)
                }
                className="h-[35px] w-[150px] appearance-none rounded-md border border-[#DCE3E9] bg-white px-3 pr-8 text-[10px] font-semibold text-[#536B7F] outline-none transition focus:border-[#15915D]"
              >
                {districts.map((item) => (
                  <option key={item}>
                    {item}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={14}
                className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#536B7F]"
              />
            </div>
          </div>
        </header>

        {/* =====================================================
            PROBLEM ASSIGNMENT NOTICE
        ===================================================== */}

        {assignMode && (
          <div className="mt-6 rounded-xl border border-[#BFE5D1] bg-[#F2FAF6] px-5 py-4">

            <div className="flex items-start gap-3">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#07865c]">
                <CheckCircle2 size={18} />
              </div>

              <div>
                <p className="text-sm font-bold text-[#07336B]">
                  Ready to Assign
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#536B7F]">
                  Choose an approved university below.
                  After assignment, this problem will appear
                  automatically in that university's portal.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* =====================================================
            UNIVERSITY GRID
        ===================================================== */}

        <section className="mt-6">

          {filteredUniversities.length > 0 ? (

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">

              {filteredUniversities.map(
                (university) => (
                  <UniversityCard
                    key={university.id}
                    university={university}
                    assignMode={assignMode}
                    selected={
                      selectedUniversity?.id ===
                      university.id
                    }
                    onAssign={handleAssign}
                  />
                )
              )}

            </div>

          ) : (

            <div className="rounded-xl border border-dashed border-[#D5DFE7] py-14 text-center">

              <GraduationCap
                size={30}
                className="mx-auto text-[#9AAAB8]"
              />

              <p className="mt-3 text-sm font-bold text-[#07336B]">
                No universities found
              </p>

              <button
                type="button"
                onClick={() =>
                  setDistrict("All Districts")
                }
                className="mt-4 rounded-md bg-[#07336B] px-5 py-2 text-[10px] font-bold text-white"
              >
                View All Universities
              </button>

            </div>
          )}
        </section>

        {/* =====================================================
            VIEW ALL
        ===================================================== */}

        {!assignMode && (
          <div className="mt-3 flex justify-center">

            <button
              type="button"
              onClick={() =>
                setDistrict("All Districts")
              }
              className="inline-flex h-[36px] items-center justify-center rounded-md bg-[#07336B] px-8 text-[10px] font-bold text-white shadow-sm transition hover:bg-[#0A447F]"
            >
              View All Universities
            </button>

          </div>
        )}

      </main>
    </div>
  );
}

/* ===============================================================
   UNIVERSITY CARD
================================================================ */

function UniversityCard({
  university,
  assignMode,
  selected,
  onAssign,
}) {
  const isGreen =
    university.variant === "green";

  return (
    <article
      className={`group flex min-h-[250px] flex-col items-center rounded-xl border bg-white px-5 py-4 text-center shadow-[0_1px_5px_rgba(7,51,107,0.035)] transition duration-200 hover:-translate-y-0.5 hover:shadow-md ${
        selected
          ? "border-[#07865c] ring-2 ring-[#D7F1E3]"
          : "border-[#DDE4EA]"
      }`}
    >

      {/* Logo */}

      <UniversityLogo green={isGreen} />

      {/* Name */}

      <h2 className="mt-3 min-h-[36px] max-w-[190px] text-[14px] font-extrabold leading-[18px] text-[#07336B] sm:text-[15px]">
        {university.name}
      </h2>

      {/* District */}

      <p className="mt-1 text-[10px] font-bold text-[#243B53]">
        {university.district}
      </p>

      {/* Focus */}

      <p className="mt-2 min-h-[34px] max-w-[190px] text-[10px] leading-[15px] text-[#536B7F]">
        Focus area: {university.focus}
      </p>

      {/* =====================================================
          BUTTON
      ===================================================== */}

      {assignMode ? (

        <button
          type="button"
          onClick={() => onAssign(university)}
          className="mt-auto flex h-[34px] w-full max-w-[170px] items-center justify-center gap-2 rounded-md bg-[#15915D] text-[10px] font-bold text-white shadow-sm transition hover:bg-[#107849]"
        >
          <CheckCircle2 size={14} />

          {selected
            ? "Selected"
            : "Assign Problem"}

          {!selected && (
            <ArrowRight size={13} />
          )}
        </button>

      ) : (

        <Link
          to={`/universities/${university.id}`}
          className="mt-auto flex h-[30px] w-full max-w-[154px] items-center justify-center rounded-md border border-[#9FB3C2] text-[10px] font-bold text-[#07336B] transition hover:border-[#15915D] hover:bg-[#15915D] hover:text-white"
        >
          View University
        </Link>

      )}

    </article>
  );
}

/* ===============================================================
   UNIVERSITY LOGO
================================================================ */

function UniversityLogo({ green = false }) {
  return (
    <div
      className={`relative flex h-[58px] w-[58px] items-center justify-center rounded-full border-[3px] ${
        green
          ? "border-[#23804A] bg-[#F1F8F3]"
          : "border-[#45698E] bg-[#F3F6F9]"
      }`}
    >

      <div
        className={`absolute inset-[5px] rounded-full border ${
          green
            ? "border-[#77A98B]"
            : "border-[#8CA4B9]"
        }`}
      />

      <div
        className={`relative flex h-[28px] w-[28px] items-center justify-center rounded-full ${
          green
            ? "text-[#23804A]"
            : "text-[#45698E]"
        }`}
      >
        <GraduationCap
          size={25}
          strokeWidth={1.7}
        />
      </div>

    </div>
  );
}

export default Universities;