/* ==========================================================================
   WelcomeToMyArtbyo3
   Complete 59-Work Editorial Two-Page Artbook Engine
   ========================================================================== */

const $ = (id) => document.getElementById(id);

let allWorks = [];
const worksMap = {};
let pages = [];
let spreads = [];

// State
let spread = 0;
let mobilePage = 0;

const book = $("book");
const left = $("left");
const right = $("right");
const prevBtn = $("prev");
const nextBtn = $("next");
const prog = $("prog");
const progressBar = prog.parentElement;
const countEl = $("count");

// Helper to render an artwork container with full clarity
function renderArt(work, opt = {}) {
  if (!work) return `<div class="art" style="${opt.style || 'flex:1'}"></div>`;
  const style = opt.style || "flex:1";

  return `
    <div class="art" style="${style}" data-id="${work.id}">
      <img src="${work.src}" alt="${work.title}" class="art-img" data-work-id="${work.id}" loading="lazy" />
      <div class="art-controls">
        <button type="button" class="art-btn btn-zoom" data-id="${work.id}">ZOOM</button>
      </div>
    </div>
  `;
}

// Generate the complete sequential artbook pages from all 59 works
function buildArtbook() {
  pages = [];

  // Page 01: Cover / Title Page
  pages.push(`
    <div class="page-inner" style="justify-content:space-between">
      <div></div>
      <div>
        <h1 class="hero-title">WELCOME<br>TO MY ART<br>BY O3<span class="accent-dot">.</span></h1>
      </div>
      <div class="page-footer">
        <div class="page-footer-main">
          <span class="num">01</span>
          <span class="micro" style="color:var(--muted)">${allWorks.length} ORIGINAL WORKS · 2022–2026</span>
        </div>
        <div class="page-footer-meta">
          <span class="micro">PAINT TOOL SAI &amp; SAI 2</span>
        </div>
      </div>
    </div>
  `);

  // Pages 02..N: All artworks in chronological sequence
  allWorks.forEach((work, idx) => {
    const pageNum = idx + 2;
    const numStr = String(pageNum).padStart(2, "0");
    const isLeftPage = ((idx + 1) % 2 === 0);

    const footer = isLeftPage
      ? `
        <div class="page-footer">
          <div class="page-footer-main">
            <span class="num">${numStr}</span>
            <span class="caption" title="${work.title}">${work.title}</span>
          </div>
          <div class="page-footer-meta">
            <span class="micro res">${work.resolution || ''}</span>
          </div>
        </div>
      `
      : `
        <div class="page-footer">
          <div class="page-footer-main">
            <span class="caption" title="${work.title}">${work.title}</span>
          </div>
          <div class="page-footer-meta">
            <span class="micro res">${work.resolution || ''}</span>
            <span class="num">${numStr}</span>
          </div>
        </div>
      `;

    pages.push(`
      <div class="page-inner" style="justify-content:space-between">
        <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px">
          <span class="micro eyebrow">${work.year}</span>
          <span class="micro" style="color:var(--muted)">${work.date || ''}</span>
        </div>
        <div class="art" style="flex:1">
          <img src="${work.src}" alt="${work.title}" class="art-img" data-work-id="${work.id}" loading="lazy" />
          <div class="art-controls">
            <button type="button" class="art-btn btn-zoom" data-id="${work.id}">ZOOM</button>
          </div>
        </div>
        ${footer}
      </div>
    `);
  });

  const posterPage = allWorks.length + 2;
  const colophonPage = posterPage + 1;

  // Year-End Poster / Review
  const summaryWork = worksMap["art-of-2023-by-o3"] || allWorks[allWorks.length - 1];
  pages.push(`
    <div class="page-inner" style="padding:0">
      ${renderArt(summaryWork, { style: "flex:1" })}
      <span class="num num-overlay">${String(posterPage).padStart(2, "0")}</span>
    </div>
  `);

  // Colophon & Production Notes
  pages.push(`
    <div class="page-inner" style="justify-content:space-between;background:#1e1f26;color:#f5f3ee;padding:clamp(18px,2.4vw,32px)">
      <div style="display:flex;justify-content:space-between;align-items:baseline;border-bottom:1px solid rgba(255,255,255,0.1);padding-bottom:12px">
        <span class="micro" style="color:#aaa;letter-spacing:0.06em">WELCOMETOMYARTBYO3</span>
        <span class="micro" style="color:var(--accent);letter-spacing:0.06em">${allWorks.length} WORKS · 2022–2026</span>
      </div>

      <div style="margin:auto 0;padding:12px 0">
        <div style="font-size:clamp(32px,4.6vw,68px);font-weight:600;line-height:.9;letter-spacing:-.06em">
          WELCOME TO<br>MY ART BY O3<span class="accent-dot">.</span>
        </div>
        <p style="font-size:12.5px;line-height:1.75;color:#b2b5c0;max-width:440px;margin-top:16px">
          Original digital illustration collection by o3. Every piece in this collection was created using Paint Tool SAI and Paint Tool SAI 2, with no other programs used.
        </p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(170px, 1fr));gap:24px;margin-top:28px;border-top:1px solid rgba(255,255,255,0.1);padding-top:20px">
          <div>
            <div class="micro" style="color:var(--accent);margin-bottom:8px;font-weight:600">SOFTWARE</div>
            <div style="font-size:12px;line-height:1.7;color:#d8dbe4;font-family:var(--font-mono)">
              Paint Tool SAI<br>
              Paint Tool SAI 2<br>
              <span style="color:#888b96;font-size:10px">(Exclusive software used)</span>
            </div>
          </div>
          <div>
            <div class="micro" style="color:var(--accent);margin-bottom:8px;font-weight:600">TABLETS &amp; HARDWARE</div>
            <div style="font-size:12px;line-height:1.7;color:#d8dbe4;font-family:var(--font-mono)">
              1. XP-Pen Star G640S <span style="color:#888b96;font-size:10px">(First tablet)</span><br>
              2. Wacom Intuos S<br>
              3. XP-Pen Deco Pro M
            </div>
          </div>
        </div>
      </div>

      <div class="page-footer" style="border-top:1px solid rgba(255,255,255,0.1);padding-top:12px">
        <div class="page-footer-main">
          <span class="micro" style="color:#777">PAINT TOOL SAI &amp; SAI 2 · XP-PEN / WACOM · ALL WORKS BY O3</span>
        </div>
        <div class="page-footer-meta">
          <span class="num" style="color:#888">${String(colophonPage).padStart(2, "0")}</span>
        </div>
      </div>
    </div>
  `);

  // Ensure even page count for spread consistency
  if (pages.length % 2 === 1) {
    pages.push(`
      <div class="page-inner" style="justify-content:center;align-items:center;background:#15161c;color:#666">
        <div class="wordmark" style="color:#555">WelcomeToMyArtbyo3<span class="accent-dot">.</span></div>
      </div>
    `);
  }

  // Group pages into 2-page spreads
  spreads = [];
  for (let i = 0; i < pages.length; i += 2) {
    spreads.push([pages[i], pages[i + 1] || ""]);
  }
}

