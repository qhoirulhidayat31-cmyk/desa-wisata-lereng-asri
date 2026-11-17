import { useEffect, useState } from 'react';
import { DestinationSection } from './components/DestinationSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { HeroSection } from './components/HeroSection';
import { LocationMapSection } from './components/LocationMapSection';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Navbar } from './components/Navbar';
import { PackageSection } from './components/PackageSection';
import { WhatsAppBookingModal } from './components/WhatsAppBookingModal';
import { MAP_LANDMARKS, TourPackage } from './data/wisataData';

export default function App() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [selectedLandmarkId, setSelectedLandmarkId] = useState(MAP_LANDMARKS[0].id);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const [inquiryTopic, setInquiryTopic] = useState<string | undefined>(undefined);

  useEffect(() => {
    const sectionIds = ['beranda', 'destinasi', 'paket', 'galeri', 'lokasi'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0.01 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleOpenGeneralBooking = () => {
    setSelectedPackage(null);
    setInquiryTopic(undefined);
    setBookingOpen(true);
  };

  const handleSelectPackage = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setInquiryTopic(undefined);
    setBookingOpen(true);
  };

  const handleInquireDestination = (destinationName: string) => {
    setSelectedPackage(null);
    setInquiryTopic(destinationName);
    setBookingOpen(true);
  };

  const handleFocusMapPin = (destinationId: string) => {
    const landmark = MAP_LANDMARKS.find((l) => l.destinationId === destinationId);
    if (landmark) {
      setSelectedLandmarkId(landmark.id);
    }
    const mapSection = document.getElementById('lokasi');
    if (mapSection) {
      mapSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242E28]">
      <Navbar onOpenBooking={handleOpenGeneralBooking} />

      <main className="flex-1">
        <HeroSection onOpenBooking={handleOpenGeneralBooking} />

        <DestinationSection
          onFocusMapPin={handleFocusMapPin}
          onInquireDestination={handleInquireDestination}
        />

        <PackageSection onSelectPackage={handleSelectPackage} />

        <GallerySection />

        <LocationMapSection
          selectedLandmarkId={selectedLandmarkId}
          onSelectLandmark={setSelectedLandmarkId}
          onOpenBooking={handleOpenGeneralBooking}
        />
      </main>

      <Footer onOpenBooking={handleOpenGeneralBooking} />

      <MobileBottomNav
        activeSection={activeSection}
        onOpenBooking={handleOpenGeneralBooking}
      />

      <WhatsAppBookingModal
        isOpen={bookingOpen}
        initialPackage={selectedPackage}
        initialTopic={inquiryTopic}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
