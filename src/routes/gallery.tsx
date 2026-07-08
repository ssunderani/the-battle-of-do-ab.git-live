import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import platoon from "@/assets/gallery-platoon.jpg";
import chinook from "@/assets/gallery-chinook.jpg";
import flag from "@/assets/gallery-flag.jpg";
import boots from "@/assets/gallery-boots.jpg";
import faith from "@/assets/gallery-faith.jpg";
import landscape from "@/assets/hero-landscape.jpg";
import justin from "@/assets/justin-foote.asset.json";
import john from "@/assets/john-kelling.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Battle of Do Ab" },
      { name: "description", content: "Photos of the platoon, the terrain, and the authors behind Miraculous Turn of Events." },
      { property: "og:title", content: "Gallery" },
      { property: "og:description", content: "Photos honoring the soldiers of the Battle of Do Ab." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const items: { src: string; caption: string; category: string }[] = [
  { src: chinook, caption: "Insertion by helicopter — the mission begins", category: "Military" },
  { src: landscape, caption: "The remote terrain of Nuristan Province", category: "Terrain" },
  { src: flag, caption: "For the families who waited", category: "Remembrance" },
  { src: boots, caption: "Boots and dog tags — the weight carried home", category: "Service" },
  { src: faith, caption: "Faith carried into the fight", category: "Faith" },
  { src: john.url, caption: "John Kelling — author", category: "Authors" },
  { src: justin.url, caption: "LTC Justin Foote — author", category: "Authors" },
];

function Gallery() {
  return (
    <>
      <section className="border-b border-border bg-secondary py-14">
        <div className="container-page">
          <SectionHeading
            eyebrow="Gallery"
            title="Images From the Story"
            subtitle="Photographs of the platoon, the terrain, the authors, and the objects that carry meaning throughout the memoir."
          />
        </div>
      </section>

      {/* PLATOON FEATURE */}
      <section className="container-page py-16">
        <figure className="relative overflow-hidden rounded-sm border border-border bg-card shadow-md">
          <img
            src={platoon}
            alt="The platoon featured on the book cover — the real soldiers of the Battle of Do Ab"
            className="w-full"
            width={1600}
            height={1000}
          />
          <figcaption className="border-t-2 border-olive bg-charcoal p-6 text-sand sm:p-8">
            <p className="eyebrow !text-olive">The Cover Platoon</p>
            <p className="font-display mt-3 text-xl uppercase tracking-wide sm:text-2xl">
              The Real Soldiers of the Battle of Do Ab
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-sand/80">
              The platoon image featured on the cover represents the real soldiers
              connected to this story and should be displayed with honor and
              respect. Each face on that cover carried the weight of the mission,
              the memory of the fallen, and the promise made to those waiting
              at home.
            </p>
          </figcaption>
        </figure>
      </section>

      {/* GRID */}
      <section className="container-page pb-24">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <figure key={i} className="group overflow-hidden border border-border bg-card">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={it.src}
                  alt={it.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="border-t border-border p-4">
                <p className="font-display text-[10px] uppercase tracking-[0.22em] text-olive-deep">
                  {it.category}
                </p>
                <p className="mt-1 text-sm text-charcoal/85">{it.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
