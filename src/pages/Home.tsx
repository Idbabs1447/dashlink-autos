import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState, useCallback } from 'react';
import { inventory, openWhatsApp } from '../data/inventory';
import { DASHLINK_SYSTEMS_URL } from '../components/TopBar';
import VehicleCard from '../components/VehicleCard';
import SearchPanel from '../components/SearchPanel';

const HERO_BG = 'https://images.unsplash.com/photo-1574023278969-abb7ab49945c?w=1400';

const brandTiles = [
  { name: 'Toyota', img: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400' },
  { name: 'Lexus', img: 'https://images.unsplash.com/photo-1779983625011-e9c207710d11?w=400' },
  { name: 'Mercedes-Benz', img: 'https://images.unsplash.com/photo-1686562483617-3cf08d81e117?w=400' },
  { name: 'Honda', img: 'https://images.unsplash.com/photo-1614220654876-8a75c41f7a7c?w=400' },
  { name: 'Hyundai', img: 'https://images.unsplash.com/photo-1638618164682-12b986ec2a75?w=400' },
  { name: 'Ford', img: 'https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=400' },
];

const trustItems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    label: 'Foreign used stock available',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    label: 'Importation & sourcing',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    label: 'Inspect before you pay',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    label: 'Fast WhatsApp responses',
  },
];

const whatWeDo = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M9 12h6"/>
      </svg>
    ),
    title: 'Direct Stock on Ground',
    desc: 'Browse vehicles physically available at our yard in Ogba. What you see is what you get,  no bait and switch.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Pre-Order & Sourcing',
    desc: 'Can\'t find the exact car? Tell us what you want and we\'ll source and import it directly for you.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Transparent Process',
    desc: 'Full inspection before payment. We walk you through paperwork, duties, and pricing,  no hidden costs.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.19 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.1A16 16 0 0 0 16 16l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'WhatsApp-First Support',
    desc: 'Reach us instantly on WhatsApp. Videos, photos, and answers sent quickly, no waiting on hold.',
  },
];

const recentVehicles = inventory.filter(v => v.isNew);
const moreVehicles = inventory.filter(v => !v.isNew);

const SLIDE_MS = 600;
const AUTO_MS = 5000;

