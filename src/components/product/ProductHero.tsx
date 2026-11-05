import Link from 'next/link';

const AppleIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 3.53c.63-.78 1.07-1.85.95-2.93-.93.04-2.07.63-2.73 1.41-.58.68-1.1 1.77-.96 2.83 1.04.08 2.11-.53 2.74-1.31z" />
    </svg>
);

const GooglePlayIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path fill="#00c2a8" d="M3.6 1.7c-.4.4-.6 1-.6 1.7v17.2c0 .7.2 1.3.6 1.7l10.3-10.3L3.6 1.7Z" />
        <path fill="#fff" d="m17.7 8.1-3.8 3.9 3.8 3.9 4.6-2.6c1.3-.7 1.3-2.6 0-3.3l-4.6-2.9Z" />
        <path fill="#fff" opacity=".7" d="M3.6 22.3c.6.6 1.5.7 2.3.2l11.8-6.7-3.8-3.8L3.6 22.3Z" />
        <path fill="#fff" opacity=".85" d="M17.7 8.1 5.9 1.5C5.1 1 4.2 1.1 3.6 1.7l10.3 10.3 3.8-3.9Z" />
    </svg>
);

export const ProductHero = () => {
    return (
        <section className="relative flex min-h-[500px] w-full items-center overflow-hidden bg-gray-900 py-20">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
            <img 
            src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=1920&q=80&fit=crop" 
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
                <AppleIcon />
                <span>App Store</span>
                </Link>
                <Link href="#" className="flex items-center gap-2 rounded-full bg-white/20 px-8 py-3.5 font-bold text-white backdrop-blur-md transition hover:bg-white/30">
                <GooglePlayIcon />
                <span>Google Play</span>
                </Link>
            </div>
            </div>
        </div>
        </section>
    );
};