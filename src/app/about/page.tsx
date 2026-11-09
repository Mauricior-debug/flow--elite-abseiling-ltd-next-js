import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/CtaBand";
import { capabilityList, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Elite Abseiling Ltd — IRATA-qualified rope access and height safety teams active since 2017, serving clients across the UK from Liphook, Hampshire.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-pad pb-10">
        <div className="site-shell max-w-3xl">
          <p className="eyebrow">About</p>
          <h1 className="mt-4 text-display-sm">
            A rope access contractor built around safety, access, and clear delivery.
          </h1>
          <p className="lead mt-6">
            Elite Abseiling provides innovative height safety and rope access
            services across the UK. We maintain a management system focused on
            safety, productivity, and efficiency — so every service meets what
            the site actually needs.
          </p>
        </div>
      </section>

      <section className="pb-section">
        <div className="site-shell grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="media-frame aspect-[4/3]">
            <Image
              src="/images/where-they-work.png"
              alt="Rope access equipment staged on a rooftop beside a glass façade"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl">Who we are</h2>
            <div className="prose-narrow">
              <p>
                All our technicians are fully qualified and operate within the
                guidelines of the Industrial Rope Access Trade Association
                (IRATA), the international standard for rope access, with
                experience in rescue and work in safe and clean conditions.
              </p>
              <p>
                Our operatives also hold other qualifications including PTS,
                CSCS, chainsaws and confined spaces. All our equipment is
                certified and is inspected regularly, in line with UK law.
              </p>
            </div>
            <dl className="grid grid-cols-3 gap-4 border-t border-line pt-6">
              <div>
                <dt className="text-sm text-muted">Projects completed</dt>
                <dd className="mt-1 font-display text-3xl text-accent">100+</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Clients served</dt>
                <dd className="mt-1 font-display text-3xl text-accent">100+</dd>
              </div>
              <div>
                <dt className="text-sm text-muted">Active since</dt>
                <dd className="mt-1 font-display text-3xl text-accent">
                  {site.founded}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line bg-bg-secondary/40">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-4 text-display-sm">Capabilities at a glance</h2>
            <p className="lead mt-5">
              Specialist access for maintaining and improving the built
              environment — from surveys to fabric repair and protective coatings.
            </p>
          </div>
          <ul className="columns-1 gap-x-12 sm:columns-2">
            {capabilityList.map((item) => (
              <li
                key={item}
                className="mb-4 break-inside-avoid border-b border-line pb-3 text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="site-shell grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
          <h2 className="text-3xl sm:text-4xl">Why inspections matter</h2>
          <div className="prose-narrow text-lead">
            <p>
              Regular inspections by Elite Abseiling help prevent costly repairs,
              enhance safety, support compliance with regulations, and give
              facilities teams room to focus on core operations.
            </p>
            <p>
              Based at {site.address.line1}, {site.address.line2}, we work with
              clients across the UK who need dependable height access without the
              footprint of scaffolding.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Discuss a site with the team" />
    </>
  );
}
