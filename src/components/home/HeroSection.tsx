import Link from "next/link";
import { PhoneMockups } from "./hero/PhoneMockups";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const AppleIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 3.53c.63-.78 1.07-1.85.95-2.93-.93.04-2.07.63-2.73 1.41-.58.68-1.1 1.77-.96 2.83 1.04.08 2.11-.53 2.74-1.31z" />
    </svg>
);

const GooglePlayIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
        <path
            fill="#00c2a8"
            d="M3.6 1.7c-.4.4-.6 1-.6 1.7v17.2c0 .7.2 1.3.6 1.7l10.3-10.3L3.6 1.7Z"
        />
        <path
            fill="#fff"
            d="m17.7 8.1-3.8 3.9 3.8 3.9 4.6-2.6c1.3-.7 1.3-2.6 0-3.3l-4.6-2.9Z"
        />
        <path
            fill="#fff"
            opacity=".7"
            d="M3.6 22.3c.6.6 1.5.7 2.3.2l11.8-6.7-3.8-3.8L3.6 22.3Z"
        />
        <path
            fill="#fff"
            opacity=".85"
            d="M17.7 8.1 5.9 1.5C5.1 1 4.2 1.1 3.6 1.7l10.3 10.3 3.8-3.9Z"
        />
    </svg>
);

export const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden bg-[#1a1d22]">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
            <ImageWithFallback
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80&fit=crop"
            alt=""
            fallback="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80&fit=crop"
            className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Teks */}
            <div className="flex flex-col lg:col-span-6">
                <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[56px]">
                Temukan Apapun di
                <br />
                Sekitarmu bersama
                <br />
                <span className="text-[#00c2a8]">Toentoen</span>
                </h1>
                <p className="mb-10 max-w-md text-sm leading-relaxed text-gray-200/90 sm:text-base">
                Hubungkan kebutuhanmu dengan berbagai bisnis lokal terdekat dalam
                radius 1km hingga 50km. Cepat, tepat, dan mudah digunakan.
                </p>

                {/* CTA */}
                <div className="flex flex-wrap gap-3">
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-[#00c2a8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#00a892]"
                >
                    <AppleIcon />
                    <span>App Store</span>
                </Link>
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/20"
                >
                    <GooglePlayIcon />
                    <span>Google Play</span>
                </Link>
                </div>
            </div>

            {/* Mockup HP */}
            <div className="relative flex items-center justify-center lg:col-span-6">
                <PhoneMockups />
            </div>
            </div>
        </div>
        </section>
    );
};
