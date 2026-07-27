import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";
import { GoldButton, Section } from "@/components/ui-kit";
import { ContactCta } from "@/components/home/HomeSections";
import { BLOG_POSTS, getPost } from "@/lib/blog-data";
import { BLOG_IMAGES, formatDate } from "@/lib/blog-images";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: post.seoTitle },
        { name: "description", content: post.metaDescription },
        { property: "og:title", content: post.seoTitle },
        { property: "og:description", content: post.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:title", content: post.seoTitle },
        { name: "twitter:description", content: post.metaDescription },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.date,
            author: { "@type": "Person", name: "Haris Malik" },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: PostNotFound,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = post.related
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter(Boolean)
    .slice(0, 2);

  return (
    <>
      <article>
        <header className="relative overflow-hidden pb-14 pt-36 sm:pt-44">
          <img
            src={BLOG_IMAGES[post.image]}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-20"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"
          />
          <div className="relative mx-auto w-full max-w-3xl px-4 sm:px-6">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All articles
            </Link>
            <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
              {post.category}
            </p>
            <h1 className="mt-5 text-balance text-3xl font-semibold leading-[1.1] sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-sm text-muted-foreground">
              {formatDate(post.date)} · {post.readTime} read · by Haris Malik
            </p>
          </div>
        </header>

        <Section className="pt-0">
          <div className="mx-auto w-full max-w-3xl">
            <div className="space-y-5 border-l-2 border-primary/50 pl-6">
              {post.intro.map((para) => (
                <p key={para} className="text-base leading-relaxed text-foreground/90">
                  {para}
                </p>
              ))}
            </div>

            <div className="mt-14 space-y-14">
              {post.sections.map((section) => (
                <Reveal key={section.heading}>
                  <section>
                    <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
                      {section.heading}
                    </h2>
                    <div className="mt-5 space-y-4">
                      {section.paragraphs.map((para) => (
                        <p
                          key={para}
                          className="text-base leading-relaxed text-muted-foreground"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <section className="mt-16 rounded-3xl border border-border bg-surface/50 p-8">
                <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Frequently asked questions
                </h2>
                <dl className="mt-6 space-y-6">
                  {post.faqs.map((faq) => (
                    <div key={faq.q}>
                      <dt className="text-base font-semibold">{faq.q}</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            </Reveal>

            {related.length > 0 && (
              <section className="mt-16">
                <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Keep reading
                </h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {related.map((rel) => (
                    <Link
                      key={rel!.slug}
                      to="/blog/$slug"
                      params={{ slug: rel!.slug }}
                      className="group rounded-2xl border border-border bg-surface/50 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40"
                    >
                      <span className="text-[11px] uppercase tracking-[0.2em] text-primary">
                        {rel!.category}
                      </span>
                      <h3 className="mt-3 text-base font-semibold leading-snug">
                        {rel!.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </Section>
      </article>

      <ContactCta />
    </>
  );
}

function PostNotFound() {
  return (
    <Section className="pt-40 text-center">
      <h1 className="text-3xl font-semibold sm:text-5xl">That article does not exist.</h1>
      <p className="mx-auto mt-5 max-w-md text-muted-foreground">
        The link may be outdated. Browse the full archive instead.
      </p>
      <div className="mt-9 flex justify-center">
        <GoldButton to="/blog">Back to the blog</GoldButton>
      </div>
    </Section>
  );
}
