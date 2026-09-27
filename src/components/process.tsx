import {
  MagnifyingGlass,
  MagicWand,
  Gear,
  RocketLaunch,
} from "@phosphor-icons/react/dist/ssr";
import { Section, SectionHeader } from "@/components/ui";

const steps = [
  {
    number: "01",
    icon: MagnifyingGlass,
    title: "Keşif & Audit",
    duration: "1–3 gün",
    description:
      "Ücretsiz 15 dakikalık görüşmeyle süreçlerinizi, hedef kitlenizi ve rakiplerinizi analiz ederiz.",
  },
  {
    number: "02",
    icon: MagicWand,
    title: "Tasarım & Teklif",
    duration: "2–5 gün",
    description:
      "Akış şeması, ekran tasarımları ve sabit fiyatlı teklif. Onaylamadan kod yazmaya başlamayız.",
  },
  {
    number: "03",
    icon: Gear,
    title: "Geliştirme",
    duration: "1–3 hafta",
    description:
      "Haftalık demolar, test ve geri bildirimle ilerleyen üretim seviyesinde kod.",
  },
  {
    number: "04",
    icon: RocketLaunch,
    title: "Yayın & Büyüme",
    duration: "Sürekli",
    description:
      "Vercel'e deploy, ekip eğitimi, ölçüm ve iyileştirme. İsterseniz aylık bakım planı.",
  },
];

export default function Process() {
  return (
    <Section id="surec">
      <SectionHeader
        eyebrow="Süreç"
        title={
          <>
            Şeffaf, <span className="gradient-text">tahmin edilebilir</span>{" "}
            işleyiş
          </>
        }
        description="Ne zaman ne olacağını bilirsiniz. Her aşamada görünür çıktı ve net geri bildirim."
      />

      <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li
            key={step.number}
            data-reveal
            style={{ transitionDelay: `${index * 80}ms` }}
            className="card relative flex flex-col overflow-hidden p-6"
          >
            <div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-2/70 via-brand/40 to-transparent"
              aria-hidden
            />
            <div className="flex items-center justify-between">
              <span className="font-display text-sm font-semibold tracking-[0.2em] text-brand-2">
                {step.number}
              </span>
              <span className="rounded-full border border-line px-3 py-1 text-[11px] font-medium text-fg-muted">
                {step.duration}
              </span>
            </div>

            <step.icon size={28} className="mt-6 text-fg" />

            <h3 className="mt-4 text-lg font-semibold text-fg">
              {step.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-fg-muted">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
