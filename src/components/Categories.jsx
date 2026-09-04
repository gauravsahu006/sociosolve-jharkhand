import { Building2, Droplets, GraduationCap, HeartPulse, Leaf, Sprout } from 'lucide-react'

const categories = [
  ['Water & Sanitation', Droplets, 'text-blue-500', 'bg-blue-50'],
  ['Agriculture', Sprout, 'text-green-600', 'bg-green-50'],
  ['Education', GraduationCap, 'text-blue-700', 'bg-blue-50'],
  ['Healthcare', HeartPulse, 'text-blue-800', 'bg-blue-50'],
  ['Environment', Leaf, 'text-green-600', 'bg-green-50'],
  ['Rural Infrastructure', Building2, 'text-blue-700', 'bg-blue-50'],
]

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-14 pt-8 lg:px-8">
      <h2 className="mb-7 text-center text-2xl font-extrabold text-[#092752] sm:text-3xl">
        Top Challenge Categories
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map(([name, Icon, color, bg]) => (
          <button
            key={name}
            className="group flex min-h-28 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#159447]/30 hover:shadow-md"
          >
            <div className={`mb-3 rounded-full p-2.5 ${bg}`}>
              <Icon size={32} className={color} />
            </div>
            <span className="text-center text-xs font-bold text-[#102d54]">{name}</span>
          </button>
        ))}
      </div>
    </section>
  )
}