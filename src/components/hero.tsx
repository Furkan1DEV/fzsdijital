import Image from "next/image";
import {
  ArrowRight,
  Check,
  Clock,
  PaperPlaneTilt,
  Lightning,
  Trophy,
  Package,
} from "@phosphor-icons/react/dist/ssr";
import { GradientIcon } from "@/components/ui";

const messages = [
  {
    side: "in",
    text: "Merhaba, yarın 15:00'e randevu alabilir miyim?",
    delay: "0.35s",
  },
  {
    side: "out",
    text: "Merhaba! Yarın 15:00 uygun. Adınızı alabilir miyim?",
    delay: "1.15s",
  },
  { side: "in", text: "Furkan – saç kesim.", delay: "1.95s" },
  {
    side: "out",
    text: "Randevunuz oluşturuldu: yarın 15:00 · Saç kesim. 24 saat önce hatırlatma göndereceğim.",
    delay: "2.75s",
  },
] as const;

const trustItems = [
  { icon: Trophy, label: "TEKNOFEST proje deneyimi" },
  { icon: Package, label: "4+ canlı ürün" },
  { icon: Lightning, label: "1–2 haftada teslim" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="grid-bg absolute inset-0" aria-hidden />
      <div
        className="glow-orb absolute -top-40 left-1/2 h-[440px] w-[820px] -translate-x-1/2"
        aria-hidden
      />
      <div
        className="glow-orb-cyan absolute right-[-10%] top-1/3 h-[380px] w-[380px]"
        aria-hidden
      />

      <div className="container-x relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <span className="eyebrow" data-reveal>
              <span className="h-1.5 w-1.5 rounded-full bg-cta pulse-dot" />
              Yazılım · AI · Embedded · SaaS
            </span>

            <h1
              className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-fg sm:text-5xl lg:text-[3.6rem]"
              data-reveal
              style={{ transitionDelay: "90ms" }}
            >
              Randevu, satış ve destek süreçlerinizi{" "}
              <span className="gradient-text text-glow">AI ajanlarına</span>{" "}
              devredin.
            </h1>

            <p
              className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg"
              data-reveal
              style={{ transitionDelay: "180ms" }}
            >
              FZS Dijital; güzellik, dövme, gym ve berber işletmeleri için booking
              sistemleri, WhatsApp agent&apos;ları ve full-stack SaaS ürünleri
              geliştirir. No-show&apos;ları azaltın, geliri artırın.
            </p>

            <div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              data-reveal
              style={{ transitionDelay: "260ms" }}
            >
              <a href="#iletisim" className="btn btn-primary btn-lg">
                Ücretsiz 15 dk keşif görüşmesi
                <ArrowRight size={18} />
              </a>
              <a href="#calismalar" className="btn btn-outline btn-lg">
                Çalışmalarımızı görün
              </a>
            </div>

            <ul
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
              data-reveal
              style={{ transitionDelay: "340ms" }}
            >
              {trustItems.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 text-sm text-fg-muted"
                >
                  <item.icon size={17} weight="fill" className="text-brand-2" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative" data-reveal style={{ transitionDelay: "220ms" }}>
            <div
              className="glow-orb absolute inset-x-6 top-10 h-64"
              aria-hidden
            />

            <div className="card relative overflow-hidden">
              <div className="flex items-center gap-3 border-b border-line bg-panel-2/70 px-5 py-4">
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-line bg-black">
                  <Image
                    src="/logo-mark.png"
                    alt=""
                    fill
                    sizes="36px"
                    className="scale-[1.35] object-center"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display text-sm font-semibold text-fg">
                    FZS Randevu Ajanı
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-fg-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Çevrimiçi · 7/24 yanıt verir
                  </p>
                </div>
                <span className="ml-auto hidden items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-[11px] text-fg-muted sm:flex">
                  <Clock size={12} />
                  otomasyon
                </span>
              </div>

              <div className="space-y-3 px-5 py-6">
                {messages.map((message) => (
                  <div
                    key={message.text}
                    className={`chat-msg flex ${message.side === "out" ? "justify-end" : "justify-start"}`}
                    style={{ animationDelay: message.delay }}
                  >
                    <p
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
                        message.side === "out"
                          ? "rounded-br-sm bg-cta font-medium text-ink"
                          : "rounded-bl-sm border border-line bg-panel-2 text-fg"
                      }`}
                    >
                      {message.text}
                    </p>
                  </div>
                ))}

                <div className="chat-msg flex items-center gap-2 pl-1" style={{ animationDelay: "3.5s" }}>
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-brand-2" />
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-brand-2" style={{ animationDelay: "0.15s" }} />
                  <span className="typing-dot h-1.5 w-1.5 rounded-full bg-brand-2" style={{ animationDelay: "0.3s" }} />
                </div>

                <div
                  className="chat-msg flex items-center gap-2 rounded-xl border border-brand-2/30 bg-brand-2/10 px-3 py-2.5 text-xs text-fg"
                  style={{ animationDelay: "4.1s" }}
                >
                  <Check size={15} weight="bold" className="shrink-0 text-brand-2" />
                  Takvime eklendi · SMS hatırlatması kuruldu
                </div>
              </div>

              <div className="flex items-center gap-3 border-t border-line px-5 py-4">
                <div className="h-9 flex-1 rounded-full border border-line bg-panel-2 px-4 py-2 text-sm text-fg-muted">
                  Mesaj yazın…
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cta text-ink">
                  <PaperPlaneTilt size={16} weight="fill" />
                </span>
              </div>
            </div>

            <div className="card absolute -bottom-14 -left-3 z-10 hidden items-center gap-3 px-4 py-3 sm:flex lg:-left-8">
              <GradientIcon size="md">
                <Lightning size={20} weight="fill" />
              </GradientIcon>
              <div>
                <p className="text-sm font-semibold text-fg">%100 otomatik akış</p>
                <p className="text-xs text-fg-muted">Randevu + hatırlatma + CRM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
