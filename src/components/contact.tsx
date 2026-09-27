import {
  ArrowRight,
  EnvelopeSimple,
  Clock,
  Buildings,
  GithubLogo,
  CalendarCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui";
import { site } from "@/lib/site";

const mailHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Ücretsiz keşif görüşmesi — FZS Dijital",
)}`;

export default function Contact() {
  return (
    <Section id="iletisim" className="border-t border-line">
      <div className="card relative overflow-hidden">
        <div className="grid-bg absolute inset-0 opacity-70" aria-hidden />
        <div
          className="glow-orb absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2"
          aria-hidden
        />

        <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:p-16">
          <div>
            <span className="eyebrow" data-reveal>
              İletişim
            </span>
            <h2
              className="mt-5 text-3xl font-semibold tracking-tight text-fg sm:text-4xl lg:text-5xl"
              data-reveal
              style={{ transitionDelay: "80ms" }}
            >
              15 dakikada{" "}
              <span className="gradient-text">kapsamı netleştirelim</span>
            </h2>
            <p
              className="mt-5 max-w-xl text-base leading-relaxed text-fg-muted"
              data-reveal
              style={{ transitionDelay: "150ms" }}
            >
              Ne istediğinizi anlatın; size uygun çözümü, süreyi ve bütçe
              aralığını görüşmeden sonra yazılı olarak iletelim. İlk görüşme
              ücretsizdir.
            </p>

            <div
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              data-reveal
              style={{ transitionDelay: "220ms" }}
            >
              {site.calendly ? (
                <a
                  href={site.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <CalendarCheck size={18} />
                  Randevu oluştur
                </a>
              ) : null}
              <a href={mailHref} className="btn btn-lg btn-outline">
                <EnvelopeSimple size={18} />
                {site.email}
              </a>
              {site.whatsapp ? (
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-lg btn-outline"
                >
                  WhatsApp&apos;tan yazın
                </a>
              ) : null}
            </div>
          </div>

          <div
            className="flex flex-col justify-center gap-5 border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"
            data-reveal
            style={{ transitionDelay: "260ms" }}
          >
            <div className="flex items-start gap-4">
              <EnvelopeSimple size={20} className="mt-0.5 shrink-0 text-brand-2" />
              <div>
                <p className="text-sm font-semibold text-fg">E-posta</p>
                <a href={mailHref} className="link-quiet text-sm">
                  {site.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock size={20} className="mt-0.5 shrink-0 text-brand-2" />
              <div>
                <p className="text-sm font-semibold text-fg">Çalışma saatleri</p>
                <p className="text-sm text-fg-muted">{site.workingHours}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Buildings size={20} className="mt-0.5 shrink-0 text-brand-2" />
              <div>
                <p className="text-sm font-semibold text-fg">Konum</p>
                <p className="text-sm text-fg-muted">{site.location}</p>
              </div>
            </div>

            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline mt-2 w-full"
            >
              <GithubLogo size={18} />
              GitHub&apos;da inceleyin
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
