import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/wisataData';
import { ResilientImage } from './ResilientImage';

export function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [mobileSlideIndex, setMobileSlideIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % GALLERY_PHOTOS.length
        );
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex]);

  const handleCarouselScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth * 0.85;
    if (cardWidth <= 0) return;
    const index = Math.round(el.scrollLeft / cardWidth);
    setMobileSlideIndex(Math.max(0, Math.min(GALLERY_PHOTOS.length - 1, index)));
  };

  const scrollToSlide = (idx: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const child = el.children[idx] as HTMLElement | undefined;
    if (child) {
      child.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
    setMobileSlideIndex(idx);
  };

  const activePhoto: GalleryPhoto | null =
    lightboxIndex !== null ? GALLERY_PHOTOS[lightboxIndex] : null;

  return (
    <section id="galeri" className="py-10 md:py-16 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 md:mb-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-[#C86432] tracking-wide mb-2">
              Galeri Foto Desa
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#1B4D3E] leading-tight mb-2">
              Potret Suasana Hangat di Lereng Asri
            </h2>
            <p className="text-base sm:text-[17px] text-[#404945]">
              Geser atau ketuk foto untuk melihat detail suasana alam, kebun kopi, hingga sajian kuliner warga.
            </p>
          </div>
        </div>

        {/* Mobile horizontal snap carousel */}
        <div className="md:hidden -mx-4">
          <div
            ref={carouselRef}
            onScroll={handleCarouselScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 no-scrollbar pb-2"
          >
            {GALLERY_PHOTOS.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="snap-start shrink-0 w-[85vw] max-w-[340px] text-left bg-white rounded-2xl border border-[#EAE6DF] overflow-hidden shadow-[0_2px_8px_-2px_rgba(27,77,62,0.06)] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1B4D3E]"
              >
                <div className="relative aspect-[4/3] w-full bg-[#E5F1E7]">
                  <ResilientImage
                    src={photo.image}
                    alt={photo.title}
                    fallbackTitle={photo.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/45 backdrop-blur-sm text-white flex items-center justify-center">
                    <Expand className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs font-semibold text-[#C86432] mb-1">{photo.location}</p>
                  <p className="text-base font-bold text-[#242E28] leading-snug">{photo.title}</p>
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-3" aria-label="Navigasi galeri">
            {GALLERY_PHOTOS.map((photo, idx) => (
              <button
                key={photo.id}
                type="button"
                aria-label={`Lihat foto ${idx + 1}: ${photo.title}`}
                onClick={() => scrollToSlide(idx)}
                className="min-h-[28px] px-1 flex items-center justify-center cursor-pointer"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    mobileSlideIndex === idx ? 'w-6 bg-[#1B4D3E]' : 'w-2 bg-[#C0C9C3]'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Tablet & Desktop asymmetric gallery grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-5">
          {GALLERY_PHOTOS.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className={`group relative rounded-2xl overflow-hidden bg-[#E5F1E7] border border-[#EAE6DF] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4D3E] ${
                photo.featured ? 'md:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
              }`}
            >
              <ResilientImage
                src={photo.image}
                alt={photo.title}
                fallbackTitle={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0D241D]/85 via-[#0D241D]/20 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#F5D69B] mb-1">{photo.location}</p>
                  <h3 className="text-lg font-bold text-white leading-snug">{photo.title}</h3>
                </div>
                <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                  <Expand className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {activePhoto && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#141E18]/92 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={() => setLightboxIndex(null)}
        >
          <div className="flex items-center justify-between text-white max-w-5xl w-full mx-auto shrink-0">
            <span className="text-sm font-semibold tabular-nums text-[#E5F1E7]">
              Foto {lightboxIndex + 1} dari {GALLERY_PHOTOS.length}
            </span>
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Tutup pratinjau foto"
              className="w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            className="max-w-5xl w-full mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-5 my-auto py-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
                )
              }
              aria-label="Foto sebelumnya"
              className="hidden sm:flex w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white items-center justify-center shrink-0 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="w-full flex-1 bg-[#0D241D] rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[16/10] max-h-[60vh] w-full">
                <ResilientImage
                  src={activePhoto.image}
                  alt={activePhoto.title}
                  fallbackTitle={activePhoto.title}
                  className="w-full h-full object-contain bg-[#0D241D]"
                />
              </div>
              <div className="p-4 sm:p-5 bg-white text-[#242E28]">
                <p className="text-xs font-bold text-[#C86432] mb-1">{activePhoto.location}</p>
                <h3 className="text-lg sm:text-xl font-bold text-[#1B4D3E] mb-1">
                  {activePhoto.title}
                </h3>
                <p className="text-sm sm:text-base text-[#404945]">{activePhoto.caption}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex((lightboxIndex + 1) % GALLERY_PHOTOS.length)}
              aria-label="Foto berikutnya"
              className="hidden sm:flex w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white items-center justify-center shrink-0 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex sm:hidden items-center justify-between w-full gap-3">
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length
                  )
                }
                className="flex-1 min-h-[48px] px-4 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Sebelumnya</span>
              </button>
              <button
                type="button"
                onClick={() => setLightboxIndex((lightboxIndex + 1) % GALLERY_PHOTOS.length)}
                className="flex-1 min-h-[48px] px-4 rounded-full bg-white/15 hover:bg-white/25 text-white text-sm font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Berikutnya</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="h-2 shrink-0" />
        </div>
      )}
    </section>
  );
}
