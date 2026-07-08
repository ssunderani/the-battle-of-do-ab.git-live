import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import { BookOpen, BookMarked, Tablet, Check } from "lucide-react";
import bookCover from "@/assets/book-cover.asset.json";

export const Route = createFileRoute("/buy")({
  head: () => ({
    meta: [
      { title: "Buy the Book — Miraculous Turn of Events" },
      { name: "description", content: "Purchase Miraculous Turn of Events in paperback, hardcover, or eBook." },
      { property: "og:title", content: "Buy the Book" },
      { property: "og:description", content: "Available in paperback, hardcover, and eBook." },
      { property: "og:url", content: "/buy" },
    ],
    links: [{ rel: "canonical", href: "/buy" }],
  }),
  component: Buy,
});

const editions = [
  {
    icon: BookOpen,
    name: "Paperback",
    price: "$18.99",
    desc: "The standard edition. Rugged, portable, and ready to be passed along.",
    cta: "Buy Paperback",
    features: ["Softcover binding", "Full color interior", "Ships worldwide"],
  },
  {
    icon: BookMarked,
    name: "Hardcover",
    price: "$28.99",
    desc: "A collector's edition built to hold up to years on the shelf.",
    cta: "Buy Hardcover",
    features: ["Cloth-bound cover", "Dust jacket included", "Archival paper"],
    featured: true,
  },
  {
    icon: Tablet,
    name: "eBook",
    price: "$9.99",
    desc: "Read anywhere, immediately. Delivered to Kindle, Apple Books, and more.",
    cta: "Buy eBook",
    features: ["Kindle · EPUB · PDF", "Instant delivery", "DRM-free options"],
  },
];

function Buy() {
  return (
    <>
      <section className="border-b border-border bg-secondary py-14">
        <div className="container-page">
          <SectionHeading
            eyebrow="Available Now"
            title="Choose Your Edition"
            subtitle="Every copy honors the soldiers who served and the families who waited."
          />
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {editions.map((e) => (
            <div
              key={e.name}
              className={`relative flex flex-col border p-8 shadow-sm transition-transform hover:-translate-y-1 ${
                e.featured
                  ? "border-olive-deep bg-charcoal text-sand"
                  : "border-border bg-card"
              }`}
            >
              {e.featured && (
                <span className="font-display absolute -top-3 left-6 bg-olive px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-charcoal">
                  Most Popular
                </span>
              )}
              <e.icon className={`h-8 w-8 ${e.featured ? "text-olive" : "text-olive-deep"}`} strokeWidth={1.75} />
              <h3 className={`font-display mt-5 text-2xl font-bold uppercase ${e.featured ? "text-sand" : "text-charcoal"}`}>
                {e.name}
              </h3>
              <p className={`font-display mt-1 text-3xl ${e.featured ? "text-olive" : "text-olive-deep"}`}>
                {e.price}
              </p>
              <p className={`mt-4 text-sm leading-relaxed ${e.featured ? "text-sand/80" : "text-muted-foreground"}`}>
                {e.desc}
              </p>
              <ul className={`mt-6 space-y-2 text-sm ${e.featured ? "text-sand/85" : "text-charcoal/80"}`}>
                {e.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-olive" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`font-display mt-8 inline-flex items-center justify-center rounded-sm px-5 py-3 text-sm uppercase tracking-[0.16em] transition-colors ${
                  e.featured
                    ? "bg-olive text-charcoal hover:bg-sand"
                    : "bg-olive-deep text-primary-foreground hover:bg-army"
                }`}
              >
                {e.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-12 md:grid-cols-[auto_1fr] md:items-center">
          <img src={bookCover.url} alt="Book cover" className="mx-auto w-40 rounded-sm ring-1 ring-border" />
          <div>
            <p className="eyebrow">Bulk Orders</p>
            <h3 className="font-display mt-2 text-2xl font-bold uppercase text-charcoal">
              Ordering for a unit, library, or veterans' group?
            </h3>
            <p className="mt-2 max-w-xl text-muted-foreground">
              Special pricing is available for military organizations, book clubs,
              and educational institutions. Reach out for a quote.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
