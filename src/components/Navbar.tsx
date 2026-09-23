import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/dashlink-logo-nav.png';
import { getSavedIds, openWhatsApp } from '../data/inventory';
import { DASHLINK_SYSTEMS_URL } from './TopBar';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop Cars', to: '/shop' },
  { label: 'Pre-Order', to: '/pre-order' },
  { label: 'Car Guide', to: '/car-guide' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [savedCount, setSavedCount] = useState(0);

  useEffect(() => {
    setSavedCount(getSavedIds().length);
    const handler = () => setSavedCount(getSavedIds().length);
    window.addEventListener('dashlink-saved-change', handler);
    return () => window.removeEventListener('dashlink-saved-change', handler);
  }, []);

  function isActive(to: string) {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  }

  return (
    <>
      <nav className="bg-white border-b border-[#E1E6EE] sticky top-0 z-50">
        <div className="px-3 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-[60px]">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Dashlink Integrated Autos" className="h-8 sm:h-10 w-auto object-contain" style={{mixBlendMode:'multiply'}} />
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-1 text-sm font-medium transition-colors relative ${
                  isActive(link.to)
                    ? 'text-[#C41E3A]'
                    : 'text-[#08172F] hover:text-[#C41E3A]'
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C41E3A] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop right actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/shop" className="p-2 text-[#64748B] hover:text-[#C41E3A] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </Link>
            <Link to="/saved" className="p-2 text-[#64748B] hover:text-[#C41E3A] transition-colors relative">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              {savedCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#C41E3A] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => openWhatsApp('Hi, I\'d like to enquire about a vehicle at Dashlink Autos.')}
              className="bg-[#25D366] text-white text-sm px-4 py-2 rounded font-semibold hover:bg-[#1fbd5a] transition-colors ml-1"
            >
              WhatsApp Us
            </button>
          </div>

          {/* Mobile right actions */}
          <div className="flex md:hidden items-center gap-1">
            <Link to="/shop" className="p-2 text-[#64748B]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </Link>
            <Link to="/saved" className="p-2 text-[#64748B] relative">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              {savedCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#C41E3A] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setDrawerOpen(true)}
              className="p-2 text-[#08172F]"
              aria-label="Open menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setDrawerOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-4 h-14 border-b border-[#E1E6EE]">
              <img src={logo} alt="Dashlink" className="h-8 w-auto object-contain" style={{mixBlendMode:'multiply'}} />
              <button onClick={() => setDrawerOpen(false)} className="p-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div className="flex flex-col py-2 flex-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setDrawerOpen(false)}
                  className={`px-5 py-3 text-sm font-medium border-l-2 transition-colors ${
                    isActive(link.to)
                      ? 'text-[#C41E3A] border-[#C41E3A] bg-red-50'
                      : 'text-[#08172F] border-transparent hover:text-[#C41E3A]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mx-4 my-3 border-t border-[#E1E6EE]" />
              <p className="px-5 pb-1 text-[10px] font-semibold uppercase tracking-wider text-[#64748B]">More from Dashlink</p>
              <a
                href={DASHLINK_SYSTEMS_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setDrawerOpen(false)}
                className="px-5 py-3 border-l-2 border-transparent hover:border-[#C41E3A] transition-colors"
              >
                <span className="block text-sm font-medium text-[#08172F]">Integrated Systems ↗</span>
                <span className="block text-xs text-[#64748B]">Computers &amp; Technology</span>
              </a>
            </div>
            <div className="p-4 border-t border-[#E1E6EE]">
              <button
                onClick={() => { openWhatsApp('Hi, I\'d like to enquire about a vehicle at Dashlink Autos.'); setDrawerOpen(false); }}
                className="w-full bg-[#25D366] text-white text-sm py-2.5 rounded font-semibold"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
