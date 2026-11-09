import Link from "next/link";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Need rope access on a live site?",
  body = "Tell us about the structure, access constraints, and programme. We will come back with a clear next step.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section-pad border-t border-line">
      <div className="site-shell grid items-end gap-8 md:grid-cols-[1.4fr_auto]">
        <div>
          <p className="eyebrow">Next step</p>
          <h2 className="mt-4 max-w-2xl text-display-sm">{title}</h2>
          <p className="lead mt-5">{body}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <a href={site.phones[0].href} className="btn-cta">
            Call {site.phones[0].display}
          </a>
          <Link href="/contact" className="btn-ghost">
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
}
