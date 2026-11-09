import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Elite Abseiling Ltd for rope access quotes and height safety support. Call +44 783 155 6343 or email contact@eliteabseiling.co.uk.",
};

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="site-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-display-sm">Get in touch today</h1>
          <p className="lead mt-6">
            Whether you need a detailed quote, a condition survey, or urgent
            height-access support — our team is here to help across the UK.
          </p>

          <dl className="mt-10 space-y-8">
            <div>
              <dt className="text-sm tracking-wide text-muted">Phone</dt>
              <dd className="mt-2 space-y-1">
                {site.phones.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="block font-display text-2xl text-ink hover:text-accent"
                  >
                    {phone.display}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-sm tracking-wide text-muted">Email</dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="font-display text-2xl text-ink hover:text-accent"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm tracking-wide text-muted">Address</dt>
              <dd className="mt-2 text-lead text-ink">
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.country}
              </dd>
            </div>
          </dl>

          <p className="mt-10 max-w-measure text-sm text-muted">
            For more information on our services or a free no-obligation quote,
            use the form. We will respond within 24 hours to all enquiries.
          </p>
        </div>

        <div className="rounded-md border border-line bg-bg-secondary/50 p-6 sm:p-8">
          <h2 className="font-display text-2xl text-ink">Request a quote</h2>
          <p className="mt-2 text-muted">
            Primary action on this page — tell us about the site and we will follow up.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
