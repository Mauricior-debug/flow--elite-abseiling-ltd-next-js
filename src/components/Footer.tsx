import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-secondary">
      <div className="site-shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-5">
          <Image
            src="/images/logo.png"
            alt={site.name}
            width={500}
            height={188}
            className="h-11 w-auto"
          />
          <p className="max-w-sm text-muted">
            Height safety and industrial rope access across the UK — inspections,
            façades, cleaning, coatings, and confined-space related work.
          </p>
          <p className="text-sm text-muted">{site.tagline}</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-medium tracking-wide text-ink">Explore</p>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-medium tracking-wide text-ink">Talk to us</p>
          <ul className="space-y-3 text-muted">
            {site.phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="hover:text-accent">
                  {phone.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
            <li className="pt-2 text-sm leading-relaxed">
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.country}
            </li>
          </ul>
        </div>
      </div>

      <div className="site-shell rule flex flex-col gap-2 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Rope access · Height safety · UK-wide</p>
      </div>
    </footer>
  );
}
