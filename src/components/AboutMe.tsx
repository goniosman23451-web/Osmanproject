import React from 'react';
import { Award, Feather, Sparkles, CheckCircle, ExternalLink, Compass, ShieldCheck } from 'lucide-react';

interface AboutMeProps {
  onContactClick: () => void;
}

export const AboutMe: React.FC<AboutMeProps> = ({ onContactClick }) => {
  const skills = [
    { name: 'Adobe Illustrator CC', level: 'Mastery (10+ yrs)' },
    { name: 'Precision Vector Art', level: 'Specialist' },
    { name: 'Sacred Geometry & Mandalas', level: 'Algorithmic' },
    { name: '3D Origami & Papercraft', level: 'Sculptural' },
    { name: 'UI/UX Design Systems', level: 'Tokens & Figma' },
    { name: 'Laser Cut & Die-Line Prep', level: 'Production Ready' },
    { name: 'AI-Assisted Concept Design', level: 'Hybrid Workflow' },
    { name: 'Color Space & CMYK Master', level: 'Print Certified' },
  ];

  const milestones = [
    {
      year: '2024–Present',
      role: 'Principal Digital Artist & Founder',
      company: 'Studio Origami',
      description: 'Creating high-concept vector graphics, bespoke brand assets, and algorithmic mandala suites for international editorial and luxury packaging clients.'
    },
    {
      year: '2021–2024',
      role: 'Diamond Global Contributor',
      company: 'Shutterstock & Adobe Stock',
      description: 'Surpassed 140,000+ verified commercial vector downloads worldwide. Awarded Top Vector Creator distinction in geometric patterns and low-poly assets.'
    },
    {
      year: '2018–2021',
      role: 'Senior Visual & UI Designer',
      company: 'Kroma Creative Studio',
      description: 'Directed visual language for tech products, aerospace interfaces, and physical exhibition print materials.'
    },
    {
      year: '2015–2018',
      role: 'Papercraft Sculptor & Traditional Illustrator',
      company: 'Tokyo Paper Arts Guild',
      description: 'Studied intricate origami crease algorithms and tessellation geometry under master paper artisans.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#090b10] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <span>The Artisan Behind The Curves</span>
            <span aria-hidden="true">·</span>
            <span>Bio & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About Aria Lin
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Senior digital artist, vector craftsman, and commercial stock creator blending the discipline of traditional Japanese origami with cutting-edge digital bezier precision.
          </p>
        </div>

        {/* 2-Column Split: Avatar & Credentials on Left, Bio & Skills on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Portrait Card & Marketplace Badges */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 shadow-xl">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-950 mb-5">
                <img
                  src="/src/assets/images/designer_profile_avatar_1794288878480.jpg"
                  alt="Aria Lin - Senior Digital Designer and Vector Artist"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-white text-sm">Aria Lin</p>
                    <p className="text-slate-300 text-xs">Digital Designer & Vector Architect</p>
                  </div>
                  <span className="font-mono text-[11px] text-cyan-300 bg-slate-900/90 px-2 py-0.5 rounded border border-cyan-500/30">
                    Active Studio
                  </span>
                </div>
              </div>

              {/* Verified Marketplace Platform Badges */}
              <div className="space-y-2.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-1">
                  Verified Marketplace Platforms
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <div>
                      <p className="font-semibold text-slate-200">Shutterstock</p>
                      <p className="text-[10px] text-slate-400">Diamond Contributor</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <div>
                      <p className="font-semibold text-slate-200">Adobe Stock</p>
                      <p className="text-[10px] text-slate-400">Premium Partner</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-fuchsia-400" />
                    <div>
                      <p className="font-semibold text-slate-200">Behance Curated</p>
                      <p className="text-[10px] text-slate-400">Illustration Award</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/90 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-cyan-300" />
                    <div>
                      <p className="font-semibold text-slate-200">Freepik Select</p>
                      <p className="text-[10px] text-slate-400">Featured Author</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative, Skills & Timeline */}
          <div className="lg:col-span-7 space-y-10">
            {/* Professional Biography */}
            <div className="prose prose-invert max-w-none space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                My work centers around the geometry of form. Over the past decade, I have focused on distilling organic and architectural complexities into pristine, mathematically balanced vector coordinates.
              </p>
              <p>
                Whether sculpting 3D papercraft tessellations, generating intricate 64-vertex mandalas, or building comprehensive UI token systems, I treat every bezier handle as an intentional design statement. My assets are licensed by Fortune 500 agencies, boutique packaging houses, and game studios demanding zero loss in fidelity at any scale.
              </p>
            </div>

            {/* Skills Badges Grid (Clean cards with unboxed level text) */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4">
                Core Competencies & Toolchain
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                  >
                    <p className="text-xs font-semibold text-white leading-tight mb-1">
                      {skill.name}
                    </p>
                    <p className="text-[11px] text-slate-400 font-mono">
                      {skill.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Timeline */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-4">
                Professional Journey & Milestones
              </h3>
              <div className="space-y-4">
                {milestones.map((item, index) => (
                  <div
                    key={item.year}
                    className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/70 relative hover:border-cyan-500/20 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                      <h4 className="text-sm font-bold text-white">
                        {item.role} <span className="text-cyan-300">· {item.company}</span>
                      </h4>
                      <span className="font-mono text-xs text-slate-400 tabular-nums">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="pt-2">
              <button
                onClick={onContactClick}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl transition-all shadow-md shadow-purple-600/20"
              >
                <span>Discuss a Commission or Bespoke Licensing</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
