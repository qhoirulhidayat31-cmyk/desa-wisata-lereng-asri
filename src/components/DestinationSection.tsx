import { useState } from 'react';
import { Clock, Footprints, MapPin, X, Check } from 'lucide-react';
import {
  DESTINATIONS,
  DestinationCategory,
  DestinationItem,
  formatRupiah,
} from '../data/wisataData';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

interface DestinationSectionProps {
  onFocusMapPin: (destinationId: string) => void;
  onInquireDestination: (destinationName: string) => void;
}

const CATEGORIES: DestinationCategory[] = [
  'Semua',
  'Alam',
  'Agrowisata',
  'Budaya',
  'Penginapan',
];

export function DestinationSection({
  onFocusMapPin,
  onInquireDestination,
}: DestinationSectionProps) {
  const [activeCategory, setActiveCategory] = useState<DestinationCategory>('Semua');
  const [selectedDest, setSelectedDest] = useState<DestinationItem | null>(null);

  const filtered =
    activeCategory === 'Semua'
      ? DESTINATIONS
      : DESTINATIONS.filter((item) => item.category === activeCategory);

  return (
    <section id="destinasi" className="py-10 md:py-16 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-6 md:mb-8">
          <p className="text-sm font-bold text-[#C86432] tracking-wide mb-2">
            Destinasi Unggulan Desa
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#1B4D3E] leading-tight mb-3">
            Sudut Asri yang Siap Anda Jelajahi
          </h2>
          <p className="text-base sm:text-[17px] text-[#404945] leading-relaxed">
            Semua titik wisata terhubung jalur pejalan kaki yang aman dan nyaman untuk keluarga,
            anak-anak, hingga orang tua.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Filter kategori destinasi"
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-6 md:mb-8"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`min-h-[44px] px-5 py-2.5 rounded-full text-[15px] font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4D3E] ${
                  isActive
                    ? 'bg-[#1B4D3E] text-white shadow-sm'
                    : 'bg-[#F1EFE9] text-[#242E28] hover:bg-[#E5E1D8]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((dest) => (
            <article
              key={dest.id}
              className="bg-white rounded-2xl border border-[#EAE6DF] overflow-hidden shadow-[0_2px_8px_-2px_rgba(27,77,62,0.06)] flex flex-col"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#E5F1E7]">
                <ResilientImage
                  src={dest.image}
                  alt={dest.name}
                  fallbackTitle={dest.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-[#C86432] mb-2">
                  <span>{dest.category}</span>
                  <span aria-hidden="true" className="text-[#707974]">·</span>
                  <span className="text-[#404945] font-medium">{dest.locationZone}</span>
                </div>

                <h3 className="text-xl font-bold text-[#242E28] leading-snug mb-2.5">
                  {dest.name}
                </h3>

                <p className="text-[15px] sm:text-base text-[#404945] leading-relaxed mb-4 flex-1">
                  {dest.shortDesc}
                </p>

                <div className="border-t border-[#EAE6DF] pt-4 mb-5 space-y-2 text-sm text-[#404945]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5">
                      <Footprints className="w-4 h-4 text-[#1B4D3E] shrink-0" aria-hidden="true" />
                      <span>{dest.walkTime}</span>
                    </span>
                    <span className="font-bold text-[#1B4D3E] tabular-nums">
                      {dest.ticketPrice === 0 ? 'Gratis Masuk' : `${formatRupiah(dest.ticketPrice)}/org`}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#404945]">
                    <Clock className="w-4 h-4 text-[#1B4D3E] shrink-0" aria-hidden="true" />
                    <span className="tabular-nums">{dest.openHours}</span>
                    <span aria-hidden="true">·</span>
                    <span>{dest.difficulty}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedDest(dest)}
                    className="min-h-[48px] px-4 py-2.5 rounded-full border-[1.5px] border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E]/6 text-[15px] font-semibold transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4D3E]"
                  >
                    Info Lengkap
                  </button>
                  <button
                    type="button"
                    onClick={() => onFocusMapPin(dest.id)}
                    className="inline-flex items-center justify-center gap-1.5 min-h-[48px] px-4 py-2.5 rounded-full bg-[#F1EFE9] hover:bg-[#E5E1D8] text-[#242E28] text-[15px] font-semibold transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4D3E]"
                  >
                    <MapPin className="w-4 h-4 text-[#C86432] shrink-0" aria-hidden="true" />
                    <span>Lihat di Peta</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedDest && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-[#242E28]/50 backdrop-blur-[4px] p-0 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dest-modal-title"
          onClick={() => setSelectedDest(null)}
        >
          <div
            className="bg-white w-full md:max-w-xl rounded-t-3xl md:rounded-2xl max-h-[90vh] overflow-y-auto shadow-[0_16px_36px_-8px_rgba(36,46,40,0.28)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="md:hidden w-10 h-1.5 bg-[#D4CFC7] rounded-full mx-auto mt-3 mb-1" />

            <div className="relative aspect-[16/10] w-full bg-[#E5F1E7]">
              <ResilientImage
                src={selectedDest.image}
                alt={selectedDest.name}
                fallbackTitle={selectedDest.name}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedDest(null)}
                aria-label="Tutup detail destinasi"
                className="absolute top-3 right-3 w-11 h-11 rounded-full bg-white/95 text-[#242E28] flex items-center justify-center shadow-md hover:bg-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-7">
              <p className="text-sm font-semibold text-[#C86432] mb-1">
                {selectedDest.category} · {selectedDest.locationZone}
              </p>
              <h3 id="dest-modal-title" className="text-2xl font-extrabold text-[#1B4D3E] mb-3">
                {selectedDest.name}
              </h3>

              <p className="text-base text-[#242E28] leading-relaxed mb-5">
                {selectedDest.fullDesc}
              </p>

              <div className="bg-[#FAF8F5] rounded-xl border border-[#EAE6DF] p-4 mb-5 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="block text-[#404945]">Tiket Masuk</span>
                  <span className="font-bold text-[#1B4D3E] text-base tabular-nums">
                    {selectedDest.ticketPrice === 0
                      ? 'Gratis Area Pendopo'
                      : `${formatRupiah(selectedDest.ticketPrice)} / orang`}
                  </span>
                </div>
                <div>
                  <span className="block text-[#404945]">Jam Kunjungan</span>
                  <span className="font-bold text-[#242E28] text-base tabular-nums">
                    {selectedDest.openHours}
                  </span>
                </div>
                <div>
                  <span className="block text-[#404945]">Jarak Jalan Kaki</span>
                  <span className="font-semibold text-[#242E28]">{selectedDest.walkTime}</span>
                </div>
                <div>
                  <span className="block text-[#404945]">Kondisi Jalur</span>
                  <span className="font-semibold text-[#242E28]">{selectedDest.difficulty}</span>
                </div>
              </div>

              <h4 className="text-base font-bold text-[#242E28] mb-2.5">
                Daya Tarik Utama
              </h4>
              <ul className="space-y-2 mb-6">
                {selectedDest.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-[15px] text-[#404945]">
                    <Check className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const name = selectedDest.name;
                    setSelectedDest(null);
                    onInquireDestination(name);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 min-h-[52px] px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1FB857] text-white font-bold text-base cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Tanya &amp; Pesan via WA</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const id = selectedDest.id;
                    setSelectedDest(null);
                    onFocusMapPin(id);
                  }}
                  className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 py-3 rounded-full border-[1.5px] border-[#1B4D3E] text-[#1B4D3E] font-semibold text-base cursor-pointer"
                >
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>Tunjukkan di Peta</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
