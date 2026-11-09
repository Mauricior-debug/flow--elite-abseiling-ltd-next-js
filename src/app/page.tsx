import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { serviceGroups, site } from "@/lib/site";

const homeServices = serviceGroups.slice(0, 4);

export default function HomePage() {
  return (
    <>
      {/* Home opening — full-bleed composition */}
      <section className="relative min-h-[min(92svh,56rem)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home-opening.png"
            alt="IRATA rope-access technicians inspecting a glass façade high above the city"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] animate-slow-zoom"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-bg/25"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40"
            aria-hidden
          />
        </div>

        <div className="site-shell relative flex min-h-[min(92svh,56rem)] flex-col justify-end pb-14 pt-28 sm:pb-20">
          <div className="max-w-3xl">
            <p className="eyebrow animate-fade-up">Elite Abseiling Ltd</p>
            <h1 className="mt-5 text-display animate-fade-up-delay">
              Rope access that keeps live buildings working.
            </h1>
            <p className="lead mt-6 max-w-xl animate-fade-up-late">
              Industrial rope access for inspections, façades, cleaning, coatings,
              and height safety — delivered by IRATA-qualified technicians across
              the UK.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row animate-fade-up-late">
              <a href={site.phones[0].href} className="btn-cta">
                Call {site.phones[0].display}
              </a>
              <Link href="/contact" className="btn-ghost">
                Request a quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification strip — confidence without fake stats cards */}
      <section className="border-y border-line bg-bg-secondary/60">
        <div className="site-shell grid gap-8 py-10 md:grid-cols-3 md:gap-12">
          <div>
            <p className="font-display text-xl text-ink">IRATA technicians</p>
            <p className="mt-2 text-muted">
              Fully qualified teams working to the international rope access
              standard, with rescue experience.
            </p>
          </div>
          <div>
            <p className="font-display text-xl text-ink">Certified equipment</p>
            <p className="mt-2 text-muted">
              All kit is certified and inspected regularly, in line with UK law.
            </p>
          </div>
          <div>
            <p className="font-display text-xl text-ink">Active since {site.founded}</p>
            <p className="mt-2 text-muted">
              Based in Hampshire, delivering height safety and rope access
              throughout the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Services segmentation */}
      <section className="section-pad">
        <div className="site-shell">
          <div className="max-w-2xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-4 text-display-sm">Clear scopes for high-access work</h2>
            <p className="lead mt-5">
              Whether you need a condition survey, a glass change, a cleaning
              programme, or protective coatings — we organise access around the
              building, not the other way around.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {homeServices.map((service, index) => (
              <article
                key={service.slug}
                className={`border-t border-line pt-6 ${
                  index % 2 === 1 ? "md:mt-10" : ""
                }`}
              >
                <h3 className="font-display text-2xl text-ink sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-measure text-muted">{service.summary}</p>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-5 inline-flex text-sm font-medium text-accent hover:underline"
                >
                  View scope
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/services" className="btn-ghost">
              All services
            </Link>
          </div>
        </div>
      </section>

      {/* The work */}
      <section className="section-pad border-t border-line bg-bg-secondary/40">
        <div className="site-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">The work</p>
            <h2 className="mt-4 text-display-sm">Precision at height, minimal disruption</h2>
            <p className="lead mt-5">
              Rope access reaches façades, bridges, and confined areas without
              heavy scaffolding — reducing programme risk for contractors,
              facilities teams, and property managers.
            </p>
            <ul className="mt-8 space-y-3 text-muted">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Visual, photographic, and structural inspections
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Glazing, cladding, and curtain-wall interventions
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Cleaning, waterproofing, and protective coatings
              </li>
            </ul>
          </div>
          <div className="order-1 media-frame aspect-[4/5] lg:order-2 lg:aspect-[5/6]">
            <Image
              src="/images/the-work.png"
              alt="Rope-access technician applying finishing work on a glass building exterior"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Where they work */}
      <section className="section-pad">
        <div className="site-shell">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="eyebrow">Where they work</p>
              <h2 className="mt-4 text-display-sm">Commercial height, UK-wide reach</h2>
            </div>
            <p className="lead lg:justify-self-end">
              From Hampshire and London out across the UK — high-rise façades,
              infrastructure, and sites where conventional access is impractical.
            </p>
          </div>

          <div className="media-frame mt-12 aspect-[16/10] md:aspect-[21/9]">
            <Image
              src="/images/where-they-work.png"
              alt="Rooftop rope-access staging beside a modern glass building overlooking the landscape"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Safety proof */}
      <section className="section-pad border-t border-line">
        <div className="site-shell grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow">Qualification</p>
            <h2 className="mt-4 text-display-sm">Safety is the method, not a slogan</h2>
          </div>
          <div className="prose-narrow text-lead">
            <p>
              All technicians operate within IRATA guidelines — the international
              standard for rope access — with experience in rescue and work in
              safe, clean conditions.
            </p>
            <p>
              Operatives also hold qualifications including PTS, CSCS, chainsaws,
              and confined spaces. Equipment is certified and inspected regularly.
            </p>
            <Link href="/about" className="inline-flex pt-2 text-accent hover:underline">
              About Elite Abseiling
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
