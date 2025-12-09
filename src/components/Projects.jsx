import React, { useState } from "react";

const projects = [
  {
    title: "Digital Wallet",
    description:
      "A secure web wallet with instant transfers, live balances, and JWT-authenticated sessions.",
    bullets: [
      "Crafted a minimalist dashboard with search, transfer modals, and activity feed.",
      "Built a Node/Express backend that validates transactions and emits live updates.",
      "Hardened auth flows with Zod validation and refresh token rotation.",
    ],
    stack: ["React", "Node.js", "Tailwind", "MongoDB"],
    link: "https://github.com/RjavM/Payment-App",
    live: "https://payment-app-psi.vercel.app",
  },
  {
    title: "Market Pulse",
    description:
      "ML-powered stock prediction on S&P 500 data leveraging Random Forest and XGBoost ensembles.",
    bullets: [
      "Engineered 15+ custom features including rolling indicators and macro trends.",
      "Built a backtesting harness that surfaces precision and recall over time horizons.",
      "Packaged training notebooks so analysts can tweak parameters with ease.",
    ],
    stack: ["Python", "Pandas", "XGBoost", "Scikit-learn"],
    link: "https://github.com/RjavM/Stock-Prediction",
  },
  {
    title: "Menu Studio",
    description:
      "A restaurant CMS built with Django that lets owners launch dynamic menus and manage orders.",
    bullets: [
      "Implemented class-based views and signals for seamless CRUD + profile management.",
      "Designed a responsive design system with reusable components and theming.",
      "Optimized database models and migrations for reliable data relationships.",
    ],
    stack: ["Django", "PostgreSQL", "Bootstrap", "Docker"],
    link: "https://github.com/RjavM/Food-Menu-Web-App",
  },
  {
    title: "Text Social",
    description:
      "A C-based social platform for the terminal, featuring friend graphs and secure posts.",
    bullets: [
      "Used ordered linked lists and custom parsers for deterministic performance.",
      "Shipped friend search + feed linking to encourage meaningful connections.",
      "Implemented username normalization and validation to prevent duplicates.",
    ],
    stack: ["C", "Data Structures"],
    link: "",
  },
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (title) => {
    setActiveProject((prev) => (prev === title ? null : title));
  };

  return (
    <section id="projects" className="px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Projects</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Spotlighted builds that blend thoughtful UX, resilient systems, and measurable impact.
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {projects.map((project) => {
            const isActive = activeProject === project.title;
            return (
              <article
                key={project.title}
                className={`border border-white/15 px-5 transition-all duration-300 origin-left ${
                  isActive ? "py-8 scale-[1.01] bg-white/5" : "py-4 hover:scale-[1.005]"
                }`}
                onMouseEnter={() => setActiveProject(project.title)}
                onFocus={() => setActiveProject(project.title)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <button
                    type="button"
                    className="text-left"
                    onClick={() => toggleProject(project.title)}
                    aria-expanded={isActive}
                  >
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Project</p>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="text-sm text-slate-400">{project.stack.join(" · ")}</p>
                  </button>
                  <div className="flex flex-wrap gap-3 text-xs font-semibold tracking-[0.2em] text-slate-400">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-300 hover:text-blue-100"
                      >
                        Visit App ↗
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-300 hover:text-cyan-100"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
                <div
                  className={`grid transition-all duration-300 ${
                    isActive ? "grid-rows-[1fr] opacity-100 pt-6" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-slate-200">{project.description}</p>
                    <ul className="mt-4 space-y-2 text-sm text-slate-300">
                      {project.bullets.map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="text-cyan-300">—</span>
                          <p>{line}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
