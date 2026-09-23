import { openWhatsApp } from '../data/inventory';
import { Link } from 'react-router-dom';

const values = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Transparency',
    desc: 'No hidden fees, no pressure tactics. We show you everything before you commit.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    title: 'Inspect First',
    desc: 'Every vehicle can be physically inspected at our yard before you pay a kobo.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Customer First',
    desc: 'We answer WhatsApp messages promptly and guide buyers through the entire process.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 3v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
    title: 'Direct Importation',
    desc: 'We import directly, cutting out middlemen so you get better value on your purchase.',
  },
];

const steps = [
  { title: 'Browse our inventory', desc: 'Check our website or contact us on WhatsApp for current stock.' },
  { title: 'Visit the yard', desc: 'Come to 47 Ogunnusi Road, Ogba to inspect the vehicle physically.' },
  { title: 'Agree on price', desc: 'No pressure. We discuss openly and agree on a fair price.' },
  { title: 'Complete documentation', desc: 'We provide all necessary paperwork and customs documentation.' },
  { title: 'Drive away', desc: 'Final inspection, payment, and the car is yours. Same-day handover available.' },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        className="relative min-h-[220px] sm:min-h-[280px] flex items-end"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=1400)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#07172F]/80" />
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-px bg-[#C41E3A]" />
            <span className="text-[#C41E3A] text-[10px] uppercase tracking-wider font-semibold">About Us</span>
          </div>
          <h1 className="text-white text-2xl sm:text-3xl font-bold">Dashlink Integrated Autos</h1>
          <p className="text-white/60 text-sm mt-1">Your trusted foreign-used car dealer in Ogba, Lagos.</p>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Main content */}
            <div className="flex-1">
              {/* Who We Are */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-[#08172F] mb-3">Who We Are</h2>
                <div className="space-y-3 text-sm text-[#64748B] leading-relaxed">
                  <p>
                    Dashlink Integrated Autos is a foreign-used car dealership based at 47 Ogunnusi Road, Ogba, Ikeja, Lagos. We specialize in sourcing, importing, and selling quality pre-owned vehicles, primarily Toyota, Lexus, Honda, Hyundai, Mercedes-Benz, and more.
                  </p>
                  <p>
                    We set up Dashlink to address a real problem in the Nigerian car market: opacity. Too many buyers don't know what they're paying for until it's too late. We believe buying a car should be straightforward, inspect it, confirm the paperwork, agree on a price, and drive it home.
                  </p>
                  <p>
                    Our stock is physically available at our yard. You can walk in any day, inspect any vehicle, and make a decision without pressure. We also source vehicles on request through our pre-order service.
                  </p>
                </div>
              </section>

              {/* Values */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-[#08172F] mb-4">What We Stand For</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {values.map((v, i) => (
                    <div key={i} className="bg-white border border-[#E1E6EE] rounded p-4">
                      <div className="text-[#C41E3A] mb-2">{v.icon}</div>
                      <h3 className="text-sm font-semibold text-[#08172F] mb-1">{v.title}</h3>
                      <p className="text-xs text-[#64748B] leading-relaxed">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Buying guide */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-[#08172F] mb-4">How Buying Works at Dashlink</h2>
                <div className="space-y-3">
                  {steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="bg-[#C41E3A] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      <div>
                        <p className="text-sm font-semibold text-[#08172F]">{step.title}</p>
                        <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Map */}
              <section>
                <h2 className="text-xl font-bold text-[#08172F] mb-3">Find Us</h2>
                <div className="rounded overflow-hidden border border-[#E1E6EE] mb-4">
                  <iframe
                    src="https://maps.google.com/maps?q=47+Ogunnusi+Road,+Ogba,+Ikeja,+Lagos&output=embed"
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Dashlink Autos Location"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <a href="tel:08037122549" className="border border-[#E1E6EE] text-[#08172F] text-sm font-medium px-4 py-2 rounded hover:border-[#07172F] transition-colors">
                    Call: 08037122549
                  </a>
                  <button
                    onClick={() => openWhatsApp('Hi Dashlink Autos! I\'d like to visit your yard.')}
                    className="bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#1fbd5a] transition-colors"
                  >
                    WhatsApp Us
                  </button>
                  <Link
                    to="/shop"
                    className="bg-[#07172F] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#0f2547] transition-colors"
                  >
                    Browse Inventory
                  </Link>
                </div>
              </section>
            </div>

            {/* Services aside */}
            <aside className="md:w-56 lg:w-64 shrink-0">
              <div className="bg-[#07172F] rounded p-5 sticky top-20">
                <h3 className="text-white text-sm font-bold mb-4">Our Services</h3>
                <ul className="space-y-3">
                  {[
                    { icon: '🚗', label: 'Direct Stock Sales', desc: 'Buy vehicles on ground at our Ogba yard' },
                    { icon: '📦', label: 'Pre-Order & Sourcing', desc: 'We import your exact specification' },
                    { icon: '🛃', label: 'Customs Clearance', desc: 'We handle all duty and documentation' },
                    { icon: '📹', label: 'Video Walkarounds', desc: 'YouTube, TikTok & Instagram content' },
                    { icon: '🔍', label: 'Pre-Purchase Inspection', desc: 'Inspect before you commit to buying' },
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-base shrink-0">{s.icon}</span>
                      <div>
                        <p className="text-white text-xs font-semibold">{s.label}</p>
                        <p className="text-white/50 text-[10px] leading-relaxed mt-0.5">{s.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openWhatsApp('Hi, I\'d like to know more about Dashlink Autos\' services.')}
                  className="w-full mt-5 bg-[#C41E3A] text-white text-xs font-semibold py-2.5 rounded hover:bg-red-700 transition-colors"
                >
                  Enquire Now
                </button>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
