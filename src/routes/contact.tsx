import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, Clock, Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/motion-primitives";
import { PageHero, Section, SectionHeading } from "@/components/ui-kit";
import { SERVICES, SITE } from "@/lib/site-data";

const TITLE = "Contact Haris Malik — Home Automation SEO";
const DESCRIPTION =
  "Start a conversation about off-page SEO for your smart home brand. Send project details and get a considered reply within one business day.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const FIELD =
  "w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60";

function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell me what you sell and where you are losing."
        description="The more specific the brief, the more useful the first reply. Target pages, competitors and current constraints are more helpful than a budget range."
      />

      <Section className="pt-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-border bg-surface/50 p-8 sm:p-10">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/15">
                    <Check className="h-6 w-6 text-primary" />
                  </span>
                  <h2 className="mt-6 text-2xl font-semibold">Message ready to send</h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                    This form is not wired to an inbox yet. In the meantime, email the
                    same details directly to{" "}
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      {SITE.email}
                    </a>{" "}
                    and you will get a reply within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 rounded-full border border-border px-5 py-2.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    Edit the message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Project enquiry
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="grid gap-2 text-xs text-muted-foreground">
                      Full name
                      <input required name="name" className={FIELD} placeholder="Jane Doe" />
                    </label>
                    <label className="grid gap-2 text-xs text-muted-foreground">
                      Work email
                      <input
                        required
                        type="email"
                        name="email"
                        className={FIELD}
                        placeholder="jane@brand.com"
                      />
                    </label>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="grid gap-2 text-xs text-muted-foreground">
                      Company
                      <input name="company" className={FIELD} placeholder="Brand name" />
                    </label>
                    <label className="grid gap-2 text-xs text-muted-foreground">
                      Website
                      <input name="website" className={FIELD} placeholder="brand.com" />
                    </label>
                  </div>
                  <label className="grid gap-2 text-xs text-muted-foreground">
                    Service of interest
                    <select name="service" className={FIELD} defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </label>
                  <label className="grid gap-2 text-xs text-muted-foreground">
                    What are you trying to rank, and against whom?
                    <textarea
                      required
                      name="message"
                      rows={6}
                      className={FIELD}
                      placeholder="Target pages, competitors outranking you, markets, timelines…"
                    />
                  </label>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_20px_60px_-20px_var(--primary)] transition-all hover:brightness-110"
                  >
                    Send enquiry <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-[2rem] border border-border bg-surface/50 p-8">
                <SectionHeading eyebrow="Direct" title="Reach me here." />
                <ul className="mt-8 space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {SITE.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{SITE.location}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">
                      Replies within one business day, Monday to Friday.
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="rounded-[2rem] border border-primary/20 bg-primary/5 p-8">
                <h2 className="text-lg font-semibold">Before you write</h2>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <li>
                    I take on a small number of engagements at a time, and only in home
                    automation and adjacent smart building categories.
                  </li>
                  <li>
                    Minimum useful engagement is three months — link programmes measured
                    over weeks tell you nothing.
                  </li>
                  <li>
                    If link marketplaces or guaranteed placement counts are a requirement,
                    we are not a fit, and I will say so quickly.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