// Render Current Spread
function render() {
  if (!spreads.length) return;
  const isNarrow = matchMedia("(max-width: 760px)").matches;
  const totalSpreads = spreads.length;
  const totalPages = pages.length;

  left.innerHTML = spreads[spread][0];
  right.innerHTML = spreads[spread][1];

  left.className = "page left" + (isNarrow && mobilePage === 0 ? " mobile-current" : "");
  right.className = "page right" + (isNarrow && mobilePage === 1 ? " mobile-current" : "");

  // Disabled states
  prevBtn.disabled = spread === 0 && (!isNarrow || mobilePage === 0);
  nextBtn.disabled = spread === totalSpreads - 1 && (!isNarrow || mobilePage === 1);

  // Progress Bar
  const currentStep = spread + (isNarrow ? mobilePage * 0.5 : 0) + 1;
  prog.style.width = (currentStep / totalSpreads) * 100 + "%";

  // Counter
  if (isNarrow) {
    countEl.textContent = `${String(spread * 2 + mobilePage + 1).padStart(2, "0")} / ${String(totalPages).padStart(2, "0")}`;
  } else {
    const p1 = String(spread * 2 + 1).padStart(2, "0");
    const p2 = String(Math.min(totalPages, spread * 2 + 2)).padStart(2, "0");
    countEl.textContent = `${p1}–${p2} / ${String(totalPages).padStart(2, "0")}`;
  }

  // Animation trigger
  book.classList.remove("transition");
  void book.offsetWidth;
  book.classList.add("transition");

  // Wire clicks
  wirePageInteractions();
}

