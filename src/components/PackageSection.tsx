import { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Clock, Star, Users } from 'lucide-react';
import {
  formatRupiah,
  TESTIMONIALS,
  TOUR_PACKAGES,
  TourPackage,
} from '../data/wisataData';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

interface PackageSectionProps {
  onSelectPackage: (pkg: TourPackage) => void;
}

export function PackageSection({ onSelectPackage }: PackageSectionProps) {
  const [expandedItineraryId, setExpandedItineraryId] = useState<string | null>(null);

  const toggleItinerary = (id: string) => {
    setExpandedItineraryId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="paket" className="py-10 md:py-16 bg-[#F1EFE9]/65 border-y border-[#EAE6DF] scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-8">
          <p className="text-sm font-bold text-[#C86432] tracking-wide mb-2">
            Paket Wisata &amp; Harga Transparan
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#1B4D3E] leading-tight mb-3">
            Pilih Paket Liburan Sesuai Rencana Anda
          </h2>
          <p className="text-base sm:text-[17px] text-[#404945] leading-relaxed">
            Harga sudah termasuk pemandu warga lokal, tiket masuk destinasi, serta hidangan khas desa tanpa biaya tersembunyi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TOUR_PACKAGES.map((pkg) => {
            const isExpanded = expandedItineraryId === pkg.id;
            return (
              <article
                key={pkg.id}
                className="bg-white rounded-2xl border border-[#EAE6DF] overflow-hidden shadow-[0_2px_8px_-2px_rgba(27,77,62,0.06)] flex flex-col"
              >
                <div className="aspect-[16/10] w-full overflow-hidden bg-[#E5F1E7]">
                  <ResilientImage
                    src={pkg.image}
                    alt={pkg.name}
                    fallbackTitle={pkg.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5 sm:p-7 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold mb-2">
                    <span className="text-[#C86432]">{pkg.categoryLabel}</span>
                    {pkg.popular && (
                      <>
                        <span aria-hidden="true" className="text-[#707974]">·</span>
                        <span className="text-[#9D4413]">Pilihan Terlaris</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-[22px] font-extrabold text-[#242E28] leading-snug mb-1.5">
                    {pkg.name}
                  </h3>
                  <p className="text-[15px] text-[#404945] mb-4">{pkg.summary}</p>

                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#404945] pb-4 mb-4 border-b border-[#EAE6DF]">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#1B4D3E] shrink-0" aria-hidden="true" />
                      <span className="tabular-nums">{pkg.duration}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-[#1B4D3E] shrink-0" aria-hidden="true" />
                      <span className="tabular-nums">Minimal {pkg.minPax} orang</span>
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-5 flex-1">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[15px] sm:text-base text-[#242E28]"
                      >
                        <Check
                          className="w-5 h-5 text-[#1B4D3E] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-5">
                    <button
                      type="button"
                      onClick={() => toggleItinerary(pkg.id)}
                      aria-expanded={isExpanded}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#F1EFE9] border border-[#EAE6DF] flex items-center justify-between text-[15px] font-semibold text-[#1B4D3E] transition-colors cursor-pointer"
                    >
                      <span>Lihat Rencana Perjalanan (Itinerary)</span>
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 shrink-0" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="w-5 h-5 shrink-0" aria-hidden="true" />
                      )}
                    </button>

                    {isExpanded && (
                      <ol className="mt-3 px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#EAE6DF] space-y-2.5">
                        {pkg.itinerary.map((step) => (
                          <li key={step.time} className="flex items-start gap-3 text-sm sm:text-[15px]">
                            <span className="font-bold text-[#C86432] tabular-nums shrink-0 min-w-[82px]">
                              {step.time}
                            </span>
                            <span className="text-[#242E28]">{step.activity}</span>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#EAE6DF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="block text-sm text-[#404945]">Harga mulai dari</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl sm:text-[26px] font-extrabold text-[#1B4D3E] tabular-nums">
                          {formatRupiah(pkg.pricePerPax)}
                        </span>
                        <span className="text-sm font-medium text-[#404945]">/ orang</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectPackage(pkg)}
                      className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1FB857] active:scale-[0.98] text-white text-base font-bold shadow-[0_6px_16px_rgba(37,211,102,0.28)] transition-all cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4D3E]"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      <span>Pesan via WhatsApp</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 md:mt-14 pt-10 border-t border-[#DFDBD2]">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1B4D3E]">
              Cerita Hangat dari Pengunjung Sebelumnya
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((item) => (
              <blockquote
                key={item.id}
                className="bg-white rounded-2xl border border-[#EAE6DF] p-5 sm:p-6 shadow-[0_2px_8px_-2px_rgba(27,77,62,0.05)] flex flex-col justify-between"
              >
                <div>
                  <div
                    className="flex items-center gap-1 text-[#E5A93C] mb-3"
                    aria-label={`Rating ${item.rating} dari 5 bintang`}
                  >
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-[15px] sm:text-base text-[#242E28] leading-relaxed mb-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <footer className="pt-3 border-t border-[#EAE6DF]">
                  <p className="font-bold text-[#1B4D3E] text-[15px]">{item.name}</p>
                  <p className="text-sm text-[#404945]">{item.origin}</p>
                  <p className="text-xs font-semibold text-[#C86432] mt-1">{item.packageTaken}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
