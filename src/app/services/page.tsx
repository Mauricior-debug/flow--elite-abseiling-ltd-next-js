import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { serviceGroups } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Rope access inspections, installation, cleaning and maintenance, painting and coatings, façade fabric repair, and ground-level refurbishment from Elite Abseiling Ltd.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-pad pb-8">
        <div className="site-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">Services</p>
            <h1 className="mt-4 text-display-sm">
              Industrial rope access, scoped for the structure
            </h1>
          </div>
          <p className="lead">
            Elite Abseiling delivers height safety and rope access services across
            the UK — from condition surveys to installation, cleaning, coatings,
            and fabric repair.
          </p>
        </div>
      </section>

      <section className="pb-section">
        <div className="site-shell">
          <div className="media-frame aspect-[16/9] md:aspect-[21/8]">
            <Image
              src="/images/the-work.png"
              alt="Technician carrying out rope-access maintenance on a commercial glass façade"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_30%]"
            />
          </div>
        </div>
      </section>

      <section className="pb-section">
        <div className="site-shell space-y-0">
          {serviceGroups.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="scroll-mt-28 grid gap-8 border-t border-line py-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16"
            >
              <div>
                <p className="text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl">{service.title}</h2>
                <p className="mt-4 max-w-measure text-muted">{service.summary}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="border-l border-accent/50 pl-4 text-ink"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Need a scoped quote for access works?"
        body="Share the building type, height constraints, and programme window. We respond to enquiries within 24 hours."
      />
    </>
  );
}
