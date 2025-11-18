import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TypesOverview from './components/TypesOverview'
import Services from './components/Services'
import CTA from './components/CTA'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* ambient pattern */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(70rem_40rem_at_50%_-10%,rgba(59,130,246,0.10),transparent),radial-gradient(60rem_30rem_at_10%_120%,rgba(99,102,241,0.10),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <TypesOverview />
        <Services />
        <CTA />
        <FAQ />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400">© {new Date().getFullYear()} Human Design Guide. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#services" className="hover:text-white transition">Bookings</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="/test" className="hover:text-white transition">System Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
