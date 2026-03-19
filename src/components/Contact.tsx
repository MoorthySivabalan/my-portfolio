// src/components/Contact.tsx
"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { Send, Github, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";

type FormData = {
  name:    string;
  email:   string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      // Phase 1: placeholder — will call FastAPI in Phase 3
      // const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, data);
      await new Promise((r) => setTimeout(r, 1200)); // simulate request
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-12 px-3 md:px-10 lg:px-20 max-w-screen-xl mx-auto w-full">
      <p className="section-subtitle">get in touch</p>
      <h2 className="section-title">Contact Me</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
        {/* Left — info */}
        <div className="space-y-6">
          <p className="text-text-secondary leading-relaxed">
            I'm currently open to full-time roles and freelance projects. Whether you
            have a question, a role to discuss, or just want to connect — drop a message
            and I'll get back to you within 24 hours.
          </p>
          <div className="space-y-3">
            <a href={`mailto:${personalInfo.email}`}
               className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors text-sm">
              <span className="text-accent">→</span> {personalInfo.email}
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors text-sm">
              <Github size={14} className="text-accent" /> github.com/MoorthySivabalan
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors text-sm">
              <Linkedin size={14} className="text-accent" /> linkedin.com/in/moorthysivabalan
            </a>
          </div>
        </div>

        {/* Right — form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {[
            { id: "name",    label: "Your Name",    type: "text",  placeholder: "John Doe" },
            { id: "email",   label: "Email Address",type: "email", placeholder: "john@example.com" },
            { id: "subject", label: "Subject",      type: "text",  placeholder: "Job opportunity / Collaboration" },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label className="block text-text-secondary text-sm font-medium mb-1.5">{label}</label>
              <input
                type={type}
                placeholder={placeholder}
                {...register(id as keyof FormData, { required: `${label} is required` })}
                className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3
                           text-sm text-text-primary placeholder:text-text-muted
                           focus:outline-none focus:border-accent/60 transition-colors"
              />
              {errors[id as keyof FormData] && (
                <p className="text-red-400 text-xs mt-1">
                  {errors[id as keyof FormData]?.message}
                </p>
              )}
            </div>
          ))}

          <div>
            <label className="block text-text-secondary text-sm font-medium mb-1.5">Message</label>
            <textarea
              rows={4}
              placeholder="Tell me about your project or opportunity..."
              {...register("message", { required: "Message is required" })}
              className="w-full bg-bg-secondary border border-border rounded-lg px-4 py-3
                         text-sm text-text-primary placeholder:text-text-muted resize-none
                         focus:outline-none focus:border-accent/60 transition-colors"
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {status === "loading" ? (
              <span className="animate-spin w-4 h-4 border-2 border-bg-primary border-t-transparent rounded-full" />
            ) : (
              <Send size={14} />
            )}
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm text-center">
              ✓ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Something went wrong. Try emailing directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}