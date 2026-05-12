import { NewsHero } from '@/components/news/NewsHero';
import { NewsGridSection } from '@/components/news/NewsGridSection';
import { NEWS_DATA } from '@/constants/news';

export default function NewsPage() {
    // Kita bagi datanya, 4 berita pertama untuk Recent, sisanya untuk All News
    const recentNews = NEWS_DATA.slice(0, 4);
    const allNews = NEWS_DATA.slice(4);

    return (
        <div className="flex w-full flex-col">
        <NewsHero />
        <NewsGridSection title="Recent News" articles={recentNews} />
        <NewsGridSection title="All News" articles={allNews} showViewMore={true} />
        </div>
    );
}