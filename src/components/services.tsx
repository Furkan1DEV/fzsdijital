import type { Icon } from "@phosphor-icons/react";
import {
  Robot,
  CalendarCheck,
  StackSimple,
  GlobeSimple,
  Cpu,
  Wrench,
  Check,
} from "@phosphor-icons/react/dist/ssr";
import { GradientIcon, Section, SectionHeader } from "@/components/ui";

type Service = {
  icon: Icon;
  title: string;
  description: string;
  bullets: string[];
};

const services: Service[] = [
  {
    icon: Robot,
    title: "AI Agent & Otomasyon",
    description:
      "WhatsApp, DM ve web için 7/24 çalışan ajanlar; insan yükünü azaltır, hızı artırır.",
    bullets: [
      "Randevu alma ve no-show hatırlatması",
      "Lead yakalama ve nitelendirme",
      "n8n · LangChain · OpenAI entegrasyonu",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Randevu & Booking",
    description:
      "Güzellik, dövme, gym ve berber için hazır dikey çözümler; 1–2 haftada canlıya.",
    bullets: [
      "Online randevu + SMS/WhatsApp hatırlatma",
      "Personel takvimi ve doluluk takibi",
      "Müşteri geçmişi ve sadakat akışı",
    ],
  },
  {
    icon: StackSimple,
    title: "SaaS Ürün Geliştirme",
    description:
      "Fikirden canlıya ölçeklenebilir SaaS mimarisi; büyürken sizi yavaşlatmaz.",
    bullets: [
      "Next.js + TypeScript + PostgreSQL",
      "Stripe abonelik ve faturalama",
      "Rol bazlı yetki ve admin paneli",
    ],
  },
  {
    icon: GlobeSimple,
    title: "Web & E-ticaret",
    description:
      "Hızlı, dönüşüm odaklı kurumsal siteler ve mağazalar; ilk saniye bile önemli.",
    bullets: [
      "SEO ve Core Web Vitals optimizasyonu",
      "WhatsApp/telefon ile hızlı iletişim akışı",
      "Vercel üzerinde uçtan uca dağıtım",
    ],
  },
  {
    icon: Cpu,
    title: "Embedded & IoT",
    description:
      "STM32 tabanlı cihaz, sensör ve yer istasyonu yazılımı; donanımı kokpite bağlarız.",
    bullets: [
      "Donanım–yazılım entegrasyonu",
      "Gerçek zamanlı veri görselleştirme",
      "TEKNOFEST saha deneyimi",
    ],
  },
  {
    icon: Wrench,
    title: "Bakım & Destek",
    description:
      "Yayından sonra da yanınızdayız; ürün canlı kaldığı sürece ekibiz.",
    bullets: [
      "Uptime ve hata izleme",
      "Aylık güncelleme paketleri",
      "Hızlı düzeltme taahhüdü",
    ],
  },
];

export default function Services() {
  return (
    <Section id="hizmetler">
      <SectionHeader
        eyebrow="Hizmetler"
        title={
          <>
            Uçtan uca <span className="gradient-text">yazılım ve otomasyon</span>
          </>
        }
        description="Ürün fikrinden canlıya tek ekip. Keşiften yayına kadar yazılım, otomasyon ve büyümeyi birlikte kurgularız."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <article
            key={service.title}
            data-reveal
            style={{ transitionDelay: `${index * 70}ms` }}
            className="card group flex flex-col p-6 transition-colors duration-300 hover:border-brand-2/40 hover:bg-panel-2"
          >
            <GradientIcon size="lg">
              <service.icon size={26} />
            </GradientIcon>

            <h3 className="mt-5 text-lg font-semibold text-fg">
              {service.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
              {service.description}
            </p>

            <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
              {service.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2.5 text-sm text-fg-muted"
                >
                  <Check
                    size={15}
                    weight="bold"
                    className="mt-0.5 shrink-0 text-brand-2"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
