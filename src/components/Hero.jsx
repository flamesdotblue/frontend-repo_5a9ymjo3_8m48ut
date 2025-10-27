import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              <Star className="w-4 h-4" />
              Excellence in Technology & Innovation
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Explore Programs and Courses at UITU
            </h1>
            <p className="mt-4 text-neutral-700 text-lg">
              Build your future with industry-aligned curricula, expert faculty, and a vibrant campus life.
              Discover undergraduate, postgraduate and professional certifications tailored to your ambitions.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white font-semibold hover:bg-blue-700"
              >
                Browse Courses
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-5 py-3 font-semibold hover:bg-neutral-50"
              >
                Explore Programs
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div className="rounded-lg border p-4 bg-white">
                <dt className="text-sm text-neutral-600">Programs</dt>
                <dd className="text-2xl font-bold">60+ </dd>
              </div>
              <div className="rounded-lg border p-4 bg-white">
                <dt className="text-sm text-neutral-600">Students</dt>
                <dd className="text-2xl font-bold">10,000+</dd>
              </div>
              <div className="rounded-lg border p-4 bg-white">
                <dt className="text-sm text-neutral-600">Industry Partners</dt>
                <dd className="text-2xl font-bold">150+</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-600/20 via-indigo-500/20 to-purple-500/20 border border-neutral-200 shadow-inner" />
            <div className="absolute -bottom-5 -right-5 w-40 h-40 rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 blur-2xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}