function move(dir) {
  const isNarrow = matchMedia("(max-width: 760px)").matches;
  if (isNarrow) {
    if (dir > 0) {
      if (mobilePage === 0) {
        mobilePage = 1;
      } else if (spread < spreads.length - 1) {
        spread++;
        mobilePage = 0;
      }
    } else {
      if (mobilePage === 1) {
        mobilePage = 0;
      } else if (spread > 0) {
        spread--;
        mobilePage = 1;
      }
    }
  } else {
    spread = Math.max(0, Math.min(spreads.length - 1, spread + dir));
    mobilePage = 0;
  }
  render();
}

function jumpToPage(targetPageNum) {
  const targetSpread = Math.floor((targetPageNum - 1) / 2);
  spread = Math.max(0, Math.min(spreads.length - 1, targetSpread));
  mobilePage = (targetPageNum - 1) % 2;
  render();
}

function wirePageInteractions() {
  document.querySelectorAll(".btn-zoom").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      openLightbox(id);
    });
  });

  document.querySelectorAll(".art").forEach((artEl) => {
    artEl.addEventListener("click", () => {
      const id = artEl.getAttribute("data-id");
      if (id) openLightbox(id);
    });
  });
}

/* --------------------------------------------------------------------------
   Progress Bar Scrubber (Click anywhere to jump)
   -------------------------------------------------------------------------- */
progressBar.addEventListener("click", (e) => {
  const rect = progressBar.getBoundingClientRect();
  const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  const targetSpread = Math.round(ratio * (spreads.length - 1));
  spread = targetSpread;
  mobilePage = 0;
  render();
});

/* --------------------------------------------------------------------------
   Lightbox / Fullscreen Inspector
   -------------------------------------------------------------------------- */
const lightbox = $("lightbox");
const lbImg = $("lbImg");
const lbTitle = $("lbTitle");
const lbDetails = $("lbDetails");
const lbClose = $("lbClose");

function openLightbox(workId) {
  const work = worksMap[workId];
  if (!work) return;

  lbTitle.textContent = work.title;
  const metaParts = [
    work.year,
    work.date,
    work.resolution,
    work.sizeMB ? `${work.sizeMB} MB` : "",
    "Paint Tool SAI"
  ].filter(Boolean);
  lbDetails.textContent = metaParts.join(" · ");
  lbImg.src = work.src;
  lightbox.classList.add("open");
}

function closeLightbox() {
  lightbox.classList.remove("open");
}

lbClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target === $("lbBody")) {
    closeLightbox();
  }
});

/* --------------------------------------------------------------------------
   Table of Contents / Chapter Menu & All 59 Works Grid
   -------------------------------------------------------------------------- */
const menu = $("menu");
const indexBtn = $("indexBtn");
const closeMenuBtn = $("close");
const chaptersContainer = $("chapters");
const worksGridContainer = $("worksGrid");
const tabChapters = $("tabChapters");
const tabAllWorks = $("tabAllWorks");

function toggleMenu(open) {
  menu.classList.toggle("open", open);
}

indexBtn.addEventListener("click", () => toggleMenu(true));
closeMenuBtn.addEventListener("click", () => toggleMenu(false));
menu.addEventListener("click", (e) => {
  if (e.target === menu) toggleMenu(false);
});

// Tab Switcher inside Contents Panel
tabChapters.addEventListener("click", () => {
  tabChapters.classList.add("is-active");
  tabAllWorks.classList.remove("is-active");
  chaptersContainer.style.display = "flex";
  worksGridContainer.style.display = "none";
});

tabAllWorks.addEventListener("click", () => {
  tabAllWorks.classList.add("is-active");
  tabChapters.classList.remove("is-active");
  chaptersContainer.style.display = "none";
  worksGridContainer.style.display = "grid";
});

