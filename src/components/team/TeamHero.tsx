import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export const TeamHero = () => {
  return (
    <section className="relative w-full">
      <div className="relative h-[260px] w-full overflow-hidden sm:h-[300px] md:h-[340px]">
        <ImageWithFallback
          src="/images/team-hero.jpg"
          alt="Tim Toentoen"
          fallback="https://placehold.co/1920x600/0d4f47/ffffff?text=Our+Team"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-3 text-3xl font-extrabold tracking-[0.25em] text-white sm:text-4xl md:text-5xl">
            OUR TEAM
          </h1>
          <p className="max-w-xl text-[11px] italic leading-relaxed text-white/85 sm:text-xs md:text-sm">
            Individu memberikan bakat, tetapi tim memberikan kemenangan. Kami
            adalah kumpulan ide yang berbeda, bekerja menuju satu tujuan yang
            sama: kesuksesan Anda.
          </p>
        </div>
      </div>
    </section>
  );
};
