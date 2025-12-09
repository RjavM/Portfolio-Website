import React from "react";

const stats = [
  { label: "Latency-free playlists", value: "124 hrs of lofi beats fueling late-night deploys"},
  { label: "Slack emojis sent", value: "20 celebratory reactions per shipped feature" },
  { label: "Laptop lid cycles", value: "1832 open/close reps chasing the next idea" },
  { label: "Coffee cups", value: "∞" },
];

export const Home = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.20),_transparent_55%)]"
    >
      <div className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -right-10 top-1/3 h-40 w-40 rounded-full bg-blue-600/30 blur-3xl"></div>
      <div className="max-w-6xl mx-auto px-4 py-20 lg:py-28 grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-8">
          <p className="text-sm uppercase tracking-[0.4em] text-cyan-300">
            Software Engineering Student
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
            Crafting immersive digital experiences that blend{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              creativity
            </span>{" "}
            with precision engineering.
          </h1>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 font-semibold shadow-lg shadow-indigo-500/30"
            >
              View featured projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/20 text-slate-200 hover:border-white/60 transition"
            >
              Let's build together
            </a>
          </div>
          <dl className="grid gap-6 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-white/30 pl-5">
                <dt className="text-xs uppercase tracking-[0.35em] text-slate-400">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-semibold mt-1 text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-blue-500/30 to-transparent blur-3xl"></div>
          <div className="relative rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-b from-slate-900 to-slate-800">
              <img
                src="/Student.jpg"
                alt="Aarjav Mitkari"
                className="h-full w-full object-cover mix-blend-luminosity"
              />
            </div>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Current Focus</span>
                <span className="text-white font-semibold">nfrastructure & AI/ML</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Location</span>
                <span className="text-white font-semibold">Ottawa, Canada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
