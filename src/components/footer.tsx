import Image from "next/image";
import type { Icon } from "@phosphor-icons/react";
import {
  GithubLogo,
  InstagramLogo,
  XLogo,
  LinkedinLogo,
  ShoppingCart,
} from "@phosphor-icons/react/dist/ssr";
import { navLinks, site, socialLinks } from "@/lib/site";

const iconMap: Record<string, Icon> = {
  github: GithubLogo,
  instagram: InstagramLogo,
  x: XLogo,
  linkedin: LinkedinLogo,
  fiverr: ShoppingCart,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-panel/50">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-mark.png"
                alt=""
                width={947}
                height={246}
                className="h-7 w-auto"
              />
              <span className="font-display text-[13px] font-medium tracking-[0.4em] text-fg">
                DİJİTAL
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-muted">
              AI agent&apos;lar, randevu/booking sistemleri ve full-stack SaaS
              ürünleri geliştiren yazılım stüdyosu. Türkiye&apos;den global
              işler.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.icon] ?? GithubLogo;
                return (
                  <a
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-fg-muted transition-colors duration-200 hover:border-brand-2 hover:text-brand-2"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Sayfa bağlantıları">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-fg">
              Sayfa
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="link-quiet text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#iletisim" className="link-quiet text-sm">
                  İletişim
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-fg">
              İletişim
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="link-quiet break-all"
                >
                  {site.email}
                </a>
              </li>
              <li className="text-fg-muted">{site.workingHours}</li>
              <li className="text-fg-muted">{site.location}</li>
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-quiet"
                >
                  github.com/Furkan1DEV
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-xs text-fg-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. Tüm hakları saklıdır.
          </p>
          <p className="uppercase tracking-[0.2em]">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
