import Link from 'next/link';

export const ProductHero = () => {
    return (
        <section className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-gray-900 py-20">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
            <img 
            src="https://placehold.co/1920x800/1e293b/ffffff?text=Orang+Pegang+HP" 
            alt="Product Hero" 
            className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Solusi Cerdas Menemukan Kebutuhan Lokal
            </h1>
            <p className="mb-10 text-lg text-gray-200">
                Toentoen bridges the gap between you and local merchants. Broadcast your needs, discover hidden gems, and get personalized offers directly from businesses around you.
            </p>
            <div className="flex flex-wrap gap-4">
                <Link href="#" className="flex items-center gap-2 rounded-full bg-[#00c2a8] px-8 py-3.5 font-bold text-white transition hover:bg-[#00a892]">
                App Store
                </Link>
                <Link href="#" className="flex items-center gap-2 rounded-full bg-white/20 px-8 py-3.5 font-bold text-white backdrop-blur-md transition hover:bg-white/30">
                Google Play
                </Link>
            </div>
            </div>
        </div>
        </section>
    );
};