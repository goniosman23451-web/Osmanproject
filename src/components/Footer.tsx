import React from 'react';
import { ArrowUp, Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Shutterstock', href: 'https://shutterstock.com', handle: 'StudioOrigami' },
    { name: 'Behance', href: 'https://behance.net', handle: 'StudioOrigami' },
    { name: 'Instagram', href: 'https://instagram.com', handle: '@studio.origami.art' },
    { name: 'Facebook', href: 'https://facebook.com', handle: 'StudioOrigamiArts' },
  ];

  return (
    <footer className="bg-[#05070a] border-t border-slate-800/80 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/70">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 text-lg font-bold text-white">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#090d16] rounded-[7px] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                  </svg>
                </div>
              </div>
              <span className="font-display text-lg text-slate-100">
                Studio <span className="text-cyan-400">Origami</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Dedicated to precision geometric vector art, sacred mandalas, and 3D origami papercraft assets. Royalty-free commercial licensing and bespoke visual design for discerning creators.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>All assets certified production-ready SVG & EPS-10</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">Home Showcase</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio Gallery</a>
              </li>
              <li>
                <a href="#marketplace" className="hover:text-cyan-400 transition-colors">Digital Asset Marketplace (Shop)</a>
              </li>
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">About Aria Lin</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact & Commission</a>
              </li>
            </ul>
          </div>

          {/* Social Profiles required by prompt: Shutterstock, Facebook, Instagram, Behance */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Stock Profiles & Social Media
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 hover:text-white transition-all flex items-center justify-between group"
                >
                  <span className="font-medium text-slate-300 group-hover:text-cyan-400">
                    {social.name}
                  </span>
                  <span className="text-[10px] text-slate-500 group-hover:text-slate-400">
                    {social.handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Studio Origami by Aria Lin. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-500">Standard Commercial & Extended Licenses</span>
            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
