export interface Product {
  id: string;
  title: string;
  category: 'Vector Bundles' | 'Mandala Collections' | 'Origami Papercraft' | 'UI & Icon Systems';
  formatBadge: string;
  formatsIncluded: string[];
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  downloadsCount: number;
  thumbnail: string;
  description: string;
  fileDetails: {
    fileSize: string;
    compatibility: string;
    layers: string;
    colorMode: string;
  };
  sampleSvgContent: string;
}

// Reusable clean SVG vector sample templates for instant download
const MANDALA_SVG_SAMPLE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <defs>
    <radialGradient id="grad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#22D3EE"/>
      <stop offset="50%" stop-color="#A855F7"/>
      <stop offset="100%" stop-color="#090D16"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="#07090e"/>
  <circle cx="250" cy="250" r="230" fill="none" stroke="#A855F7" stroke-width="1.5" opacity="0.4"/>
  <circle cx="250" cy="250" r="200" fill="none" stroke="#22D3EE" stroke-width="1" stroke-dasharray="4 4"/>
  <circle cx="250" cy="250" r="160" fill="none" stroke="#C084FC" stroke-width="1.2"/>
  <circle cx="250" cy="250" r="110" fill="none" stroke="#22D3EE" stroke-width="1.5"/>
  <circle cx="250" cy="250" r="50" fill="url(#grad)" stroke="#22D3EE" stroke-width="2"/>
  <g stroke="#A855F7" stroke-width="1.2" fill="none" opacity="0.85">
    <path d="M250,50 L270,140 L350,110 L290,190 L390,210 L300,250 L390,290 L290,310 L350,390 L270,360 L250,450 L230,360 L150,390 L210,310 L110,290 L200,250 L110,210 L210,190 L150,110 L230,140 Z"/>
    <polygon points="250,90 310,190 390,250 310,310 250,410 190,310 110,250 190,190"/>
    <polygon points="250,140 330,220 330,280 250,360 170,280 170,220" stroke="#22D3EE"/>
  </g>
  <circle cx="250" cy="250" r="6" fill="#22D3EE"/>
</svg>`;

const ORIGAMI_SVG_SAMPLE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <rect width="100%" height="100%" fill="#07090e"/>
  <g transform="translate(100, 70) scale(0.6)">
    <polygon points="250,50 350,180 250,220" fill="#3B4861" stroke="#64748B" stroke-width="1.5"/>
    <polygon points="250,50 150,180 250,220" fill="#1E2430" stroke="#64748B" stroke-width="1.5"/>
    <polygon points="150,180 250,220 180,340" fill="#2D3748" stroke="#64748B" stroke-width="1.5"/>
    <polygon points="350,180 250,220 320,340" fill="#4A5568" stroke="#64748B" stroke-width="1.5"/>
    <polygon points="250,220 180,340 250,440" fill="#1A202C" stroke="#64748B" stroke-width="1.5"/>
    <polygon points="250,220 320,340 250,440" fill="#2D3748" stroke="#64748B" stroke-width="1.5"/>
    <!-- Origami Wing facets -->
    <polygon points="150,180 50,130 180,340" fill="#1E2430" stroke="#38BDF8" stroke-width="1.5" opacity="0.9"/>
    <polygon points="350,180 450,130 320,340" fill="#4A5568" stroke="#38BDF8" stroke-width="1.5" opacity="0.9"/>
  </g>
  <text x="250" y="460" text-anchor="middle" fill="#94A3B8" font-family="sans-serif" font-size="14" letter-spacing="2">STUDIO ORIGAMI · VECTOR BLUEPRINT SAMPLE</text>
</svg>`;

