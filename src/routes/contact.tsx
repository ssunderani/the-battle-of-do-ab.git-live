import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Miraculous Turn of Events" },
      { name: "description", content: "Reach the authors of Miraculous Turn of Events for press, speaking, and reader inquiries." },
      { property: "og:title", content: "Contact" },
      { property: "og:description", content: "Get in touch with John Kelling and LTC Justin Foote." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="border-b border-border bg-secondary py-14">
        <div className="container-page">
          <SectionHeading
            eyebrow="Contact"
            title="Get In Touch"
            subtitle="For press inquiries, speaking engagements, book club questions, or a note to the authors."
          />
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <aside className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "contact@battleofdoab.com" },
              { icon: MessageSquare, label: "Press & Media", value: "press@battleofdoab.com" },
              { icon: MapPin, label: "Based in", value: "Iowa, United States" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 border-l-2 border-olive bg-card p-4 shadow-sm">
                <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-olive-deep" />
                <div className="min-w-0">
                  <p className="eyebrow">{item.label}</p>
                  <p className="mt-1 text-sm text-charcoal">{item.value}</p>
                </div>
              </div>
            ))}
          </aside>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="font-display text-xs uppercase tracking-[0.18em] text-charcoal">Name</span>
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-charcoal outline-none focus:border-olive-deep focus:ring-2 focus:ring-olive/30"
                />
              </label>
              <label className="block">
                <span className="font-display text-xs uppercase tracking-[0.18em] text-charcoal">Email</span>
                <input
                  required
                  type="email"
                  className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-charcoal outline-none focus:border-olive-deep focus:ring-2 focus:ring-olive/30"
                />
              </label>
            </div>
            <label className="mt-5 block">
              <span className="font-display text-xs uppercase tracking-[0.18em] text-charcoal">Message</span>
              <textarea
                required
                rows={6}
                className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm text-charcoal outline-none focus:border-olive-deep focus:ring-2 focus:ring-olive/30"
              />
            </label>

            <button
              type="submit"
              className="font-display mt-6 inline-flex items-center gap-2 rounded-sm bg-olive-deep px-6 py-3 text-sm uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-army"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>

            {sent && (
              <p className="mt-4 border-l-2 border-olive bg-secondary p-3 text-sm text-charcoal">
                Thank you — your message has been received. The authors will reply soon.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
