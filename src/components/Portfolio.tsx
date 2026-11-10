import React, { useState, useMemo } from 'react';
import { Eye, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { PORTFOLIO_ITEMS, PortfolioItem } from '../data/portfolioData';

interface PortfolioProps {
  onSelectProject: (project: PortfolioItem) => void;
}

type CategoryFilter = 'All' | 'Vector Graphics' | 'Mandala Patterns' | '3D Origami/Papercraft' | 'UI Designs';

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const categories: CategoryFilter[] = [
    'All',
    'Vector Graphics',
    'Mandala Patterns',
    '3D Origami/Papercraft',
    'UI Designs'
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-24 bg-[#090b10] relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              <span>Selected Works</span>
              <span aria-hidden="true">·</span>
              <span>2024–2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Portfolio Showcase
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              An archival collection of bespoke vector graphics, sacred geometric patterns, and 3D origami structures engineered with mathematical rigor.
            </p>
          </div>

          {/* Filter Tabs (Interactive Filter Controls as functional segmented buttons, adhering to §1.A) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? PORTFOLIO_ITEMS.length 
                : PORTFOLIO_ITEMS.filter((i) => i.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  type="button"
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-mono tabular-nums ${isActive ? 'text-cyan-100' : 'text-slate-500'}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col bg-slate-900/60 border border-slate-800/90 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden cursor-pointer" onClick={() => onSelectProject(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Hover Quick Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900/90 border border-slate-700 rounded-lg shadow-xl">
                    <Eye className="w-3.5 h-3.5 text-cyan-400" />
                    <span>View Details</span>
                  </span>
                </div>

                {/* Format Badge overlay in top right */}
                <div className="absolute top-3 right-3">
                  <span className="font-mono text-[10px] text-slate-300 bg-slate-950/80 backdrop-blur-sm px-2 py-0.5 rounded border border-slate-800">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{project.specs.nodes.split(' ')[0]} nodes</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.client}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                <div>
                  {/* Unboxed tags */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-400 mb-4 pt-3 border-t border-slate-800/70">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {i < Math.min(project.tags.length, 3) - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <button
                    onClick={() => onSelectProject(project)}
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors group-hover:border-cyan-400/50"
                  >
                    <span>View Case Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
