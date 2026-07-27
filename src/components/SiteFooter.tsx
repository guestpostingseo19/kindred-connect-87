import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border bg-surface/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="min-w-0">
            <span className="font-display text-2xl font-semibold tracking-tight">
              {SITE.name}
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE.tagline} Off-page SEO built exclusively for home automation,
              smart lighting, connected security and energy brands.
            </p>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a className="hover:text-foreground" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                {SITE.location}
              </p>
            </div>
          </div>

          <FooterCol title="Services">
            {SERVICES.slice(0, 5).map((s) => (
              <FooterLink key={s.slug} to="/services" label={s.title} />
            ))}
          </FooterCol>

          <FooterCol title="Explore">
            <FooterLink to="/about" label="About Haris" />
            <FooterLink to="/case-studies" label="Case Studies" />
            <FooterLink to="/clients" label="Industry Experience" />
            <FooterLink to="/blog" label="Blog" />
            <FooterLink to="/contact" label="Contact" />
          </FooterCol>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Start
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Bring three competitor URLs. Leave with a gap model.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Book a strategy call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>Independent specialist · Not affiliated with any brand named on this site.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ to, label }: { to: string; label: string }) {
  return (
    <li>
      <Link
        to={to}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {label}
      </Link>
    </li>
  );
}
