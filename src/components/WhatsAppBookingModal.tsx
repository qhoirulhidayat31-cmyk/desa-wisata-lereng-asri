import { useEffect, useState } from 'react';
import { Calendar, Check, Copy, Minus, Plus, X } from 'lucide-react';
import {
  buildWhatsAppUrl,
  formatRupiah,
  TOUR_PACKAGES,
  TourPackage,
} from '../data/wisataData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface WhatsAppBookingModalProps {
  isOpen: boolean;
  initialPackage: TourPackage | null;
  initialTopic?: string;
  onClose: () => void;
}

export function WhatsAppBookingModal({
  isOpen,
  initialPackage,
  initialTopic,
  onClose,
}: WhatsAppBookingModalProps) {
  const [selectedPkgId, setSelectedPkgId] = useState<string>(
    initialPackage?.id ?? TOUR_PACKAGES[0].id
  );
  const [guestName, setGuestName] = useState('');
  const [visitDate, setVisitDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    return d.toISOString().split('T')[0];
  });
  const [pax, setPax] = useState<number>(initialPackage?.minPax ?? 2);
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialPackage) {
      setSelectedPkgId(initialPackage.id);
      setPax(Math.max(initialPackage.minPax, 2));
    }
    if (initialTopic) {
      setNotes(`Saya ingin menanyakan informasi mengenai ${initialTopic}.`);
    }
    setCopied(false);
  }, [initialPackage, initialTopic, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const activePackage =
    TOUR_PACKAGES.find((p) => p.id === selectedPkgId) ?? TOUR_PACKAGES[0];
  const minPax = activePackage.minPax;
  const effectivePax = Math.max(minPax, pax);
  const estimatedTotal = activePackage.pricePerPax * effectivePax;

  const formattedDate = visitDate
    ? new Date(`${visitDate}T00:00:00`).toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Belum ditentukan';

  const composedMessage = [
    'Halo Admin Desa Wisata Lereng Asri, saya ingin memesan / menanyakan wisata:',
    '',
    `• Nama Pemesan: ${guestName.trim() || '(Belum diisi)'}`,
    `• Paket Pilihan: ${activePackage.name}`,
    `• Rencana Tanggal: ${formattedDate}`,
    `• Jumlah Peserta: ${effectivePax} orang`,
    `• Perkiraan Biaya: ${formatRupiah(estimatedTotal)}`,
    notes.trim() ? `• Catatan Tambahan: ${notes.trim()}` : null,
    '',
    'Mohon konfirmasi ketersediaan jadwalnya. Terima kasih.',
  ]
    .filter(Boolean)
    .join('\n');

  const whatsappHref = buildWhatsAppUrl(composedMessage);

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(composedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-[#242E28]/50 backdrop-blur-[4px] p-0 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wa-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-white w-full md:max-w-lg rounded-t-3xl md:rounded-2xl max-h-[92vh] overflow-y-auto shadow-[0_16px_36px_-8px_rgba(36,46,40,0.28)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:hidden w-10 h-1.5 bg-[#D4CFC7] rounded-full mx-auto mt-3 mb-1" />

        <div className="px-6 pt-5 pb-4 border-b border-[#EAE6DF] flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold text-[#C86432]">Pemesanan Langsung Pengelola Desa</p>
            <h2 id="wa-modal-title" className="text-xl font-extrabold text-[#1B4D3E]">
              Pesan Wisata via WhatsApp
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup formulir pemesanan"
            className="w-11 h-11 rounded-full bg-[#F1EFE9] hover:bg-[#E5E1D8] text-[#242E28] flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="p-6 space-y-5">
          <div>
            <label
              htmlFor="booking-package"
              className="block text-sm font-semibold text-[#242E28] mb-1.5"
            >
              Pilih Paket Wisata
            </label>
            <select
              id="booking-package"
              value={activePackage.id}
              onChange={(e) => {
                const next = TOUR_PACKAGES.find((p) => p.id === e.target.value);
                setSelectedPkgId(e.target.value);
                if (next && pax < next.minPax) setPax(next.minPax);
              }}
              className="w-full min-h-[48px] px-4 rounded-xl bg-[#F1EFE9] focus:bg-white border border-transparent focus:border-[#1B4D3E] focus:outline-none text-base font-semibold text-[#242E28]"
            >
              {TOUR_PACKAGES.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.name} ({formatRupiah(pkg.pricePerPax)}/org)
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="booking-date"
                className="block text-sm font-semibold text-[#242E28] mb-1.5"
              >
                Rencana Tanggal
              </label>
              <div className="relative">
                <Calendar
                  className="w-4 h-4 text-[#404945] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden="true"
                />
                <input
                  id="booking-date"
                  type="date"
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full min-h-[48px] pl-10 pr-3 rounded-xl bg-[#F1EFE9] focus:bg-white border border-transparent focus:border-[#1B4D3E] focus:outline-none text-[15px] font-medium text-[#242E28] tabular-nums"
                />
              </div>
            </div>

            <div>
              <span className="block text-sm font-semibold text-[#242E28] mb-1.5">
                Jumlah Peserta (Min. {minPax})
              </span>
              <div className="flex items-center justify-between bg-[#F1EFE9] rounded-xl p-1 min-h-[48px]">
                <button
                  type="button"
                  onClick={() => setPax(Math.max(minPax, effectivePax - 1))}
                  disabled={effectivePax <= minPax}
                  aria-label="Kurangi jumlah peserta"
                  className="w-11 h-10 rounded-lg bg-white text-[#1B4D3E] disabled:opacity-40 flex items-center justify-center shadow-xs cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-extrabold text-base text-[#1B4D3E] tabular-nums px-2">
                  {effectivePax} orang
                </span>
                <button
                  type="button"
                  onClick={() => setPax(effectivePax + 1)}
                  aria-label="Tambah jumlah peserta"
                  className="w-11 h-10 rounded-lg bg-white text-[#1B4D3E] flex items-center justify-center shadow-xs cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="booking-name"
              className="block text-sm font-semibold text-[#242E28] mb-1.5"
            >
              Nama Lengkap Anda
            </label>
            <input
              id="booking-name"
              type="text"
              placeholder="Contoh: Ibu Dewi Lestari"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full min-h-[48px] px-4 rounded-xl bg-[#F1EFE9] focus:bg-white border border-transparent focus:border-[#1B4D3E] focus:outline-none text-base text-[#242E28] placeholder:text-[#707974]"
            />
          </div>

          <div>
            <label
              htmlFor="booking-notes"
              className="block text-sm font-semibold text-[#242E28] mb-1.5"
            >
              Catatan Khusus (Opsional)
            </label>
            <textarea
              id="booking-notes"
              rows={2}
              placeholder="Misal: Membawa anak balita, butuh menu non-pedas, atau tanya parkir bus."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#F1EFE9] focus:bg-white border border-transparent focus:border-[#1B4D3E] focus:outline-none text-[15px] text-[#242E28] placeholder:text-[#707974]"
            />
          </div>

          <div className="bg-[#EBF6ED] rounded-xl border border-[#C8DFD1] p-4 flex items-center justify-between gap-4">
            <div>
              <span className="block text-sm text-[#404945]">Perkiraan Total Biaya</span>
              <span className="text-xs text-[#404945] tabular-nums">
                {effectivePax} orang × {formatRupiah(activePackage.pricePerPax)}
              </span>
            </div>
            <span className="text-xl sm:text-2xl font-extrabold text-[#1B4D3E] tabular-nums">
              {formatRupiah(estimatedTotal)}
            </span>
          </div>

          <div className="space-y-2.5 pt-1">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 min-h-[54px] px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#1FB857] active:scale-[0.98] text-white text-base font-bold shadow-[0_8px_20px_rgba(37,211,102,0.3)] transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Kirim Pesanan ke WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleCopyMessage}
              className="w-full inline-flex items-center justify-center gap-2 min-h-[46px] px-5 py-2.5 rounded-full border border-[#EAE6DF] hover:bg-[#FAF8F5] text-sm font-semibold text-[#404945] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#1B4D3E]" aria-hidden="true" />
                  <span className="text-[#1B4D3E]">Teks pesanan tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" aria-hidden="true" />
                  <span>Salin Teks Pesanan</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
