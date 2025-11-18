export default function FAQ() {
  const faqs = [
    { q: "What is Human Design?", a: "A synthesis system that helps you make decisions aligned with your energy. It brings together astrology, I Ching, Kabbalah, chakras, and quantum theory." },
    { q: "Do I need exact birth time?", a: "It’s recommended for precision. If unknown, we can approximate or use a range to find your likely Type/Authority." },
    { q: "Can I book a reading?", a: "Yes! Choose an offering that fits. You’ll receive a recording and concise notes you can revisit." },
  ];

  return (
    <section id="faq" className="py-16 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Common questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-white/10 bg-slate-900/40 p-4">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="text-white font-medium">{f.q}</span>
                <span className="text-slate-400 group-open:hidden">+</span>
                <span className="text-slate-400 hidden group-open:inline">−</span>
              </summary>
              <p className="mt-2 text-slate-300/90">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
