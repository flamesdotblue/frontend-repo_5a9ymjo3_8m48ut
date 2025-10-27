import { useMemo, useState } from 'react';
import { BookOpen, Users, Clock, Star, Calendar } from 'lucide-react';

const allCourses = [
  {
    id: 'cs101',
    title: 'Introduction to Programming',
    faculty: 'Computing & IT',
    level: 'Undergraduate',
    duration: '16 weeks',
    credits: 3,
    rating: 4.7,
  },
  {
    id: 'se220',
    title: 'Software Design & Architecture',
    faculty: 'Computing & IT',
    level: 'Undergraduate',
    duration: '16 weeks',
    credits: 3,
    rating: 4.6,
  },
  {
    id: 'ai510',
    title: 'Machine Learning',
    faculty: 'Computing & IT',
    level: 'Graduate',
    duration: '14 weeks',
    credits: 3,
    rating: 4.8,
  },
  {
    id: 'mba600',
    title: 'Strategic Management',
    faculty: 'Business & Management',
    level: 'Graduate',
    duration: '12 weeks',
    credits: 3,
    rating: 4.5,
  },
  {
    id: 'eng210',
    title: 'Circuit Analysis',
    faculty: 'Engineering',
    level: 'Undergraduate',
    duration: '16 weeks',
    credits: 3,
    rating: 4.4,
  },
  {
    id: 'ah120',
    title: 'Human Anatomy',
    faculty: 'Allied Health',
    level: 'Undergraduate',
    duration: '16 weeks',
    credits: 4,
    rating: 4.6,
  },
  {
    id: 'msd100',
    title: 'Media Storytelling Basics',
    faculty: 'Arts & Design',
    level: 'Short Course',
    duration: '8 weeks',
    credits: 1,
    rating: 4.3,
  },
];

const levels = ['All', 'Undergraduate', 'Graduate', 'Short Course'];

export default function FeaturedCourses() {
  const [active, setActive] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return allCourses.filter((c) => {
      const levelMatch = active === 'All' || c.level === active;
      const q = query.toLowerCase();
      const qMatch = !q || c.title.toLowerCase().includes(q) || c.faculty.toLowerCase().includes(q);
      return levelMatch && qMatch;
    });
  }, [active, query]);

  return (
    <section id="courses" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">Featured Courses</h2>
          <p className="mt-3 text-neutral-700">
            Search and filter by level to find courses that fit your goals.
          </p>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 items-center">
          <div className="flex-1 w-full">
            <input
              type="text"
              placeholder="Search by course or faculty"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-md border border-neutral-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="flex items-center gap-2">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setActive(lvl)}
                className={`px-3 py-2 rounded-md text-sm font-medium border transition-colors ${
                  active === lvl
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-50'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <article key={c.id} className="rounded-2xl border bg-white p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center rounded-lg bg-blue-50 text-blue-700 p-2">
                    <BookOpen className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900">{c.title}</h3>
                    <p className="text-sm text-neutral-600">{c.faculty} · {c.level}</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-sm font-medium">{c.rating.toFixed(1)}</span>
                </div>
              </div>

              <dl className="mt-4 grid grid-cols-3 gap-2 text-sm">
                <div className="flex items-center gap-2 text-neutral-700"><Clock className="w-4 h-4" /> {c.duration}</div>
                <div className="flex items-center gap-2 text-neutral-700"><Users className="w-4 h-4" /> {c.credits} credits</div>
                <div className="flex items-center gap-2 text-neutral-700"><Calendar className="w-4 h-4" /> Fall & Spring</div>
              </dl>

              <div className="mt-4 flex items-center gap-3">
                <a href="#admissions" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-700">Enroll</a>
                <a href="#" className="text-sm font-medium text-blue-700 hover:text-blue-800">View syllabus</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
