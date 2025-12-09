import React, { useState } from "react";
import emailjs from "emailjs-com";

const contactDetails = [
  { label: "Email", value: "aarjavmitkari@cmail.carleton.ca" },
  { label: "Personal", value: "ahmit0419@gmail.com" },
  { label: "Location", value: "Ottawa, Canada" },
  { label: "Phone", value: "+1 (343) 542-0904" },
];

export const Contact = () => {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_xthwpuj", "template_ftb2wkh", e.target, "Oaz0moQj7_K31Dl28")
      .then(
        () => setStatus("Message sent successfully — I'll get back to you soon!"),
        () => setStatus("Something went wrong. Please email me directly.")
      );
  };

  return (
    <section id="contact" className="px-4">
      <div className="max-w-6xl mx-auto py-16 grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Ready to collaborate on your next web or AI initiative?
          </h2>
          <p className="mt-4 text-slate-300">
            Whether you have a problem to solve, an idea to explore, or a team that needs an extra
            builder, I'd love to talk. Share a bit about your project and I'll respond with ideas and
            next steps.
          </p>
          <div className="mt-8 space-y-4 text-sm text-slate-300">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="border-b border-white/10 pb-4 last:border-b-0">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{detail.label}</p>
                <p className="text-lg text-white">{detail.value}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Name</label>
            <input
              type="text"
              name="from_name"
              required
              className="mt-2 w-full border-b border-white/20 bg-transparent px-1 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="mt-2 w-full border-b border-white/20 bg-transparent px-1 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="mt-2 w-full border border-white/20 bg-transparent px-4 py-3 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              placeholder="Tell me about your idea or challenge..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full border border-white/20 px-6 py-3 font-semibold hover:border-white/60"
          >
            Send message
          </button>
          {status && (
            <p className="text-center text-sm text-cyan-300" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
