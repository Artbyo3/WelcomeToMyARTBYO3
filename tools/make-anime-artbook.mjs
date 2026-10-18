// Generates high-end 2010s-2020s anime artbook illustration plates and draft sketches
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const illustrations = [
  {
    year: "2020",
    id: "neon-horizon",
    title: "Neon Horizon 2020",
    titleJa: "境界線のエコー",
    subtitle: "Cyberpunk Tokyo Skyline & Holographic Interface",
    category: "Key Visuals",
    medium: "Clip Studio Paint EX · Wacom Cintiq 27QHD",
    colors: ["#00f0ff", "#ff007f", "#1a0b2e", "#7000ff", "#ffffff"],
    ratio: "landscape", // 1200x850
    commentEn: "Created for the Tokyo Cyber Expo 2020 key visual. I wanted to capture the damp, vibrant humidity of Shibuya neon reflecting off holographic acrylic streetwear after rain.",
    commentJa: "東京2020サイバーエキスポのメインビジュアルとして制作。雨上がりの渋谷、ホログラムとアクリル素材に反射するネオンの湿度感を意識しました。",
    tags: ["Cyberpunk", "Tokyo", "Hologram", "Streetwear"],
    generateSvg: (w, h) => `
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0a0518"/>
          <stop offset="40%" stop-color="#190e38"/>
          <stop offset="70%" stop-color="#2d124d"/>
          <stop offset="100%" stop-color="#070314"/>
        </linearGradient>
        <linearGradient id="neonCyan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#00f0ff"/>
          <stop offset="100%" stop-color="#0077fe"/>
        </linearGradient>
        <linearGradient id="neonPink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ff007f"/>
          <stop offset="100%" stop-color="#aa00ff"/>
        </linearGradient>
        <linearGradient id="hudGlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.8"/>
          <stop offset="50%" stop-color="#ff007f" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#00f0ff" stop-opacity="0.8"/>
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.2" fill="#00f0ff" fill-opacity="0.18"/>
        </pattern>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#bg)"/>
      <rect width="${w}" height="${h}" fill="url(#dotGrid)"/>
      
      <!-- Distant City Skyline Silhouettes -->
      <g opacity="0.6">
        <rect x="60" y="380" width="85" height="360" fill="#13092b"/>
        <rect x="180" y="320" width="110" height="420" fill="#190d36"/>
        <rect x="330" y="260" width="140" height="480" fill="#1e1040"/>
        <rect x="520" y="340" width="95" height="400" fill="#150a2e"/>
        <rect x="660" y="220" width="160" height="520" fill="#201145"/>
        <rect x="860" y="310" width="120" height="430" fill="#170c33"/>
        <rect x="1010" y="280" width="130" height="460" fill="#140a2c"/>
        
        <!-- Glowing Windows & Billboards -->
        <g fill="#00f0ff" opacity="0.4">
          <rect x="200" y="340" width="6" height="12"/>
          <rect x="215" y="360" width="6" height="12"/>
          <rect x="200" y="390" width="6" height="12"/>
          <rect x="360" y="280" width="80" height="40" fill="url(#neonCyan)" opacity="0.6"/>
          <rect x="700" y="250" width="70" height="90" fill="url(#neonPink)" opacity="0.5"/>
        </g>
      </g>

      <!-- Tokyo Tower / Antenna Spire -->
      <line x1="740" y1="120" x2="740" y2="400" stroke="#ff007f" stroke-width="3" filter="url(#glow)"/>
      <circle cx="740" cy="115" r="5" fill="#ffffff" filter="url(#glow)"/>
      <line x1="710" y1="200" x2="770" y2="200" stroke="#ff007f" stroke-width="1.5"/>

      <!-- Giant Digital Moon / Hologram Ring -->
      <circle cx="600" cy="360" r="280" fill="none" stroke="url(#hudGlow)" stroke-width="2" stroke-dasharray="12 6" opacity="0.5" filter="url(#glow)"/>
      <circle cx="600" cy="360" r="260" fill="none" stroke="#00f0ff" stroke-width="1" stroke-dasharray="2 8" opacity="0.4"/>
      <circle cx="600" cy="360" r="180" fill="#00f0ff" fill-opacity="0.04"/>

      <!-- HUD UI Elements (2010s Anime Aesthetic) -->
      <g filter="url(#glow)">
        <text x="80" y="90" font-family="'Space Grotesk', monospace" font-size="14" fill="#00f0ff" letter-spacing="4">SYS.STATUS // ACTIVE [2020.10.18]</text>
        <line x1="80" y1="102" x2="380" y2="102" stroke="#00f0ff" stroke-width="1" stroke-opacity="0.7"/>
        <text x="80" y="125" font-family="'Space Grotesk', monospace" font-size="10" fill="#ff007f" letter-spacing="2">LAT: 35.6580° N / LONG: 139.7016° E [SHIBUYA SECTOR 07]</text>
        
        <!-- Framing Target Reticle -->
        <path d="M 1120 70 L 1150 70 L 1150 100" fill="none" stroke="#00f0ff" stroke-width="2"/>
        <path d="M 50 770 L 50 800 L 80 800" fill="none" stroke="#00f0ff" stroke-width="2"/>
        <path d="M 1150 770 L 1150 800 L 1120 800" fill="none" stroke="#00f0ff" stroke-width="2"/>
      </g>

      <!-- Rooftop Foreground Overlook Platform -->
      <polygon points="0,850 1200,850 1200,680 750,690 450,710 0,690" fill="#0b0617"/>
      <line x1="0" y1="690" x2="1200" y2="680" stroke="#00f0ff" stroke-width="2" stroke-opacity="0.8" filter="url(#glow)"/>

      <!-- Anime Character Silhouette (Standing on Rooftop, Wind blowing hair & coat) -->
      <g transform="translate(560, 430)">
        <!-- Translucent Jacket Sheen -->
        <path d="M 20 120 Q -40 220 -80 320 L -30 330 Q 30 240 50 140 Z" fill="#00f0ff" fill-opacity="0.25" filter="url(#glow)"/>
        <path d="M 70 120 Q 150 200 200 310 L 160 325 Q 100 230 60 140 Z" fill="#ff007f" fill-opacity="0.25" filter="url(#glow)"/>

        <!-- Figure Silhouette -->
        <path d="M 40 40 C 25 40 20 25 35 15 C 40 5 60 5 65 15 C 80 25 75 40 60 40 Z" fill="#ffffff" filter="url(#glow)"/>
        <!-- Anime Hair (Dynamic Wisps) -->
        <path d="M 30 20 Q -20 15 -70 50 Q -30 40 25 30 Z" fill="#00f0ff" filter="url(#glow)"/>
        <path d="M 35 15 Q -10 5 -50 25 Q -15 20 30 20 Z" fill="#00f0ff"/>
        <path d="M 65 20 Q 120 25 170 85 Q 110 50 55 35 Z" fill="#00f0ff" filter="url(#glow)"/>
        
        <!-- Glowing Headphones & Visor -->
        <ellipse cx="32" cy="22" rx="5" ry="8" fill="#ff007f" filter="url(#glow)"/>
        <ellipse cx="68" cy="22" rx="5" ry="8" fill="#ff007f" filter="url(#glow)"/>
        <path d="M 38 18 Q 50 10 62 18" stroke="#ff007f" stroke-width="3" fill="none" filter="url(#glow)"/>
        <rect x="36" y="22" width="28" height="6" rx="2" fill="#00f0ff" filter="url(#glow)"/>

        <!-- Body & Streetwear Jacket -->
        <path d="M 35 45 L 20 110 L 80 110 L 65 45 Z" fill="#170c2d"/>
        <path d="M 25 110 L 15 260 L 40 260 L 48 130 L 55 130 L 62 260 L 85 260 L 75 110 Z" fill="#0d051c"/>
        <!-- Glowing Sneaker Soles -->
        <rect x="8" y="255" width="34" height="6" rx="3" fill="#00f0ff" filter="url(#glow)"/>
        <rect x="58" y="255" width="34" height="6" rx="3" fill="#ff007f" filter="url(#glow)"/>
      </g>

      <!-- Atmospheric Neon Dust Particles -->
      <g fill="#ffffff" opacity="0.8">
        <circle cx="340" cy="520" r="1.5" filter="url(#glow)"/>
        <circle cx="380" cy="460" r="2.5" fill="#00f0ff" filter="url(#glow)"/>
        <circle cx="490" cy="380" r="1" />
        <circle cx="720" cy="480" r="2" fill="#ff007f" filter="url(#glow)"/>
        <circle cx="820" cy="420" r="3" fill="#00f0ff" filter="url(#glow)"/>
        <circle cx="910" cy="530" r="1.5"/>
        <circle cx="210" cy="620" r="2.5" fill="#ff007f" filter="url(#glow)"/>
      </g>
    `,
    generateSketchSvg: (w, h) => `
      <rect width="${w}" height="${h}" fill="#161822"/>
      <!-- Grid & Drafting Construction Lines -->
      <g stroke="#3d4966" stroke-width="0.8" stroke-dasharray="4 4" opacity="0.6">
        <line x1="0" y1="425" x2="${w}" y2="425"/>
        <line x1="600" y1="0" x2="600" y2="${h}"/>
        <line x1="0" y1="680" x2="${w}" y2="680"/>
        <!-- Vanishing Perspective Lines -->
        <line x1="600" y1="425" x2="0" y2="850"/>
        <line x1="600" y1="425" x2="${w}" y2="850"/>
        <line x1="600" y1="425" x2="200" y2="0"/>
        <line x1="600" y1="425" x2="1000" y2="0"/>
      </g>
      <!-- Blue Pencil Rough Sketch Lines -->
      <g stroke="#4f8cff" stroke-width="1.6" fill="none" opacity="0.85">
        <!-- Building Wireframes -->
        <rect x="180" y="320" width="110" height="420"/>
        <rect x="330" y="260" width="140" height="480"/>
        <rect x="660" y="220" width="160" height="520"/>
        <!-- Rough Moon Circle Guide -->
        <circle cx="600" cy="360" r="280" stroke="#7aa9ff" stroke-width="1.2"/>
        <circle cx="600" cy="360" r="260" stroke="#7aa9ff" stroke-dasharray="6 6"/>
        <!-- Character Mannequin & Pose Skeleton -->
        <circle cx="610" cy="455" r="18"/>
        <line x1="610" y1="473" x2="610" y2="550"/>
        <line x1="610" y1="550" x2="590" y2="690"/>
        <line x1="610" y1="550" x2="630" y2="690"/>
        <!-- Rough Gesture Curve for Coat -->
        <path d="M 590 510 C 500 560 480 660 470 730" stroke="#ff5277" stroke-width="2"/>
        <path d="M 630 510 C 720 560 760 670 780 730" stroke="#ff5277" stroke-width="2"/>
        <path d="M 580 445 C 500 420 440 450 420 480" stroke="#ffbe3b" stroke-width="1.8"/>
      </g>
      <!-- Artist Handwritten Notes / Draft Notes -->
      <g font-family="'Space Grotesk', monospace" font-size="12" fill="#7aa9ff">
        <text x="50" y="60">// DRAFT_03 : CAMERA ANGLE LOW 15°</text>
        <text x="50" y="80">// KEY: STRONG BACKLIGHT FROM SHIBUYA SKYLINE</text>
        <text x="800" y="760">NOTE: JACKET SHOULD HAVE ACRYLIC GLOSS REFRACTION</text>
      </g>
    `
  },

  {
    year: "2019",
    id: "stella-chronicle",
    title: "Stella Chronicle",
    titleJa: "星屑の福音・アヴァロン",
    subtitle: "Sacred Sword & Starlight Constellation",
    category: "Key Visuals",
    medium: "Paint Tool SAI 2 & Photoshop CC · Wacom Intuos Pro",
    colors: ["#2d46b9", "#f3b544", "#0a1338", "#6fe7db", "#ffffff"],
    ratio: "portrait", // 850x1200
    commentEn: "Homage to late 2010s dark fantasy sword epics. The silver blade catches starlight amidst cathedral arches dissolving into the cosmos.",
    commentJa: "2010年代後期のダークファンタジー系ビジュアルへのリスペクト。大聖堂の廃墟が星海へと溶け込む境界で、銀剣が星光を反射する瞬間を描きました。",
    tags: ["Fantasy", "Starlight", "Blade", "Cathedral"],
    generateSvg: (w, h) => `
      <defs>
        <linearGradient id="cosmicSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#020412"/>
          <stop offset="35%" stop-color="#0b1640"/>
          <stop offset="70%" stop-color="#182d78"/>
          <stop offset="100%" stop-color="#070c24"/>
        </linearGradient>
        <linearGradient id="goldGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff6cc"/>
          <stop offset="50%" stop-color="#f3b544"/>
          <stop offset="100%" stop-color="#c47a16"/>
        </linearGradient>
        <linearGradient id="swordBlade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="50%" stop-color="#a4ddf6"/>
          <stop offset="100%" stop-color="#4978bf"/>
        </linearGradient>
        <filter id="bloom" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="10" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#cosmicSky)"/>

      <!-- Golden Magic Circle & Star Ring -->
      <g transform="translate(425, 520)" filter="url(#bloom)" opacity="0.85">
        <circle cx="0" cy="0" r="260" fill="none" stroke="url(#goldGlow)" stroke-width="2"/>
        <circle cx="0" cy="0" r="240" fill="none" stroke="#6fe7db" stroke-width="1.2" stroke-dasharray="6 12"/>
        <circle cx="0" cy="0" r="180" fill="none" stroke="url(#goldGlow)" stroke-width="1.5" stroke-dasharray="16 8"/>
        <!-- Runic Geometry -->
        <polygon points="0,-240 208,120 -208,120" fill="none" stroke="url(#goldGlow)" stroke-width="1.5"/>
        <polygon points="0,240 208,-120 -208,-120" fill="none" stroke="url(#goldGlow)" stroke-width="1.5"/>
      </g>

      <!-- Gothic Arch Silhouettes Framing the Sky -->
      <g fill="#050713" opacity="0.95">
        <path d="M 0 0 L 160 0 Q 240 380 240 1200 L 0 1200 Z"/>
        <path d="M 850 0 L 690 0 Q 610 380 610 1200 L 850 1200 Z"/>
        <!-- Arch Tracery Details -->
        <path d="M 160 0 Q 320 180 425 240 Q 530 180 690 0 Z" fill="#070a1a"/>
        <!-- Rosette Window Silhouette -->
        <circle cx="425" cy="240" r="90" fill="none" stroke="#f3b544" stroke-width="2" opacity="0.4" filter="url(#bloom)"/>
      </g>

      <!-- The Grand Sacred Sword Centerpiece -->
      <g transform="translate(425, 480)" filter="url(#bloom)">
        <!-- Golden Crosshilt -->
        <path d="M -70 20 Q 0 0 70 20 Q 0 35 -70 20 Z" fill="url(#goldGlow)"/>
        <!-- Blue Gem Center -->
        <circle cx="0" cy="20" r="12" fill="#6fe7db"/>
        <!-- Blade Going Upward into Cosmos -->
        <polygon points="-14,20 -7,-460 0,-490 7,-460 14,20" fill="url(#swordBlade)"/>
        <line x1="0" y1="20" x2="0" y2="-480" stroke="#ffffff" stroke-width="2"/>
        <!-- Light Pillar along blade -->
        <rect x="-3" y="-520" width="6" height="560" fill="#ffffff" opacity="0.8" filter="url(#bloom)"/>
      </g>

      <!-- Knight Silhouette Guarding the Altar -->
      <g transform="translate(425, 680)">
        <!-- Flowing Blue & White Cloak -->
        <path d="M 0 50 Q -140 180 -180 420 L -80 440 Q -10 240 0 70 Z" fill="#1b285d" opacity="0.9"/>
        <path d="M 0 50 Q 140 180 180 420 L 80 440 Q 10 240 0 70 Z" fill="#1b285d" opacity="0.9"/>
        <!-- Gold Trim on Cloak -->
        <path d="M -180 420 Q -100 390 0 410 Q 100 390 180 420" stroke="#f3b544" stroke-width="4" fill="none" filter="url(#bloom)"/>
        
        <!-- Knight Head & Hair -->
        <circle cx="0" cy="15" r="22" fill="#0d1430"/>
        <!-- Flowing Golden Hair Braids -->
        <path d="M -15 10 Q -40 80 -60 180 Q -25 120 0 35 Z" fill="#f3b544" filter="url(#bloom)"/>
        <path d="M 15 10 Q 40 80 60 180 Q 25 120 0 35 Z" fill="#f3b544" filter="url(#bloom)"/>
        <!-- Silver Pauldron & Armor Pieces -->
        <ellipse cx="-30" cy="55" rx="18" ry="12" fill="#cbe4f7"/>
        <ellipse cx="30" cy="55" rx="18" ry="12" fill="#cbe4f7"/>
      </g>

      <!-- Floating Celestial Petals & Mana Light -->
      <g fill="#ffffff">
        <circle cx="360" cy="380" r="3" fill="#f3b544" filter="url(#bloom)"/>
        <circle cx="480" cy="320" r="2.5" fill="#6fe7db" filter="url(#bloom)"/>
        <circle cx="280" cy="620" r="2" filter="url(#bloom)"/>
        <circle cx="560" cy="580" r="3.5" fill="#f3b544" filter="url(#bloom)"/>
        <circle cx="430" cy="150" r="4" fill="#ffffff" filter="url(#bloom)"/>
        <circle cx="390" cy="850" r="2" fill="#6fe7db"/>
        <circle cx="460" cy="920" r="3" fill="#f3b544"/>
      </g>
    `,
    generateSketchSvg: (w, h) => `
      <rect width="${w}" height="${h}" fill="#141826"/>
      <!-- Perspective Construction Guidelines -->
      <g stroke="#3a486d" stroke-width="1" stroke-dasharray="3 5">
        <line x1="425" y1="0" x2="425" y2="${h}"/>
        <line x1="0" y1="520" x2="${w}" y2="520"/>
        <line x1="0" y1="0" x2="${w}" y2="${h}"/>
        <line x1="${w}" y1="0" x2="0" y2="${h}"/>
      </g>
      <!-- Blue Pencil Rough Sketch -->
      <g stroke="#6ca4ff" stroke-width="1.8" fill="none" opacity="0.9">
        <circle cx="425" cy="520" r="260"/>
        <circle cx="425" cy="520" r="240"/>
        <polygon points="425,280 633,640 217,640"/>
        <!-- Sword Rough Centerline -->
        <line x1="425" y1="10" x2="425" y2="700" stroke="#ffd257" stroke-width="2.5"/>
        <line x1="355" y1="500" x2="495" y2="500" stroke="#ffd257" stroke-width="2"/>
        <!-- Figure Gesture Rhythm -->
        <circle cx="425" cy="695" r="24"/>
        <path d="M 425 720 Q 320 850 240 1100"/>
        <path d="M 425 720 Q 530 850 610 1100"/>
        <path d="M 400 700 Q 360 820 340 920" stroke="#ff7395" stroke-width="2"/>
        <path d="M 450 700 Q 490 820 510 920" stroke="#ff7395" stroke-width="2"/>
      </g>
      <!-- Liner Notes -->
      <g font-family="'Space Grotesk', monospace" font-size="12" fill="#6ca4ff">
        <text x="40" y="50">LAYOUT: CATHEDRAL GOLDEN RATIO 1:1.618</text>
        <text x="40" y="70">SWORD LIGHT: MULTIPLY + COLOR DODGE (SAI 2)</text>
      </g>
    `
  },

  {
    year: "2018",
    id: "memory-typewriter",
    title: "Memory in Violet",
    titleJa: "手紙とエメラルドの回廊",
    subtitle: "Manuscripts Fluttering in the Sunlit Conservatory",
    category: "Original Characters",
    medium: "Clip Studio Paint EX · Wacom Cintiq Pro 24",
    colors: ["#2d6a4f", "#e9c46a", "#f4a261", "#e76f51", "#264653"],
    ratio: "landscape",
    commentEn: "Inspired by the emotional peak of 2018 television anime. Fluttering handwritten letters carried on an autumn breeze through arched conservatory glass.",
    commentJa: "2018年アニメの繊細な美術表現への憧憬。陽光が差し込むサンルームで、風に舞い上がる手紙とエメラルドのブローチのきらめきを描写。",
    tags: ["Letters", "Emerald", "Victorian", "Atmospheric"],
    generateSvg: (w, h) => `
      <defs>
        <linearGradient id="warmSun" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fff9e6"/>
          <stop offset="40%" stop-color="#fedc97"/>
          <stop offset="80%" stop-color="#cc8b52"/>
          <stop offset="100%" stop-color="#472d1f"/>
        </linearGradient>
        <linearGradient id="emerald" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#b7f4d8"/>
          <stop offset="50%" stop-color="#10b981"/>
          <stop offset="100%" stop-color="#064e3b"/>
        </linearGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="6" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#warmSun)"/>

      <!-- Ornate Glass Conservatory Arches -->
      <g stroke="#3a2518" stroke-width="4" fill="none" opacity="0.6">
        <path d="M 120 0 L 120 850"/>
        <path d="M 400 0 L 400 850"/>
        <path d="M 800 0 L 800 850"/>
        <path d="M 1080 0 L 1080 850"/>
        <path d="M 120 400 Q 260 200 400 400"/>
        <path d="M 400 400 Q 600 160 800 400"/>
        <path d="M 800 400 Q 940 200 1080 400"/>
      </g>

      <!-- Outside Golden Hill & Blue Lake Landscape -->
      <path d="M 120 520 Q 500 460 1080 500 L 1080 850 L 120 850 Z" fill="#2d6a4f" opacity="0.4"/>
      <path d="M 400 480 Q 700 440 1080 470 L 1080 560 L 400 560 Z" fill="#52b788" opacity="0.3"/>

      <!-- Sunbeams Cutting Through Glass -->
      <g opacity="0.35" filter="url(#softGlow)">
        <polygon points="200,0 350,0 700,850 480,850" fill="#ffffff"/>
        <polygon points="500,0 680,0 1100,850 880,850" fill="#ffffff"/>
      </g>

      <!-- Classical Wooden Writing Desk & Typewriter -->
      <rect x="350" y="580" width="500" height="270" rx="8" fill="#2b1a11"/>
      <rect x="330" y="570" width="540" height="20" rx="4" fill="#4a2e1e"/>
      <!-- Vintage Mechanical Typewriter -->
      <rect x="490" y="510" width="180" height="75" rx="6" fill="#1b1d24"/>
      <polygon points="510,510 540,460 620,460 650,510" fill="#282c37"/>
      <!-- Typing Paper inserted in carriage -->
      <rect x="540" y="420" width="80" height="60" fill="#fcfaf2" transform="rotate(-3 580 450)"/>

      <!-- Beautiful Emerald Brooch on Velvet Ribbon -->
      <g transform="translate(680, 560)" filter="url(#softGlow)">
        <path d="M -30 -10 Q 0 -25 30 -10 L 40 40 Q 0 25 -40 40 Z" fill="#1e3a8a"/>
        <!-- Emerald Jewel -->
        <polygon points="0,-18 20,0 0,18 -20,0" fill="url(#emerald)"/>
        <circle cx="0" cy="0" r="6" fill="#ffffff" opacity="0.8"/>
        <!-- Gold Filigree Frame -->
        <polygon points="0,-23 26,0 0,23 -26,0" fill="none" stroke="#e9c46a" stroke-width="2.5"/>
      </g>

      <!-- Swirling Handwritten Letters in the Breeze -->
      <g fill="#fbf8ee" stroke="#d5c8b0" stroke-width="1" filter="url(#softGlow)">
        <polygon points="280,360 360,330 380,390 300,420" transform="rotate(-18 330 375)"/>
        <polygon points="420,240 510,210 535,280 445,310" transform="rotate(12 470 260)"/>
        <polygon points="680,280 770,250 790,320 700,350" transform="rotate(-25 730 300)"/>
        <polygon points="840,380 930,360 950,430 860,450" transform="rotate(15 890 400)"/>
        <polygon points="760,160 840,130 860,190 780,220" transform="rotate(-8 810 175)"/>
      </g>

      <!-- Golden Dust Specks Dancing in Sunlight -->
      <g fill="#ffffff" opacity="0.9">
        <circle cx="480" cy="340" r="2" filter="url(#softGlow)"/>
        <circle cx="560" cy="280" r="3" fill="#ffeaa7" filter="url(#softGlow)"/>
        <circle cx="620" cy="380" r="2.5" fill="#ffeaa7" filter="url(#softGlow)"/>
        <circle cx="730" cy="240" r="3.5" fill="#ffffff" filter="url(#softGlow)"/>
        <circle cx="820" cy="320" r="2" fill="#ffeaa7"/>
      </g>
    `,
    generateSketchSvg: (w, h) => `
      <rect width="${w}" height="${h}" fill="#1a1c22"/>
      <g stroke="#485c7a" stroke-width="1" stroke-dasharray="4 4">
        <line x1="0" y1="580" x2="${w}" y2="580"/>
        <line x1="600" y1="0" x2="600" y2="${h}"/>
      </g>
      <!-- Rough Sketch Arc Curves -->
      <g stroke="#7eb0ff" stroke-width="1.8" fill="none" opacity="0.85">
        <path d="M 120 400 Q 260 200 400 400"/>
        <path d="M 400 400 Q 600 160 800 400"/>
        <path d="M 800 400 Q 940 200 1080 400"/>
        <!-- Desk Box -->
        <rect x="350" y="580" width="500" height="270"/>
        <!-- Flight Path Spiral of Flying Letters -->
        <path d="M 580 500 C 650 350 780 280 880 160" stroke="#f68b8b" stroke-width="2.5"/>
        <ellipse cx="680" cy="560" rx="35" ry="35" stroke="#f0c265" stroke-width="2"/>
      </g>
      <g font-family="'Space Grotesk', monospace" font-size="12" fill="#7eb0ff">
        <text x="50" y="50">LIGHTING STUDY: 4PM GOLDEN HOUR CONSERVATORY</text>
        <text x="50" y="70">DUST MOTES: ACCENTUATE DEPTH BETWEEN ARCHES</text>
      </g>
    `
  },

  {
    year: "2017",
    id: "divergence-meter",
    title: "Steins Divergence 1.048596",
    titleJa: "運命石の観測者",
    subtitle: "Dusk over the Akihabara Railway Crossing",
    category: "Key Visuals",
    medium: "Paint Tool SAI & Clip Studio Paint · Cintiq Companion",
    colors: ["#ff4500", "#1c1427", "#ffb703", "#3a0ca3", "#ffffff"],
    ratio: "landscape",
    commentEn: "Homage to the 2011-2018 sci-fi golden era. Glowing nixie tubes count down divergence world-lines against an electric autumn sunset in Radio Kaikan district.",
    commentJa: "2010年代を代表するSF名作へのオマージュ。秋葉原・ラジオ会館を望む踏切で、黄昏の夕空にニキシー管のダイバージェンスメーターが灯る光景を描きました。",
    tags: ["Sci-Fi", "Akihabara", "Nixie", "Sunset"],
    generateSvg: (w, h) => `
      <defs>
        <linearGradient id="sunsetDusk" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2a0845"/>
          <stop offset="35%" stop-color="#64144c"/>
          <stop offset="65%" stop-color="#c33742"/>
          <stop offset="85%" stop-color="#f57b29"/>
          <stop offset="100%" stop-color="#ffb703"/>
        </linearGradient>
        <linearGradient id="nixieGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="30%" stop-color="#ff9e00"/>
          <stop offset="100%" stop-color="#ff4500"/>
        </linearGradient>
        <filter id="nixieBlur">
          <feGaussianBlur stdDeviation="7" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#sunsetDusk)"/>

      <!-- Giant Sun Low on Horizon -->
      <circle cx="600" cy="580" r="160" fill="#ffe28a" opacity="0.6"/>

      <!-- Akihabara Powerlines & Overhead Cables (Iconic 2010s Anime Trope) -->
      <g stroke="#180e22" stroke-width="2" opacity="0.85">
        <line x1="0" y1="180" x2="${w}" y2="240"/>
        <line x1="0" y1="210" x2="${w}" y2="280"/>
        <line x1="0" y1="240" x2="${w}" y2="330"/>
        <line x1="0" y1="360" x2="${w}" y2="390"/>
        <!-- Utility Poles -->
        <rect x="220" y="80" width="18" height="600" fill="#180e22"/>
        <line x1="160" y1="140" x2="300" y2="140" stroke-width="4"/>
        <line x1="140" y1="200" x2="320" y2="200" stroke-width="4"/>
        <rect x="940" y="110" width="18" height="570" fill="#180e22"/>
        <line x1="880" y1="170" x2="1020" y2="170" stroke-width="4"/>
      </g>

      <!-- Railway Crossing Gate Silhouettes -->
      <polygon points="0,850 1200,850 1200,640 0,660" fill="#120919"/>
      <g transform="translate(180, 520)">
        <rect x="0" y="0" width="14" height="240" fill="#180e22"/>
        <!-- X Sign for Railway Crossing -->
        <rect x="-35" y="30" width="84" height="12" fill="#ffb703" transform="rotate(45 7 36)"/>
        <rect x="-35" y="30" width="84" height="12" fill="#ffb703" transform="rotate(-45 7 36)"/>
        <!-- Blinking Red Crossing Signal -->
        <circle cx="-16" cy="70" r="14" fill="#ff1e40" filter="url(#nixieBlur)"/>
        <circle cx="30" cy="70" r="14" fill="#660a18"/>
      </g>

      <!-- The Divergence Meter Floating in Foreground [ 1 . 0 4 8 5 9 6 ] -->
      <g transform="translate(320, 240)" filter="url(#nixieBlur)">
        <!-- Brass Enclosure Base -->
        <rect x="-20" y="100" width="600" height="40" rx="8" fill="#382212" stroke="#684224" stroke-width="3"/>
        <!-- 8 Nixie Glass Tubes -->
        ${[1, ".", 0, 4, 8, 5, 9, 6].map((char, i) => `
          <g transform="translate(${i * 68}, 0)">
            <rect x="6" y="0" width="54" height="105" rx="27" fill="#180e22" fill-opacity="0.6" stroke="#ff9e00" stroke-width="1.5" stroke-opacity="0.7"/>
            <text x="33" y="70" font-family="'Space Grotesk', monospace" font-size="44" font-weight="700" fill="url(#nixieGlow)" text-anchor="middle">${char}</text>
          </g>
        `).join("")}
      </g>

      <!-- Scientist Lab Coat Figure Silhouette in Sunset Wind -->
      <g transform="translate(740, 470)">
        <!-- Flowing White Coat catching golden rim light -->
        <path d="M 30 50 Q -30 140 -80 250 L -40 260 Q 20 160 40 70 Z" fill="#ffffff" opacity="0.7" filter="url(#nixieBlur)"/>
        <path d="M 40 50 Q 110 140 160 250 L 120 260 Q 60 160 45 70 Z" fill="#ffffff" opacity="0.7" filter="url(#nixieBlur)"/>
        <circle cx="40" cy="25" r="18" fill="#180e22"/>
        <path d="M 28 45 L 20 180 L 60 180 L 52 45 Z" fill="#180e22"/>
      </g>
    `,
    generateSketchSvg: (w, h) => `
      <rect width="${w}" height="${h}" fill="#171821"/>
      <g stroke="#394b6e" stroke-width="1" stroke-dasharray="3 5">
        <line x1="0" y1="580" x2="${w}" y2="580"/>
        <line x1="600" y1="0" x2="600" y2="${h}"/>
      </g>
      <g stroke="#ff8452" stroke-width="1.8" fill="none" opacity="0.85">
        <!-- Nixie Meter Box Layout -->
        <rect x="300" y="240" width="600" height="140"/>
        <circle cx="600" cy="580" r="160" stroke="#ffd166"/>
        <!-- Powerlines Rough Diagonal Splines -->
        <path d="M 0 180 Q 600 290 1200 240"/>
        <path d="M 0 240 Q 600 350 1200 330"/>
      </g>
      <g font-family="'Space Grotesk', monospace" font-size="12" fill="#ff8452">
        <text x="50" y="50">AKIHABARA 2011-2017 MEMORIES</text>
        <text x="50" y="70">COLOR: EXTREME ORANGE/PURPLE CONTRAST COMPOSITION</text>
      </g>
    `
  },

  {
    year: "2016",
    id: "comet-twilight",
    title: "Comet at Twilight",
    titleJa: "黄昏の約束・ティアマト",
    subtitle: "Twin Shooting Stars Dividing the Indigo Sky",
    category: "Concept Backgrounds",
    medium: "Photoshop CC & Clip Studio Paint · Wacom Cintiq 24HD",
    colors: ["#0b1354", "#165baa", "#a9d6e5", "#ff5964", "#ffffff"],
    ratio: "landscape",
    commentEn: "A tribute to the monumental skies of 2016 anime films. The split comet paints cyan and rose streaks across high-altitude clouds above a mountain crater lake.",
    commentJa: "2016年の金字塔的劇場アニメが遺した美しい空への憧れ。カルデラ湖の上空、黄昏時の高層雲を裂いて降り注ぐ分裂彗星の光跡を描きました。",
    tags: ["Comet", "Twilight", "Lake", "Sky"],
    generateSvg: (w, h) => `
      <defs>
        <linearGradient id="twilightSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#05081f"/>
          <stop offset="35%" stop-color="#0c1e5b"/>
          <stop offset="65%" stop-color="#1e4d8c"/>
          <stop offset="85%" stop-color="#693b70"/>
          <stop offset="100%" stop-color="#d46b6a"/>
        </linearGradient>
        <linearGradient id="cometTailCyan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="30%" stop-color="#70e000"/>
          <stop offset="70%" stop-color="#00b4d8"/>
          <stop offset="100%" stop-color="#03045e" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="cometTailPink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="40%" stop-color="#ff4d6d"/>
          <stop offset="80%" stop-color="#c9184a"/>
          <stop offset="100%" stop-color="#590d22" stop-opacity="0"/>
        </linearGradient>
        <filter id="starGlow">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#twilightSky)"/>

      <!-- High Altitude Cumulus Cloud Layers (Makoto Shinkai Style) -->
      <g opacity="0.6">
        <path d="M 0 540 Q 240 420 540 480 Q 840 400 1200 520 L 1200 680 L 0 680 Z" fill="#4d3b66"/>
        <path d="M 0 580 Q 300 480 720 520 Q 980 460 1200 560 L 1200 720 L 0 720 Z" fill="#2d2244"/>
      </g>

      <!-- The Grand Split Comet (Two Radiant Streaks Across Sky) -->
      <g filter="url(#starGlow)">
        <!-- Main Cyan Comet -->
        <path d="M 1100 60 Q 650 220 280 500" stroke="url(#cometTailCyan)" stroke-width="9" fill="none" stroke-linecap="round"/>
        <circle cx="280" cy="500" r="8" fill="#ffffff"/>
        
        <!-- Splinter Rose Comet -->
        <path d="M 850 140 Q 560 300 240 560" stroke="url(#cometTailPink)" stroke-width="6" fill="none" stroke-linecap="round"/>
        <circle cx="240" cy="560" r="6" fill="#ffffff"/>

        <!-- Sparkles along comet paths -->
        <circle cx="580" cy="270" r="4" fill="#ffffff"/>
        <circle cx="440" cy="380" r="3.5" fill="#a9d6e5"/>
        <circle cx="780" cy="180" r="4" fill="#ffffff"/>
      </g>

      <!-- Crater Lake Rim & Mirror Reflections -->
      <polygon points="0,850 1200,850 1200,680 900,650 600,670 300,640 0,670" fill="#0c1024"/>
      <!-- Lake Water Surface reflecting the sky -->
      <ellipse cx="600" cy="740" rx="480" ry="85" fill="#1a2552" opacity="0.8"/>
      <ellipse cx="600" cy="740" rx="360" ry="50" fill="#2d427d" opacity="0.6"/>
      <!-- Reflection of Comet in Water -->
      <g opacity="0.5" filter="url(#starGlow)">
        <line x1="480" y1="710" x2="380" y2="760" stroke="#00b4d8" stroke-width="4"/>
        <line x1="450" y1="730" x2="360" y2="770" stroke="#ff4d6d" stroke-width="3"/>
      </g>

      <!-- Two Figures Standing on Crater Edge Reaching Hands -->
      <g transform="translate(600, 645)">
        <!-- Red Braided Cord / Ribbon Connecting the Two -->
        <path d="M -25 -25 Q 0 -60 25 -25" stroke="#ff4d6d" stroke-width="2.5" fill="none" filter="url(#starGlow)"/>
        <!-- Figure 1 -->
        <circle cx="-25" cy="-20" r="7" fill="#ffffff"/>
        <line x1="-25" y1="-13" x2="-25" y2="15" stroke="#ffffff" stroke-width="4"/>
        <!-- Figure 2 -->
        <circle cx="25" cy="-20" r="7" fill="#ffffff"/>
        <line x1="25" y1="-13" x2="25" y2="15" stroke="#ffffff" stroke-width="4"/>
      </g>
    `,
    generateSketchSvg: (w, h) => `
      <rect width="${w}" height="${h}" fill="#131722"/>
      <g stroke="#3f5075" stroke-width="1" stroke-dasharray="3 5">
        <line x1="0" y1="670" x2="${w}" y2="670"/>
        <line x1="600" y1="0" x2="600" y2="${h}"/>
      </g>
      <!-- Comet Trajectory Parabola -->
      <g stroke="#5bc0be" stroke-width="2" fill="none" opacity="0.85">
        <path d="M 1100 60 Q 650 220 280 500"/>
        <path d="M 850 140 Q 560 300 240 560" stroke="#ff6b6b"/>
        <ellipse cx="600" cy="740" rx="480" ry="85"/>
      </g>
      <g font-family="'Space Grotesk', monospace" font-size="12" fill="#5bc0be">
        <text x="50" y="50">STUDY: ANIME FILM CINEMATOGRAPHY (2.39:1 ASPECT FEEL)</text>
        <text x="50" y="70">COLOR SCRIPT: COBALT NIGHT TO ALIZARIN SUNSET</text>
      </g>
    `
  },

  {
    year: "2015",
    id: "virtual-resonance",
    title: "Virtual Resonance",
    titleJa: "電脳歌姫の共鳴",
    subtitle: "Cyan Frequencies & Hologram Soundwaves",
    category: "Key Visuals",
    medium: "Clip Studio Paint & SAI · Wacom Cintiq 22HD",
    colors: ["#39ff14", "#00f5d4", "#0b091a", "#7b2cbf", "#ffffff"],
    ratio: "portrait",
    commentEn: "The quintessential sound and look of early 2010s Vocaloid revolution. Floating concentric equalizer halos and electric teal twin-tails whipping through digital space.",
    commentJa: "2010年代前半のボーカロイド黄金期に捧ぐ。空間を埋め尽くす同心円イコライザーと、電子音の奔流に合わせて躍動するエメラルドグリーンのツインテール。",
    tags: ["Vocaloid", "Digital", "Equalizer", "Idol"],
    generateSvg: (w, h) => `
      <defs>
        <linearGradient id="cyberVoid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#060212"/>
          <stop offset="40%" stop-color="#0f0728"/>
          <stop offset="80%" stop-color="#180c3e"/>
          <stop offset="100%" stop-color="#04020c"/>
        </linearGradient>
        <linearGradient id="tealGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="35%" stop-color="#00f5d4"/>
          <stop offset="100%" stop-color="#019182"/>
        </linearGradient>
        <filter id="neonBright">
          <feGaussianBlur stdDeviation="9" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#cyberVoid)"/>

      <!-- Floating Giant Speaker Halos & Equalizer Bars -->
      <g transform="translate(425, 450)" filter="url(#neonBright)">
        <circle cx="0" cy="0" r="280" fill="none" stroke="#00f5d4" stroke-width="2" stroke-dasharray="14 8" opacity="0.7"/>
        <circle cx="0" cy="0" r="240" fill="none" stroke="#7b2cbf" stroke-width="3" opacity="0.8"/>
        <circle cx="0" cy="0" r="190" fill="none" stroke="#00f5d4" stroke-width="1.5" stroke-dasharray="4 6"/>
        <!-- Radial Equalizer Ticks -->
        ${Array.from({ length: 36 }, (_, i) => {
          const angle = (i * 10 * Math.PI) / 180;
          const r1 = 200;
          const r2 = 200 + ((i % 5) * 12) + 10;
          return `<line x1="${Math.cos(angle) * r1}" y1="${Math.sin(angle) * r1}" x2="${Math.cos(angle) * r2}" y2="${Math.sin(angle) * r2}" stroke="#00f5d4" stroke-width="2.5" opacity="0.8"/>`;
        }).join("")}
      </g>

      <!-- Center Diva Character (Iconic Dynamic Pose) -->
      <g transform="translate(425, 520)" filter="url(#neonBright)">
        <!-- Iconic Twin-Tails (Long dynamic flowing curves) -->
        <!-- Left Twin-Tail -->
        <path d="M -40 -160 C -180 -180 -320 -80 -360 120 C -400 300 -280 480 -220 560 C -250 420 -280 220 -180 60 C -120 -40 -60 -120 -30 -150 Z" fill="url(#tealGrad)"/>
        <!-- Right Twin-Tail -->
        <path d="M 40 -160 C 180 -180 320 -80 360 120 C 400 300 280 480 220 560 C 250 420 280 220 180 60 C 120 -40 60 -120 30 -150 Z" fill="url(#tealGrad)"/>

        <!-- Futuristic Headset with Pink LED -->
        <path d="M -30 -180 Q 0 -205 30 -180" stroke="#222" stroke-width="6" fill="none"/>
        <rect x="-42" y="-185" width="16" height="24" rx="4" fill="#111" stroke="#ff007f" stroke-width="2"/>
        <rect x="26" y="-185" width="16" height="24" rx="4" fill="#111" stroke="#ff007f" stroke-width="2"/>
        <!-- Headset Mic Bar extending to mouth -->
        <path d="M -36 -170 L -15 -145" stroke="#ff007f" stroke-width="2.5" fill="none"/>
        <circle cx="-13" cy="-145" r="3" fill="#ff007f"/>

        <!-- Face / Hair Bangs -->
        <ellipse cx="0" cy="-160" rx="30" ry="34" fill="#fcf6ec"/>
        <!-- Teal Bangs -->
        <path d="M -30 -170 Q 0 -130 0 -140 Q 0 -130 30 -170 Z" fill="#00f5d4"/>
        
        <!-- Sleeveless Gray Top with Teal Tie -->
        <polygon points="-24,-125 24,-125 32,-30 -32,-30" fill="#d1d5db"/>
        <polygon points="-6,-125 6,-125 8,-35 0,-15 -8,-35" fill="#00f5d4"/>
        
        <!-- Black Pleated Skirt with Teal Trim -->
        <polygon points="-36,-30 36,-30 65,50 -65,50" fill="#111827"/>
        <line x1="-65" y1="48" x2="65" y2="48" stroke="#00f5d4" stroke-width="3"/>

        <!-- Separate Floating Arm Warmers with Equalizer HUD Display -->
        <rect x="-95" y="-90" width="26" height="130" rx="6" fill="#111827" stroke="#00f5d4" stroke-width="1.5"/>
        <rect x="69" y="-90" width="26" height="130" rx="6" fill="#111827" stroke="#00f5d4" stroke-width="1.5"/>
      </g>

      <!-- Digital 01 Hologram Stamp on Shoulder -->
      <text x="350" y="440" font-family="'Space Grotesk', monospace" font-size="18" font-weight="900" fill="#ff007f" filter="url(#neonBright)">01</text>
    `,
    generateSketchSvg: (w, h) => `
      <rect width="${w}" height="${h}" fill="#13151f"/>
      <g stroke="#3f4e6d" stroke-width="1" stroke-dasharray="3 5">
        <line x1="425" y1="0" x2="425" y2="${h}"/>
        <line x1="0" y1="520" x2="${w}" y2="520"/>
      </g>
      <!-- Twin Tails Gesture Arc -->
      <g stroke="#48dbfb" stroke-width="2" fill="none" opacity="0.85">
        <path d="M 400 360 C 200 360 80 500 120 700 C 140 850 250 1000 280 1100"/>
        <path d="M 450 360 C 650 360 770 500 730 700 C 710 850 600 1000 570 1100"/>
        <circle cx="425" cy="520" r="280" stroke="#a29bfe"/>
      </g>
      <g font-family="'Space Grotesk', monospace" font-size="12" fill="#48dbfb">
        <text x="40" y="50">TWIN-TAILS MOTION STUDY: S-CURVE DYNAMICS</text>
        <text x="40" y="70">COLOR: HIGH SATURATION CYAN / MAGENTA OVERLAY</text>
      </g>
    `
  },

  {
    year: "2014",
    id: "noble-phantasm",
    title: "Sword of Promised Victory",
    titleJa: "約束された勝利の剣",
    subtitle: "Golden Light Bursting through Cathedral Tracery",
    category: "Key Visuals",
    medium: "Photoshop & Paint Tool SAI · Wacom Cintiq 24HD",
    colors: ["#ffd700", "#1e3a8a", "#0f172a", "#f8fafc", "#e11d48"],
    ratio: "portrait",
    commentEn: "Created during the height of the 2014 Type-Moon / ufotable Renaissance. Golden mana motes swirl as the holy sword releases its true name.",
    commentJa: "2014年アニメ化時の熱気を閉じ込めた一枚。聖剣の真名解放に伴い、大聖堂のステンドグラスを突き破って溢れ出す黄金の魔力粒子を描きました。",
    tags: ["Holy Sword", "Cathedral", "Golden", "Epic"],
    generateSvg: (w, h) => `
      <defs>
        <linearGradient id="cathedralNight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#03071e"/>
          <stop offset="40%" stop-color="#0a194f"/>
          <stop offset="80%" stop-color="#142c75"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
        <linearGradient id="pureGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="30%" stop-color="#fff07c"/>
          <stop offset="70%" stop-color="#f5b700"/>
          <stop offset="100%" stop-color="#bd7400"/>
        </linearGradient>
        <filter id="manaBloom">
          <feGaussianBlur stdDeviation="12" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#cathedralNight)"/>

      <!-- Giant Cathedral Rose Window -->
      <g transform="translate(425, 340)" filter="url(#manaBloom)" opacity="0.75">
        <circle cx="0" cy="0" r="220" fill="none" stroke="#ffd700" stroke-width="3"/>
        <circle cx="0" cy="0" r="180" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="8 6"/>
        <circle cx="0" cy="0" r="120" fill="none" stroke="#ffd700" stroke-width="2"/>
        <!-- 12 Petals of Rose Window -->
        ${Array.from({ length: 12 }, (_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          return `<circle cx="${Math.cos(a) * 150}" cy="${Math.sin(a) * 150}" r="28" fill="#1e3a8a" stroke="#ffd700" stroke-width="2" fill-opacity="0.6"/>`;
        }).join("")}
      </g>

      <!-- Upward Golden Light Column (Excalibur Blast) -->
      <g filter="url(#manaBloom)">
        <polygon points="415,1200 435,1200 455,0 395,0" fill="url(#pureGold)" opacity="0.8"/>
        <line x1="425" y1="0" x2="425" y2="1200" stroke="#ffffff" stroke-width="6"/>
      </g>

      <!-- The King of Knights Silhouette at Base -->
      <g transform="translate(425, 780)">
        <!-- Blue Dress & Silver Armor Back Silhouette -->
        <path d="M 0 0 Q -90 120 -140 380 L 140 380 Q 90 120 0 0 Z" fill="#172554"/>
        <path d="M -140 380 Q 0 350 140 380" stroke="#ffd700" stroke-width="5" fill="none" filter="url(#manaBloom)"/>
        <!-- Golden Bun Ribbon -->
        <circle cx="0" cy="-40" r="18" fill="#ffd700" filter="url(#manaBloom)"/>
        <path d="M -12 -30 Q 0 -5 12 -30" stroke="#38bdf8" stroke-width="4" fill="none"/>
        <!-- Silver Armor Backplate Highlights -->
        <polygon points="-35,10 35,10 25,90 -25,90" fill="#cbd5e1" opacity="0.9"/>
      </g>

      <!-- Exploding Golden Mana Shards & Spirals -->
      <g fill="#ffd700" filter="url(#manaBloom)">
        <circle cx="340" cy="520" r="5" fill="#ffffff"/>
        <circle cx="510" cy="460" r="6" fill="#ffffff"/>
        <circle cx="280" cy="710" r="4"/>
        <circle cx="580" cy="680" r="5"/>
        <circle cx="390" cy="240" r="7" fill="#ffffff"/>
        <circle cx="470" cy="180" r="5" fill="#ffffff"/>
      </g>
    `,
    generateSketchSvg: (w, h) => `
      <rect width="${w}" height="${h}" fill="#111622"/>
      <g stroke="#35456b" stroke-width="1" stroke-dasharray="3 5">
        <line x1="425" y1="0" x2="425" y2="${h}"/>
        <line x1="0" y1="340" x2="${w}" y2="340"/>
      </g>
      <g stroke="#f9ca24" stroke-width="2" fill="none" opacity="0.85">
        <circle cx="425" cy="340" r="220"/>
        <line x1="425" y1="0" x2="425" y2="${h}" stroke="#ffffff" stroke-width="2.5"/>
        <polygon points="425,740 320,1160 530,1160"/>
      </g>
      <g font-family="'Space Grotesk', monospace" font-size="12" fill="#f9ca24">
        <text x="40" y="50">HOLY SWORD FX COMPOSITION</text>
        <text x="40" y="70">FATE/UBW VISUAL NOVEL & ANIME 2014 REF</text>
      </g>
    `
  },

  {
    year: "2013",
    id: "crimson-fiber",
    title: "Crimson Fiber Sync",
    titleJa: "紅蓮の繊維同期",
    subtitle: "High Contrast Shadow & Scissor Blade Slash",
    category: "Key Visuals",
    medium: "Clip Studio Paint & Copic Marker Draft · Intuos 4",
    colors: ["#d90429", "#111111", "#ffffff", "#ef233c", "#2b2d42"],
    ratio: "landscape",
    commentEn: "Channelling the raw, frenetic line energy of 2013 Trigger animation. Extreme perspective foreshortening, heavy black inks, and a brilliant crimson streak slicing through the canvas.",
    commentJa: "2013年TRIGGERアニメの荒々しく熱い線画エネルギーをそのままキャンバスへ。極端なパース感、重厚な黒ベタ、そして画面を一閃する深紅の軌跡。",
    tags: ["Action", "Trigger", "Perspective", "Blade"],
    generateSvg: (w, h) => `
      <defs>
        <linearGradient id="slashRed" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="30%" stop-color="#ff1a40"/>
          <stop offset="100%" stop-color="#7a0014"/>
        </linearGradient>
        <filter id="bloodGlow">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <pattern id="halftoneSpeed" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="3" fill="#ef233c" fill-opacity="0.15"/>
        </pattern>
      </defs>
      <!-- Stark Noir Backdrop with Red Speed Wedge -->
      <rect width="${w}" height="${h}" fill="#0d0d11"/>
      <polygon points="0,0 700,0 400,850 0,850" fill="#181920"/>
      <rect width="${w}" height="${h}" fill="url(#halftoneSpeed)"/>

      <!-- Giant Diagonal Red Slash Wave Across Full Screen -->
      <g filter="url(#bloodGlow)">
        <polygon points="0,750 1200,100 1200,160 0,810" fill="url(#slashRed)"/>
        <line x1="0" y1="780" x2="1200" y2="130" stroke="#ffffff" stroke-width="4"/>
      </g>

      <!-- The Giant Scissor Blade Silhouette (Red Monolithic Weapon) -->
      <g transform="translate(680, 380) rotate(-28)" filter="url(#bloodGlow)">
        <!-- Giant Scissor Eye Handle -->
        <circle cx="-180" cy="0" r="60" fill="none" stroke="#d90429" stroke-width="26"/>
        <circle cx="-180" cy="0" r="60" fill="none" stroke="#ffffff" stroke-width="4"/>
        <!-- Single Scissor Blade -->
        <polygon points="-120,-18 360,-12 440,0 360,12 -120,18" fill="#d90429"/>
        <line x1="-120" y1="0" x2="430" y2="0" stroke="#ffffff" stroke-width="3"/>
      </g>

      <!-- Stylized Hero Silhouette in Extreme Foreshortened Action Jump -->
      <g transform="translate(360, 480)">
        <!-- Red Eye Glow Streak -->
        <line x1="-40" y1="-80" x2="-140" y2="-90" stroke="#ff1a40" stroke-width="4" filter="url(#bloodGlow)"/>
        <circle cx="-40" cy="-80" r="5" fill="#ffffff" filter="url(#bloodGlow)"/>
        <!-- Black Sailor Uniform Collar with Red Stripe -->
        <polygon points="-80,-60 20,-60 -30,40" fill="#050507"/>
        <path d="M -75 -55 L 15 -55" stroke="#ef233c" stroke-width="4"/>
        <!-- Action Wind Hair Silhouette -->
        <path d="M -60 -90 Q -160 -120 -220 -80 Q -140 -60 -70 -70 Z" fill="#0d0d11"/>
        <!-- Red Hair Bang Streak -->
        <path d="M -50 -85 Q -120 -105 -160 -80 Q -110 -65 -60 -70 Z" fill="#ef233c" filter="url(#bloodGlow)"/>
      </g>

      <!-- Geometric Manga Sound FX Framing Typography -->
      <text x="80" y="140" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="80" fill="#ef233c" opacity="0.25" letter-spacing="8">DECISIVE SLASH</text>
    `,
    generateSketchSvg: (w, h) => `
      <rect width="${w}" height="${h}" fill="#16161a"/>
      <g stroke="#3a3d4d" stroke-width="1" stroke-dasharray="3 5">
        <line x1="0" y1="780" x2="${w}" y2="130"/>
        <line x1="600" y1="0" x2="600" y2="${h}"/>
      </g>
      <g stroke="#ff4757" stroke-width="2" fill="none" opacity="0.85">
        <circle cx="500" cy="380" r="60"/>
        <line x1="560" y1="380" x2="1050" y2="240"/>
        <!-- Action Lines Radiation -->
        ${Array.from({ length: 8 }, (_, i) => `<line x1="360" y1="480" x2="${i * 160}" y2="0" stroke="#70a1ff" stroke-width="1"/>`).join("")}
      </g>
      <g font-family="'Space Grotesk', monospace" font-size="12" fill="#ff4757">
        <text x="50" y="50">TRIGGER 2013 PERSPECTIVE EXTREME FORESHORTENING</text>
      </g>
    `
  },

  {
    year: "2012",
    id: "hexagonal-pilot",
    title: "Hexagonal Synchronization",
    titleJa: "境界空間の同調率",
    subtitle: "Emergency Cockpit HUD & AT Field Geometry",
    category: "Key Visuals",
    medium: "Paint Tool SAI & Adobe Illustrator · Cintiq 21UX",
    colors: ["#70e000", "#ff0054", "#03071e", "#3a0ca3", "#ffffff"],
    ratio: "landscape",
    commentEn: "Dedicated to the 2012 mecha film renaissance. Hexagonal energy shields intersect glowing crimson alarms as the pilot's synchronization reaches maximum.",
    commentJa: "2012年メカ・SFアニメ劇場版の衝撃。コックピットを覆う幾何学六角形シールドと、同調率限界値を示す真紅のアラートHUDの輝き。",
    tags: ["Mecha", "Cockpit", "HUD", "Sci-Fi"],
    generateSvg: (w, h) => `
      <defs>
        <linearGradient id="cockpitDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#02030a"/>
          <stop offset="50%" stop-color="#090e24"/>
          <stop offset="100%" stop-color="#010207"/>
        </linearGradient>
        <filter id="hudNeon">
          <feGaussianBlur stdDeviation="7" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#cockpitDark)"/>

      <!-- Giant Interlocking Hexagonal AT Field Shield Matrix -->
      <g stroke="#ff9e00" stroke-width="2" fill="none" opacity="0.6" filter="url(#hudNeon)">
        ${[
          [600, 425], [520, 290], [680, 290], [520, 560], [680, 560],
          [360, 425], [840, 425], [440, 155], [760, 155], [440, 695], [760, 695]
        ].map(([cx, cy]) => {
          const r = 85;
          const pts = Array.from({ length: 6 }, (_, i) => {
            const a = (i * 60 * Math.PI) / 180;
            return `${cx + Math.cos(a) * r},${cy + Math.sin(a) * r}`;
          }).join(" ");
          return `<polygon points="${pts}" fill="#ff9e00" fill-opacity="0.04"/>`;
        }).join("")}
      </g>

      <!-- Center Hexagon Focused Golden Radiance -->
      <g transform="translate(600, 425)" filter="url(#hudNeon)">
        <circle cx="0" cy="0" r="140" fill="none" stroke="#70e000" stroke-width="2" stroke-dasharray="10 6"/>
        <circle cx="0" cy="0" r="110" fill="none" stroke="#ff0054" stroke-width="1.5"/>
        <text x="0" y="5" font-family="'Space Grotesk', monospace" font-size="14" fill="#70e000" font-weight="700" text-anchor="middle" letter-spacing="3">SYNC: 104.8% // NORMAL</text>
      </g>

      <!-- Cockpit Visor / Pilot Silhouette -->
      <g transform="translate(600, 580)">
        <!-- Pilot Shoulders in Plugsuit -->
        <path d="M -160 270 Q -60 120 0 100 Q 60 120 160 270 Z" fill="#111827"/>
        <path d="M -80 180 L -120 270" stroke="#70e000" stroke-width="4" filter="url(#hudNeon)"/>
        <path d="M 80 180 L 120 270" stroke="#ff0054" stroke-width="4" filter="url(#hudNeon)"/>
        <!-- Pilot Head & Glowing Visor / Neural Interface Clips -->
        <circle cx="0" cy="40" r="45" fill="#080c18"/>
        <!-- Neural Hair Interface Headsets (A10 Clips) -->
        <rect x="-42" y="10" width="12" height="24" rx="3" fill="#ff0054" filter="url(#hudNeon)"/>
        <rect x="30" y="10" width="12" height="24" rx="3" fill="#ff0054" filter="url(#hudNeon)"/>
      </g>

      <!-- Red Emergency Hazard Stripe Borders -->
      <g fill="#ff0054" opacity="0.8">
        <rect x="40" y="40" width="120" height="4"/>
        <text x="40" y="65" font-family="'Space Grotesk', monospace" font-size="12" fill="#ff0054" letter-spacing="2">EMERGENCY STATE</text>
        <rect x="1040" y="40" width="120" height="4"/>
        <text x="1040" y="65" font-family="'Space Grotesk', monospace" font-size="12" fill="#70e000" letter-spacing="2">EVANGEL.UNIT-01</text>
      </g>
    `,
    generateSketchSvg: (w, h) => `
      <rect width="${w}" height="${h}" fill="#14151e"/>
      <g stroke="#373e54" stroke-width="1" stroke-dasharray="3 5">
        <line x1="0" y1="425" x2="${w}" y2="425"/>
        <line x1="600" y1="0" x2="600" y2="${h}"/>
      </g>
      <g stroke="#2ed573" stroke-width="1.8" fill="none" opacity="0.85">
        <circle cx="600" cy="425" r="140"/>
        <circle cx="600" cy="425" r="220" stroke="#ff4757"/>
      </g>
      <g font-family="'Space Grotesk', monospace" font-size="12" fill="#2ed573">
        <text x="50" y="50">MECHA COCKPIT HUD UI RESEARCH 2012</text>
      </g>
    `
  },

  {
    year: "2011",
    id: "soul-gem-labyrinth",
    title: "Labyrinth of Eternal Prayers",
    titleJa: "奇跡と絶望の祈り",
    subtitle: "Rose Ribbon & Floating Gothic Soul Gem",
    category: "Key Visuals",
    medium: "Paint Tool SAI & Adobe Photoshop CS5 · Intuos 3",
    colors: ["#ff70a6", "#70d6ff", "#370617", "#ffd670", "#ffffff"],
    ratio: "portrait",
    commentEn: "Honoring the psychological masterpiece of 2011. A radiant pink soul gem suspended amidst surreal checkered labyrinth arches and floating bows of starlight.",
    commentJa: "2011年ダークファンタジーの伝説的傑作への祈り。劇団イヌカレー風のシュルレアリスム迷宮、市松模様の回廊に浮かぶピンクのソウルジェムを描写。",
    tags: ["Magical Girl", "Soul Gem", "Labyrinth", "Fantasy"],
    generateSvg: (w, h) => `
      <defs>
        <linearGradient id="labyrinthVoid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#14020a"/>
          <stop offset="50%" stop-color="#38041d"/>
          <stop offset="100%" stop-color="#070006"/>
        </linearGradient>
        <linearGradient id="gemPink" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="40%" stop-color="#ff70a6"/>
          <stop offset="100%" stop-color="#c9184a"/>
        </linearGradient>
        <filter id="gemBloom">
          <feGaussianBlur stdDeviation="11" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <pattern id="checker" width="30" height="30" patternUnits="userSpaceOnUse">
          <rect width="15" height="15" fill="#250314"/>
          <rect x="15" width="15" height="15" fill="#4d082b"/>
          <rect y="15" width="15" height="15" fill="#4d082b"/>
          <rect x="15" y="15" width="15" height="15" fill="#250314"/>
        </pattern>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#labyrinthVoid)"/>

      <!-- Checkered Surreal Labyrinth Frame Arches -->
      <g opacity="0.4">
        <path d="M 0 0 L 180 0 L 180 1200 L 0 1200 Z" fill="url(#checker)"/>
        <path d="M 850 0 L 670 0 L 670 1200 L 850 1200 Z" fill="url(#checker)"/>
      </g>

      <!-- Giant Floating Soul Gem Centerpiece -->
      <g transform="translate(425, 480)" filter="url(#gemBloom)">
        <!-- Golden Filigree Mounting Frame -->
        <path d="M 0 -140 Q 60 -180 110 -110 Q 140 0 0 160 Q -140 0 -110 -110 Q -60 -180 0 -140 Z" fill="none" stroke="#ffd670" stroke-width="8"/>
        <!-- Golden Cross Top Crown -->
        <rect x="-6" y="-190" width="12" height="40" fill="#ffd670"/>
        <rect x="-24" y="-175" width="48" height="10" fill="#ffd670"/>
        
        <!-- The Radiant Pink Glowing Egg Gem -->
        <ellipse cx="0" cy="0" rx="80" ry="110" fill="url(#gemPink)"/>
        <ellipse cx="-20" cy="-30" rx="35" ry="55" fill="#ffffff" opacity="0.6"/>
        
        <!-- Golden Wing Bases -->
        <path d="M -90 40 Q -160 80 -180 140 Q -120 120 -80 70 Z" fill="#ffd670"/>
        <path d="M 90 40 Q 160 80 180 140 Q 120 120 80 70 Z" fill="#ffd670"/>
      </g>

      <!-- Swirling Red & Pink Bow Ribbons Encircling the Universe -->
      <g fill="none" stroke="#ff70a6" stroke-width="4" filter="url(#gemBloom)" opacity="0.9">
        <path d="M 120 200 C 350 120 600 320 740 220"/>
        <path d="M 100 820 C 320 680 540 920 760 760"/>
        <path d="M 220 1020 C 425 880 425 400 680 280" stroke="#70d6ff" stroke-width="2.5"/>
      </g>

      <!-- Floating Celestial White Sparkles -->
      <g fill="#ffffff" filter="url(#gemBloom)">
        <circle cx="320" cy="360" r="4"/>
        <circle cx="530" cy="340" r="5"/>
        <circle cx="280" cy="640" r="4.5"/>
        <circle cx="580" cy="620" r="5"/>
      </g>
    `,
    generateSketchSvg: (w, h) => `
      <rect width="${w}" height="${h}" fill="#161219"/>
      <g stroke="#44324f" stroke-width="1" stroke-dasharray="3 5">
        <line x1="425" y1="0" x2="425" y2="${h}"/>
        <line x1="0" y1="480" x2="${w}" y2="480"/>
      </g>
      <g stroke="#ff79b0" stroke-width="2" fill="none" opacity="0.85">
        <ellipse cx="425" cy="480" rx="80" ry="110"/>
        <path d="M 425 340 Q 535 370 535 480 Q 425 640 425 640 Q 315 480 315 370 Z"/>
      </g>
      <g font-family="'Space Grotesk', monospace" font-size="12" fill="#ff79b0">
        <text x="40" y="50">MADOKA 2011 SOUL GEM ICONOGRAPHY DRAFT</text>
      </g>
    `
  },

  {
    year: "2010",
    id: "afternoon-teatime",
    title: "Sunburst Afternoon",
    titleJa: "放課後ティータイムとサンバースト",
    subtitle: "Electric Guitar & Warm Tea in the Music Room",
    category: "Original Characters",
    medium: "Paint Tool SAI & Copic Marker · Bamboo Fun Tablet",
    colors: ["#d97706", "#78350f", "#fef3c7", "#b45309", "#1e293b"],
    ratio: "landscape",
    commentEn: "The opening of the decade. Golden 4 PM sunshine spilling across a wooden classroom floor, warming the lacquer of a cherry sunburst guitar beside porcelain tea cups.",
    commentJa: "2010年代の幕開けを飾る日常系アニメの原点。夕暮れ4時の音楽室、チェリーサンバーストのギターに反射する温かい斜光と紅茶の湯気。",
    tags: ["Music", "Guitar", "Teatime", "Nostalgia"],
    generateSvg: (w, h) => `
      <defs>
        <linearGradient id="warmClassroom" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fffbeb"/>
          <stop offset="40%" stop-color="#fde68a"/>
          <stop offset="70%" stop-color="#d97706"/>
          <stop offset="100%" stop-color="#451a03"/>
        </linearGradient>
        <linearGradient id="sunburstFinish" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="50%" stop-color="#ea580c"/>
          <stop offset="100%" stop-color="#7c2d12"/>
        </linearGradient>
        <filter id="cozyGlow">
          <feGaussianBlur stdDeviation="6" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#warmClassroom)"/>

      <!-- Classroom Window Panes Casting Diagonal Sunlight Shadows -->
      <g opacity="0.3" filter="url(#cozyGlow)">
        <polygon points="120,0 280,0 640,850 480,850" fill="#ffffff"/>
        <polygon points="360,0 520,0 880,850 720,850" fill="#ffffff"/>
        <polygon points="600,0 760,0 1120,850 960,850" fill="#ffffff"/>
      </g>

      <!-- Wooden Classroom Floor Planks -->
      <g stroke="#78350f" stroke-width="1.5" opacity="0.4">
        <line x1="0" y1="620" x2="${w}" y2="620"/>
        <line x1="0" y1="700" x2="${w}" y2="700"/>
        <line x1="0" y1="780" x2="${w}" y2="780"/>
      </g>

      <!-- Electric Guitar Leaning on Vintage Tube Amp -->
      <!-- Amplifier Cabinet -->
      <rect x="220" y="440" width="220" height="260" rx="8" fill="#1e293b"/>
      <rect x="235" y="460" width="190" height="190" rx="4" fill="#78716c"/>
      <!-- Gold Amp Knobs -->
      <circle cx="260" cy="480" r="8" fill="#fbbf24"/>
      <circle cx="290" cy="480" r="8" fill="#fbbf24"/>
      <circle cx="320" cy="480" r="8" fill="#fbbf24"/>

      <!-- Cherry Sunburst Les Paul Guitar Leaning Against Amp -->
      <g transform="translate(380, 360) rotate(18)" filter="url(#cozyGlow)">
        <!-- Guitar Neck & Headstock -->
        <rect x="18" y="-220" width="22" height="260" fill="#451a03"/>
        <polygon points="12,-280 46,-280 40,-220 18,-220" fill="#1c1917"/>
        <!-- Tuning Pegs -->
        <circle cx="6" cy="-265" r="5" fill="#fef08a"/>
        <circle cx="6" cy="-245" r="5" fill="#fef08a"/>
        <circle cx="52" cy="-265" r="5" fill="#fef08a"/>
        <circle cx="52" cy="-245" r="5" fill="#fef08a"/>

        <!-- Guitar Body (Iconic Single Cutaway) -->
        <path d="M 29 20 C -40 20 -90 90 -90 170 C -90 260 -50 320 29 320 C 108 320 148 260 148 170 C 148 100 110 50 70 30 L 70 60 Q 50 30 29 20 Z" fill="url(#sunburstFinish)"/>
        <!-- Cream Pickguard -->
        <path d="M 60 70 Q 100 90 90 180 L 50 160 Z" fill="#fef3c7"/>
        <!-- Pickups & Tailpiece -->
        <rect x="12" y="80" width="35" height="20" rx="3" fill="#1c1917" stroke="#fbbf24" stroke-width="2"/>
        <rect x="12" y="140" width="35" height="20" rx="3" fill="#1c1917" stroke="#fbbf24" stroke-width="2"/>
        <rect x="15" y="210" width="30" height="12" rx="2" fill="#e2e8f0"/>
      </g>

      <!-- Wooden Teatime Table with Tea Set -->
      <g transform="translate(740, 520)">
        <!-- Table Top -->
        <ellipse cx="120" cy="80" rx="220" ry="60" fill="#92400e" stroke="#78350f" stroke-width="4"/>
        <!-- Porcelain Teacup & Saucer with Rose Tea -->
        <ellipse cx="80" cy="65" rx="32" ry="16" fill="#ffffff" stroke="#d97706" stroke-width="2"/>
        <ellipse cx="80" cy="62" rx="20" ry="10" fill="#b45309"/>
        <!-- Pastry Plate with Strawberry Shortcake -->
        <ellipse cx="180" cy="75" rx="45" ry="22" fill="#ffffff"/>
        <polygon points="160,70 195,50 205,75" fill="#fef08a"/>
        <circle cx="185" cy="55" r="7" fill="#dc2626"/>
      </g>
    `,
    generateSketchSvg: (w, h) => `
      <rect width="${w}" height="${h}" fill="#1c1a18"/>
      <g stroke="#4f4236" stroke-width="1" stroke-dasharray="3 5">
        <line x1="0" y1="620" x2="${w}" y2="620"/>
        <line x1="600" y1="0" x2="600" y2="${h}"/>
      </g>
      <g stroke="#f59e0b" stroke-width="2" fill="none" opacity="0.85">
        <!-- Guitar Angle Line -->
        <line x1="450" y1="120" x2="380" y2="720"/>
        <ellipse cx="400" cy="550" rx="100" ry="120"/>
        <ellipse cx="860" cy="600" rx="220" ry="60"/>
      </g>
      <g font-family="'Space Grotesk', monospace" font-size="12" fill="#f59e0b">
        <text x="50" y="50">K-ON 2010 NOSTALGIA: WARM WOOD AND SUNLIGHT</text>
      </g>
    `
  },

  {
    year: "2020",
    id: "phantom-thief",
    title: "Midnight Takeover",
    titleJa: "心の怪盗・予告状",
    subtitle: "High-Contrast Red & Black Pop Acid Art",
    category: "Doujin Archives",
    medium: "Clip Studio Paint & Illustrator · Wacom Cintiq 16",
    colors: ["#e60012", "#000000", "#ffffff", "#ffde00", "#1e1e1e"],
    ratio: "landscape",
    commentEn: "Embodying the ultra-slick acid pop aesthetics that redefined late 2010s anime games. Dynamic 45-degree angle cuts, comic halftone dots, and the bold thief calling card motif.",
    commentJa: "2010年代後半を席巻したアシッド・ポップ・アニメの極地。45度のシャープな斜め分割、アメコミ調の網点、そして真紅と漆黒に踊る予告状の美学。",
    tags: ["Persona", "Pop", "Acid", "Calling Card"],
    generateSvg: (w, h) => `
      <defs>
        <filter id="popShadow">
          <feDropShadow dx="6" dy="6" stdDeviation="0" flood-color="#000000"/>
        </filter>
        <pattern id="dotPattern" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="3" fill="#ffffff" fill-opacity="0.2"/>
        </pattern>
      </defs>
      <!-- Vibrant Crimson Base -->
      <rect width="${w}" height="${h}" fill="#e60012"/>
      
      <!-- Bold Diagonal Black Polygon Slashes -->
      <polygon points="0,0 550,0 250,850 0,850" fill="#000000"/>
      <polygon points="450,0 520,0 320,850 250,850" fill="#ffffff"/>
      <polygon points="900,0 1200,0 1200,850 650,850" fill="#000000"/>
      <rect width="${w}" height="${h}" fill="url(#dotPattern)"/>

      <!-- Giant Comic Star Burst -->
      <g transform="translate(620, 360)">
        <polygon points="0,-160 40,-50 160,-40 70,40 100,160 0,90 -100,160 -70,40 -160,-40 -40,-50" fill="#ffde00" filter="url(#popShadow)"/>
        <polygon points="0,-120 30,-35 120,-30 50,30 75,120 0,65 -75,120 -50,30 -120,-30 -30,-35" fill="#ffffff"/>
      </g>

      <!-- Mask & Monocle / Phantom Silhouette -->
      <g transform="translate(620, 360)">
        <!-- Iconic White Pointed Mask -->
        <path d="M -110 -25 Q 0 -60 110 -25 Q 70 45 0 20 Q -70 45 -110 -25 Z" fill="#ffffff" stroke="#000000" stroke-width="8" filter="url(#popShadow)"/>
        <!-- Eye Holes with Red Glowing Gaze -->
        <ellipse cx="-45" cy="-8" rx="22" ry="12" fill="#000000"/>
        <circle cx="-45" cy="-8" r="5" fill="#e60012"/>
        <ellipse cx="45" cy="-8" rx="22" ry="12" fill="#000000"/>
        <circle cx="45" cy="-8" r="5" fill="#e60012"/>
      </g>

      <!-- Calling Card Decal at Bottom Right -->
      <g transform="translate(720, 620) rotate(-6)" filter="url(#popShadow)">
        <rect x="0" y="0" width="380" height="160" rx="8" fill="#ffffff" stroke="#000000" stroke-width="6"/>
        <rect x="15" y="15" width="350" height="130" fill="#e60012"/>
        <text x="190" y="65" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="28" fill="#ffffff" text-anchor="middle" letter-spacing="4">TAKE YOUR HEART</text>
        <text x="190" y="110" font-family="'Space Grotesk', sans-serif" font-weight="700" font-size="16" fill="#ffde00" text-anchor="middle" letter-spacing="2">// STEAL THE WORLD 2020 //</text>
      </g>

      <!-- Cut-out Pop Typography in Header -->
      <g transform="translate(80, 100)">
        <rect x="0" y="0" width="220" height="45" fill="#ffffff" filter="url(#popShadow)"/>
        <text x="110" y="32" font-family="'Space Grotesk', sans-serif" font-weight="900" font-size="22" fill="#000000" text-anchor="middle">SHOW TIME !!</text>
      </g>
    `,
    generateSketchSvg: (w, h) => `
      <rect width="${w}" height="${h}" fill="#161616"/>
      <g stroke="#3a3a3a" stroke-width="1" stroke-dasharray="3 5">
        <line x1="0" y1="0" x2="${w}" y2="${h}"/>
        <line x1="${w}" y1="0" x2="0" y2="${h}"/>
      </g>
      <g stroke="#ff4757" stroke-width="2" fill="none" opacity="0.85">
        <polygon points="620,200 660,310 780,320 690,400 720,520 620,450 520,520 550,400 460,320 580,310"/>
      </g>
      <g font-family="'Space Grotesk', monospace" font-size="12" fill="#ff4757">
        <text x="50" y="50">PERSONA 5 ACID POP COMPOSITION DRAFT</text>
      </g>
    `
  }
];

