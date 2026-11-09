"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Front-end confirmation only — no invented CRM or email API in this brief.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("sent");
    form.reset();
  }

  if (status === "sent") {
    return (
      <div
        className="rounded-md border border-accent/40 bg-bg-elevated p-6"
        role="status"
      >
        <p className="font-display text-2xl text-ink">Enquiry received</p>
        <p className="mt-3 max-w-measure text-muted">
          Thank you. Elite Abseiling aims to respond to enquiries within 24 hours.
          For urgent work, call us now.
        </p>
        <button
          type="button"
          className="btn-ghost mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="label">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="input"
        />
      </div>
      <div>
        <label htmlFor="email" className="label">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="input"
        />
      </div>
      <div>
        <label htmlFor="phone" className="label">
          Phone <span className="text-muted">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="input"
        />
      </div>
      <div>
        <label htmlFor="site" className="label">
          Site / location <span className="text-muted">(optional)</span>
        </label>
        <input id="site" name="site" type="text" className="input" />
      </div>
      <div>
        <label htmlFor="message" className="label">
          What do you need?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="input resize-y"
          placeholder="Inspection, façade repair, cleaning programme, coatings…"
        />
      </div>

      {status === "error" ? (
        <p className="text-sm text-cta" role="alert">
          Please complete name, email, and a short description of the work.
        </p>
      ) : null}

      <button
        type="submit"
        className="btn-cta w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Request a quote"}
      </button>
      <p className="text-sm text-muted">
        Or call{" "}
        <a href="tel:+447831556343" className="text-ink underline-offset-2 hover:underline">
          +44 783 155 6343
        </a>
        . We respond to enquiries within 24 hours.
      </p>
    </form>
  );
}
