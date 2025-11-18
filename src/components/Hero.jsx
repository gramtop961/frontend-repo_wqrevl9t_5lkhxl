export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 overflow-hidden">
      {/* background glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80rem] h-[80rem] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block mb-4 text-xs font-medium tracking-wider uppercase text-blue-300/80">Begin your journey</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Discover your unique Human Design
            </h1>
            <p className="mt-4 text-lg text-slate-200/90 leading-relaxed">
              A beautiful, modern guide to Types, Authorities, and Profiles — plus a simple way to get your free chart.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cta" className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium shadow hover:shadow-lg transition">Get your free chart</a>
              <a href="#types" className="px-5 py-3 rounded-lg border border-white/10 text-slate-100 hover:bg-white/5 transition">Explore Types</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-6 shadow-2xl">
              <div className="w-full h-full rounded-2xl bg-[conic-gradient(at_50%_50%,theme(colors.blue.500/.25)_0deg,transparent_120deg)]"/>
            </div>
            <div className="absolute -bottom-4 -left-4 px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-200 border border-blue-400/20">Cosmic clarity</div>
          </div>
        </div>
      </div>
    </section>
  );
}