async function main() {
  const artDir = join(root, "art");

  const manifestWorks = [];

  for (const item of illustrations) {
    const yearDir = join(artDir, item.year);
    const draftsDir = join(artDir, item.year, "drafts");
    await mkdir(yearDir, { recursive: true });
    await mkdir(draftsDir, { recursive: true });

    const w = item.ratio === "portrait" ? 850 : 1200;
    const h = item.ratio === "portrait" ? 1200 : 850;

    const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
${item.generateSvg(w, h)}
</svg>`;

    const sketchContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
${item.generateSketchSvg(w, h)}
</svg>`;

    const svgFile = join(yearDir, `${item.id}.svg`);
    const sketchFile = join(draftsDir, `${item.id}-draft.svg`);

    await writeFile(svgFile, svgContent, "utf8");
    await writeFile(sketchFile, sketchContent, "utf8");

    manifestWorks.push({
      id: item.id,
      src: `art/${item.year}/${item.id}.svg`,
      draftSrc: `art/${item.year}/drafts/${item.id}-draft.svg`,
      thumb: `art/${item.year}/${item.id}.svg`,
      title: item.title,
      subtitle: item.subtitle,
      year: parseInt(item.year, 10),
      medium: item.medium,
      collection: item.category,
      colors: item.colors,
      comment: item.commentEn,
      tags: item.tags,
      featured: item.id === "neon-horizon" || item.id === "stella-chronicle"
    });
  }

  // Write updated data/gallery.json with clean English editorial artbook metadata
  const galleryData = {
    site: {
      title: "CHRONICLE // 2010–2020",
      artist: "Decade Studio Archive",
      monogram: "C",
      isbn: "978-4-04-891920-5",
      price: "$38.00 USD",
      format: "B4 Deluxe Hardcover · 164 Pages · Full Color",
      tagline: "A decade of golden anime illustrations (2010–2020) in an editorial artbook.",
      intro: "An official collector's volume presenting a decade of anime key visuals, character drafts, and concept paintings.",
      bio: "Visual creator and illustrator active throughout the 2010–2020 golden era of anime and concept illustration. Specializing in high-contrast cinematic lighting, celestial epics, and cyber urban aesthetics.",
      publisher: "Decade Artbook Publishing",
      printDate: "December 2020 First Edition",
      email: "contact@decade-artbook.com",
      links: [
        { label: "Portfolio", url: "https://artstation.com" },
        { label: "Twitter / X", url: "https://x.com" },
        { label: "Art Community", url: "https://deviantart.com" },
        { label: "Store", url: "https://booth.pm" }
      ]
    },
    collections: [
      { id: "Key Visuals", name: "Key Visuals" },
      { id: "Original Characters", name: "Original Works" },
      { id: "Concept Backgrounds", name: "World & Backgrounds" },
      { id: "Doujin Archives", name: "Doujin Archives" }
    ],
    works: manifestWorks
  };

  const dataDir = join(root, "data");
  await mkdir(dataDir, { recursive: true });
  await writeFile(join(dataDir, "gallery.json"), JSON.stringify(galleryData, null, 2) + "\n", "utf8");

  console.log(`Generated ${manifestWorks.length} English anime art plates and updated gallery.json!`);
}

main().catch(console.error);
