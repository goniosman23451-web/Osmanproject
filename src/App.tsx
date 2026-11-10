/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { ProjectModal } from './components/ProjectModal';
import { Marketplace } from './components/Marketplace';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PortfolioItem } from './data/portfolioData';
import { Product } from './data/productsData';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartProductIds = cart.map((i) => i.product.id);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.product.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-purple-500/30 selection:text-cyan-200">
      {/* Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onHireMeClick={() => scrollToSection('contact')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreMarketplace={() => scrollToSection('marketplace')}
          onViewPortfolio={() => scrollToSection('portfolio')}
        />

        {/* Portfolio Showcase Section with Filterable Grid */}
        <Portfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* Digital Asset Marketplace (Shop) Section */}
        <Marketplace
          onAddToCart={handleAddToCart}
          cartProductIds={cartProductIds}
        />

        {/* About Me & Credentials Section */}
        <AboutMe onContactClick={() => scrollToSection('contact')} />

        {/* Contact & Collaboration Section */}
        <Contact />
      </main>

      {/* Footer with Social Links */}
      <Footer />

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onShopRelated={() => scrollToSection('marketplace')}
      />

      {/* Slide-out Cart Drawer with Checkout Simulation */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
