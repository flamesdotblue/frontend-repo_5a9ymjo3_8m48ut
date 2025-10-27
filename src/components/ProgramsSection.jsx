import { BookOpen, Cpu, Building2, Stethoscope, Palette } from 'lucide-react';

const faculties = [
  {
    name: 'Computing & IT',
    icon: Cpu,
    color: 'from-blue-500 to-indigo-500',
    programs: ['BS Computer Science', 'BS Software Engineering', 'BS AI', 'MS Computer Science', 'PhD Computer Science'],
  },
  {
    name: 'Engineering',
    icon: Building2,
    color: 'from-emerald-500 to-teal-500',
    programs: ['BE Electrical Engineering', 'BE Civil Engineering', 'BE Mechanical Engineering', 'MS Electrical Engineering'],
  },
  {
    name: 'Business & Management',
    icon: BookOpen,
    color: 'from-amber-500 to-orange-500',
    programs: ['BBA', 'BS Accounting & Finance', 'MBA', 'EMBA', 'MS Management Sciences'],
  },
  {
    name: 'Allied Health',
    icon: Stethoscope,
    color: 'from-rose-500 to-pink-500',
    programs: ['BS Medical Lab Technology', 'BS Radiology', 'BS Nutrition', 'DPT'],
  },
  {
    name: 'Arts & Design',
    icon: Palette,
    color: 'from-fuchsia-500 to-purple-500',
    programs: ['BS Media Studies', 'BS Design', 'BS Animation', 'BS Film & TV'],
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="py-16 sm:py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Programs by Faculty</h2>
          <p className="mt-3 text-neutral-700">
            Choose from a diverse portfolio of undergraduate and postgraduate degrees designed with industry input.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((f) => (
            <div key={f.name} className="group rounded-2xl border bg-white overflow-hidden">
              <div className={`h-24 w-full bg-gradient-to-r ${f.color}`} />
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center rounded-lg bg-neutral-100 p-2">
                    <f.icon className="w-5 h-5 text-neutral-700" />
                  </span>
                  <h3 className="text-xl font-semibold">{f.name}</h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {f.programs.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-neutral-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#courses"
                  className="mt-5 inline-flex text-sm font-medium text-blue-700 hover:text-blue-800"
                >
                  View courses →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
