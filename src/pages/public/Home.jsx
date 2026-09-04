import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  CheckCircle2,
  Droplets,
  GraduationCap,
  HeartPulse,
  Leaf,
  MapPin,
  Recycle,
  ShieldCheck,
  Sprout,
  Users,
  Waves,
  Wrench,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import HowItWorks from "./HowItWorks";
import Challenges from "./Challenges";
import Universities from "./Universities";
import Projects from "./Projects";
import Impact from "./Impact";
import About from "./About";
import Contact from "./Contact";

const stats = [
  {
    value: "1,248",
    label: "Problems Reported",
    icon: ShieldCheck,
  },
  {
    value: "892",
    label: "Verified Problems",
    icon: Users,
  },
  {
    value: "156",
    label: "Active Projects",
    icon: Building2,
  },
  {
    value: "74",
    label: "Solutions Implemented",
    icon: CheckCircle2,
  },
  {
    value: "3,200+",
    label: "Citizens Impacted",
    icon: Users,
  },
];

const categories = [
  {
    title: "Water & Sanitation",
    icon: Droplets,
  },
  {
    title: "Agriculture",
    icon: Sprout,
  },
  {
    title: "Education",
    icon: GraduationCap,
  },
  {
    title: "Healthcare",
    icon: HeartPulse,
  },
  {
    title: "Environment",
    icon: Leaf,
  },
  {
    title: "Rural Infrastructure",
    icon: Wrench,
  },
];

function Home() {
  return (
    <section className="border-t border-[#E1E8EE] bg-[#F8FAFB]">

      <Navbar />

      <div className="min-h-screen overflow-x-hidden bg-white text-[#12345B]">
        {/* =========================================================
          HERO
      ========================================================= */}
        <section
          id="home"
          className="relative border-b border-[#DDE5EC] bg-[#F9FBFC]"
        >
          <div className="mx-auto max-w-[1500px] px-5 lg:px-8">
            <div className="grid min-h-[390px] items-center lg:grid-cols-[48%_52%]">
              {/* LEFT */}
              <div className="py-12 lg:py-14">
                <h1 className="max-w-[590px] text-[38px] font-extrabold leading-[1.12] tracking-[-1.5px] text-[#07336B] sm:text-[44px] lg:text-[47px]">
                  Turn Local Problems
                  <br />
                  Into{" "}
                  <span className="text-[#15915D]">Real Solutions</span>
                </h1>

                <p className="mt-5 max-w-[510px] text-[14px] leading-6 text-[#334E68] sm:text-[15px]">
                  Report real community challenges and connect with
                  universities, innovators and industry to create solutions
                  that make a real-world impact.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    to="/challenges"
                    className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-md bg-[#15915D] px-6 text-[13px] font-bold text-white shadow-sm transition hover:bg-[#107849]"
                  >
                    Report a Problem
                    <ArrowRight size={15} />
                  </Link>

                  <Link
                    to="/challenges"
                    className="inline-flex min-h-[42px] items-center justify-center rounded-md border border-[#9AAFC2] bg-white px-6 text-[13px] font-bold text-[#12345B] transition hover:border-[#15915D] hover:text-[#15915D]"
                  >
                    Explore Challenges
                  </Link>
                </div>
              </div>

              {/* RIGHT - COMMUNITY CYCLE */}
              <div className="relative flex min-h-[380px] items-center justify-center overflow-hidden py-8 lg:min-h-[410px]">
                <CommunityCycle />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
          STATS
      ========================================================= */}
        <section className="border-b border-[#E1E8EE] bg-white">
          <div className="mx-auto max-w-[1500px] px-5 lg:px-8">
            <div className="grid grid-cols-2 divide-x divide-y divide-[#E1E8EE] sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0">
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
          CATEGORIES
      ========================================================= */}
        <section className="bg-white">
          <div className="mx-auto max-w-[1500px] px-5 py-10 lg:px-8 lg:py-12">
            <h2 className="text-center text-[21px] font-extrabold tracking-[-0.3px] text-[#07336B] sm:text-[23px]">
              Top Challenge Categories
            </h2>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
              {categories.map((category) => (
                <CategoryCard key={category.title} {...category} />
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
          SMALL CTA
      ========================================================= */}
        <section className="border-t border-[#E1E8EE] bg-[#F8FAFB]">
          <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-5 px-5 py-8 text-center sm:flex-row sm:text-left lg:px-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#15915D]">
                Have a community problem?
              </p>

              <h2 className="mt-1 text-lg font-bold text-[#07336B]">
                Your problem could become someone&apos;s next solution.
              </h2>
            </div>

            <Link
              to="/challenges"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#07336B] px-5 py-3 text-[12px] font-bold text-white transition hover:bg-[#0A447F]"
            >
              Get Started
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </div>
      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* =========================================================
          CHALLENGES
      ========================================================= */}
      <section id="challenges">
        <Challenges />
      </section>

      {/* =========================================================
          UNIVERSITIES
      ========================================================= */}
      <section id="universities">
        <Universities />
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}
      <section id="projects">
        <Projects />
      </section>

      {/* =========================================================
          IMPACT
      ========================================================= */}
      <section id="impact">
        <Impact />
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section id="about">
        <About />
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section id="contact">
        <Contact />

        <Footer />
      </section>
    </section>
  );
}

