export type DestinationCategory = 'Semua' | 'Alam' | 'Agrowisata' | 'Budaya' | 'Penginapan';

export interface DestinationItem {
  id: string;
  name: string;
  category: Exclude<DestinationCategory, 'Semua'>;
  locationZone: string;
  walkTime: string;
  difficulty: string;
  ticketPrice: number;
  openHours: string;
  shortDesc: string;
  fullDesc: string;
  highlights: string[];
  image: string;
  mapCoords: { x: number; y: number };
}

export interface TourPackage {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  minPax: number;
  pricePerPax: number;
  categoryLabel: string;
  popular?: boolean;
  image: string;
  summary: string;
  includes: string[];
  itinerary: { time: string; activity: string }[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  location: string;
  caption: string;
  image: string;
  featured?: boolean;
}

export interface MapLandmark {
  id: string;
  name: string;
  category: string;
  walkFromGate: string;
  elevation: string;
  description: string;
  coords: { x: number; y: number };
  destinationId?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  origin: string;
  packageTaken: string;
  rating: number;
  quote: string;
}

export const WHATSAPP_NUMBER = '6281234567890';
export const VILLAGE_COORDS = {
  lat: -7.4521,
  lng: 110.3812,
  label: 'Desa Wisata Lereng Asri, Kec. Pakis, Kab. Magelang, Jawa Tengah',
};

export const HERO_IMAGE = '/src/assets/images/hero_lereng_asri_1794886801019.jpg';

export const DESTINATIONS: DestinationItem[] = [
  {
    id: 'curug-pelangi',
    name: 'Air Terjun Curug Pelangi Asri',
    category: 'Alam',
    locationZone: 'Lembah Timur Desa',
    walkTime: '15 menit jalan kaki',
    difficulty: 'Jalur ramah keluarga',
    ticketPrice: 15000,
    openHours: '07.00 – 16.30 WIB',
    shortDesc:
      'Air terjun alami setinggi 28 meter dengan kolam jernih berwarna hijau toska dan jembatan bambu di tengah hutan pakis.',
    fullDesc:
      'Tersembunyi di balik rimbunnya hutan bambu dan pakis purba, Curug Pelangi Asri menghadirkan kesegaran mata air pegunungan yang jernih sepanjang tahun. Jalur setapaknya sudah tertata rapi dari batu kali sehingga aman dilalui anak-anak maupun orang tua.',
    highlights: [
      'Jembatan bambu foto favorit dengan cahaya pagi',
      'Kolam dangkal alami aman untuk bermain air',
      'Gazebo istirahat dan warung wedang jahe warga',
    ],
    image: '/src/assets/images/destinasi_curug_asri_1794886802026.jpg',
    mapCoords: { x: 76, y: 34 },
  },
  {
    id: 'kebun-kopi-terasering',
    name: 'Kebun Kopi Arabika & Terasering',
    category: 'Agrowisata',
    locationZone: 'Lereng Utara 980 mdpl',
    walkTime: '10 menit dari Pendopo',
    difficulty: 'Landai, tersedia ojek kebun',
    ticketPrice: 20000,
    openHours: '06.30 – 17.00 WIB',
    shortDesc:
      'Nikmati pengalaman memetik buah kopi merah langsung dari pohonnya sambil memandang lembah berkabut dari dek kayu.',
    fullDesc:
      'Dikelola oleh kelompok tani desa sejak tiga generasi, kebun kopi lereng ini menanam varietas Arabika organik berdampingan dengan terasering teh dan sayuran. Wisatawan dapat belajar proses pascapanen hingga menyeduh kopi tubruk bersama petani lokal.',
    highlights: [
      'Tur petik kopi & edukasi sangrai tradisional',
      'Dek pandang kayu menghadap lembah pegunungan',
      'Gratis 1 cangkir seduhan kopi lereng hangat',
    ],
    image: '/src/assets/images/destinasi_kebun_kopi_1794886802209.jpg',
    mapCoords: { x: 30, y: 28 },
  },
  {
    id: 'bukit-panorama-sawah',
    name: 'Terasering Sawah & Bukit Fajar',
    category: 'Alam',
    locationZone: 'Dusun Tengah',
    walkTime: '5 menit dari Parkir Utama',
    difficulty: 'Sangat mudah',
    ticketPrice: 10000,
    openHours: '05.30 – 17.30 WIB',
    shortDesc:
      'Hamparan sawah berundak hijau yang diselimuti kabut tipis saat matahari terbit dengan latar gagahnya puncak gunung.',
    fullDesc:
      'Titik terbaik untuk menyambut pagi di Desa Lereng Asri. Pemandangannya memadukan sawah berundak, atap pendopo kayu tradisional, dan udara pegunungan yang bersih. Cocok untuk jalan santai pagi atau bersepeda menyusuri pematang.',
    highlights: [
      'Spot matahari terbit terbaik pukul 05.45 WIB',
      'Jalur trekking pematang sawah sepanjang 1,8 km',
      'Aktivitas menanam padi musiman bersama petani',
    ],
    image: '/src/assets/images/hero_lereng_asri_1794886801019.jpg',
    mapCoords: { x: 52, y: 48 },
  },
  {
    id: 'pendopo-kuliner-budaya',
    name: 'Pendopo Kuliner & Budaya Ndeso',
    category: 'Budaya',
    locationZone: 'Pusat Kampung',
    walkTime: '2 menit dari Parkir Utama',
    difficulty: 'Akses datar ramah kursi roda',
    ticketPrice: 0,
    openHours: '08.00 – 20.00 WIB',
    shortDesc:
      'Balai pertemuan bambu tempat menyantap nasi liwet hangat beralas daun pisang sambil belajar membatik atau menganyam.',
    fullDesc:
      'Jantung kehangatan warga Lereng Asri. Ibu-ibu PKK dan pengrajin desa menyambut tamu dengan hidangan khas kampung seperti nasi liwet, ikan bakar sungai, tempe mendoan hangat, serta lokakarya kerajinan bambu dan gamelan santai.',
    highlights: [
      'Sajian nasi liwet organik & teh sereh jahe',
      'Workshop anyaman bambu & membatik ecoprint',
      'Area ramah anak, mushola bersih, dan toilet nyaman',
    ],
    image: '/src/assets/images/galeri_kuliner_desa_1794886803697.jpg',
    mapCoords: { x: 46, y: 68 },
  },
  {
    id: 'kampung-saung-bambu',
    name: 'Kampung Homestay Saung Bambu',
    category: 'Penginapan',
    locationZone: 'Lereng Barat Tenang',
    walkTime: '6 menit dari Pendopo',
    difficulty: 'Akses jalan batu taman',
    ticketPrice: 0,
    openHours: 'Check-in 14.00 WIB',
    shortDesc:
      'Pondok kayu jati dan anyaman bambu di tengah taman tropis yang asri dengan beranda nyaman untuk melepas penat.',
    fullDesc:
      'Rasakan suasana menginap yang tenang jauh dari hiruk pikuk kota. Setiap pondok dibangun oleh pengrajin lokal menggunakan kayu dan bambu pilihan, dilengkapi air hangat, kasur bersih, beranda rotan, serta sarapan pagi rumahan.',
    highlights: [
      'Kamar nyaman untuk keluarga (kapasitas 2–4 orang)',
      'Kamar mandi bersih lengkap dengan pemanas air',
      'Termasuk sarapan nasi goreng desa & kopi hangat',
    ],
    image: '/src/assets/images/paket_homestay_bambu_1794886802561.jpg',
    mapCoords: { x: 24, y: 60 },
  },
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'paket-jelajah-sehari',
    name: 'Paket Jelajah Alam Sehari',
    tagline: 'Paling diminati keluarga & rombongan sahabat',
    duration: '08.00 – 15.30 WIB (1 Hari)',
    minPax: 2,
    pricePerPax: 125000,
    categoryLabel: 'Wisata Sehari',
    popular: true,
    image: '/src/assets/images/destinasi_curug_asri_1794886802026.jpg',
    summary:
      'Trekking santai melintasi pematang sawah terasering, berenang atau berfoto di Curug Pelangi, dan makan siang liwetan khas desa.',
    includes: [
      'Tiket masuk seluruh destinasi wisata desa',
      'Pemandu lokal ramah dari Pokdarwis desa',
      'Minuman selamat datang wedang jahe hangat',
      'Makan siang Nasi Liwet komplit di Pendopo',
      'Dokumentasi foto dasar & asuransi wisata',
    ],
    itinerary: [
      { time: '08.00', activity: 'Penyambutan di Pendopo Utama & wedang jahe hangat' },
      { time: '08.45', activity: 'Jalan santai menyusuri terasering sawah & foto pagi' },
      { time: '10.15', activity: 'Menikmati kesegaran Air Terjun Curug Pelangi' },
      { time: '12.30', activity: 'Makan siang Nasi Liwet bersama di saung bambu' },
      { time: '14.00', activity: 'Belajar seduh kopi desa & belanja oleh-oleh UMKM' },
    ],
  },
  {
    id: 'paket-agrowisata-kopi',
    name: 'Paket Agrowisata Kopi & Sawah',
    tagline: 'Cocok untuk pecinta kopi dan aktivitas luar ruang',
    duration: '07.30 – 13.00 WIB (Setengah Hari)',
    minPax: 2,
    pricePerPax: 95000,
    categoryLabel: 'Agrowisata',
    image: '/src/assets/images/destinasi_kebun_kopi_1794886802209.jpg',
    summary:
      'Menyusuri kebun kopi Arabika lereng gunung, ikut memetik buah kopi, melihat sangrai tradisional, dan mencicipi kudapan desa.',
    includes: [
      'Tiket masuk Kebun Kopi & Terasering',
      'Pendampingan langsung petani kopi desa',
      'Sesi sangrai & seduh manual 2 varian kopi',
      'Jajanan pasar tradisional & singkong keju hangat',
      'Oleh-oleh 100g kopi bubuk Lereng Asri',
    ],
    itinerary: [
      { time: '07.30', activity: 'Berkumpul di Pendopo & naik menuju Kebun Kopi Utara' },
      { time: '08.15', activity: 'Tur kebun, mengenal varietas kopi & petik buah matang' },
      { time: '10.00', activity: 'Praktik sangrai tembikar dan seduh kopi bersama petani' },
      { time: '11.30', activity: 'Santap jajanan desa di dek pandang lembah berkabut' },
    ],
  },
  {
    id: 'paket-homestay-2h1m',
    name: 'Paket Menginap Saung Bambu 2H1M',
    tagline: 'Istirahat tenang merasakan hangatnya malam pedesaan',
    duration: '2 Hari 1 Malam',
    minPax: 2,
    pricePerPax: 340000,
    categoryLabel: 'Menginap + Tur',
    popular: true,
    image: '/src/assets/images/paket_homestay_bambu_1794886802561.jpg',
    summary:
      'Menginap di pondok kayu-bambu yang hangat lengkap dengan makan malam tradisional, api unggun ringan, trekking fajar, dan wisata curug.',
    includes: [
      '1 malam di Homestay Saung Bambu (air hangat & Wi-Fi)',
      '3x makan khas desa (malam, sarapan, makan siang)',
      'Trekking matahari terbit Bukit Fajar & Curug Pelangi',
      'Sesi malam wedang ronde & jagung bakar',
      'Pemandu lokal penuh selama menginap',
    ],
    itinerary: [
      { time: 'Hari 1 · 14.00', activity: 'Check-in homestay & teh sore di beranda taman' },
      { time: 'Hari 1 · 16.00', activity: 'Jalan sore ke Kebun Kopi & suasana senja desa' },
      { time: 'Hari 1 · 19.00', activity: 'Makan malam tradisional & ramah tamah warga' },
      { time: 'Hari 2 · 05.45', activity: 'Trekking fajar Bukit Fajar & sarapan pagi hangat' },
      { time: 'Hari 2 · 09.00', activity: 'Jelajah Curug Pelangi hingga persiapan pulang' },
    ],
  },
  {
    id: 'paket-edukasi-keluarga',
    name: 'Paket Edukasi Anak & Rombongan',
    tagline: 'Pengalaman belajar alam & budaya yang seru untuk siswa/keluarga',
    duration: '08.30 – 14.30 WIB (Minimal 10 orang)',
    minPax: 10,
    pricePerPax: 85000,
    categoryLabel: 'Edukasi & Grup',
    image: '/src/assets/images/galeri_kuliner_desa_1794886803697.jpg',
    summary:
      'Program khusus rombongan sekolah, komunitas, atau keluarga besar: belajar menanam padi, membuat kerajinan bambu, dan permainan tradisional.',
    includes: [
      'Pemandu edukasi berpengalaman & ramah anak',
      'Praktik tanam padi atau pembuatan ecoprint daun',
      'Permainan tradisional (egrang, bakiak, dakon)',
      'Makan siang kotak daun pisang & air mineral isi ulang',
      'Sound system & aula Pendopo untuk kegiatan grup',
    ],
    itinerary: [
      { time: '08.30', activity: 'Penerimaan rombongan & permainan pemecah suasana' },
      { time: '09.30', activity: 'Tur edukasi sawah: mengenal irigasi & tanam bibit padi' },
      { time: '11.00', activity: 'Lokakarya membatik ecoprint daun atau anyaman bambu' },
      { time: '12.30', activity: 'Makan siang bersama & sesi berbagi kesan di Pendopo' },
    ],
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Kabut Pagi di Terasering Lereng Asri',
    location: 'Bukit Fajar · 06.15 WIB',
    caption: 'Sinar matahari keemasan menyapa pematang sawah dan atap pendopo kampung yang masih diselimuti embun pagi.',
    image: '/src/assets/images/hero_lereng_asri_1794886801019.jpg',
    featured: true,
  },
  {
    id: 'gal-2',
    title: 'Jembatan Bambu Curug Pelangi',
    location: 'Lembah Timur Desa',
    caption: 'Air terjun alami dengan kolam hijau toska dan jembatan bambu yang menjadi spot favorit wisatawan.',
    image: '/src/assets/images/destinasi_curug_asri_1794886802026.jpg',
  },
  {
    id: 'gal-3',
    title: 'Panen Kopi di Ketinggian 980 mdpl',
    location: 'Kebun Kopi Utara',
    caption: 'Wisatawan berinteraksi langsung dengan petani lokal memetik ceri kopi merah di tengah lembah hijau.',
    image: '/src/assets/images/destinasi_kebun_kopi_1794886802209.jpg',
  },
  {
    id: 'gal-4',
    title: 'Kehangatan Saung Homestay Bambu',
    location: 'Kampung Barat',
    caption: 'Lampu temaram di beranda pondok kayu jati yang dikelilingi taman tropis sejuk dan tenang.',
    image: '/src/assets/images/paket_homestay_bambu_1794886802561.jpg',
  },
  {
    id: 'gal-5',
    title: 'Jamuan Nasi Liwet Bersama Warga',
    location: 'Pendopo Kuliner Ndeso',
    caption: 'Hidangan hangat beralas daun pisang dengan lauk ikan bakar, lalapan segar, dan wedang jahe rempah.',
    image: '/src/assets/images/galeri_kuliner_desa_1794886803697.jpg',
  },
];

