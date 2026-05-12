import Link from 'next/link';
import { NewsArticle } from '@/constants/news';

export const NewsCard = ({ article }: { article: NewsArticle }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <img 
        src={article.image} 
        alt={article.title} 
        className="h-48 w-full object-cover" 
      />
      <div className="flex flex-1 flex-col p-6">
        <span className="mb-4 w-fit rounded-md bg-[#e6f9f6] px-3 py-1 text-[10px] font-bold text-[#00c2a8]">
          {article.type}
        </span>
        <h3 className="mb-2 text-lg font-bold leading-snug text-gray-900 line-clamp-2">
          {article.title}
        </h3>
        <p className="mb-6 flex-1 text-sm text-gray-500 line-clamp-3">
          {article.desc}
        </p>
        <Link 
          href={`/news/${article.id}`} 
          className="w-full rounded-full border-2 border-[#00c2a8] py-2 text-center text-sm font-semibold text-[#00c2a8] transition-colors hover:bg-[#00c2a8] hover:text-white"
        >
          Baca Selengkapnya
        </Link>
      </div>
    </div>
  );
};