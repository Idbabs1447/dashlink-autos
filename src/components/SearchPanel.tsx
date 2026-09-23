import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { inventory } from '../data/inventory';

const makes = [...new Set(inventory.map(v => v.make))].sort();
const years = [...new Set(inventory.map(v => v.year))].sort((a, b) => b - a);

interface Props {
  compact?: boolean;
}

export default function SearchPanel({ compact }: Props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [make, setMake] = useState('');
  const [year, setYear] = useState('');
  const [bodyType, setBodyType] = useState('');

  function handleSearch() {
    const params = new URLSearchParams();
    if (search) params.set('q', search);
    if (make) params.set('make', make);
    if (year) params.set('year', year);
    if (bodyType) params.set('bodyType', bodyType);
    navigate(`/shop?${params.toString()}`);
  }

  if (compact) {
    return (
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search vehicles..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
          className="flex-1 border border-[#E1E6EE] rounded text-sm px-3 py-2 outline-none focus:border-[#C41E3A]"
        />
        <button
          onClick={handleSearch}
          className="bg-[#C41E3A] text-white text-sm font-semibold px-4 py-2 rounded whitespace-nowrap"
        >
          Search
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border-b border-[#E1E6EE] py-4 px-3 sm:px-6 lg:px-8 shadow-sm">
      <p className="text-[11px] text-[#64748B] mb-2">{inventory.length} vehicles available · multiple makes</p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Search make, model..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
          className="flex-1 border border-[#E1E6EE] rounded text-sm px-3 py-2 outline-none focus:border-[#C41E3A] min-w-0"
        />
        <select
          value={make}
          onChange={e => setMake(e.target.value)}
          className="border border-[#E1E6EE] rounded text-sm px-3 py-2 outline-none focus:border-[#C41E3A] text-[#64748B] sm:w-36"
        >
          <option value="">All Makes</option>
          {makes.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <select
          value={year}
          onChange={e => setYear(e.target.value)}
          className="border border-[#E1E6EE] rounded text-sm px-3 py-2 outline-none focus:border-[#C41E3A] text-[#64748B] sm:w-28"
        >
          <option value="">All Years</option>
          {years.map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <select
          value={bodyType}
          onChange={e => setBodyType(e.target.value)}
          className="border border-[#E1E6EE] rounded text-sm px-3 py-2 outline-none focus:border-[#C41E3A] text-[#64748B] sm:w-32"
        >
          <option value="">Body Type</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Crossover">Crossover</option>
        </select>
        <button
          onClick={handleSearch}
          className="bg-[#C41E3A] text-white text-sm font-semibold px-6 py-2 rounded hover:bg-red-700 transition-colors whitespace-nowrap"
        >
          SEARCH CARS
        </button>
      </div>
    </div>
  );
}
