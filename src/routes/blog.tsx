import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import growthChart from "@/assets/growth-chart.jpg";
import smartHome from "@/assets/smart-home.jpg";
import workspace from "@/assets/workspace.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { Reveal } from "@/components/motion-primitives";
import { PageHero, Section } from "@/components/ui-kit";
import { ContactCta } from "@/components/home/HomeSections";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/lib/blog-data";

const TITLE = "Off-Page SEO Blog for Home Automation Brands";
const DESCRIPTION =
  "Practical writing on guest posting, editorial links, outreach, anchor text, topical authority and measurement — written for smart home marketing teams.";

export const IMAGES = {
  hero: heroBg,
  smartHome,
  growth: growthChart,
  workspace,
};

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [active, setActive] = useState<string>("All");
  const posts =
    active === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === active);
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes from inside home automation link building."
        description="Fifteen articles on the tactics, trade-offs and measurement behind off-page SEO in this category. No listicles, no recycled advice."
      >
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-2">
            {["All", ...BLOG_CATEGORIES].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                  active === cat
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border bg-surface/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>
      </PageHero>

      <Section className="pt-6">
        {featured && (
          <Reveal>
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group grid overflow-hidden rounded-[2rem] border border-border bg-surface/50 transition-colors hover:border-primary/40 lg:grid-cols-2"
            >
              <div className="aspect-[16/10] overflow-hidden lg:aspect-auto">
                <img
                  src={IMAGES[featured.image]}
                  alt=""
                  aria-hidden
                  width={1400}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
                  Featured · {featured.category}
                </span>
                <h2 className="mt-4 text-balance text-2xl font-semibold leading-tight sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <span className="mt-6 text-xs text-muted-foreground/70">
                  {formatDate(featured.date)} · {featured.readTime} read
                </span>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.07}>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface/50 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={IMAGES[post.image]}
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
                    {formatDate(post.date)} · {post.readTime} read
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <ContactCta />
    </>
  );
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
