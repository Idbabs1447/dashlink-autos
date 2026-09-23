import { Link, useNavigate } from 'react-router-dom';
import { articles } from '../data/articles';
import { openWhatsApp } from '../data/inventory';

export default function CarGuide() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Hero */}
      <div className="bg-[#07172F] text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Car Guide</span>
          </nav>
          <p className="text-[#C41E3A] text-xs font-bold uppercase tracking-widest mb-2">Car Guide</p>
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-2">
            Buying guides, comparisons and inspection tips
          </h1>
          <p className="text-white/60 text-sm max-w-xl">
            Useful information to help you buy the right car and avoid common mistakes.
          </p>
        </div>
      </div>

      {/* Article Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map(article => (
            <div
              key={article.id}
              onClick={() => navigate(`/car-guide/${article.id}`)}
              className="bg-white border border-[#E1E6EE] rounded overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 rounded mb-2 self-start">
                  {article.category}
                </span>
                <h2 className="text-[15px] font-semibold text-[#08172F] leading-snug line-clamp-2 mb-1.5">
                  {article.title}
                </h2>
                <p className="text-[13px] text-[#64748B] leading-relaxed line-clamp-3 flex-1">
                  {article.description}
                </p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#F1F5F9]">
                  <span className="text-[11px] text-[#94A3B8]">{article.readTime}</span>
                  <span className="text-[13px] font-semibold text-[#C41E3A] group-hover:underline">
                    Read Guide →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA Strip */}
        <div className="mt-10 bg-[#07172F] rounded px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-sm sm:text-base">
              Have a question about a specific car?
            </p>
            <p className="text-white/60 text-xs sm:text-sm mt-0.5">
              Ask us on WhatsApp — we're happy to help.
            </p>
          </div>
          <button
            onClick={() => openWhatsApp('Hi Dashlink, I have a question about a car I\'m considering.')}
            className="shrink-0 bg-[#25D366] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#1fbd5a] transition-colors"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
