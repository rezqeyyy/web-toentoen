export type NewsArticle = {
  id: string;
  type: string;
  title: string;
  desc: string;
  image: string;
  date: string;
  readTime: string;
  content: string[];
};

// Konten panjang untuk halaman detail (biar nggak menuh-menuhin file, kita pakai 1 template text)
const DUMMY_CONTENT = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed erat sed sem finibus scelerisque. In sit amet maximus justo. Aliquam id nisl ante. In congue porttitor metus, ac facilisis neque iaculis vitae.",
  "Nullam gravida purus a nisl convallis, vel gravida justo scelerisque. Vivamus quis magna at mi hendrerit cursus. Mauris sed ultrices nisl, sed finibus enim.",
  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam at varius massa, quis sodales urna."
];

// Data ditulis SATU-SATU biar beda semua
export const NEWS_DATA: NewsArticle[] = [
  // --- RECENT NEWS (4 Berita Pertama) ---
  {
    id: 'news-1',
    type: 'UPDATE',
    title: 'Fitur Sinyal Permintaan Kini Makin Akurat',
    desc: 'Pembaruan terbaru algoritma kami memungkinkan merchant merespons permintaan dalam hitungan detik.',
    image: '../assets/image.png',
    date: 'April 27, 2026',
    readTime: '5 mins read',
    content: DUMMY_CONTENT,
  },
  {
    id: 'news-2',
    type: 'EVENT',
    title: 'Toentoen Hadir di Festival Kuliner Jakarta',
    desc: 'Kunjungi booth kami dan dapatkan berbagai promo menarik dari merchant lokal pilihan di acara tahunan ini.',
    image: 'https://placehold.co/600x400/00c2a8/ffffff?text=Festival+Kuliner',
    date: 'May 02, 2026',
    readTime: '3 mins read',
    content: DUMMY_CONTENT,
  },
  {
    id: 'news-3',
    type: 'TIPS',
    title: 'Cara Efektif Menarik Pelanggan Sekitar',
    desc: 'Strategi untuk para merchant lokal dalam mengoptimalkan visibilitas di aplikasi Toentoen.',
    image: 'https://placehold.co/600x400/1e293b/ffffff?text=Tips+Merchant',
    date: 'May 10, 2026',
    readTime: '4 mins read',
    content: DUMMY_CONTENT,
  },
  {
    id: 'news-4',
    type: 'UPDATE',
    title: 'Tampilan Baru Dashboard Merchant',
    desc: 'Kami merombak total antarmuka dashboard agar lebih mudah digunakan di layar handphone.',
    image: 'https://placehold.co/600x400/334155/ffffff?text=Dashboard+Baru',
    date: 'May 15, 2026',
    readTime: '6 mins read',
    content: DUMMY_CONTENT,
  },

  // --- ALL NEWS (4 Berita Selanjutnya) ---
  {
    id: 'news-5',
    type: 'PROMO',
    title: 'Diskon Spesial Hari Kemerdekaan',
    desc: 'Nikmati potongan harga untuk setiap transaksi menggunakan layanan antar lokal dari merchant terpilih.',
    image: 'https://placehold.co/600x400/dc2626/ffffff?text=Promo+Agustus',
    date: 'August 01, 2026',
    readTime: '2 mins read',
    content: DUMMY_CONTENT,
  },
  {
    id: 'news-6',
    type: 'STORY',
    title: 'Kisah Sukses: Warung Bu Ani Naik Kelas',
    desc: 'Bagaimana sebuah warung kecil di sudut kota berhasil meningkatkan omzet 300% berkat aplikasi Toentoen.',
    image: 'https://placehold.co/600x400/f59e0b/ffffff?text=Kisah+Sukses',
    date: 'September 12, 2026',
    readTime: '7 mins read',
    content: DUMMY_CONTENT,
  },
  {
    id: 'news-7',
    type: 'UPDATE',
    title: 'Integrasi Pembayaran Digital Makin Lengkap',
    desc: 'Kini Toentoen mendukung lebih dari 10 metode pembayaran lokal untuk memudahkan transaksi pengguna.',
    image: 'https://placehold.co/600x400/2563eb/ffffff?text=Payment+Update',
    date: 'October 05, 2026',
    readTime: '4 mins read',
    content: DUMMY_CONTENT,
  },
  {
    id: 'news-8',
    type: 'EVENT',
    title: 'Webinar: Strategi Bisnis di Era Digital',
    desc: 'Ikuti sesi berbagi ilmu bersama pakar industri mengenai cara bertahan dan berkembang untuk UMKM.',
    image: 'https://placehold.co/600x400/7c3aed/ffffff?text=Webinar+UMKM',
    date: 'November 20, 2026',
    readTime: '3 mins read',
    content: DUMMY_CONTENT,
  },
];