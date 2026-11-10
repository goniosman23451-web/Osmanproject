export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Vector Graphics' | 'Mandala Patterns' | '3D Origami/Papercraft' | 'UI Designs';
  summary: string;
  fullDescription: string;
  image: string;
  tags: string[];
  year: string;
  client: string;
  tools: string[];
  specs: {
    nodes: string;
    artboard: string;
    colorSpace: string;
    layers: number;
    formats: string[];
  };
  palette: { name: string; hex: string }[];
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'sacred-mandala-matrix',
    title: 'Sacred Mandala Matrix',
    category: 'Mandala Patterns',
    summary: 'Ultra-precision geometric mandala pattern with Metatron cube nodes and luminous gold-teal vector filigree.',
    fullDescription: 'Constructed using strict 12-fold sacred geometry and golden spiral mathematics. Every curved path was engineered with mathematical spline precision, making it seamlessly scalable for luxury packaging, metallic foil stamping, and high-density laser etching.',
    image: '/src/assets/images/portfolio_mandala_vector_1794288876545.jpg',
    tags: ['Sacred Geometry', 'Gold Filigree', 'Laser Etch Ready', 'Commercial License'],
    year: '2025',
    client: 'Aura Luxe Fine Publishing',
    tools: ['Adobe Illustrator CC', 'Sacred Geometry CAD', 'Astute Graphics'],
    specs: {
      nodes: '14,820 Bezier Anchors',
      artboard: '8,000 × 8,000 px',
      colorSpace: 'CMYK / RGB Dual Profile',
      layers: 8,
      formats: ['SVG', 'EPS-10', 'AI Master', 'High-Res PNG']
    },
    palette: [
      { name: 'Radiant Gold', hex: '#F5C842' },
      { name: 'Luminous Teal', hex: '#14B8A6' },
      { name: 'Deep Cyan', hex: '#0F766E' },
      { name: 'Midnight Charcoal', hex: '#090D16' }
    ]
  },
  {
    id: 'origami-lowpoly-chimera',
    title: 'Celestial Origami Chimera',
    category: '3D Origami/Papercraft',
    summary: 'Sculptural low-poly origami beast featuring faceted geometric planes, directional studio shadow modeling, and paper fiber tactility.',
    fullDescription: 'A hybrid exploration bridging traditional Japanese paper-folding algorithms and contemporary 3D polygon modeling. The composition studies the intersection of structural rigidity and dynamic predatory movement, translated into clean vector die-lines.',
    image: '/src/assets/images/portfolio_origami_geometry_1794288878141.jpg',
    tags: ['Low-Poly 3D', 'Paper Sculpture', 'Die-Cut Geometry', 'Editorial Cover'],
    year: '2025',
    client: 'Origami Quarterly International',
    tools: ['Blender 4.2', 'Adobe Illustrator', 'Pepakura Designer'],
    specs: {
      nodes: '6,450 Poly Facets',
      artboard: '6,400 × 4,800 px',
      colorSpace: 'RGB Studio',
      layers: 12,
      formats: ['SVG', 'EPS-10', 'OBJ 3D', 'Print PDF']
    },
    palette: [
      { name: 'Graphite Shadow', hex: '#1E2430' },
      { name: 'Slate Indigo', hex: '#3B4861' },
      { name: 'Paper Pearl', hex: '#94A3B8' },
      { name: 'Obsidian Rim', hex: '#0B0F19' }
    ]
  },
  {
    id: 'cyberpunk-biosphere-flora',
    title: 'Cyberpunk Biosphere Terrarium',
    category: 'Vector Graphics',
    summary: 'High-contrast botanical vector illustration featuring geodesic glass biomes, luminescent flora, and neon cyan-violet gradients.',
    fullDescription: 'Designed for high-impact commercial murals and key visual brand campaigns. Explores speculative botany where organic desert and rainforest flora evolve inside climate-regulated geodesic habitats under celestial moons.',
    image: '/src/assets/images/portfolio_vector_graphic_1794288878179.jpg',
    tags: ['Specular Neon', 'Bioluminescent', 'Geodesic Vector', 'Brand Identity'],
    year: '2026',
    client: 'NeoFlora Environmental Labs',
    tools: ['Adobe Illustrator', 'Vector Gradients', 'Wacom Pro'],
    specs: {
      nodes: '18,340 Path Nodes',
      artboard: '7,680 × 5,760 px',
      colorSpace: 'sRGB / Display P3',
      layers: 16,
      formats: ['SVG', 'EPS-10', 'AI CC', 'Lossless TIFF']
    },
    palette: [
      { name: 'Electric Violet', hex: '#8B5CF6' },
      { name: 'Biolum Emerald', hex: '#10B981' },
      { name: 'Aqua Cyan', hex: '#06B6D4' },
      { name: 'Space Void', hex: '#05070D' }
    ]
  },
  {
    id: 'architectural-origami-curves',
    title: 'Kinetic Cranes & Curved Portals',
    category: '3D Origami/Papercraft',
    summary: 'Layered architectural arches and soaring paper origami cranes accented with circuit-like cyan and amber vector trajectories.',
    fullDescription: 'Commissioned as the visual identity for an avant-garde architecture symposium in Tokyo. The artwork synthesizes ancient ceremonial folded origami forms with parametric vaulted arches and futuristic computational curves.',
    image: '/src/assets/images/hero_vector_papercraft_1794288876328.jpg',
    tags: ['Parametric Arches', 'Origami Cranes', 'Golden Ratio', 'Architectural Identity'],
    year: '2026',
    client: 'Tokyo Kinetic Architecture Biennale',
    tools: ['Grasshopper / Rhino', 'Adobe Illustrator CC', 'Astute VectorScribe'],
    specs: {
      nodes: '22,180 Bezier Segments',
      artboard: '9,600 × 5,400 px',
      colorSpace: 'CMYK / RGB Master',
      layers: 24,
      formats: ['SVG', 'EPS-10', 'Vector AI', '4K Print Ready']
    },
    palette: [
      { name: 'Solar Amber', hex: '#F59E0B' },
      { name: 'Cyan Vector', hex: '#06B6D4' },
      { name: 'Cardstock Grey', hex: '#475569' },
      { name: 'Pure Obsidian', hex: '#030712' }
    ]
  },
  {
    id: 'neo-minimal-dashboard-hud',
    title: 'AeroVector Kinetic UI System',
    category: 'UI Designs',
    summary: 'High-density dark mode telemetry interface with precision vector gauges, bezier waveform charts, and micro-interactions.',
    fullDescription: 'A modular design system constructed specifically for aerospace telemetry and high-end automotive dashboards. Designed with strict optical grid alignment, 8pt spatial rhythm, and responsive SVG token assets.',
    image: '/src/assets/images/portfolio_vector_graphic_1794288878179.jpg',
    tags: ['Design System', 'HUD Telemetry', 'Vector Tokens', 'Figma & SVG'],
    year: '2025',
    client: 'AeroDynamics Propulsion Group',
    tools: ['Figma Enterprise', 'Adobe Illustrator', 'React Tokens'],
    specs: {
      nodes: '120+ Vector Component Variants',
      artboard: '1,920 × 1,080 px System',
      colorSpace: 'sRGB Responsive',
      layers: 48,
      formats: ['Figma File', 'SVG Symbols', 'React Icons']
    },
    palette: [
      { name: 'Cockpit Cyan', hex: '#38BDF8' },
      { name: 'Warning Amber', hex: '#FBBF24' },
      { name: 'Console Navy', hex: '#0F172A' },
      { name: 'Canvas Dark', hex: '#020617' }
    ]
  },
  {
    id: 'fractal-mandala-polyptych',
    title: 'Solstice Fractal Rosette',
    category: 'Mandala Patterns',
    summary: 'Multilayered geometric rosette mandala blending radial symmetry with high-contrast monochrome and gold highlights.',
    fullDescription: 'Part of an ongoing study in repetitive radial vector geometry. Built from concentric 64-vertex polygons rotated incrementally along Fibonacci scales to produce optical moiré dynamics without bitmap rasterization.',
    image: '/src/assets/images/portfolio_mandala_vector_1794288876545.jpg',
    tags: ['Fibonacci Rosette', 'Optical Moiré', 'Tattoo Vector', 'Vinyl Cut'],
    year: '2024',
    client: 'Solstice Sound & Vinyl Art',
    tools: ['Adobe Illustrator', 'MirrorMe Plugin', 'Vector First'],
    specs: {
      nodes: '11,400 Nodes',
      artboard: '6,000 × 6,000 px',
      colorSpace: 'Single Color & Duo-Tone',
      layers: 6,
      formats: ['SVG', 'EPS-10', 'DXF Cut File', 'PNG']
    },
    palette: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Champagne Gold', hex: '#E5C07B' },
      { name: 'Muted Slate', hex: '#64748B' },
      { name: 'Midnight Ink', hex: '#0A0E17' }
    ]
  }
];