// Build Chapter Shortcuts & Works Grid
function populateContentsMenu() {
  tabAllWorks.textContent = `ALL ${allWorks.length} WORKS`;
  const menuCount = $("menuCount");
  if (menuCount) menuCount.textContent = `${allWorks.length} ORIGINAL WORKS · 2022–2026`;

  // 1. Curated Chapter Shortcuts
  const CHAPTERS = [
    { title: "Cover & Opening", page: 1, range: "01—02" },
    { title: "2022 Early Works", page: 3, range: "03—04" },
    { title: "2023 Q2 — Beginnings & Lyric", page: 5, range: "05—10" },
    { title: "2023 August — O3 Series & Waking Up", page: 11, range: "11—22" },
    { title: "2023 September — Anime Masterworks (Yor, Ai, Asuna)", page: 23, range: "23—36" },
    { title: "2023 October — Frieren & Panorama", page: 37, range: "37—44" },
    { title: "2023 Late Autumn & Catnap", page: 45, range: "45—50" },
    { title: "2024 Modern Series & Miku Final", page: 51, range: "51—58" },
    { title: "2025–2026 Recent Works", page: 59, range: `59—${allWorks.length + 1}` },
    { title: "Production Notes & Summary Poster", page: allWorks.length + 2, range: `${allWorks.length + 2}—${allWorks.length + 3}` }
  ];

  chaptersContainer.innerHTML = CHAPTERS.map(
    (c) => `
      <button type="button" class="chapterlink" data-page="${c.page}">
        <span>${c.title}</span>
        <small>${c.range}</small>
      </button>
    `
  ).join("");

  chaptersContainer.querySelectorAll(".chapterlink").forEach((btn) => {
    btn.addEventListener("click", () => {
      const pageNum = parseInt(btn.getAttribute("data-page"), 10);
      jumpToPage(pageNum);
      toggleMenu(false);
    });
  });

  // 2. Complete Works Grid (Uses lightweight WebP thumbnails for instant loading)
  worksGridContainer.innerHTML = allWorks.map((work, idx) => {
    const pageNum = idx + 2;
    return `
      <div class="work-index-card" data-page="${pageNum}">
        <img src="${work.thumb || work.src}" alt="${work.title}" class="work-index-thumb" loading="lazy" />
        <span class="work-index-title" title="${work.title}">${work.title}</span>
        <span class="work-index-page">P.${String(pageNum).padStart(2, "0")} · ${work.year}</span>
      </div>
    `;
  }).join("");

  worksGridContainer.querySelectorAll(".work-index-card").forEach((card) => {
    card.addEventListener("click", () => {
      const pageNum = parseInt(card.getAttribute("data-page"), 10);
      jumpToPage(pageNum);
      toggleMenu(false);
    });
  });
}

/* --------------------------------------------------------------------------
   Controls & Event Listeners
   -------------------------------------------------------------------------- */
prevBtn.addEventListener("click", () => move(-1));
nextBtn.addEventListener("click", () => move(1));

document.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("open")) {
    if (e.key === "Escape") closeLightbox();
    return;
  }
  if (menu.classList.contains("open")) {
    if (e.key === "Escape") toggleMenu(false);
    return;
  }
  if (["ArrowRight", "ArrowDown", " "].includes(e.key)) {
    e.preventDefault();
    move(1);
  }
  if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
    e.preventDefault();
    move(-1);
  }
});

let touchX = 0;
book.addEventListener("touchstart", (e) => {
  touchX = e.changedTouches[0].clientX;
}, { passive: true });

book.addEventListener("touchend", (e) => {
  const diff = e.changedTouches[0].clientX - touchX;
  if (Math.abs(diff) > 50) {
    move(diff < 0 ? 1 : -1);
  }
}, { passive: true });

/* --------------------------------------------------------------------------
   Mouse Wheel Navigation (Scroll wheel & Trackpad turn pages)
   -------------------------------------------------------------------------- */
let wheelCooldown = false;
window.addEventListener("wheel", (e) => {
  // Allow standard scrolling inside open dialogs/modals
  if (lightbox.classList.contains("open") || menu.classList.contains("open")) {
    return;
  }

  const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
  if (Math.abs(delta) < 12) return;

  e.preventDefault();

  if (wheelCooldown) return;

  if (delta > 0) {
    move(1);
  } else if (delta < 0) {
    move(-1);
  }

  wheelCooldown = true;
  setTimeout(() => {
    wheelCooldown = false;
  }, 280);
}, { passive: false });

window.addEventListener("resize", render);

// Initialize with gallery.json
async function init() {
  try {
    const res = await fetch("data/gallery.json");
    if (res.ok) {
      const data = await res.json();
      allWorks = data.works || [];
      allWorks.forEach((w) => { worksMap[w.id] = w; });
    }
  } catch (err) {
    console.warn("Could not load gallery.json, falling back:", err);
  }

  buildArtbook();
  populateContentsMenu();
  render();
}

init();
