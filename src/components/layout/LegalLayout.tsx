import React from 'react';
import { Link, useLocation } from 'wouter';
import { FileText, ShieldCheck, RotateCcw, Truck, ArrowLeft } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const POLICY_TABS = [
  { href: '/terms', label: 'Terms & Conditions', icon: FileText },
  { href: '/privacy', label: 'Privacy Policy', icon: ShieldCheck },
  { href: '/refund-policy', label: 'Refund & Return Policy', icon: RotateCcw },
  { href: '/shipping-policy', label: 'Shipping Policy', icon: Truck },
];

export function LegalLayout({ title, subtitle, children }: LegalLayoutProps) {
  const [location] = useLocation();

  const isTabActive = (tabHref: string) => {
    const loc = decodeURIComponent(location);
    if (tabHref === '/terms' && (loc === '/terms' || loc === '/terms-and-conditions' || loc === '/tnc' || loc === '/T&C')) return true;
    if (tabHref === '/privacy' && (loc === '/privacy' || loc === '/privacy-policy' || loc === '/privacy_policy')) return true;
    if (tabHref === '/refund-policy' && (loc === '/refund-policy' || loc === '/refund-and-cancellation' || loc === '/refund_policy' || loc === '/return-policy' || loc === '/return_policy')) return true;
    if (tabHref === '/shipping-policy' && (loc === '/shipping-policy' || loc === '/shipping' || loc === '/shipping_policy')) return true;
    return loc === tabHref;
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="border-b border-white/5 bg-card/30 backdrop-blur-xl sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/home" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <ArrowLeft size={18} className="text-white group-hover:text-primary transition-colors" />
            </div>
            <div className="leading-tight">
              <span className="text-lg font-bold tracking-tighter text-white block">MotoHippi</span>
              <span className="text-[10px] text-primary tracking-widest uppercase">Legal & Policies</span>
            </div>
          </Link>
          <div className="text-xs text-muted-foreground hidden sm:block">
            Official Platform Guidelines
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 overflow-x-auto py-2 no-scrollbar border-t border-white/5">
            {POLICY_TABS.map((tab) => {
              const active = isTabActive(tab.href);
              const Icon = tab.icon;
              return (
                <Link key={tab.href} href={tab.href}>
                  <button
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      active
                        ? 'bg-primary/15 text-primary border border-primary/30 shadow-[0_0_15px_rgba(214,255,47,0.15)]'
                        : 'text-muted-foreground hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <Icon size={14} />
                    {tab.label}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2">{title}</h1>
          {subtitle && <p className="text-muted-foreground text-sm">{subtitle}</p>}
        </div>

        <div className="glass-card p-6 sm:p-8 md:p-10 space-y-6 text-sm md:text-base text-gray-300 leading-relaxed font-normal">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-muted-foreground">
        <div className="container mx-auto px-4 space-y-2">
          <p>© {new Date().getFullYear()} MotoHippi (Platform Owner: 9999207570). All rights reserved.</p>
          <p>For concerns or communications, contact us at <a href="mailto:motohippi@yahoo.com" className="text-primary hover:underline">motohippi@yahoo.com</a></p>
        </div>
      </footer>
    </div>
  );
}
