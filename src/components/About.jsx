import React from "react";

const highlights = [
  {
    title: "Product-thinking developer",
    detail:
      "I move from whiteboard sketches to polished shipments by obsessing over usability, clarity, and micro-interactions.",
  },
  {
    title: "Full-stack generalist",
    detail:
      "Translating APIs into smooth front-end journeys with React, Tailwind, Django and Node ecosystems.",
  },
  {
    title: "Infrastructure/System Arch freak",
    detail:
      "Curious about how all the pipes—models, services, and infrastructure work together behind the scenes to make tech actually run.",
  },
];

export const About = () => {
  return (
    <section id="about" className="px-4">
      <div className="max-w-6xl mx-auto py-16 border-y border-white/10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">About</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Building thoughtful digital products with equal parts curiosity and rigor.
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            Hi, I'm Aarjav Mitkari, a Software Engineering student @ Carleton University. I love
            architecting web applications that combine delightful UI with dependable infrastructure.
            Whether it's designing an intuitive dashboard or training ML models, I enjoy exploring the
            intersection of design systems and intelligent software.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="space-y-3 text-slate-300">
              <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent"></div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
