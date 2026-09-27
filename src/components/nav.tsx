"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, List, X } from "@phosphor-icons/react/dist/ssr";
import { navLinks, site, socialLinks } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-line bg-ink/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <a
          href="#top"
          aria-label="FZS Dijital — ana sayfa"
          className="flex shrink-0 cursor-pointer items-center gap-2.5"
        >
          <Image
            src="/logo-mark.png"
            alt=""
            width={947}
            height={246}
            priority
            className="h-6 w-auto md:h-7"
          />
          <span className="font-display text-[12px] font-medium tracking-[0.4em] text-fg md:text-[13px]">
            DİJİTAL
          </span>
        </a>

        <nav className="hidden items-center lg:flex" aria-label="Ana menü">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer rounded-full px-4 py-2 text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#iletisim"
            className="btn btn-primary hidden h-10 cursor-pointer px-5 sm:inline-flex"
          >
            Ücretsiz Keşif
            <ArrowRight size={16} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-fg transition-colors hover:border-brand-2 hover:text-brand-2 lg:hidden"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-ink/97 backdrop-blur-xl lg:hidden"
      >
        <nav
          className="container-x flex flex-col gap-1 py-5"
          aria-label="Mobil menü"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-xl px-3 py-3 font-display text-lg text-fg transition-colors hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-3 w-full cursor-pointer"
          >
            Ücretsiz keşif görüşmesi
            <ArrowRight size={16} />
          </a>
          <div className="mt-4 flex items-center gap-4 border-t border-line px-3 pt-4">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-quiet text-xs"
              >
                {social.label}
              </a>
            ))}
            <span className="link-quiet ml-auto text-xs">{site.email}</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
