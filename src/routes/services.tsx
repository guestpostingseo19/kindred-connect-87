import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, Package, Workflow } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";
import { GoldButton, PageHero, Section, SectionHeading } from "@/components/ui-kit";
import { ContactCta, ProcessTimeline } from "@/components/home/HomeSections";
import { SERVICES } from "@/lib/site-data";

const TITLE = "Off-Page SEO Services for Home Automation Brands";
const DESCRIPTION =
  "Guest posting, manual outreach, editorial links, link insertions, authority building, competitor analysis and topical authority for smart home companies.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Eight ways to close an authority gap. All of them manual."
        description="Every engagement starts with the same question: which pages generate revenue, and how far are they from being competitive? The service mix follows from the answer, never the other way round."
      >
        <Reveal delay={0.3}>
          <nav className="mt-10 flex flex-wrap gap-2" aria-label="Services">
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="rounded-full border border-border bg-surface/50 px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </Reveal>
      </PageHero>

      <Section className="pt-6">
        <div className="space-y-8">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={0.04}>
              <article
                id={service.slug}
                className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-border bg-surface/50 transition-colors hover:border-primary/30"
              >
                <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_1fr]">
                  <div>
                    <span className="font-display text-xs uppercase tracking-[0.24em] text-primary">
                      {String(i + 1).padStart(2, "0")} — Overview
                    </span>
                    <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {service.overview}
                    </p>

                    <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      Benefits
                    </h3>
                    <ul className="mt-4 grid gap-2.5">
                      {service.benefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid gap-6">
                    <div className="rounded-2xl border border-border bg-background/40 p-6">
                      <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        <Workflow className="h-4 w-4" /> Process
                      </h3>
                      <ol className="mt-4 space-y-3">
                        {service.process.map((step, si) => (
                          <li key={step} className="flex gap-3 text-sm text-muted-foreground">
                            <span className="font-display text-xs text-primary/70">
                              {String(si + 1).padStart(2, "0")}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="rounded-2xl border border-border bg-background/40 p-6">
                      <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                        <Package className="h-4 w-4" /> Deliverables
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2.5 text-sm text-muted-foreground"
                          >
                            <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <GoldButton to="/contact">Discuss {service.title}</GoldButton>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <SectionHeadingWrapper />
      <ProcessTimeline />
      <ContactCta />
    </>
  );
}

function SectionHeadingWrapper() {
  return (
    <Section className="pb-0">
      <SectionHeading
        eyebrow="How engagements run"
        title="The same six steps regardless of which services you buy."
        align="center"
      />
    </Section>
  );
}
