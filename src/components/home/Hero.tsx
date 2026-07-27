import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import heroBg from "@/assets/hero-bg.jpg";
import { SITE, STATS } from "@/lib/site-data";
import { Counter, Magnetic, Reveal, SplitText } from "@/components/motion-primitives";
import { GlowOrb } from "@/components/ui-kit";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-48">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1088}
        fetchPriority="high"
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--background) 55%, transparent), var(--background) 88%)",
        }}
      />
      <GlowOrb className="right-[-10%] top-[10%] h-[420px] w-[420px] opacity-30" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Home automation only
          </span>
        </Reveal>

        <h1 className="mt-7 max-w-5xl text-balance text-[2.6rem] font-semibold leading-[1.02] sm:text-6xl md:text-[5.2rem]">
          <SplitText text="Editorial links that make smart-home brands" />{" "}
          <span className="text-gradient-gold">
            <SplitText text="the obvious answer." delay={0.35} />
          </span>
        </h1>

        <Reveal delay={0.45}>
          <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am {SITE.name}, an off-page SEO specialist working exclusively with home
            automation, smart lighting, connected security and energy brands. Guest
            posting, editorial link building, manual outreach and link insertions —
            routed to the pages that actually generate revenue.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[0_24px_70px_-24px_var(--primary)] transition-all hover:brightness-110"
              >
                Book a strategy call
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-7 py-4 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
              >
                See the case studies
              </Link>
            </Magnetic>
          </div>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface/70 p-6 backdrop-blur-sm transition-colors hover:bg-surface-2/70 sm:p-8"
            >
              <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
                <Counter value={stat.value} decimals={stat.decimals} />
                {stat.suffix}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
