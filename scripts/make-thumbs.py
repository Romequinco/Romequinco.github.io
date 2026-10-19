"""Make light copies of every image for the project covers.

public/img/<path>.webp  ->  public/img/t/<path>.webp  (longest side at most 900 px)
Run it after adding or replacing images:  python scripts/make-thumbs.py
"""
from pathlib import Path

from PIL import Image

root = Path(__file__).resolve().parent.parent / 'public' / 'img'
out_root = root / 't'
made = 0
for src in root.rglob('*.webp'):
    if out_root in src.parents:
        continue
    dst = out_root / src.relative_to(root)
    if dst.exists() and dst.stat().st_mtime >= src.stat().st_mtime:
        continue
    dst.parent.mkdir(parents=True, exist_ok=True)
    im = Image.open(src)
    im.thumbnail((900, 900))
    im.save(dst, 'WEBP', quality=78, method=6)
    made += 1
print(f'{made} thumbnails written to {out_root}')
