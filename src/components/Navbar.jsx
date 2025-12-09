import React, { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 backdrop-blur-xl border-b border-white/10 bg-slate-950/80">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <a href="#home" className="text-xl font-semibold tracking-[0.3em]">
          AARJAV
        </a>
        <nav className="hidden lg:flex items-center space-x-8 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="tracking-wide text-slate-200 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <a
            href="/Aarjav_Mitkari_Resume_5.pdf"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-sm font-semibold shadow-lg shadow-blue-500/30"
            download
          >
            Download Resume
          </a>
        </div>
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </div>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-slate-900 px-4 pb-6">
          <nav className="flex flex-col space-y-4 pt-4 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="tracking-wide text-slate-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Aarjav_Mitkari_Resume_5.pdf"
              download
              className="mt-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-center font-semibold"
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
