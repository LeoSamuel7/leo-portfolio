const nav = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Reports", href: "#reports" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];
  
  export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="font-semibold tracking-tight hover:text-white">
            Leo Issa Ghoulian
          </a>
  
          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
  
          <a
            href="/docs/Leo_Issa_Ghoulian_Resume.pdf"
            className="rounded-lg border border-zinc-700 px-3 py-1.5 text-sm hover:border-zinc-500"
          >
            Resume
          </a>
        </div>
      </header>
    );
  }
  