/* ===============================================================
   COMMUNITY CYCLE
================================================================ */

function CommunityCycle() {
  return (
    <div className="relative h-[350px] w-full max-w-[540px] sm:h-[370px]">
      {/* Decorative background hills */}
      <div className="absolute bottom-0 left-1/2 h-[100px] w-[115%] -translate-x-1/2 overflow-hidden">
        <div className="absolute bottom-[-55px] left-[-8%] h-[120px] w-[115%] rounded-[50%] bg-[#EAF5EE]" />
        <div className="absolute bottom-[-70px] left-[25%] h-[130px] w-[90%] rounded-[50%] bg-[#DCEFE3]" />
      </div>

      {/* Wind turbines / landscape */}
      <div className="absolute bottom-[52px] left-[8%] opacity-70">
        <WindTurbine />
      </div>

      <div className="absolute bottom-[48px] right-[7%] opacity-60">
        <WindTurbine scale />
      </div>

      <div className="absolute bottom-[45px] left-[27%]">
        <SmallTree />
      </div>

      <div className="absolute bottom-[45px] right-[26%]">
        <SmallTree />
      </div>

      {/* Main circular workflow */}
      <div className="absolute left-1/2 top-[40%] h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 sm:h-[305px] sm:w-[305px]">
        {/* Outer dotted circle */}
        <div className="absolute inset-[18px] rounded-full border-[1.5px] border-dashed border-[#8AA8BF]" />

        {/* Arrows */}
        <CycleArrow className="left-[49%] top-[-3px] rotate-[25deg]" />
        <CycleArrow className="right-[-4px] top-[29%] rotate-[90deg]" />
        <CycleArrow className="right-[4%] bottom-[25%] rotate-[155deg]" />
        <CycleArrow className="left-[42%] bottom-[-5px] rotate-[205deg]" />
        <CycleArrow className="left-[-3px] bottom-[28%] rotate-[270deg]" />
        <CycleArrow className="left-[3%] top-[27%] rotate-[325deg]" />

        {/* CENTER */}
        <div className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white shadow-[0_4px_18px_rgba(7,51,107,0.10)]">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F6EF] text-[#15915D]">
            <CheckCircle2 size={20} />
          </div>

          <span className="mt-1 text-[8px] font-bold text-[#07336B]">
            SOLUTION
          </span>
        </div>

        {/* CITIZEN */}
        <CycleNode
          className="left-1/2 top-[-12px] -translate-x-1/2"
          icon={<Users size={23} />}
          label="Citizen"
        />

        {/* VERIFICATION */}
        <CycleNode
          className="right-[-15px] top-[28%]"
          icon={<ShieldCheck size={23} />}
          label="Verification"
        />

        {/* UNIVERSITY */}
        <CycleNode
          className="right-[8px] bottom-[13%]"
          icon={<Building2 size={23} />}
          label="University"
        />

        {/* INDUSTRY */}
        <CycleNode
          className="bottom-[-13px] left-1/2 -translate-x-1/2"
          icon={<Wrench size={23} />}
          label="Industry"
        />

        {/* REPORT */}
        <CycleNode
          className="bottom-[13%] left-[-16px]"
          icon={<ShieldCheck size={23} />}
          label="Report Problem"
        />

        {/* INNOVATION */}
        <CycleNode
          className="left-[-20px] top-[28%]"
          icon={<LightBulbIcon />}
          label="Innovation"
        />
      </div>

      {/* People silhouettes */}
      <div className="absolute bottom-[43px] left-[20%] hidden sm:block">
        <Person />
      </div>

      <div className="absolute bottom-[40px] right-[19%] hidden sm:block">
        <Person />
      </div>
    </div>
  );
}

/* ===============================================================
   CYCLE NODE
================================================================ */

