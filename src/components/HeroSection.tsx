import { ArrowDown, MapPin } from 'lucide-react';
import { HERO_IMAGE } from '../data/wisataData';
import { ResilientImage } from './ResilientImage';
import { WhatsAppIcon } from './WhatsAppIcon';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const highlights = [
    { value: '950 mdpl', label: 'Udara Sejuk Pegunungan' },
    { value: '45 Menit', label: 'Dari Pusat Kota Magelang' },
    { value: '07.00 – 17.00', label: 'Buka Setiap Hari' },
    { value: '4,9 / 5', label: 'Penilaian Pengunjung' },
  ];

  return (
    <section id="beranda" className="pt-4 pb-8 md:pt-8 md:pb-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-[#1B4D3E] shadow-[0_8px_24px_-4px_rgba(27,77,62,0.16)] min-h-[460px] md:min-h-[540px] flex items-end">
          <div className="absolute inset-0">
            <ResilientImage
              src={HERO_IMAGE}
              alt="Panorama sawah terasering, pendopo bambu, dan gunung di Desa Wisata Lereng Asri saat pagi hari"
              loading="eager"
              fallbackTitle="Panorama Desa Wisata Lereng Asri"
              className="w-full h-full object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0D241D]/90 via-[#0D241D]/55 to-[#0D241D]/20"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 w-full p-6 sm:p-8 md:p-12 max-w-3xl text-white">
            <p className="inline-flex items-center gap-2 text-sm md:text-[15px] font-semibold text-[#F5D69B] mb-3">
              <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Kecamatan Pakis, Magelang · Wisata Alam &amp; Budaya Desa</span>
            </p>

            <h1 className="text-[30px] leading-[1.2] sm:text-4xl md:text-[46px] md:leading-[1.15] font-extrabold tracking-tight text-white mb-4">
              Temukan Ketenangan Alam &amp; Ramahnya Desa Wisata Lereng Asri
            </h1>

            <p className="text-base sm:text-[17px] leading-[1.65] text-[#EFF6F1] mb-7 max-w-2xl">
              Nikmati gemericik air terjun hutan pakis, memetik kopi Arabika bersama petani,
              hingga menyantap nasi liwet hangat di tepi sawah terasering yang masih asri.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 min-h-[52px] px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1FB857] active:scale-[0.98] text-white text-base font-bold shadow-[0_8px_20px_rgba(37,211,102,0.35)] transition-all cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Pesan via WhatsApp</span>
              </button>

              <a
                href="#paket"
                className="inline-flex items-center justify-center gap-2 min-h-[52px] px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/40 text-white text-base font-semibold transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Lihat Paket &amp; Harga</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl border border-[#EAE6DF] px-4 py-4 sm:px-5 sm:py-4 shadow-[0_2px_8px_-2px_rgba(27,77,62,0.05)]"
            >
              <p className="text-lg sm:text-xl font-extrabold text-[#1B4D3E] tabular-nums">
                {item.value}
              </p>
              <p className="text-sm text-[#404945] mt-0.5 leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
