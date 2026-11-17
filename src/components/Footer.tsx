import { Mail, MapPin, Phone } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-[#003629] text-[#E8F4EA] pt-12 pb-24 md:pb-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-white/15">
          <div>
            <p className="text-xl font-extrabold text-white tracking-tight mb-3">
              Desa Wisata Lereng Asri
            </p>
            <p className="text-[15px] text-[#C8DFD1] leading-relaxed max-w-sm">
              Dikelola langsung oleh Kelompok Sadar Wisata (Pokdarwis) bersama masyarakat Dusun Lereng Asri untuk menjaga kelestarian alam dan budaya pedesaan.
            </p>
          </div>

          <div>
            <h3 className="text-base font-bold text-white mb-3">Navigasi Cepat</h3>
            <ul className="space-y-2.5 text-[15px] text-[#C8DFD1]">
              <li>
                <a href="#beranda" className="hover:text-white hover:underline underline-offset-4">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#destinasi" className="hover:text-white hover:underline underline-offset-4">
                  Daftar Destinasi
                </a>
              </li>
              <li>
                <a href="#paket" className="hover:text-white hover:underline underline-offset-4">
                  Paket Wisata &amp; Harga
                </a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-white hover:underline underline-offset-4">
                  Galeri Foto
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-white hover:underline underline-offset-4">
                  Peta Lokasi &amp; Akses
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-bold text-white mb-3">Kontak &amp; Reservasi</h3>
            <ul className="space-y-2.5 text-[15px] text-[#C8DFD1] mb-5">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-1" aria-hidden="true" />
                <span>Desa Banyusidi, Kec. Pakis, Kab. Magelang, Jawa Tengah</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E5A93C] shrink-0" aria-hidden="true" />
                <span className="tabular-nums">+62 812-3456-7890 (Pokdarwis)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E5A93C] shrink-0" aria-hidden="true" />
                <span>sapa@desalerengasri.id</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1FB857] text-white font-bold text-[15px] cursor-pointer transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Hubungi via WhatsApp</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#A5C6B5]">
          <p>&copy; {new Date().getFullYear()} Desa Wisata Lereng Asri. Hak cipta dilindungi.</p>
          <p>Buka Setiap Hari · 07.00 – 17.00 WIB</p>
        </div>
      </div>
    </footer>
  );
}