const BOTANICAL_SVG_SAMPLE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <defs>
    <linearGradient id="cyberFlora" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8B5CF6"/>
      <stop offset="50%" stop-color="#06B6D4"/>
      <stop offset="100%" stop-color="#10B981"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#07090e"/>
  <path d="M250,440 C250,300 200,220 150,160 C230,190 270,240 250,440 Z" fill="url(#cyberFlora)" stroke="#38BDF8" stroke-width="1.5"/>
  <path d="M250,440 C250,300 300,220 350,160 C270,190 230,240 250,440 Z" fill="url(#cyberFlora)" stroke="#8B5CF6" stroke-width="1.5" opacity="0.8"/>
  <path d="M250,440 C240,250 210,130 250,60 C290,130 260,250 250,440 Z" fill="none" stroke="#F5C842" stroke-width="2"/>
  <circle cx="250" cy="60" r="12" fill="#F5C842" opacity="0.9"/>
  <circle cx="150" cy="160" r="8" fill="#06B6D4" opacity="0.9"/>
  <circle cx="350" cy="160" r="8" fill="#8B5CF6" opacity="0.9"/>
</svg>`;

export const MARKETPLACE_PRODUCTS: Product[] = [
  {
    id: 'prod-mandala-masterpack',
    title: 'Sacred Mandala Vector Masterpack',
    category: 'Mandala Collections',
    formatBadge: 'SVG · EPS-10 · AI · 4K PNG',
    formatsIncluded: ['SVG (Scalable Vector)', 'EPS-10 (Legacy & Vector Apps)', 'Adobe Illustrator (.AI Master)', '4000x4000 300DPI Transparent PNG'],
    price: 29.00,
    originalPrice: 49.00,
    rating: 4.95,
    reviewsCount: 142,
    downloadsCount: 1840,
    thumbnail: '/src/assets/images/portfolio_mandala_vector_1794288876545.jpg',
    description: '32 masterfully constructed sacred geometry mandala vector patterns. Clean unexpanded strokes with live modifier layers for easy stroke weight adjustment.',
    fileDetails: {
      fileSize: '148 MB ZIP',
      compatibility: 'Illustrator CS6+, CorelDRAW, Inkscape, Affinity Designer',
      layers: 'Organized & Labeled Layer Sets',
      colorMode: 'CMYK Commercial Print Ready'
    },
    sampleSvgContent: MANDALA_SVG_SAMPLE
  },
  {
    id: 'prod-origami-beasts',
    title: '3D Origami Low-Poly Beast Vector Suite',
    category: 'Origami Papercraft',
    formatBadge: 'SVG · EPS-10 · OBJ 3D · PDF',
    formatsIncluded: ['Clean Scalable SVG', 'EPS-10 Vector Outlines', 'Faceted 3D OBJ Files', 'Printable PDF Fold Templates'],
    price: 34.00,
    originalPrice: 55.00,
    rating: 4.98,
    reviewsCount: 98,
    downloadsCount: 1210,
    thumbnail: '/src/assets/images/portfolio_origami_geometry_1794288878141.jpg',
    description: 'A 24-piece collection of low-poly papercraft animal silhouettes and full 3D crease patterns with realistic paper shadow gradients.',
    fileDetails: {
      fileSize: '210 MB ZIP',
      compatibility: 'All vector tools + Blender/3D CAD software',
      layers: 'Compound paths & individual polygonal facets',
      colorMode: 'RGB Studio Lighting'
    },
    sampleSvgContent: ORIGAMI_SVG_SAMPLE
  },
  {
    id: 'prod-cyber-botanical-set',
    title: 'Cyberpunk Geodesic Flora & Biomes',
    category: 'Vector Bundles',
    formatBadge: 'SVG · EPS-10 · AI · TIFF',
    formatsIncluded: ['Layered SVG Vectors', 'EPS-10 Archive', 'Adobe Illustrator AI', 'Lossless 16-bit TIFF'],
    price: 24.00,
    originalPrice: 38.00,
    rating: 4.92,
    reviewsCount: 76,
    downloadsCount: 940,
    thumbnail: '/src/assets/images/portfolio_vector_graphic_1794288878179.jpg',
    description: '18 high-contrast sci-fi botanical vector illustrations, geodesic domes, luminescent succulents, and futuristic neon garden assets.',
    fileDetails: {
      fileSize: '185 MB ZIP',
      compatibility: 'Adobe Illustrator CC, Figma, Canva, Affinity',
      layers: 'Gradients grouped by color wavelength',
      colorMode: 'Wide Gamut Display P3 / RGB'
    },
    sampleSvgContent: BOTANICAL_SVG_SAMPLE
  },
  {
    id: 'prod-kinetic-origami-flock',
    title: 'Kinetic Cranes & Architectural Arches',
    category: 'Origami Papercraft',
    formatBadge: 'SVG · EPS-10 · AI Master',
    formatsIncluded: ['SVG Vectors', 'EPS-10 Vector Curves', 'AI Master with Live Paths', '4K PNG Overlays'],
    price: 22.00,
    originalPrice: 35.00,
    rating: 4.88,
    reviewsCount: 64,
    downloadsCount: 820,
    thumbnail: '/src/assets/images/hero_vector_papercraft_1794288876328.jpg',
    description: 'Architectural vaulted arches combined with geometric paper crane flock sequences. Ideal for high-end brand logos and exhibition graphics.',
    fileDetails: {
      fileSize: '124 MB ZIP',
      compatibility: 'Illustrator CS5+, Affinity, Inkscape, Silhouette Studio',
      layers: 'Vector curves separated by elevation plane',
      colorMode: 'Dual CMYK & RGB profiles'
    },
    sampleSvgContent: ORIGAMI_SVG_SAMPLE
  },
  {
    id: 'prod-sacred-rosettes-pack',
    title: 'Golden Ratio Rosette & Emblem Series',
    category: 'Mandala Collections',
    formatBadge: 'SVG · EPS-10 · DXF Cut File',
    formatsIncluded: ['SVG Cut Files', 'EPS-10', 'DXF for CNC / Laser Cutting', '300 DPI Transparent PNG'],
    price: 19.00,
    originalPrice: 30.00,
    rating: 4.96,
    reviewsCount: 110,
    downloadsCount: 2150,
    thumbnail: '/src/assets/images/portfolio_mandala_vector_1794288876545.jpg',
    description: 'Tested and verified vector cut files designed for laser cutters, vinyl plotters (Cricut/Silhouette), and luxury foil hot-stamping.',
    fileDetails: {
      fileSize: '92 MB ZIP',
      compatibility: 'LightBurn, Glowforge, Cricut, Illustrator, Corel',
      layers: 'Continuous joined closed-loop paths',
      colorMode: 'Monochrome High-Contrast Vector'
    },
    sampleSvgContent: MANDALA_SVG_SAMPLE
  },
  {
    id: 'prod-aerovector-hud-ui',
    title: 'AeroVector Kinetic Dark UI Design System',
    category: 'UI & Icon Systems',
    formatBadge: 'Figma · SVG · React Icons',
    formatsIncluded: ['Figma (.fig) Design System Tokens', '240+ Individual SVG Icons', 'React Component Bundle', 'Auto-Layout Components'],
    price: 39.00,
    originalPrice: 69.00,
    rating: 4.99,
    reviewsCount: 84,
    downloadsCount: 1460,
    thumbnail: '/src/assets/images/portfolio_vector_graphic_1794288878179.jpg',
    description: 'Futuristic telemetry design system with 240+ vector icons, radial gauge components, responsive grid layouts, and animated kinetic states.',
    fileDetails: {
      fileSize: '115 MB ZIP',
      compatibility: 'Figma (Variables enabled), React 18/19, SVG',
      layers: 'Atomic tokens, variants & responsive auto-layout',
      colorMode: 'Dark mode optimized sRGB'
    },
    sampleSvgContent: BOTANICAL_SVG_SAMPLE
  }
];
