# FZS Dijital — Kurumsal Web Sitesi

**FZS Dijital** markası için tek sayfalık, dönüşüm odaklı kurumsal/landing sitesi.
Next.js 16 (App Router) + Tailwind CSS v4 + Phosphor Icons, Vercel üzerinde yayınlanır.

## Kurulum

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # üretim derlemesi
npm run start   # üretim sunucusu
npm run lint    # ESLint
```

## Tasarım Sistemi

Logo'dan türetilen token'lar `src/app/globals.css` içinde (`@theme inline`):

| Token | Değer | Kullanım |
|---|---|---|
| `--color-ink` | `#05070a` | Sayfa arka planı |
| `--color-panel` | `#0a0f16` | Kart yüzeyi |
| `--color-fg` | `#e9f1ff` | Başlık/metin |
| `--color-fg-muted` | `#97a7bd` | İkincil metin |
| `--color-brand` | `#1e8cff` | Mavi (logodaki Z) |
| `--color-brand-2` / `--color-cta` | `#22e4ff` | Turkuaz vurgu / CTA |
| Font başlık | Space Grotesk | `--font-space-grotesk` |
| Font gövde | DM Sans | `--font-dm-sans` |

İkonlar: `@phosphor-icons/react` (`/dist/ssr` girişi, tek stil: outline).

## İçerik Yönetimi

Tüm bağlantılar ve iletişim bilgileri tek dosyada: **`src/lib/site.ts`**

- `email`, `whatsapp`, `calendly` → boş bırakılan alanlar sitede gizlenir
- `github`, `instagram`, `x`, `linkedin`, `fiverr`
- `workingHours`, `location`

Bölüm içerikleri (hizmetler, projeler, süreç, paketler, SSS) ilgili
`src/components/*.tsx` dosyalarının içindeki sabit dizilerde tutulur.

## Görseller / Logo

Kaynak logo: `../FZS DİJİTAL LOGO.png` (repo dışı, Masaüstü/5-Development).

```bash
python scripts/make-assets.py
```

Üretilenler:

- `public/logo.png` — tam logo, şeffaf zemin
- `public/logo-mark.png` — sadece "FZS" amblemi (nav + footer + sohbet kartı)
- `src/app/icon.png`, `src/app/apple-icon.png`
- `src/app/opengraph-image.png`, `src/app/twitter-image.png` (1200×630)
- `public/og.png` — README/sosyal medya için

## Bölüm Yapısı

`src/app/page.tsx` sırasıyla: Hero → Teknoloji marquee → Hizmetler →
Çalışmalar → Süreç → Neden FZS → Paketler → SSS → İletişim → Footer

- Scroll animasyonu: `data-reveal` + `RevealObserver` (IntersectionObserver,
  `prefers-reduced-motion` destekli, JS yoksa içerik görünür kalır)
- SEO: `metadata` + `ProfessionalService` ve `FAQPage` JSON-LD
- Erişilebilirlik: skip-link, `lang="tr"`, focus-visible, `<details>` SSS

## Yayın (Vercel)

```bash
npm i -g vercel
vercel login
vercel --prod
```

Veya GitHub repo'yu Vercel'e bağla (otomatik deploy).

Alan adı bağlandıktan sonra production URL'i sabitlemek için Vercel'de:

```
NEXT_PUBLIC_SITE_URL=https://fzsdijital.com
```

`metadataBase` ve OG görselleri bu değerden üretilir; girilmezse Vercel'in
`VERCEL_PROJECT_PRODUCTION_URL` değeri kullanılır.
