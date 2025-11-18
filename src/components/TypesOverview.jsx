const types = [
  { name: "Manifestor", blurb: "Here to initiate and spark new trajectories.", hue: "from-cyan-400 to-blue-500" },
  { name: "Generator", blurb: "Life force builders responding with satisfaction.", hue: "from-rose-400 to-pink-500" },
  { name: "Manifesting Generator", blurb: "Multi-passionate, fast, here to pivot.", hue: "from-amber-400 to-orange-500" },
  { name: "Projector", blurb: "Guides who see systems and people deeply.", hue: "from-emerald-400 to-green-500" },
  { name: "Reflector", blurb: "Lunar beings mirroring the environment.", hue: "from-violet-400 to-fuchsia-500" },
];

export default function TypesOverview() {
  return (
    <section id="types" className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Human Design Types</h2>
          <p className="mt-3 text-slate-300/90">A quick overview of each Type. Follow your strategy and authority for ease and alignment.</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((t) => (
            <div key={t.name} className="group rounded-2xl border border-white/10 bg-slate-900/40 p-5 hover:bg-slate-900/70 transition">
              <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r ${t.hue} mb-4`} />
              <h3 className="text-lg font-semibold text-white">{t.name}</h3>
              <p className="mt-1 text-sm text-slate-300/90">{t.blurb}</p>
              <a href="#cta" className="inline-flex items-center text-sm text-blue-300 mt-3 hover:text-blue-200">Get your chart →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
