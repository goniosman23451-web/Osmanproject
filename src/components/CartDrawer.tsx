import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, Download, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';
import { Product } from '../data/productsData';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearCart,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [promoApplied, setPromoApplied] = useState<boolean>(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const total = Math.max(0, subtotal - discountAmount);

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError(null);
    if (promoCode.trim().toUpperCase() === 'STUDIO20') {
      setDiscountPercent(20);
      setPromoApplied(true);
    } else if (promoCode.trim().toUpperCase() === 'ORIGAMI50') {
      setDiscountPercent(50);
      setPromoApplied(true);
    } else {
      setPromoError('Invalid promo code. Try "STUDIO20" for 20% off!');
    }
  };

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutComplete(true);
    }, 1200);
  };

  const downloadAllPurchasedAssets = () => {
    // Triggers download of each purchased SVG
    items.forEach((item, index) => {
      setTimeout(() => {
        const blob = new Blob([item.product.sampleSvgContent], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${item.product.id}-licensed-master.svg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, index * 300);
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#040609]/80 backdrop-blur-sm" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0c1019] border-l border-slate-800 shadow-2xl flex flex-col">
          
          {/* Cart Header */}
          <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-cyan-400" />
              <h2 className="text-base font-bold text-white">Your Asset Cart</h2>
              <span className="font-mono text-xs text-slate-400 tabular-nums">
                ({items.reduce((acc, i) => acc + i.quantity, 0)})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {checkoutComplete ? (
              /* Success / Instant Download view */
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 bg-purple-500/20 text-cyan-300 rounded-full flex items-center justify-center mx-auto ring-8 ring-cyan-500/10">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Order Confirmed!</h3>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                    Thank you for supporting independent vector craft. Your royalty-free commercial licenses and source files are ready below.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left space-y-2 text-xs">
                  <p className="text-slate-400">Order Reference: <span className="font-mono text-cyan-400">#SO-2026-{Math.floor(1000 + Math.random() * 9000)}</span></p>
                  <p className="text-slate-400">License: <span className="text-slate-200">Full Commercial & Stock Reproduction Rights</span></p>
                  <p className="text-slate-400">Formats: <span className="text-slate-200">SVG, EPS-10, AI, High-Res PNG</span></p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={downloadAllPurchasedAssets}
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl transition-all shadow-lg shadow-purple-600/25"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download All Licensed Vector Files</span>
                  </button>

                  <button
                    onClick={() => {
                      onClearCart();
                      setCheckoutComplete(false);
                      onClose();
                    }}
                    type="button"
                    className="w-full py-2.5 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Return to Marketplace
                  </button>
                </div>
              </div>
            ) : items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-slate-500">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-slate-300">Your cart is currently empty</p>
                <p className="text-xs text-slate-500 max-w-xs mx-auto">
                  Browse the digital marketplace to license precision vector graphics, mandalas, and papercraft assets.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg hover:from-purple-500 hover:to-cyan-400"
                >
                  <span>Browse Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex gap-3.5 p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 items-center"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      referrerPolicy="no-referrer"
                      className="w-16 h-16 rounded-lg object-cover bg-slate-950 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-mono text-cyan-400 truncate">
                        {product.formatBadge.split('·')[0].trim()}
                      </p>
                      <h4 className="text-xs font-bold text-white truncate">{product.title}</h4>
                      <p className="text-xs font-mono text-slate-300 mt-1">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => onRemoveItem(product.id)}
                      className="p-2 text-slate-500 hover:text-rose-400 hover:bg-slate-800/80 rounded-lg transition-colors"
                      title="Remove from cart"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {/* Promo Code Input */}
                <form onSubmit={applyPromo} className="pt-2">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Promo Code (e.g. STUDIO20)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 uppercase font-mono focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-3 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg transition-colors shrink-0"
                    >
                      Apply
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-[11px] text-cyan-300 mt-1.5 flex items-center gap-1">
                      <span>Applied: {discountPercent}% discount active!</span>
                    </p>
                  )}
                  {promoError && (
                    <p className="text-[11px] text-rose-400 mt-1.5">{promoError}</p>
                  )}
                </form>
              </div>
            )}
          </div>

          {/* Cart Footer */}
          {!checkoutComplete && items.length > 0 && (
            <div className="p-6 border-t border-slate-800 bg-slate-900/80 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-mono text-slate-200 tabular-nums">${subtotal.toFixed(2)}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-cyan-400">
                    <span>Discount ({discountPercent}%)</span>
                    <span className="font-mono tabular-nums">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-400">
                  <span>VAT / Sales Tax</span>
                  <span className="font-mono text-slate-300">Included</span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-slate-800">
                  <span>Total</span>
                  <span className="font-mono text-cyan-300 tabular-nums">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleSimulateCheckout}
                disabled={isCheckingOut}
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 rounded-xl transition-all shadow-lg shadow-purple-600/30"
              >
                {isCheckingOut ? (
                  <span>Generating Licenses...</span>
                ) : (
                  <>
                    <span>Proceed to Instant Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Instant Vector Asset Delivery · 256-bit Secure</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
