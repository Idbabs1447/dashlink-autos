import { Link } from 'react-router-dom';
import logo from '../assets/dashlink-logo.png';
import { openWhatsApp } from '../data/inventory';
import { DASHLINK_SYSTEMS_URL } from './TopBar';

export default function Footer() {
  return (
    <footer className="bg-[#07172F] text-white">
      <div className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="Dashlink Integrated Autos" className="h-10 w-auto object-contain mb-3 brightness-200" />
            <p className="text-white/60 text-xs leading-relaxed">
              A trusted foreign used car dealership based in Ogba, Lagos. We help Nigerians find quality vehicles with transparency and ease.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <button onClick={() => openWhatsApp('Hi Dashlink Autos!')} className="text-white/60 hover:text-[#25D366] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
              <a href="https://instagram.com/dashlinkautos889" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Inventory + Services: side by side on mobile, separate cols on desktop */}
          <div className="grid grid-cols-2 lg:contents gap-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">Inventory</h4>
              <ul className="space-y-2">
                {['All Vehicles', 'Sedans', 'SUVs', 'Hatchbacks', 'Recently Added'].map(item => (
                  <li key={item}>
                    <Link to="/shop" className="text-white/60 hover:text-white text-xs transition-colors">{item}</Link>
                  </li>
                ))}
                <li className="pt-1 border-t border-white/10 mt-1">
                  <Link to="/car-guide" className="text-white/60 hover:text-white text-xs transition-colors">Car Guide</Link>
                </li>
                <li>
                  <Link to="/car-guide" className="text-white/60 hover:text-white text-xs transition-colors">Buying Guides</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">Services</h4>
              <ul className="space-y-2">
                {['Pre-Order a Vehicle', 'Importation & Sourcing', 'Inspection Before Purchase', 'Customs Clearance', 'Vehicle Videos'].map(item => (
                  <li key={item}>
                    <Link to="/pre-order" className="text-white/60 hover:text-white text-xs transition-colors">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dashlink Businesses + Contact: side by side on mobile */}
          <div className="grid grid-cols-2 lg:contents gap-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">Dashlink Businesses</h4>
              <ul className="space-y-3">
                <li>
                  <span className="block text-xs font-medium text-white/80">Dashlink Integrated Autos</span>
                  <span className="text-[10px] text-white/40">You are here · Vehicles</span>
                </li>
                <li>
                  <a href={DASHLINK_SYSTEMS_URL} target="_blank" rel="noreferrer" className="group block">
                    <span className="block text-xs font-medium text-white/60 group-hover:text-white transition-colors">Dashlink Integrated Systems ↗</span>
                    <span className="text-[10px] text-white/40">Computers &amp; Technology</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">Contact</h4>
              <ul className="space-y-2 text-white/60 text-xs">
                <li>47 Ogunnusi Road, Ogba,</li>
                <li>Ikeja, Lagos, Nigeria</li>
                <li className="pt-1">
                  <a href="tel:08037122549" className="hover:text-white transition-colors">08037122549</a>
                </li>
                <li>
                  <a href="tel:08095550003" className="hover:text-white transition-colors">08095550003</a>
                </li>
                <li className="pt-1">
                  <a href="https://instagram.com/dashlinkautos889" className="hover:text-white transition-colors">@dashlinkautos889</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 sm:px-6 lg:px-8 py-4 text-center">
        <p className="text-white/40 text-xs">© {new Date().getFullYear()} Dashlink Integrated Autos. All rights reserved.</p>
      </div>
    </footer>
  );
}
