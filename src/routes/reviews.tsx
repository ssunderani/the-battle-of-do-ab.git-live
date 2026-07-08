import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Miraculous Turn of Events" },
      { name: "description", content: "Reader reviews, testimonials, and endorsements for Miraculous Turn of Events." },
      { property: "og:title", content: "Reviews" },
      { property: "og:description", content: "What readers are saying about the memoir." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: Reviews,
});

const reviews = [
  {
    body: "A powerful reflection on service, sacrifice, and the bonds formed through military life. This is not a war story — it is a story about the men who served in one.",
    name: "Reader Placeholder",
    meta: "Verified reader",
  },
  {
    body: "Written with the honesty of a soldier and the care of a father. The minute-by-minute account of Do Ab is unforgettable.",
    name: "Reader Placeholder",
    meta: "Military family",
  },
  {
    body: "Faith, brotherhood, and the weight of leadership under fire. A memoir that belongs on every veteran's shelf.",
    name: "Reader Placeholder",
    meta: "Combat veteran",
  },
  {
    body: "Endorsement placeholder — a future foreword or press quote from a general officer, historian, or notable veteran voice.",
    name: "Endorsement Placeholder",
    meta: "Forthcoming",
  },
  {
    body: "Endorsement placeholder — a future feature from a national outlet covering the memoir's release and reception.",
    name: "Press Placeholder",
    meta: "Forthcoming",
  },
  {
    body: "Endorsement placeholder — a future review from a military historian or memoir critic.",
    name: "Review Placeholder",
    meta: "Forthcoming",
  },
];

function Reviews() {
  return (
    <>
      <section className="border-b border-border bg-secondary py-14">
        <div className="container-page">
          <SectionHeading
            eyebrow="Reviews & Testimonials"
            title="What Readers Are Saying"
            subtitle="Reader reviews and forthcoming endorsements for Miraculous Turn of Events."
          />
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <blockquote key={i} className="relative border border-border bg-card p-6 shadow-sm">
              <Quote className="absolute -top-3 left-6 h-6 w-6 bg-card px-1 text-olive" />
              <div className="flex gap-0.5 text-olive">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-olive" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/85">{r.body}</p>
              <footer className="mt-5 border-t border-border pt-4">
                <p className="font-display text-sm uppercase tracking-wide text-charcoal">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.meta}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
