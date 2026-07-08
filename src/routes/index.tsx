import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Heart, Shield, Users, Star, Quote } from "lucide-react";
import bookCover from "@/assets/book-cover.asset.json";
import heroBg from "@/assets/hero-landscape.jpg";
import platoon from "@/assets/gallery-platoon.jpg";
import justin from "@/assets/justin-foote.asset.json";
import john from "@/assets/john-kelling.asset.json";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Miraculous Turn of Events — The Battle of Do Ab" },
      { name: "description", content: "A military memoir of service, sacrifice, brotherhood, family, and faith by John Kelling and LTC Justin Foote." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const themes = [
  { icon: Shield, title: "Service", copy: "Nearly three decades in uniform, told from the ground truth of leadership under fire." },
  { icon: Users, title: "Brotherhood", copy: "The bonds forged among sixty soldiers in the mountains of Nuristan." },
  { icon: Heart, title: "Family", copy: "The wives, sons, and daughters whose sacrifice runs through every page." },
  { icon: BookOpen, title: "Faith", copy: "A story of the men who fought — and the God who reigned over the battle." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-charcoal text-sand">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
        <div className="container-page relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <div className="eyebrow flex items-center gap-3 !text-olive">
              <span className="h-px w-10 bg-olive" />
              <span>A military memoir · 2026</span>
            </div>
            <h1 className="font-display mt-5 text-4xl font-bold uppercase leading-[1.05] sm:text-6xl lg:text-7xl">
              Miraculous
              <span className="block text-olive">Turn of Events</span>
              <span className="mt-3 block text-2xl font-medium tracking-wider text-sand/80 sm:text-3xl">
                The Battle of Do Ab
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-sand/80 sm:text-lg">
              A military memoir of service, sacrifice, brotherhood, family, and faith.
              Sixty U.S. and Afghan soldiers. Seven hours. Over three hundred enemy fighters.
              One story that refused to end.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/buy"
                className="font-display inline-flex items-center gap-2 rounded-sm bg-olive px-6 py-3 text-sm uppercase tracking-[0.16em] text-charcoal transition-colors hover:bg-sand"
              >
                Buy Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about-book"
                className="font-display inline-flex items-center gap-2 rounded-sm border border-sand/30 px-6 py-3 text-sm uppercase tracking-[0.16em] text-sand transition-colors hover:border-olive hover:text-olive"
              >
                Learn More
              </Link>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6 text-sand/70">
              <div>
                <div className="font-display text-2xl text-olive">60</div>
                <div className="text-[11px] uppercase tracking-[0.18em]">Soldiers</div>
              </div>
              <div>
                <div className="font-display text-2xl text-olive">7 hrs</div>
                <div className="text-[11px] uppercase tracking-[0.18em]">Under fire</div>
              </div>
              <div>
                <div className="font-display text-2xl text-olive">300+</div>
                <div className="text-[11px] uppercase tracking-[0.18em]">Adversaries</div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 rounded-sm border border-olive/40" />
            <div className="absolute -inset-8 rounded-sm border border-olive/20" />
            <img
              src={bookCover.url}
              alt="Miraculous Turn of Events — The Battle of Do Ab, book cover"
              className="relative w-full rounded-sm shadow-2xl ring-1 ring-white/10"
              width={800}
              height={520}
            />
          </div>
        </div>
      </section>

      {/* ABOUT BOOK */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <SectionHeading
            eyebrow="About the Book"
            title="A Story Rooted in Real Ground"
          />
          <div className="space-y-5 text-base leading-relaxed text-charcoal/80">
            <p>
              This memoir honors the soldiers who served through the realities of war,
              leadership, sacrifice, and brotherhood. Rooted in the Afghanistan deployment
              and the Battle of Do Ab, the book reflects on the courage of the men who
              fought, the families who endured, and the deeper meaning carried through
              service, faith, and remembrance.
            </p>
            <p>
              On May 25, 2011, sixty U.S. and Afghan soldiers were dropped into the
              remote, enemy-held Do Ab District Center of Nuristan for what was intended
              as a simple reconnaissance. Within minutes of landing, they were ambushed —
              pinned down and outnumbered five to one — and would fight for the next seven
              hours to survive.
            </p>
            <Link
              to="/about-book"
              className="font-display inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-olive-deep hover:text-army"
            >
              Read the full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {themes.map((t) => (
            <div key={t.title} className="group border-l-2 border-olive bg-card p-6 shadow-sm transition-colors hover:border-army">
              <t.icon className="h-6 w-6 text-olive-deep" strokeWidth={1.75} />
              <h3 className="font-display mt-4 text-lg font-semibold uppercase tracking-wide text-charcoal">
                {t.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AUTHORS PREVIEW */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="About the Authors"
            title="Two Voices, One Story"
            subtitle="A father who wrote to understand the war his son fought. A commander who lived the ground truth of it."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {[
              {
                name: "John Kelling",
                role: "Author · Journalist",
                img: john.url,
                bio: "Graduate of Minnesota State University, Mankato, with a background in broadcasting and journalism. He worked with WHO Radio, ESPN, Fox Sports, and the Big Ten Network. His writing about his son's Afghanistan deployment led to his first book, Hope is a Weapon.",
              },
              {
                name: "LTC Justin Foote",
                role: "U.S. Army · Combat Veteran",
                img: justin.url,
                bio: "Justin Foote has served more than 28 years in the United States Army, rising from enlisted ranks to earn his commission. A combat veteran of Afghanistan, he writes from firsthand experience about leadership, service, family, sacrifice, and brotherhood.",
              },
            ].map((a) => (
              <article key={a.name} className="group grid gap-6 bg-card p-6 shadow-sm sm:grid-cols-[auto_1fr] sm:items-start">
                <img
                  src={a.img}
                  alt={a.name}
                  loading="lazy"
                  className="h-32 w-32 shrink-0 rounded-sm object-cover ring-1 ring-border sm:h-40 sm:w-40"
                />
                <div className="min-w-0">
                  <p className="eyebrow">{a.role}</p>
                  <h3 className="font-display mt-2 text-2xl font-bold uppercase text-charcoal">
                    {a.name}
                  </h3>
                  <div className="mt-3 h-px w-12 bg-olive" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.bio}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/authors"
              className="font-display inline-flex items-center gap-2 rounded-sm border border-olive-deep px-6 py-3 text-sm uppercase tracking-[0.16em] text-olive-deep transition-colors hover:bg-olive-deep hover:text-primary-foreground"
            >
              Read Full Biographies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PLATOON FEATURE */}
      <section className="relative overflow-hidden bg-charcoal text-sand">
        <div className="container-page grid gap-10 py-20 md:py-24 lg:grid-cols-2 lg:items-center">
          <img
            src={platoon}
            alt="The platoon featured on the cover of Miraculous Turn of Events"
            loading="lazy"
            width={1600}
            height={1000}
            className="w-full rounded-sm ring-1 ring-white/10"
          />
          <div>
            <p className="eyebrow !text-olive">
              <span className="mr-3 inline-block h-px w-8 align-middle bg-olive" />
              The Platoon
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold uppercase sm:text-4xl">
              The Men Behind the Cover
            </h2>
            <p className="mt-5 max-w-lg text-sand/80">
              The platoon image featured on the cover represents the real soldiers
              connected to this story. It is displayed here — and throughout this
              book — with honor and respect for every man who stood on that ground.
            </p>
            <Link
              to="/gallery"
              className="font-display mt-6 inline-flex items-center gap-2 rounded-sm border border-olive px-5 py-2.5 text-sm uppercase tracking-[0.14em] text-olive hover:bg-olive hover:text-charcoal"
            >
              View the Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="container-page py-20 md:py-28">
        <SectionHeading eyebrow="Reader Reviews" title="What Readers Are Saying" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <blockquote key={i} className="relative border border-border bg-card p-6 shadow-sm">
              <Quote className="absolute -top-3 left-6 h-6 w-6 bg-card px-1 text-olive" />
              <div className="flex gap-0.5 text-olive">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-olive" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
                A powerful reflection on service, sacrifice, and the bonds formed
                through military life. Placeholder review that will be replaced with
                real reader testimony.
              </p>
              <footer className="mt-5 border-t border-border pt-4">
                <p className="font-display text-sm uppercase tracking-wide text-charcoal">Reader Name</p>
                <p className="text-xs text-muted-foreground">Verified reader</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-sm bg-olive-deep px-6 py-14 text-center text-primary-foreground sm:px-12 sm:py-20">
          <div className="mx-auto max-w-2xl">
            <p className="eyebrow !text-sand/70">Now Available</p>
            <h2 className="font-display mt-4 text-3xl font-bold uppercase sm:text-4xl">
              Carry Their Story Forward
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Available in paperback, hardcover, and eBook. Every copy honors the
              soldiers who served — and the families who waited.
            </p>
            <Link
              to="/buy"
              className="font-display mt-8 inline-flex items-center gap-2 rounded-sm bg-sand px-6 py-3 text-sm uppercase tracking-[0.16em] text-charcoal hover:bg-white"
            >
              Buy the Book <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
