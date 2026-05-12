export const AboutHero = () => {
    return (
        <section className="relative flex h-[400px] w-full items-center justify-center overflow-hidden bg-gray-900 md:h-[450px]">
            {/* Background Image dengan Overlay Gelap */}
            <div className="absolute inset-0 z-0">
                <img 
                src="https://placehold.co/1920x600/1e293b/ffffff?text=Tim+Toentoen" 
                alt="Toentoen Team" 
                className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
            </div>

            {/* Konten Teks */}
            <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
                <h1 className="mb-6 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                About US
                </h1>
                <p className="mx-auto max-w-3xl text-base text-gray-200 sm:text-lg">
                Toentoen adalah jembatan digital yang berdedikasi untuk memberikan solusi yang inovatif dan terpercaya. Kami percaya bahwa kualitas bukan sekadar hasil akhir, melainkan sebuah proses yang dibangun dengan integritas dan dedikasi.
                </p>
            </div>
        </section>
    );
};