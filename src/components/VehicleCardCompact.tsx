import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Vehicle } from '../data/inventory';
import { getSavedIds, toggleSaved } from '../data/inventory';

interface Props {
  vehicle: Vehicle;
}

export default function VehicleCardCompact({ vehicle }: Props) {
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

  return (
    <div
      onClick={() => navigate(`/shop/${vehicle.id}`)}
      className="bg-white border border-[#E1E6EE] rounded overflow-hidden cursor-pointer hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={vehicle.images[0]}
          alt={vehicle.fullName}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {vehicle.badge && (
          <span className="absolute top-1.5 left-1.5 bg-[#C41E3A] text-white text-[8px] font-bold px-1 py-0.5 rounded uppercase tracking-wide">
            {vehicle.badge}
          </span>
        )}
        <button
          onClick={handleSave}
          className="absolute top-1.5 right-1.5 bg-white/90 rounded-full p-1 shadow"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill={saved ? '#C41E3A' : 'none'} stroke={saved ? '#C41E3A' : '#64748B'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div className="p-2">
        <span className="inline-block bg-[#F6F8FB] text-[#64748B] text-[9px] uppercase tracking-wide font-medium px-1.5 py-0.5 rounded mb-1">
          {vehicle.condition}
        </span>
        <h3 className="text-[12px] font-semibold text-[#08172F] leading-tight line-clamp-2">{vehicle.fullName}</h3>
        <p className="text-[11px] font-bold text-[#C41E3A] mt-0.5">{vehicle.price}</p>
      </div>
    </div>
  );
}
