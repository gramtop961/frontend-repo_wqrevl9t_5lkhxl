import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-slate-900/60 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-white">Human Design</span>
          <span className="px-2 py-0.5 text-xs rounded-full bg-blue-500/10 text-blue-300 border border-blue-400/20">Guide</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-200/80">
          <a href="#types" className="hover:text-white transition">Types</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#testimonials" className="hover:text-white transition">Praise</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
          <a href="#cta" className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium shadow hover:shadow-lg transition">Get Your Chart</a>
        </div>
        <button className="md:hidden text-slate-200" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </nav>
    </header>
  );
}
