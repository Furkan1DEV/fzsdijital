export const site = {
  name: "FZS Dijital",
  legalName: "FZS Dijital",
  tagline: "Yazılım · AI · Embedded · SaaS",
  shortBio: "AI Agent, randevu/booking sistemi ve full-stack SaaS geliştiren yazılım stüdyosu.",
  domain: "fzsdijital.com",
  email: "info@fzsdijital.com",
  /** Boş bırakılan alanlar sitede gizlenir. Alan adın açıldıkça buraya gir. */
  whatsapp: "", // ör: "https://wa.me/905xxxxxxxxx"
  calendly: "", // ör: "https://calendly.com/fzsdijital/15min"
  github: "https://github.com/Furkan1DEV",
  instagram: "https://www.instagram.com/fzsdijital",
  x: "https://x.com/fzsdijital",
  linkedin: "https://www.linkedin.com/company/fzsdijital",
  fiverr: "",
  workingHours: "Pzt–Cmt · 09:00–19:00 (GMT+3)",
  location: "Türkiye · Uzaktan çalışırız",
} as const;

export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export const navLinks = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Çalışmalar", href: "#calismalar" },
  { label: "Süreç", href: "#surec" },
  { label: "Paketler", href: "#paketler" },
  { label: "SSS", href: "#sss" },
] as const;

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "instagram" | "x" | "linkedin" | "fiverr";
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: site.github, icon: "github" },
  { label: "Instagram", href: site.instagram, icon: "instagram" },
  { label: "X", href: site.x, icon: "x" },
  { label: "LinkedIn", href: site.linkedin, icon: "linkedin" },
  ...(site.fiverr ? [{ label: "Fiverr", href: site.fiverr, icon: "fiverr" as const }] : []),
];
