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
        image: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=80&fit=crop',
        date: 'April 27, 2026',
        readTime: '5 mins read',
        content: DUMMY_CONTENT,
    },
    {
        id: 'news-2',
        type: 'EVENT',
        title: 'Toentoen Hadir di Festival Kuliner Jakarta',
        desc: 'Kunjungi booth kami dan dapatkan berbagai promo menarik dari merchant lokal pilihan di acara tahunan ini.',
        image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&fit=crop',
        date: 'May 02, 2026',
        readTime: '3 mins read',
        content: DUMMY_CONTENT,
    },
    {
        id: 'news-3',
        type: 'TIPS',
        title: 'Cara Efektif Menarik Pelanggan Sekitar',
        desc: 'Strategi untuk para merchant lokal dalam mengoptimalkan visibilitas di aplikasi Toentoen.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&fit=crop',
        date: 'May 10, 2026',
        readTime: '4 mins read',
        content: DUMMY_CONTENT,
    },
    {
        id: 'news-4',
        type: 'UPDATE',
        title: 'Tampilan Baru Dashboard Merchant',
        desc: 'Kami merombak total antarmuka dashboard agar lebih mudah digunakan di layar handphone.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop',
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
        image: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?w=600&q=80&fit=crop',
        date: 'August 01, 2026',
        readTime: '2 mins read',
        content: DUMMY_CONTENT,
    },
    {
        id: 'news-6',
        type: 'STORY',
        title: 'Kisah Sukses: Warung Bu Ani Naik Kelas',
        desc: 'Bagaimana sebuah warung kecil di sudut kota berhasil meningkatkan omzet 300% berkat aplikasi Toentoen.',
        image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80&fit=crop',
        date: 'September 12, 2026',
        readTime: '7 mins read',
        content: DUMMY_CONTENT,
    },
    {
        id: 'news-7',
        type: 'UPDATE',
        title: 'Integrasi Pembayaran Digital Makin Lengkap',
        desc: 'Kini Toentoen mendukung lebih dari 10 metode pembayaran lokal untuk memudahkan transaksi pengguna.',
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80&fit=crop',
        date: 'October 05, 2026',
        readTime: '4 mins read',
        content: DUMMY_CONTENT,
    },
    {
        id: 'news-8',
        type: 'EVENT',
        title: 'Webinar: Strategi Bisnis di Era Digital',
        desc: 'Ikuti sesi berbagi ilmu bersama pakar industri mengenai cara bertahan dan berkembang untuk UMKM.',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80&fit=crop',
        date: 'November 20, 2026',
        readTime: '3 mins read',
        content: DUMMY_CONTENT,
    },
];