import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { getBaseUrl, site, socialLinks } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "FZS Dijital — AI Agent'lar, SaaS ve Otomasyon Stüdyosu",
    template: "%s | FZS Dijital",
  },
  description:
    "FZS Dijital; güzellik, dövme, gym ve berber işletmeleri için randevu/booking sistemleri, WhatsApp AI agent'ları ve full-stack SaaS ürünleri geliştirir. Next.js, TypeScript, Stripe, n8n.",
  keywords: [
    "FZS Dijital",
    "AI agent",
    "yapay zeka ajanı",
    "randevu sistemi",
    "booking sistemi",
    "SaaS geliştirme",
    "otomasyon",
    "Next.js geliştirici",
    "yazılım ajansı",
    "web tasarım",
    "WhatsApp bot",
    "freelance yazılımcı Türkiye",
  ],
  applicationName: site.name,
  authors: [{ name: site.name, url: baseUrl }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: baseUrl,
    siteName: site.name,
    title: "FZS Dijital — AI Agent'lar, SaaS ve Otomasyon Stüdyosu",
    description:
      "Randevu, satış ve destek süreçlerinizi AI ajanlarına devredin. Booking sistemleri, custom AI agent ve SaaS ürünleri.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FZS Dijital — AI Agent'lar & SaaS",
    description:
      "Booking sistemleri, WhatsApp AI agent'ları ve full-stack SaaS ürünleri geliştiriyoruz.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05070a",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  image: `${baseUrl}/og.png`,
  email: `mailto:${site.email}`,
  description: site.shortBio,
  areaServed: "TR",
  knowsLanguage: ["tr", "en"],
  sameAs: socialLinks.map((s) => s.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${dmSans.variable} ${spaceGrotesk.variable} h-full`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("has-js");`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cta focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
        >
          İçeriğe atla
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
