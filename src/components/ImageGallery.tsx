import { useState, useEffect, useRef } from 'react';

interface Props {
  images: string[];
  vehicleName: string;
}

export default function ImageGallery({ images, vehicleName }: Props) {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  function prev() {
    setCurrent(c => (c - 1 + images.length) % images.length);
  }

  function next() {
    setCurrent(c => (c + 1) % images.length);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function onPointerDown(e: React.PointerEvent) {
    setStartX(e.clientX);
  }

  function onPointerUp(e: React.PointerEvent) {
    if (startX === null) return;
    const diff = e.clientX - startX;
    if (diff < -50) next();
    else if (diff > 50) prev();
    setStartX(null);
  }

  return (
    <div className="w-full">
      {/* Main image */}
      <div
        ref={mainRef}
        className="relative aspect-[4/3] bg-gray-100 rounded overflow-hidden select-none cursor-grab"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <img
          src={images[current]}
          alt={`${vehicleName} - image ${current + 1}`}
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* Prev / Next */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </>
        )}

        {/* Counter */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {current + 1} of {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 mt-2 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-colors ${
                i === current ? 'border-[#C41E3A]' : 'border-transparent'
              }`}
            >
              <img src={img} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
