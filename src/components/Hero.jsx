import { ArrowDown, Building2, CheckCircle2, Flag, GraduationCap, Users } from 'lucide-react'

const steps = [
  { title: 'Report Problem', icon: Flag, position: 'left-[2%] top-[43%]' },
  { title: 'Citizen', icon: Users, position: 'left-1/2 top-[3%] -translate-x-1/2' },
  { title: 'Verification', icon: CheckCircle2, position: 'right-[2%] top-[25%]' },
  { title: 'University', icon: GraduationCap, position: 'right-[8%] bottom-[13%]' },
  { title: 'Industry', icon: Building2, position: 'left-[28%] bottom-[5%]' },
]

export default function Hero() {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-white via-white to-green-50">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-[#159447]">
            From Problems to Real Solutions
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#092752] sm:text-5xl lg:text-6xl">
            Turn Local Problems
            <br />
            Into <span className="text-[#159447]">Real Solutions</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Report real community challenges and connect with universities, innovators and industry to create solutions
            that make a real-world impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-[#159447] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-100 transition hover:bg-[#117c3b]">
              Report a Problem <ArrowDown size={17} />
            </button>

            <button className="rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-[#092752] transition hover:border-[#159447] hover:text-[#159447]">
              Explore Challenges
            </button>
          </div>
        </div>

        <div className="relative mx-auto h-[340px] w-full max-w-xl sm:h-[390px]">
          <div className="absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#159447]/35 sm:h-[285px] sm:w-[285px]" />
          <div className="absolute left-1/2 top-1/2 h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#159447]/15 bg-green-50/50" />

          {steps.map(({ title, icon: Icon, position }) => (
            <div key={title} className={`absolute ${position} flex flex-col items-center text-center`}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-100 bg-white shadow-md sm:h-16 sm:w-16">
                <Icon size={30} className="text-[#0b2854]" />
              </div>
              <span className="mt-2 whitespace-nowrap text-xs font-bold text-[#0b2854] sm:text-sm">{title}</span>
            </div>
          ))}

          <div className="absolute left-[25%] top-[25%] text-[#159447]">
            <span className="text-2xl">↗</span>
          </div>
          <div className="absolute right-[23%] top-[31%] text-[#159447]">
            <span className="text-2xl">↘</span>
          </div>
          <div className="absolute bottom-[24%] right-[28%] text-[#159447]">
            <span className="text-2xl">↙</span>
          </div>
          <div className="absolute bottom-[24%] left-[24%] text-[#159447]">
            <span className="text-2xl">↖</span>
          </div>

          <div className="absolute bottom-0 left-1/2 h-12 w-[90%] -translate-x-1/2 rounded-[50%] bg-gradient-to-t from-green-100 to-transparent" />
        </div>
      </div>
    </section>
  )
}