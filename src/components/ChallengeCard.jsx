import { Droplets, Sprout, GraduationCap, HeartPulse, Construction, Leaf, MapPin } from "lucide-react";

const iconMap = {
  "Water & Sanitation": Droplets,
  Agriculture: Sprout,
  Education: GraduationCap,
  Healthcare: HeartPulse,
  "Poor Infrastructure": Construction,
  Environment: Leaf,
};

export default function ChallengeCard({ challenge }) {
  const Icon = iconMap[challenge.category] || Construction;

  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-3 flex items-center gap-2">
        <Icon size={17} className={challenge.iconColor} />
        <span className={`text-xs font-semibold ${challenge.iconColor}`}>
          {challenge.category}
        </span>
      </div>

      <h3 className="min-h-[56px] text-lg font-bold leading-7 text-[#06285c]">
        {challenge.title}
      </h3>

      <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
        <MapPin size={14} />
        <span>{challenge.location}</span>
      </div>

      <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-600">
        {challenge.description}
      </p>

      <div className="mt-5 flex items-center justify-between gap-2">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            challenge.status === "Verified"
              ? "bg-emerald-50 text-emerald-700"
              : "bg-blue-50 text-blue-600"
          }`}
        >
          {challenge.status}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            challenge.priority === "High Priority"
              ? "bg-red-50 text-red-500"
              : challenge.priority === "Medium Priority"
              ? "bg-orange-50 text-orange-500"
              : "bg-emerald-50 text-emerald-600"
          }`}
        >
          {challenge.priority}
        </span>
      </div>
    </div>
  );
}