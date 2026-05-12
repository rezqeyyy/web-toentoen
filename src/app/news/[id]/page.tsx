import { notFound } from 'next/navigation';
import { NEWS_DATA } from '@/constants/news';

// 1. Tipe params pakai Promise (Wajib di Next.js 15+)
interface NewsDetailPageProps {
  params: Promise<{ id: string }>;
}

// 2. Wajib ada kata 'async' di sini
export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  // 3. Wajib ada 'await' di sini sebelum dipakai
  const resolvedParams = await params;
  
  // Sekarang baru boleh dipanggil: resolvedParams.id
  const article = NEWS_DATA.find((news) => news.id === resolvedParams.id);

  if (!article) {
    notFound();
  }

  return (
    <main className="w-full bg-white pb-24 pt-8 lg:pt-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <div className="mb-16 flex flex-col overflow-hidden rounded-3xl bg-[#0a423c] shadow-lg md:flex-row md:items-stretch">
          
          {/* Gambar Kiri (Sudah dibikin full height) */}
          <div className="relative w-full min-h-[300px] md:w-[45%]">
            <img 
              src={article.image} 
              alt={article.title} 
              className="absolute inset-0 h-full w-full object-cover" 
            />
          </div>

          {/* Teks Kanan */}
          <div className="flex w-full flex-col justify-center p-8 md:w-[55%] md:p-12 lg:p-16">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>
            <p className="mb-12 text-base text-gray-300 sm:text-lg">
              {article.desc}
            </p>
            <div className="mt-auto text-sm font-medium text-white/80">
              {article.date} | {article.readTime}
            </div>
          </div>
          
        </div>

        {/* CONTENT SECTION */}
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col gap-6 text-base leading-relaxed text-gray-700 sm:text-lg">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-[40%]">
            <div className="sticky top-28 overflow-hidden rounded-3xl shadow-md">
              <img 
                src={article.image} 
                alt={`${article.title} content detail`} 
                className="h-auto w-full object-cover" 
              />
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}