import React from "react";

const links = [
  { label: "GitHub", href: "https://github.com/RjavM" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aarjav-mitkari/" },
  { label: "Email", href: "mailto:aarjavmitkari@cmail.carleton.ca" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Aarjav Mitkari</p>
          <p className="mt-3 text-slate-300">
            Designing and engineering digital experiences from Ottawa, Canada.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 hover:border-white/40 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className="mt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Aarjav Mitkari. Built with React & Tailwind CSS.
      </p>
    </footer>
  );
};
