import { WhatsAppIcon } from './WhatsAppIcon';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  return (
    <header className="relative md:sticky md:top-0 z-40 bg-[#FAF8F5]/95 md:backdrop-blur-md border-b border-[#EAE6DF]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-8">
        <a
          href="#beranda"
          className="text-xl font-extrabold tracking-tight text-[#1B4D3E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B4D3E] rounded-md"
        >
          Lereng Asri
        </a>

        <nav
          aria-label="Navigasi Utama"
          className="hidden md:flex items-center gap-7 text-[15px] font-semibold text-[#404945]"
        >
          <a
            href="#destinasi"
            className="py-2 hover:text-[#1B4D3E] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Destinasi
          </a>
          <a
            href="#paket"
            className="py-2 hover:text-[#1B4D3E] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Paket Wisata
          </a>
          <a
            href="#galeri"
            className="py-2 hover:text-[#1B4D3E] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Galeri
          </a>
          <a
            href="#lokasi"
            className="py-2 hover:text-[#1B4D3E] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Peta Lokasi
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 rounded-full bg-[#1B4D3E] hover:bg-[#143A2F] active:scale-[0.98] text-white text-[15px] font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4D3E]"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            <span>Pesan Wisata</span>
          </button>
        </div>
      </div>
    </header>
  );
}
