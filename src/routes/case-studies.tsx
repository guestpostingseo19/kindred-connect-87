import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, TrendingUp } from "lucide-react";
import { Counter, Reveal } from "@/components/motion-primitives";
import { PageHero, Section, SectionHeading } from "@/components/ui-kit";
import { ContactCta } from "@/components/home/HomeSections";
import { CASE_STUDIES, type CaseStudy } from "@/lib/site-data";

const TITLE = "Home Automation SEO Case Studies — Haris Malik";
const DESCRIPTION =
  "Detailed off-page SEO case studies from smart lighting, security integration and Matter platform brands: strategy, execution, metrics and lessons learned.";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/case-studies" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Three programmes, documented end to end."
        description="Client names are withheld under NDA; every metric, timeline and tactic described here is from real engagements."
      />

      <Section className="pt-6">
        <div className="space-y-10">
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Reveal>
      <article
        id={study.slug}
        className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-border bg-surface/50"
      >
        <div className="border-b border-border p-8 sm:p-12">
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
            {study.category} · {study.timeline}
          </span>
          <h2 className="mt-4 max-w-3xl text-balance text-2xl font-semibold leading-tight sm:text-4xl">
            {study.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {study.summary}
          </p>

          <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
            {study.metrics.map((m) => (
              <div key={m.label} className="bg-background/50 p-5">
                <p className="font-display text-2xl font-semibold text-primary sm:text-3xl">
                  <Counter value={m.after} />
                  {m.suffix ?? ""}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {m.label}
                </p>
                <p className="mt-2 text-[11px] text-muted-foreground/70">
                  Before: {m.before.toLocaleString("en-US")}
                  {m.suffix ?? ""}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-7">
            <Block title="Client background" body={study.background} />
            <Block title="The problem" body={study.problem} />
            <Block title="Research" body={study.research} />
            <Block title="Strategy" body={study.strategy} />
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Execution
              </h3>
              <ul className="mt-3 space-y-2.5">
                {study.execution.map((e) => (
                  <li
                    key={e}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <TrafficChart data={study.chart} />
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                <Lightbulb className="h-4 w-4" /> Lessons learned
              </h3>
              <ul className="mt-4 space-y-3">
                {study.lessons.map((l) => (
                  <li key={l} className="text-sm leading-relaxed text-foreground/90">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

function TrafficChart({ data }: { data: { month: string; sessions: number }[] }) {
  const width = 520;
  const height = 220;
  const pad = 8;
  const max = Math.max(...data.map((d) => d.sessions));
  const points = data.map((d, i) => {
    const x = pad + (i / (data.length - 1)) * (width - pad * 2);
    const y = height - pad - (d.sessions / max) * (height - pad * 2);
    return `${x},${y}`;
  });
  const line = `M ${points.join(" L ")}`;
  const area = `${line} L ${width - pad},${height - pad} L ${pad},${height - pad} Z`;

  return (
    <figure className="rounded-2xl border border-border bg-background/50 p-6">
      <figcaption className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        Organic sessions
      </figcaption>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="mt-4 w-full"
        role="img"
        aria-label="Monthly organic sessions growth over the engagement"
      >
        <defs>
          <linearGradient id={`fill-${data.length}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill={`url(#fill-${data.length})`} />
        <path
          d={line}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="mt-3 flex justify-between text-[11px] text-muted-foreground">
        <span>{data[0].month}</span>
        <span>{data[data.length - 1].month}</span>
      </div>
    </figure>
  );
}
