import { BadgeCheck, BriefcaseBusiness, FileCheck, ShieldCheck, Users } from 'lucide-react'

const stats = [
  ['1,248', 'Problems Reported', ShieldCheck],
  ['892', 'Verified Problems', BadgeCheck],
  ['156', 'Active Projects', BriefcaseBusiness],
  ['74', 'Solutions Implemented', FileCheck],
  ['3,200+', 'Citizens Impacted', Users],
]

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
      <div className="grid grid-cols-2 rounded-xl border border-slate-100 bg-white shadow-sm sm:grid-cols-3 lg:grid-cols-5">
        {stats.map(([number, label, Icon]) => (
          <div key={label} className="flex items-center justify-center gap-3 border-b border-slate-100 p-5 last:border-0 sm:border-r lg:border-b-0">
            <Icon size={30} className="hidden shrink-0 text-[#159447] sm:block" />
            <div>
              <p className="text-xl font-extrabold text-[#092752] sm:text-2xl">{number}</p>
              <p className="text-[11px] font-medium text-slate-500 sm:text-xs">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}