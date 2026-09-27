import {
  Lightning,
  ShieldCheck,
  Handshake,
  ChartLineUp,
} from "@phosphor-icons/react/dist/ssr";
import { GradientIcon, Section, SectionHeader } from "@/components/ui";

const stats = [
  { value: "4+", label: "Yayında olan ürün" },
  { value: "4", label: "Hazır dikey: salon · tattoo · gym · barber" },
  { value: "7/24", label: "Yanıt veren AI ajanlar" },
  { value: "1–2 hf", label: "Hedef booking kurulum süresi" },
];

const reasons = [
  {
    icon: Lightning,
    title: "Hızlı teslimat",
    description:
      "Kapsamı ilk günden netleştirir, haftalık demo ile ilerleriz. Sürpriz gecikme yok.",
  },
  {
    icon: ShieldCheck,
    title: "Üretim kalitesi",
    description:
      "TypeScript, test ve kod incelemesiyle; demo değil, uzun ömürlü üretim kodu.",
  },
  {
    icon: Handshake,
    title: "Şeffaf iletişim",
    description:
      "Net kapsam, net fiyat, düzenli rapor. Soruyorsanız aynı gün cevap alırsınız.",
  },
  {
    icon: ChartLineUp,
    title: "Ölçülebilir sonuç",
    description:
      "Randevu, lead ve gelir metriklerini kurar; yayın sonrası optimize etmeye devam ederiz.",
  },
];

export default function Proof() {
  return (
    <Section id="neden" className="border-t border-line">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Neden FZS Dijital"
            title={
              <>
                Ajans hızı, <span className="gradient-text">ekip disiplini</span>
              </>
            }
            description="Küçük ama deneyimli bir ekiple çalışırsınız: araya kimse girmez, kararlar hızlı alınır."
          />

          <div className="mt-10 space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                data-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
                className="flex gap-4"
              >
                <GradientIcon>
                  <reason.icon size={20} />
                </GradientIcon>
                <div>
                  <h3 className="font-display text-base font-semibold text-fg">
                    {reason.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 self-start sm:grid-cols-2">
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
              className="card flex flex-col justify-between p-6 transition-colors duration-300 hover:border-brand-2/40"
            >
              <p className="gradient-text font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
