# WelcomeToMyArtbyo3

Original digital illustration portfolio and artbook collection by **o3**.

Every illustration in this archive was created exclusively using **Paint Tool SAI** and **Paint Tool SAI 2**, spanning works from 2022 to 2026.

---

## Production Setup & Specifications

- **Software**:
  - Systemax Paint Tool SAI
  - Paint Tool SAI Ver.2
  - *(No other digital painting programs used)*

- **Hardware & Tablets**:
  1. **XP-Pen Star G640S** *(First tablet)*
  2. **Wacom Intuos S**
  3. **XP-Pen Deco Pro M**

---

## Features

- **59 Original Works**: Sequenced chronologically across 31 spreads (62 pages) with verified resolution, file size, and creation date metadata.
- **Maximized Viewport**: High-impact editorial two-page spread viewer designed to allocate maximum screen area directly to artwork.
- **Authentic Pixel Clarity**: Zero artificial borders, fake frame overlays, or resampled cropping. Artwork renders in native fidelity with full `contain` fit.
- **Two-Page Spread Engine**:
  - Desktop: Full Verso/Recto open book experience with central gutter binding and folio numbering.
  - Mobile: Seamless responsive page-by-page reader.
  - Keyboard Navigation: Arrow keys (`←`, `→`) and progress indicator.
- **Interactive Contents (INDEX)**:
  - Era shortcut chapters.
  - Visual thumbnail grid for all 59 works with direct page jumping.
- **Fullscreen Lightbox**: One-click zoom inspector showing high-resolution art, dimensions, creation timestamp, and file size.
- **Pure Web Standards**: Zero external runtime dependencies, fast loading, fully static, and ready for GitHub Pages.

---

## Local Development

Start a local HTTP server to view the artbook:

```powershell
python -m http.server 8000
# Then open: http://localhost:8000
```

or with Node:

```powershell
npx serve .
```

---

## Artwork Optimization & Privacy Tool

The repository includes a privacy-preserving artwork optimizer in [`tools/optimize-art.py`](tools/optimize-art.py):

- **100% Privacy Scrubbing**: Strips all camera/tablet serials, local OS paths, creation timestamps, and EXIF/XMP blocks so no personal information is ever committed to GitHub.
- **Pristine WebP Conversion**: Converts colossal master files into pristine WebP images, cutting bandwidth by ~95% while retaining maximum visual clarity.
- **Automatic Thumbnails**: Generates lightweight thumbnails in `art/<year>/thumbs/` for instant Index loading.
- **Automatic Manifest Updates**: Automatically keeps [`data/gallery.json`](data/gallery.json) synchronized with optimized paths.

### Commands:

```powershell
# Optimize all artworks and update gallery.json
python tools/optimize-art.py

# Dry-run audit (inspect privacy tags and size savings without modifying files)
python tools/optimize-art.py --dry-run

# Optimize a specific year only
python tools/optimize-art.py --year 2024

# Custom quality (1-100) or custom max dimension
python tools/optimize-art.py --quality 95 --max-dim 3840
```

---

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings -> Pages**.
3. **Source**: *Deploy from a branch* -> Branch: `main` (or `master`) -> Folder: `/ (root)`.
4. Click **Save**.
