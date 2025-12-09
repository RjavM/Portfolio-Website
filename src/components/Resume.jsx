import React from "react";

const highlights = [
  { label: "Major", value: "Software Engineering" },
  { label: "University", value: "Carleton University" },
  { label: "Focus", value: "Infrastructure & AI/ML" },
  { label: "GPA", value: "3.9/4.0" },
];

export const Resume = () => {
  return (
    <section id="resume" className="px-4">
      <div className="max-w-6xl mx-auto py-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Resume</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            A snapshot of the skills and outcomes that I bring to every engagement.
          </h2>
          <p className="mt-4 text-slate-300">
            Here's a quick preview.
          </p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item.label} className="border-l border-white/20 pl-4">
                <dt className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.label}</dt>
                <dd className="text-xl font-semibold text-white">{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-4 text-sm font-semibold">
            <a
              href="/Aarjav_Mitkari_Resume_5.pdf"
              download
              className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-100"
            >
              Download PDF ↗
            </a>
            <a
              href="/Aarjav_Mitkari_Resume_8.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white"
            >
              Open in new tab ↗
            </a>
          </div>
        </div>

        <div className="border border-white/15 rounded-2xl overflow-hidden">
          <iframe
            src="/Aarjav_Mitkari_Resume_8.pdf"
            title="Aarjav Mitkari Resume"
            className="h-[500px] w-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
