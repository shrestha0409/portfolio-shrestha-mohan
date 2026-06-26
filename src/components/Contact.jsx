import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheck } from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    const SERVICE_ID = "service_1dtrk1u";
const TEMPLATE_ID = "template_v3dfvve";
const PUBLIC_KEY = "crRLrBfMjy0TtNVgR";

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

 const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        message: form.message,
      },
      PUBLIC_KEY
    );

    setStatus("sent");

    setForm({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setStatus("idle");
    }, 3000);
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
};
  const socials = [
    { icon: <FiGithub size={20} />, label: "GitHub", href: "https://github.com/shrestha0409", sub: "github.com/shrestha0409" },
    { icon: <FiLinkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/in/shresthaMohan", sub: "linkedin.com/in/shresthaMohan" },
    { icon: <FiMail size={20} />, label: "Email", href: "mailto:shresthamohan0406@gmail.com", sub: "shresthamohan0406@gmail.com" },
  ];

  return (
    <section id="contact" className="section-padding relative bg-[#0d0d0d]">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">
            06 — Contact
          </p>
          <h2 className="font-display font-bold text-4xl lg:text-5xl">
            Let's <span className="text-gradient-cyan">connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-md">
            Open to collaborations, internships, and interesting projects. Reach out — I always reply.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {[
              { name: "name", label: "Name", type: "text", placeholder: "Your name" },
              { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-xs font-mono text-gray-500 mb-1.5 uppercase tracking-wider">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 transition-colors font-body"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs font-mono text-gray-500 mb-1.5 uppercase tracking-wider">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="What's on your mind?"
                required
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none font-body"
              />
            </div>
            <motion.button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl font-semibold text-sm text-[#0a0a0a] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              style={{ background: "linear-gradient(135deg,#22d3ee,#8b5cf6)" }}
            >
              {status === "sent" ? (
                <><FiCheck size={16} /> Message Sent!</>
              ) : status === "sending" ? (
                "Sending..."
              ) : (
                <><FiSend size={16} /> Send Message</>
              )}
            </motion.button>
            {status === "sent" && (
              <p className="text-center text-xs text-gray-500">
                Thanks! I'll get back to you soon.
              </p>
            )}
              {status === "error" && (
  <p className="text-center text-xs text-red-500">
    Failed to send message. Please try again.
  </p>
)}
          </motion.form>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="flex flex-col gap-4 justify-center"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 glass border border-white/5 hover:border-cyan-400/20 rounded-2xl p-5 transition-all duration-300 group hover:bg-white/[0.02]"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/20 transition-colors">
                  {s.icon}
                </div>
                <div>
                  <p className="font-display font-semibold text-white text-sm">{s.label}</p>
                  <p className="text-gray-500 text-xs font-mono">{s.sub}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
