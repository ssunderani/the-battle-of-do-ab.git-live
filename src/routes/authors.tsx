import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/section-heading";
import justin from "@/assets/justin-foote.asset.json";
import john from "@/assets/john-kelling.asset.json";

export const Route = createFileRoute("/authors")({
  head: () => ({
    meta: [
      { title: "About the Authors — John Kelling & LTC Justin Foote" },
      { name: "description", content: "Meet John Kelling and LTC Justin Foote — the writer and the soldier whose voices carry Miraculous Turn of Events." },
      { property: "og:title", content: "About the Authors" },
      { property: "og:description", content: "A journalist and a combat veteran, telling one story together." },
      { property: "og:url", content: "/authors" },
    ],
    links: [{ rel: "canonical", href: "/authors" }],
  }),
  component: Authors,
});

function Authors() {
  return (
    <>
      <section className="border-b border-border bg-secondary py-14">
        <div className="container-page">
          <SectionHeading
            eyebrow="The Authors"
            title="John Kelling & LTC Justin Foote"
            subtitle="One wrote from home, following his son to war on the page. One lived it, in the dust of Nuristan. Together, they tell the story."
          />
        </div>
      </section>

      <section className="container-page space-y-24 py-20">
        {/* JOHN */}
        <article className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16">
          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <div className="relative">
              <div className="absolute -inset-3 border border-olive/40" />
              <img
                src={john.url}
                alt="John Kelling"
                className="relative w-full rounded-sm ring-1 ring-border"
              />
            </div>
            <div className="mt-5 border-l-2 border-olive pl-4">
              <p className="eyebrow">Author</p>
              <h3 className="font-display mt-1 text-2xl font-bold uppercase text-charcoal">John Kelling</h3>
              <p className="text-sm text-muted-foreground">Journalist · Iowa</p>
            </div>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-charcoal/85">
            <p>
              John Kelling was a graduate of Minnesota State University, Mankato,
              with a field of study in broadcasting and journalism. His work
              included various groups, most notably WHO Radio, ESPN, Fox Sports,
              and the Big Ten Network. In recent years, he was a blog writer for
              several sports outlets.
            </p>
            <p>
              The blog on his son's deployment to Afghanistan led to the writing
              of his first book, <em>Hope is a Weapon</em>. Though the Battle of
              Do Ab was spoken of briefly in his earlier work, it remained at the
              forefront of his mind. This book is a testament to John's final
              career as a writer. It is a memoir to the faithful men who fought
              the battle and to the God who reigned over it.
            </p>
            <p>
              John was a native of Iowa, where he and his wife Joanne happily
              raised their three sons, Kristopher, Jonathan, and Jordan.
            </p>
          </div>
        </article>

        <div className="divider-military">
          <span className="h-px flex-1 bg-border" />
          <span className="font-display text-xs uppercase tracking-[0.28em] text-olive">In Service</span>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* JUSTIN */}
        <article className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-16">
          <div className="order-2 space-y-4 text-base leading-relaxed text-charcoal/85 lg:order-1">
            <p>
              Justin Foote has dedicated more than twenty-eight years to the
              United States Army, rising from the enlisted ranks to earn his
              commission. His extensive career spans nearly three decades,
              leading across diverse operational, recruiting, training,
              logistics, and command assignments.
            </p>
            <p>
              A combat veteran of Afghanistan, Justin writes from firsthand
              experience at the intersection of military service and family
              life. Though the raw realities of leadership and service under
              pressure are woven throughout his career, they remain at the
              forefront of his mind. This book stands as a testament to
              Justin's journey. It is a memoir to the resilient soldiers who
              served alongside him and to the family relationships that
              endured through it.
            </p>
            <p>
              Justin resides in Iowa with his wife, Laura, and their children,
              Owen and Kyra.
            </p>
          </div>
          <div className="order-1 mx-auto w-full max-w-xs lg:order-2 lg:mx-0">
            <div className="relative">
              <div className="absolute -inset-3 border border-olive/40" />
              <img
                src={justin.url}
                alt="LTC Justin Foote"
                className="relative w-full rounded-sm ring-1 ring-border"
              />
            </div>
            <div className="mt-5 border-l-2 border-olive pl-4">
              <p className="eyebrow">Combat Veteran</p>
              <h3 className="font-display mt-1 text-2xl font-bold uppercase text-charcoal">LTC Justin Foote</h3>
              <p className="text-sm text-muted-foreground">U.S. Army · 28+ Years</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
