import React from "react";

const experiences = [
  {
    title: "Software Developer Intern",
    org: "Ribbon Communications",
    period: "Jan 2025 - Dec 2025",
    summary: 
      "Backend engineer on a cloud platform team for Ribbon’s RAMP microservices platform.",
    bullets: [
      "🧩 Worked across multiple microservices, developing features that improved reliability and clarity in the platform.",
      "⚙️ Provisioned using Ansible and automated OpenShift deployments, reducing setup effort across teams.",
      "🔒 Supported security improvements by identifying vulnerabilities and contributing fixes to strengthen the platform.",
    ],
    tags: ["Java", "Ansible", "OpenShift", "Microservices"],
  },
  {
    title: "AI/ML Research Assistant",
    org: "Carleton University",
    period: "May 2024 — Dec 2024",
    summary:
      "Undergraduate research assistant focused on improving GAN/CNN experiments to support academic model benchmarking and analysis.",
    bullets: [
      "🔬 Replicated GAN-based experiments to understand model behaviour and validate prior results.",
      "🧪 Tweaked GAN and CNN configurations to explore improvements in accuracy and performance on research datasets.",
      "📝 Worked with professors to benchmark CNN models and summarize findings for internal research discussions and paper drafts.",
    ],
    tags: ["Python", "TensorFlow", "OpenCV", "PyTorch"],
  }
];

export const Work = () => {
  return (
    <section id="experience" className="px-4">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Impactful collaborations & research backed by real-world shipping velocity.
          </h2>
          <p className="mt-4 text-slate-300">
            I gravitate towards roles where I can blend technical leadership with storytelling. These
            are a few highlights from the past couple of years.
          </p>
        </div>

        <div className="mt-12 relative">
          <div className="hidden md:block absolute left-3 top-0 bottom-0 w-px bg-white/15"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <article key={exp.title} className="md:pl-12">
                <div className="flex items-center gap-4">
                  <span className="relative flex h-4 w-4 items-center justify-center">
                    <span className="absolute inset-0 rounded-full bg-cyan-400/40 blur-sm"></span>
                    <span className="relative h-2 w-2 rounded-full bg-cyan-300"></span>
                  </span>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{exp.period}</p>
                </div>
                <div className="mt-4 flex flex-wrap items-baseline gap-4">
                  <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                  <span className="text-sm text-slate-400">{exp.org}</span>
                </div>
                <p className="mt-3 text-lg text-slate-200">{exp.summary}</p>
                <ul className="mt-4 space-y-2 text-slate-300">
                  {exp.bullets.map((item) => (
                    <li key={item} className="flex gap-3 text-sm sm:text-base">
                      <span className="mt-2 h-0.5 w-8 bg-white/30"></span>
                      <p className="flex-1">{item}</p>
                    </li>
                  ))}
                </ul>
                {exp.tags && exp.tags.length > 0 && (
                  <>
                    <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500">Tools</p>
                    <p className="mt-2 text-sm text-slate-200">{exp.tags.join(" · ")}</p>
                  </>
                )}
                {index !== experiences.length - 1 && (
                  <div className="mt-8 h-px w-full bg-white/10"></div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
