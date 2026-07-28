import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  Quote,
  ShieldCheck,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Counter, Parallax, Reveal } from "@/components/motion-primitives";
import { GlowOrb, GoldButton, Section, SectionHeading } from "@/components/ui-kit";
import {
  CASE_STUDIES,
  DIFFERENTIATORS,
  EXPERTISE,
  FAQS,
  INDUSTRY_BRANDS,
  PROCESS,
  SERVICES,
  TESTIMONIALS,
} from "@/lib/site-data";
import { BLOG_POSTS } from "@/lib/blog-data";
import smartHome from "@/assets/smart-home.jpg";
import growthChart from "@/assets/growth-chart.jpg";
import portraitAsset from "@/assets/haris-portrait.jpg.asset.json";

export function WhyChooseMe() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why work with me"
        title="A specialist beats a generalist in a category this narrow."
        description="There are roughly four hundred publications worth pitching in home automation. I know which ones rank, which ones reply, and which ones your competitors already used."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {DIFFERENTIATORS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <article className="group relative h-full overflow-hidden rounded-3xl border border-border bg-surface/50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
              <div className="absolute inset-x-0 top-0 h-px gold-line opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/12 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function AboutPreview() {
  return (
    <Section className="overflow-hidden">
      <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Parallax amount={30}>
            <div className="relative overflow-hidden rounded-[2rem] border border-border">
              <img
                src={portraitAsset.url}
                alt="Haris Malik, off-page SEO specialist for home automation brands"
                width={912}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="glass-panel absolute bottom-4 left-4 right-4 rounded-2xl p-4">
                <p className="font-display text-sm font-semibold">Haris Malik</p>
                <p className="text-xs text-muted-foreground">
                  Off-Page SEO Specialist · Home Automation
                </p>
              </div>
            </div>
          </Parallax>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About"
            title="Nine years in off-page SEO. Four of them spent on one industry."
            description="I started in outreach sending emails nobody answered. What changed everything was narrowing: turning down every engagement outside home automation and spending the recovered time building relationships with the editors who actually cover this category."
          />
          <Reveal delay={0.2}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {EXPERTISE.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9">
              <GoldButton to="/about" variant="ghost">
                Read the full story
              </GoldButton>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <Section className="relative">
      <GlowOrb className="left-[-15%] top-1/3 h-[380px] w-[380px] opacity-20" />
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Services"
          title="Four channels, one outcome: relevant authority on revenue pages."
          className="max-w-2xl"
        />
        <Reveal delay={0.2}>
          <GoldButton to="/services" variant="ghost">
            All services
          </GoldButton>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {items.map((service, i) => (
          <Reveal key={service.slug} delay={i * 0.05}>
            <Link
              to="/services"
              hash={service.slug}
              className="group flex h-full flex-col bg-surface/60 p-7 transition-colors hover:bg-surface-2/70"
            >
              <span className="font-display text-xs uppercase tracking-[0.2em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold leading-snug">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                Explore
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ProcessTimeline() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Process"
        title="Six steps. Nothing goes live without your approval."
        description="The first month is audit, modelling and target-list approval. Placements start when we both know exactly which pages need what."
      />
      <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {PROCESS.map((item, i) => (
          <Reveal key={item.step} delay={i * 0.07}>
            <div className="group relative border-l border-border pl-7 transition-colors hover:border-primary/50">
              <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary transition-transform group-hover:scale-125" />
              <span className="font-display text-4xl font-semibold text-primary/25 transition-colors group-hover:text-primary/60">
                {item.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function FeaturedCaseStudy() {
  const study = CASE_STUDIES[0];
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface/50">
        <img
          src={growthChart}
          alt=""
          aria-hidden
          width={1400}
          height={900}
          loading="lazy"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:p-16">
          <div>
            <Reveal>
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
                Featured case study · {study.category}
              </span>
            </Reveal>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
              {study.headline}
            </h2>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {study.summary}
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-8">
                <GoldButton to="/case-studies">Read the breakdown</GoldButton>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4 self-center">
            {study.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.08}>
                <div className="glass-panel rounded-2xl p-5">
                  <p className="font-display text-2xl font-semibold text-primary sm:text-3xl">
                    <Counter value={m.after} />
                    {m.suffix ?? ""}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {m.label}
                  </p>
                  <p className="mt-2 text-[11px] text-muted-foreground/70">
                    from {m.before.toLocaleString("en-US")}
                    {m.suffix ?? ""}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function IndustryStrip({ limit }: { limit?: number }) {
  const brands = limit ? INDUSTRY_BRANDS.slice(0, limit) : INDUSTRY_BRANDS;
  return (
    <Section className="relative overflow-hidden">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Industry experience"
            title="The ecosystems I work inside every week."
            description="These brands are not clients. They represent the technologies, dealer channels and ecosystems I need to understand to pitch this category credibly."
          />
          <Reveal delay={0.2}>
            <div className="mt-8">
              <GoldButton to="/clients" variant="ghost">
                How this shapes the work
              </GoldButton>
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
          {brands.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 0.03}>
              <div className="group h-full bg-surface/60 p-5 transition-colors hover:bg-surface-2/70">
                <p className="font-display text-sm font-semibold">{brand.name}</p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                  {brand.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Testimonials"
        title="What clients say about the work."
        description="Sample content: these testimonials are illustrative placeholders and will be replaced with verified client quotes."
        align="center"
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <figure className="group flex h-full flex-col rounded-3xl border border-border bg-surface/50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40">
              <Quote className="h-6 w-6 text-primary/60" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary">
                <BadgeCheck className="h-3.5 w-3.5" />
                {t.result}
              </p>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/15 font-display text-xs font-bold text-primary">
                  {t.initials}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">{t.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </span>
                </span>
                <span className="ml-auto flex shrink-0 gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-3 w-3 fill-primary text-primary" />
                  ))}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function FaqSection() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="The questions I get on every first call."
        />
        <Reveal delay={0.15}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-base hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}

export function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Latest articles"
          title="Writing for people who buy links, not people who sell them."
          className="max-w-2xl"
        />
        <Reveal delay={0.2}>
          <GoldButton to="/blog" variant="ghost">
            All articles
          </GoldButton>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.08}>
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface/50 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image === "smartHome" ? smartHome : growthChart}
                  alt=""
                  aria-hidden
                  width={1400}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
                  {post.category}
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-5 text-xs text-muted-foreground/70">
                  {post.readTime} read
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ContactCta() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-surface/60 p-10 text-center sm:p-16">
        <GlowOrb className="left-1/2 top-0 h-[320px] w-[520px] -translate-x-1/2 opacity-30" />
        <img
          src={smartHome}
          alt=""
          aria-hidden
          width={1400}
          height={900}
          loading="lazy"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold leading-tight sm:text-5xl">
            Bring three competitor URLs. Leave with a gap model.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
            A 30-minute strategy call. I will tell you what your authority gap actually
            is on your priority pages — and whether link building is even your
            constraint.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <GoldButton to="/contact">Book a strategy call</GoldButton>
            <GoldButton to="/case-studies" variant="ghost">
              See proof first
            </GoldButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
