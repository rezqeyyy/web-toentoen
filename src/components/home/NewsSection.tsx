"use client";

import { useRef } from "react";
import Link from "next/link";
import { NEWS_ARTICLES, type Article } from "@/constants/home";

const ChevronIcon = ({ dir }: { dir: "left" | "right" }) => (
  <svg
    className="h-5 w-5 stroke-gray-700"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {dir === "left" ? <path d="m15 6-6 6 6 6" /> : <path d="m9 6 6 6-6 6" />}
  </svg>
);

const placeholderFor = (article: Article) =>
  `https://placehold.co/600x400/${
    article.category === "EVENT"
      ? "fbbf24"
      : article.category === "TIPS"
        ? "60a5fa"
        : "0d4f47"
  }/ffffff?text=${encodeURIComponent(article.title)}`;

const ArticleCard = ({ article }: { article: Article }) => (
  <article className="flex w-[260px] flex-shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
    <div className="relative h-40 overflow-hidden bg-gray-100">
      <img
        src={article.image}
        alt={article.title}
        className="h-full w-full object-cover"
        onError={(e) => {
          e.currentTarget.src = placeholderFor(article);
        }}
      />
      <span className="absolute left-3 top-3 rounded bg-[#00c2a8] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
        {article.category}
      </span>
    </div>
    <div className="flex flex-1 flex-col p-4">
      <h3 className="mb-1.5 text-sm font-bold leading-snug text-gray-900">
        {article.title}
      </h3>
      <p className="mb-4 line-clamp-3 text-[11px] leading-relaxed text-gray-500">
        {article.excerpt}
      </p>
      <Link
        href="/news"
        className="mt-auto inline-flex items-center justify-center rounded-full border-2 border-[#00c2a8] px-3 py-1.5 text-[11px] font-bold text-[#00c2a8] transition-colors hover:bg-[#00c2a8] hover:text-white"
      >
        Baca Selengkapnya
      </Link>
    </div>
  </article>
);

export const NewsSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const offset = track.clientWidth * 0.8;
    track.scrollBy({
      left: dir === "left" ? -offset : offset,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-12 lg:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 md:text-3xl">
            Berita & Artikel
          </h2>
          <p className="mt-1 text-xs text-gray-500">
            Kabar terbaru dari ekosistem Toentoen
          </p>
        </div>

        <div className="relative">
          {/* Prev */}
          <button
            type="button"
            aria-label="Sebelumnya"
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-100 transition hover:bg-gray-50"
          >
            <ChevronIcon dir="left" />
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {NEWS_ARTICLES.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Next */}
          <button
            type="button"
            aria-label="Selanjutnya"
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-gray-100 transition hover:bg-gray-50"
          >
            <ChevronIcon dir="right" />
          </button>
        </div>
      </div>
    </section>
  );
};