function InStockCarousel() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [sliding, setSliding] = useState<'left' | 'right' | null>(null);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const prefersReduced = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const vehicles = inventory;
  const count = vehicles.length;

  const goTo = useCallback((next: number, dir: 'left' | 'right') => {
    if (sliding) return;
    if (prefersReduced.current) {
      setIndex((next + count) % count);
      return;
    }
    setSliding(dir);
    setTimeout(() => {
      setIndex((next + count) % count);
      setSliding(null);
    }, SLIDE_MS);
  }, [sliding, count]);

  const next = useCallback(() => goTo(index + 1, 'left'), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1, 'right'), [goTo, index]);

  // Autoplay
  useEffect(() => {
    if (paused || prefersReduced.current) return;
    timerRef.current = setTimeout(next, AUTO_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [index, paused, next]);

  // Visibility pause
  useEffect(() => {
    const handler = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', handler);
    return () => document.removeEventListener('visibilitychange', handler);
  }, []);

  const v = vehicles[index];

  // Slide transform classes
  const enterClass = sliding === 'left'
    ? 'translate-x-full opacity-0'
    : sliding === 'right'
    ? '-translate-x-full opacity-0'
    : 'translate-x-0 opacity-100';

  return (
    <div
      className="bg-black/40 backdrop-blur-sm border border-white/10 rounded overflow-hidden select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={e => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        if (touchStartX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 40) { dx < 0 ? next() : prev(); }
        touchStartX.current = null;
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
        <p className="text-[10px] uppercase tracking-wider text-white/60 font-semibold">In Stock Right Now</p>
        <span className="text-[10px] text-white/40">{index + 1}/{count}</span>
      </div>

      {/* Featured vehicle */}
      <div className="relative overflow-hidden">
        {/* Image */}
        <div
          className="relative aspect-[16/10] overflow-hidden cursor-pointer"
          onClick={() => navigate(`/shop/${v.id}`)}
        >
          <img
            src={v.images[0]}
            alt={v.fullName}
            className={`w-full h-full object-cover transition-all duration-[600ms] ease-in-out ${
              sliding ? enterClass : 'translate-x-0 opacity-100'
            }`}
          />
          {v.badge && (
            <span className="absolute top-2 left-2 bg-[#C41E3A] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">
              {v.badge}
            </span>
          )}
          {/* Arrow controls over image */}
          <button
            onClick={e => { e.stopPropagation(); prev(); }}
            aria-label="Previous vehicle"
            className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button
            onClick={e => { e.stopPropagation(); next(); }}
            aria-label="Next vehicle"
            className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>

        {/* Vehicle info */}
        <div
          className={`px-4 py-3 cursor-pointer transition-all duration-[600ms] ease-in-out ${
            sliding ? (sliding === 'left' ? '-translate-x-4 opacity-0' : 'translate-x-4 opacity-0') : 'translate-x-0 opacity-100'
          }`}
          onClick={() => navigate(`/shop/${v.id}`)}
        >
          <p className="text-white/50 text-[10px] uppercase tracking-wide mb-0.5">
            {v.year} · {v.condition}
          </p>
          <p className="text-white text-sm font-semibold leading-snug">{v.fullName}</p>
          <p className="text-[#C41E3A] text-xs font-bold mt-0.5">{v.price}</p>
          <p className="text-white/50 text-xs mt-1.5 hover:text-white/80 transition-colors">View Vehicle →</p>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-1 pb-2.5">
        {vehicles.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > index ? 'left' : 'right')}
            aria-label={`Go to vehicle ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? 'w-4 h-1.5 bg-[#C41E3A]'
                : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 border-t border-white/10">
        <Link to="/shop" className="text-[#C41E3A] text-xs font-medium hover:underline">
          See all available cars →
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-[360px] sm:min-h-[480px] flex items-center"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#07172F]/95 via-[#07172F]/80 to-[#07172F]/40" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center max-w-6xl">
            {/* Left */}
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-1.5 mb-3">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-white/70 text-xs">47 Ogunnusi Road, Ogba · Ikeja · Lagos</span>
              </div>
              <h1 className="text-white/80 text-2xl sm:text-3xl font-bold leading-tight mb-1">
                Your Next Car
              </h1>
              <h1 className="text-white text-3xl sm:text-4xl font-bold leading-tight mb-3">
                Starts Here.
              </h1>
              <p className="text-white/70 text-sm mb-5 leading-relaxed max-w-md">
                Quality foreign used vehicles at Dashlink Integrated Autos,&nbsp;&nbsp;inspect before you pay, no pressure, transparent pricing.
              </p>
              <div className="flex flex-wrap gap-2">
                <Link
                  to="/shop"
                  className="bg-[#07172F] text-white text-sm font-semibold px-4 py-2 rounded border border-white/20 hover:bg-white hover:text-[#07172F] transition-colors"
                >
                  Browse Available Cars
                </Link>
                <Link
                  to="/pre-order"
                  className="text-white text-sm font-semibold px-4 py-2 rounded border border-white/40 hover:border-white transition-colors"
                >
                  Pre-Order a Vehicle
                </Link>
                <button
                  onClick={() => openWhatsApp('Hi, I\'d like to enquire about a vehicle at Dashlink Autos.')}
                  className="bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#1fbd5a] transition-colors"
                >
                  Chat on WhatsApp
                </button>
              </div>
            </div>

            {/* Right panel — IN STOCK CAROUSEL */}
            <div className="hidden lg:block w-64 xl:w-72 shrink-0">
              <InStockCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-white border-b border-[#E1E6EE]">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="text-[#C41E3A] shrink-0">{item.icon}</div>
                <span className="text-xs sm:text-sm text-[#08172F] font-medium leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH PANEL */}
      <SearchPanel />

      {/* BROWSE BY MAKE */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 h-px bg-[#C41E3A]" />
            <span className="text-[#C41E3A] text-[10px] uppercase tracking-wider font-semibold">Inventory Filters</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#08172F]">Browse by Make</h2>
          <p className="text-xs text-[#64748B] mt-1">Independent dealership carrying multiple trusted brands.</p>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-6">
          {brandTiles.map(brand => (
            <div
              key={brand.name}
              onClick={() => navigate(`/shop?make=${encodeURIComponent(brand.name)}`)}
              className="shrink-0 w-32 sm:w-auto relative h-28 rounded overflow-hidden cursor-pointer group"
              style={{
                backgroundImage: `url(${brand.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-[#07172F]/60 group-hover:bg-[#07172F]/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs font-semibold text-center px-1 leading-tight">{brand.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECENTLY ADDED */}
      <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-6 h-px bg-[#C41E3A]" />
              <span className="text-[#C41E3A] text-[10px] uppercase tracking-wider font-semibold">New Stock</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#08172F]">Recently Added</h2>
            <p className="text-xs text-[#64748B] mt-1">Fresh arrivals and newly listed vehicles.</p>
          </div>
          <Link to="/shop" className="text-sm text-[#C41E3A] font-medium hover:underline whitespace-nowrap mt-1">
            All {recentVehicles.length} in stock →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
          {recentVehicles.map(v => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
      </section>

      {/* MORE INVENTORY */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-px bg-[#C41E3A]" />
          <span className="text-[#64748B] text-xs uppercase tracking-wider font-medium">More Available</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {moreVehicles.slice(0, 8).map(v => (
            <VehicleCard key={v.id} vehicle={v} />
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            to="/shop"
            className="inline-block bg-[#07172F] text-white text-sm font-semibold px-6 py-2.5 rounded hover:bg-[#0f2547] transition-colors"
          >
            View All {inventory.length} Vehicles
          </Link>
        </div>
      </section>

      {/* PRE-ORDER SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/2 rounded overflow-hidden shrink-0">
            <img
              src="https://images.unsplash.com/photo-1692406069831-0bb7ea297645?w=800"
              alt="Pre-order a vehicle"
              className="w-full h-52 sm:h-64 object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#C41E3A]" />
              <span className="text-[#C41E3A] text-[10px] uppercase tracking-wider font-semibold">Pre-Order & Sourcing</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#08172F] mb-3">
              Can't find the exact car? Tell us what you want.
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed mb-5">
              We source and import vehicles directly. Tell us the make, model, year, and colour, we'll find it and bring it in for you. No stress, no middlemen.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/pre-order"
                className="bg-[#C41E3A] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Pre-Order a Vehicle
              </Link>
              <button
                onClick={() => openWhatsApp('Hi, I\'d like to pre-order a vehicle from Dashlink Autos.')}
                className="bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#1fbd5a] transition-colors"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#07172F] text-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-px bg-[#C41E3A]" />
            <span className="text-[#C41E3A] text-[10px] uppercase tracking-wider font-semibold">What We Do</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            A dealership set up around how Nigerians actually buy cars.
          </h2>
          <p className="text-white/60 text-sm mb-8 max-w-2xl">
            No pressure tactics. No inflated pricing. Just honest vehicles, clear information, and a team you can reach on WhatsApp any time.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whatWeDo.map((item, i) => (
              <div key={i} className="border border-white/10 rounded p-5">
                <div className="text-white mb-3">{item.icon}</div>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse gap-6 items-center">
          <div className="md:w-1/2 rounded overflow-hidden shrink-0">
            <img
              src="https://images.unsplash.com/photo-1697761221129-fdf528507890?w=800"
              alt="Vehicle video walkarounds"
              className="w-full h-52 sm:h-64 object-cover"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#C41E3A]" />
              <span className="text-[#C41E3A] text-[10px] uppercase tracking-wider font-semibold">Watch Before You Come</span>
            </div>
            <h2 className="text-xl font-bold text-[#08172F] mb-3">
              Vehicle videos, walkarounds and reels
            </h2>
            <p className="text-sm text-[#64748B] leading-relaxed mb-5">
              We post regular walkaround videos of our cars on YouTube, TikTok, and Instagram. See every angle before you make the trip.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="border border-[#E1E6EE] text-[#08172F] text-xs font-medium px-3 py-1.5 rounded hover:border-[#07172F] transition-colors">
                YouTube
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="border border-[#E1E6EE] text-[#08172F] text-xs font-medium px-3 py-1.5 rounded hover:border-[#07172F] transition-colors">
                TikTok
              </a>
              <a href="https://instagram.com/dashlinkautos889" target="_blank" rel="noreferrer" className="border border-[#E1E6EE] text-[#08172F] text-xs font-medium px-3 py-1.5 rounded hover:border-[#07172F] transition-colors">
                Instagram
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => openWhatsApp('Hi, I\'d like to request a video walkaround of a vehicle.')}
                className="bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#1fbd5a] transition-colors"
              >
                Request a Video
              </button>
              <a href="https://instagram.com/dashlinkautos889" target="_blank" rel="noreferrer" className="text-sm text-[#64748B] hover:text-[#08172F] py-2 transition-colors">
                Follow @dashlinkautos889 →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT THE YARD */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-px bg-[#C41E3A]" />
              <span className="text-[#C41E3A] text-[10px] uppercase tracking-wider font-semibold">Visit the Yard</span>
            </div>
            <h2 className="text-xl font-bold text-[#08172F] mb-3">Come and inspect the car yourself</h2>
            <p className="text-sm text-[#64748B] leading-relaxed mb-4">
              Our cars are physically on ground at our yard in Ogba. Walk in, inspect, test, and confirm before paying anything.
            </p>
            <ul className="space-y-2 mb-5">
              {[
                'No inspection fee',
                'Complete paperwork provided',
                'Duty-paid vehicles available',
                'Buy and drive same day',
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#08172F]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C41E3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mb-4 text-sm text-[#08172F]">
              <p className="font-semibold">47 Ogunnusi Road, Ogba, Ikeja, Lagos</p>
              <p className="text-[#64748B] mt-1">📞 08037122549 · 08095550003</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a href="tel:08037122549" className="border border-[#E1E6EE] text-[#08172F] text-sm font-medium px-4 py-2 rounded hover:border-[#07172F] transition-colors">
                Call Us
              </a>
              <button
                onClick={() => openWhatsApp('Hi, I\'d like to visit the yard at Dashlink Autos. What time can I come?')}
                className="bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#1fbd5a] transition-colors"
              >
                WhatsApp to Arrange Visit
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-full rounded overflow-hidden border border-[#E1E6EE]">
            <iframe
              src="https://maps.google.com/maps?q=47+Ogunnusi+Road,+Ogba,+Ikeja,+Lagos&output=embed"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Dashlink Autos Location"
            />
          </div>
        </div>
      </section>

      {/* Cross-business: Dashlink Integrated Systems */}
      <section className="bg-white border-t border-[#E1E6EE] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700"
              alt="Computers and technology"
              className="w-full h-48 object-cover rounded"
              loading="lazy"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-[#C41E3A] mb-1 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-[#C41E3A]" />
              More from Dashlink
            </p>
            <h2 className="text-xl font-bold text-[#08172F] mb-2">Looking for Computers &amp; Technology?</h2>
            <p className="text-sm text-[#64748B] mb-5 leading-relaxed">
              Visit Dashlink Integrated Systems for laptops, PCs, accessories, smartwatches and more.
            </p>
            <a
              href={DASHLINK_SYSTEMS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#07172F] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#0d2340] transition-colors"
            >
              Visit Integrated Systems ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