export const MAP_LANDMARKS: MapLandmark[] = [
  {
    id: 'pendopo-utama',
    name: 'Pendopo Utama & Area Parkir',
    category: 'Titik Kumpul',
    walkFromGate: '0 menit (Pusat Kedatangan)',
    elevation: '950 mdpl',
    description: 'Loket tiket resmi Pokdarwis, area parkir luas (mobil & bus medium), mushola, dan toilet bersih.',
    coords: { x: 46, y: 68 },
    destinationId: 'pendopo-kuliner-budaya',
  },
  {
    id: 'pin-bukit-fajar',
    name: 'Terasering & Bukit Fajar',
    category: 'Panorama Alam',
    walkFromGate: '5 menit jalan kaki',
    elevation: '965 mdpl',
    description: 'Spot foto sawah terasering dengan latar gunung dan jalur jalan santai ramah keluarga.',
    coords: { x: 52, y: 48 },
    destinationId: 'bukit-panorama-sawah',
  },
  {
    id: 'pin-kebun-kopi',
    name: 'Kebun Kopi & Dek Pandang',
    category: 'Agrowisata',
    walkFromGate: '10 menit jalan kaki',
    elevation: '985 mdpl',
    description: 'Area kebun kopi Arabika organik dan gubuk sangrai kopi tradisional.',
    coords: { x: 30, y: 28 },
    destinationId: 'kebun-kopi-terasering',
  },
  {
    id: 'pin-curug',
    name: 'Air Terjun Curug Pelangi',
    category: 'Wisata Air',
    walkFromGate: '15 menit trekking ringan',
    elevation: '910 mdpl',
    description: 'Kolam alami jernih dan jembatan bambu di tengah hutan pakis yang rindang.',
    coords: { x: 76, y: 34 },
    destinationId: 'curug-pelangi',
  },
  {
    id: 'pin-homestay',
    name: 'Kampung Homestay Saung Bambu',
    category: 'Penginapan',
    walkFromGate: '6 menit jalan kaki',
    elevation: '955 mdpl',
    description: 'Deretan pondok kayu-bambu tenang di sisi barat desa dengan taman bunga tropis.',
    coords: { x: 24, y: 60 },
    destinationId: 'kampung-saung-bambu',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Ibu Ratna Kusuma',
    origin: 'Yogyakarta · Wisata Keluarga (6 orang)',
    packageTaken: 'Paket Jelajah Alam Sehari',
    rating: 5,
    quote:
      'Jalur ke air terjun sangat aman untuk orang tua dan anak-anak kami. Pemandunya sabar membantu, dan nasi liwet di pendoponya bikin semua anggota keluarga tambah porsi.',
  },
  {
    id: 'testi-2',
    name: 'Budi Santoso',
    origin: 'Semarang · Komunitas Sepeda & Fotografi',
    packageTaken: 'Paket Menginap Saung Bambu 2H1M',
    rating: 5,
    quote:
      'Pagi hari bangun di saung bambu langsung disambut kabut tipis dan kopi tubruk panas. Harganya jelas dari awal lewat WhatsApp, tidak ada biaya dadakan sama sekali.',
  },
  {
    id: 'testi-3',
    name: 'Siti Aminah, S.Pd.',
    origin: 'Salatiga · Rombongan Studi Alam SD',
    packageTaken: 'Paket Edukasi Anak & Rombongan',
    rating: 5,
    quote:
      'Anak-anak senang sekali belajar menanam padi dan bermain egrang di alam terbuka. Parkiran busnya aman dan fasilitas kamar mandinya bersih terawat.',
  },
];

export function formatRupiah(amount: number): string {
  if (amount === 0) return 'Gratis Masuk Area';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
