import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { inventory, getSavedIds } from '../data/inventory';
import VehicleCard from '../components/VehicleCard';

export default function Saved() {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    setSavedIds(getSavedIds());
    const handler = () => setSavedIds(getSavedIds());
    window.addEventListener('dashlink-saved-change', handler);
    return () => window.removeEventListener('dashlink-saved-change', handler);
  }, []);

  const savedVehicles = inventory.filter(v => savedIds.includes(v.id));

  return (
    <div className="min-h-screen">
      <div className="bg-[#07172F] px-4 sm:px-6 lg:px-8 py-5">
        <h1 className="text-white text-xl font-bold">Saved Vehicles</h1>
        <p className="text-white/60 text-xs mt-1">
          {savedVehicles.length > 0
            ? `${savedVehicles.length} vehicle${savedVehicles.length !== 1 ? 's' : ''} saved`
            : 'No saved vehicles yet'}
        </p>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-6">
        {savedVehicles.length === 0 ? (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F6F8FB] border border-[#E1E6EE] mb-4">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </div>
            <p className="text-[#08172F] font-semibold text-sm mb-1">No saved vehicles yet.</p>
            <p className="text-[#64748B] text-xs mb-5">Tap the heart icon on any vehicle card to save it here.</p>
            <Link
              to="/shop"
              className="bg-[#07172F] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#0f2547] transition-colors"
            >
              Browse Vehicles
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {savedVehicles.map(v => (
                <VehicleCard key={v.id} vehicle={v} />
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link to="/shop" className="text-[#C41E3A] text-sm font-medium hover:underline">
                Browse more vehicles →
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
