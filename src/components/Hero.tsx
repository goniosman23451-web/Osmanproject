import React, { useState } from 'react';
import { ArrowRight, Layers, Eye, Download, ShieldCheck, Sparkles, Sliders } from 'lucide-react';

interface HeroProps {
  onExploreMarketplace: () => void;
  onViewPortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMarketplace, onViewPortfolio }) => {
  const [activeLayerMode, setActiveLayerMode] = useState<'master' | 'wireframe' | 'lighting'>('master');
  const [isInspecting, setIsInspecting] = useState(false);

  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[#07090e]">
      {/* Subtle blueprint grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Atmospheric radial ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-purple-600/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-cyan-500/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-screen 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed editorial kicker with subtle typographic dot */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-cyan-400 uppercase mb-4">
              <span>Studio Origami</span>
              <span aria-hidden="true">·</span>
              <span>Vector Artistry & Papercraft Aesthetics</span>
              <span aria-hidden="true">·</span>
              <span>Commercial Stock 2026</span>
            </div>

            {/* Bold headline with balanced line-wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 [text-wrap:balance]">
              Precision Geometry Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-cyan-300">
                Fluid Vector Artistry.
              </span>
            </h1>

            {/* Subheadline highlighting commercial stock design assets and portfolio work */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              Explore meticulously engineered vector graphics, sacred geometric mandala patterns, and tactile 3D origami papercraft sculptures. Created for creative directors, brand agencies, and commercial licensing worldwide in production-ready SVG, EPS-10, and high-resolution master formats.
            </p>

            {/* Two Primary Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreMarketplace}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl transition-all duration-200 shadow-lg shadow-purple-600/30 hover:shadow-cyan-400/30 whitespace-nowrap"
              >
                <span>Explore Marketplace</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewPortfolio}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-400/50 rounded-xl transition-all duration-200 whitespace-nowrap"
              >
                <span>View Portfolio Showcase</span>
                <Eye className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Unboxed editorial trust indicators */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Scalable Vector Formats</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>Commercial & Extended Rights</span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span>Instant SVG & EPS-10 Downloads</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Anchor with Interactive Controls */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-2.5 shadow-2xl overflow-hidden group">
              {/* Artwork Container with Dynamic Layer Preview Modes */}
              <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-xl overflow-hidden bg-[#0a0d14]">
                <img
                  src="/src/assets/images/hero_vector_papercraft_1794288876328.jpg"
                  alt="Architectural papercraft origami cranes and curved vector portals"
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    activeLayerMode === 'wireframe'
                      ? 'filter invert contrast-150 brightness-90 hue-rotate-180'
                      : activeLayerMode === 'lighting'
                      ? 'contrast-125 saturate-150'
                      : 'hover:scale-[1.02]'
                  }`}
                />

                {/* Simulated Wireframe Grid overlay in wireframe mode */}
                {activeLayerMode === 'wireframe' && (
                  <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
                )}

                {/* Subtle scrim for bottom overlay */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07090e] via-[#07090e]/60 to-transparent pointer-events-none" />

                {/* Artwork Title & Node Counter Overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-white">Kinetic Cranes & Curved Portals</p>
                    <p className="text-[11px] text-slate-400">Featured Masterpiece · 22,180 Bezier Anchors</p>
                  </div>
                  <span className="font-mono text-[11px] text-cyan-300 bg-slate-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                    SVG / EPS-10
                  </span>
                </div>
              </div>

              {/* Interactive Layer Mode Switcher */}
              <div className="mt-3 px-1 py-1 flex items-center justify-between gap-2 text-xs">
                <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive Inspect:</span>
                </span>

                <div className="flex items-center gap-1 p-0.5 bg-slate-950 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setActiveLayerMode('master')}
                    type="button"
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      activeLayerMode === 'master'
                        ? 'bg-purple-900/40 text-cyan-300 border border-cyan-500/30 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Master Art
                  </button>
                  <button
                    onClick={() => setActiveLayerMode('wireframe')}
                    type="button"
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      activeLayerMode === 'wireframe'
                        ? 'bg-purple-900/40 text-cyan-300 border border-cyan-500/30 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Vector Spline
                  </button>
                  <button
                    onClick={() => setActiveLayerMode('lighting')}
                    type="button"
                    className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                      activeLayerMode === 'lighting'
                        ? 'bg-purple-900/40 text-cyan-300 border border-cyan-500/30 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Chroma High
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metric Strip below the split (§2.B / §5.13) */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              10+ <span className="text-purple-400 font-sans font-bold text-lg">Years</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">Digital Vector & Papercraft Craft</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              140k+ <span className="text-cyan-400 font-sans font-bold text-lg">Downloads</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">Global Commercial Vector Licenses</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              650+ <span className="text-purple-400 font-sans font-bold text-lg">Assets</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">Royalty-Free Production Designs</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
              99.8% <span className="text-cyan-400 font-sans font-bold text-lg">Quality</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">Verified Agency Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};
