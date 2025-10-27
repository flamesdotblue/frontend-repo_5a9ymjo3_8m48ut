import SiteHeader from './components/SiteHeader';
import Hero from './components/Hero';
import ProgramsSection from './components/ProgramsSection';
import FeaturedCourses from './components/FeaturedCourses';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <SiteHeader />
      <main>
        <Hero />
        <ProgramsSection />
        <FeaturedCourses />
      </main>
      <footer className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} UITU — All rights reserved.</p>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Privacy</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Accessibility</a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
