"""Generate FZS Dijital web assets from the master logo PNG."""
import os
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(os.path.dirname(ROOT), "siyah arka FZS DİJİTAL LOGO.png")
if not os.path.exists(SRC):
    SRC = os.path.join(os.path.dirname(ROOT), "FZS DİJİTAL LOGO.png")
PUBLIC = os.path.join(ROOT, "public")
APP = os.path.join(ROOT, "src", "app")
os.makedirs(PUBLIC, exist_ok=True)

img = Image.open(SRC).convert("RGB")


def transparent(im, boost=1.6, floor=24):
    """Black background -> alpha channel."""
    r, g, b = im.split()
    alpha = Image.eval(Image.merge("RGB", (r, g, b)).convert("L"), lambda v: 0 if v < floor else min(255, int(v * boost)))
    out = im.convert("RGBA")
    out.putalpha(alpha)
    return out


def bbox_of(im, thr=28):
    g = im.convert("L")
    mask = g.point(lambda v: 255 if v > thr else 0)
    return mask.getbbox()


def trim(im, thr=28):
    bb = bbox_of(im, thr)
    return im.crop(bb) if bb else im


# 1) full logo, background removed, trimmed
full = trim(transparent(img))
full.save(os.path.join(PUBLIC, "logo.png"), optimize=True)
print("logo.png", full.size)

# 2) FZS letter mark only: find horizontal ink gaps in the trimmed logo
base = trim(img)
w, h = base.size
gray = base.convert("L")
rows = []
for y in range(h):
    row = gray.crop((0, y, w, y + 1))
    rows.append(row.getextrema()[1] > 28)
segments, start = [], None
for y, ink in enumerate(rows):
    if ink and start is None:
        start = y
    elif not ink and start is not None:
        if y - start > h * 0.02:
            segments.append((start, y))
        start = None
if start is not None:
    segments.append((start, h))
print("row segments:", segments)
if segments:
    y0, y1 = segments[0]
    mark_src = base.crop((0, y0, w, y1))
    mark = trim(transparent(mark_src))
else:
    mark = full
mark.save(os.path.join(PUBLIC, "logo-mark.png"), optimize=True)
print("logo-mark.png", mark.size)


def padded(square_img, size, pad=0.14, bg=None):
    side = int(size * (1 - 2 * pad))
    inner = square_img.copy()
    inner.thumbnail((side, side), Image.LANCZOS)
    canvas = Image.new("RGBA", (size, size), bg or (0, 0, 0, 0))
    canvas.paste(inner, ((size - inner.width) // 2, (size - inner.height) // 2), inner)
    return canvas


# 3) app icon (Next.js convention: src/app/icon.png) - FZS mark on black
icon = padded(mark, 512, pad=0.12, bg=(0, 0, 0, 255))
icon.save(os.path.join(APP, "icon.png"), optimize=True)
print("icon.png", icon.size)

# 4) apple touch icon
icon.save(os.path.join(APP, "apple-icon.png"), optimize=True)

# 5) Open Graph image 1200x630
og = Image.new("RGB", (1200, 630), (5, 7, 10))
logo_on_og = full.copy()
logo_on_og.thumbnail((760, 470), Image.LANCZOS)
og.paste(logo_on_og, ((1200 - logo_on_og.width) // 2, (630 - logo_on_og.height) // 2 - 10), logo_on_og)

try:
    from PIL import ImageDraw, ImageFont
    font_path = r"C:\Windows\Fonts\seguisb.ttf"
    if os.path.exists(font_path):
        f = ImageFont.truetype(font_path, 26)
        d = ImageDraw.Draw(og)
        txt = "AI Agent'lar  ·  SaaS  ·  Embedded        fzsdijital.com"
        tw = d.textbbox((0, 0), txt, font=f)[2]
        d.text(((1200 - tw) / 2, 565), txt, font=f, fill=(120, 160, 200))
except Exception as e:  # noqa: BLE001
    print("og text skipped:", e)

og.save(os.path.join(APP, "opengraph-image.png"), optimize=True)
og.save(os.path.join(APP, "twitter-image.png"), optimize=True)
print("og image done")

# 6) share/preview card in public (for README etc.)
og.save(os.path.join(PUBLIC, "og.png"), optimize=True)

for name in ("logo.png", "logo-mark.png", "og.png"):
    p = os.path.join(PUBLIC, name)
    print(name, os.path.getsize(p) // 1024, "KB")
