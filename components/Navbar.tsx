export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <span className="text-sm font-medium text-zinc-200">
          Leo Issa Ghoulian
        </span>

        <a
          href="#projects"
          className="text-sm text-zinc-400 hover:text-zinc-100 transition"
        >
          Projects
        </a>
      </div>
    </nav>
  );
}
