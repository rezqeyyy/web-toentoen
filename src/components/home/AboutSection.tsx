import Link from "next/link";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export const AboutSection = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gambar peta */}
          <div className="relative flex h-[260px] w-full items-center justify-center overflow-hidden rounded-3xl border border-gray-100 bg-[#f8fbfa] p-4 shadow-sm sm:h-[320px]">
            <ImageWithFallback
              src="/images/indonesia-map.png"
              alt="Peta Indonesia Toentoen"
              fallback="/images/indonesia-map.png"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Teks */}
          <div className="flex flex-col items-start">
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-gray-900 lg:text-[44px]">
              About US
            </h2>
            <p className="mb-7 max-w-md text-sm leading-relaxed text-gray-500 sm:text-base">
              Toentoen adalah jembatan digital yang menghubungkan kebutuhan
              masyarakat dengan potensi bisnis lokal melalui teknologi berbasis
              lokasi yang cerdas.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center rounded-full border-2 border-[#00c2a8] px-6 py-2.5 text-sm font-bold text-[#00c2a8] transition-colors hover:bg-[#00c2a8] hover:text-white"
            >
              Cari Tahu Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
