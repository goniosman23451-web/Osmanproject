import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Download, Check, Sparkles, Star, FileCode2, ArrowRight } from 'lucide-react';
import { MARKETPLACE_PRODUCTS, Product } from '../data/productsData';

interface MarketplaceProps {
  onAddToCart: (product: Product) => void;
  cartProductIds: string[];
}

export const Marketplace: React.FC<MarketplaceProps> = ({ onAddToCart, cartProductIds }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'popular'>('featured');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadSuccessToast, setDownloadSuccessToast] = useState<string | null>(null);

  const categories = ['All', 'Mandala Collections', 'Origami Papercraft', 'Vector Bundles', 'UI & Icon Systems'];

  const filteredProducts = useMemo(() => {
    return MARKETPLACE_PRODUCTS.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.formatBadge.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'popular') return b.downloadsCount - a.downloadsCount;
      return 0; // featured default
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const handleInstantDownloadSample = (product: Product) => {
    setDownloadingId(product.id);
    
    // Generate real SVG download
    const blob = new Blob([product.sampleSvgContent], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${product.id}-sample-preview.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccessToast(product.title);
    setTimeout(() => {
      setDownloadingId(null);
    }, 600);
    setTimeout(() => {
      setDownloadSuccessToast(null);
    }, 4000);
  };

  return (
    <section id="marketplace" className="py-24 bg-[#07090e] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
            <span>Production Assets</span>
            <span aria-hidden="true">·</span>
            <span>Royalty-Free Commercial Stock</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Digital Asset Marketplace
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Download vector source packs curated for brand identity, luxury laser cutting, architectural visualization, and digital products. Master files include scalable SVGs, legacy EPS-10, and high-resolution textures.
          </p>
        </div>

        {/* Filter & Search Bar Toolbar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 mb-10 shadow-lg">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 min-w-[260px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search assets (e.g. mandala, origami, flora, vector)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-950 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {/* Category Segmented Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  type="button"
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 bg-slate-950/60 hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-400">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 px-3 py-1.5 focus:outline-none focus:border-cyan-400"
              >
                <option value="featured">Featured First</option>
                <option value="popular">Most Downloaded</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Instant Download Toast notification */}
        {downloadSuccessToast && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#0c1019] border border-cyan-400/60 p-4 rounded-xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 text-cyan-300 flex items-center justify-center shrink-0">
              <FileCode2 className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Sample Vector Downloaded!</p>
              <p className="text-[11px] text-slate-300 max-w-xs truncate">{downloadSuccessToast} (.svg)</p>
            </div>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const isInCart = cartProductIds.includes(product.id);
            return (
              <div
                key={product.id}
                className="group flex flex-col bg-slate-900/60 border border-slate-800/90 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/60"
              >
                {/* Product Thumbnail */}
                <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Format Badge Indicator in top right */}
                  <div className="absolute top-3 right-3">
                    <span className="font-mono text-[10px] text-cyan-300 bg-slate-950/90 backdrop-blur-sm px-2.5 py-1 rounded border border-cyan-500/30">
                      {product.formatBadge.split('·')[0].trim()} Pack
                    </span>
                  </div>

                  {/* Rating & Downloads overlay at bottom of thumbnail */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                    <div className="flex items-center gap-1 text-cyan-400 font-mono text-[11px]">
                      <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" />
                      <span>{product.rating}</span>
                      <span className="text-slate-400">({product.reviewsCount})</span>
                    </div>
                    <span className="text-[11px] text-slate-300 font-mono">
                      {product.downloadsCount.toLocaleString()} downloads
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed format list */}
                    <p className="text-[11px] font-mono text-cyan-400/90 mb-1.5 truncate">
                      {product.formatBadge}
                    </p>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                      {product.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Technical details list */}
                    <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80 mb-5 text-[11px] text-slate-400 space-y-1">
                      <div className="flex justify-between">
                        <span>Includes:</span>
                        <span className="text-slate-300">{product.fileDetails.fileSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Color Mode:</span>
                        <span className="text-slate-300">{product.fileDetails.colorMode}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div>
                    <div className="flex items-baseline justify-between mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-white font-mono tabular-nums">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-xs text-slate-500 line-through font-mono tabular-nums">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      </div>
                      <span className="text-[10px] text-cyan-300 font-mono">
                        Commercial Rights Included
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {/* Instant Download Sample Vector Button */}
                      <button
                        onClick={() => handleInstantDownloadSample(product)}
                        type="button"
                        disabled={downloadingId === product.id}
                        className="inline-flex items-center justify-center gap-1.5 py-2.5 px-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-cyan-400/40 rounded-lg transition-colors whitespace-nowrap"
                        title="Download sample vector SVG file directly"
                      >
                        <Download className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{downloadingId === product.id ? 'Exporting...' : 'Sample SVG'}</span>
                      </button>

                      {/* Add to Cart / Added Button */}
                      <button
                        onClick={() => onAddToCart(product)}
                        type="button"
                        className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-bold rounded-lg transition-all shadow-sm ${
                          isInCart
                            ? 'bg-purple-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-purple-500/30'
                            : 'bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-md shadow-purple-600/25'
                        }`}
                      >
                        {isInCart ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>In Cart</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add to Cart</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search yields nothing */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-300 font-medium">No assets found matching &ldquo;{searchQuery}&rdquo;</p>
            <p className="text-xs text-slate-500 mt-1">Try searching for &ldquo;mandala&rdquo;, &ldquo;origami&rdquo;, or &ldquo;vector&rdquo;.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
