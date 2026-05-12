import { NewsCard } from './NewsCard';
import { NewsArticle } from '@/constants/news';

interface NewsGridSectionProps {
    title: string;
    articles: NewsArticle[];
    showViewMore?: boolean; // Opsional: Tombol view more untuk All News
}

export const NewsGridSection = ({ title, articles, showViewMore = false }: NewsGridSectionProps) => {
    return (
        <section className="w-full bg-white pb-16 pt-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            
            {/* Header dengan Garis Bawah Teal yang Panjang */}
            <div className="mb-10 w-full border-b-[3px] border-[#00c2a8] pb-3">
            <h2 className="text-3xl font-extrabold text-[#00c2a8]">
                {title}
            </h2>
            </div>

            {/* Grid Kartu Berita */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((article) => (
                <NewsCard key={article.id} article={article} />
            ))}
            </div>

            {/* Tombol View More (Jika dipanggil) */}
            {showViewMore && (
            <div className="mt-14 flex justify-center">
                <button className="rounded-full border-2 border-[#00c2a8] px-12 py-3 font-semibold text-[#00c2a8] transition-colors hover:bg-[#00c2a8] hover:text-white">
                View More
                </button>
            </div>
            )}

        </div>
        </section>
    );
};