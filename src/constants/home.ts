export type FeatureIcon = "pin" | "signal" | "bolt" | "compass";

export type Feature = {
    id: number;
    icon: FeatureIcon;
    title: string;
    description: string;
};

export const FEATURES_DATA: Feature[] = [
    {
        id: 1,
        icon: "pin",
        title: "Penemuan Lokal",
        description:
        "Temukan tempat paling aktif di wilayah Anda dengan peta panas waktu nyata dan data lokasi pilihan.",
    },
    {
        id: 2,
        icon: "signal",
        title: "Sinyal Permintaan",
        description:
        "Jelajahi berbagai layanan, restoran, dan toko di sekitarmu menggunakan tampilan peta interaktif yang akurat.",
    },
    {
        id: 3,
        icon: "bolt",
        title: "Koneksi Instan",
        description:
        "Seamlessly book, order, or navigate to locations with a single tap from the map interface.",
    },
    {
        id: 4,
        icon: "compass",
        title: "Eksplorasi Lokal",
        description:
        "Jelajahi berbagai layanan dan toko di sekitarmu menggunakan tampilan peta interaktif yang akurat.",
    },
    ];

    export type PlatformCard = {
    id: "user" | "merchant";
    tag: string;
    title: string;
    description: string;
    bullets: string[];
    image: string;
    };

    export const PLATFORM_CARDS: PlatformCard[] = [
    {
        id: "user",
        tag: "User",
        title: "Cari Apapun di Sekitarmu Jadi Lebih Mudah.",
        description:
        "Temukan produk, jasa, dan layanan dari pelaku bisnis lokal terdekat dengan radius 1km hingga 50km. Permudah hidupmu dengan Demand Signal.",
        bullets: [
        "Diskon hingga Rp 0,- Juta",
        "Pemetaan Pencarian Lokal",
        "Sinyal Permintaan (Demand Signal)",
        ],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&fit=crop",
    },
    {
        id: "merchant",
        tag: "Merchant",
        title: "Kelola bisnis mu dalam Genggaman.",
        description:
        "Manajemen toko lebih efektif dan akurat dari pelaku bisnis lokal, gunakan sinyal permintaan dan keluasan jangkauan pelanggan di sekitarmu.",
        bullets: [
        "Manajemen katalog yang mudah",
        "Analitik Kinerja",
        "Respon Sinyal Permintaan",
        ],
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80&fit=crop",
    },
];

export type Article = {
    id: number;
    category: string;
    title: string;
    excerpt: string;
    image: string;
};

export const NEWS_ARTICLES: Article[] = [
    {
        id: 1,
        category: "NEWS",
        title: "Fitur Sinyal Permintaan Kini Makin Akurat",
        excerpt:
        "Pembaruan terbaru algoritma kami memungkinkan rekomendasi menjadi lebih presisi sesuai lokasi pengguna.",
        image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&q=80&fit=crop",
    },
    {
        id: 2,
        category: "EVENT",
        title: "Toentoen Hadir di Festival Kuliner Jakarta",
        excerpt:
        "Kunjungi booth kami dan dapatkan berbagai promo menarik dari merchant lokal pilihan di acara komunitas terbesar tahun ini.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80&fit=crop",
    },
    {
        id: 3,
        category: "TIPS",
        title: "Cara Efektif Menarik Pelanggan Sekitar",
        excerpt:
        "Strategi simple yang bisa merchant lokal terapkan untuk menggandakan visibilitas di aplikasi. Lakukan sekarang!",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80&fit=crop",
    },
    {
        id: 4,
        category: "UPDATE",
        title: "Fitur Sinyal Permintaan Kini Makin Akurat",
        excerpt:
        "Pembaruan terbaru algoritma kami memungkinkan rekomendasi menjadi lebih presisi sesuai lokasi pengguna.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&fit=crop",
    },
    {
        id: 5,
        category: "EVENT",
        title: "Toentoen Hadir di Festival Kuliner Jakarta",
        excerpt:
        "Kunjungi booth kami dan dapatkan berbagai promo menarik dari merchant lokal pilihan di acara komunitas terbesar tahun ini.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80&fit=crop",
    },
];
