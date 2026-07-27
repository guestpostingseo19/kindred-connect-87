import { createFileRoute } from "@tanstack/react-router";
import { Award, Compass, Quote } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import workspace from "@/assets/workspace.jpg";
import { Parallax, Reveal } from "@/components/motion-primitives";
import { PageHero, Section, SectionHeading } from "@/components/ui-kit";
import { ContactCta } from "@/components/home/HomeSections";
import { EXPERTISE, STATS, TIMELINE, VALUES } from "@/lib/site-data";

const TITLE = "About Haris Malik — Off-Page SEO Specialist";
const DESCRIPTION =
  "The story behind nine years in off-page SEO and four spent exclusively on home automation: timeline, mission, values and SEO philosophy.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="I stopped doing SEO for everyone so I could be useful to someone."
        description="Nine years in off-page SEO, four of them spent entirely inside home automation. This is how that happened and what I believe about the work."
      />

      <Section className="pt-8">
        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Parallax amount={26}>
              <div className="relative overflow-hidden rounded-[2rem] border border-border">
                <img
                  src={portrait}
                  alt="Professional portrait of Haris Malik"
                  width={912}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Parallax>
          </Reveal>

          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <Reveal>
              <p>
                I started in 2016 as an outreach associate at a UK agency, sending
                hundreds of templated emails a week to people who had never asked to
                hear from me. The reply rate was somewhere near one percent, and the
                replies we did get were mostly from sites selling links to anyone who
                asked. It took me about eighteen months to understand that the problem
                was not the email — it was the list.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                In 2018 I stopped using marketplaces entirely and rebuilt the way I
                worked around named editors and pitches that could only have been written
                by someone who read their publication. Placements got slower. They also
                started surviving audits, algorithm updates and editorial clean-ups.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <p>
                Then a lighting-control brand asked for help in 2020. Learning that
                industry — the dealer channel, the retrofit constraints, why an
                integrator cares about protocol stability more than app design — changed
                what relevance meant to me. I could pitch editors in that space with
                something they genuinely could not get elsewhere.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="border-l-2 border-primary pl-5 text-foreground">
                By 2022 I had turned down every engagement outside home automation. That
                decision cost revenue for about eight months and has been the single
                most valuable thing I have done professionally.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
                {STATS.map((s) => (
                  <div key={s.label} className="bg-surface/60 p-5">
                    <p className="font-display text-2xl font-semibold text-primary">
                      {s.value.toLocaleString("en-US", {
                        minimumFractionDigits: s.decimals,
                      })}
                      {s.suffix}
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Timeline" title="How the specialisation happened." />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.06}>
              <div className="group relative h-full rounded-3xl border border-border bg-surface/50 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
                <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  {item.year}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Mission" title="Make specialist brands citable." />
            <Reveal delay={0.15}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Home automation is full of companies solving genuinely hard problems who
                are invisible in search because publishers own every commercial query.
                My job is to close that gap honestly: by making those companies the
                source that writers, installers and buyers reference. Not by
                manufacturing signals, but by earning the ones that last.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8 flex items-start gap-4 rounded-3xl border border-primary/20 bg-primary/5 p-6">
                <Quote className="h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-foreground/90">
                  If a placement would embarrass you in front of a journalist, it does
                  not belong in your backlink profile. That single filter removes about
                  ninety percent of what the industry sells.
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <SectionHeading eyebrow="Core values" title="Four rules I do not bend." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {VALUES.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.07}>
                  <div className="h-full rounded-2xl border border-border bg-surface/50 p-6">
                    <Compass className="h-5 w-5 text-primary" />
                    <h3 className="mt-4 text-base font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {v.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border">
          <img
            src={workspace}
            alt=""
            aria-hidden
            width={1400}
            height={900}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="relative grid gap-12 p-8 sm:p-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="SEO philosophy"
                title="Relevance is a stronger currency than authority."
              />
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Every regression I have run on my own client data says the same thing: in
                home automation, a link from a lower-authority publication that genuinely
                covers installation outperforms a higher-authority general site. Metrics
                are a proxy. Subject coverage is the thing being proxied.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                So I optimise for the harder variable. Fewer placements, chosen carefully,
                routed to cluster hubs, measured at cluster level, and reported honestly
                including the ones that did not work.
              </p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                <Award className="h-4 w-4" /> What I actually do
              </h3>
              <ul className="mt-6 grid gap-3">
                {EXPERTISE.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
