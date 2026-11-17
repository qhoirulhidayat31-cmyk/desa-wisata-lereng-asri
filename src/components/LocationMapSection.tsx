import { Car, Clock, ExternalLink, Footprints, MapPin, Navigation, ShieldCheck } from 'lucide-react';
import { MAP_LANDMARKS, VILLAGE_COORDS } from '../data/wisataData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface LocationMapSectionProps {
  selectedLandmarkId: string;
  onSelectLandmark: (landmarkId: string) => void;
  onOpenBooking: () => void;
}

export function LocationMapSection({
  selectedLandmarkId,
  onSelectLandmark,
  onOpenBooking,
}: LocationMapSectionProps) {
  const activeLandmark =
    MAP_LANDMARKS.find((item) => item.id === selectedLandmarkId) ?? MAP_LANDMARKS[0];

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${VILLAGE_COORDS.lat},${VILLAGE_COORDS.lng}`;
  const wazeUrl = `https://waze.com/ul?ll=${VILLAGE_COORDS.lat},${VILLAGE_COORDS.lng}&navigate=yes`;

  return (
    <section id="lokasi" className="py-10 md:py-16 bg-[#F1EFE9]/65 border-t border-[#EAE6DF] scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-8">
          <p className="text-sm font-bold text-[#C86432] tracking-wide mb-2">
            Peta Lokasi &amp; Akses Jalan
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold text-[#1B4D3E] leading-tight mb-3">
            Temukan Rute Menuju Desa Wisata Lereng Asri
          </h2>
          <p className="text-base sm:text-[17px] text-[#404945] leading-relaxed">
            Ketuk penanda oranye di peta desa untuk melihat jarak jalan kaki dari Pendopo Utama, lalu buka navigasi Google Maps atau Waze.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Interactive Topographical Village Map Container */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#EAE6DF] overflow-hidden shadow-[0_2px_8px_-2px_rgba(27,77,62,0.06)] flex flex-col">
            <div className="relative flex-1 min-h-[360px] sm:min-h-[420px] bg-[#E5F1E7] overflow-hidden">
              {/* Custom stylized vector topographic map of Desa Wisata Lereng Asri */}
              <svg
                viewBox="0 0 800 500"
                className="w-full h-full object-cover absolute inset-0"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="valleyGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#DCEEE0" />
                    <stop offset="55%" stopColor="#E8F4EA" />
                    <stop offset="100%" stopColor="#D3E8D8" />
                  </linearGradient>
                </defs>

                <rect width="800" height="500" fill="url(#valleyGrad)" />

                {/* Topographical elevation contours */}
                <path
                  d="M-30 110 Q 190 40, 380 120 T 830 80"
                  fill="none"
                  stroke="#B8D8C2"
                  strokeWidth="2"
                />
                <path
                  d="M-30 185 Q 210 110, 420 190 T 830 165"
                  fill="none"
                  stroke="#B8D8C2"
                  strokeWidth="2"
                />
                <path
                  d="M-30 275 Q 250 205, 450 280 T 830 250"
                  fill="none"
                  stroke="#B8D8C2"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />

                {/* Terraced paddy zones */}
                <ellipse cx="420" cy="240" rx="145" ry="68" fill="#CBE5D1" opacity="0.7" />
                <ellipse cx="240" cy="145" rx="115" ry="55" fill="#C4E1CB" opacity="0.65" />

                {/* Mountain river stream passing Curug Pelangi */}
                <path
                  d="M 670 0 C 655 90, 620 155, 608 180 C 585 245, 640 330, 710 500"
                  fill="none"
                  stroke="#7CC4B8"
                  strokeWidth="10"
                  strokeLinecap="round"
                  opacity="0.75"
                />

                {/* Village main paved road into Pendopo */}
                <path
                  d="M 355 500 C 360 420, 368 380, 368 340"
                  fill="none"
                  stroke="#D9D0C1"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                <path
                  d="M 355 500 C 360 420, 368 380, 368 340"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />

                {/* Walking trails connecting Pendopo to all attractions */}
                <path
                  d="M 368 340 Q 400 285, 416 240"
                  fill="none"
                  stroke="#9B856E"
                  strokeWidth="3.5"
                  strokeDasharray="6 5"
                />
                <path
                  d="M 368 340 Q 290 220, 240 140"
                  fill="none"
                  stroke="#9B856E"
                  strokeWidth="3.5"
                  strokeDasharray="6 5"
                />
                <path
                  d="M 416 240 Q 520 195, 608 170"
                  fill="none"
                  stroke="#9B856E"
                  strokeWidth="3.5"
                  strokeDasharray="6 5"
                />
                <path
                  d="M 368 340 Q 280 325, 192 300"
                  fill="none"
                  stroke="#9B856E"
                  strokeWidth="3.5"
                  strokeDasharray="6 5"
                />

                {/* Subtle compass label */}
                <text x="28" y="42" fill="#1B4D3E" fontSize="13" fontWeight="700" opacity="0.7">
                  UTARA · LERENG 985 MDPL
                </text>
                <text x="380" y="482" fill="#404945" fontSize="12" fontWeight="600">
                  Arah Jalan Raya Magelang (45 mnt)
                </text>
              </svg>

              {/* Interactive Terracotta Pin Clusters */}
              {MAP_LANDMARKS.map((landmark, idx) => {
                const isSelected = landmark.id === activeLandmark.id;
                return (
                  <button
                    key={landmark.id}
                    type="button"
                    onClick={() => onSelectLandmark(landmark.id)}
                    style={{
                      left: `${landmark.coords.x}%`,
                      top: `${landmark.coords.y}%`,
                    }}
                    aria-label={`Pilih lokasi ${landmark.name}`}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1B4D3E] ${
                      isSelected ? 'z-20' : 'z-10'
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full transition-transform ${
                        isSelected ? 'scale-110' : 'hover:scale-105'
                      }`}
                    >
                      <span
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm shadow-lg border-2 border-white transition-colors ${
                          isSelected
                            ? 'bg-[#1B4D3E] text-white'
                            : 'bg-[#C86432] text-white group-hover:bg-[#9D4413]'
                        }`}
                      >
                        {idx + 1}
                      </span>
                    </span>
                    <span
                      className={`hidden sm:inline-block mt-0.5 px-2.5 py-1 rounded-md text-xs font-bold shadow-sm whitespace-nowrap ${
                        isSelected
                          ? 'bg-[#1B4D3E] text-white'
                          : 'bg-white/95 text-[#242E28] border border-[#EAE6DF]'
                      }`}
                    >
                      {landmark.name.split(' & ')[0]}
                    </span>
                  </button>
                );
              })}

              {/* Overlay Navigation Launch Bar */}
              <div className="absolute top-3 right-3 z-20 flex flex-wrap gap-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1B4D3E] text-sm font-bold shadow-md border border-[#EAE6DF] transition-colors whitespace-nowrap"
                >
                  <Navigation className="w-4 h-4 text-[#C86432]" aria-hidden="true" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
                </a>
                <a
                  href={wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1B4D3E] text-sm font-bold shadow-md border border-[#EAE6DF] transition-colors whitespace-nowrap"
                >
                  <span>Waze</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Selected Landmark Quick Selector & Info Footer */}
            <div className="p-5 sm:p-6 bg-white border-t border-[#EAE6DF]">
              <div className="flex flex-wrap gap-2 mb-4">
                {MAP_LANDMARKS.map((landmark, idx) => {
                  const isSelected = landmark.id === activeLandmark.id;
                  return (
                    <button
                      key={landmark.id}
                      type="button"
                      onClick={() => onSelectLandmark(landmark.id)}
                      className={`min-h-[38px] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                        isSelected
                          ? 'bg-[#1B4D3E] text-white'
                          : 'bg-[#F1EFE9] text-[#242E28] hover:bg-[#E5E1D8]'
                      }`}
                    >
                      {idx + 1}. {landmark.name.split(' & ')[0]}
                    </button>
                  );
                })}
              </div>

              <div className="bg-[#FAF8F5] rounded-xl border border-[#EAE6DF] p-4">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-bold text-[#C86432]">{activeLandmark.category}</span>
                  <span className="text-xs font-semibold text-[#1B4D3E] tabular-nums">
                    Ketinggian {activeLandmark.elevation}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold text-[#1B4D3E] mb-1">
                  {activeLandmark.name}
                </h3>
                <p className="text-[15px] text-[#404945] leading-relaxed mb-2.5">
                  {activeLandmark.description}
                </p>
                <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#242E28]">
                  <Footprints className="w-4 h-4 text-[#C86432]" aria-hidden="true" />
                  <span>{activeLandmark.walkFromGate}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Access & Practical Visitor Info Column */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#EAE6DF] p-6 sm:p-7 shadow-[0_2px_8px_-2px_rgba(27,77,62,0.06)] flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#1B4D3E] mb-5">
                Informasi Akses &amp; Kedatangan
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#C86432] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-[#242E28] text-base">Alamat Lengkap</h4>
                    <p className="text-[15px] text-[#404945] leading-relaxed mt-0.5">
                      Dusun Lereng Asri, Desa Banyusidi, Kecamatan Pakis, Kabupaten Magelang, Jawa Tengah 56193
                    </p>
                    <p className="text-xs text-[#707974] mt-1 tabular-nums">
                      Koordinat: {VILLAGE_COORDS.lat}, {VILLAGE_COORDS.lng}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Car className="w-5 h-5 text-[#C86432] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-[#242E28] text-base">Akses Kendaraan &amp; Parkir</h4>
                    <p className="text-[15px] text-[#404945] leading-relaxed mt-0.5">
                      Jalan beraspal mulus dapat dilalui sepeda motor, mobil pribadi, hingga bus wisata ukuran medium (30 kursi). Area parkir luas dijaga warga 24 jam.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#C86432] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-[#242E28] text-base">Jam Layanan Wisata</h4>
                    <p className="text-[15px] text-[#404945] leading-relaxed mt-0.5 tabular-nums">
                      Setiap hari Senin – Minggu pukul 07.00 – 17.00 WIB (Tamu Homestay check-in hingga 20.00 WIB).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <ShieldCheck className="w-5 h-5 text-[#C86432] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-[#242E28] text-base">Fasilitas Umum Tersedia</h4>
                    <p className="text-[15px] text-[#404945] leading-relaxed mt-0.5">
                      Mushola bersih, toilet di setiap pos wisata, P3K, warung warga harga ramah, serta pendampingan pemandu Pokdarwis resmi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-7 pt-6 border-t border-[#EAE6DF] space-y-3">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full inline-flex items-center justify-center gap-2.5 min-h-[52px] px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1FB857] active:scale-[0.98] text-white text-base font-bold shadow-[0_6px_16px_rgba(37,211,102,0.28)] transition-all cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Tanya Rute &amp; Pesan via WhatsApp</span>
              </button>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-full border-[1.5px] border-[#1B4D3E] text-[#1B4D3E] hover:bg-[#1B4D3E]/6 text-[15px] font-semibold transition-colors"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                <span>Petunjuk Arah di Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
