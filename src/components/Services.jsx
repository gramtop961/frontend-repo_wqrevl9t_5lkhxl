export default function Services() {
  const items = [
    { title: "Foundational Reading", desc: "60 minutes • Type, Strategy, Authority, Profile", price: "$120" },
    { title: "Deep Dive", desc: "90 minutes • Centers, Gates, Lines, Life Themes", price: "$199" },
    { title: "Relationship Reading", desc: "Synthesis for couples or collaborators", price: "$220" },
  ];

  return (
    <section id="services" className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Offerings</h2>
          <p className="mt-3 text-slate-300/90">Book a session to get personalized guidance. You’ll receive a recording and summary notes.</p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-300/90">{s.desc}</p>
              <div className="mt-4 text-2xl font-bold text-white">{s.price}</div>
              <a href="#cta" className="mt-4 inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium">Book now</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
