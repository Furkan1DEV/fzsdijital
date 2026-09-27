import { Check, Sparkle } from "@phosphor-icons/react/dist/ssr";
import { Section, SectionHeader } from "@/components/ui";

const packages = [
  {
    name: "Başlangıç",
    pitch: "Kurumsal site veya landing page ile hızlı ve net bir başlangıç.",
    featured: false,
    features: [
      "1–5 sayfa özel tasarım",
      "Mobil uyumlu + SEO temelleri",
      "WhatsApp ve form ile iletişim",
      "Google Analytics kurulumu",
      "1 tur revizyon",
    ],
  },
  {
    name: "Booking + AI Agent",
    pitch:
      "Hazır dikey kurulum: randevu paneli, hatırlatmalar ve 7/24 yanıt veren ajan.",
    featured: true,
    features: [
      "Salon · dövme · gym · berber dikeyi",
      "Online randevu + admin panel",
      "WhatsApp/SMS hatırlatma akışı",
      "AI ajan ile 7/24 yanıt",
      "1–2 hafta içinde teslim",
    ],
  },
  {
    name: "Custom SaaS / Agent",
    pitch: "Sıfırdan ürün geliştirme; fikrinizi ölçeklenebilir bir yapıya taşıyoruz.",
    featured: false,
    features: [
      "Multi-tenant mimari ve roller",
      "Stripe ödeme ve faturalama",
      "Dashboard + API entegrasyonları",
      "Özel AI agent / otomasyon",
      "Aylık bakım opsiyonu",
    ],
  },
];

export default function Packages() {
  return (
    <Section id="paketler" className="border-t border-line bg-panel/30">
      <SectionHeader
        align="center"
        eyebrow="Paketler"
        title={
          <>
            İhtiyacınıza göre <span className="gradient-text">net kapsam</span>
          </>
        }
        description="Fiyat, kapsam netleştikten sonra sabitlenir. Keşif görüşmesi ücretsizdir; sürpriz maliyet çıkmaz."
      />

      <div className="mt-14 grid items-stretch gap-5 md:grid-cols-3">
        {packages.map((pkg, index) => (
          <div
            key={pkg.name}
            data-reveal
            style={{ transitionDelay: `${index * 80}ms` }}
            className={`card relative flex flex-col p-7 ${
              pkg.featured
                ? "border-brand-2/50 bg-gradient-to-b from-brand/12 via-panel to-panel shadow-[0_0_60px_-25px_rgba(34,228,255,0.5)]"
                : ""
            }`}
          >
            {pkg.featured ? (
              <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-cta px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                <Sparkle size={12} weight="fill" />
                Popüler
              </span>
            ) : null}

            <h3 className="font-display text-xl font-semibold text-fg">
              {pkg.name}
            </h3>
            <p className="mt-3 min-h-[3.5rem] text-sm leading-relaxed text-fg-muted">
              {pkg.pitch}
            </p>

            <p className="mt-5 border-t border-line pt-5 text-sm font-semibold text-fg">
              Proje bazlı teklif
              <span className="ml-2 text-xs font-normal text-fg-muted">
                · kapsam sonrası sabit fiyat
              </span>
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {pkg.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-fg-muted"
                >
                  <Check
                    size={15}
                    weight="bold"
                    className="mt-0.5 shrink-0 text-brand-2"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#iletisim"
              className={`btn mt-8 w-full ${pkg.featured ? "btn-primary" : "btn-outline"}`}
            >
              Teklif alın
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