function CycleNode({ className, icon, label }) {
  return (
    <div
      className={`absolute flex w-[82px] flex-col items-center text-center ${className}`}
    >
      <div className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-white text-[#07336B] shadow-[0_3px_12px_rgba(7,51,107,0.12)] ring-1 ring-[#DDE7EF]">
        {icon}
      </div>

      <span className="mt-1.5 whitespace-nowrap text-[9px] font-bold text-[#07336B] sm:text-[10px]">
        {label}
      </span>
    </div>
  );
}

/* ===============================================================
   CYCLE ARROW
================================================================ */

function CycleArrow({ className = "" }) {
  return (
    <div
      className={`absolute z-10 flex h-5 w-7 items-center justify-center text-[#15915D] ${className}`}
    >
      <ArrowRight size={20} strokeWidth={2.2} />
    </div>
  );
}

/* ===============================================================
   STAT
================================================================ */

function StatItem({ value, label, icon: Icon }) {
  return (
    <div className="flex min-h-[76px] items-center justify-center gap-3 px-3 py-4 sm:px-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0F7F3] text-[#07336B]">
        <Icon size={18} strokeWidth={2} />
      </div>

      <div>
        <div className="text-[18px] font-extrabold leading-5 text-[#07336B] sm:text-[20px]">
          {value}
        </div>

        <div className="mt-1 whitespace-nowrap text-[9px] font-medium text-[#52677B] sm:text-[10px]">
          {label}
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   CATEGORY CARD
================================================================ */

function CategoryCard({ title, icon: Icon }) {
  return (
    <Link
      to="/challenges"
      className="group flex min-h-[92px] flex-col items-center justify-center rounded-lg border border-[#DDE5EC] bg-white px-2 py-4 shadow-[0_1px_5px_rgba(7,51,107,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-[#15915D] hover:shadow-md"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F2F7FA] text-[#07336B] transition group-hover:bg-[#E8F6EF] group-hover:text-[#15915D]">
        <Icon size={25} strokeWidth={1.8} />
      </div>

      <span className="mt-3 text-center text-[10px] font-bold leading-4 text-[#243B53] sm:text-[11px]">
        {title}
      </span>
    </Link>
  );
}

/* ===============================================================
   LANDSCAPE HELPERS
================================================================ */

function WindTurbine({ scale = false }) {
  return (
    <div className={scale ? "scale-75" : ""}>
      <div className="relative h-[85px] w-[38px]">
        <div className="absolute bottom-0 left-1/2 h-[65px] w-[2px] -translate-x-1/2 bg-[#9CC5AE]" />

        <div className="absolute left-1/2 top-[12px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#7FB094]" />

        <div className="absolute left-1/2 top-[13px] h-[2px] w-[30px] -translate-x-[1px] origin-left rotate-[20deg] bg-[#9CC5AE]" />

        <div className="absolute left-1/2 top-[13px] h-[2px] w-[30px] -translate-x-[1px] origin-left rotate-[140deg] bg-[#9CC5AE]" />

        <div className="absolute left-1/2 top-[13px] h-[2px] w-[30px] -translate-x-[1px] origin-left rotate-[260deg] bg-[#9CC5AE]" />
      </div>
    </div>
  );
}

function SmallTree() {
  return (
    <div className="relative h-[35px] w-[25px]">
      <div className="absolute bottom-0 left-1/2 h-4 w-[2px] -translate-x-1/2 bg-[#8BAE8E]" />
      <div className="absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 rounded-full bg-[#B7DCC3]" />
      <div className="absolute left-[2px] top-[8px] h-5 w-5 rounded-full bg-[#A5D1B4]" />
    </div>
  );
}

function Person() {
  return (
    <div className="relative h-[65px] w-[25px]">
      <div className="absolute left-1/2 top-0 h-[9px] w-[9px] -translate-x-1/2 rounded-full bg-[#07336B]" />
      <div className="absolute left-1/2 top-[9px] h-[29px] w-[9px] -translate-x-1/2 rounded-t-full bg-[#15915D]" />
      <div className="absolute left-1/2 top-[35px] h-[24px] w-[2px] -translate-x-[5px] rotate-[12deg] bg-[#07336B]" />
      <div className="absolute left-1/2 top-[35px] h-[24px] w-[2px] translate-x-[3px] rotate-[-12deg] bg-[#07336B]" />
      <div className="absolute left-1/2 top-[16px] h-[2px] w-[23px] -translate-x-1/2 bg-[#07336B]" />
    </div>
  );
}

function LightBulbIcon() {
  return (
    <div className="relative flex h-6 w-6 items-center justify-center">
      <div className="h-[16px] w-[13px] rounded-[50%_50%_45%_45%] border-2 border-[#07336B]" />
      <div className="absolute bottom-[2px] h-[3px] w-[8px] rounded-sm bg-[#07336B]" />
    </div>
  );
}

export default Home;