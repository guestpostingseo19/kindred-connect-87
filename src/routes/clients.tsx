import { createFileRoute } from "@tanstack/react-router";
import { Info } from "lucide-react";
import smartHome from "@/assets/smart-home.jpg";
import { Reveal } from "@/components/motion-primitives";
import { PageHero, Section, SectionHeading } from "@/components/ui-kit";
import { ContactCta } from "@/components/home/HomeSections";
import { INDUSTRY_BRANDS } from "@/lib/site-data";

const TITLE = "Home Automation Industry Experience — Haris Malik";
const DESCRIPTION =
  "The smart home ecosystems, protocols and dealer channels behind every campaign: Control4, Crestron, Lutron, Matter, Thread, Zigbee and more.";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/clients" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/clients" }],
  }),
  component: ClientsPage,
});

const SEGMENTS = [
  {
    title: "Lighting & shading control",
    body: "Scene design, load types, retrofit wiring constraints and why dealers specify one platform over another. Publications here care about installation reality, not app screenshots.",
  },
  {
    title: "Access control & security",
    body: "Smart locks, credentials, monitoring models and the compliance language that trade titles expect. Anchor and destination choices differ sharply from consumer coverage.",
  },
  {
    title: "Interoperability & protocols",
    body: "Matter, Thread, Zigbee, Z-Wave and border-router behaviour. The cheapest authority in the category still sits in protocol topics nobody has explained well.",
  },
  {
    title: "Energy & climate",
    body: "Thermostats, load shedding, tariff-aware automation and utility programmes — a fast-growing cluster with weak incumbent coverage in most markets.",
  },
  {
    title: "Multi-room audio & AV",
    body: "Distribution, latency, ecosystem lock-in and the crossover between custom install trade press and consumer tech publications.",
  },
  {
    title: "The integrator channel",
    body: "Dealers and custom installers read different publications than homeowners do, and they convert far better for B2B brands. Most link programmes ignore them entirely.",
  },
];

function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Industry experience"
        title="I speak this category's language before I write a single pitch."
        description="Editors in home automation can tell within a paragraph whether the writer has ever configured a hub. This page is about the knowledge that makes outreach land."
      />

      <Section className="pt-6">
        <Reveal>
          <div className="flex items-start gap-4 rounded-2xl border border-primary/25 bg-primary/5 p-6">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm leading-relaxed text-foreground/90">
              <strong className="font-semibold">Important:</strong> the brands listed
              below are not clients and no relationship is implied. They are named
              because they define the technologies, ecosystems and dealer channels I need
              to understand in order to work credibly in this category.
            </p>
          </div>
        </Reveal>

        <div className="mt-14">
          <SectionHeading
            eyebrow="Ecosystems"
            title="Platforms and ecosystems I work around."
          />
          <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_BRANDS.map((brand, i) => (
              <Reveal key={brand.name} delay={i * 0.03}>
                <div className="group h-full bg-surface/60 p-7 transition-colors hover:bg-surface-2/70">
                  <p className="font-display text-lg font-semibold transition-colors group-hover:text-primary">
                    {brand.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {brand.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border">
          <img
            src={smartHome}
            alt=""
            aria-hidden
            width={1400}
            height={900}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="relative p-8 sm:p-14">
            <SectionHeading
              eyebrow="Segments"
              title="Six segments, six very different publication landscapes."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {SEGMENTS.map((seg, i) => (
                <Reveal key={seg.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-border bg-background/60 p-6">
                    <h3 className="text-base font-semibold">{seg.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {seg.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}
