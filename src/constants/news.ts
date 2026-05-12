export type NewsArticle = {
    id: string;
    type: string;
    title: string;
    desc: string;
    image: string;
};

// Kita buat 12 data dummy yang sama untuk mengisi grid sesuai desain
export const NEWS_DATA: NewsArticle[] = Array.from({ length: 12 }).map((_, i) => ({
    id: `news-${i + 1}`,
    type: 'UPDATE',
    title: 'Fitur Sinyal Permintaan Kini Makin Akurat',
    desc: 'Pembaruan terbaru algoritma kami memungkinkan merchant merespons permintaan dalam hitungan detik.',
    // Gambar mockup orang pegang HP
    image: 'https://placehold.co/400x300/1e293b/ffffff?text=News+Thumbnail', 
}));