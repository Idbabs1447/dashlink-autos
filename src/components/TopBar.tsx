export const DASHLINK_SYSTEMS_URL = 'https://SYSTEMS-WEBSITE-URL-HERE.com';

export default function TopBar() {
  return (
    <div className="hidden sm:flex items-center justify-between bg-[#07172F] text-white/80 text-[11px] h-8 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-1.5">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span>47 Ogunnusi Road, Ogba, Ikeja, Lagos</span>
      </div>
      <div className="flex items-center gap-1.5">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
        <span>@dashlinkautos889</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.19 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16a2 2 0 0 1 .27.92z"/>
          </svg>
          <span>08037122549 · 08095550003</span>
        </div>
        <span className="text-white/20">|</span>
        <a
          href={DASHLINK_SYSTEMS_URL}
          target="_blank"
          rel="noreferrer"
          className="text-white/50 hover:text-white/80 transition-colors"
        >
          Computers &amp; Tech? Visit Dashlink Integrated Systems →
        </a>
      </div>
    </div>
  );
}
