/**
 * App constants for RaudhatulKlinik landing page
 */

export const APP_NAME = 'RaudhatulKlinik';
export const APP_VERSION = '1.0.0';
export const GITHUB_URL = 'https://github.com/raudhatul-klinik';

export const NAV_LINKS = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Fitur', href: '#features' },
  { label: 'Screenshot', href: '#screenshots' },
  { label: 'Teknologi', href: '#tech' },
  { label: 'Tentang', href: '#about' },
];

export const FEATURES = [
  {
    icon: 'MousePointerClick',
    title: 'Ambil Antrian 1 Klik',
    desc: 'Pasien cukup buka aplikasi dan tap sekali untuk mendapatkan nomor antrian digital.',
    color: 'bg-blue-500',
  },
  {
    icon: 'QrCode',
    title: 'QR Digital Ticket',
    desc: 'Setiap antrian dilengkapi QR code unik yang bisa di-scan langsung di Klinik.',
    color: 'bg-indigo-500',
  },
  {
    icon: 'Users',
    title: 'Multi Role System',
    desc: 'Mendukung role Pasien, Admin, dan Petugas dengan akses berbeda.',
    color: 'bg-blue-600',
  },
  {
    icon: 'LayoutDashboard',
    title: 'Dashboard Realtime',
    desc: 'Pantau antrian secara langsung dengan update otomatis tanpa refresh halaman.',
    color: 'bg-sky-500',
  },
  {
    icon: 'BarChart3',
    title: 'Design Modern',
    desc: 'Menampilkan design yang elegant, startup style, Carousel Slider(gambar otomatis berganti).',
    color: 'bg-blue-700',
  },
  {
    icon: 'WifiOff',
    title: 'Offline Mode',
    desc: 'Tetap berfungsi meski tanpa koneksi internet berkat penyimpanan lokal SQLite.',
    color: 'bg-indigo-600',
  },
  {
    icon: 'Bell',
    title: 'Notifikasi Otomatis',
    desc: 'Pasien mendapat notifikasi saat di panggil oleh petugas sehingga tidak perlu menunggu.',
    color: 'bg-blue-500',
  },
  {
    icon: 'Smartphone',
    title: 'Responsive Mobile',
    desc: 'Dioptimalkan untuk semua ukuran layar smartphone Android dengan UI yang nyaman.',
    color: 'bg-sky-600',
  },
];

export const TECH_STACK = [
  { name: 'Flutter', desc: 'Mobile Framework', color: 'bg-blue-100 text-blue-800' },
  { name: 'SQLite',  desc: 'Local Database', color: 'bg-indigo-100 text-indigo-800' },
  { name: 'Framer Motion' , desc: 'Animations', color: 'bg-indigo-100 text-indigo-800' },
];

export const WHY_CHOOSE = [
  { title: 'Gratis', desc: 'Tidak ada biaya langganan. Download dan gunakan selamanya.' },
  { title: 'Offline', desc: 'Bekerja tanpa internet. Data tersimpan aman di perangkat.' },
  { title: 'Cepat', desc: 'Antrian dalam hitungan detik. Tidak ada proses yang lambat.' },
  { title: 'Modern', desc: 'UI premium dengan desain terkini yang nyaman digunakan.' },
  { title: 'Multi Role', desc: 'Satu aplikasi untuk semua kebutuhan klinik Anda.' },
  { title: 'UI Premium', desc: 'Tampilan profesional yang meningkatkan kepercayaan pasien.' },
];

export const SCREENSHOTS = [
  {
    title: 'Dashboard Pasien',
    desc: 'Tampilan utama untuk pasien mengambil antrian',
    bg: 'from-blue-500 to-blue-700',
    image: '/images/DashboardPasien.jpg',
  },
  {
    title: 'Dashboard Petugas',
    desc: 'Panel kontrol untuk memanggil pasien dengan QR-Code',
    bg: 'from-indigo-500 to-indigo-700',
    image: '/images/DashboardPetugas.jpg',
  },
  {
    title: 'QR Ticket',
    desc: 'Tiket digital dengan QR code unik',
    bg: 'from-sky-500 to-blue-600',
    image: '/images/QrTicket.jpg',
  },
  {
    title: 'Dashboard Admin',
    desc: 'Menampilkan keseluruhan operasional klinik',
    bg: 'from-blue-600 to-indigo-600',
    image: '/images/DasboardAdmin.jpg',
  },
  {
    title: 'Pasien Tracking',
    desc: 'Pantau posisi antrian secara realtime dan pantau dokter yang bertugas',
    bg: 'from-blue-400 to-blue-600',
    image: '/images/PasienTracking.jpg',
  },
];
