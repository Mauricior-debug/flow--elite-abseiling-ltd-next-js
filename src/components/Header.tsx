"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const mobileMenu =
    mounted &&
    createPortal(
      <div
        id="mobile-nav"
        className={`fixed inset-0 z-[80] lg:hidden ${
          open ? "pointer-events-auto visible" : "pointer-events-none invisible"
        }`}
        style={{ backgroundColor: "#1a1a1a" }}
        aria-hidden={!open}
      >
        <div className="flex h-[var(--header-h)] items-center justify-between px-gutter">
          <Link href="/" aria-label={`${site.name} home`}>
            <Image
              src="/images/logo.png"
              alt={site.name}
              width={500}
              height={188}
              className="h-10 w-auto"
            />
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-line"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span className="block h-px w-full translate-y-[7px] rotate-45 bg-ink" />
              <span className="block h-px w-full opacity-0 bg-ink" />
              <span className="block h-px w-full -translate-y-[7px] -rotate-45 bg-ink" />
            </span>
          </button>
        </div>
        <nav
          className={`mx-auto flex h-[calc(100%-var(--header-h))] w-full max-w-wide flex-col gap-2 px-gutter pb-10 transition duration-300 ${
            open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-line py-4 font-display text-3xl text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-auto space-y-3 pt-8">
            <a href={site.phones[0].href} className="btn-phone">
              Call {site.phones[0].display}
            </a>
            <Link
              href="/contact"
              className="btn-ghost w-full"
              onClick={() => setOpen(false)}
            >
              Request a quote
            </Link>
          </div>
        </nav>
      </div>,
      document.body,
    );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/70 bg-[#1a1a1a]/95">
        <div className="site-shell flex h-[var(--header-h)] items-center justify-between gap-4">
          <Link
            href="/"
            className="relative z-50 flex shrink-0 items-center"
            aria-label={`${site.name} home`}
          >
            <Image
              src="/images/logo.png"
              alt={site.name}
              width={500}
              height={188}
              className="h-10 w-auto sm:h-11"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                data-active={
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href)
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.phones[0].href}
              className="text-sm text-muted hover:text-ink"
            >
              {site.phones[0].display}
            </a>
            <Link
              href="/contact"
              className="btn-cta !min-h-11 !px-4 !py-2.5 text-sm"
            >
              Request a quote
            </Link>
          </div>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-md border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-px w-full bg-ink transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-full bg-ink transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-full bg-ink transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </header>
      {mobileMenu}
    </>
  );
}
