import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import bookCover from "@/assets/book-cover.asset.json";

export const Route = createFileRoute("/about-book")({
  head: () => ({
    meta: [
      { title: "About the Book — The Battle of Do Ab" },
      { name: "description", content: "The story behind Miraculous Turn of Events: the Afghanistan deployment, the Battle of Do Ab, and the men who fought it." },
      { property: "og:title", content: "About the Book — The Battle of Do Ab" },
      { property: "og:description", content: "A memoir of leadership under fire, brotherhood, and faith." },
      { property: "og:url", content: "/about-book" },
    ],
    links: [{ rel: "canonical", href: "/about-book" }],
  }),
  component: AboutBook,
});

const themes = [
  "Afghanistan deployment",
  "Battle of Do Ab",
  "Military memoir",
  "Brotherhood",
  "Leadership",
  "Sacrifice",
  "Family relationships",
  "Faith",
  "Service under pressure",
];

function AboutBook() {
  return (
    <>
      <section className="border-b border-border bg-secondary py-14">
        <div className="container-page">
          <SectionHeading
            eyebrow="About the Book"
            title="The Battle of Do Ab"
            subtitle="What happens when a routine mission becomes a fight for survival?"
          />
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          <img
            src={bookCover.url}
            alt="Miraculous Turn of Events book cover"
            className="w-full rounded-sm shadow-lg ring-1 ring-border"
            width={800}
            height={520}
          />
          <div className="space-y-5 text-base leading-relaxed text-charcoal/85">
            <p>
              On May 25, 2011, sixty U.S. and Afghan Soldiers were dropped by
              helicopter into the remote, enemy-held Do Ab District Center of
              Nuristan, Afghanistan. Their mission: a simple reconnaissance.
              But within minutes of landing, they were ambushed.
            </p>
            <p>
              Pinned down, outnumbered more than five to one, and taking fire from
              all directions, the platoon was trapped in a kill zone with nowhere
              to run. For the next seven hours, they would have to rely on their
              training, courage, and each other to withstand an overwhelming
              onslaught from over 300 Taliban fighters.
            </p>
            <p>
              In <em>Miraculous Turn of Events</em>, First Lieutenant (1LT) Justin Foote,
              the platoon leader who led his men through the firefight, gives a
              gripping, minute-by-minute account of the battle. This is a story of
              incredible bravery, impossible odds, and the unwavering bond between
              Soldiers who faced death and refused to break.
            </p>

            <div className="mt-8">
              <p className="eyebrow">Themes</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {themes.map((t) => (
                  <li
                    key={t}
                    className="font-display border border-olive/40 bg-background px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-olive-deep"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
