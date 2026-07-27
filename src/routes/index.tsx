import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import {
  AboutPreview,
  BlogPreview,
  ContactCta,
  FaqSection,
  FeaturedCaseStudy,
  IndustryStrip,
  ProcessTimeline,
  ServicesGrid,
  Testimonials,
  WhyChooseMe,
} from "@/components/home/HomeSections";
import { FAQS } from "@/lib/site-data";

const TITLE = "Haris Malik — Off-Page SEO for Home Automation Brands";
const DESCRIPTION =
  "Off-page SEO specialist for home automation companies. Guest posting, editorial link building, manual outreach and link insertions routed to revenue pages.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WhyChooseMe />
      <AboutPreview />
      <ServicesGrid />
      <ProcessTimeline />
      <FeaturedCaseStudy />
      <IndustryStrip />
      <Testimonials />
      <FaqSection />
      <BlogPreview />
      <ContactCta />
    </>
  );
}
