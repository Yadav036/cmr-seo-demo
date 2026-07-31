"use client";

import { BookOpen, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "@/components/svg/Logo";
import {
  APP_DOCS_URL,
  APP_GET_STARTED_URL,
  APP_LOGIN_URL,
} from "@/lib/appUrls";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", match: (p: string) => p === "/" },
  {
    href: "/#how-it-works",
    label: "How it works",
    match: () => false,
  },
] as const;

export function SiteNavbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      data-site-header
      className={cn(
        "fixed left-0 top-0 z-50 flex w-full flex-col items-center text-white",
        "transition-[background-color,border-color,color,translate,width,max-width,top] duration-300",
        isScrolled
          ? "border-b border-white/10 bg-[#1e1e1e] p-2 md:left-1/2 md:top-4 md:w-[calc(100%-2rem)] md:max-w-[1240px] md:-translate-x-1/2 md:border md:px-2 md:py-[8px]"
          : "border-b border-[#252525] bg-black/80 px-0 py-0 backdrop-blur-[12px] supports-[backdrop-filter]:bg-black/60 md:left-0 md:w-full md:max-w-none md:translate-x-0",
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full items-center justify-between",
          isScrolled
            ? "gap-4 px-2 py-1 md:px-1 md:py-0"
            : "max-w-[1320px] gap-6 px-[60px] py-4",
        )}
      >
        <Link
          href="/"
          className="shrink-0"
          aria-label="Cold Mail Reseller home"
        >
          <Logo width={129} height={25} />
        </Link>

        <div className="hidden flex-wrap items-center justify-end gap-5 sm:gap-6 md:flex">
          <nav
            className="flex items-center gap-4 font-mono text-xs leading-[1.4] tracking-[-0.02em] sm:gap-6 sm:text-sm"
            style={{ fontFeatureSettings: "'ss05' 1" }}
            aria-label="Primary"
          >
            {navItems.map(({ href, label, match }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "whitespace-nowrap transition-colors hover:text-white",
                  match(pathname)
                    ? "text-white"
                    : "text-[color:var(--Neutral-500,#737373)]",
                )}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <a
              href={APP_DOCS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-1.5 overflow-hidden border border-[#5747ff]/40 bg-[#5747ff]/10 px-3 py-2 font-mono text-sm leading-[1.4] tracking-[-0.02em] text-[#c4b5ff] transition-all hover:border-[#5747ff]/70 hover:bg-[#5747ff]/20 hover:text-white"
              style={{ fontFeatureSettings: "'ss05' 1" }}
            >
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.12)_50%,transparent_60%)] transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden
              />
              <BookOpen className="size-3.5 shrink-0" strokeWidth={1.75} />
              Docs
              <span className="rounded-sm bg-[#5747ff]/25 px-1 py-px text-[10px] font-medium uppercase tracking-wider text-[#8b7fff]">
                API
              </span>
            </a>
            <Link
              href={APP_LOGIN_URL}
              className="bg-[color:var(--Neutral-300,#404040)] px-3 py-2 font-mono text-sm leading-[1.4] tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
              style={{ fontFeatureSettings: "'ss05' 1" }}
            >
              Log In
            </Link>
            <Link
              href={APP_GET_STARTED_URL}
              className="bg-[color:var(--Neutral-300,#404040)] px-3 py-2 font-mono text-sm leading-[1.4] tracking-[-0.02em] text-white transition-opacity hover:opacity-90"
              style={{ fontFeatureSettings: "'ss05' 1" }}
            >
              Book a Call
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="inline-flex size-8 items-center justify-center lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-primary-nav"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? (
            <X className="size-5" strokeWidth={1.5} aria-hidden />
          ) : (
            <Menu className="size-5" strokeWidth={1.5} aria-hidden />
          )}
        </button>
      </div>

      <div
        id="mobile-primary-nav"
        className={cn(
          "w-full overflow-hidden transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[420px]" : "max-h-0",
        )}
      >
        <nav
          className="flex flex-col gap-2 border-t border-white/10 pt-4"
          style={{ fontFeatureSettings: "'ss05' 1" }}
          aria-label="Primary"
        >
          {navItems.map(({ href, label, match }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "px-2 py-2 font-mono text-sm leading-[1.4] tracking-[-0.02em] transition-colors",
                match(pathname)
                  ? "text-white"
                  : "text-[color:var(--Neutral-500,#737373)]",
              )}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
          <a
            href={APP_DOCS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 border border-[#5747ff]/40 bg-[#5747ff]/10 px-3 py-2 font-mono text-sm text-[#c4b5ff]"
            style={{ fontFeatureSettings: "'ss05' 1" }}
            onClick={() => setMobileOpen(false)}
          >
            <BookOpen className="size-3.5" strokeWidth={1.75} />
            Docs
            <span className="rounded-sm bg-[#5747ff]/25 px-1 py-px text-[10px] font-medium uppercase tracking-wider text-[#8b7fff]">
              API
            </span>
          </a>
          <Link
            href={APP_LOGIN_URL}
            className="bg-[color:var(--Neutral-300,#404040)] px-3 py-2 text-center font-mono text-sm text-white"
            style={{ fontFeatureSettings: "'ss05' 1" }}
            onClick={() => setMobileOpen(false)}
          >
            Log In
          </Link>
          <Link
            href={APP_GET_STARTED_URL}
            className="bg-white px-3 py-2 text-center font-mono text-sm text-black"
            style={{ fontFeatureSettings: "'ss05' 1" }}
            onClick={() => setMobileOpen(false)}
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
