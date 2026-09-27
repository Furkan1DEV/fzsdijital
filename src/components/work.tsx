import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { Section, SectionHeader } from "@/components/ui";

type Project = {
  word: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  cta?: string;
  repo?: boolean;
  gradient: string;
};

const projects: Project[] = [
  {
    word: "SALON",
    title: "Premium Beauty Salon SaaS",
    description:
      "Güzellik salonları için çok kiracılı randevu ve yönetim paneli: personel takvimi, doluluk analizi, müşteri kartı.",
    tags: ["Next.js", "TypeScript", "Multi-tenant"],
    href: "https://premium-beauty-salon-saas.vercel.app",
    cta: "Canlı demo",
    gradient: "from-sky-500/60 via-blue-600/30 to-transparent",
  },
  {
    word: "TATTOO",
    title: "Premium Tattoo Studio",
    description:
      "Dövme stüdyosu için online randevu, sanatçı takvimi ve portfolyo vitrini; mobil öncelikli akış.",
    tags: ["Booking", "Responsive", "Vercel"],
    href: "https://premium-tattoo-studio-plan.vercel.app",
    cta: "Canlı demo",
    gradient: "from-cyan-400/50 via-teal-500/25 to-transparent",
  },
  {
    word: "GYM",
    title: "FZS Gym Fitness",
    description:
      "Fitness salonu tanıtım sitesi: WhatsApp entegrasyonlu üyelik talepleri, admin paneli, canlı veritabanı.",
    tags: ["React 19", "Neon Postgres", "WhatsApp"],
    href: "https://fzs-gym-fitness.vercel.app/",
    cta: "Canlı demo",
    gradient: "from-indigo-500/55 via-blue-500/25 to-transparent",
  },
  {
    word: "BARBER",
    title: "Berber Randevu Sistemi",
    description:
      "Barber için slot bazlı randevu, hizmet ve fiyat listesi, hatırlatma akışı ve yönetim konsolu.",
    tags: ["Slot randevu", "Admin", "Otomasyon"],
    href: "https://premium-barber-booking-system.vercel.app",
    cta: "Canlı demo",
    gradient: "from-blue-400/55 via-sky-600/25 to-transparent",
  },
  {
    word: "TEKNOFEST",
    title: "TEKNOFEST Yer İstasyonu",
    description:
      "Roket takımı için yer istasyonu yazılımı: telemetri, görev takibi ve gerçek zamanlı veri akışı.",
    tags: ["C#", "Simülasyon", "Saha"],
    href: "https://github.com/Furkan1DEV/2025-TEKNOFEST-BOZOK-ROKET-TAKIMI-YER-STASYONU",
    cta: "GitHub",
    repo: true,
    gradient: "from-slate-400/45 via-blue-500/25 to-transparent",
  },
  {
    word: "E-TİCARET",
    title: "Akmena E-Ticaret",
    description:
      "Modern e-ticaret arayüzü: ürün katalogu, sepet ve ödeme akışı için üretime hazır temel yapı.",
    tags: ["TypeScript", "E-ticaret", "UI"],
    gradient: "from-cyan-500/50 via-indigo-600/30 to-transparent",
  },
];

export default function Work() {
  return (
    <Section id="calismalar" className="border-t border-line bg-panel/30">
      <SectionHeader
        eyebrow="Çalışmalar"
        title={
          <>
            Koddan çok, <span className="gradient-text">canlı ürünler</span>
          </>
        }
        description="Aşağıdaki projelerin çoğu yayında ve tıklayıp deneyebilirsiniz. Ekran görüntüsü değil, çalışan ürün konuşur."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            data-reveal
            style={{ transitionDelay: `${(index % 2) * 80}ms` }}
            className="card group flex flex-col overflow-hidden transition-colors duration-300 hover:border-brand-2/40"
          >
            <div
              className={`relative flex h-44 items-end justify-between overflow-hidden bg-gradient-to-br ${project.gradient} bg-panel-2`}
            >
              <div
                className="absolute inset-0 opacity-[0.18]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.6) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
                aria-hidden
              />
              <span className="relative select-none px-6 font-display text-4xl font-bold uppercase tracking-[0.12em] text-white/85 sm:text-5xl">
                {project.word}
              </span>
              {project.href ? (
                <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-black/40 text-white backdrop-blur-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                  {project.repo ? (
                    <GithubLogo size={16} />
                  ) : (
                    <ArrowUpRight size={16} />
                  )}
                </span>
              ) : null}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-fg">{project.title}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-fg-muted">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-fg-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex cursor-pointer items-center gap-1.5 self-start text-sm font-semibold text-brand-2 transition-colors hover:text-white"
                >
                  {project.cta}
                  <ArrowUpRight size={15} />
                </a>
              ) : (
                <span className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-fg-muted">
                  Demo yakında
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
