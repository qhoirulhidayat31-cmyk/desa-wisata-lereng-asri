import { Compass, Home, MapPin, Ticket } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface MobileBottomNavProps {
  activeSection: string;
  onOpenBooking: () => void;
}

export function MobileBottomNav({ activeSection, onOpenBooking }: MobileBottomNavProps) {
  const navItems = [
    { id: 'beranda', label: 'Beranda', href: '#beranda', icon: Home },
    { id: 'destinasi', label: 'Destinasi', href: '#destinasi', icon: Compass },
    { id: 'paket', label: 'Paket', href: '#paket', icon: Ticket },
    { id: 'lokasi', label: 'Peta', href: '#lokasi', icon: MapPin },
  ];

  return (
    <nav
      aria-label="Navigasi Bawah Seluler"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#EAE6DF] shadow-[0_-4px_20px_rgba(27,77,62,0.08)] pb-safe"
    >
      <div className="grid grid-cols-5 items-center h-[60px] px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex flex-col items-center justify-center min-h-[48px] rounded-xl transition-colors ${
                isActive
                  ? 'text-[#1B4D3E] font-bold'
                  : 'text-[#404945] font-medium hover:text-[#1B4D3E]'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" strokeWidth={isActive ? 2.4 : 1.9} aria-hidden="true" />
              <span className="text-[11px] leading-none whitespace-nowrap">{item.label}</span>
            </a>
          );
        })}

        <button
          type="button"
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center min-h-[48px] mx-1 rounded-xl bg-[#25D366] active:bg-[#1FB857] text-white font-bold shadow-sm cursor-pointer"
        >
          <WhatsAppIcon className="w-5 h-5 mb-0.5" />
          <span className="text-[11px] leading-none whitespace-nowrap">Pesan WA</span>
        </button>
      </div>
    </nav>
  );
}
