import {
  Activity,
  CalendarDays,
  CheckCircle2,
  Leaf,
  MapPin,
  Users,
} from "lucide-react";

const impactStats = [
  {
    value: "24",
    label: "Districts Covered",
    icon: MapPin,
  },
  {
    value: "892",
    label: "Problems Verified",
    icon: CalendarDays,
  },
  {
    value: "156",
    label: "Active Projects",
    icon: Activity,
  },
  {
    value: "74",
    label: "Solutions Implemented",
    icon: Leaf,
  },
  {
    value: "3,200+",
    label: "Citizens Impacted",
    icon: Users,
  },
];

const highlights = [
  {
    icon: CheckCircle2,
    text: "Improved quality of life in local communities",
  },
  {
    icon: CheckCircle2,
    text: "Access to clean water, better education and healthcare",
  },
  {
    icon: Leaf,
    text: "Providing sustainable and eco-friendly solutions",
  },
  {
    icon: Users,
    text: "Empowering youth and local innovators",
  },
];

const districts = [
  { name: "Garhwa", x: 76, y: 91 },
  { name: "Palamu", x: 119, y: 78 },
  { name: "Latehar", x: 162, y: 98 },
  { name: "Chatra", x: 201, y: 68 },
  { name: "Koderma", x: 251, y: 49 },
  { name: "Giridih", x: 311, y: 58 },
  { name: "Deoghar", x: 371, y: 83 },
  { name: "Godda", x: 431, y: 69 },
  { name: "Sahibganj", x: 482, y: 52 },
  { name: "Pakur", x: 493, y: 101 },
  { name: "Dumka", x: 433, y: 124 },
  { name: "Jamtara", x: 376, y: 136 },
  { name: "Dhanbad", x: 330, y: 107 },
  { name: "Bokaro", x: 290, y: 141 },
  { name: "Ramgarh", x: 242, y: 126 },
  { name: "Hazaribagh", x: 207, y: 112 },
  { name: "Ranchi", x: 211, y: 171 },
  { name: "Khunti", x: 190, y: 211 },
  { name: "Lohardaga", x: 143, y: 178 },
  { name: "Gumla", x: 111, y: 207 },
  { name: "Simdega", x: 119, y: 264 },
  { name: "West Singhbhum", x: 213, y: 255 },
  { name: "Saraikela", x: 266, y: 226 },
  { name: "East Singhbhum", x: 337, y: 245 },
];

function Impact() {
  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-[1500px] px-4 py-5 sm:px-7 lg:px-10">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <div className="text-center">
          <h1 className="text-[26px] font-extrabold tracking-[-0.7px] text-[#07336B] sm:text-[31px]">
            Creating Impact Across Jharkhand
          </h1>
        </div>

        {/* =====================================================
            MAIN IMPACT AREA
        ===================================================== */}
        <section className="mt-3 grid items-center gap-6 lg:grid-cols-[190px_minmax(0,1fr)_245px]">
          {/* ===================================================
              LEFT STATS
          =================================================== */}
          <div className="order-2 space-y-4 lg:order-1">
            {impactStats.map((stat) => (
              <ImpactStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
              />
            ))}
          </div>

          {/* ===================================================
              MAP
          =================================================== */}
          <div className="order-1 flex min-h-[350px] items-center justify-center lg:order-2">
            <div className="relative w-full max-w-[600px]">
              <JharkhandMap />
            </div>
          </div>

          {/* ===================================================
              HIGHLIGHTS
          =================================================== */}
          <aside className="order-3 rounded-xl border border-[#E0E6EB] bg-white p-5 shadow-[0_1px_6px_rgba(7,51,107,0.04)]">
            <h2 className="text-[14px] font-extrabold text-[#07336B]">
              Impact Highlights
            </h2>

            <div className="mt-5 space-y-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-3"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#EDF7F1] text-[#15915D]">
                      <Icon size={14} strokeWidth={2} />
                    </div>

                    <p className="text-[10px] font-semibold leading-[16px] text-[#334E68]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </aside>
        </section>

        {/* =====================================================
            LEGEND
        ===================================================== */}
        <div className="mt-1 flex justify-center lg:ml-[180px]">
          <div className="flex flex-wrap items-center justify-center gap-4 text-[9px] font-semibold text-[#536B7F]">
            <LegendDot type="high" />
            <span>High Activity</span>

            <LegendDot type="medium" />
            <span>Medium Activity</span>

            <LegendDot type="low" />
            <span>Low Activity</span>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ===============================================================
   IMPACT STAT
================================================================ */

function ImpactStat({ value, label, icon: Icon }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#EEF8F2] text-[#15915D]">
        <Icon
          size={21}
          strokeWidth={2}
        />
      </div>

      <div>
        <div className="text-[22px] font-extrabold leading-none text-[#07336B]">
          {value}
        </div>

        <div className="mt-1 text-[10px] font-semibold text-[#536B7F]">
          {label}
        </div>
      </div>
    </div>
  );
}

