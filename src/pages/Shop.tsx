import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { inventory } from '../data/inventory';
import VehicleCard from '../components/VehicleCard';
import VehicleCardCompact from '../components/VehicleCardCompact';

const PAGE_SIZE = 8;
const makes = [...new Set(inventory.map(v => v.make))].sort();
const bodyTypes = [...new Set(inventory.map(v => v.bodyType))].sort();
const years = [...new Set(inventory.map(v => v.year))].sort((a, b) => b - a);

function SidebarSection({ title, children, defaultOpen = true }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-[#E1E6EE]">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center justify-between w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#64748B] hover:text-[#08172F] transition-colors"
      >
        {title}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      {open && <div className="pb-3 px-4">{children}</div>}
    </div>
  );
}

export default function Shop() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [selectedMakes, setSelectedMakes] = useState<string[]>(searchParams.get('make') ? [searchParams.get('make')!] : []);
  const [selectedBodyTypes, setSelectedBodyTypes] = useState<string[]>(searchParams.get('bodyType') ? [searchParams.get('bodyType')!] : []);
  const [yearFrom, setYearFrom] = useState(searchParams.get('year') || '');
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [page, setPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  function toggleMake(make: string) {
    setSelectedMakes(prev => prev.includes(make) ? prev.filter(m => m !== make) : [...prev, make]);
    setPage(1);
  }

  function toggleBodyType(bt: string) {
    setSelectedBodyTypes(prev => prev.includes(bt) ? prev.filter(b => b !== bt) : [...prev, bt]);
    setPage(1);
  }

  const filtered = useMemo(() => {
    let result = [...inventory];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(v =>
        v.fullName.toLowerCase().includes(q) ||
        v.make.toLowerCase().includes(q) ||
        v.model.toLowerCase().includes(q)
      );
    }
    if (selectedMakes.length > 0) {
      result = result.filter(v => selectedMakes.includes(v.make));
    }
    if (selectedBodyTypes.length > 0) {
      result = result.filter(v => selectedBodyTypes.includes(v.bodyType));
    }
    if (yearFrom) {
      result = result.filter(v => v.year >= parseInt(yearFrom));
    }
    if (sortBy === 'year-desc') result.sort((a, b) => b.year - a.year);
    else if (sortBy === 'year-asc') result.sort((a, b) => a.year - b.year);
    else if (sortBy === 'name-asc') result.sort((a, b) => a.fullName.localeCompare(b.fullName));
    return result;
  }, [search, selectedMakes, selectedBodyTypes, yearFrom, sortBy]);

  const shown = filtered.slice(0, page * PAGE_SIZE);
  const hasMore = shown.length < filtered.length;

  const SidebarContent = (
    <div className="w-full bg-white">
      <SidebarSection title="Search">
        <input
          type="text"
          placeholder="Make, model..."
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          className="w-full border border-[#E1E6EE] rounded text-sm px-3 py-2 outline-none focus:border-[#C41E3A]"
        />
      </SidebarSection>

      <SidebarSection title="Make">
        <div className="space-y-1.5">
          {makes.map(make => (
            <label key={make} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedMakes.includes(make)}
                onChange={() => toggleMake(make)}
                className="accent-[#C41E3A]"
              />
              <span className="text-xs text-[#08172F]">{make}</span>
              <span className="text-[10px] text-[#64748B] ml-auto">
                ({inventory.filter(v => v.make === make).length})
              </span>
            </label>
          ))}
        </div>
      </SidebarSection>

      <SidebarSection title="Body Type">
        <div className="space-y-1.5">
          {bodyTypes.map(bt => (
            <label key={bt} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedBodyTypes.includes(bt)}
                onChange={() => toggleBodyType(bt)}
                className="accent-[#C41E3A]"
              />
              <span className="text-xs text-[#08172F]">{bt}</span>
            </label>
          ))}
        </div>
      </SidebarSection>

      <SidebarSection title="Year From" defaultOpen={false}>
        <select
          value={yearFrom}
          onChange={e => { setYearFrom(e.target.value); setPage(1); }}
          className="w-full border border-[#E1E6EE] rounded text-sm px-3 py-2 outline-none focus:border-[#C41E3A]"
        >
          <option value="">Any Year</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
      </SidebarSection>

      <SidebarSection title="Condition" defaultOpen={false}>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" checked readOnly className="accent-[#C41E3A]" />
          <span className="text-xs text-[#08172F]">Foreign Used</span>
        </label>
      </SidebarSection>

      <div className="p-4">
        <button
          onClick={() => { setSearch(''); setSelectedMakes([]); setSelectedBodyTypes([]); setYearFrom(''); setPage(1); }}
          className="w-full border border-[#E1E6EE] text-[#64748B] text-xs py-2 rounded hover:border-[#C41E3A] hover:text-[#C41E3A] transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="bg-[#07172F] px-4 sm:px-6 lg:px-8 py-5">
        <h1 className="text-white text-xl font-bold">Shop Cars</h1>
        <p className="text-white/60 text-xs mt-1">Foreign-used vehicles available at Dashlink Integrated Autos</p>
      </div>

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-56 lg:w-64 shrink-0 border-r border-[#E1E6EE] bg-white min-h-screen">
          {SidebarContent}
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="bg-white border-b border-[#E1E6EE] px-3 sm:px-4 py-2.5 flex items-center gap-2">
            <button
              onClick={() => setFiltersOpen(true)}
              className="md:hidden border border-[#E1E6EE] text-[#08172F] text-xs font-medium px-3 py-1.5 rounded flex items-center gap-1"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="11" y1="18" x2="13" y2="18"/>
              </svg>
              Filters
            </button>
            <span className="text-xs text-[#64748B] flex-1">
              <span className="font-semibold text-[#08172F]">{filtered.length}</span> vehicles found
            </span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="border border-[#E1E6EE] rounded text-xs px-2 py-1.5 outline-none focus:border-[#C41E3A]"
            >
              <option value="default">Default</option>
              <option value="year-desc">Newest First</option>
              <option value="year-asc">Oldest First</option>
              <option value="name-asc">Name A–Z</option>
            </select>
            <div className="hidden sm:flex items-center gap-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-[#07172F] text-white' : 'text-[#64748B] hover:text-[#08172F]'}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-[#07172F] text-white' : 'text-[#64748B] hover:text-[#08172F]'}`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="p-3 sm:p-4">
            {shown.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-[#64748B] text-sm">No vehicles match your filters.</p>
                <button
                  onClick={() => { setSearch(''); setSelectedMakes([]); setSelectedBodyTypes([]); setYearFrom(''); }}
                  className="mt-3 text-[#C41E3A] text-sm font-medium hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : viewMode === 'list' ? (
              <div className="space-y-3">
                {shown.map(v => <VehicleCard key={v.id} vehicle={v} view="list" />)}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                {shown.map(v =>
                  isMobile
                    ? <VehicleCardCompact key={v.id} vehicle={v} />
                    : <VehicleCard key={v.id} vehicle={v} />
                )}
              </div>
            )}

            {hasMore && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setPage(p => p + 1)}
                  className="border border-[#E1E6EE] text-[#08172F] text-sm font-medium px-6 py-2.5 rounded hover:border-[#07172F] transition-colors"
                >
                  Load More ({filtered.length - shown.length} remaining)
                </button>
              </div>
            )}
          </div>

          {/* Pre-order CTA */}
          <div className="mx-3 sm:mx-4 mb-6 bg-[#07172F] rounded p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <div>
              <p className="text-white font-semibold text-sm">Looking for something not listed?</p>
              <p className="text-white/60 text-xs mt-0.5">We source and import vehicles on request.</p>
            </div>
            <Link
              to="/pre-order"
              className="bg-[#C41E3A] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-red-700 transition-colors whitespace-nowrap shrink-0"
            >
              Pre-Order a Vehicle
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile filters bottom sheet */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setFiltersOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#E1E6EE]">
              <span className="font-semibold text-sm">Filters</span>
              <button onClick={() => setFiltersOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            {SidebarContent}
            <div className="p-4 border-t border-[#E1E6EE]">
              <button
                onClick={() => setFiltersOpen(false)}
                className="w-full bg-[#07172F] text-white text-sm font-semibold py-2.5 rounded"
              >
                Show {filtered.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
