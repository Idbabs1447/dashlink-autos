import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { inventory, openWhatsApp, getSavedIds, toggleSaved } from '../data/inventory';
import ImageGallery from '../components/ImageGallery';
import VehicleCard from '../components/VehicleCard';

export default function VehicleDetail() {
  const { vehicleId } = useParams();
  const vehicle = inventory.find(v => v.id === vehicleId);
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

  useEffect(() => {
    if (vehicle) {
      setSaved(getSavedIds().includes(vehicle.id));
      setFormData(f => ({
        ...f,
        message: `Hi, I'm interested in the ${vehicle.fullName}. Please send me more details.`,
      }));
      window.scrollTo(0, 0);
    }
  }, [vehicle?.id]);

  if (!vehicle) {
    return (
      <div className="px-4 py-16 text-center">
        <p className="text-[#64748B] text-sm mb-3">Vehicle not found.</p>
        <Link to="/shop" className="text-[#C41E3A] text-sm font-medium hover:underline">Back to Shop</Link>
      </div>
    );
  }

  const similar = inventory.filter(v => v.id !== vehicle!.id && (v.make === vehicle!.make || v.bodyType === vehicle!.bodyType)).slice(0, 4);

  function handleSave() {
    const updated = toggleSaved(vehicle!.id);
    setSaved(updated.includes(vehicle!.id));
    window.dispatchEvent(new Event('dashlink-saved-change'));
  }

  function handleEnquiry(e: React.FormEvent) {
    e.preventDefault();
    openWhatsApp(`Hi, I'm interested in the ${vehicle!.fullName}.\n\nName: ${formData.name}\nPhone: ${formData.phone}\n\n${formData.message}`);
  }

  const specs = vehicle.specs;

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 lg:px-8 py-3 border-b border-[#E1E6EE] bg-white">
        <div className="flex items-center gap-1 text-xs text-[#64748B]">
          <Link to="/" className="hover:text-[#C41E3A] transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#C41E3A] transition-colors">Shop Cars</Link>
          <span>/</span>
          <span className="text-[#08172F] font-medium truncate">{vehicle.fullName}</span>
        </div>
      </div>

      {/* Main layout */}
      <div className="px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* Left: Gallery */}
          <div className="lg:w-[55%] shrink-0">
            <ImageGallery images={vehicle.images} vehicleName={vehicle.fullName} />

            {/* About section */}
            <div className="mt-6">
              <h2 className="text-base font-bold text-[#08172F] mb-2">About this Vehicle</h2>
              <p className="text-sm text-[#64748B] leading-relaxed">
                This {vehicle.fullName} is a {vehicle.condition.toLowerCase()} vehicle available at Dashlink Integrated Autos in Ogba, Lagos.
                {vehicle.arrival ? ` It arrived in ${vehicle.arrival}.` : ''} All our vehicles are available for physical inspection before purchase.
                Contact us for full details on pricing, condition report, and paperwork.
              </p>
            </div>

            {/* Specs */}
            <div className="mt-5">
              <h2 className="text-base font-bold text-[#08172F] mb-3">Specifications</h2>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Year', value: vehicle.year.toString() },
                  { label: 'Make', value: vehicle.make },
                  { label: 'Model', value: vehicle.model },
                  { label: 'Body Type', value: vehicle.bodyType },
                  { label: 'Condition', value: vehicle.condition },
                  { label: 'Transmission', value: specs.transmission },
                  { label: 'Fuel Type', value: specs.fuel },
                  { label: 'Engine', value: specs.engine },
                  { label: 'Drivetrain', value: specs.drivetrain },
                  { label: 'Mileage', value: specs.mileage },
                  { label: 'Exterior Colour', value: specs.exteriorColour },
                  { label: 'Interior', value: specs.interior },
                  { label: 'Duty', value: specs.duty },
                  { label: 'Location', value: specs.location },
                ].filter(s => s.value).map(s => (
                  <div key={s.label} className="bg-[#F6F8FB] border border-[#E1E6EE] rounded px-3 py-2">
                    <p className="text-[10px] text-[#64748B] uppercase tracking-wide">{s.label}</p>
                    <p className="text-xs font-medium text-[#08172F] mt-0.5">{s.value}</p>
                  </div>
                ))}
              </div>
              {vehicle.features && vehicle.features.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs font-semibold text-[#08172F] mb-2">Known Features</p>
                  <div className="flex flex-wrap gap-1.5">
                    {vehicle.features.map(f => (
                      <span key={f} className="bg-[#F6F8FB] border border-[#E1E6EE] text-[10px] text-[#08172F] px-2 py-1 rounded">{f}</span>
                    ))}
                  </div>
                </div>
              )}
              <p className="text-[10px] text-[#64748B] mt-3">Full feature list available on request. Contact us for a complete condition report.</p>
            </div>

            {/* Enquiry form */}
            <div className="mt-6 bg-white border border-[#E1E6EE] rounded p-4">
              <h2 className="text-base font-bold text-[#08172F] mb-3">Send an Enquiry</h2>
              <form onSubmit={handleEnquiry} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-medium text-[#64748B] block mb-1">Full Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
                      className="w-full border border-[#E1E6EE] rounded text-sm px-3 py-2 outline-none focus:border-[#C41E3A]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-[#64748B] block mb-1">Phone *</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData(f => ({ ...f, phone: e.target.value }))}
                      className="w-full border border-[#E1E6EE] rounded text-sm px-3 py-2 outline-none focus:border-[#C41E3A]"
                      placeholder="08012345678"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#64748B] block mb-1">Email (optional)</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData(f => ({ ...f, email: e.target.value }))}
                    className="w-full border border-[#E1E6EE] rounded text-sm px-3 py-2 outline-none focus:border-[#C41E3A]"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-[#64748B] block mb-1">Message</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={e => setFormData(f => ({ ...f, message: e.target.value }))}
                    className="w-full border border-[#E1E6EE] rounded text-sm px-3 py-2 outline-none focus:border-[#C41E3A] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#25D366] text-white text-sm font-semibold py-2.5 rounded hover:bg-[#1fbd5a] transition-colors"
                >
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:w-[45%]">
            <div className="lg:sticky lg:top-20">
              {/* Status */}
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">In Stock</span>
                {vehicle.badge && (
                  <span className="bg-[#C41E3A] text-white text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wide">{vehicle.badge}</span>
                )}
              </div>

              <h1 className="text-2xl font-bold text-[#08172F] leading-tight mb-1">{vehicle.fullName}</h1>
              <p className="text-xs text-[#64748B] mb-3">{vehicle.condition} · {vehicle.bodyType}</p>

              <p className="text-xl font-bold text-[#C41E3A] mb-1">{vehicle.price}</p>
              <p className="text-[11px] text-[#64748B] mb-5">Contact us for full pricing and payment options. No hidden fees.</p>

              {/* Primary CTA */}
              <button
                onClick={() => openWhatsApp(`Hi, I'm interested in the ${vehicle.fullName}. Is it still available?`)}
                className="w-full bg-[#25D366] text-white text-sm font-semibold py-3 rounded hover:bg-[#1fbd5a] transition-colors flex items-center justify-center gap-2 mb-3"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enquire on WhatsApp
              </button>

              {/* Phone buttons */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <a href="tel:08037122549" className="border border-[#E1E6EE] text-[#08172F] text-sm font-medium py-2 rounded text-center hover:border-[#07172F] transition-colors">
                  08037122549
                </a>
                <a href="tel:08095550003" className="border border-[#E1E6EE] text-[#08172F] text-sm font-medium py-2 rounded text-center hover:border-[#07172F] transition-colors">
                  08095550003
                </a>
              </div>

              {/* Secondary row */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                  onClick={() => openWhatsApp(`Hi, I'd like to reserve a viewing slot for the ${vehicle.fullName}.`)}
                  className="border border-[#E1E6EE] text-[#08172F] text-xs font-medium py-2 rounded hover:border-[#07172F] transition-colors"
                >
                  Reserve a Slot
                </button>
                <button
                  onClick={() => openWhatsApp(`Hi, I'd like to send an enquiry about the ${vehicle.fullName}.`)}
                  className="border border-[#E1E6EE] text-[#08172F] text-xs font-medium py-2 rounded hover:border-[#07172F] transition-colors"
                >
                  Send Enquiry
                </button>
              </div>

              {/* Icon actions */}
              <div className="flex items-center gap-3 py-3 border-t border-[#E1E6EE]">
                <button
                  onClick={handleSave}
                  className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${saved ? 'text-[#C41E3A]' : 'text-[#64748B] hover:text-[#C41E3A]'}`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill={saved ? '#C41E3A' : 'none'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  {saved ? 'Saved' : 'Save'}
                </button>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: vehicle.fullName, url: window.location.href });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                    }
                  }}
                  className="flex items-center gap-1.5 text-xs font-medium text-[#64748B] hover:text-[#08172F] transition-colors"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                  Share
                </button>
              </div>

              {/* Location info */}
              <div className="mt-4 bg-[#F6F8FB] border border-[#E1E6EE] rounded p-3">
                <p className="text-[11px] font-semibold text-[#08172F] mb-1.5">Location</p>
                <div className="flex items-start gap-2">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C41E3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <p className="text-xs text-[#64748B] leading-relaxed">{specs.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar vehicles */}
        {similar.length > 0 && (
          <div className="mt-10 max-w-6xl mx-auto">
            <h2 className="text-lg font-bold text-[#08172F] mb-4">Similar Vehicles</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {similar.map(v => <VehicleCard key={v.id} vehicle={v} />)}
            </div>
          </div>
        )}
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E1E6EE] px-4 py-3 flex gap-2 md:hidden z-50">
        <a href="tel:08037122549" className="flex-1 border border-[#E1E6EE] text-[#08172F] text-sm font-semibold py-2.5 rounded text-center">
          Call
        </a>
        <button
          onClick={() => openWhatsApp(`Hi, I'm interested in the ${vehicle.fullName}. Is it still available?`)}
          className="flex-1 bg-[#25D366] text-white text-sm font-semibold py-2.5 rounded"
        >
          WhatsApp
        </button>
      </div>
    </div>
  );
}
