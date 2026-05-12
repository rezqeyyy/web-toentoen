export const NewsHero = () => {
  return (
    <section className="relative flex h-[350px] w-full items-center justify-center overflow-hidden bg-gray-900 md:h-[400px]">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://placehold.co/1920x600/334155/ffffff?text=Koran+Background" 
          alt="News Hero Background" 
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
      </div>

      {/* Teks Konten */}
      <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          News about Toentoen
        </h1>
        <p className="mx-auto max-w-3xl text-base text-gray-200 sm:text-lg">
          Transparansi adalah kunci kepercayaan. Ikuti setiap langkah, pencapaian, dan pembaruan resmi kami dalam membangun masa depan yang lebih baik.
        </p>
      </div>
    </section>
  );
};