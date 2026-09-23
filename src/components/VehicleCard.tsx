import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Vehicle } from '../data/inventory';
import { openWhatsApp, getSavedIds, toggleSaved } from '../data/inventory';

interface Props {
  vehicle: Vehicle;
  view?: 'grid' | 'list';
}

export default function VehicleCard({ vehicle, view = 'grid' }: Props) {
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(getSavedIds().includes(vehicle.id));
  }, [vehicle.id]);

  function handleSave(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const updated = toggleSaved(vehicle.id);
    setSaved(updated.includes(vehicle.id));
    window.dispatchEvent(new Event('dashlink-saved-change'));
  }

  function handleWhatsApp(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    openWhatsApp(`Hi, I'm interested in the ${vehicle.fullName}. Is it still available?`);
  }

  if (view === 'list') {
    return (
      <div
        onClick={() => navigate(`/shop/${vehicle.id}`)}
        className="bg-white border border-[#E1E6EE] rounded flex overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
      >
        <div className="w-40 sm:w-56 shrink-0 relative overflow-hidden">
          <img
            src={vehicle.images[0]}
            alt={vehicle.fullName}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {vehicle.badge && (
            <span className="absolute top-2 left-2 bg-[#C41E3A] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">
              {vehicle.badge}
            </span>
          )}
        </div>
        <div className="flex-1 p-3 sm:p-4 flex flex-col justify-between">
          <div>
            <p className="text-[10px] text-[#64748B] uppercase tracking-wide mb-1">
              {vehicle.year} · {vehicle.condition} · {vehicle.bodyType}
            </p>
            <h3 className="text-sm font-semibold text-[#08172F] leading-tight group-hover:text-[#C41E3A] transition-colors duration-200">
              {vehicle.fullName}
            </h3>
            <p className="text-sm font-bold text-[#C41E3A] mt-1">{vehicle.price}</p>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <button
              onClick={handleWhatsApp}
              className="text-xs font-semibold bg-[#25D366] text-white px-3 py-1.5 rounded hover:bg-[#1fbd5a] transition-colors"
            >
              WhatsApp
            </button>
          </div>
        </div>
        <button
          onClick={handleSave}
          className="p-3 self-start text-[#64748B] hover:text-[#C41E3A] transition-colors shrink-0"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={saved ? '#C41E3A' : 'none'} stroke={saved ? '#C41E3A' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={() => navigate(`/shop/${vehicle.id}`)}
      className="bg-white border border-[#E1E6EE] rounded overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={vehicle.images[0]}
          alt={vehicle.fullName}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {vehicle.badge && (
          <span className={`absolute top-2 left-2 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide ${vehicle.badge === 'FRESHLY CLEARED' ? 'bg-amber-500' : 'bg-[#C41E3A]'}`}>
            {vehicle.badge}
          </span>
        )}
        <button
          onClick={handleSave}
          className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 shadow hover:bg-white transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill={saved ? '#C41E3A' : 'none'} stroke={saved ? '#C41E3A' : '#64748B'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div className="p-3">
        <p className="text-[10px] text-[#64748B] uppercase tracking-wide mb-0.5">
          {vehicle.year} · {vehicle.condition} · {vehicle.bodyType}
        </p>
        <h3 className="text-[13px] sm:text-sm font-semibold text-[#08172F] leading-snug line-clamp-2 group-hover:text-[#C41E3A] transition-colors duration-200">
          {vehicle.fullName}
        </h3>
        <p className="text-sm font-bold text-[#C41E3A] mt-1">{vehicle.price}</p>
        <button
          onClick={handleWhatsApp}
          className="w-full mt-2.5 text-xs font-semibold bg-[#25D366] text-white px-2 py-1.5 rounded hover:bg-[#1fbd5a] transition-colors"
        >
          WhatsApp
        </button>
      </div>
    </div>
  );
}
