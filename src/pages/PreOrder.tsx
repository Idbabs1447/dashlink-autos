import { useState } from 'react';
import { openWhatsApp } from '../data/inventory';

const makes = ['Toyota', 'Lexus', 'Mercedes-Benz', 'Honda', 'Hyundai', 'Ford', 'BMW', 'Audi', 'Volkswagen', 'Kia', 'Nissan', 'Chevrolet', 'Other'];

export default function PreOrder() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    make: '',
    model: '',
    yearRange: '',
    condition: 'Foreign Used',
    budget: '',
    colour: '',
    requirements: '',
  });

  function update(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }));
  }

  function handleWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hi Dashlink Autos, I'd like to pre-order a vehicle.

Name: ${form.name}
Phone: ${form.phone}
WhatsApp: ${form.whatsapp || form.phone}

Vehicle Details:
Make: ${form.make}
Model: ${form.model}
Year / Year Range: ${form.yearRange}
Condition: ${form.condition}
Budget: ${form.budget}
Colour: ${form.colour || 'Not specified'}

Additional Requirements:
${form.requirements || 'None'}`;
    openWhatsApp(msg);
  }

  const inputClass = 'w-full border border-[#E1E6EE] rounded text-sm px-3 py-2 outline-none focus:border-[#C41E3A]';
  const labelClass = 'block text-[11px] font-medium text-[#64748B] mb-1';

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-[#07172F] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-px bg-[#C41E3A]" />
            <span className="text-[#C41E3A] text-[10px] uppercase tracking-wider font-semibold">Pre-Order & Sourcing</span>
          </div>
          <h1 className="text-white text-2xl sm:text-3xl font-bold mb-2">Pre-Order a Vehicle</h1>
          <p className="text-white/60 text-sm leading-relaxed">
            Can't find what you're looking for in our current stock? Tell us exactly what you want and we'll source and import it for you.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-[#E1E6EE] rounded p-5 sm:p-6">
            <h2 className="text-base font-bold text-[#08172F] mb-1">Vehicle Request Form</h2>
            <p className="text-xs text-[#64748B] mb-5">Fill in as much detail as possible. We'll contact you to confirm.</p>

            <form onSubmit={handleWhatsApp} className="space-y-4">
              {/* Contact info */}
              <div className="pb-4 border-b border-[#E1E6EE]">
                <p className="text-xs font-semibold text-[#08172F] mb-3">Your Contact Details</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input required type="text" value={form.name} onChange={e => update('name', e.target.value)} className={inputClass} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <input required type="tel" value={form.phone} onChange={e => update('phone', e.target.value)} className={inputClass} placeholder="08012345678" />
                  </div>
                  <div>
                    <label className={labelClass}>WhatsApp Number</label>
                    <input type="tel" value={form.whatsapp} onChange={e => update('whatsapp', e.target.value)} className={inputClass} placeholder="Same as phone if same" />
                  </div>
                </div>
              </div>

              {/* Vehicle details */}
              <div className="pb-4 border-b border-[#E1E6EE]">
                <p className="text-xs font-semibold text-[#08172F] mb-3">Vehicle Details</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Preferred Make *</label>
                    <select required value={form.make} onChange={e => update('make', e.target.value)} className={inputClass}>
                      <option value="">Select Make</option>
                      {makes.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Preferred Model *</label>
                    <input required type="text" value={form.model} onChange={e => update('model', e.target.value)} className={inputClass} placeholder="e.g. Camry, Accord" />
                  </div>
                  <div>
                    <label className={labelClass}>Year / Year Range *</label>
                    <input required type="text" value={form.yearRange} onChange={e => update('yearRange', e.target.value)} className={inputClass} placeholder="e.g. 2018 or 2016–2019" />
                  </div>
                  <div>
                    <label className={labelClass}>Condition</label>
                    <select value={form.condition} onChange={e => update('condition', e.target.value)} className={inputClass}>
                      <option value="Foreign Used">Foreign Used</option>
                      <option value="Nigerian Used">Nigerian Used</option>
                      <option value="New">Brand New</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Budget</label>
                    <input type="text" value={form.budget} onChange={e => update('budget', e.target.value)} className={inputClass} placeholder="e.g. ₦6,000,000" />
                  </div>
                  <div>
                    <label className={labelClass}>Preferred Colour (optional)</label>
                    <input type="text" value={form.colour} onChange={e => update('colour', e.target.value)} className={inputClass} placeholder="e.g. Black, White" />
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClass}>Additional Requirements (optional)</label>
                <textarea
                  rows={3}
                  value={form.requirements}
                  onChange={e => update('requirements', e.target.value)}
                  className={`${inputClass} resize-none`}
                  placeholder="e.g. Must have push-button start, sunroof, low mileage..."
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#C41E3A] text-white text-sm font-semibold py-2.5 rounded hover:bg-red-700 transition-colors"
                >
                  Send Vehicle Request
                </button>
                <button
                  type="button"
                  onClick={() => openWhatsApp('Hi Dashlink Autos, I want to pre-order a vehicle. Can we discuss?')}
                  className="flex-1 bg-[#25D366] text-white text-sm font-semibold py-2.5 rounded hover:bg-[#1fbd5a] transition-colors"
                >
                  Continue on WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Info panel */}
          <div className="mt-5 bg-[#07172F] rounded p-5">
            <h3 className="text-white text-sm font-bold mb-3">How Pre-Order Works</h3>
            <ol className="space-y-2">
              {[
                'Submit your vehicle request with as much detail as possible',
                'We\'ll confirm availability and provide a quote within 24 hours',
                'Agree on price and timeline, then we initiate sourcing',
                'We import, clear customs, and have it ready for you',
                'Inspect before final payment — no surprises',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="bg-[#C41E3A] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                  <span className="text-white/70 text-xs leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
