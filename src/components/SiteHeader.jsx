import { useState } from 'react';
import { Menu, X, GraduationCap, Search } from 'lucide-react';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Programs', href: '#programs' },
    { label: 'Courses', href: '#courses' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Research', href: '#research' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white p-2">
              <GraduationCap className="w-5 h-5" />
            </span>
            <div className="font-bold text-lg tracking-tight">UITU</div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-neutral-700 hover:text-blue-700 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium hover:bg-neutral-50"
            >
              <Search className="w-4 h-4" />
              Find a course
            </a>
            <a
              href="#admissions"
              className="inline-flex items-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700"
            >
              Apply Now
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-neutral-300"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#admissions"
                className="rounded-md px-3 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                onClick={() => setOpen(false)}
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
