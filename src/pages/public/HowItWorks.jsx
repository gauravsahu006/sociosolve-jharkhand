import {
  FileText,
  ShieldCheck,
  Lightbulb,
  Building2,
  Users,
  ArrowRight,
  Wind,
  TreePine,
} from "lucide-react";

const steps = [
  {
    number: "1.",
    title: "Report",
    icon: FileText,
    text: "Citizens submit problems with details, location, photos and more.",
    color: "blue",
  },
  {
    number: "2.",
    title: "Verify",
    icon: ShieldCheck,
    text: "Experts verify, remove duplicates and prioritize the most critical problems.",
    color: "green",
  },
  {
    number: "3.",
    title: "Match",
    icon: Lightbulb,
    text: "We match the problem with the right university based on expertise and location.",
    color: "green",
  },
  {
    number: "4.",
    title: "Collaborate",
    icon: Building2,
    text: "Students, faculty and industry partners work together to build innovative solutions.",
    color: "blue",
  },
  {
    number: "5.",
    title: "Impact",
    icon: Users,
    text: "Solutions are tested, implemented and create real impact in communities.",
    color: "blue",
  },
];

function HowItWorks() {
  return (
    <section className="border-b border-[#DDE5EC] bg-white">
      <div className="mx-auto max-w-[1500px] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[30px] font-extrabold tracking-[-0.8px] text-[#07336B] sm:text-[34px]">
            How It Works
          </h2>

          <p className="mt-2 text-[13px] font-medium text-[#52677B] sm:text-[14px]">
            A simple process that turns problems into impactful solutions
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10">
          <div className="grid gap-8 lg:grid-cols-5 lg:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[calc(50%+55px)] top-[38px] hidden w-[calc(100%-110px)] lg:block">
                      <div className="flex items-center">
                        <div className="h-[2px] flex-1 bg-[#A9C1D8]" />
                        <ArrowRight
                          size={18}
                          strokeWidth={2}
                          className="shrink-0 text-[#A9C1D8]"
                        />
                      </div>
                    </div>
                  )}

                  {/* Icon Circle */}
                  <div
                    className={`relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-full border ${
                      step.color === "green"
                        ? "border-[#BFE1D0] bg-[#F0F9F4] text-[#15915D]"
                        : "border-[#C8D9EB] bg-[#F1F6FC] text-[#07336B]"
                    }`}
                  >
                    <Icon size={32} strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-[14px] font-extrabold text-[#07336B]">
                    {step.number} {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 max-w-[180px] text-[11px] leading-[1.7] text-[#52677B] sm:text-[12px]">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Vision */}
        <div className="relative mt-12 min-h-[175px] overflow-hidden rounded-xl border border-[#D8E4EE] bg-[#F4F8FC] px-6 py-7 sm:px-10">

          {/* Background decorative shapes */}
          <div className="pointer-events-none absolute -left-8 bottom-[-35px] h-[100px] w-[180px] rounded-full bg-[#E8F2EC]" />
          <div className="pointer-events-none absolute right-[-30px] bottom-[-40px] h-[125px] w-[230px] rounded-full bg-[#E3EDF7]" />

          {/* Wind turbine */}
          <div className="absolute bottom-4 left-[7%] hidden opacity-50 sm:block">
            <WindTurbine />
          </div>

          <div className="absolute bottom-4 right-[10%] hidden opacity-40 sm:block">
            <WindTurbine />
          </div>

          {/* Trees */}
          <div className="absolute bottom-3 left-[22%] hidden sm:block">
            <TreePine size={35} className="text-[#8BB89A]" />
          </div>

          <div className="absolute bottom-3 right-[25%] hidden sm:block">
            <TreePine size={35} className="text-[#8BB89A]" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-[700px] text-center">
            <h3 className="text-[20px] font-extrabold text-[#07336B]">
              Our Vision
            </h3>

            <p className="mt-3 text-[12px] leading-6 text-[#334E68] sm:text-[13px]">
              A collaborative ecosystem where communities, academia, industry
              and government come together to build a better Jharkhand.
            </p>
          </div>

          {/* Bottom landscape */}
          <div className="absolute bottom-0 left-0 right-0 h-[7px] bg-[#9BC9A9]" />
        </div>
      </div>
    </section>
  );
}

/* Wind turbine */
function WindTurbine() {
  return (
    <div className="relative h-[100px] w-[45px]">
      <div className="absolute bottom-0 left-1/2 h-[75px] w-[2px] -translate-x-1/2 bg-[#9CC5AE]" />

      <div className="absolute left-1/2 top-[13px] h-3 w-3 -translate-x-1/2 rounded-full bg-[#7FB094]" />

      <div className="absolute left-1/2 top-[14px] h-[2px] w-[35px] origin-left rotate-[20deg] bg-[#9CC5AE]" />

      <div className="absolute left-1/2 top-[14px] h-[2px] w-[35px] origin-left rotate-[140deg] bg-[#9CC5AE]" />

      <div className="absolute left-1/2 top-[14px] h-[2px] w-[35px] origin-left rotate-[260deg] bg-[#9CC5AE]" />
    </div>
  );
}

export default HowItWorks;