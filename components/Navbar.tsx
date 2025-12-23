export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
      <div className="relative mx-auto max-w-6xl px-4 py-4">
        
        {/* Left: Name */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-medium">
          Leo Issa Ghoulian
        </div>

        {/* Center: Projects */}
        <nav className="flex justify-center">
          <a
            href="#projects"
            className="text-sm font-medium text-zinc-400 hover:text-white transition"
          >
            Projects
          </a>
        </nav>

      </div>
    </header>
  );
}
