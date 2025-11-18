import { useState } from "react";

export default function CTA() {
  const [form, setForm] = useState({ name: "", email: "", date: "", time: "", city: "", country: "" });
  const [status, setStatus] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // placeholder call; backend endpoint can be connected later
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <section id="cta" className="py-16 border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Get your free Human Design chart</h2>
        <p className="mt-3 text-slate-300/90">Enter your birth details and we’ll send you a simple chart overview. Full calculator coming soon.</p>

        <form onSubmit={submit} className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
          {[
            { key: "name", label: "Full name", type: "text" },
            { key: "email", label: "Email", type: "email" },
            { key: "date", label: "Birth date", type: "date" },
            { key: "time", label: "Birth time", type: "time" },
            { key: "city", label: "Birth city", type: "text" },
            { key: "country", label: "Birth country", type: "text" },
          ].map((f) => (
            <div key={f.key} className="flex flex-col">
              <label className="text-sm text-slate-300 mb-1">{f.label}</label>
              <input
                type={f.type}
                required
                value={form[f.key]}
                onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                className="px-3 py-2 rounded-lg bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
          ))}
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium shadow hover:shadow-lg transition disabled:opacity-60"
            >
              {status === "loading" ? "Submitting..." : status === "success" ? "Submitted!" : "Email me my chart overview"}
            </button>
            {status === "success" && (
              <p className="mt-2 text-sm text-blue-200">Thanks! You’ll receive an email shortly.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
