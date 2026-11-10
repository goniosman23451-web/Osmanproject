import React, { useState } from 'react';
import { X, Check, Copy, ExternalLink, Layers, Sparkles, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { PortfolioItem } from '../data/portfolioData';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onShopRelated: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onShopRelated }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!project) return null;

  const handleCopyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#040609]/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c1019] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              {project.category}
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-xs text-slate-400">{project.year}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Visual Display */}
          <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 group">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className={`w-full object-cover transition-all duration-300 ${
                isZoomed ? 'scale-125 cursor-zoom-out' : 'max-h-[460px] cursor-zoom-in'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="absolute bottom-3 right-3 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-900/90 border border-slate-700 hover:border-cyan-400/50 rounded-lg hover:bg-slate-800 transition-colors shadow-lg"
            >
              {isZoomed ? 'Reset View' : 'Zoom Inspect'}
            </button>
          </div>

          {/* Title & Overview */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {project.title}
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.fullDescription}
            </p>
          </div>

          {/* Color Palette Extraction */}
          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/80">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
              <span>Extracted Palette (Click to Copy Hex)</span>
              {copiedHex && (
                <span className="text-cyan-400 flex items-center gap-1 normal-case font-normal text-xs">
                  <Check className="w-3.5 h-3.5" /> Copied {copiedHex}
                </span>
              )}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.palette.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => handleCopyColor(color.hex)}
                  type="button"
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-950 border border-slate-800/80 hover:border-cyan-400/50 text-left transition-all group"
                >
                  <div
                    className="w-7 h-7 rounded-md shrink-0 shadow-sm border border-white/10"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-slate-200 truncate">{color.name}</p>
                    <p className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      {color.hex}
                      <Copy className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Specifications & Production Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Technical Specifications
              </h3>
              <dl className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <dt className="text-slate-400">Path Complexity</dt>
                  <dd className="font-mono text-slate-200">{project.specs.nodes}</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <dt className="text-slate-400">Artboard Scale</dt>
                  <dd className="font-mono text-slate-200">{project.specs.artboard}</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <dt className="text-slate-400">Color Profile</dt>
                  <dd className="text-slate-200">{project.specs.colorSpace}</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <dt className="text-slate-400">Layer Hierarchy</dt>
                  <dd className="text-slate-200">{project.specs.layers} Distinct Layers</dd>
                </div>
              </dl>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Production Context
              </h3>
              <dl className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <dt className="text-slate-400">Client / Publication</dt>
                  <dd className="text-slate-200">{project.client}</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <dt className="text-slate-400">Primary Software</dt>
                  <dd className="text-slate-200">{project.tools.join(', ')}</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <dt className="text-slate-400">Delivery Formats</dt>
                  <dd className="font-mono text-cyan-300">{project.specs.formats.join(' · ')}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Unboxed tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-400">
            <span className="font-medium text-slate-300">Tags:</span>
            {project.tags.map((tag, idx) => (
              <React.Fragment key={tag}>
                <span>{tag}</span>
                {idx < project.tags.length - 1 && <span aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
          >
            Close Details
          </button>
          <button
            onClick={() => {
              onClose();
              onShopRelated();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-lg transition-colors shadow-md shadow-purple-600/20"
          >
            <span>Explore Marketplace Asset</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
