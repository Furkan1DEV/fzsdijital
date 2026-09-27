import { Plus, Minus } from "@phosphor-icons/react/dist/ssr";
import { Section, SectionHeader } from "@/components/ui";

const faqs = [
  {
    question: "Bir proje ne kadar sürer?",
    answer:
      "Kurumsal site/landing 3–7 gün, Booking + AI agent kurulumu 1–2 hafta, özel SaaS ürünleri kapsamına göre 3–6 hafta sürer. Keşif görüşmesinden sonra net tarih ve fiyat veririz.",
  },
  {
    question: "Fiyatlandırma nasıl işliyor?",
    answer:
      "Önce kapsamı birlikte belirleriz, ardından sabit fiyatlı teklif çıkarız. Ödeme kademelidir (başlangıç + teslim) ve faturalandırılır. Geliştirme boyunca ek ücret çıkmaz.",
  },
  {
    question: "Mevcut projemi geliştirebilir misiniz?",
    answer:
      "Evet. Önce ücretsiz bir teknik audit yapıyor, kritik sorunları tespit edip önceliklendiriyoruz; ardından modüller hâlinde iyileştirmeye geçiyoruz.",
  },
  {
    question: "AI ajan tam olarak ne yapıyor?",
    answer:
      "WhatsApp, DM ve web sitesinde randevu alır, sık sorulan soruları yanıtlar, hatırlatma gönderir ve potansiyel müşterileri kaydeder. Talep ederseniz konuşma noktada size aktarılır; kontrol her zaman sizde kalır.",
  },
  {
    question: "Yayından sonra destek var mı?",
    answer:
      "Evet. Aylık bakım paketleriyle uptime izleme, güvenlik/güncelleme takibi ve küçük geliştirmeleri üstleniyoruz. Acil durumlarda öncelikli düzeltme sağlıyoruz.",
  },
  {
    question: "Hangi teknolojileri kullanıyorsunuz?",
    answer:
      "Next.js, TypeScript, PostgreSQL (Neon), Stripe, n8n, LangChain/OpenAI ve Vercel. Donanım tarafında STM32 ile gömülü yazılım geliştiriyoruz.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function Faq() {
  return (
    <Section id="sss">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            eyebrow="SSS"
            title={
              <>
                Merak edilenler, <span className="gradient-text">açıkça</span>
              </>
            }
            description="Aradığınız cevap yoksa e-posta atın; aynı gün dönüş yaparız."
          />
          <a href="#iletisim" className="btn btn-outline mt-8">
            Bize sorun
          </a>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="faq-item card px-6 py-5 transition-colors duration-300 hover:border-brand-2/35"
              data-reveal
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-fg">
                {faq.question}
                <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-brand-2">
                  <Plus size={16} className="icon-plus absolute" />
                  <Minus size={16} className="icon-minus absolute" />
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </Section>
  );
}
