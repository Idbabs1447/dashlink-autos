import { useParams, Link, useNavigate } from 'react-router-dom';
import { articles } from '../data/articles';
import { inventory, openWhatsApp } from '../data/inventory';
import VehicleCard from '../components/VehicleCard';

export default function ArticleDetail() {
  const { articleId } = useParams<{ articleId: string }>();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === articleId);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F6F8FB]">
        <div className="text-center px-4">
          <p className="text-[#64748B] text-sm mb-4">Article not found.</p>
          <Link to="/car-guide" className="text-[#C41E3A] text-sm font-semibold hover:underline">
            ← Back to Car Guide
          </Link>
        </div>
      </div>
    );
  }

  const otherArticles = articles.filter(a => a.id !== article.id).slice(0, 3);
  const relatedVehicles = article.relatedMakes
    ? inventory.filter(v => article.relatedMakes!.includes(v.make)).slice(0, 3)
    : [];

  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Top breadcrumb bar */}
      <div className="bg-[#07172F] px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-3xl mx-auto">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/car-guide" className="hover:text-white transition-colors">Car Guide</Link>
            <span>/</span>
            <span className="text-white/80 line-clamp-1">{article.title}</span>
          </nav>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Category + meta */}
        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-[#64748B] bg-[#E8EDF3] px-2 py-0.5 rounded mb-3">
          {article.category}
        </span>
        <h1 className="text-2xl font-bold text-[#08172F] leading-tight mb-2">
          {article.title}
        </h1>
        <p className="text-[13px] text-[#94A3B8] mb-5">{article.readTime}</p>

        {/* Hero image */}
        <div className="w-full max-h-72 overflow-hidden rounded mb-8 bg-gray-100">
          <img
            src={article.heroImage}
            alt={article.title}
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Content blocks */}
        <div>
          {article.content.map((block, i) => {
            if (block.type === 'paragraph') {
              return (
                <p key={i} className="text-[15px] leading-relaxed text-[#374151] mb-4">
                  {block.text}
                </p>
              );
            }
            if (block.type === 'heading') {
              return (
                <h2 key={i} className="text-lg font-semibold text-[#08172F] mt-8 mb-3">
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'list') {
              return (
                <ul key={i} className="list-disc list-outside pl-5 mb-4 space-y-1.5">
                  {block.items.map((item, j) => (
                    <li key={j} className="text-[15px] leading-relaxed text-[#374151]">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === 'callout') {
              return (
                <div key={i} className="bg-[#F6F8FB] border-l-4 border-[#C41E3A] px-4 py-3 text-sm text-[#374151] my-6 rounded-r">
                  {block.text}
                </div>
              );
            }
            if (block.type === 'divider') {
              return <hr key={i} className="border-[#E1E6EE] my-6" />;
            }
            return null;
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-[#F6F8FB] border border-[#E1E6EE] rounded p-6 mt-8">
          <h3 className="text-[#08172F] font-semibold text-base mb-1">Looking for your next car?</h3>
          <p className="text-[#64748B] text-sm mb-4">Browse what's available at Dashlink.</p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/shop"
              className="bg-[#C41E3A] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#a3192f] transition-colors"
            >
              Browse Available Cars
            </Link>
            <button
              onClick={() => openWhatsApp('Hi Dashlink, I\'d like to enquire about available vehicles.')}
              className="bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#1fbd5a] transition-colors"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>

        {/* Related Guides */}
        {otherArticles.length > 0 && (
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-[#08172F] mb-4 uppercase tracking-wider">
              You may also find useful
            </h3>
            <div className="flex flex-col gap-3">
              {otherArticles.map(other => (
                <div
                  key={other.id}
                  onClick={() => navigate(`/car-guide/${other.id}`)}
                  className="bg-white border border-[#E1E6EE] rounded flex gap-3 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
                >
                  <div className="w-24 shrink-0 overflow-hidden bg-gray-100">
                    <img
                      src={other.heroImage}
                      alt={other.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="py-3 pr-3 flex flex-col justify-center">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                      {other.category}
                    </span>
                    <h4 className="text-[13px] font-semibold text-[#08172F] leading-snug line-clamp-2 group-hover:text-[#C41E3A] transition-colors">
                      {other.title}
                    </h4>
                    <span className="text-[11px] text-[#94A3B8] mt-1">{other.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related inventory */}
        {relatedVehicles.length > 0 && (
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-[#08172F] mb-4 uppercase tracking-wider">
              Related vehicles available now
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {relatedVehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
