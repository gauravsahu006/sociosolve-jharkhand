import {
  Handshake,
  Lightbulb,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-[1500px] px-5 py-6 sm:px-8 lg:px-10">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <section className="text-center">
          <h1 className="text-[27px] font-extrabold tracking-[-0.7px] text-[#07336B] sm:text-[31px]">
            About SocioSolve Jharkhand
          </h1>

          <p className="mx-auto mt-2 max-w-[700px] text-[11px] font-medium leading-[17px] text-[#334E68] sm:text-[12px] sm:leading-[19px]">
            SocioSolve is a unified platform that bridges the gap between
            community problems and innovative solutions. We bring together
            citizens, universities, industry and government to build a better
            and sustainable Jharkhand.
          </p>
        </section>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}
        <section className="mt-6 grid gap-7 lg:grid-cols-[0.85fr_1fr]">
          {/* ===================================================
              IMAGE
          =================================================== */}
          <div className="relative h-[290px] overflow-hidden rounded-xl border border-[#DDE5EA] sm:h-[320px] lg:h-[300px]">
            <CommunityImage />
          </div>

          {/* ===================================================
              RIGHT CONTENT
          =================================================== */}
          <div>
            {/* Mission */}
            <div className="rounded-xl border border-[#DCE5EC] bg-[#F4F8FC] px-5 py-5">
              <h2 className="text-[16px] font-extrabold text-[#07336B]">
                Our Mission
              </h2>

              <p className="mt-2 max-w-[580px] text-[11px] leading-[18px] text-[#536B7F] sm:text-[12px] sm:leading-[19px]">
                To build a collaborative ecosystem that identifies real
                problems, promotes innovation and drives impactful solutions
                for every community.
              </p>
            </div>

            {/* Values */}
            <div className="mt-7">
              <h2 className="text-[17px] font-extrabold text-[#07336B]">
                Our Values
              </h2>

              <div className="mt-4 grid grid-cols-2 gap-5 sm:grid-cols-5">
                <Value
                  icon={Handshake}
                  label="Collaboration"
                  type="green"
                />

                <Value
                  icon={ShieldCheck}
                  label="Transparency"
                  type="green"
                />

                <Value
                  icon={Lightbulb}
                  label="Innovation"
                  type="blue"
                />

                <Value
                  icon={Trophy}
                  label="Impact"
                  type="green"
                />

                <Value
                  icon={Users}
                  label="Inclusivity"
                  type="blue"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ===============================================================
   VALUE
================================================================ */

function Value({ icon: Icon, label, type }) {
  const green = type === "green";

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 ${
          green
            ? "border-[#A7D6B7] bg-[#EDF8F1] text-[#15915D]"
            : "border-[#B5C9DD] bg-[#F1F5FA] text-[#07336B]"
        }`}
      >
        <Icon size={21} strokeWidth={2} />
      </div>

      <p className="mt-2 text-[10px] font-bold text-[#334E68]">
        {label}
      </p>
    </div>
  );
}

/* ===============================================================
   COMMUNITY IMAGE
================================================================ */

function CommunityImage() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#D6D9C8]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#9DAE9A] via-[#7E927B] to-[#4D5D4D]" />

      {/* Dark circular background */}
      <div className="absolute left-1/2 top-1/2 h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#273C35]/50" />

      {/* Soil */}
      <div className="absolute left-1/2 top-1/2 h-[130px] w-[130px] -translate-x-1/2 -translate-y-[35%] rotate-45 rounded-[25px] bg-[#49392B]" />

      {/* Plant stem */}
      <div className="absolute left-1/2 top-[38%] h-[75px] w-[7px] -translate-x-1/2 rounded-full bg-[#46723C]" />

      {/* Leaves */}
      <div className="absolute left-[45%] top-[39%] h-[28px] w-[48px] -rotate-[28deg] rounded-[100%_0_100%_0] bg-[#5EA64E]" />

      <div className="absolute left-[50%] top-[47%] h-[26px] w-[45px] rotate-[27deg] rounded-[0_100%_0_100%] bg-[#4E9144]" />

      <div className="absolute left-[43%] top-[51%] h-[23px] w-[38px] -rotate-[32deg] rounded-[100%_0_100%_0] bg-[#6BAE54]" />

      <div className="absolute left-[52%] top-[57%] h-[22px] w-[37px] rotate-[30deg] rounded-[0_100%_0_100%] bg-[#579C49]" />

      {/* Hands */}
      <Hand
        className="left-[4%] top-[40%] -rotate-[8deg]"
      />

      <Hand
        className="right-[3%] top-[40%] rotate-[8deg]"
      />

      <Hand
        className="bottom-[2%] left-[22%] rotate-[48deg]"
      />

      <Hand
        className="bottom-[2%] right-[22%] -rotate-[48deg]"
      />

      {/* Small center glow */}
      <div className="absolute left-1/2 top-1/2 h-[115px] w-[115px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#80966E]/20 blur-xl" />
    </div>
  );
}

/* ===============================================================
   HAND ILLUSTRATION
================================================================ */

function Hand({ className = "" }) {
  return (
    <div className={`absolute h-[145px] w-[75px] ${className}`}>
      <div className="absolute bottom-0 left-1/2 h-[120px] w-[48px] -translate-x-1/2 rounded-[28px] bg-[#D8B08D]" />

      <div className="absolute left-1/2 top-0 h-[48px] w-[30px] -translate-x-1/2 rounded-[20px] bg-[#E1BA96]" />

      <div className="absolute left-[16px] top-[5px] h-[55px] w-[13px] rotate-[-12deg] rounded-full bg-[#E5BE9A]" />

      <div className="absolute right-[14px] top-[6px] h-[55px] w-[13px] rotate-[12deg] rounded-full bg-[#E0B590]" />

      <div className="absolute left-1/2 top-[37px] h-[15px] w-[35px] -translate-x-1/2 rounded-full bg-[#C99B78]/50" />
    </div>
  );
}

export default About;