/* ===============================================================
   LEGEND DOT
================================================================ */

function LegendDot({ type }) {
  const classes = {
    high: "bg-[#178C58]",
    medium: "bg-[#8CCB9F]",
    low: "border border-[#A8D8B5] bg-[#E4F3E7]",
  };

  return (
    <span
      className={`h-4 w-4 rounded-full ${classes[type]}`}
    />
  );
}

/* ===============================================================
   JHARKHAND MAP
================================================================ */

function JharkhandMap() {
  return (
    <div className="relative mx-auto aspect-[1.35/1] w-full max-w-[590px]">
      <svg
        viewBox="0 0 560 340"
        className="h-full w-full"
        role="img"
        aria-label="Jharkhand impact map"
      >
        {/* =====================================================
            JHARKHAND OUTER SILHOUETTE
        ===================================================== */}
        <path
          d="
            M72 72
            L105 52
            L142 55
            L166 39
            L203 44
            L231 31
            L266 38
            L293 25
            L325 38
            L353 31
            L382 45
            L418 42
            L443 58
            L479 61
            L496 82
            L491 109
            L505 131
            L486 153
            L471 176
            L446 184
            L438 211
            L411 222
            L397 245
            L365 251
            L350 274
            L321 282
            L301 267
            L273 274
            L245 294
            L219 284
            L205 263
            L180 260
            L159 274
            L132 263
            L111 244
            L91 225
            L97 198
            L79 181
            L84 153
            L65 132
            L78 107
            L64 91
            Z
          "
          fill="#C8E8CF"
          stroke="#A8D3B0"
          strokeWidth="1.5"
        />

        {/* =====================================================
            DISTRICT REGIONS
        ===================================================== */}

        <MapRegion
          d="M72 72 L105 52 L142 55 L135 89 L102 104 L78 107 L64 91 Z"
          fill="#B9DFC2"
        />

        <MapRegion
          d="M142 55 L166 39 L203 44 L194 77 L168 94 L135 89 Z"
          fill="#D7EED9"
        />

        <MapRegion
          d="M203 44 L231 31 L266 38 L258 71 L226 78 L194 77 Z"
          fill="#C1E4C8"
        />

        <MapRegion
          d="M266 38 L293 25 L325 38 L319 69 L285 77 L258 71 Z"
          fill="#B1DDBB"
        />

        <MapRegion
          d="M325 38 L353 31 L382 45 L377 75 L343 82 L319 69 Z"
          fill="#C7E7CC"
        />

        <MapRegion
          d="M382 45 L418 42 L443 58 L435 91 L405 101 L377 75 Z"
          fill="#B4DFBD"
        />

        <MapRegion
          d="M443 58 L479 61 L496 82 L491 109 L459 108 L435 91 Z"
          fill="#D4ECD6"
        />

        <MapRegion
          d="M78 107 L102 104 L135 89 L168 94 L164 127 L132 143 L101 132 L84 153 L65 132 Z"
          fill="#C2E4C8"
        />

        <MapRegion
          d="M168 94 L194 77 L226 78 L239 107 L219 132 L190 130 L164 127 Z"
          fill="#B2DEBB"
        />

        <MapRegion
          d="M226 78 L258 71 L285 77 L294 105 L272 127 L239 107 Z"
          fill="#CBE8CE"
        />

        <MapRegion
          d="M285 77 L319 69 L343 82 L346 112 L321 131 L294 105 Z"
          fill="#B5E0BD"
        />

        <MapRegion
          d="M343 82 L377 75 L405 101 L396 130 L368 139 L346 112 Z"
          fill="#D0EAD2"
        />

        <MapRegion
          d="M405 101 L435 91 L459 108 L451 138 L422 151 L396 130 Z"
          fill="#BDE2C4"
        />

        <MapRegion
          d="M459 108 L491 109 L505 131 L486 153 L451 138 Z"
          fill="#C6E6CA"
        />

        <MapRegion
          d="M84 153 L101 132 L132 143 L143 172 L120 192 L97 198 Z"
          fill="#B1DDBA"
        />

        <MapRegion
          d="M132 143 L164 127 L190 130 L198 159 L175 181 L143 172 Z"
          fill="#D2EBD4"
        />

        <MapRegion
          d="M190 130 L219 132 L239 107 L272 127 L263 157 L230 169 L198 159 Z"
          fill="#B9E0C0"
        />

        <MapRegion
          d="M272 127 L294 105 L321 131 L316 161 L284 174 L263 157 Z"
          fill="#CBE8CE"
        />

        <MapRegion
          d="M321 131 L346 112 L368 139 L365 169 L338 181 L316 161 Z"
          fill="#B5DEBD"
        />

        <MapRegion
          d="M368 139 L396 130 L422 151 L411 181 L384 190 L365 169 Z"
          fill="#D1EBD3"
        />

        <MapRegion
          d="M422 151 L451 138 L486 153 L471 176 L446 184 L411 181 Z"
          fill="#B9E0C0"
        />

        <MapRegion
          d="M97 198 L120 192 L143 172 L175 181 L181 213 L159 232 L132 223 L111 244 L91 225 Z"
          fill="#C7E7CB"
        />

        <MapRegion
          d="M175 181 L198 159 L230 169 L239 201 L213 219 L181 213 Z"
          fill="#B4DFBC"
        />

        <MapRegion
          d="M230 169 L263 157 L284 174 L277 205 L247 220 L239 201 Z"
          fill="#C8E7CB"
        />

        <MapRegion
          d="M284 174 L316 161 L338 181 L331 210 L300 222 L277 205 Z"
          fill="#B6DFBD"
        />

        <MapRegion
          d="M338 181 L365 169 L384 190 L375 218 L349 228 L331 210 Z"
          fill="#CDE9D0"
        />

        <MapRegion
          d="M384 190 L411 181 L446 184 L438 211 L411 222 L375 218 Z"
          fill="#B7DFBE"
        />

        <MapRegion
          d="M132 223 L159 232 L181 213 L213 219 L219 248 L205 263 L180 260 L159 274 L132 263 L111 244 Z"
          fill="#B8E0C0"
        />

        <MapRegion
          d="M213 219 L239 201 L247 220 L273 238 L245 257 L219 248 Z"
          fill="#CBE8CE"
        />

        <MapRegion
          d="M273 238 L300 222 L331 210 L349 228 L350 255 L321 282 L301 267 L273 274 L245 257 Z"
          fill="#B4DEBC"
        />

        <MapRegion
          d="M349 228 L375 218 L411 222 L397 245 L365 251 L350 255 Z"
          fill="#D0EBD2"
        />

        {/* =====================================================
            DISTRICT LABELS
        ===================================================== */}

        {districts.map((district) => (
          <text
            key={district.name}
            x={district.x}
            y={district.y}
            textAnchor="middle"
            className="fill-[#47715A] text-[7px] font-semibold"
          >
            {district.name}
          </text>
        ))}
      </svg>
    </div>
  );
}

/* ===============================================================
   MAP REGION
================================================================ */

function MapRegion({ d, fill }) {
  return (
    <path
      d={d}
      fill={fill}
      stroke="#A8D3B0"
      strokeWidth="1"
    />
  );
}

export default Impact;