import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Magnetic, Reveal, SplitText } from "./motion-primitives";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.08] sm:text-4xl md:text-5xl">
        <SplitText text={title} />
      </h2>
      {description && (
        <Reveal delay={0.15}>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function GoldButton({
  to,
  children,
  variant = "solid",
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
}) {
  return (
    <Magnetic>
      <Link
        to={to}
        className={cn(
          "group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all",
          variant === "solid"
            ? "bg-primary text-primary-foreground shadow-[0_20px_60px_-20px_var(--primary)] hover:brightness-110"
            : "border border-border bg-surface/50 text-foreground hover:border-primary/50 hover:text-primary",
        )}
      >
        {children}
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </Link>
    </Magnetic>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function GlowOrb({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 rounded-full blur-[120px]",
        className,
      )}
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--primary) 45%, transparent), transparent 70%)",
      }}
    />
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-12 pt-36 sm:pt-44">
      <GlowOrb className="left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 opacity-25" />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.03] sm:text-6xl md:text-7xl">
          <SplitText text={title} />
        </h1>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
